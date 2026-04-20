export { renderers } from '../../renderers.mjs';

const prerender = false;
const REQUIRED_FIELDS = ["firstName", "lastName", "email", "subject", "message"];
function getString(formData, key) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}
async function verifyRecaptcha(token, ip) {
  const secret = "6Ldmv7wsAAAAADYrpwQTnkwW5I5L07WY8O3SLWbd";
  const payload = new URLSearchParams({
    secret,
    response: token
  });
  if (ip) payload.set("remoteip", ip);
  const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: payload.toString()
  });
  if (!response.ok) return false;
  const data = await response.json();
  return Boolean(data?.success);
}
async function sendWebhook(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`);
  }
}
const POST = async ({ request }) => {
  try {
    const formData = await request.formData();
    if (getString(formData, "bot-field")) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    const missing = REQUIRED_FIELDS.filter((field) => !getString(formData, field));
    if (missing.length > 0) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (getString(formData, "policyConsent") !== "on") {
      return new Response(JSON.stringify({ error: "Consent is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const captchaToken = getString(formData, "g-recaptcha-response");
    if (!captchaToken) {
      return new Response(JSON.stringify({ error: "CAPTCHA is required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0]?.trim() : null;
    const captchaOk = await verifyRecaptcha(captchaToken, clientIp);
    if (!captchaOk) {
      return new Response(JSON.stringify({ error: "CAPTCHA verification failed." }), {
        status: 403,
        headers: { "Content-Type": "application/json" }
      });
    }
    const payload = {};
    formData.forEach((value, key) => {
      if (typeof value === "string") payload[key] = value;
    });
    const webhookUrl = "https://hook.us1.make.com/yd95nje3piy9cyvq216re54x34uuh2ok";
    if (!webhookUrl) ;
    await sendWebhook(webhookUrl, payload);
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("contact-submit error", error);
    const message = error instanceof Error && error.message ? error.message : "Submission failed.";
    return new Response(JSON.stringify({ error: message }), {
      status: 502,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
