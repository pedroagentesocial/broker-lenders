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
const $$FAQSection = createComponent(($$result, $$props, $$slots) => {
  const faqItems = [
    {
      question: "What is an FHA loan?",
      answer: "An FHA loan is a mortgage insured by the Federal Housing Administration. It allows borrowers to purchase a home with as little as 3.5% down payment and more flexible credit requirements than conventional loans."
    },
    {
      question: "Who qualifies for an FHA loan?",
      answer: "FHA loans are available to first-time homebuyers and repeat buyers. You'll need a credit score of at least 580 for 3.5% down payment, or 500-579 for 10% down payment. You must also have steady employment and sufficient income to afford the mortgage payments."
    },
    {
      question: "What are the benefits of an FHA loan?",
      answer: "Benefits include lower down payment requirements (as low as 3.5%), more lenient credit score requirements, competitive interest rates, and the ability to use gift funds for your down payment. FHA loans also allow higher debt-to-income ratios compared to conventional loans."
    },
    {
      question: "How much can I borrow with an FHA loan?",
      answer: "FHA loan limits vary by county and property type. In most areas, the limit is $472,030 for single-family homes in 2023, but can be higher in expensive markets. Your actual loan amount will also depend on your income, debts, and credit profile."
    },
    {
      question: "What documents do I need for an FHA loan?",
      answer: "You'll typically need: recent pay stubs, W-2 forms from the past 2 years, tax returns from the past 2 years, bank statements, employment verification, and identification. Additional documents may be required based on your specific situation."
    },
    {
      question: "Can I refinance an FHA loan?",
      answer: "Yes, FHA loans can be refinanced. You can use an FHA Streamline Refinance to lower your rate with minimal documentation, or refinance to a conventional loan if you have sufficient equity. Streamline refinances don't require an appraisal in most cases."
    },
    {
      question: "What is mortgage insurance for FHA loans?",
      answer: "FHA loans require both an upfront mortgage insurance premium (1.75% of loan amount) and annual mortgage insurance (0.55% to 1.05% annually). The upfront premium can be financed into the loan, while the annual premium is paid monthly with your mortgage payment."
    },
    {
      question: "How long does the FHA loan process take?",
      answer: "The typical FHA loan process takes 30-45 days from application to closing. This can vary based on factors like appraisal timing, documentation completeness, and current market conditions. Working with an experienced FHA lender can help expedite the process."
    }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12"> <!-- Left column - Heading --> <div class="lg:col-span-4"> <h2 class="text-3xl font-bold text-gray-900 mb-4">
FAQ's about FHA loans
</h2> <p class="text-gray-600">
Everything you need to know about FHA loans
</p> </div> <!-- Right column - FAQ Accordion --> <div class="lg:col-span-8" id="faq-accordion"> <div class="space-y-4"> `, " </div> </div> </div> </div> <script>\n    document.addEventListener('DOMContentLoaded', function() {\n      const accordion = document.getElementById('faq-accordion');\n      if (!accordion) return;\n\n      accordion.addEventListener('click', function(e) {\n        const question = e.target.closest('.faq-question');\n        if (!question) return;\n\n        e.preventDefault();\n        \n        const index = question.getAttribute('data-index');\n        const content = document.getElementById(`faq-answer-${index}`);\n        const icon = question.querySelector('.faq-icon');\n        \n        if (!content || !icon) return;\n\n        const isExpanded = question.getAttribute('aria-expanded') === 'true';\n        \n        // Close all other FAQ items\n        const allContents = accordion.querySelectorAll('.faq-content');\n        const allIcons = accordion.querySelectorAll('.faq-icon');\n        const allQuestions = accordion.querySelectorAll('.faq-question');\n        \n        allContents.forEach((item, i) => {\n          if (item.id !== `faq-answer-${index}`) {\n            item.style.display = 'none';\n            allIcons[i].classList.remove('rotate-180');\n            allQuestions[i].setAttribute('aria-expanded', 'false');\n          }\n        });\n        \n        // Toggle current item\n        if (isExpanded) {\n          content.style.display = 'none';\n          icon.classList.remove('rotate-180');\n          question.setAttribute('aria-expanded', 'false');\n        } else {\n          content.style.display = 'block';\n          icon.classList.add('rotate-180');\n          question.setAttribute('aria-expanded', 'true');\n        }\n      });\n    });\n  <\/script> </section>"], ["", `<section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12"> <!-- Left column - Heading --> <div class="lg:col-span-4"> <h2 class="text-3xl font-bold text-gray-900 mb-4">
FAQ's about FHA loans
</h2> <p class="text-gray-600">
Everything you need to know about FHA loans
</p> </div> <!-- Right column - FAQ Accordion --> <div class="lg:col-span-8" id="faq-accordion"> <div class="space-y-4"> `, " </div> </div> </div> </div> <script>\n    document.addEventListener('DOMContentLoaded', function() {\n      const accordion = document.getElementById('faq-accordion');\n      if (!accordion) return;\n\n      accordion.addEventListener('click', function(e) {\n        const question = e.target.closest('.faq-question');\n        if (!question) return;\n\n        e.preventDefault();\n        \n        const index = question.getAttribute('data-index');\n        const content = document.getElementById(\\`faq-answer-\\${index}\\`);\n        const icon = question.querySelector('.faq-icon');\n        \n        if (!content || !icon) return;\n\n        const isExpanded = question.getAttribute('aria-expanded') === 'true';\n        \n        // Close all other FAQ items\n        const allContents = accordion.querySelectorAll('.faq-content');\n        const allIcons = accordion.querySelectorAll('.faq-icon');\n        const allQuestions = accordion.querySelectorAll('.faq-question');\n        \n        allContents.forEach((item, i) => {\n          if (item.id !== \\`faq-answer-\\${index}\\`) {\n            item.style.display = 'none';\n            allIcons[i].classList.remove('rotate-180');\n            allQuestions[i].setAttribute('aria-expanded', 'false');\n          }\n        });\n        \n        // Toggle current item\n        if (isExpanded) {\n          content.style.display = 'none';\n          icon.classList.remove('rotate-180');\n          question.setAttribute('aria-expanded', 'false');\n        } else {\n          content.style.display = 'block';\n          icon.classList.add('rotate-180');\n          question.setAttribute('aria-expanded', 'true');\n        }\n      });\n    });\n  <\/script> </section>"])), maybeRenderHead(), faqItems.map((item, index) => renderTemplate`<div class="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"> <button type="button" class="faq-question w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"${addAttribute(index, "data-index")} aria-expanded="false"${addAttribute(`faq-answer-${index}`, "aria-controls")}> <span class="font-semibold text-gray-900">${item.question}</span> <svg class="faq-icon w-5 h-5 text-gray-400 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </button> <div${addAttribute(`faq-answer-${index}`, "id")} class="faq-content px-6 py-0 border-t border-gray-100" style="display: none;"> <div class="py-4 text-gray-600"> ${item.answer} </div> </div> </div>`));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/FAQSection.astro", void 0);

const title$1 = "FHA Loan - Broker Lenders";
const breadcrumb$1 = {"home":"Home","loanOptions":"Loan options","fhaLoan":"FHA loan"};
const hero$1 = {"title":"FHA loan","subtitle":"FHA loans make homeownership possible with lower down payments and flexible credit requirements. Get approved with as little as 3.5% down.","getStarted":"Get started"};
const whyChoose$1 = {"title":"Why choose Broker Lenders for your FHA loan?","expertGuidance":{"title":"Expert FHA loan guidance","description":"Our specialists know FHA requirements inside and out to get you approved faster."},"streamlinedProcess":{"title":"Streamlined application process","description":"Digital-first approach with personal support every step of the way."},"competitiveRates":{"title":"Competitive rates & terms","description":"Access to multiple lenders ensuring you get the best FHA loan terms available."}};
const answersSection$1 = {"title":"Answers when you need them.","subtitle":"Real people when it matters.","description":"Talk to a home advisor about FHA requirements, eligibility, credit and more.","getStarted":"Get started"};
const finalCTA$1 = {"title":"Achieve your homeownership goals with an FHA loan","getStarted":"Get started","callNow":"Call (801) 307-0273"};
const enDict = {
  title: title$1,
  breadcrumb: breadcrumb$1,
  hero: hero$1,
  whyChoose: whyChoose$1,
  answersSection: answersSection$1,
  finalCTA: finalCTA$1,
};

const title = "Préstamo FHA - Broker Lenders";
const breadcrumb = {"home":"Inicio","loanOptions":"Opciones de préstamo","fhaLoan":"Préstamo FHA"};
const hero = {"title":"Préstamo FHA","subtitle":"Los préstamos FHA hacen posible la propiedad de vivienda con pagos iniciales más bajos y requisitos de crédito flexibles. Obtenga aprobación con tan solo 3.5% de pago inicial.","getStarted":"Comenzar"};
const whyChoose = {"title":"¿Por qué elegir Broker Lenders para su préstamo FHA?","expertGuidance":{"title":"Orientación experta en préstamos FHA","description":"Nuestros especialistas conocen los requisitos FHA a la perfección para obtener su aprobación más rápidamente."},"streamlinedProcess":{"title":"Proceso de solicitud simplificado","description":"Enfoque digital primero con soporte personal en cada paso del camino."},"competitiveRates":{"title":"Tarifas y términos competitivos","description":"Acceso a múltiples prestamistas asegurando que obtenga los mejores términos de préstamo FHA disponibles."}};
const answersSection = {"title":"Respuestas cuando las necesite.","subtitle":"Personas reales cuando importa.","description":"Hable con un asesor de vivienda sobre requisitos FHA, elegibilidad, crédito y más.","getStarted":"Comenzar"};
const finalCTA = {"title":"Logre sus metas de propiedad de vivienda con un préstamo FHA","getStarted":"Comenzar","callNow":"Llamar (801) 307-0273"};
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
const $$FhaLoan = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FhaLoan;
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
  return renderTemplate(_a || (_a = __template(["<!-- i18n dynamic translations for FHA Loan page -->", '<div id="i18n-fha"', "", ` style="display:none"></div> <script>
  (() => {
    const payloadEl = document.getElementById('i18n-fha');
    const decode = (val) => {
      try {
        const b64 = val || '';
        const bin = atob(b64);
        const bytes = Uint8Array.from({ length: bin.length }, (_, i) => bin.charCodeAt(i) & 0xff);
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
          const raw = a.getAttribute('href') || '';
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
<\/script> `, ""])), maybeRenderHead(), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"), renderComponent($$result, "Layout", $$Layout, { "title": dict.title, "lang": lang }, { "default": ($$result2) => renderTemplate`  <div class="bg-white py-4"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <nav class="text-sm"> <a${addAttribute(`/?lang=${lang}`, "href")} class="text-gray-700 hover:text-gray-900" data-i18n="breadcrumb.home">${dict.breadcrumb.home}</a> <span class="mx-2 text-gray-500">/</span> <a${addAttribute(`/loan-options?lang=${lang}`, "href")} class="text-gray-700 hover:text-gray-900" data-i18n="breadcrumb.loanOptions">${dict.breadcrumb.loanOptions}</a> <span class="mx-2 text-gray-500">/</span> <span class="text-gray-700" data-i18n="breadcrumb.fhaLoan">${dict.breadcrumb.fhaLoan}</span> </nav> </div> </div>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Left side - Content --> <div class="flex flex-col justify-center"> <div class="bg-gray-100 rounded-[48px] p-8 lg:p-10 h-96 flex flex-col justify-center"> <div class="space-y-6"> <h1 class="text-4xl lg:text-5xl font-bold text-gray-900" data-i18n="hero.title"> ${dict.hero.title} </h1> <p class="text-lg text-gray-600" data-i18n="hero.subtitle"> ${dict.hero.subtitle} </p> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center w-fit" data-i18n="hero.getStarted"> ${dict.hero.getStarted} </a> </div> </div> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=military%20veteran%20couple%20with%20family%2C%20happy%20at%20home%2C%20american%20flag%20in%20background%2C%20professional%20photography%2C%20warm%20lighting&image_size=landscape_4_3" alt="Veteran family at home" class="w-full h-96 object-cover rounded-2xl"> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"> <!-- Left: Image --> <div class="h-full"> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20mortgage%20advisor%20meeting%20with%20homebuyers%2C%20modern%20office%2C%20smiling%2C%20documents%20on%20table%2C%20bright%20natural%20light%2C%20professional%20photography&image_size=landscape_4_3" alt="Homebuyers working with mortgage advisor" class="w-full h-full object-cover rounded-2xl"> </div> <!-- Right: Content --> <div class="flex flex-col justify-center h-full"> <h2 class="text-3xl font-bold text-gray-900 mb-6" data-i18n="whyChoose.title"> ${dict.whyChoose.title} </h2> <div class="space-y-6 mb-8"> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h3 class="font-semibold text-gray-900" data-i18n="whyChoose.expertGuidance.title">${dict.whyChoose.expertGuidance.title}</h3> <p class="text-gray-600" data-i18n="whyChoose.expertGuidance.description">${dict.whyChoose.expertGuidance.description}</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h3 class="font-semibold text-gray-900" data-i18n="whyChoose.streamlinedProcess.title">${dict.whyChoose.streamlinedProcess.title}</h3> <p class="text-gray-600" data-i18n="whyChoose.streamlinedProcess.description">${dict.whyChoose.streamlinedProcess.description}</p> </div> </div> <div class="flex items-start space-x-4"> <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1"> <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </div> <div> <h3 class="font-semibold text-gray-900" data-i18n="whyChoose.competitiveRates.title">${dict.whyChoose.competitiveRates.title}</h3> <p class="text-gray-600" data-i18n="whyChoose.competitiveRates.description">${dict.whyChoose.competitiveRates.description}</p> </div> </div> </div> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center bg-black text-white hover:bg-red-600 hover:text-white px-6 py-3 rounded-[48px] font-semibold transition-colors w-fit" data-i18n="hero.getStarted"> ${dict.hero.getStarted} </a> </div> </div> </div> </section>  <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Left side - Content --> <div class="bg-gray-100 p-8 lg:p-12 rounded-2xl flex flex-col justify-center"> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-i18n="answersSection.title"> ${dict.answersSection.title} </h2> <h3 class="text-xl font-semibold text-gray-700 mb-6" data-i18n="answersSection.subtitle"> ${dict.answersSection.subtitle} </h3> <p class="text-gray-600 mb-8" data-i18n="answersSection.description"> ${dict.answersSection.description} </p> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center w-fit" data-i18n="answersSection.getStarted"> ${dict.answersSection.getStarted} </a> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=first-time%20homebuyer%20couple%20with%20family%2C%20happy%20at%20home%2C%20bright%20natural%20light%2C%20professional%20photography&image_size=landscape_4_3" alt="Homebuyer family at home" class="w-full h-96 object-cover rounded-2xl"> </div> </div> </div> </section>  ${renderComponent($$result2, "WaysHelp", $$WaysHelp, {})}  ${renderComponent($$result2, "FAQSection", $$FAQSection, {})}  ${renderComponent($$result2, "Contact", $$Contact, {})}  <section class="py-16 bg-white"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold text-gray-900 mb-8" data-i18n="finalCTA.title"> ${dict.finalCTA.title} </h2> <div class="flex items-center justify-center gap-4"> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" rel="noopener noreferrer" class="bg-black text-white px-8 py-3 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center" data-i18n="finalCTA.getStarted"> ${dict.finalCTA.getStarted} </a> <a href="tel:8013070273" class="bg-white text-black border border-black px-6 py-3 rounded-[48px] font-semibold transition-colors inline-flex items-center justify-center hover:bg-black hover:text-white" data-i18n="finalCTA.callNow"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${dict.finalCTA.callNow} </a> </div> </div> </section>  ${renderComponent($$result2, "ImportantLegal", $$ImportantLegal, {})} ` }));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/loan-options/fha-loan.astro", void 0);

const $$file = "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/loan-options/fha-loan.astro";
const $$url = "/loan-options/fha-loan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FhaLoan,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
