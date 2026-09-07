export type Lang = 'en' | 'es';

/**
 * Resuelve el idioma en SSR con la misma prioridad que usa el cliente:
 * `?lang=` gana sobre la cookie que dejan Header/Layout, y si no hay nada, inglés.
 */
export function resolveLang(url: URL, cookies?: { get(name: string): { value: string } | undefined }): Lang {
  const fromUrl = (url.searchParams.get('lang') || '').toLowerCase();
  if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
  try {
    const fromCookie = (cookies?.get('lang')?.value || '').toLowerCase();
    if (fromCookie === 'es') return 'es';
  } catch {
    // En build estático (GH_PAGES) no hay cookies: se cae a inglés.
  }
  return 'en';
}

/** Añade `?lang=` sólo cuando hace falta, para no ensuciar las URLs en inglés. */
export function withLang(path: string, lang: Lang): string {
  return lang === 'en' ? path : `${path}?lang=${lang}`;
}
