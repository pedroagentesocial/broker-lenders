import type { APIRoute } from 'astro';
import { getPublishedPosts } from '../lib/blog';

// @astrojs/sitemap sólo enumera páginas prerenderizadas, y el blog es SSR
// (se publica por fecha). Por eso lleva su propio sitemap, referenciado con una
// segunda línea `Sitemap:` en public/robots.txt.
export const prerender = false;

const SITE_URL = 'https://brokerlenders.com';

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Cada URL se declara en inglés y español; la versión ES es la misma ruta con `?lang=es`. */
function urlEntry(path: string, lastmod: string, priority: string, changefreq: string) {
  const loc = `${SITE_URL}${path}`;
  return `  <url>
    <loc>${escape(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en-US" href="${escape(loc)}" />
    <xhtml:link rel="alternate" hreflang="es-US" href="${escape(`${loc}?lang=es`)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escape(loc)}" />
  </url>`;
}

export const GET: APIRoute = async () => {
  const posts = await getPublishedPosts('en');
  const newest = posts[0]?.publishDate ?? new Date();

  const entries = [
    urlEntry('/blog', newest.toISOString(), '0.8', 'weekly'),
    ...posts.map((post) =>
      urlEntry(
        `/blog/${post.slug}`,
        (post.entry.data.updatedDate ?? post.publishDate).toISOString(),
        '0.7',
        'monthly',
      ),
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Un artículo entra por fecha, así que el sitemap no puede cachearse mucho.
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
};
