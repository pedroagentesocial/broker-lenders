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
    /**
     * Artículos cuyas gráficas usan una tasa concreta. Las cuentas del artículo
     * son fijas a propósito (si se movieran, las gráficas dejarían de cuadrar),
     * así que `RateContext.astro` pinta arriba una franja que compara esa tasa
     * con la tasa real del día y recalcula el pago del ejemplo.
     */
    rateExample: z
      .object({
        /** La tasa que usan las gráficas del artículo, en porcentaje. */
        rate: z.number(),
        loanAmount: z.number(),
        termYears: z.number().int().positive().default(30),
        /** Serie de rates-data.json contra la que se compara. */
        series: z
          .enum(['30-year-fixed', '15-year-fixed', '30-year-fha', '30-year-va', '30-year-usda', '30-year-jumbo'])
          .default('30-year-fixed'),
      })
      .optional(),
  }),
});

export const collections = { blog };
