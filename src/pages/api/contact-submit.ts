import type { APIRoute } from 'astro';

export const prerender = false;

const REQUIRED_FIELDS = ['firstName', 'lastName', 'email', 'subject', 'message'];

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

async function verifyRecaptcha(token: string, ip: string | null): Promise<boolean> {
  const secret = import.meta.env.GOOGLE_RECAPTCHA_SECRET_KEY;
  if (!secret) return false;

  const payload = new URLSearchParams({
    secret,
    response: token,
  });
  if (ip) payload.set('remoteip', ip);

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: payload.toString(),
  });

  if (!response.ok) return false;
  const data = await response.json();
  return Boolean(data?.success);
}

async function sendWebhook(url: string, payload: Record<string, string>): Promise<void> {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`);
  }
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    // Honeypot: silently succeed to avoid helping bots tune payloads.
    if (getString(formData, 'bot-field')) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const missing = REQUIRED_FIELDS.filter((field) => !getString(formData, field));
    if (missing.length > 0) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (getString(formData, 'policyConsent') !== 'on') {
      return new Response(JSON.stringify({ error: 'Consent is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const captchaToken = getString(formData, 'g-recaptcha-response');
    if (!captchaToken) {
      return new Response(JSON.stringify({ error: 'CAPTCHA is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const forwardedFor = request.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0]?.trim() : null;
    const captchaOk = await verifyRecaptcha(captchaToken, clientIp);
    if (!captchaOk) {
      return new Response(JSON.stringify({ error: 'CAPTCHA verification failed.' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === 'string') payload[key] = value;
    });

    const webhookUrl = import.meta.env.CONTACT_WEBHOOK_URL as string | undefined;
    if (webhookUrl) {
      await sendWebhook(webhookUrl, payload);
    } else {
      console.warn('CONTACT_WEBHOOK_URL not configured - webhook delivery skipped');
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('contact-submit error', error);
    const message = error instanceof Error && error.message ? error.message : 'Submission failed.';
    return new Response(JSON.stringify({ error: message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
