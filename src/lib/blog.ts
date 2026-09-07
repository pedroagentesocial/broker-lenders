import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './lang';

export type BlogEntry = CollectionEntry<'blog'>;

/** Cadencia editorial: un artículo nuevo cada 21 días. */
export const CADENCE_DAYS = 21;
/** Cuánto tiempo un artículo lleva el sello "Nuevo". */
export const NEW_BADGE_DAYS = 21;

const DAY_MS = 86_400_000;

/** Los ids del loader son `en/<slug>` y `es/<slug>`. */
function parseId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang === 'es' ? 'es' : 'en', slug: rest.join('/') };
}

async function allEntries(): Promise<BlogEntry[]> {
  return getCollection('blog');
}

/**
 * El archivo **en/** es la fuente de verdad del calendario: si las dos
 * versiones traen fechas distintas, manda la inglesa. Así un artículo nunca
 * aparece en un idioma antes que en el otro.
 */
async function schedule(): Promise<Map<string, Date>> {
  const map = new Map<string, Date>();
  for (const entry of await allEntries()) {
    const { lang, slug } = parseId(entry.id);
    if (lang === 'en') map.set(slug, entry.data.publishDate);
  }
  return map;
}

export type BlogPost = {
  slug: string;
  entry: BlogEntry;
  publishDate: Date;
  isNew: boolean;
};

/**
 * Artículos visibles ahora mismo. El sitio es SSR, así que este filtro corre
 * en cada request: publicar el siguiente artículo no necesita cron ni deploy.
 */
export async function getPublishedPosts(lang: Lang, now: Date = new Date()): Promise<BlogPost[]> {
  const dates = await schedule();
  const posts: BlogPost[] = [];

  for (const entry of await allEntries()) {
    const parsed = parseId(entry.id);
    if (parsed.lang !== lang) continue;
    const publishDate = dates.get(parsed.slug);
    if (!publishDate || publishDate > now) continue;
    posts.push({
      slug: parsed.slug,
      entry,
      publishDate,
      isNew: now.getTime() - publishDate.getTime() < NEW_BADGE_DAYS * DAY_MS,
    });
  }

  return posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

export type PostLookup =
  | { status: 'published'; post: BlogPost }
  /** Existe pero su fecha aún no llega: se redirige a /blog en vez de dar 404. */
  | { status: 'scheduled' }
  | { status: 'missing' };

export async function getPost(slug: string, lang: Lang, now: Date = new Date()): Promise<PostLookup> {
  const dates = await schedule();
  const publishDate = dates.get(slug);
  if (!publishDate) return { status: 'missing' };
  if (publishDate > now) return { status: 'scheduled' };

  const entries = await allEntries();
  const wanted = entries.find((e) => e.id === `${lang}/${slug}`);
  // Si falta la traducción, se sirve el inglés antes que romper la página.
  const entry = wanted ?? entries.find((e) => e.id === `en/${slug}`);
  if (!entry) return { status: 'missing' };

  return {
    status: 'published',
    post: {
      slug,
      entry,
      publishDate,
      isNew: now.getTime() - publishDate.getTime() < NEW_BADGE_DAYS * DAY_MS,
    },
  };
}

/** Siguientes artículos programados, para el bloque "próximamente" del índice. */
export async function getUpcoming(lang: Lang, limit = 2, now: Date = new Date()) {
  const dates = await schedule();
  const upcoming: { slug: string; publishDate: Date; entry: BlogEntry }[] = [];

  for (const entry of await allEntries()) {
    const parsed = parseId(entry.id);
    if (parsed.lang !== lang) continue;
    const publishDate = dates.get(parsed.slug);
    if (!publishDate || publishDate <= now) continue;
    upcoming.push({ slug: parsed.slug, publishDate, entry });
  }

  return upcoming.sort((a, b) => a.publishDate.getTime() - b.publishDate.getTime()).slice(0, limit);
}

/** Artículos relacionados: misma categoría primero, luego los más recientes. */
export async function getRelated(slug: string, lang: Lang, limit = 3, now: Date = new Date()) {
  const published = await getPublishedPosts(lang, now);
  const current = published.find((p) => p.slug === slug);
  const rest = published.filter((p) => p.slug !== slug);
  const sameCategory = rest.filter((p) => p.entry.data.category === current?.entry.data.category);
  const others = rest.filter((p) => p.entry.data.category !== current?.entry.data.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es-US' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
