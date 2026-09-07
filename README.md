# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

// Trigger deploy:

## Blog (guías hipotecarias)

Blog bilingüe con **publicación automática cada 21 días**. Sólo se enlaza desde el footer;
no aparece en el header a propósito.

### Cómo funciona

- **Contenido**: `src/content/blog/{en,es}/<slug>.md`. Cada artículo existe dos veces con
  el mismo slug. El esquema está en `src/content.config.ts`.
- **El archivo `en/` es la fuente de verdad del calendario**. Si las dos versiones traen
  `publishDate` distinta, manda la inglesa, para que un artículo nunca salga en un idioma
  antes que en el otro.
- **Publicación sin cron ni deploy**: `/blog` y `/blog/[slug]` son SSR (`prerender = false`)
  y `src/lib/blog.ts` filtra por fecha en cada request. Un artículo con fecha futura
  simplemente no existe todavía para el visitante.
- **Un slug programado redirige 302 a `/blog`** (no filtra el calendario ni deja un 404
  que Google recuerde). Un slug inexistente devuelve un 404 real renderizado en la misma
  ruta: no se puede hacer `Astro.rewrite('/404')` desde SSR a una página prerenderizada.
- **Sello "Nuevo"** durante 21 días (`NEW_BADGE_DAYS`).
- **Idioma**: el blog se renderiza en SSR ya en el idioma resuelto (`?lang=` → cookie → `en`),
  a diferencia del resto del sitio, que traduce en el cliente con `data-i18n`. Es contenido
  largo y queremos que Google indexe cada versión.

### Calendario actual

| # | Slug | Publicación |
|---|------|-------------|
| 1 | `how-much-house-can-i-afford` | 2026-07-27 |
| 2 | `down-payment-myths` | 2026-08-17 |
| 3 | `loan-types-compared` | 2026-09-07 |
| 4 | `credit-score-and-your-rate` | 2026-09-28 |
| 5 | `inside-your-monthly-payment` | 2026-10-19 |
| 6 | `closing-costs-explained` | 2026-11-09 |
| 7 | `prequalification-vs-preapproval` | 2026-11-30 |
| 8 | `mortgage-insurance-explained` | 2026-12-21 |
| 9 | `home-buying-timeline` | 2027-01-11 |
| 10 | `documents-you-need` | 2027-02-01 |
| 11 | `rate-locks-and-buydowns` | 2027-02-22 |
| 12 | `refinance-break-even` | 2027-03-15 |

Todas las fechas usan `T13:00:00Z` (7am hora de Utah). Para mover un artículo basta con
cambiar `publishDate` en el archivo `en/` — no hace falta redeploy si ya está en producción.

### Regla editorial

Ningún artículo se publica sin `sources` verificables en el frontmatter; el esquema lo
exige. Se citan sólo fuentes primarias: CFPB, HUD, VA.gov, FHFA, IRS, Fannie Mae Selling
Guide, USDA Rural Development, Freddie Mac PMMS, Reserva Federal, Tax Foundation.

### Gráficos

Los gráficos viven dentro del Markdown como HTML/SVG crudo y usan las clases `bl-*` de
`src/styles/blog.css` — **CSS plano, no Tailwind**: una clase que sólo aparece en un `.md`
podría no ser generada por el escáner de Tailwind. Bloques disponibles: `bl-fig`, `bl-bars`,
`bl-stack` + `bl-legend`, `bl-steps`, `bl-stats`, `bl-table`, `bl-checks`, `bl-callout`,
`bl-versus`, `bl-svg`.

> Importante al editar: **no dejes líneas en blanco dentro de un bloque HTML del Markdown**.
> En CommonMark un bloque HTML termina en la primera línea vacía y el resto se parsea como
> Markdown, lo que rompe la figura.

### SEO

- `src/pages/sitemap-blog.xml.ts` genera el sitemap del blog aparte (el de `@astrojs/sitemap`
  sólo enumera páginas prerenderizadas). `public/robots.txt` lo referencia con una segunda
  línea `Sitemap:`.
- Cada artículo emite JSON-LD `BlogPosting` (con `author`, `citation` y `isPartOf`) y
  `BreadcrumbList`; el índice emite `Blog`.
- `hreflang` en-US / es-US / x-default vía el prop `hreflangPath` del Layout.

### Tasas reales dentro de los artículos

Cinco guías construyen sus gráficas sobre una tasa concreta. Esas cuentas son **fijas a
propósito**: si la tasa se moviera, los números de las gráficas y los del texto dejarían
de cuadrar entre sí. Para que el artículo no se desfase de la realidad, el frontmatter
declara el ejemplo:

```yaml
rateExample:
  rate: 6.5          # la tasa que usan las gráficas
  loanAmount: 388000
  termYears: 30
  series: "30-year-fixed"
```

`src/components/blog/RateContext.astro` pinta entonces una franja arriba del artículo que
compara esa tasa con la **tasa real del día** y recalcula el pago del mismo préstamo con
ella. El dato sale de `src/data/rates-data.json`, que el cron diario de GitHub Actions
regenera desde FRED (índices OBMMI de ICE/Optimal Blue): **no hay que actualizar nada a
mano**. Si el JSON falla o cambia de forma, la franja simplemente no se pinta — es
contexto, nunca debe tumbar un artículo.

Al añadir una guía con tasas, agrega el bloque `rateExample`; sin él la franja no aparece.

### Divulgaciones legales

`src/components/blog/BlogLegal.astro` va en `/blog` y en cada artículo. Es aparte de
`ImportantLegal.astro` (el del resto del sitio) porque el blog publica cifras — pagos de
ejemplo, tasas del día, límites de programa — y eso exige aclaraciones que una página
comercial no necesita: que los ejemplos no son cotizaciones, que las tasas son promedios
nacionales sin puntos ni cuotas (o sea, no son una APR), y que los límites citados eran
correctos en la fecha de publicación de esa guía.

El texto vive en `src/lib/blog-ui.ts` bajo `legal`, en los dos idiomas. Usa `<details>`
nativo: sin JavaScript, accesible, y el contenido sigue en el HTML aunque esté colapsado.

**Las fechas se calculan en el build.** El aviso de copyright del footer se había quedado
en 2025 y el de `ImportantLegal` en «Last updated: December 2024»; ahora ambos toman el
año del sistema y las cadenas traducidas ya no llevan la fecha adentro.
