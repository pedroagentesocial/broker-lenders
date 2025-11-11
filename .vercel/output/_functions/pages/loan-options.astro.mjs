import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DtYm6sr6.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrnZoUeJ.mjs';
import { $ as $$ImportantLegal } from '../chunks/ImportantLegal_D8fhlbac.mjs';
import { $ as $$Contact } from '../chunks/Contact_CQxpJEPD.mjs';
import { $ as $$TestimonialsSection } from '../chunks/TestimonialsSection_D-wnH4dV.mjs';
export { renderers } from '../renderers.mjs';

const meta$1 = {"title":"Loan Options - Broker Lenders"};
const breadcrumb$1 = {"home":"Home","loanOptions":"Loan Options"};
const hero$1 = {"title":"Home financing that fits your goals","subtitle":"Personalized loan options for first-time buyers and refinances."};
const enLO = {
  meta: meta$1,
  breadcrumb: breadcrumb$1,
  hero: hero$1};

const meta = {"title":"Opciones de Préstamo - Broker Lenders"};
const breadcrumb = {"home":"Inicio","loanOptions":"Opciones de Préstamo"};
const hero = {"title":"Financiamiento de vivienda que se adapta a tus metas","subtitle":"Opciones de préstamos personalizadas para compradores por primera vez y refinanciamientos."};
const esLO = {
  meta,
  breadcrumb,
  hero};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$LoanOptions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LoanOptions;
  const cookie = Astro2.request.headers.get("cookie") || "";
  const cm = cookie.match(/(?:^|;\s*)lang=([^;]+)/);
  const cookieLang = cm && cm[1] ? cm[1].toLowerCase() : null;
  const rawParam = (Astro2.url.searchParams.get("lang") || "").toLowerCase();
  const raw = (rawParam || cookieLang || "en").toLowerCase();
  const lang = ["en", "es"].includes(raw) ? raw : "en";
  const dict = lang === "es" ? esLO : enLO;
  console.log("[i18n][loan-options][SSR] resolve", { href: Astro2.url.href, param: rawParam, cookieLang, resolvedLang: lang });
  Astro2.response.headers.set("Content-Type", "text/html; charset=UTF-8");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": dict?.meta?.title, "lang": lang }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["    ", '<div class="bg-white py-4"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <nav class="text-sm"> <a', ' class="text-gray-700 hover:text-gray-900" data-i18n="breadcrumb.home">', '</a> <span class="mx-2 text-gray-500">/</span> <span class="text-gray-700" data-i18n="breadcrumb.loanOptions">', '</span> </nav> </div> </div>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Left side - Content in gray rectangle --> <div class="bg-gray-100 p-8 lg:p-12 rounded-[48px] flex flex-col justify-center h-96"> <h1 id="loan-options-hero-title" class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">', '</h1> <p id="loan-options-hero-subtitle" class="text-lg text-gray-600">', `</p> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=happy%20family%20couple%20at%20home%2C%20smiling%20together%2C%20warm%20lighting%2C%20professional%20photography&image_size=landscape_4_3" alt="Happy family at home" class="w-full h-96 object-cover rounded-[48px]"> </div> </div> </div></section>  <section class="py-16 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-gray-100 p-8 lg:p-12 rounded-[48px]"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"> <!-- Columna 1: Texto --> <div class="lg:col-span-2"> <h2 class="text-3xl font-bold text-gray-900 mb-6" data-i18n="findBestFit.title">Find your best-fit loan</h2> <p class="text-lg text-gray-600" data-i18n="findBestFit.description">
