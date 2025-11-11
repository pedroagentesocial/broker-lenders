import { e as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from './astro/server_DtYm6sr6.mjs';
import 'clsx';

const get_rewarded_title$1 = "Get rewarded for renting";
const get_rewarded_description$1 = "Turn your rental payments into rewards that help you save for a down payment on your future home.";
const learn_more$1 = "Learn more";
const save_up_to_alt$1 = "Save up to $2,500";
const en = {
  get_rewarded_title: get_rewarded_title$1,
  get_rewarded_description: get_rewarded_description$1,
  learn_more: learn_more$1,
  save_up_to_alt: save_up_to_alt$1,
};

const get_rewarded_title = "Obtén recompensas por alquilar";
const get_rewarded_description = "Convierte tus pagos de alquiler en recompensas que te ayudarán a ahorrar para el pago inicial de tu futura casa.";
const learn_more = "Más información";
const save_up_to_alt = "Ahorra hasta $2,500";
const es = {
  get_rewarded_title,
  get_rewarded_description,
  learn_more,
  save_up_to_alt,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$RewardsCard = createComponent(($$result, $$props, $$slots) => {
  const enB64 = Buffer.from(JSON.stringify(en)).toString("base64");
  const esB64 = Buffer.from(JSON.stringify(es)).toString("base64");
  return renderTemplate(_a || (_a = __template(["<!-- Get rewarded section -->", '<section class="py-18 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left side - Image/Card --> <div> <div class="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl flex items-center justify-center relative"> <img src="/SaveUpTo.png" alt="Save up to $2,500" data-i18n-alt="save_up_to_alt" class="w-full h-auto max-w-md object-contain"> </div> </div> <!-- Right side - Content --> <div> <h2 class="text-3xl font-bold text-gray-900 mb-6" data-i18n="get_rewarded_title">Get rewarded for renting</h2> <p class="text-gray-600 mb-8 text-lg" data-i18n="get_rewarded_description">Turn your rental payments into rewards that help you save for a down payment on your future home.</p> <a href="/refinance" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 transition-colors inline-block" data-i18n="learn_more">Learn more</a> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (RewardsCard) --> <div id="i18n-rewards"', "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-rewards');
    const decode = (val) => {
      try {
        const b64 = val || '';
        const bin = atob(b64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const jsonText = new TextDecoder('utf-8').decode(bytes);
        return JSON.parse(jsonText);
      } catch { return {}; }
    };
    const translations = {
      en: decode(root?.getAttribute('data-en') || ''),
      es: decode(root?.getAttribute('data-es') || ''),
    };
    const getInitialLang = () => {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      const htmlLang = document.documentElement.getAttribute('lang');
      let cookieLang = null;
      try {
        const m = document.cookie.match(/(?:^|;\\s*)lang=([^;]+)/);
        cookieLang = m && m[1] ? m[1].toLowerCase() : null;
      } catch {}
      const stored = localStorage.getItem('lang');
      return (urlLang || htmlLang || cookieLang || stored || 'en');
    };
    const applyTranslations = (lang) => {
      const dict = translations[lang] || translations.en;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const parts = key.split('.');
        let val = dict;
        for (const p of parts) { if (val && p in val) { val = val[p]; } else { val = null; break; } }
        if (typeof val === 'string') {
          if (val.includes('<br>')) {
            el.innerHTML = val;
          } else {
            el.textContent = val;
          }
        }
      });
      document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        const parts = key.split('.');
        let val = dict;
        for (const p of parts) { if (val && p in val) { val = val[p]; } else { val = null; break; } }
        if (typeof val === 'string') {
          el.setAttribute('alt', val);
        }
      });
    };
    const setLanguage = (lang) => {
      localStorage.setItem('lang', lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      const next = url.toString();
      if (next !== window.location.href) {
        window.history.replaceState({}, '', next);
      }
      applyTranslations(lang);
    };
    // Initialize
    applyTranslations(getInitialLang());
    // Respond to language changes from link clicks (Header)
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href*="?lang="]');
      if (a) {
        const href = new URL(a.href);
        const lang = href.searchParams.get('lang');
        if (lang) setLanguage(lang);
      }
    });
    // Also respond to storage events (Header sets lang)
    window.addEventListener('storage', (ev) => {
      if (ev.key === 'lang' && ev.newValue) {
        applyTranslations(ev.newValue);
      }
    });
  })();
<\/script>`], ["<!-- Get rewarded section -->", '<section class="py-18 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left side - Image/Card --> <div> <div class="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-2xl flex items-center justify-center relative"> <img src="/SaveUpTo.png" alt="Save up to $2,500" data-i18n-alt="save_up_to_alt" class="w-full h-auto max-w-md object-contain"> </div> </div> <!-- Right side - Content --> <div> <h2 class="text-3xl font-bold text-gray-900 mb-6" data-i18n="get_rewarded_title">Get rewarded for renting</h2> <p class="text-gray-600 mb-8 text-lg" data-i18n="get_rewarded_description">Turn your rental payments into rewards that help you save for a down payment on your future home.</p> <a href="/refinance" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 transition-colors inline-block" data-i18n="learn_more">Learn more</a> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (RewardsCard) --> <div id="i18n-rewards"', "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-rewards');
    const decode = (val) => {
      try {
        const b64 = val || '';
        const bin = atob(b64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const jsonText = new TextDecoder('utf-8').decode(bytes);
        return JSON.parse(jsonText);
      } catch { return {}; }
    };
    const translations = {
      en: decode(root?.getAttribute('data-en') || ''),
      es: decode(root?.getAttribute('data-es') || ''),
    };
    const getInitialLang = () => {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      const htmlLang = document.documentElement.getAttribute('lang');
      let cookieLang = null;
      try {
        const m = document.cookie.match(/(?:^|;\\\\s*)lang=([^;]+)/);
        cookieLang = m && m[1] ? m[1].toLowerCase() : null;
      } catch {}
      const stored = localStorage.getItem('lang');
      return (urlLang || htmlLang || cookieLang || stored || 'en');
    };
    const applyTranslations = (lang) => {
      const dict = translations[lang] || translations.en;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const parts = key.split('.');
        let val = dict;
        for (const p of parts) { if (val && p in val) { val = val[p]; } else { val = null; break; } }
        if (typeof val === 'string') {
          if (val.includes('<br>')) {
            el.innerHTML = val;
          } else {
            el.textContent = val;
          }
        }
      });
      document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        const parts = key.split('.');
        let val = dict;
        for (const p of parts) { if (val && p in val) { val = val[p]; } else { val = null; break; } }
        if (typeof val === 'string') {
          el.setAttribute('alt', val);
        }
      });
    };
    const setLanguage = (lang) => {
      localStorage.setItem('lang', lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      const next = url.toString();
      if (next !== window.location.href) {
        window.history.replaceState({}, '', next);
      }
      applyTranslations(lang);
    };
    // Initialize
    applyTranslations(getInitialLang());
    // Respond to language changes from link clicks (Header)
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href*="?lang="]');
      if (a) {
        const href = new URL(a.href);
        const lang = href.searchParams.get('lang');
        if (lang) setLanguage(lang);
      }
    });
    // Also respond to storage events (Header sets lang)
    window.addEventListener('storage', (ev) => {
      if (ev.key === 'lang' && ev.newValue) {
        applyTranslations(ev.newValue);
      }
    });
  })();
<\/script>`])), maybeRenderHead(), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/RewardsCard.astro", void 0);

export { $$RewardsCard as $ };
