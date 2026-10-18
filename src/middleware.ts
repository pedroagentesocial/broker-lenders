import type { MiddlewareHandler } from 'astro';
import { applySecurityHeaders } from './lib/securityHeaders';

/**
 * Redirección al dominio canónico.
 *
 * El dominio real es www.brokerlenders.com; el apex (brokerlenders.com) ya
 * redirige hacia él en Vercel. Esto cubre además cualquier otro dominio que se
 * apunte al proyecto, para que no sirva una copia completa del sitio: sería
 * contenido duplicado para Google y enlaces compartidos que no coinciden.
 *
 * Se hace aquí y no solo en el panel para que quede versionado.
 */
const CANONICAL_HOST = 'www.brokerlenders.com';

/**
 * Hosts que NO deben redirigir:
 * - localhost / 127.0.0.1 → desarrollo.
 * - *.vercel.app → preview deployments. Si redirigieran, no se podría revisar
 *   una rama antes de publicarla.
 * - github.io → el build alternativo de GitHub Pages (GH_PAGES=true).
 */
function debeRedirigir(host: string): boolean {
  if (!host) return false;
  const nombre = host.split(':')[0].toLowerCase();
  if (nombre === CANONICAL_HOST) return false;
  if (nombre === 'localhost' || nombre === '127.0.0.1' || nombre === '[::1]') return false;
  if (nombre.endsWith('.vercel.app')) return false;
  if (nombre.endsWith('.github.io')) return false;
  if (nombre.endsWith('.local') || nombre.endsWith('.test')) return false;
  return true;
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);

  if (debeRedirigir(url.hostname)) {
    url.protocol = 'https:';
    url.host = CANONICAL_HOST;
    // 301 permanente: traspasa la autoridad del dominio viejo al canónico.
    // Se conservan ruta y query (utm, idioma, ...).
    return context.redirect(url.toString(), 301);
  }

  return applySecurityHeaders(await next());
};
