import { e as createComponent, r as renderTemplate, l as renderScript, h as addAttribute, m as maybeRenderHead } from './astro/server_DtYm6sr6.mjs';
import 'clsx';

const testimonials_title$1 = "What clients say about working with us";
const google_reviews$1 = "Reviews";
const testimonial_1_text$1 = "Working with Broker Lenders was an amazing experience. They made the home buying process so much easier and saved us thousands of dollars.";
const testimonial_1_author$1 = "Sarah Johnson - Homeowner";
const testimonial_2_text$1 = "The team at Broker Lenders provided exceptional service throughout our refinancing process. Their expertise saved us both time and money.";
const testimonial_2_author$1 = "Michael Chen - Business Owner";
const testimonial_3_text$1 = "I couldn't be happier with the service I received. They walked me through every step and made sure I understood all my options.";
const testimonial_3_author$1 = "Jennifer Martinez - First-time Buyer";
const testimonial_4_text$1 = "Professional, knowledgeable, and always available to answer questions. I highly recommend Broker Lenders to anyone looking for a mortgage.";
const testimonial_4_author$1 = "David Thompson - Real Estate Investor";
const testimonial_5_text$1 = "As a teacher, budget matters. Broker Lenders helped me secure a great rate and explained everything clearly.";
const testimonial_5_author$1 = "Emily Rogers - Teacher";
const testimonial_6_text$1 = "Their team helped me use my VA benefits effectively. The process was smooth and respectful.";
const testimonial_6_author$1 = "Carlos Rivera - Veteran";
const testimonial_7_text$1 = "I appreciated the transparency and speed. We closed on time with a competitive package.";
const testimonial_7_author$1 = "Priya Singh - Software Engineer";
const testimonial_8_text$1 = "Downsizing after retirement was easier with their guidance. Friendly service and great communication.";
const testimonial_8_author$1 = "Mark Anderson - Retiree";
const en = {
  testimonials_title: testimonials_title$1,
  google_reviews: google_reviews$1,
  testimonial_1_text: testimonial_1_text$1,
  testimonial_1_author: testimonial_1_author$1,
  testimonial_2_text: testimonial_2_text$1,
  testimonial_2_author: testimonial_2_author$1,
  testimonial_3_text: testimonial_3_text$1,
  testimonial_3_author: testimonial_3_author$1,
  testimonial_4_text: testimonial_4_text$1,
  testimonial_4_author: testimonial_4_author$1,
  testimonial_5_text: testimonial_5_text$1,
  testimonial_5_author: testimonial_5_author$1,
  testimonial_6_text: testimonial_6_text$1,
  testimonial_6_author: testimonial_6_author$1,
  testimonial_7_text: testimonial_7_text$1,
  testimonial_7_author: testimonial_7_author$1,
  testimonial_8_text: testimonial_8_text$1,
  testimonial_8_author: testimonial_8_author$1,
};

