import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from './astro/server_DtYm6sr6.mjs';
import 'clsx';

const title$1 = "Not sure what's best? We'll guide you.";
const subtitle$1 = "Our loan officers are here to help you find the perfect loan option for your unique situation.";
const bookTitle$1 = "Book an appointment";
const bookDescription$1 = "Schedule a call with one of our loan officers to discuss your options.";
const callTitle$1 = "Call us";
const callDescription$1 = "Speak with a loan officer right now to get started on your home purchase.";
const enDict = {
  title: title$1,
  subtitle: subtitle$1,
  bookTitle: bookTitle$1,
  bookDescription: bookDescription$1,
  callTitle: callTitle$1,
  callDescription: callDescription$1,
};

const title = "¿No estás seguro de lo mejor? Te guiaremos.";
const subtitle = "Nuestros oficiales de préstamos están aquí para ayudarte a encontrar la opción de préstamo perfecta para tu situación única.";
const bookTitle = "Reservar una cita";
const bookDescription = "Programa una llamada con uno de nuestros oficiales de préstamos para discutir tus opciones.";
const callTitle = "Llámanos";
const callDescription = "Habla con un oficial de préstamos ahora mismo para comenzar con tu compra de vivienda.";
const esDict = {
  title,
  subtitle,
  bookTitle,
  bookDescription,
  callTitle,
  callDescription,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { lang: propLang } = Astro2.props;
  const raw = (propLang || new URL(Astro2.request.url).searchParams.get("lang") || "en").toLowerCase();
  const lang = raw === "es" ? "es" : "en";
  const dict = lang === "es" ? esDict : enDict;
  console.log("[i18n][contact][SSR] resolve", { href: Astro2.request.url, lang });
  const enB64 = Buffer.from(JSON.stringify(enDict)).toString("base64");
  const esB64 = Buffer.from(JSON.stringify(esDict)).toString("base64");
  return renderTemplate(_a || (_a = __template(["<!-- Not sure what's best section -->", '<section id="contact-section" class="py-18 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 id="contact-title" class="text-3xl font-bold text-gray-900 mb-4">', '</h2> <p id="contact-subtitle" class="text-gray-600 text-lg max-w-2xl mx-auto"> ', ' </p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"> <!-- Book an appointment --> <a href="tel:+1-801-307-0273" class="bg-gray-50 p-10 rounded-xl text-center block border-2 border-transparent transition-all hover:border-blue-500"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-6"> <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> <h3 id="contact-book-title" class="text-xl font-bold text-gray-900 mb-4">', '</h3> <p id="contact-book-desc" class="text-gray-600 mb-6">', '</p> <div class="flex justify-center"> <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group border border-gray-200"> <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a> <!-- Call us --> <a href="tel:+1-801-307-0273" class="bg-gray-50 p-10 rounded-xl text-center block border-2 border-transparent transition-all hover:border-green-500"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-6"> <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <h3 id="contact-call-title" class="text-xl font-bold text-gray-900 mb-4">', '</h3> <p id="contact-call-desc" class="text-gray-600 mb-6">', '</p> <div class="flex justify-center"> <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center group border border-gray-200"> <svg class="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a> </div> </div> </section> <!-- Inline i18n payloads encoded (Contact) --> <div id="i18n-contact"', "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-contact');
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
    const getLang = () => {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      const stored = localStorage.getItem('lang');
      const raw = (urlLang || stored || 'en').toLowerCase();
      return raw === 'es' ? 'es' : 'en';
    };
    const apply = (lang) => {
      const dict = translations[lang] || translations.en;
      const t = (id, value) => { const el = document.getElementById(id); if (el && typeof value === 'string') el.textContent = value; };
      t('contact-title', dict.title);
      t('contact-subtitle', dict.subtitle);
      t('contact-book-title', dict.bookTitle);
      t('contact-book-desc', dict.bookDescription);
      t('contact-call-title', dict.callTitle);
      t('contact-call-desc', dict.callDescription);
    };
    const setLang = (lang) => {
      localStorage.setItem('lang', lang);
      const url = new URL(window.location.href);
      url.searchParams.set('lang', lang);
      window.history.replaceState({}, '', url.toString());
      apply(lang);
    };
    // Initialize
    apply(getLang());
    // Respond to language changes from Header link clicks globally; do not block navigation
    document.addEventListener('click', (e) => {
      const el = (e.target instanceof Element) ? e.target : null;
      const a = el ? el.closest('a[href*="?lang="]') : null;
      if (!a) return;
      let href = null;
      try { href = new URL(a.href, window.location.origin); } catch { href = null; }
      const lang = href && href.searchParams ? href.searchParams.get('lang') : null;
      if (!lang) return;
      // Do not prevent default; just update local translations for smoother UX
      apply(lang);
    });
    // Also respond to storage events (Header may set lang in other tabs)
    window.addEventListener('storage', (ev) => {
      if (ev.key === 'lang' && ev.newValue) {
        apply(ev.newValue);
      }
    });
    // Apply translations on history navigation (back/forward) and URL changes
    window.addEventListener('popstate', () => {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      if (urlLang) apply(urlLang);
    });
  })();
<\/script>`])), maybeRenderHead(), dict.title, dict.subtitle, dict.bookTitle, dict.bookDescription, dict.callTitle, dict.callDescription, addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/Contact.astro", void 0);

export { $$Contact as $ };
