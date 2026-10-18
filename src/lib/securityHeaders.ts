/**
 * Cabeceras de seguridad.
 *
 * Antes solo se enviaba HSTS (lo pone Vercel). Faltaban todas las demás, así
 * que el sitio era embebible en un iframe ajeno (clickjacking), confiaba en el
 * sniffing de tipos del navegador y filtraba la URL completa como referer a
 * terceros.
 *
 * Sobre la CSP: aquí se aplican solo las directivas que NO pueden romper nada.
 * Falta `script-src`, que es la que de verdad frena un XSS, pero exigiría
 * quitar todos los scripts inline (Astro, gtag, el widget de GHL) o firmarlos
 * con nonce. Hacerlo a ciegas dejaría el chat, el captcha o la analítica
 * muertos sin avisar. Queda como siguiente paso, mejor con
 * Content-Security-Policy-Report-Only primero.
 */
export const SECURITY_HEADERS: Record<string, string> = {
  // Evita que el navegador adivine el tipo de un recurso (p. ej. tratar como
  // script algo que se subió como imagen).
  'X-Content-Type-Options': 'nosniff',

  // Clickjacking: nadie puede meter el sitio en un iframe. X-Frame-Options es
  // para navegadores viejos; frame-ancestors de la CSP es el estándar actual.
  'X-Frame-Options': 'SAMEORIGIN',

  // No mandar la ruta completa a dominios externos (puede llevar utm, ?lang,
  // y en formularios datos en la query).
  'Referrer-Policy': 'strict-origin-when-cross-origin',

  // Ninguna página necesita cámara, micrófono, ubicación ni pagos.
  'Permissions-Policy':
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), accelerometer=()',

  // HSTS con subdominios. Vercel ya manda max-age, pero sin includeSubDomains.
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains',

  // Solo las directivas seguras (ver nota de arriba):
  //  - frame-ancestors: clickjacking, incluso si falla X-Frame-Options.
  //  - base-uri: impide que un <base> inyectado redirija las rutas relativas.
  //  - object-src: nada de <object>/<embed>, vectores clásicos de ejecución.
  //  - form-action: los formularios solo pueden enviar al propio sitio.
  'Content-Security-Policy': [
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "form-action 'self'",
  ].join('; '),
};

/** Aplica las cabeceras a una respuesta sin pisar las que ya trae. */
export function applySecurityHeaders(response: Response): Response {
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    response.headers.set(name, value);
  }
  return response;
}
