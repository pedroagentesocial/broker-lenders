import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog bilingüe. Cada artículo existe dos veces con el mismo slug:
 *   src/content/blog/en/<slug>.md  ← fuente de verdad del calendario
 *   src/content/blog/es/<slug>.md
 *
 * El sitio resuelve el idioma por `?lang=` (SSR), así que no hay rutas
 * separadas por idioma: /blog/<slug> y /blog/<slug>?lang=es son la misma
 * página renderizada desde archivos distintos.
 */
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Momento de publicación. Antes de esa fecha el artículo no existe para el visitante. */
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    /** Etiqueta corta sobre el H1 (kicker) */
    kicker: z.string(),
    readingMinutes: z.number().int().positive(),
    keywords: z.string(),
    /** Regla editorial: ningún artículo se publica sin fuentes primarias verificables. */
    sources: z
      .array(z.object({ label: z.string(), url: z.string().url() }))
      .min(1),
  }),
});

export const collections = { blog };