Get recommendations tailored to your budget, timeline, and goals\u2014so you can move forward with confidence.
</p> </div> <!-- Columna 2: Bot\xF3n --> <div class="lg:col-span-1 flex justify-center lg:justify-end"> <a href="tel:+1-801-307-0273" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center" data-i18n="findBestFit.button">
See my options
</a> </div> </div> </div> </div> </section>   <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center" data-i18n="loanOptions.title">Broker Lenders\xAE loan options, built around you</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- FHA loans --> <a href="/loan-options/fha-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="fha"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.fha.title">FHA loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.fha.description">
Government-backed loans with lower down payment requirements and flexible credit guidelines.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- VA loans --> <a href="/loan-options/va-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="va"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.va.title">VA loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.va.description">
Exclusive benefits for military members, veterans, and eligible spouses with no down payment required.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- USDA loans --> <a href="/loan-options/usda-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="usda"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.usda.title">USDA loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.usda.description">
Rural development loans with no down payment for eligible properties in qualifying areas.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- Conventional loans --> <a href="/loan-options/conventional-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="conventional"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.conventional.title">Conventional loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.conventional.description">
Traditional mortgages with competitive rates and flexible terms for qualified borrowers.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- Jumbo loans --> <a href="/loan-options/jumbo-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="jumbo"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.jumbo.title">Jumbo loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.jumbo.description">
Financing for luxury homes and properties that exceed conventional loan limits.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- First-time homebuyer loans --> <a href="/loan-options/first-time-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="firstTime"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.firstTime.title">First-time homebuyer loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.firstTime.description">
Special programs designed to help first-time buyers achieve homeownership with lower barriers.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- Investment property loans --> <a href="/loan-options/investment-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="investment"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.investment.title">Investment property loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.investment.description">
Financing options for rental properties and real estate investments.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- Construction loans --> <a href="/loan-options/construction-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="construction"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.construction.title">Construction loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.construction.description">
Short-term financing to build your dream home from the ground up.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- Refinance loans --> <a href="/loan-options/refinance-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="refinance"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.refinance.title">Refinance loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.refinance.description">
Lower your rate, reduce your payment, or access your home's equity.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left side - Content in gray rectangle --> <div class="bg-gray-100 p-8 lg:p-12 rounded-[48px]"> <h2 class="text-3xl font-bold text-gray-900 mb-6" data-i18n="readyToFind.title">Ready to find your perfect loan?</h2> <p class="text-lg text-gray-600 mb-8" data-i18n="readyToFind.description">
Our mortgage experts are here to help you understand your options and find the right loan for your situation. Get personalized guidance every step of the way.
</p> <a href="tel:+1-801-307-0273" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center" data-i18n="readyToFind.button">
Talk with a expert
</a> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=smiling%20mortgage%20advisor%20helping%20couple%20choose%20home%20loan%20options%2C%20bright%20natural%20light%2C%20professional%20photography%2C%20warm%20and%20friendly&image_size=portrait_4_3" alt="Mortgage advisor" class="w-full h-96 object-cover rounded-2xl"> </div> </div> </div></section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-i18n="expertGuidance.title">Expert guidance for your home loan journey</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Step 1 --> <div class="text-center"> <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white font-bold text-xl">1</span> </div> <h3 class="text-lg font-bold text-gray-900 mb-2" data-i18n="expertGuidance.step1.title">Apply online</h3> <p class="text-gray-600" data-i18n="expertGuidance.step1.description">
Start your application online and get pre-approved in minutes.
</p> </div> <!-- Step 2 --> <div class="text-center"> <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white font-bold text-xl">2</span> </div> <h3 class="text-lg font-bold text-gray-900 mb-2" data-i18n="expertGuidance.step2.title">Know your next steps</h3> <p class="text-gray-600" data-i18n="expertGuidance.step2.description">
Get a clear roadmap of what to expect throughout the process.
</p> </div> <!-- Step 3 --> <div class="text-center"> <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white font-bold text-xl">3</span> </div> <h3 class="text-lg font-bold text-gray-900 mb-2" data-i18n="expertGuidance.step3.title">Finalize your loan</h3> <p class="text-gray-600" data-i18n="expertGuidance.step3.description">
Work with our team to finalize your loan and close on your home.
</p> </div> <!-- Step 4 --> <div class="text-center"> <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white font-bold text-xl">4</span> </div> <h3 class="text-lg font-bold text-gray-900 mb-2" data-i18n="expertGuidance.step4.title">Check if the goal</h3> <p class="text-gray-600" data-i18n="expertGuidance.step4.description">
Celebrate your homeownership achievement and enjoy your new home.
</p> </div> </div> </div> </section> `, "  ", "  ", ` <script type="module">
  import enLO from '/src/translations/loan-options/en.json';
  import esLO from '/src/translations/loan-options/es.json';
  (() => {
    const translations = { en: enLO, es: esLO };
    const getInitialLang = () => {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      const htmlLang = document.documentElement.getAttribute('lang');
      let cookieLang = null;
      try {
        const m = document.cookie.match(/(?:^|;\\s*)lang=([^;]+)/);
        cookieLang = m && m[1] ? m[1].toLowerCase() : null;
      } catch {}
      const stored = localStorage.getItem('lang');
      const raw = (urlLang || htmlLang || cookieLang || stored || 'en').toLowerCase();
      return raw === 'es' ? 'es' : 'en';
    };
    const setLanguage = (lang) => {
      const next = lang === 'es' ? 'es' : 'en';
      try { localStorage.setItem('lang', next); } catch {}
      try { document.cookie = \`lang=\${next}; path=/; max-age=\${60*60*24*365}; SameSite=Lax\`; } catch {}
      try { document.documentElement.setAttribute('lang', next); } catch {}
      const url = new URL(window.location.href);
      url.searchParams.set('lang', next);
      const newUrl = url.toString();
      if (newUrl !== window.location.href) {
        window.history.replaceState({}, '', newUrl);
      }
      return next;
    };
    const setText = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && typeof value === 'string') el.textContent = value;
    };
    const setTextById = (id, value) => {
      const el = document.getElementById(id);
      if (el && typeof value === 'string') el.textContent = value;
    };
    const preserveLangOnLoanLinks = (lang) => {
      const loanTypes = ['fha', 'va', 'usda', 'conventional', 'jumbo', 'firstTime', 'investment', 'construction', 'refinance'];
      loanTypes.forEach(loanType => {
        const linkElement = document.querySelector(\`[data-loan-link="\${loanType}"]\`);
        if (!linkElement) return;
        try {
          const href = new URL(linkElement.getAttribute('href') || '', window.location.origin);
          if (href.origin === window.location.origin) {
            href.searchParams.set('lang', lang);
            linkElement.setAttribute('href', href.pathname + href.search + href.hash);
          }
        } catch {}
      });
    };
    const applyTranslations = (lang) => {
      const dict = translations[lang] || translations.en;
      // Breadcrumb and title
      setText('[data-i18n="breadcrumb.home"]', dict?.breadcrumb?.home || 'Home');
      setText('[data-i18n="breadcrumb.loanOptions"]', dict?.breadcrumb?.loanOptions || 'Loan Options');
      if (dict?.meta?.title) document.title = dict.meta.title;
      // Hero
      setTextById('loan-options-hero-title', dict.hero.title);
      setTextById('loan-options-hero-subtitle', dict.hero.subtitle);
      // Find Best Fit
      setText('[data-i18n="findBestFit.title"]', dict.findBestFit.title);
      setText('[data-i18n="findBestFit.description"]', dict.findBestFit.description);
      setText('[data-i18n="findBestFit.button"]', dict.findBestFit.button);
      // Loan options section
      setText('[data-i18n="loanOptions.title"]', dict.loanOptions.title);
      setText('[data-i18n="loanOptions.learnMore"]', dict.loanOptions.learnMore);
      const loanTypes = ['fha', 'va', 'usda', 'conventional', 'jumbo', 'firstTime', 'investment', 'construction', 'refinance'];
      loanTypes.forEach(loanType => {
        setText(\`[data-i18n="loanOptions.loans.\${loanType}.title"]\`, dict.loanOptions.loans[loanType].title);
        setText(\`[data-i18n="loanOptions.loans.\${loanType}.description"]\`, dict.loanOptions.loans[loanType].description);
      });
      // Ready to find
      setText('[data-i18n="readyToFind.title"]', dict.readyToFind.title);
      setText('[data-i18n="readyToFind.description"]', dict.readyToFind.description);
      setText('[data-i18n="readyToFind.button"]', dict.readyToFind.button);
      // Expert guidance
      setText('[data-i18n="expertGuidance.title"]', dict.expertGuidance.title);
      setText('[data-i18n="expertGuidance.step1.title"]', dict.expertGuidance.steps.step1.title);
      setText('[data-i18n="expertGuidance.step1.description"]', dict.expertGuidance.steps.step1.description);
      setText('[data-i18n="expertGuidance.step2.title"]', dict.expertGuidance.steps.step2.title);
      setText('[data-i18n="expertGuidance.step2.description"]', dict.expertGuidance.steps.step2.description);
      setText('[data-i18n="expertGuidance.step3.title"]', dict.expertGuidance.steps.step3.title);
      setText('[data-i18n="expertGuidance.step3.description"]', dict.expertGuidance.steps.step3.description);
      setText('[data-i18n="expertGuidance.step4.title"]', dict.expertGuidance.steps.step4.title);
      setText('[data-i18n="expertGuidance.step4.description"]', dict.expertGuidance.steps.step4.description);
      // Preserve lang param on loan links
      preserveLangOnLoanLinks(lang);
    };
    // Init
    applyTranslations(setLanguage(getInitialLang()));
    // React to language menu clicks (Header)
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href*="?lang="]');
      if (!a) return;
      let href;
      try { href = new URL(a.href, window.location.origin); } catch { return; }
      const lang = href.searchParams.get('lang');
      if (lang) applyTranslations(setLanguage(lang));
    });
    // Respond to storage events
    window.addEventListener('storage', (ev) => {
      if (ev.key === 'lang' && ev.newValue) applyTranslations(ev.newValue);
    });
  })();
  <\/script> `], ["    ", '<div class="bg-white py-4"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <nav class="text-sm"> <a', ' class="text-gray-700 hover:text-gray-900" data-i18n="breadcrumb.home">', '</a> <span class="mx-2 text-gray-500">/</span> <span class="text-gray-700" data-i18n="breadcrumb.loanOptions">', '</span> </nav> </div> </div>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Left side - Content in gray rectangle --> <div class="bg-gray-100 p-8 lg:p-12 rounded-[48px] flex flex-col justify-center h-96"> <h1 id="loan-options-hero-title" class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">', '</h1> <p id="loan-options-hero-subtitle" class="text-lg text-gray-600">', `</p> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=happy%20family%20couple%20at%20home%2C%20smiling%20together%2C%20warm%20lighting%2C%20professional%20photography&image_size=landscape_4_3" alt="Happy family at home" class="w-full h-96 object-cover rounded-[48px]"> </div> </div> </div></section>  <section class="py-16 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-gray-100 p-8 lg:p-12 rounded-[48px]"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"> <!-- Columna 1: Texto --> <div class="lg:col-span-2"> <h2 class="text-3xl font-bold text-gray-900 mb-6" data-i18n="findBestFit.title">Find your best-fit loan</h2> <p class="text-lg text-gray-600" data-i18n="findBestFit.description">
Get recommendations tailored to your budget, timeline, and goals\u2014so you can move forward with confidence.
</p> </div> <!-- Columna 2: Bot\xF3n --> <div class="lg:col-span-1 flex justify-center lg:justify-end"> <a href="tel:+1-801-307-0273" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center" data-i18n="findBestFit.button">
See my options
</a> </div> </div> </div> </div> </section>   <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center" data-i18n="loanOptions.title">Broker Lenders\xAE loan options, built around you</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- FHA loans --> <a href="/loan-options/fha-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="fha"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.fha.title">FHA loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.fha.description">
Government-backed loans with lower down payment requirements and flexible credit guidelines.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- VA loans --> <a href="/loan-options/va-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="va"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.va.title">VA loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.va.description">
Exclusive benefits for military members, veterans, and eligible spouses with no down payment required.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- USDA loans --> <a href="/loan-options/usda-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="usda"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.usda.title">USDA loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.usda.description">
Rural development loans with no down payment for eligible properties in qualifying areas.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- Conventional loans --> <a href="/loan-options/conventional-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="conventional"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.conventional.title">Conventional loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.conventional.description">
Traditional mortgages with competitive rates and flexible terms for qualified borrowers.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- Jumbo loans --> <a href="/loan-options/jumbo-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="jumbo"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.jumbo.title">Jumbo loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.jumbo.description">
Financing for luxury homes and properties that exceed conventional loan limits.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- First-time homebuyer loans --> <a href="/loan-options/first-time-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="firstTime"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.firstTime.title">First-time homebuyer loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.firstTime.description">
Special programs designed to help first-time buyers achieve homeownership with lower barriers.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- Investment property loans --> <a href="/loan-options/investment-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="investment"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.investment.title">Investment property loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.investment.description">
Financing options for rental properties and real estate investments.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- Construction loans --> <a href="/loan-options/construction-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="construction"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.construction.title">Construction loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.construction.description">
Short-term financing to build your dream home from the ground up.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> <!-- Refinance loans --> <a href="/loan-options/refinance-loan" class="block bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-black transition-colors" data-loan-link="refinance"> <h3 class="text-xl font-bold text-gray-900 mb-4" data-i18n="loanOptions.loans.refinance.title">Refinance loans</h3> <p class="text-gray-600 mb-6" data-i18n="loanOptions.loans.refinance.description">
Lower your rate, reduce your payment, or access your home's equity.
</p> <span class="text-black font-semibold underline hover:underline" data-i18n="loanOptions.learnMore">Learn more \u2192</span> </a> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left side - Content in gray rectangle --> <div class="bg-gray-100 p-8 lg:p-12 rounded-[48px]"> <h2 class="text-3xl font-bold text-gray-900 mb-6" data-i18n="readyToFind.title">Ready to find your perfect loan?</h2> <p class="text-lg text-gray-600 mb-8" data-i18n="readyToFind.description">
Our mortgage experts are here to help you understand your options and find the right loan for your situation. Get personalized guidance every step of the way.
</p> <a href="tel:+1-801-307-0273" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center" data-i18n="readyToFind.button">
Talk with a expert
</a> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=smiling%20mortgage%20advisor%20helping%20couple%20choose%20home%20loan%20options%2C%20bright%20natural%20light%2C%20professional%20photography%2C%20warm%20and%20friendly&image_size=portrait_4_3" alt="Mortgage advisor" class="w-full h-96 object-cover rounded-2xl"> </div> </div> </div></section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-i18n="expertGuidance.title">Expert guidance for your home loan journey</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Step 1 --> <div class="text-center"> <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white font-bold text-xl">1</span> </div> <h3 class="text-lg font-bold text-gray-900 mb-2" data-i18n="expertGuidance.step1.title">Apply online</h3> <p class="text-gray-600" data-i18n="expertGuidance.step1.description">
Start your application online and get pre-approved in minutes.
</p> </div> <!-- Step 2 --> <div class="text-center"> <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white font-bold text-xl">2</span> </div> <h3 class="text-lg font-bold text-gray-900 mb-2" data-i18n="expertGuidance.step2.title">Know your next steps</h3> <p class="text-gray-600" data-i18n="expertGuidance.step2.description">
Get a clear roadmap of what to expect throughout the process.
</p> </div> <!-- Step 3 --> <div class="text-center"> <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white font-bold text-xl">3</span> </div> <h3 class="text-lg font-bold text-gray-900 mb-2" data-i18n="expertGuidance.step3.title">Finalize your loan</h3> <p class="text-gray-600" data-i18n="expertGuidance.step3.description">
Work with our team to finalize your loan and close on your home.
</p> </div> <!-- Step 4 --> <div class="text-center"> <div class="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4"> <span class="text-white font-bold text-xl">4</span> </div> <h3 class="text-lg font-bold text-gray-900 mb-2" data-i18n="expertGuidance.step4.title">Check if the goal</h3> <p class="text-gray-600" data-i18n="expertGuidance.step4.description">
Celebrate your homeownership achievement and enjoy your new home.
</p> </div> </div> </div> </section> `, "  ", "  ", ` <script type="module">
  import enLO from '/src/translations/loan-options/en.json';
  import esLO from '/src/translations/loan-options/es.json';
  (() => {
    const translations = { en: enLO, es: esLO };
    const getInitialLang = () => {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      const htmlLang = document.documentElement.getAttribute('lang');
      let cookieLang = null;
      try {
        const m = document.cookie.match(/(?:^|;\\\\s*)lang=([^;]+)/);
        cookieLang = m && m[1] ? m[1].toLowerCase() : null;
      } catch {}
      const stored = localStorage.getItem('lang');
      const raw = (urlLang || htmlLang || cookieLang || stored || 'en').toLowerCase();
      return raw === 'es' ? 'es' : 'en';
    };
    const setLanguage = (lang) => {
      const next = lang === 'es' ? 'es' : 'en';
      try { localStorage.setItem('lang', next); } catch {}
      try { document.cookie = \\\`lang=\\\${next}; path=/; max-age=\\\${60*60*24*365}; SameSite=Lax\\\`; } catch {}
      try { document.documentElement.setAttribute('lang', next); } catch {}
      const url = new URL(window.location.href);
      url.searchParams.set('lang', next);
      const newUrl = url.toString();
      if (newUrl !== window.location.href) {
        window.history.replaceState({}, '', newUrl);
      }
      return next;
    };
    const setText = (selector, value) => {
      const el = document.querySelector(selector);
      if (el && typeof value === 'string') el.textContent = value;
    };
    const setTextById = (id, value) => {
      const el = document.getElementById(id);
      if (el && typeof value === 'string') el.textContent = value;
    };
    const preserveLangOnLoanLinks = (lang) => {
      const loanTypes = ['fha', 'va', 'usda', 'conventional', 'jumbo', 'firstTime', 'investment', 'construction', 'refinance'];
      loanTypes.forEach(loanType => {
        const linkElement = document.querySelector(\\\`[data-loan-link="\\\${loanType}"]\\\`);
        if (!linkElement) return;
        try {
          const href = new URL(linkElement.getAttribute('href') || '', window.location.origin);
          if (href.origin === window.location.origin) {
            href.searchParams.set('lang', lang);
            linkElement.setAttribute('href', href.pathname + href.search + href.hash);
          }
        } catch {}
      });
    };
    const applyTranslations = (lang) => {
      const dict = translations[lang] || translations.en;
      // Breadcrumb and title
      setText('[data-i18n="breadcrumb.home"]', dict?.breadcrumb?.home || 'Home');
      setText('[data-i18n="breadcrumb.loanOptions"]', dict?.breadcrumb?.loanOptions || 'Loan Options');
      if (dict?.meta?.title) document.title = dict.meta.title;
      // Hero
      setTextById('loan-options-hero-title', dict.hero.title);
      setTextById('loan-options-hero-subtitle', dict.hero.subtitle);
      // Find Best Fit
      setText('[data-i18n="findBestFit.title"]', dict.findBestFit.title);
      setText('[data-i18n="findBestFit.description"]', dict.findBestFit.description);
      setText('[data-i18n="findBestFit.button"]', dict.findBestFit.button);
      // Loan options section
      setText('[data-i18n="loanOptions.title"]', dict.loanOptions.title);
      setText('[data-i18n="loanOptions.learnMore"]', dict.loanOptions.learnMore);
      const loanTypes = ['fha', 'va', 'usda', 'conventional', 'jumbo', 'firstTime', 'investment', 'construction', 'refinance'];
      loanTypes.forEach(loanType => {
        setText(\\\`[data-i18n="loanOptions.loans.\\\${loanType}.title"]\\\`, dict.loanOptions.loans[loanType].title);
        setText(\\\`[data-i18n="loanOptions.loans.\\\${loanType}.description"]\\\`, dict.loanOptions.loans[loanType].description);
      });
      // Ready to find
      setText('[data-i18n="readyToFind.title"]', dict.readyToFind.title);
      setText('[data-i18n="readyToFind.description"]', dict.readyToFind.description);
      setText('[data-i18n="readyToFind.button"]', dict.readyToFind.button);
      // Expert guidance
      setText('[data-i18n="expertGuidance.title"]', dict.expertGuidance.title);
      setText('[data-i18n="expertGuidance.step1.title"]', dict.expertGuidance.steps.step1.title);
      setText('[data-i18n="expertGuidance.step1.description"]', dict.expertGuidance.steps.step1.description);
      setText('[data-i18n="expertGuidance.step2.title"]', dict.expertGuidance.steps.step2.title);
      setText('[data-i18n="expertGuidance.step2.description"]', dict.expertGuidance.steps.step2.description);
      setText('[data-i18n="expertGuidance.step3.title"]', dict.expertGuidance.steps.step3.title);
      setText('[data-i18n="expertGuidance.step3.description"]', dict.expertGuidance.steps.step3.description);
      setText('[data-i18n="expertGuidance.step4.title"]', dict.expertGuidance.steps.step4.title);
      setText('[data-i18n="expertGuidance.step4.description"]', dict.expertGuidance.steps.step4.description);
      // Preserve lang param on loan links
      preserveLangOnLoanLinks(lang);
    };
    // Init
    applyTranslations(setLanguage(getInitialLang()));
    // React to language menu clicks (Header)
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href*="?lang="]');
      if (!a) return;
      let href;
      try { href = new URL(a.href, window.location.origin); } catch { return; }
      const lang = href.searchParams.get('lang');
      if (lang) applyTranslations(setLanguage(lang));
    });
    // Respond to storage events
    window.addEventListener('storage', (ev) => {
      if (ev.key === 'lang' && ev.newValue) applyTranslations(ev.newValue);
    });
  })();
  <\/script> `])), maybeRenderHead(), addAttribute(`/?lang=${lang}`, "href"), dict?.breadcrumb?.home, dict?.breadcrumb?.loanOptions, dict.hero.title, dict.hero.subtitle, renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, {}), renderComponent($$result2, "Contact", $$Contact, {}), renderComponent($$result2, "ImportantLegal", $$ImportantLegal, {})) })}`;
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/loan-options.astro", void 0);

const $$file = "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/loan-options.astro";
const $$url = "/loan-options";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LoanOptions,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
