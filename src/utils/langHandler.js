// Utility to consistently resolve and enforce language in the URL across pages
// Valid languages: 'en' and 'es'

export function getValidLang(defaultLang = 'en') {
  try {
    const params = new URLSearchParams(window.location.search);
    const raw = (params.get('lang') || localStorage.getItem('lang') || defaultLang || 'en').toLowerCase();
    return raw === 'es' ? 'es' : 'en';
  } catch {
    return defaultLang || 'en';
  }
}

export function ensureLangInUrl(options = {}) {
  const { defaultLang = 'en' } = options || {};
  try {
    const url = new URL(window.location.href);
    const hasLang = url.searchParams.has('lang');
    const stored = (localStorage.getItem('lang') || '').toLowerCase();
    const allowed = ['en', 'es'];
    const fallback = allowed.includes(stored) ? stored : (defaultLang || 'en');
    // If URL missing lang but we have a stored valid language, redirect adding it
    if (!hasLang && allowed.includes(fallback)) {
      url.searchParams.set('lang', fallback);
      // Use replace to avoid creating extra history entries
      window.location.replace(url.toString());
      return fallback;
    }
    // If URL has an invalid lang, normalize to default
    if (hasLang) {
      const current = (url.searchParams.get('lang') || defaultLang || 'en').toLowerCase();
      const valid = allowed.includes(current) ? current : (defaultLang || 'en');
      if (current !== valid) {
        url.searchParams.set('lang', valid);
        window.history.replaceState({}, '', url.toString());
      }
      // Persist normalized value
      localStorage.setItem('lang', valid);
      return valid;
    }
    // Nothing set, persist default
    localStorage.setItem('lang', fallback);
    return fallback;
  } catch {
    return defaultLang || 'en';
  }
}