const testimonials_title = "Lo que dicen los clientes de trabajar con nosotros";
const google_reviews = "Reseñas";
const testimonial_1_text = "Trabajar con Broker Lenders fue una experiencia increíble. Hicieron que el proceso de compra de vivienda fuera mucho más fácil y nos ahorraron miles de dólares.";
const testimonial_1_author = "Sarah Johnson - Propietaria";
const testimonial_2_text = "El equipo de Broker Lenders proporcionó un servicio excepcional durante todo nuestro proceso de refinanciación. Su experiencia nos ahorró tiempo y dinero.";
const testimonial_2_author = "Michael Chen - Empresario";
const testimonial_3_text = "No podría estar más feliz con el servicio que recibí. Me guiaron en cada paso y se aseguraron de que entendiera todas mis opciones.";
const testimonial_3_author = "Jennifer Martinez - Compradora por primera vez";
const testimonial_4_text = "Profesionales, conocedores y siempre disponibles para responder preguntas. Recomiendo encarecidamente Broker Lenders a cualquier persona que busque una hipoteca.";
const testimonial_4_author = "David Thompson - Inversor inmobiliario";
const testimonial_5_text = "Como maestra, el presupuesto importa. Broker Lenders me ayudó a asegurar una excelente tasa y explicó todo claramente.";
const testimonial_5_author = "Emily Rogers - Maestra";
const testimonial_6_text = "Su equipo me ayudó a usar mis beneficios de VA de manera efectiva. El proceso fue fluido y respetuoso.";
const testimonial_6_author = "Carlos Rivera - Veterano";
const testimonial_7_text = "Aprecié la transparencia y la velocidad. Cerramos a tiempo con un paquete competitivo.";
const testimonial_7_author = "Priya Singh - Ingeniera de software";
const testimonial_8_text = "Reducir después de la jubilación fue más fácil con su orientación. Servicio amigable y gran comunicación.";
const testimonial_8_author = "Mark Anderson - Jubilado";
const es = {
  testimonials_title,
  google_reviews,
  testimonial_1_text,
  testimonial_1_author,
  testimonial_2_text,
  testimonial_2_author,
  testimonial_3_text,
  testimonial_3_author,
  testimonial_4_text,
  testimonial_4_author,
  testimonial_5_text,
  testimonial_5_author,
  testimonial_6_text,
  testimonial_6_author,
  testimonial_7_text,
  testimonial_7_author,
  testimonial_8_text,
  testimonial_8_author,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const enB64 = Buffer.from(JSON.stringify(en)).toString("base64");
  const esB64 = Buffer.from(JSON.stringify(es)).toString("base64");
  return renderTemplate(_a || (_a = __template(["<!-- Testimonials Section -->", `<section class="py-18 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Carousel de testimonios --> <div class="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full min-h-[300px]"> <!-- Testimonial Container con altura fija --> <div id="testimonial-container" class="flex-1 flex items-center"> <!-- Testimonial 1 --> <div class="testimonial active w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_1_text">
Working with Broker Lenders was an amazing experience. They made the home buying process so much easier and saved us thousands of dollars.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_1_author">Sarah Johnson - Homeowner</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 2 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_2_text">
The team at Broker Lenders provided exceptional service throughout our refinancing process. Their expertise saved us both time and money.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_2_author">Michael Chen - Business Owner</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 3 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_3_text">
I couldn't be happier with the service I received. They walked me through every step and made sure I understood all my options.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_3_author">Jennifer Martinez - First-time Buyer</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 4 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_4_text">
Professional, knowledgeable, and always available to answer questions. I highly recommend Broker Lenders to anyone looking for a mortgage.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_4_author">David Thompson - Real Estate Investor</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 5 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_5_text">
As a teacher, budget matters. Broker Lenders helped me secure a great rate and explained everything clearly.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_5_author">Emily Rogers - Teacher</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 6 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_6_text">
Their team helped me use my VA benefits effectively. The process was smooth and respectful.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_6_author">Carlos Rivera - Veteran</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 7 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_7_text">
I appreciated the transparency and speed. We closed on time with a competitive package.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_7_author">Priya Singh - Software Engineer</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 8 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_8_text">
Downsizing after retirement was easier with their guidance. Friendly service and great communication.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_8_author">Mark Anderson - Retiree</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> </div> <!-- Navigation dentro del card --> <div class="flex justify-between items-center mt-6"> <button id="prev-btn" class="text-gray-600 hover:text-gray-900 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <div id="testimonial-counter" class="text-gray-600">1-8</div> <button id="next-btn" class="text-gray-600 hover:text-gray-900 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> <!-- Black box with title - mismo tama\xF1o --> <div class="bg-black text-white p-8 rounded-2xl flex flex-col justify-center h-full min-h-[300px]"> <div class="text-center"> <h2 class="text-4xl font-bold" data-i18n="testimonials_title">What clients say about working with us</h2> </div> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (TestimonialsSection) --> <div id="i18n-testimonials"`, "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-testimonials');
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
<\/script> `, ""], ["<!-- Testimonials Section -->", `<section class="py-18 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch"> <!-- Carousel de testimonios --> <div class="bg-gray-50 rounded-2xl p-8 shadow-sm flex flex-col justify-between h-full min-h-[300px]"> <!-- Testimonial Container con altura fija --> <div id="testimonial-container" class="flex-1 flex items-center"> <!-- Testimonial 1 --> <div class="testimonial active w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_1_text">
Working with Broker Lenders was an amazing experience. They made the home buying process so much easier and saved us thousands of dollars.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_1_author">Sarah Johnson - Homeowner</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 2 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_2_text">
The team at Broker Lenders provided exceptional service throughout our refinancing process. Their expertise saved us both time and money.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_2_author">Michael Chen - Business Owner</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 3 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_3_text">
I couldn't be happier with the service I received. They walked me through every step and made sure I understood all my options.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_3_author">Jennifer Martinez - First-time Buyer</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 4 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_4_text">
Professional, knowledgeable, and always available to answer questions. I highly recommend Broker Lenders to anyone looking for a mortgage.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_4_author">David Thompson - Real Estate Investor</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 5 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_5_text">
As a teacher, budget matters. Broker Lenders helped me secure a great rate and explained everything clearly.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_5_author">Emily Rogers - Teacher</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 6 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_6_text">
Their team helped me use my VA benefits effectively. The process was smooth and respectful.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_6_author">Carlos Rivera - Veteran</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 7 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_7_text">
I appreciated the transparency and speed. We closed on time with a competitive package.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_7_author">Priya Singh - Software Engineer</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> <!-- Testimonial 8 --> <div class="testimonial hidden w-full"> <div class="text-4xl text-gray-400 mb-4">"</div> <blockquote class="text-lg text-gray-700 mb-6" data-i18n="testimonial_8_text">
Downsizing after retirement was easier with their guidance. Friendly service and great communication.
</blockquote> <div class="font-semibold text-gray-900 mb-2" data-i18n="testimonial_8_author">Mark Anderson - Retiree</div> <div class="flex items-center text-sm"> <span class="text-blue-500 font-medium">G</span> <span class="text-red-500 font-medium">o</span> <span class="text-yellow-500 font-medium">o</span> <span class="text-blue-500 font-medium">g</span> <span class="text-green-500 font-medium">l</span> <span class="text-red-500 font-medium">e</span> <span class="text-gray-600 ml-1" data-i18n="google_reviews">Reviews</span> </div> </div> </div> <!-- Navigation dentro del card --> <div class="flex justify-between items-center mt-6"> <button id="prev-btn" class="text-gray-600 hover:text-gray-900 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <div id="testimonial-counter" class="text-gray-600">1-8</div> <button id="next-btn" class="text-gray-600 hover:text-gray-900 transition-colors"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> <!-- Black box with title - mismo tama\xF1o --> <div class="bg-black text-white p-8 rounded-2xl flex flex-col justify-center h-full min-h-[300px]"> <div class="text-center"> <h2 class="text-4xl font-bold" data-i18n="testimonials_title">What clients say about working with us</h2> </div> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (TestimonialsSection) --> <div id="i18n-testimonials"`, "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-testimonials');
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
<\/script> `, ""])), maybeRenderHead(), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"), renderScript($$result, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/TestimonialsSection.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/TestimonialsSection.astro", void 0);

export { $$TestimonialsSection as $ };
