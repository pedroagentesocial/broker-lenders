import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from './astro/server_DtYm6sr6.mjs';
import 'clsx';
import { d as dolarIcon } from './dolar_BGe6cNk6.mjs';

const calculatorIcon = new Proxy({"src":"/_astro/calculator.BBMDJGmK.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pamplona/Documents/trae_projects/broker-lenders/src/assets/icons/calculator.png";
							}
							
							return target[name];
						}
					});

const ratesIcon = new Proxy({"src":"/_astro/rates.Ck0Z5uUe.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pamplona/Documents/trae_projects/broker-lenders/src/assets/icons/rates.png";
							}
							
							return target[name];
						}
					});

const title$1 = "More ways we can help";
const cards$1 = {"paymentCalculator":"Payment calculator","buyingPower":"Calculate your buying power","latestRates":"See the latest rates"};
const enDict = {
  title: title$1,
  cards: cards$1,
};

const title = "Más formas en que podemos ayudar";
const cards = {"paymentCalculator":"Calculadora de pagos","buyingPower":"Calcula tu capacidad de compra","latestRates":"Ver las tasas más recientes"};
const esDict = {
  title,
  cards,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$WaysHelp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WaysHelp;
  const langParam = (Astro2.url.searchParams.get("lang") || "en").toLowerCase();
  const lang = ["en", "es"].includes(langParam) ? langParam : "en";
  const dict = lang === "es" ? esDict : enDict;
  console.log("[i18n][ways-help][SSR] resolve", { href: Astro2.url.href, lang });
  return renderTemplate(_a || (_a = __template(["<!-- More ways we can help -->", '<section class="py-18 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 id="wayshelp-title" class="text-3xl font-bold text-gray-900 mb-4">', '</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Card 1 --> <a id="wayshelp-card1-link"', ' class="text-center bg-blue-600/10 text-gray-900 p-8 rounded-xl transition-all hover:bg-blue-600/30 block"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <div class="w-12 h-12 bg-blue-600"', ' aria-label="Calculator icon"></div> </div> <h3 id="wayshelp-card1-title" class="text-lg font-semibold">', '</h3> </a> <!-- Card 2 --> <a id="wayshelp-card2-link"', ' class="text-center bg-green-600/10 text-gray-900 p-8 rounded-xl transition-all hover:bg-green-600/30 block"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <div class="w-12 h-12 bg-green-600"', ' aria-label="Dollar icon"></div> </div> <h3 id="wayshelp-card2-title" class="text-lg font-semibold">', '</h3> </a> <!-- Card 3 --> <a id="wayshelp-card3-link"', ' class="text-center bg-purple-600/10 text-gray-900 p-8 rounded-xl transition-all hover:bg-purple-600/30 block"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <div class="w-12 h-12 bg-purple-600"', ' aria-label="Rates icon"></div> </div> <h3 id="wayshelp-card3-title" class="text-lg font-semibold">', "</h3> </a> </div> </div> </section> <script type=\"module\">\nimport enDict from '/src/translations/ways-help/en.json';\nimport esDict from '/src/translations/ways-help/es.json';\n\n(() => {\n  const translations = { en: enDict, es: esDict };\n  const getInitialLang = () => {\n    const urlLang = new URLSearchParams(window.location.search).get('lang');\n    const stored = localStorage.getItem('lang');\n    const raw = (urlLang || stored || 'en').toLowerCase();\n    return raw === 'es' ? 'es' : 'en';\n  };\n  const setText = (id, value) => {\n    const el = document.getElementById(id);\n    if (el && typeof value === 'string') el.textContent = value;\n  };\n  const preserveLangOnLinks = (lang) => {\n    const l1 = document.getElementById('wayshelp-card1-link');\n    const l2 = document.getElementById('wayshelp-card2-link');\n    const l3 = document.getElementById('wayshelp-card3-link');\n    if (l1) l1.setAttribute('href', `/calculators/refinance-calculator?lang=${lang}`);\n    if (l2) l2.setAttribute('href', `/calculators/mortgage-calculator?lang=${lang}`);\n    if (l3) l3.setAttribute('href', `/rates?lang=${lang}`);\n  };\n  const applyTranslations = (lang) => {\n    const dict = translations[lang] || translations.en;\n    setText('wayshelp-title', dict.title);\n    setText('wayshelp-card1-title', dict.cards?.paymentCalculator);\n    setText('wayshelp-card2-title', dict.cards?.buyingPower);\n    setText('wayshelp-card3-title', dict.cards?.latestRates);\n    preserveLangOnLinks(lang);\n  };\n  // Init\n  applyTranslations(getInitialLang());\n  // React to language menu clicks (Header intercepts and updates URL/localStorage)\n  document.addEventListener('click', (e) => {\n    const a = e.target.closest('a[href*=\"?lang=\"]');\n    if (!a) return;\n    let href;\n    try { href = new URL(a.href, window.location.origin); } catch { return; }\n    const lang = href.searchParams.get('lang');\n    if (lang) applyTranslations(lang);\n  });\n  // Also respond to storage events (Header sets lang)\n  window.addEventListener('storage', (ev) => {\n    if (ev.key === 'lang' && ev.newValue) applyTranslations(ev.newValue);\n  });\n})();\n<\/script>"], ["<!-- More ways we can help -->", '<section class="py-18 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 id="wayshelp-title" class="text-3xl font-bold text-gray-900 mb-4">', '</h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Card 1 --> <a id="wayshelp-card1-link"', ' class="text-center bg-blue-600/10 text-gray-900 p-8 rounded-xl transition-all hover:bg-blue-600/30 block"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <div class="w-12 h-12 bg-blue-600"', ' aria-label="Calculator icon"></div> </div> <h3 id="wayshelp-card1-title" class="text-lg font-semibold">', '</h3> </a> <!-- Card 2 --> <a id="wayshelp-card2-link"', ' class="text-center bg-green-600/10 text-gray-900 p-8 rounded-xl transition-all hover:bg-green-600/30 block"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <div class="w-12 h-12 bg-green-600"', ' aria-label="Dollar icon"></div> </div> <h3 id="wayshelp-card2-title" class="text-lg font-semibold">', '</h3> </a> <!-- Card 3 --> <a id="wayshelp-card3-link"', ' class="text-center bg-purple-600/10 text-gray-900 p-8 rounded-xl transition-all hover:bg-purple-600/30 block"> <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4"> <div class="w-12 h-12 bg-purple-600"', ' aria-label="Rates icon"></div> </div> <h3 id="wayshelp-card3-title" class="text-lg font-semibold">', "</h3> </a> </div> </div> </section> <script type=\"module\">\nimport enDict from '/src/translations/ways-help/en.json';\nimport esDict from '/src/translations/ways-help/es.json';\n\n(() => {\n  const translations = { en: enDict, es: esDict };\n  const getInitialLang = () => {\n    const urlLang = new URLSearchParams(window.location.search).get('lang');\n    const stored = localStorage.getItem('lang');\n    const raw = (urlLang || stored || 'en').toLowerCase();\n    return raw === 'es' ? 'es' : 'en';\n  };\n  const setText = (id, value) => {\n    const el = document.getElementById(id);\n    if (el && typeof value === 'string') el.textContent = value;\n  };\n  const preserveLangOnLinks = (lang) => {\n    const l1 = document.getElementById('wayshelp-card1-link');\n    const l2 = document.getElementById('wayshelp-card2-link');\n    const l3 = document.getElementById('wayshelp-card3-link');\n    if (l1) l1.setAttribute('href', \\`/calculators/refinance-calculator?lang=\\${lang}\\`);\n    if (l2) l2.setAttribute('href', \\`/calculators/mortgage-calculator?lang=\\${lang}\\`);\n    if (l3) l3.setAttribute('href', \\`/rates?lang=\\${lang}\\`);\n  };\n  const applyTranslations = (lang) => {\n    const dict = translations[lang] || translations.en;\n    setText('wayshelp-title', dict.title);\n    setText('wayshelp-card1-title', dict.cards?.paymentCalculator);\n    setText('wayshelp-card2-title', dict.cards?.buyingPower);\n    setText('wayshelp-card3-title', dict.cards?.latestRates);\n    preserveLangOnLinks(lang);\n  };\n  // Init\n  applyTranslations(getInitialLang());\n  // React to language menu clicks (Header intercepts and updates URL/localStorage)\n  document.addEventListener('click', (e) => {\n    const a = e.target.closest('a[href*=\"?lang=\"]');\n    if (!a) return;\n    let href;\n    try { href = new URL(a.href, window.location.origin); } catch { return; }\n    const lang = href.searchParams.get('lang');\n    if (lang) applyTranslations(lang);\n  });\n  // Also respond to storage events (Header sets lang)\n  window.addEventListener('storage', (ev) => {\n    if (ev.key === 'lang' && ev.newValue) applyTranslations(ev.newValue);\n  });\n})();\n<\/script>"])), maybeRenderHead(), dict.title, addAttribute(`/calculators/refinance-calculator?lang=${lang}`, "href"), addAttribute(`mask-image: url(${calculatorIcon.src}); -webkit-mask-image: url(${calculatorIcon.src}); mask-size: contain; -webkit-mask-size: contain; mask-repeat: no-repeat; -webkit-mask-repeat: no-repeat; mask-position: center; -webkit-mask-position: center;`, "style"), dict.cards.paymentCalculator, addAttribute(`/calculators/mortgage-calculator?lang=${lang}`, "href"), addAttribute(`mask-image: url(${dolarIcon.src}); -webkit-mask-image: url(${dolarIcon.src}); mask-size: contain; -webkit-mask-size: contain; mask-repeat: no-repeat; -webkit-mask-repeat: no-repeat; mask-position: center; -webkit-mask-position: center;`, "style"), dict.cards.buyingPower, addAttribute(`/rates?lang=${lang}`, "href"), addAttribute(`mask-image: url(${ratesIcon.src}); -webkit-mask-image: url(${ratesIcon.src}); mask-size: contain; -webkit-mask-size: contain; mask-repeat: no-repeat; -webkit-mask-repeat: no-repeat; mask-position: center; -webkit-mask-position: center;`, "style"), dict.cards.latestRates);
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/WaysHelp.astro", void 0);

export { $$WaysHelp as $ };
