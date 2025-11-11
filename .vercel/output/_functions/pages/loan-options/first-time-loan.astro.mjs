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
const $$FAQSectionFirstTime = createComponent(($$result, $$props, $$slots) => {
  const faqItems = [
    { question: "Who qualifies as a first-time homebuyer?", answer: "Typically someone who hasn\u2019t owned a home in the past three years. Some programs have additional criteria." },
    { question: "What down payment options exist?", answer: "Programs may offer low or 0% down depending on eligibility (e.g., FHA 3.5%, VA 0%, USDA 0%)." },
    { question: "Are there assistance programs?", answer: "Yes. Local, state, and national grants or DPA programs can help with down payment and closing costs." },
    { question: "What credit score do I need?", answer: "Minimum scores vary by program. We\u2019ll guide you to the best fit and help with improvement plans if needed." },
    { question: "What are closing costs?", answer: "Typical costs include lender fees, appraisal, title, escrow, and prepaids. We provide a transparent estimate upfront." },
    { question: "Should I get pre-approved?", answer: "Absolutely. Pre-approval clarifies budget, strengthens offers, and speeds up closing once you find a home." },
    { question: "Can I use gift funds?", answer: "Often yes, depending on the program. We\u2019ll help document properly for underwriting." }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12"> <div class="lg:col-span-4"> <h2 class="text-3xl font-bold text-gray-900 mb-4">FAQ's for First-Time Homebuyers</h2> <p class="text-gray-600">Clear guidance for your first purchase.</p> </div> <div class="lg:col-span-8" id="faq-accordion"> <div class="space-y-4"> `, " </div> </div> </div> </div> <script>\n    document.addEventListener('DOMContentLoaded', function() {\n      const accordion = document.getElementById('faq-accordion');\n      if (!accordion) return;\n      accordion.addEventListener('click', function(e) {\n        const question = e.target.closest('.faq-question');\n        if (!question) return;\n        e.preventDefault();\n        const index = question.getAttribute('data-index');\n        const content = document.getElementById(`faq-answer-${index}`);\n        const icon = question.querySelector('.faq-icon');\n        if (!content || !icon) return;\n        const isExpanded = question.getAttribute('aria-expanded') === 'true';\n        const allContents = accordion.querySelectorAll('.faq-content');\n        const allIcons = accordion.querySelectorAll('.faq-icon');\n        const allQuestions = accordion.querySelectorAll('.faq-question');\n        allContents.forEach((item, i) => {\n          if (item.id !== `faq-answer-${index}`) {\n            item.style.display = 'none';\n            allIcons[i].classList.remove('rotate-180');\n            allQuestions[i].setAttribute('aria-expanded', 'false');\n          }\n        });\n        if (isExpanded) {\n          content.style.display = 'none';\n          icon.classList.remove('rotate-180');\n          question.setAttribute('aria-expanded', 'false');\n        } else {\n          content.style.display = 'block';\n          icon.classList.add('rotate-180');\n          question.setAttribute('aria-expanded', 'true');\n        }\n      });\n    });\n  <\/script> </section>"], ["", `<section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12"> <div class="lg:col-span-4"> <h2 class="text-3xl font-bold text-gray-900 mb-4">FAQ's for First-Time Homebuyers</h2> <p class="text-gray-600">Clear guidance for your first purchase.</p> </div> <div class="lg:col-span-8" id="faq-accordion"> <div class="space-y-4"> `, " </div> </div> </div> </div> <script>\n    document.addEventListener('DOMContentLoaded', function() {\n      const accordion = document.getElementById('faq-accordion');\n      if (!accordion) return;\n      accordion.addEventListener('click', function(e) {\n        const question = e.target.closest('.faq-question');\n        if (!question) return;\n        e.preventDefault();\n        const index = question.getAttribute('data-index');\n        const content = document.getElementById(\\`faq-answer-\\${index}\\`);\n        const icon = question.querySelector('.faq-icon');\n        if (!content || !icon) return;\n        const isExpanded = question.getAttribute('aria-expanded') === 'true';\n        const allContents = accordion.querySelectorAll('.faq-content');\n        const allIcons = accordion.querySelectorAll('.faq-icon');\n        const allQuestions = accordion.querySelectorAll('.faq-question');\n        allContents.forEach((item, i) => {\n          if (item.id !== \\`faq-answer-\\${index}\\`) {\n            item.style.display = 'none';\n            allIcons[i].classList.remove('rotate-180');\n            allQuestions[i].setAttribute('aria-expanded', 'false');\n          }\n        });\n        if (isExpanded) {\n          content.style.display = 'none';\n          icon.classList.remove('rotate-180');\n          question.setAttribute('aria-expanded', 'false');\n        } else {\n          content.style.display = 'block';\n          icon.classList.add('rotate-180');\n          question.setAttribute('aria-expanded', 'true');\n        }\n      });\n    });\n  <\/script> </section>"])), maybeRenderHead(), faqItems.map((item, index) => renderTemplate`<div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"> <button type="button" class="faq-question w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"${addAttribute(index, "data-index")} aria-expanded="false"${addAttribute(`faq-answer-${index}`, "aria-controls")}> <span class="font-semibold text-gray-900">${item.question}</span> <svg class="faq-icon w-5 h-5 text-gray-400 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </button> <div${addAttribute(`faq-answer-${index}`, "id")} class="faq-content px-6 py-0 border-t border-gray-100" style="display: none;"> <div class="py-4 text-gray-600">${item.answer}</div> </div> </div>`));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/FAQSectionFirstTime.astro", void 0);

const title$1 = "First-Time Homebuyer Loan - Broker Lenders";
const breadcrumb$1 = {"home":"Home","loanOptions":"Loan options","firstTimeLoan":"First-time homebuyer loan"};
const hero$1 = {"title":"First-time homebuyer loan","subtitle":"Make your first home purchase easier with tailored guidance and flexible options.","getStarted":"Get started"};
const whyChoose$1 = {"title":"Why choose Broker Lenders for first-time buyers?","lowDownPayment":{"title":"Low down payment options","description":"Access programs designed for first-time buyers with minimal upfront costs."},"personalizedGuidance":{"title":"Personalized guidance","description":"Get hands-on support through pre-approval, budgeting, and closing."},"competitiveRates":{"title":"Competitive rates","description":"Secure affordable monthly payments with transparent options."}};
const answersSection$1 = {"title":"Answers when you need them.","subtitle":"Real people when it matters.","description":"We'll help you navigate pre-approval, down-payment options, and closing steps with confidence.","getStarted":"Get started"};
const finalCTA$1 = {"title":"Start your journey as a first-time homebuyer","getStarted":"Get started","callNow":"Call (801) 307-0273"};
const enDict = {
  title: title$1,
  breadcrumb: breadcrumb$1,
  hero: hero$1,
  whyChoose: whyChoose$1,
  answersSection: answersSection$1,
  finalCTA: finalCTA$1,
};

const title = "Préstamo para Compradores de Casa por Primera Vez - Broker Lenders";
const breadcrumb = {"home":"Inicio","loanOptions":"Opciones de préstamo","firstTimeLoan":"Préstamo para compradores por primera vez"};
const hero = {"title":"Préstamo para compradores de casa por primera vez","subtitle":"Haga su primera compra de vivienda más fácil con orientación personalizada y opciones flexibles.","getStarted":"Comenzar"};
const whyChoose = {"title":"¿Por qué elegir Broker Lenders para compradores por primera vez?","lowDownPayment":{"title":"Opciones de pago inicial bajo","description":"Acceda a programas diseñados para compradores por primera vez con costos iniciales mínimos."},"personalizedGuidance":{"title":"Orientación personalizada","description":"Obtenga soporte práctico durante la pre-aprobación, presupuesto y cierre."},"competitiveRates":{"title":"Tarifas competitivas","description":"Asegure pagos mensuales asequibles con opciones transparentes."}};
const answersSection = {"title":"Respuestas cuando las necesite.","subtitle":"Personas reales cuando importa.","description":"Le ayudaremos a navegar la pre-aprobación, opciones de pago inicial y pasos de cierre con confianza.","getStarted":"Comenzar"};
const finalCTA = {"title":"Comience su viaje como comprador de vivienda por primera vez","getStarted":"Comenzar","callNow":"Llamar (801) 307-0273"};
const esDict = {
  title,
  breadcrumb,
  hero,
  whyChoose,
  answersSection,
  finalCTA,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$FirstTimeLoan = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FirstTimeLoan;
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
  return renderTemplate(_a || (_a = __template(["<!-- i18n dynamic translations for First Time Loan page -->", '<div id="i18n-first-time"', "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-first-time');
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
          } catch { jsonText = bin; }
        }
        try { return JSON.parse(jsonText); } catch { return {}; }
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
<\/script> `, ""])), maybeRenderHead(), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"), renderComponent($$result, "Layout", $$Layout, { "title": dict.title, "lang": lang }, { "default": ($$result2) => renderTemplate`  <div class="bg-white py-4"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <nav class="text-sm"> <a${addAttribute(`/?lang=${lang}`, "href")} class="text-gray-700 hover:text-gray-900" data-i18n="breadcrumb.home">${dict.breadcrumb.home}</a> <span class="mx-2 text-gray-500">/</span> <a${addAttribute(`/loan-options?lang=${lang}`, "href")} class="text-gray-700 hover:text-gray-900" data-i18n="breadcrumb.loanOptions">${dict.breadcrumb.loanOptions}</a> <span class="mx-2 text-gray-500">/</span> <span class="text-gray-700" data-i18n="breadcrumb.firstTimeLoan">${dict.breadcrumb.firstTimeLoan}</span> </nav> </div> </div>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Left side - Content --> <div class="flex flex-col justify-center"> <div class="bg-gray-100 rounded-[48px] p-8 lg:p-10 h-96 flex flex-col justify-center"> <div class="space-y-6"> <h1 class="text-4xl lg:text-5xl font-bold text-gray-900" data-i18n="hero.title"> ${dict.hero.title} </h1> <p class="text-lg text-gray-600" data-i18n="hero.subtitle"> ${dict.hero.subtitle} </p> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center w-fit" data-i18n="hero.getStarted"> ${dict.hero.getStarted} </a> </div> </div> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=first-time%20homebuyer%20young%20couple%20receiving%20keys%20in%20new%20home%2C%20bright%20natural%20light%2C%20professional%20photography&image_size=landscape_4_3" alt="First-time homebuyers receiving keys" class="w-full h-96 object-cover rounded-2xl"> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"> <!-- Left: Image --> <div class="h-full"> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=young%20homebuyer%20couple%20with%20mortgage%20advisor%2C%20modern%20office%2C%20smiling%2C%20documents%20on%20table%2C%20bright%20natural%20light%2C%20professional%20photography&image_size=landscape_4_3" alt="Homebuyers working with mortgage advisor" class="w-full h-full object-cover rounded-2xl"> </div> <!-- Right: Content --> <div class="flex flex-col justify-center h-full"> <h2 class="text-3xl font-bold text-gray-900 mb-6" data-i18n="whyChoose.title"> ${dict.whyChoose.title} </h2> <div class="space-y-6 mb-8"> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h3 class="font-semibold text-gray-900" data-i18n="whyChoose.lowDownPayment.title">${dict.whyChoose.lowDownPayment.title}</h3> <p class="text-gray-600" data-i18n="whyChoose.lowDownPayment.description">${dict.whyChoose.lowDownPayment.description}</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h3 class="font-semibold text-gray-900" data-i18n="whyChoose.personalizedGuidance.title">${dict.whyChoose.personalizedGuidance.title}</h3> <p class="text-gray-600" data-i18n="whyChoose.personalizedGuidance.description">${dict.whyChoose.personalizedGuidance.description}</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h3 class="font-semibold text-gray-900" data-i18n="whyChoose.competitiveRates.title">${dict.whyChoose.competitiveRates.title}</h3> <p class="text-gray-600" data-i18n="whyChoose.competitiveRates.description">${dict.whyChoose.competitiveRates.description}</p> </div> </div> </div> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-black text-white hover:bg-red-600 hover:text-white px-6 py-3 rounded-[48px] font-semibold transition-colors w-fit" data-i18n="hero.getStarted"> ${dict.hero.getStarted} </a> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Left side - Content --> <div class="bg-gray-100 p-8 lg:p-12 rounded-2xl flex flex-col justify-center"> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-i18n="answersSection.title"> ${dict.answersSection.title} </h2> <h3 class="text-xl font-semibold text-gray-700 mb-6" data-i18n="answersSection.subtitle"> ${dict.answersSection.subtitle} </h3> <p class="text-gray-600 mb-8" data-i18n="answersSection.description"> ${dict.answersSection.description} </p> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center w-fit" data-i18n="answersSection.getStarted"> ${dict.answersSection.getStarted} </a> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=happy%20family%20first%20home%20celebration%2C%20living%20room%20decorating%2C%20bright%20natural%20light%2C%20professional%20photography&image_size=landscape_4_3" alt="Happy first-time homebuyer family" class="w-full h-96 object-cover rounded-2xl"> </div> </div> </div> </section>  ${renderComponent($$result2, "WaysHelp", $$WaysHelp, {})}  ${renderComponent($$result2, "FAQSectionFirstTime", $$FAQSectionFirstTime, {})}  ${renderComponent($$result2, "Contact", $$Contact, {})}  <section class="py-16 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold text-gray-900 mb-8" data-i18n="finalCTA.title"> ${dict.finalCTA.title} </h2> <div class="flex items-center justify-center gap-4"> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center" data-i18n="finalCTA.getStarted"> ${dict.finalCTA.getStarted} </a> <a href="tel:8013070273" class="bg-white text-black border border-black px-6 py-3 rounded-[48px] font-semibold transition-colors inline-flex items-center justify-center hover:bg-black hover:text-white" data-i18n="finalCTA.callNow"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${dict.finalCTA.callNow} </a> </div> </div> </section>  ${renderComponent($$result2, "ImportantLegal", $$ImportantLegal, {})} ` }));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/loan-options/first-time-loan.astro", void 0);

const $$file = "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/loan-options/first-time-loan.astro";
const $$url = "/loan-options/first-time-loan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FirstTimeLoan,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
