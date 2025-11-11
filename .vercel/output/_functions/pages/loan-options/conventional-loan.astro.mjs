import { e as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, f as createAstro, k as renderComponent } from '../../chunks/astro/server_DtYm6sr6.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CrnZoUeJ.mjs';
import { $ as $$WaysHelp } from '../../chunks/WaysHelp_A8UvI0oV.mjs';
import 'clsx';
import { $ as $$Contact } from '../../chunks/Contact_CQxpJEPD.mjs';
import { $ as $$ImportantLegal } from '../../chunks/ImportantLegal_D8fhlbac.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$FAQSectionConventional = createComponent(($$result, $$props, $$slots) => {
  const faqItems = [
    { question: "What is a conventional loan?", answer: "A conventional loan is not insured by a government agency (FHA, VA, USDA). It typically offers competitive rates and flexible terms for well-qualified borrowers." },
    { question: "How much is the minimum down payment?", answer: "Down payments typically start at 3% for primary residences (first-time buyers) and 5%+, depending on occupancy, credit, and loan type." },
    { question: "Do conventional loans require PMI?", answer: "Private Mortgage Insurance (PMI) is required when the down payment is less than 20%. PMI can be removed once you reach 80% loan-to-value." },
    { question: "What credit score do I need?", answer: "Most lenders look for a 620+ FICO score. Better scores generally help you qualify for lower rates and better terms." },
    { question: "Fixed vs. Adjustable (ARM): which should I choose?", answer: "Fixed-rate loans keep the same rate for the life of the loan. ARMs start lower but can adjust later. The right choice depends on your timeline and risk tolerance." },
    { question: "Can I use a conventional loan for investment properties?", answer: "Yes. Conventional loans can finance primary homes, second homes, and investment properties. Requirements are stricter for investment properties." },
    { question: "How long does closing take?", answer: "Typical timelines are 25\u201335 days, depending on appraisal timing, documentation, and underwriting. We help you move efficiently." }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12"> <div class="lg:col-span-4"> <h2 class="text-3xl font-bold text-gray-900 mb-4">FAQ's about Conventional loans</h2> <p class="text-gray-600">Answers to common questions about conventional financing.</p> </div> <div class="lg:col-span-8" id="faq-accordion"> <div class="space-y-4"> `, " </div> </div> </div> </div> <script>\n    document.addEventListener('DOMContentLoaded', function() {\n      const accordion = document.getElementById('faq-accordion');\n      if (!accordion) return;\n      accordion.addEventListener('click', function(e) {\n        const question = e.target.closest('.faq-question');\n        if (!question) return;\n        e.preventDefault();\n        const index = question.getAttribute('data-index');\n        const content = document.getElementById(`faq-answer-${index}`);\n        const icon = question.querySelector('.faq-icon');\n        if (!content || !icon) return;\n        const isExpanded = question.getAttribute('aria-expanded') === 'true';\n        const allContents = accordion.querySelectorAll('.faq-content');\n        const allIcons = accordion.querySelectorAll('.faq-icon');\n        const allQuestions = accordion.querySelectorAll('.faq-question');\n        allContents.forEach((item, i) => {\n          if (item.id !== `faq-answer-${index}`) {\n            item.style.display = 'none';\n            allIcons[i].classList.remove('rotate-180');\n            allQuestions[i].setAttribute('aria-expanded', 'false');\n          }\n        });\n        if (isExpanded) {\n          content.style.display = 'none';\n          icon.classList.remove('rotate-180');\n          question.setAttribute('aria-expanded', 'false');\n        } else {\n          content.style.display = 'block';\n          icon.classList.add('rotate-180');\n          question.setAttribute('aria-expanded', 'true');\n        }\n      });\n    });\n  <\/script> </section>"], ["", `<section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12"> <div class="lg:col-span-4"> <h2 class="text-3xl font-bold text-gray-900 mb-4">FAQ's about Conventional loans</h2> <p class="text-gray-600">Answers to common questions about conventional financing.</p> </div> <div class="lg:col-span-8" id="faq-accordion"> <div class="space-y-4"> `, " </div> </div> </div> </div> <script>\n    document.addEventListener('DOMContentLoaded', function() {\n      const accordion = document.getElementById('faq-accordion');\n      if (!accordion) return;\n      accordion.addEventListener('click', function(e) {\n        const question = e.target.closest('.faq-question');\n        if (!question) return;\n        e.preventDefault();\n        const index = question.getAttribute('data-index');\n        const content = document.getElementById(\\`faq-answer-\\${index}\\`);\n        const icon = question.querySelector('.faq-icon');\n        if (!content || !icon) return;\n        const isExpanded = question.getAttribute('aria-expanded') === 'true';\n        const allContents = accordion.querySelectorAll('.faq-content');\n        const allIcons = accordion.querySelectorAll('.faq-icon');\n        const allQuestions = accordion.querySelectorAll('.faq-question');\n        allContents.forEach((item, i) => {\n          if (item.id !== \\`faq-answer-\\${index}\\`) {\n            item.style.display = 'none';\n            allIcons[i].classList.remove('rotate-180');\n            allQuestions[i].setAttribute('aria-expanded', 'false');\n          }\n        });\n        if (isExpanded) {\n          content.style.display = 'none';\n          icon.classList.remove('rotate-180');\n          question.setAttribute('aria-expanded', 'false');\n        } else {\n          content.style.display = 'block';\n          icon.classList.add('rotate-180');\n          question.setAttribute('aria-expanded', 'true');\n        }\n      });\n    });\n  <\/script> </section>"])), maybeRenderHead(), faqItems.map((item, index) => renderTemplate`<div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"> <button type="button" class="faq-question w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"${addAttribute(index, "data-index")} aria-expanded="false"${addAttribute(`faq-answer-${index}`, "aria-controls")}> <span class="font-semibold text-gray-900">${item.question}</span> <svg class="faq-icon w-5 h-5 text-gray-400 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </button> <div${addAttribute(`faq-answer-${index}`, "id")} class="faq-content px-6 py-0 border-t border-gray-100" style="display: none;"> <div class="py-4 text-gray-600">${item.answer}</div> </div> </div>`));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/FAQSectionConventional.astro", void 0);

const title$1 = "Conventional Loan - Broker Lenders";
const breadcrumb$1 = {"home":"Home","loanOptions":"Loan options","conventionalLoan":"Conventional loan"};
const hero$1 = {"title":"Conventional loan","subtitle":"Flexible financing for primary, second homes, and investment properties.","getStarted":"Get started","callNow":"Call (801) 307-0273"};
const whyChoose$1 = {"title":"Why choose Broker Lenders for conventional loans?","flexibleOptions":{"title":"Flexible loan options","description":"Choose fixed or adjustable rates for primary or investment properties."},"competitiveRates":{"title":"Competitive rates","description":"Access great pricing with transparent terms and clear guidance."},"personalizedGuidance":{"title":"Personalized guidance","description":"Work with experts who understand your goals and financing needs."},"getStarted":"Get started"};
const answersSection$1 = {"title":"Answers when you need them.","subtitle":"Real people when it matters.","description":"Explore conventional loan requirements, closing timelines, and payment strategy.","clearGuidelines":{"title":"Clear underwriting guidelines","description":"Understand income, assets, and property rules up front."},"fastClosings":{"title":"Fast closings","description":"Plan your timeline with confidence and fewer surprises."},"paymentStrategy":{"title":"Payment strategy advice","description":"Get help choosing fixed vs. adjustable rates for your goals."},"getStarted":"Get started","callNow":"Call (801) 307-0273"};
const enDict = {
  title: title$1,
  breadcrumb: breadcrumb$1,
  hero: hero$1,
  whyChoose: whyChoose$1,
  answersSection: answersSection$1,
};

const title = "Préstamo Convencional - Broker Lenders";
const breadcrumb = {"home":"Inicio","loanOptions":"Opciones de préstamos","conventionalLoan":"Préstamo convencional"};
const hero = {"title":"Préstamo convencional","subtitle":"Financiamiento flexible para viviendas principales, segundas viviendas e inversiones inmobiliarias.","getStarted":"Comenzar","callNow":"Llamar (801) 307-0273"};
const whyChoose = {"title":"¿Por qué elegir Broker Lenders para préstamos convencionales?","flexibleOptions":{"title":"Opciones de préstamo flexibles","description":"Elija tasas fijas o ajustables para viviendas principales o propiedades de inversión."},"competitiveRates":{"title":"Tasas competitivas","description":"Acceda a excelentes precios con términos transparentes y orientación clara."},"personalizedGuidance":{"title":"Orientación personalizada","description":"Trabaje con expertos que entienden sus metas y necesidades de financiamiento."},"getStarted":"Comenzar"};
const answersSection = {"title":"Respuestas cuando las necesita.","subtitle":"Personas reales cuando importa.","description":"Explore los requisitos del préstamo convencional, cronogramas de cierre y estrategias de pago.","clearGuidelines":{"title":"Pautas claras de suscripción","description":"Entienda los ingresos, activos y reglas de propiedad desde el principio."},"fastClosings":{"title":"Cierres rápidos","description":"Planifique su cronograma con confianza y menos sorpresas."},"paymentStrategy":{"title":"Asesoramiento en estrategia de pago","description":"Obtenga ayuda para elegir entre tasas fijas o ajustables según sus objetivos."},"getStarted":"Comenzar","callNow":"Llamar (801) 307-0273"};
const esDict = {
  title,
  breadcrumb,
  hero,
  whyChoose,
  answersSection,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$ConventionalLoan = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ConventionalLoan;
  Astro2.response.headers.set("Content-Type", "text/html; charset=UTF-8");
  const reqUrl = new URL(Astro2.request.url);
  const qsLang = (reqUrl.searchParams.get("lang") || "").toLowerCase();
  const cookieHeader = Astro2.request.headers.get("cookie") || "";
  const cookieLangMatch = cookieHeader.match(/(?:^|;\s*)lang=([^;]+)/);
  const cookieLang = (cookieLangMatch?.[1] || "").toLowerCase();
  const langParam = qsLang || cookieLang || "en";
  const lang = ["en", "es"].includes(langParam) ? langParam : "en";
  const dict = lang === "es" ? esDict : enDict;
  const enB64 = Buffer.from(JSON.stringify(enDict)).toString("base64");
  const esB64 = Buffer.from(JSON.stringify(esDict)).toString("base64");
  return renderTemplate(_a || (_a = __template(["<!-- i18n dynamic translations for Conventional Loan page -->", '<div id="i18n-conventional"', "", ` style="display:none"></div> <script>
  (() => {
    const payloadEl = document.getElementById('i18n-conventional');
    const decode = (val) => {
      try {
        const b64 = val || '';
        const bin = atob(b64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        let jsonText = '';
        try {
          jsonText = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
        } catch {
          try {
            const percent = Array.from(bin, c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join('');
            jsonText = decodeURIComponent(percent);
          } catch {
            jsonText = bin;
          }
        }
        try { return JSON.parse(jsonText); } catch { return {}; }
      } catch { return {}; }
    };
    const translations = {
      en: decode(payloadEl?.getAttribute('data-en') || ''),
      es: decode(payloadEl?.getAttribute('data-es') || ''),
    };
    const getInitialLang = () => {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      const stored = localStorage.getItem('lang');
      return (urlLang || stored || 'en');
    };
    const resolvePath = (obj, path) => {
      try {
        const parts = (path || '').split('.');
        let cur = obj;
        for (const p of parts) {
          if (cur && typeof cur === 'object' && p in cur) cur = cur[p]; else return null;
        }
        return typeof cur === 'string' ? cur : null;
      } catch { return null; }
    };
    const preserveLangOnLocalLinks = (lang) => {
      try {
        const localLinks = document.querySelectorAll('a[href^="/"]');
        localLinks.forEach(a => {
          const raw = a.getAttribute('href');
          if (!raw || raw.startsWith('#') || raw.startsWith('tel:') || raw.startsWith('mailto:') || /([?&])lang=/.test(raw)) return;
          let href;
          try { href = new URL(a.href, window.location.origin); } catch { return; }
          if (href.origin !== window.location.origin) return;
          if (lang) {
            href.searchParams.set('lang', lang);
            a.setAttribute('href', href.pathname + href.search + href.hash);
          }
        });
      } catch {}
    };
    const applyTranslations = (lang) => {
      const dict = translations[lang] || translations.en;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = resolvePath(dict, key);
        if (typeof val === 'string') {
          if (val.includes('<')) { el.innerHTML = val; } else { el.textContent = val; }
        }
      });
      document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        const val = resolvePath(dict, key);
        if (typeof val === 'string') el.setAttribute('alt', val);
      });
      if (typeof dict.title === 'string') document.title = dict.title;
      preserveLangOnLocalLinks(lang);
    };
    const __initLang = getInitialLang();
    applyTranslations(__initLang);
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href*="?lang="]');
      if (!a) return;
      let href;
      try { href = new URL(a.href, window.location.origin); } catch { return; }
      const newLang = href.searchParams.get('lang');
      if (newLang) {
        localStorage.setItem('lang', newLang);
        applyTranslations(newLang);
        preserveLangOnLocalLinks(newLang);
      }
    });
    window.addEventListener('popstate', () => {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      const lang = (urlLang || localStorage.getItem('lang') || 'en');
      applyTranslations(lang);
      preserveLangOnLocalLinks(lang);
    });
    window.addEventListener('storage', (ev) => {
      if (ev.key === 'lang' && ev.newValue) {
        applyTranslations(ev.newValue);
        preserveLangOnLocalLinks(ev.newValue);
      }
    });
  })();
<\/script> `, ""])), maybeRenderHead(), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"), renderComponent($$result, "Layout", $$Layout, { "title": dict.title }, { "default": ($$result2) => renderTemplate`  <div class="bg-white py-4"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <nav class="text-sm"> <a${addAttribute(`/?lang=${lang}`, "href")} class="text-gray-700 hover:text-gray-900" data-i18n="breadcrumb.home">${dict.breadcrumb.home}</a> <span class="mx-2 text-gray-500">/</span> <a${addAttribute(`/loan-options?lang=${lang}`, "href")} class="text-gray-700 hover:text-gray-900" data-i18n="breadcrumb.loanOptions">${dict.breadcrumb.loanOptions}</a> <span class="mx-2 text-gray-500">/</span> <span class="text-gray-700" data-i18n="breadcrumb.conventionalLoan">${dict.breadcrumb.conventionalLoan}</span> </nav> </div> </div>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Left side - Content --> <div class="flex flex-col justify-center"> <div class="bg-gray-100 rounded-[48px] p-8 lg:p-10 h-96 flex flex-col justify-center"> <div class="space-y-6"> <h1 class="text-4xl lg:text-5xl font-bold text-gray-900" data-i18n="hero.title"> ${dict.hero.title} </h1> <p class="text-lg text-gray-600" data-i18n="hero.subtitle"> ${dict.hero.subtitle} </p> <div class="flex items-center gap-4"> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center w-fit" data-i18n="hero.getStarted"> ${dict.hero.getStarted} </a> <a href="tel:8013070273" class="bg-white text-black border border-black px-6 py-3 rounded-[48px] font-semibold transition-colors inline-flex items-center justify-center hover:bg-black hover:text-white w-fit" data-i18n="hero.callNow"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${dict.hero.callNow} </a> </div> </div> </div> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=conventional%20loan%20happy%20family%20in%20new%20home%2C%20bright%20natural%20light%2C%20professional%20photography&image_size=landscape_4_3" alt="Happy family in new home" class="w-full h-96 object-cover rounded-2xl"> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"> <!-- Left: Image --> <div class="h-full"> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=couple%20meeting%20mortgage%20advisor%20for%20conventional%20loan%2C%20modern%20office%2C%20smiling%2C%20documents%20on%20table%2C%20bright%20natural%20light%2C%20professional%20photography&image_size=landscape_4_3" alt="Couple meeting mortgage advisor" class="w-full h-full object-cover rounded-2xl"> </div> <!-- Right: Content --> <div class="flex flex-col justify-center h-full"> <h2 class="text-3xl font-bold text-gray-900 mb-6" data-i18n="whyChoose.title">${dict.whyChoose.title}</h2> <div class="space-y-6 mb-8"> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h3 class="font-semibold text-gray-900" data-i18n="whyChoose.flexibleOptions.title">${dict.whyChoose.flexibleOptions.title}</h3> <p class="text-gray-600" data-i18n="whyChoose.flexibleOptions.description">${dict.whyChoose.flexibleOptions.description}</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h3 class="font-semibold text-gray-900" data-i18n="whyChoose.competitiveRates.title">${dict.whyChoose.competitiveRates.title}</h3> <p class="text-gray-600" data-i18n="whyChoose.competitiveRates.description">${dict.whyChoose.competitiveRates.description}</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h3 class="font-semibold text-gray-900" data-i18n="whyChoose.personalizedGuidance.title">${dict.whyChoose.personalizedGuidance.title}</h3> <p class="text-gray-600" data-i18n="whyChoose.personalizedGuidance.description">${dict.whyChoose.personalizedGuidance.description}</p> </div> </div> </div> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-black text-white hover:bg-red-600 hover:text-white px-6 py-3 rounded-[48px] font-semibold transition-colors w-fit" data-i18n="whyChoose.getStarted"> ${dict.whyChoose.getStarted} </a> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Left side - Content --> <div class="bg-gray-100 p-8 lg:p-12 rounded-2xl flex flex-col justify-center"> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-i18n="answersSection.title"> ${dict.answersSection.title} </h2> <h3 class="text-xl font-semibold text-gray-700 mb-6" data-i18n="answersSection.subtitle"> ${dict.answersSection.subtitle} </h3> <p class="text-gray-600 mb-8" data-i18n="answersSection.description"> ${dict.answersSection.description} </p> <div class="space-y-4 mb-8"> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h4 class="font-semibold text-gray-900" data-i18n="answersSection.clearGuidelines.title">${dict.answersSection.clearGuidelines.title}</h4> <p class="text-gray-600" data-i18n="answersSection.clearGuidelines.description">${dict.answersSection.clearGuidelines.description}</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h4 class="font-semibold text-gray-900" data-i18n="answersSection.fastClosings.title">${dict.answersSection.fastClosings.title}</h4> <p class="text-gray-600" data-i18n="answersSection.fastClosings.description">${dict.answersSection.fastClosings.description}</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h4 class="font-semibold text-gray-900" data-i18n="answersSection.paymentStrategy.title">${dict.answersSection.paymentStrategy.title}</h4> <p class="text-gray-600" data-i18n="answersSection.paymentStrategy.description">${dict.answersSection.paymentStrategy.description}</p> </div> </div> </div> <div class="flex items-center gap-4"> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center w-fit" data-i18n="answersSection.getStarted"> ${dict.answersSection.getStarted} </a> <a href="tel:8013070273" class="bg-white text-black border border-black px-6 py-3 rounded-[48px] font-semibold transition-colors inline-flex items-center justify-center hover:bg-black hover:text-white w-fit" data-i18n="answersSection.callNow"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${dict.answersSection.callNow} </a> </div> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=conventional%20loan%20couple%20discussing%20options%20with%20advisor%2C%20bright%20natural%20light%2C%20professional%20photography&image_size=landscape_4_3" alt="Conventional loan discussion" class="w-full h-96 object-cover rounded-2xl"> </div> </div> </div> </section>  ${renderComponent($$result2, "WaysHelp", $$WaysHelp, {})}  ${renderComponent($$result2, "FAQSectionConventional", $$FAQSectionConventional, {})}  ${renderComponent($$result2, "Contact", $$Contact, {})}  <section class="py-16 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold text-gray-900 mb-8">
Move forward with a Conventional loan
</h2> <div class="flex items-center justify-center gap-4"> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center" data-i18n="answersSection.getStarted"> ${dict.answersSection.getStarted} </a> <a href="tel:8013070273" class="bg-white text-black border border-black px-6 py-3 rounded-[48px] font-semibold transition-colors inline-flex items-center justify-center hover:bg-black hover:text-white" data-i18n="answersSection.callNow"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${dict.answersSection.callNow} </a> </div> </div> </section>  ${renderComponent($$result2, "ImportantLegal", $$ImportantLegal, {})} ` }));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/loan-options/conventional-loan.astro", void 0);

const $$file = "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/loan-options/conventional-loan.astro";
const $$url = "/loan-options/conventional-loan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ConventionalLoan,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
