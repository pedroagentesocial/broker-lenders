// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const isGhPages = process.env.GH_PAGES === 'true';

/**
 * `serialize` de @astrojs/sitemap espera el enum `EnumChangefreq`, no un string.
 * Los valores del enum son exactamente estas cadenas, así que basta con
 * convertir el tipo en un solo lugar en vez de castear en cada asignación.
 *
 * @param {'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'} value
 * @returns {import('sitemap').EnumChangefreq}
 */
const changefreq = (value) =>
  /** @type {import('sitemap').EnumChangefreq} */ (/** @type {unknown} */ (value));

export default defineConfig({
  site: isGhPages ? 'https://pedroagentesocial.github.io' : 'https://brokerlenders.com',
  base: isGhPages ? '/broker-lenders' : undefined,
  output: isGhPages ? 'static' : 'server',
  adapter: isGhPages ? undefined : vercel(),
  // La imagen del hero de realtors ya viene dimensionada (2400x1600, 441 KB).
  // Sin procesado en build no hace falta sharp, que es donde fallaba el deploy.
  image: { service: passthroughImageService() },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-US',
        },
      },
      filter: (page) =>
        !page.includes('/api/') &&
        !page.includes('/feedback') &&
        !page.includes('/form') &&
        !page.includes('/booking') &&
        !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Normalize URL path for matching (strip origin, strip trailing slash)
        const path = item.url.replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '') || '/';

        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = changefreq('daily');
        } else if (path === '/buy' || path === '/refinance') {
          item.priority = 1.0;
          item.changefreq = changefreq('weekly');
        } else if (path === '/rates') {
          item.priority = 0.9;
          item.changefreq = changefreq('daily');
        } else if (path === '/realtors' || path === '/loan-options' || path === '/calculators') {
          item.priority = 0.9;
          item.changefreq = changefreq('weekly');
        } else if (path.startsWith('/loan-options/') || path.startsWith('/calculators/')) {
          item.priority = 0.8;
          item.changefreq = changefreq('monthly');
        } else if (path === '/aboutus' || path === '/contactus' || path === '/faqs') {
          item.priority = 0.7;
          item.changefreq = changefreq('monthly');
        } else if (path.startsWith('/legal/')) {
          item.priority = 0.2;
          item.changefreq = changefreq('yearly');
        }
        return item;
      },
    }),
  ],
  vite: {
    // Astro 5.18 usa Vite 6 y @tailwindcss/vite 4.2 declara Vite 8, así que sus
    // tipos de Plugin no coinciden aunque en ejecución son compatibles.
    // Ver nota en el README sobre alinear las versiones de Vite.
    plugins: [/** @type {any} */ (tailwindcss())]
  }
});
