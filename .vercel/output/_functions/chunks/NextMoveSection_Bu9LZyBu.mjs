import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, m as maybeRenderHead } from './astro/server_DtYm6sr6.mjs';
import 'clsx';
import { d as dolarIcon } from './dolar_BGe6cNk6.mjs';

const houseIcon = new Proxy({"src":"/_astro/house.Bs16y7WT.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pamplona/Documents/trae_projects/broker-lenders/src/assets/icons/house.png";
							}
							
							return target[name];
						}
					});

const formIcon = new Proxy({"src":"/_astro/form.DY-uQ5iR.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/pamplona/Documents/trae_projects/broker-lenders/src/assets/icons/form.png";
							}
							
							return target[name];
						}
					});

const title$1 = "What's your next move?";
const buy_smart$1 = "Buy smart. Save more.";
const refinance_simple$1 = "Refinance made simple.";
const transform_equity$1 = "Transform equity into opportunity.";
const explore_va$1 = "Explore your VA loan benefits.";
const enDict = {
  title: title$1,
  buy_smart: buy_smart$1,
  refinance_simple: refinance_simple$1,
  transform_equity: transform_equity$1,
  explore_va: explore_va$1,
};

const title = "¿Cuál es tu próximo paso?";
const buy_smart = "Compra inteligentemente. Ahorra más.";
const refinance_simple = "Refinanciamiento simplificado.";
const transform_equity = "Transforma el capital en oportunidad.";
const explore_va = "Explora tus beneficios de préstamo VA.";
const esDict = {
  title,
  buy_smart,
  refinance_simple,
  transform_equity,
  explore_va,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$NextMoveSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NextMoveSection;
  const { lang: propLang } = Astro2.props;
  const rawLang = (propLang || new URL(Astro2.request.url).searchParams.get("lang") || "en").toLowerCase();
  const lang = ["en", "es"].includes(rawLang) ? rawLang : "en";
  const dict = lang === "es" ? esDict : enDict;
  console.log("[i18n][next-move][SSR] resolve", { href: Astro2.request.url, lang });
  return renderTemplate(_a || (_a = __template(["", '<section class="py-16 bg-white"> <div class="w-full mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 id="nextmove-title" class="text-3xl font-bold text-gray-900 mb-4" data-i18n="next_move.title">', '</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> <!-- Buy smart. Save more. --> <a', ' class="bg-red-500/10 p-6 rounded-xl text-center hover:bg-red-500/40 transition-colors block"> <div class="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"> <div class="w-8 h-8 bg-red-600"', ' aria-label="House icon"></div> </div> <h3 id="nextmove-buy" class="font-semibold text-gray-900" data-i18n="next_move.buy_smart">', "</h3> </a> <!-- Refinance made simple. --> <a", ' class="bg-blue-500/10 p-6 rounded-xl text-center hover:bg-blue-500/40 transition-colors block"> <div class="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"> <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path> </svg> </div> <h3 id="nextmove-refi" class="font-semibold text-gray-900" data-i18n="next_move.refinance_simple">', "</h3> </a> <!-- Transform equity into opportunity. --> <a", ' class="bg-green-500/10 p-6 rounded-xl text-center hover:bg-green-500/40 transition-colors block"> <div class="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"> <div class="w-8 h-8 bg-green-600"', ' aria-label="Dollar icon"></div> </div> <h3 id="nextmove-equity" class="font-semibold text-gray-900" data-i18n="next_move.transform_equity">', "</h3> </a> <!-- Explore your VA loan benefits. --> <a", ' class="bg-purple-500/10 p-6 rounded-xl text-center hover:bg-purple-500/40 transition-colors block"> <div class="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"> <div class="w-8 h-8 bg-purple-600"', ' aria-label="Form icon"></div> </div> <h3 id="nextmove-va" class="font-semibold text-gray-900" data-i18n="next_move.explore_va">', `</h3> </a> </div> </div> </section> <script type="module">
import enDict from '/src/translations/next-move/en.json';
import esDict from '/src/translations/next-move/es.json';
(() => {
  const translations = { en: enDict, es: esDict };
  const getInitialLang = () => {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    const stored = localStorage.getItem('lang');
    const raw = (urlLang || stored || 'en').toLowerCase();
    return raw === 'es' ? 'es' : 'en';
  };
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el && typeof value === 'string') el.textContent = value;
  };
  const preserveLangOnLocalLinks = (lang) => {
    const container = document.getElementById('nextmove-title')?.closest('section');
    const localLinks = container ? container.querySelectorAll('a[href^="/"]') : [];
    localLinks.forEach(a => {
      try {
        const href = new URL(a.href, window.location.origin);
        if (href.origin === window.location.origin) {
          href.searchParams.set('lang', lang);
          a.href = href.pathname + href.search + href.hash;
        }
      } catch {}
    });
  };
  const applyTranslations = (lang) => {
    const dict = translations[lang] || translations.en;
    setText('nextmove-title', dict.title);
    setText('nextmove-buy', dict.buy_smart);
    setText('nextmove-refi', dict.refinance_simple);
    setText('nextmove-equity', dict.transform_equity);
    setText('nextmove-va', dict.explore_va);
    preserveLangOnLocalLinks(lang);
  };
  // Init
  applyTranslations(getInitialLang());
  // Also respond to storage events (Header sets lang)
  window.addEventListener('storage', (ev) => {
    if (ev.key === 'lang' && ev.newValue) applyTranslations(ev.newValue);
  });
})();
<\/script>`])), maybeRenderHead(), dict.title, addAttribute(`/buy?lang=${lang}`, "href"), addAttribute(`mask-image: url(${houseIcon.src}); -webkit-mask-image: url(${houseIcon.src}); mask-size: contain; -webkit-mask-size: contain; mask-repeat: no-repeat; -webkit-mask-repeat: no-repeat; mask-position: center; -webkit-mask-position: center;`, "style"), dict.buy_smart, addAttribute(`/refinance?lang=${lang}`, "href"), dict.refinance_simple, addAttribute(`/calculators?lang=${lang}`, "href"), addAttribute(`mask-image: url(${dolarIcon.src}); -webkit-mask-image: url(${dolarIcon.src}); mask-size: contain; -webkit-mask-size: contain; mask-repeat: no-repeat; -webkit-mask-repeat: no-repeat; mask-position: center; -webkit-mask-position: center;`, "style"), dict.transform_equity, addAttribute(`/loan-options?lang=${lang}`, "href"), addAttribute(`mask-image: url(${formIcon.src}); -webkit-mask-image: url(${formIcon.src}); mask-size: contain; -webkit-mask-size: contain; mask-repeat: no-repeat; -webkit-mask-repeat: no-repeat; mask-position: center; -webkit-mask-position: center;`, "style"), dict.explore_va);
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/NextMoveSection.astro", void 0);

export { $$NextMoveSection as $ };
