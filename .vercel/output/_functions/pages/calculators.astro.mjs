import { e as createComponent, f as createAstro, r as renderTemplate, l as renderScript, h as addAttribute, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DtYm6sr6.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrnZoUeJ.mjs';
import { $ as $$ImportantLegal } from '../chunks/ImportantLegal_D8fhlbac.mjs';
import { $ as $$Contact } from '../chunks/Contact_CQxpJEPD.mjs';
import { $ as $$TestimonialsSection } from '../chunks/TestimonialsSection_D-wnH4dV.mjs';
export { renderers } from '../renderers.mjs';

const hero$1 = {"title":"Broker Lenders® calculators","subtitle":"Get accurate estimates and make informed decisions with our easy-to-use mortgage calculators. Plan your home financing with confidence."};
const help$1 = {"title":"Find your ideal mortgage calculator","description":"Our mortgage experts can help you choose the right tool for your situation and guide you through the process.","button":"Talk to an expert"};
const mortgageCalculators$1 = {"title":"Mortgage Calculators","description":"Use our powerful mortgage calculators to make informed decisions about your home financing. Get accurate estimates and plan your mortgage strategy with confidence.","cards":{"mortgage":{"title":"Mortgage Calculator","description":"Calculate your monthly mortgage payment and see how much home you can afford"},"refinance":{"title":"Refinance Calculator","description":"See if refinancing makes sense for you and calculate potential savings"},"payoff":{"title":"Mortgage Payoff Calculator","description":"Calculate how much you can save by making extra payments on your mortgage"},"valuation":{"title":"Home Valuation Tool","description":"Get an instant estimate of your property's current market value"}},"modal":{"title":"Home Valuation Tool"}};
const en = {
  hero: hero$1,
  help: help$1,
  mortgageCalculators: mortgageCalculators$1,
};

const hero = {"title":"Calculadoras de Broker Lenders®","subtitle":"Obtén estimaciones precisas y toma decisiones informadas con nuestras calculadoras hipotecarias fáciles de usar. Planifica tu financiamiento de vivienda con confianza."};
const help = {"title":"Encuentra tu calculadora hipotecaria ideal","description":"Nuestros expertos hipotecarios pueden ayudarte a elegir la herramienta adecuada para tu situación y guiarte durante el proceso.","button":"Hablar con un experto"};
const mortgageCalculators = {"title":"Calculadoras Hipotecarias","description":"Usa nuestras poderosas calculadoras hipotecarias para tomar decisiones informadas sobre tu financiamiento. Obtén estimaciones precisas y planifica tu estrategia hipotecaria con confianza.","cards":{"mortgage":{"title":"Calculadora de Hipoteca","description":"Calcula tu pago hipotecario mensual y descubre cuánto hogar puedes pagar"},"refinance":{"title":"Calculadora de Refinanciamiento","description":"Decide si el refinanciamiento te conviene y calcula posibles ahorros"},"payoff":{"title":"Calculadora de Pago de Hipoteca","description":"Calcula cuánto puedes ahorrar haciendo pagos adicionales en tu hipoteca"},"valuation":{"title":"Herramienta de Valoración de Vivienda","description":"Obtén una estimación instantánea del valor de mercado actual de tu propiedad"}},"modal":{"title":"Herramienta de Valoración de Vivienda"}};
const es = {
  hero,
  help,
  mortgageCalculators,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Calculators = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calculators;
  Astro2.response.headers.set("Content-Type", "text/html; charset=UTF-8");
  const url = new URL(Astro2.request.url);
  const qsLang = (url.searchParams.get("lang") || "").toLowerCase();
  const cookie = Astro2.request.headers.get("cookie") || "";
  const cookieMatch = cookie.match(/(?:^|;\s*)lang=([^;]+)/);
  const cookieLang = (cookieMatch?.[1] || "").toLowerCase();
  const langParam = qsLang || cookieLang || "en";
  const lang = langParam === "es" ? "es" : "en";
  const dict = lang === "es" ? es : en;
  const withLang = (path) => `${path}?lang=${lang}` ;
  const toB64 = (obj) => Buffer.from(JSON.stringify(obj), "utf-8").toString("base64");
  const enB64 = toB64(en);
  const esB64 = toB64(es);
  return renderTemplate(_a || (_a = __template(["", ' <!-- Inline i18n payloads for calculators page --> <div id="i18n-calculators"', "", ` style="display:none"></div> <!-- i18n client-side sync for Calculators page (supports switching) --> <script>
  (() => {
    const root = document.getElementById('i18n-calculators');
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
      const stored = localStorage.getItem('lang');
      return (urlLang || stored || 'en');
    };
    const get = (obj, path) => {
      try {
        const parts = path.split('.');
        let cur = obj;
        for (const p of parts) {
          if (cur && typeof cur === 'object' && p in cur) cur = cur[p];
          else return null;
        }
        return cur;
      } catch { return null; }
    };
    const applyTranslations = (lang) => {
      const dict = translations[lang] || translations.en;
      const pairs = [
        ['calculators-hero-title', get(dict, 'hero.title')],
        ['calculators-hero-subtitle', get(dict, 'hero.subtitle')],
        ['calculators-help-title', get(dict, 'help.title')],
        ['calculators-help-description', get(dict, 'help.description')],
        ['calculators-help-button', get(dict, 'help.button')],
        ['calculators-section-title', get(dict, 'mortgageCalculators.title')],
        ['calculators-section-description', get(dict, 'mortgageCalculators.description')],
        ['calculators-mc-title', get(dict, 'mortgageCalculators.cards.mortgage.title')],
        ['calculators-mc-desc', get(dict, 'mortgageCalculators.cards.mortgage.description')],
        ['calculators-rc-title', get(dict, 'mortgageCalculators.cards.refinance.title')],
        ['calculators-rc-desc', get(dict, 'mortgageCalculators.cards.refinance.description')],
        ['calculators-po-title', get(dict, 'mortgageCalculators.cards.payoff.title')],
        ['calculators-po-desc', get(dict, 'mortgageCalculators.cards.payoff.description')],
        ['calculators-hv-title', get(dict, 'mortgageCalculators.cards.valuation.title')],
        ['calculators-hv-desc', get(dict, 'mortgageCalculators.cards.valuation.description')],
        ['valuation-modal-title', get(dict, 'mortgageCalculators.modal.title')],
      ];
      pairs.forEach(([id, text]) => {
        const el = document.getElementById(id);
        if (el && typeof text === 'string' && el.textContent !== text) {
          el.textContent = text;
        }
      });
      const iframe = document.getElementById('valuation-iframe-title');
      const modalTitle = get(dict, 'mortgageCalculators.modal.title');
      if (iframe && typeof modalTitle === 'string') {
        iframe.setAttribute('title', modalTitle);
      }
      // Ensure internal links keep ?lang
      const internal = document.querySelectorAll('a[data-calc-link]');
      internal.forEach(a => {
        try {
          const u = new URL(a.getAttribute('href'), window.location.origin);
          if (lang) {
            u.searchParams.set('lang', lang);
          }
          a.setAttribute('href', u.pathname + u.search);
        } catch {}
      });
      const home = document.querySelector('nav a[href="/"]');
      if (home) {
        const u = new URL(home.getAttribute('href'), window.location.origin);
        if (lang) u.searchParams.set('lang', lang);
        home.setAttribute('href', u.pathname + u.search);
      }
    };
    const setLanguage = (lang) => {
      applyTranslations(lang);
    };
    // Initialize
    applyTranslations(getInitialLang());
    // React to language menu clicks (Header updates URL/localStorage)
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href*="?lang="]');
      if (!a) return;
      let href;
      try { href = new URL(a.href, window.location.origin); } catch { return; }
      const newLang = href.searchParams.get('lang');
      if (newLang) applyTranslations(newLang);
    });
    // Respond to storage events (Header sets lang)
    window.addEventListener('storage', (ev) => {
      if (ev.key === 'lang' && ev.newValue) applyTranslations(ev.newValue);
    });
    // Also handle history navigation where ?lang changes
    window.addEventListener('popstate', () => {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      const lang = (urlLang || localStorage.getItem('lang') || 'en');
      applyTranslations(lang);
    });

    // Ensure calculator card clicks navigate correctly, even with other interceptors
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[data-calc-link]');
      if (!a) return;
      // Respeta teclas modificadoras y clic no izquierdo (nueva pesta\xF1a/ventana)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      const href = a.getAttribute('href');
      if (!href) return;
      try {
        const u = new URL(href, window.location.origin);
        // Only same-origin internal links
        if (u.origin !== window.location.origin) return;
        e.preventDefault();
        window.location.assign(u.toString());
      } catch {}
    });
  })();
<\/script> `, ""])), renderComponent($$result, "Layout", $$Layout, { "title": "Mortgage Calculators - Broker Lenders", "lang": lang }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-white py-4"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <nav class="text-sm"> <a${addAttribute(withLang("/"), "href")} class="text-gray-700 hover:text-gray-900">Home</a> <span class="mx-2 text-gray-500">/</span> <span class="text-gray-700">Calculators</span> </nav> </div> </div>  <section class="py-12 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1 id="calculators-hero-title" data-i18n="hero.title" class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"> ${dict.hero.title} </h1> <p id="calculators-hero-subtitle" data-i18n="hero.subtitle" class="text-xl text-gray-600 max-w-3xl mx-auto"> ${dict.hero.subtitle} </p> </div> </section>  <section class="py-8 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-gray-50 p-8 rounded-2xl"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"> <!-- Text Content --> <div class="lg:col-span-2"> <h3 id="calculators-help-title" data-i18n="help.title" class="text-2xl font-bold text-gray-900 mb-3">${dict.help.title}</h3> <p id="calculators-help-description" data-i18n="help.description" class="text-lg text-gray-700"> ${dict.help.description} </p> </div> <!-- Button --> <div class="lg:col-span-1 flex justify-center lg:justify-end"> <a id="calculators-help-button" data-i18n="help.button" href="tel:8013070273" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center"> ${dict.help.button} </a> </div> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-gray-100 p-8 lg:p-12 rounded-[48px] text-center"> <h2 id="calculators-section-title" data-i18n="mortgageCalculators.title" class="text-3xl font-bold text-gray-900 mb-6">${dict.mortgageCalculators?.title || "Mortgage Calculators"}</h2> <p id="calculators-section-description" data-i18n="mortgageCalculators.description" class="text-lg text-gray-600 mb-8"> ${dict.mortgageCalculators?.description || "Use our powerful mortgage calculators to make informed decisions about your home financing. Get accurate estimates and plan your mortgage strategy with confidence."} </p> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Calculator 1 - Mortgage Calculator --> <a data-calc-link${addAttribute(withLang("/calculators/mortgage-calculator"), "href")} class="bg-white p-6 rounded-xl shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-gray-50 border-2 border-transparent hover:border-blue-600 block"> <div class="flex items-center"> <!-- Icon on the left --> <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg> </div> <!-- Content in the center --> <div class="flex-1 ml-4 text-left"> <h3 id="calculators-mc-title" data-i18n="mortgageCalculators.cards.mortgage.title" class="text-lg font-semibold text-gray-900 mb-1">${dict.mortgageCalculators?.cards?.mortgage?.title || "Mortgage Calculator"}</h3> <p id="calculators-mc-desc" data-i18n="mortgageCalculators.cards.mortgage.description" class="text-sm text-gray-600">${dict.mortgageCalculators?.cards?.mortgage?.description || "Calculate your monthly mortgage payment and see how much home you can afford"}</p> </div> <!-- Arrow positioned center-right --> <div class="flex items-center justify-center ml-4"> <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"> <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </div> </div> </div> </a> <!-- Calculator 2 - Refinance Calculator --> <a data-calc-link${addAttribute(withLang("/calculators/refinance-calculator"), "href")} class="bg-white p-6 rounded-xl shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-gray-50 border-2 border-transparent hover:border-green-600 block"> <div class="flex items-center"> <!-- Icon on the left --> <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg> </div> <!-- Content in the center --> <div class="flex-1 ml-4 text-left"> <h3 id="calculators-rc-title" data-i18n="mortgageCalculators.cards.refinance.title" class="text-lg font-semibold text-gray-900 mb-1">${dict.mortgageCalculators?.cards?.refinance?.title || "Refinance Calculator"}</h3> <p id="calculators-rc-desc" data-i18n="mortgageCalculators.cards.refinance.description" class="text-sm text-gray-600">${dict.mortgageCalculators?.cards?.refinance?.description || "See if refinancing makes sense for you and calculate potential savings"}</p> </div> <!-- Arrow positioned center-right --> <div class="flex items-center justify-center ml-4"> <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"> <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </div> </div> </div> </a> <!-- Calculator 3 - Mortgage Payoff Calculator --> <a data-calc-link${addAttribute(withLang("/calculators/mortgage-payoff-calculator"), "href")} class="bg-white p-6 rounded-xl shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-gray-50 border-2 border-transparent hover:border-purple-600 block"> <div class="flex items-center"> <!-- Icon on the left --> <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path> </svg> </div> <!-- Content in the center --> <div class="flex-1 ml-4 text-left"> <h3 id="calculators-po-title" data-i18n="mortgageCalculators.cards.payoff.title" class="text-lg font-semibold text-gray-900 mb-1">${dict.mortgageCalculators?.cards?.payoff?.title || "Mortgage Payoff Calculator"}</h3> <p id="calculators-po-desc" data-i18n="mortgageCalculators.cards.payoff.description" class="text-sm text-gray-600">${dict.mortgageCalculators?.cards?.payoff?.description || "Calculate how much you can save by making extra payments on your mortgage"}</p> </div> <!-- Arrow positioned center-right --> <div class="flex items-center justify-center ml-4"> <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"> <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </div> </div> </div> </a> <!-- Calculator 4 - Home Valuation Tool --> <button id="openValuationModal" class="bg-white p-6 rounded-xl shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md hover:bg-gray-50 border-2 border-transparent hover:border-orange-600 block w-full"> <div class="flex items-center"> <!-- Icon on the left --> <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path> </svg> </div> <!-- Content in the center --> <div class="flex-1 ml-4 text-left"> <h3 id="calculators-hv-title" data-i18n="mortgageCalculators.cards.valuation.title" class="text-lg font-semibold text-gray-900 mb-1">${dict.mortgageCalculators?.cards?.valuation?.title || "Home Valuation Tool"}</h3> <p id="calculators-hv-desc" data-i18n="mortgageCalculators.cards.valuation.description" class="text-sm text-gray-600">${dict.mortgageCalculators?.cards?.valuation?.description || "Get an instant estimate of your property's current market value"}</p> </div> <!-- Arrow positioned center-right --> <div class="flex items-center justify-center ml-4"> <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"> <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </div> </div> </div> </button> </div> </div> </div> </section>  <div id="valuationModal" class="fixed inset-0 bg-black bg-opacity-50 z-50 hidden flex items-center justify-center p-4"> <div class="bg-white rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col"> <!-- Modal Header --> <div class="flex items-center justify-between p-6 border-b"> <h3 id="valuation-modal-title" data-i18n="mortgageCalculators.modal.title" class="text-xl font-semibold text-gray-900">${dict.mortgageCalculators?.modal?.title || "Home Valuation Tool"}</h3> <button id="closeValuationModal" class="text-gray-400 hover:text-gray-600 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Modal Content --> <div class="flex-1 p-6"> <iframe src="https://pedrolira.com" class="w-full h-full rounded-lg border-0"${addAttribute(dict.mortgageCalculators?.modal?.title || "Home Valuation Tool", "title")} id="valuation-iframe-title" loading="lazy">
				</iframe> </div> </div> </div>  ${renderComponent($$result2, "Contact", $$Contact, {})}  ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, {})}  ${renderComponent($$result2, "ImportantLegal", $$ImportantLegal, {})} ` }), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"), renderScript($$result, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/calculators.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/calculators.astro", void 0);

const $$file = "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/calculators.astro";
const $$url = "/calculators";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Calculators,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
