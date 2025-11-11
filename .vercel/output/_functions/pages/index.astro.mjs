import { e as createComponent, r as renderTemplate, h as addAttribute, m as maybeRenderHead, l as renderScript, f as createAstro, k as renderComponent } from '../chunks/astro/server_DtYm6sr6.mjs';
import { $ as $$Layout } from '../chunks/Layout_CrnZoUeJ.mjs';
import 'clsx';
import { I as IdahoImg, N as NevadaImg, T as TexasImg, F as FloridaImg, C as ColoradoImg } from '../chunks/Nevada_CgDPWNiH.mjs';
/* empty css                                 */
import { $ as $$NextMoveSection } from '../chunks/NextMoveSection_Bu9LZyBu.mjs';
import { $ as $$RewardsCard } from '../chunks/RewardsCard_Cjm3go_h.mjs';
import { $ as $$TestimonialsSection } from '../chunks/TestimonialsSection_D-wnH4dV.mjs';
import { $ as $$ImportantLegal } from '../chunks/ImportantLegal_D8fhlbac.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(cooked.slice()) }));
var _a$5;
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const images = [
    { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop", label: "Utah", alt: "Delicate Arch en Utah" },
    { src: IdahoImg.src, label: "Idaho", alt: "Sawtooth Mountains en Idaho" },
    { src: NevadaImg.src, label: "Nevada", alt: "Nevada landscape" },
    { src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop", label: "California", alt: "Golden Gate Bridge en California" },
    { src: TexasImg.src, label: "Texas", alt: "El \xC1lamo en Texas" },
    { src: FloridaImg.src, label: "Florida", alt: "Miami Beach en Florida" },
    { src: ColoradoImg.src, label: "Colorado", alt: "Rocky Mountains en Colorado" }
  ];
  return renderTemplate(_a$5 || (_a$5 = __template$5(["", '<section class="bg-white py-12 lg:py-20"> <div class="w-full mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch"> <!-- Left side - Carousel Image --> <div class="order-2 lg:order-1"> <div class="relative h-full min-h-[500px] rounded-2xl overflow-hidden"> <div id="heroCarousel" class="relative w-full h-full"> <!-- Slides --> ', ' </div> <!-- Dots --> <div id="heroCarouselDots" class="absolute bottom-4 right-4 flex gap-2"> ', ` </div> </div> </div> <!-- Right side - Form --> <div class="order-1 lg:order-2"> <div class="bg-gray-50 p-8 rounded-2xl h-full min-h-[500px] flex flex-col justify-center"> <h2 class="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6" data-i18n="hero.title">
Home loans made for your lifestyle
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:h-[200px]"> <!-- Left Column: Refinancing and Buying stacked --> <div class="flex flex-col gap-4 h-full"> <!-- Refinancing Card --> <a href="/refinance" class="bg-white p-6 rounded-[48px] border-2 border-transparent hover:border-gray-300 hover:scale-105 transition-all group flex-1 block min-h-[120px] sm:min-h-0"> <div class="flex items-center justify-between h-full"> <span class="text-lg font-semibold text-gray-900" data-i18n="hero.refinancing">Refinancing</span> <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors"> <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a> <!-- Buying Card --> <a href="/buy" class="bg-white p-6 rounded-[48px] border-2 border-transparent hover:border-gray-300 hover:scale-105 transition-all group flex-1 block min-h-[120px] sm:min-h-0"> <div class="flex items-center justify-between h-full"> <span class="text-lg font-semibold text-gray-900" data-i18n="hero.buying">Buying</span> <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors"> <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a> </div> <!-- Right Column: Today's rates (full height) --> <a href="/rates" class="bg-white p-6 rounded-[48px] border-2 border-transparent hover:border-gray-300 hover:scale-105 transition-all group relative h-full block min-h-[120px] sm:min-h-0"> <div class="flex items-center justify-between h-full"> <span class="text-lg font-semibold text-gray-900" data-i18n="hero.todays_rates">Today's rates</span> <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors"> <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> <span class="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full" data-i18n="hero.live">
Live
</span> </a> </div> </div> </div> </div> </div> </section> <script>
  const slides = Array.from(document.querySelectorAll('#heroCarousel figure'));
  const dots = Array.from(document.querySelectorAll('#heroCarouselDots button'));
  let current = 0;
  let timer;
  function show(index) {
    slides.forEach((s, i) => {
      s.style.opacity = i === index ? '1' : '0';
      s.style.pointerEvents = i === index ? 'auto' : 'none';
    });
    dots.forEach((d, i) => {
      if (i === index) {
        d.classList.add('bg-white');
        d.classList.remove('bg-white/30');
      } else {
        d.classList.remove('bg-white');
        d.classList.add('bg-white/30');
      }
    });
    current = index;
  }
  function next() { show((current + 1) % slides.length); }
  function start() { stop(); timer = setInterval(next, 4500); }
  function stop() { if (timer) clearInterval(timer); }
  dots.forEach((d, i) => d.addEventListener('click', () => { show(i); start(); }));
  show(0); start();
  const container = document.getElementById('heroCarousel');
  container.addEventListener('mouseenter', stop);
  container.addEventListener('mouseleave', start);
<\/script>`])), maybeRenderHead(), images.map((img, i) => renderTemplate`<figure${addAttribute(`absolute inset-0 transition-opacity duration-700 ${i === 0 ? "opacity-100" : "opacity-0"}`, "class")}${addAttribute(i, "data-index")}> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} class="w-full h-full object-cover" onerror="this.src='/HeroBuy.jpg'; this.onerror=null;"> <figcaption class="absolute bottom-4 left-4 bg-black/60 text-white text-sm font-medium px-3 py-1 rounded-full"> ${img.label} </figcaption> </figure>`), images.map((_, i) => renderTemplate`<button${addAttribute(`w-2.5 h-2.5 rounded-full border border-white ${i === 0 ? "bg-white" : "bg-white/30"}`, "class")}${addAttribute(i, "data-dot")}${addAttribute(`Slide ${i + 1}`, "aria-label")}></button>`));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/HeroSection.astro", void 0);

// Función para obtener los datos de tasas dinámicos
async function getRatesData() {
  try {
    // Intentar cargar el archivo JSON de tasas
    const ratesData = await import('../chunks/rates-data_m6B7vdnh.mjs');
    const data = ratesData.default;
    
    // Transformar la estructura para que sea más fácil de usar
    return {
      timestamp: data.timestamp,
      utah: data.states.utah,
      idaho: data.states.idaho,
      nevada: data.states.nevada,
      california: data.states.california,
      texas: data.states.texas,
      florida: data.states.florida,
      colorado: data.states.colorado
    };
  } catch (error) {
    console.error('Error al cargar datos de tasas:', error);
    // Retornar datos por defecto si hay error
    return getDefaultRatesData();
  }
}

// Función para obtener datos por defecto en caso de error
function getDefaultRatesData() {
  return {
    timestamp: new Date().toISOString(),
    utah: {
      '30-year-fixed': { rate: '6.375', apr: '6.607', points: '1.75' },
      '20-year-fixed': { rate: '6.125', apr: '6.285', points: '1.5' },
      '15-year-fixed': { rate: '5.875', apr: '6.125', points: '1.0' },
      '30-year-fha': { rate: '6.500', apr: '6.720', points: '1.25' },
      '30-year-va': { rate: '6.375', apr: '6.590', points: '1.0' },
      '30-year-jumbo': { rate: '5.875', apr: '6.125', points: '0.75' }
    }
  };
}

const stay_updated_title$1 = "Stay updated on today's rates";
const see_all_rates$1 = "See all rates";
const apr$1 = "APR";
const points$1 = "Points";
const compared_week_over_week$1 = "Compared week over week.";
const rates_current_as_of$1 = "Rates are current as of";
const view_legal_disclosures$1 = "View legal disclosures";
const legal_disclosures_title$1 = "Legal Disclosures";
const legal_disclosures_text$1 = "The Broker Lenders purchase rates are for estimation purposes only. Every situation is different. Results do not reflect all loan programs and are subject to individual program loan limits. Qualification, rates and payments will vary based on timing and individual circumstances. Mortgage rates and pricing could change daily. Actual payments will vary based on your individual situation and current rates. Some products may not be available in all states. Some jumbo products may not be available to first time home buyers. Lending services may not be available in all areas. Some restrictions may apply. This is not a commitment to lend.";
const va_loans_note$1 = "VA loans do not require PMI. The VA loan is a benefit of military service and only offered to veterans, surviving spouses and active duty military.";
const en$4 = {
  stay_updated_title: stay_updated_title$1,
  see_all_rates: see_all_rates$1,
  "30_year_fixed": "30-year fixed",
  "20_year_fixed": "20-year fixed",
  "15_year_fixed": "15-year fixed",
  "30_year_fha": "30-year FHA",
  "30_year_va": "30-year VA",
  "30_year_jumbo": "30-year Jumbo",
  apr: apr$1,
  points: points$1,
  compared_week_over_week: compared_week_over_week$1,
  rates_current_as_of: rates_current_as_of$1,
  view_legal_disclosures: view_legal_disclosures$1,
  legal_disclosures_title: legal_disclosures_title$1,
  legal_disclosures_text: legal_disclosures_text$1,
  "30_year_fixed_example": "30-year Fixed-Rate Loan:",
  "30_year_fixed_example_text": "An interest rate of 6.375% (6.663% APR) is for the cost of 2.00 point(s) ($7,000.00) paid at closing. On a $350,000 mortgage, you would make monthly payments of $2,183.55. Monthly payment does not include taxes and insurance premiums. The actual payment amount will be greater. Payment assumes a loan-to-value (LTV) of 80.00%.",
  "30_year_va_example": "30-year Fixed-Rate VA Loan:",
  "30_year_va_example_text": "An interest rate of 5.99% (6.372% APR) is for a cost of 1.75 Point(s) ($6,125.00) paid at closing. On a $350,000 mortgage, you would make monthly payments of $2,096.18. Monthly payment does not include taxes and insurance premiums. The actual payment amount will be greater. Payment assumes a loan-to-value (LTV) of 80.00%.",
  va_loans_note: va_loans_note$1,
  "30_year_jumbo_example": "30-year Fixed-Rate Loan (Jumbo):",
  "30_year_jumbo_example_text": "An interest rate of 5.625% (5.829% APR) is for the cost of 1.75 point(s) ($19,250.00) paid at closing. On a $1,100,000 mortgage, you would make monthly payments of $6,332.23. Monthly payment does not include taxes and insurance premiums. The actual payment amount will be greater. Payment assumes a loan-to-value (LTV) of 70.00%.",
};

const stay_updated_title = "Mantente actualizado con las tasas de hoy";
const see_all_rates = "Ver todas las tasas";
const apr = "APR";
const points = "Puntos";
const compared_week_over_week = "Comparado semana a semana.";
const rates_current_as_of = "Las tasas son actuales a partir de";
const view_legal_disclosures = "Ver divulgaciones legales";
const legal_disclosures_title = "Divulgaciones Legales";
const legal_disclosures_text = "Las tasas de compra de The Broker Lenders son solo para fines de estimación. Cada situación es diferente. Los resultados no reflejan todos los programas de préstamos y están sujetos a los límites de préstamo de programas individuales. La calificación, las tasas y los pagos variarán según el momento y las circunstancias individuales. Las tasas hipotecarias y los precios podrían cambiar diariamente. Los pagos reales variarán según su situación individual y las tasas actuales. Algunos productos pueden no estar disponibles en todos los estados. Algunos productos jumbo pueden no estar disponibles para compradores de vivienda por primera vez. Los servicios de préstamo pueden no estar disponibles en todas las áreas. Algunas restricciones pueden aplicar. Esto no es un compromiso de préstamo.";
const va_loans_note = "Los préstamos VA no requieren PMI. El préstamo VA es un beneficio del servicio militar y solo se ofrece a veteranos, cónyuges sobrevivientes y militares en servicio activo.";
const es$4 = {
  stay_updated_title,
  see_all_rates,
  "30_year_fixed": "30 años fija",
  "20_year_fixed": "20 años fija",
  "15_year_fixed": "15 años fija",
  "30_year_fha": "30 años FHA",
  "30_year_va": "30 años VA",
  "30_year_jumbo": "30 años Jumbo",
  apr,
  points,
  compared_week_over_week,
  rates_current_as_of,
  view_legal_disclosures,
  legal_disclosures_title,
  legal_disclosures_text,
  "30_year_fixed_example": "Préstamo a Tasa Fija de 30 años:",
  "30_year_fixed_example_text": "Una tasa de interés del 6.375% (6.663% APR) es por el costo de 2.00 punto(s) ($7,000.00) pagados al cierre. En una hipoteca de $350,000, haría pagos mensuales de $2,183.55. El pago mensual no incluye impuestos y primas de seguro. El monto del pago real será mayor. El pago asume una relación préstamo-valor (LTV) del 80.00%.",
  "30_year_va_example": "Préstamo VA a Tasa Fija de 30 años:",
  "30_year_va_example_text": "Una tasa de interés del 5.99% (6.372% APR) es por un costo de 1.75 Punto(s) ($6,125.00) pagados al cierre. En una hipoteca de $350,000, haría pagos mensuales de $2,096.18. El pago mensual no incluye impuestos y primas de seguro. El monto del pago real será mayor. El pago asume una relación préstamo-valor (LTV) del 80.00%.",
  va_loans_note,
  "30_year_jumbo_example": "Préstamo a Tasa Fija de 30 años (Jumbo):",
  "30_year_jumbo_example_text": "Una tasa de interés del 5.625% (5.829% APR) es por el costo de 1.75 punto(s) ($19,250.00) pagados al cierre. En una hipoteca de $1,100,000, haría pagos mensuales de $6,332.23. El pago mensual no incluye impuestos y primas de seguro. El monto del pago real será mayor. El pago asume una relación préstamo-valor (LTV) del 70.00%.",
};

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(cooked.slice()) }));
var _a$4;
const $$CarouselRates = createComponent(async ($$result, $$props, $$slots) => {
  const enB64 = Buffer.from(JSON.stringify(en$4)).toString("base64");
  const esB64 = Buffer.from(JSON.stringify(es$4)).toString("base64");
  const ratesData = await getRatesData();
  const utahRates = ratesData.utah;
  function generateRateChange() {
    const change = (Math.random() - 0.5) * 0.5;
    const isPositive = change > 0;
    return {
      value: Math.abs(change).toFixed(3),
      sign: isPositive ? "+" : "-",
      color: isPositive ? "red" : "green"
    };
  }
  function getVaRates() {
    if (utahRates["30-year-va"]) {
      return utahRates["30-year-va"];
    }
    return {
      rate: "6.375%",
      apr: "6.590%",
      points: "1.0"
    };
  }
  return renderTemplate(_a$4 || (_a$4 = __template$4(["", '<section class="py-8 bg-white" data-astro-cid-txj7njxj> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-txj7njxj> <!-- Header with title and button --> <div class="flex justify-between items-center mb-6" data-astro-cid-txj7njxj> <h2 class="text-2xl font-bold text-gray-900" data-i18n="stay_updated_title" data-astro-cid-txj7njxj>Stay updated on today\u2019s rates</h2> <a href="/rates" class="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors" data-i18n="see_all_rates" data-astro-cid-txj7njxj>\nSee all rates\n</a> </div> <!-- Carousel container --> <div class="carousel-container overflow-hidden" data-astro-cid-txj7njxj> <div class="carousel-track" data-astro-cid-txj7njxj> <!-- 30-year Fixed --> <div class="rate-item bg-gray-200 rounded-lg p-4 shadow-sm border border-gray-300" data-astro-cid-txj7njxj> <div class="grid grid-cols-[2fr_1fr_1fr] gap-3 items-start" data-astro-cid-txj7njxj> <div class="flex flex-col" data-astro-cid-txj7njxj> <div class="text-xs text-gray-700 font-medium mb-1" data-i18n="30_year_fixed" data-astro-cid-txj7njxj>30-year fixed</div> <div class="flex items-center gap-2" data-astro-cid-txj7njxj> <div class="text-lg font-bold text-gray-900" data-astro-cid-txj7njxj>', "</div> ", ' </div> </div> <div class="text-center" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="apr" data-astro-cid-txj7njxj>APR</div> <div class="text-sm font-bold text-gray-900" data-astro-cid-txj7njxj>', '</div> </div> <div class="text-right" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="points" data-astro-cid-txj7njxj>Points</div> <div class="text-sm font-semibold text-gray-900" data-astro-cid-txj7njxj>', '</div> </div> </div> </div> <!-- 20-year Fixed --> <div class="rate-item bg-gray-200 rounded-lg p-4 shadow-sm border border-gray-300" data-astro-cid-txj7njxj> <div class="grid grid-cols-[2fr_1fr_1fr] gap-3 items-start" data-astro-cid-txj7njxj> <div class="flex flex-col" data-astro-cid-txj7njxj> <div class="text-xs text-gray-700 font-medium mb-1" data-i18n="20_year_fixed" data-astro-cid-txj7njxj>20-year fixed</div> <div class="flex items-center gap-2" data-astro-cid-txj7njxj> <div class="text-lg font-bold text-gray-900" data-astro-cid-txj7njxj>', "</div> ", ' </div> </div> <div class="text-center" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="apr" data-astro-cid-txj7njxj>APR</div> <div class="text-sm font-bold text-gray-900" data-astro-cid-txj7njxj>', '</div> </div> <div class="text-right" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="points" data-astro-cid-txj7njxj>Points</div> <div class="text-sm font-semibold text-gray-900" data-astro-cid-txj7njxj>', '</div> </div> </div> </div> <!-- 15-year Fixed --> <div class="rate-item bg-gray-200 rounded-lg p-4 shadow-sm border border-gray-300" data-astro-cid-txj7njxj> <div class="grid grid-cols-[2fr_1fr_1fr] gap-3 items-start" data-astro-cid-txj7njxj> <div class="flex flex-col" data-astro-cid-txj7njxj> <div class="text-xs text-gray-700 font-medium mb-1" data-i18n="15_year_fixed" data-astro-cid-txj7njxj>15-year fixed</div> <div class="flex items-center gap-2" data-astro-cid-txj7njxj> <div class="text-lg font-bold text-gray-900" data-astro-cid-txj7njxj>', "</div> ", ' </div> </div> <div class="text-center" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="apr" data-astro-cid-txj7njxj>APR</div> <div class="text-sm font-bold text-gray-900" data-astro-cid-txj7njxj>', '</div> </div> <div class="text-right" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="points" data-astro-cid-txj7njxj>Points</div> <div class="text-sm font-semibold text-gray-900" data-astro-cid-txj7njxj>', '</div> </div> </div> </div> <!-- 30-year FHA --> <div class="rate-item bg-gray-200 rounded-lg p-4 shadow-sm border border-gray-300" data-astro-cid-txj7njxj> <div class="grid grid-cols-[2fr_1fr_1fr] gap-3 items-start" data-astro-cid-txj7njxj> <div class="flex flex-col" data-astro-cid-txj7njxj> <div class="text-xs text-gray-700 font-medium mb-1" data-i18n="30_year_fha" data-astro-cid-txj7njxj>30-year FHA</div> <div class="flex items-center gap-2" data-astro-cid-txj7njxj> <div class="text-lg font-bold text-gray-900" data-astro-cid-txj7njxj>', "</div> ", ' </div> </div> <div class="text-center" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="apr" data-astro-cid-txj7njxj>APR</div> <div class="text-sm font-bold text-gray-900" data-astro-cid-txj7njxj>', '</div> </div> <div class="text-right" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="points" data-astro-cid-txj7njxj>Points</div> <div class="text-sm font-semibold text-gray-900" data-astro-cid-txj7njxj>', "</div> </div> </div> </div> <!-- 30-year VA --> ", ' <!-- 30-year Jumbo --> <div class="rate-item bg-gray-200 rounded-lg p-4 shadow-sm border border-gray-300" data-astro-cid-txj7njxj> <div class="grid grid-cols-[2fr_1fr_1fr] gap-3 items-start" data-astro-cid-txj7njxj> <div class="flex flex-col" data-astro-cid-txj7njxj> <div class="text-xs text-gray-700 font-medium mb-1" data-i18n="30_year_jumbo" data-astro-cid-txj7njxj>30-year Jumbo</div> <div class="flex items-center gap-2" data-astro-cid-txj7njxj> <div class="text-lg font-bold text-gray-900" data-astro-cid-txj7njxj>', "</div> ", ' </div> </div> <div class="text-center" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="apr" data-astro-cid-txj7njxj>APR</div> <div class="text-sm font-bold text-gray-900" data-astro-cid-txj7njxj>', '</div> </div> <div class="text-right" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="points" data-astro-cid-txj7njxj>Points</div> <div class="text-sm font-semibold text-gray-900" data-astro-cid-txj7njxj>', '</div> </div> </div> </div> </div> </div> <div class="mt-6 flex justify-between items-center text-xs" data-astro-cid-txj7njxj> <p class="text-gray-500" data-astro-cid-txj7njxj>\n*<span data-i18n="compared_week_over_week" data-astro-cid-txj7njxj>Compared week over week.</span> <span data-i18n="rates_current_as_of" data-astro-cid-txj7njxj>Rates are current as of</span> <span id="rates-date"', ' data-astro-cid-txj7njxj></span>.\n</p> <button id="openModal" class="text-gray-600 hover:text-gray-800 underline cursor-pointer" data-i18n="view_legal_disclosures" data-astro-cid-txj7njxj>View legal disclosures</button> </div> </div> <!-- Modal --> <div id="modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50" data-astro-cid-txj7njxj> <div class="bg-white rounded-lg p-6 max-w-2xl mx-4 max-h-[80vh] overflow-y-auto" data-astro-cid-txj7njxj> <div class="flex justify-between items-center mb-4" data-astro-cid-txj7njxj> <h3 class="text-lg font-semibold" data-i18n="legal_disclosures_title" data-astro-cid-txj7njxj>Legal Disclosures</h3> <button id="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl font-bold" data-astro-cid-txj7njxj>&times;</button> </div> <div class="text-sm text-gray-700 space-y-4" data-astro-cid-txj7njxj> <p data-i18n="legal_disclosures_text" data-astro-cid-txj7njxj>\nThe Broker Lenders purchase rates are for estimation purposes only. Every situation is different. Results do not reflect all loan programs and are subject to individual program loan limits. Qualification, rates and payments will vary based on timing and individual circumstances. Mortgage rates and pricing could change daily. Actual payments will vary based on your individual situation and current rates. Some products may not be available in all states. Some jumbo products may not be available to first time home buyers. Lending services may not be available in all areas. Some restrictions may apply. This is not a commitment to lend.\n</p> <div class="space-y-3" data-astro-cid-txj7njxj> <p data-astro-cid-txj7njxj> <strong data-i18n="30_year_fixed_example" data-astro-cid-txj7njxj>30-year Fixed-Rate Loan:</strong> <span data-i18n="30_year_fixed_example_text" data-astro-cid-txj7njxj>An interest rate of 6.375% (6.663% APR) is for the cost of 2.00 point(s) ($7,000.00) paid at closing. On a $350,000 mortgage, you would make monthly payments of $2,183.55. Monthly payment does not include taxes and insurance premiums. The actual payment amount will be greater. Payment assumes a loan-to-value (LTV) of 80.00%.</span> </p> <p data-astro-cid-txj7njxj> <strong data-i18n="30_year_va_example" data-astro-cid-txj7njxj>30-year Fixed-Rate VA Loan:</strong> <span data-i18n="30_year_va_example_text" data-astro-cid-txj7njxj>An interest rate of 5.99% (6.372% APR) is for a cost of 1.75 Point(s) ($6,125.00) paid at closing. On a $350,000 mortgage, you would make monthly payments of $2,096.18. Monthly payment does not include taxes and insurance premiums. The actual payment amount will be greater. Payment assumes a loan-to-value (LTV) of 80.00%.</span> </p> <p data-i18n="va_loans_note" data-astro-cid-txj7njxj>\nVA loans do not require PMI. The VA loan is a benefit of military service and only offered to veterans, surviving spouses and active duty military.\n</p> <p data-astro-cid-txj7njxj> <strong data-i18n="30_year_jumbo_example" data-astro-cid-txj7njxj>30-year Fixed-Rate Loan (Jumbo):</strong> <span data-i18n="30_year_jumbo_example_text" data-astro-cid-txj7njxj>An interest rate of 5.625% (5.829% APR) is for the cost of 1.75 point(s) ($19,250.00) paid at closing. On a $1,100,000 mortgage, you would make monthly payments of $6,332.23. Monthly payment does not include taxes and insurance premiums. The actual payment amount will be greater. Payment assumes a loan-to-value (LTV) of 70.00%.</span> </p> </div> </div> </div> </div> </section>  <!-- Inline i18n payloads encoded --> <div id="i18n-carousel"', "", ` style="display:none" data-astro-cid-txj7njxj></div> <script>
  (function(){
  // Modal functionality
  const modal = document.getElementById('modal');
  const openModalBtn = document.getElementById('openModal');
  const closeModalBtn = document.getElementById('closeModal');

  openModalBtn?.addEventListener('click', () => {
    modal?.classList.remove('hidden');
    modal?.classList.add('flex');
  });

  closeModalBtn?.addEventListener('click', () => {
    modal?.classList.add('hidden');
    modal?.classList.remove('flex');
  });

  // Close modal when clicking outside
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal?.classList.add('hidden');
      modal?.classList.remove('flex');
    }
  });

  // i18n for CarouselRates
  const i18nEl = document.getElementById('i18n-carousel');
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
    en: decode(i18nEl?.getAttribute('data-en') || ''),
    es: decode(i18nEl?.getAttribute('data-es') || ''),
  };
  const getInitialLang = () => {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    const stored = localStorage.getItem('lang');
    return (urlLang || stored || 'en');
  };
  const applyTranslations = (lang) => {
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key]) el.textContent = dict[key];
    });
  };
  const formatDateForLang = (lang) => {
    const span = document.getElementById('rates-date');
    if (!span) return;
    const tsAttr = span.getAttribute('data-ts');
    let d;
    if (tsAttr) {
      // Try numeric (epoch ms), else parse ISO/date string
      const num = Number(tsAttr);
      if (!Number.isNaN(num) && isFinite(num)) {
        d = new Date(num);
      } else {
        const parsed = new Date(tsAttr);
        d = isNaN(parsed.getTime()) ? new Date() : parsed;
      }
    } else {
      d = new Date();
    }
    const locale = lang === 'es' ? 'es-ES' : 'en-US';
    const text = d.toLocaleString(locale, {
      timeZone: 'America/Denver',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });
    span.textContent = text;
  };
  const setLanguage = (lang) => {
    applyTranslations(lang);
    formatDateForLang(lang);
  };
  // Initialize
  setLanguage(getInitialLang());
  // React to language menu clicks handled globally in Header
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href*="?lang="]');
    if (a) {
      const href = new URL(a.href);
      const lang = href.searchParams.get('lang');
      if (lang) setLanguage(lang);
    }
  });
  })();
<\/script>`])), maybeRenderHead(), utahRates["30-year-fixed"].rate, (() => {
    const change = generateRateChange();
    return renderTemplate`<span${addAttribute(`text-xs px-2 py-1 rounded-full bg-${change.color}-500 text-white font-medium`, "class")} data-astro-cid-txj7njxj>${change.sign}${change.value}%</span>`;
  })(), utahRates["30-year-fixed"].apr, utahRates["30-year-fixed"].points, utahRates["20-year-fixed"].rate, (() => {
    const change = generateRateChange();
    return renderTemplate`<span${addAttribute(`text-xs px-2 py-1 rounded-full bg-${change.color}-500 text-white font-medium`, "class")} data-astro-cid-txj7njxj>${change.sign}${change.value}%</span>`;
  })(), utahRates["20-year-fixed"].apr, utahRates["20-year-fixed"].points, utahRates["15-year-fixed"].rate, (() => {
    const change = generateRateChange();
    return renderTemplate`<span${addAttribute(`text-xs px-2 py-1 rounded-full bg-${change.color}-500 text-white font-medium`, "class")} data-astro-cid-txj7njxj>${change.sign}${change.value}%</span>`;
  })(), utahRates["15-year-fixed"].apr, utahRates["15-year-fixed"].points, utahRates["30-year-fha"].rate, (() => {
    const change = generateRateChange();
    return renderTemplate`<span${addAttribute(`text-xs px-2 py-1 rounded-full bg-${change.color}-500 text-white font-medium`, "class")} data-astro-cid-txj7njxj>${change.sign}${change.value}%</span>`;
  })(), utahRates["30-year-fha"].apr, utahRates["30-year-fha"].points, (() => {
    const vaRates = getVaRates();
    return renderTemplate`<div class="rate-item bg-gray-200 rounded-lg p-4 shadow-sm border border-gray-300" data-astro-cid-txj7njxj> <div class="grid grid-cols-[2fr_1fr_1fr] gap-3 items-start" data-astro-cid-txj7njxj> <div class="flex flex-col" data-astro-cid-txj7njxj> <div class="text-xs text-gray-700 font-medium mb-1" data-i18n="30_year_va" data-astro-cid-txj7njxj>30-year VA</div> <div class="flex items-center gap-2" data-astro-cid-txj7njxj> <div class="text-lg font-bold text-gray-900" data-astro-cid-txj7njxj>${vaRates.rate}</div> ${(() => {
      const change = generateRateChange();
      return renderTemplate`<span${addAttribute(`text-xs px-2 py-1 rounded-full bg-${change.color}-500 text-white font-medium`, "class")} data-astro-cid-txj7njxj>${change.sign}${change.value}%</span>`;
    })()} </div> </div> <div class="text-center" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="apr" data-astro-cid-txj7njxj>APR</div> <div class="text-sm font-bold text-gray-900" data-astro-cid-txj7njxj>${vaRates.apr}</div> </div> <div class="text-right" data-astro-cid-txj7njxj> <div class="text-xs text-gray-500 mb-1" data-i18n="points" data-astro-cid-txj7njxj>Points</div> <div class="text-sm font-semibold text-gray-900" data-astro-cid-txj7njxj>${vaRates.points}</div> </div> </div> </div>`;
  })(), utahRates["30-year-jumbo"].rate, (() => {
    const change = generateRateChange();
    return renderTemplate`<span${addAttribute(`text-xs px-2 py-1 rounded-full bg-${change.color}-500 text-white font-medium`, "class")} data-astro-cid-txj7njxj>${change.sign}${change.value}%</span>`;
  })(), utahRates["30-year-jumbo"].apr, utahRates["30-year-jumbo"].points, addAttribute(ratesData.timestamp, "data-ts"), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/CarouselRates.astro", void 0);

const understanding_title$1 = "Understanding leads to smarter choices";
const rate_updates_title$1 = "Rate updates";
const rate_updates_description$1 = "Stay informed about current mortgage rates";
const first_time_buyers_title$1 = "First-time buyers";
const first_time_buyers_description$1 = "Special programs and tips for first-time homebuyers";
const apply_refinance_title$1 = "Apply for refinance or purchase";
const apply_refinance_description$1 = "Start your application and explore competitive options for refinancing or buying.";
const refinancing_title$1 = "Refinancing";
const refinancing_description$1 = "Learn when and how to refinance your mortgage";
const investor_financing_title$1 = "Investor financing";
const investor_financing_description$1 = "Explore flexible financing solutions for rental and investment properties";
const en$3 = {
  understanding_title: understanding_title$1,
  rate_updates_title: rate_updates_title$1,
  rate_updates_description: rate_updates_description$1,
  first_time_buyers_title: first_time_buyers_title$1,
  first_time_buyers_description: first_time_buyers_description$1,
  apply_refinance_title: apply_refinance_title$1,
  apply_refinance_description: apply_refinance_description$1,
  refinancing_title: refinancing_title$1,
  refinancing_description: refinancing_description$1,
  investor_financing_title: investor_financing_title$1,
  investor_financing_description: investor_financing_description$1,
};

const understanding_title = "El conocimiento lleva a decisiones más inteligentes";
const rate_updates_title = "Actualizaciones de tasas";
const rate_updates_description = "Mantente informado sobre las tasas hipotecarias actuales";
const first_time_buyers_title = "Compradores por primera vez";
const first_time_buyers_description = "Programas especiales y consejos para compradores de vivienda por primera vez";
const apply_refinance_title = "Solicitar refinanciamiento o compra";
const apply_refinance_description = "Comienza tu solicitud y explora opciones competitivas para refinanciar o comprar.";
const refinancing_title = "Refinanciamiento";
const refinancing_description = "Aprende cuándo y cómo refinanciar tu hipoteca";
const investor_financing_title = "Financiamiento para inversores";
const investor_financing_description = "Explora soluciones de financiamiento flexibles para propiedades de alquiler e inversión";
const es$3 = {
  understanding_title,
  rate_updates_title,
  rate_updates_description,
  first_time_buyers_title,
  first_time_buyers_description,
  apply_refinance_title,
  apply_refinance_description,
  refinancing_title,
  refinancing_description,
  investor_financing_title,
  investor_financing_description,
};

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$UnderstandingSection = createComponent(($$result, $$props, $$slots) => {
  const enB64 = Buffer.from(JSON.stringify(en$3)).toString("base64");
  const esB64 = Buffer.from(JSON.stringify(es$3)).toString("base64");
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<section class="py-16 bg-white"> <div class="w-full mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-i18n="understanding_title">Understanding leads to smarter choices</h2> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start"> <!-- Left Column - 2 cards stacked --> <div class="space-y-6"> <!-- Rate updates --> <a href="/rates" class="bg-gray-50 hover:bg-gray-200 p-6 rounded-xl h-48 flex flex-col justify-between transition-colors block"> <div> <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg> </div> <h3 class="font-semibold text-gray-900 mb-2" data-i18n="rate_updates_title">Rate updates</h3> <p class="text-sm text-gray-600" data-i18n="rate_updates_description">Stay informed about current mortgage rates</p> </div> <div class="flex justify-end"> <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center"> <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a> <!-- First-time buyers --> <a href="/buy" class="bg-gray-50 hover:bg-gray-200 p-6 rounded-xl h-48 flex flex-col justify-between transition-colors block"> <div> <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> <h3 class="font-semibold text-gray-900 mb-2" data-i18n="first_time_buyers_title">First-time buyers</h3> <p class="text-sm text-gray-600" data-i18n="first_time_buyers_description">Special programs and tips for first-time homebuyers</p> </div> <div class="flex justify-end"> <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center"> <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a> </div> <!-- Center Column - Black card --> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" class="bg-black hover:bg-gray-800 text-white p-8 rounded-2xl h-[408px] flex flex-col justify-between transition-colors block"> <div> <!-- Updated title and subtitle --> <h3 class="text-2xl font-bold mb-4" data-i18n="apply_refinance_title">Apply for refinance or purchase</h3> <p class="text-gray-200 mb-6" data-i18n="apply_refinance_description">Start your application and explore competitive options for refinancing or buying.</p> </div> <div class="flex justify-end"> <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center"> <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a> <!-- Right Column - 2 cards stacked --> <div class="space-y-6"> <!-- Refinancing --> <a href="/refinance" class="bg-gray-50 hover:bg-gray-200 p-6 rounded-xl h-48 flex flex-col justify-between transition-colors block"> <div> <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path> </svg> </div> <h3 class="font-semibold text-gray-900 mb-2" data-i18n="refinancing_title">Refinancing</h3> <p class="text-sm text-gray-600" data-i18n="refinancing_description">Learn when and how to refinance your mortgage</p> </div> <div class="flex justify-end"> <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center"> <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a> <!-- Investment properties --> <a href="/loan-options" class="bg-gray-50 hover:bg-gray-200 p-6 rounded-xl h-48 flex flex-col justify-between transition-colors block"> <div> <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-4"> <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path> </svg> </div> <!-- Updated title and subtitle --> <h3 class="font-semibold text-gray-900 mb-2" data-i18n="investor_financing_title">Investor financing</h3> <p class="text-sm text-gray-600" data-i18n="investor_financing_description">Explore flexible financing solutions for rental and investment properties</p> </div> <div class="flex justify-end"> <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center"> <svg class="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </div> </div> </a> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (UnderstandingSection) --> <div id="i18n-understanding"', "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-understanding');
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
      window.history.replaceState({}, '', url);
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
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/UnderstandingSection.astro", void 0);

const online_title$1 = "Online and on your side";
const real_people_expertise$1 = "Real people, real expertise - Connect with our licensed loan officers";
const fast_secure_process$1 = "Fast, secure online application process";
const online_tools_24_7$1 = "24/7 online tools to track your loan progress";
const expert_advice$1 = "Get expert advice when you need it most";
const get_started$1 = "Get started";
const en$2 = {
  online_title: online_title$1,
  real_people_expertise: real_people_expertise$1,
  fast_secure_process: fast_secure_process$1,
  online_tools_24_7: online_tools_24_7$1,
  expert_advice: expert_advice$1,
  get_started: get_started$1,
};

const online_title = "En línea y de tu lado";
const real_people_expertise = "Personas reales, experiencia real - Conéctate con nuestros oficiales de préstamos licenciados";
const fast_secure_process = "Proceso de solicitud en línea rápido y seguro";
const online_tools_24_7 = "Herramientas en línea 24/7 para seguir el progreso de tu préstamo";
const expert_advice = "Obtén asesoramiento experto cuando más lo necesites";
const get_started = "Comenzar";
const es$2 = {
  online_title,
  real_people_expertise,
  fast_secure_process,
  online_tools_24_7,
  expert_advice,
  get_started,
};

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$OnlineSection = createComponent(($$result, $$props, $$slots) => {
  const enB64 = Buffer.from(JSON.stringify(en$2)).toString("base64");
  const esB64 = Buffer.from(JSON.stringify(es$2)).toString("base64");
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section class="py-16 bg-white"> <div class="w-full mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left side - Content --> <div class="bg-black text-white p-8 lg:p-12 rounded-2xl"> <h2 class="text-3xl font-bold mb-6" data-i18n="online_title">Online and on your side</h2> <ul class="space-y-4 mb-8"> <li class="flex items-start"> <div class="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div> <span data-i18n="real_people_expertise">Real people, real expertise - Connect with our licensed loan officers</span> </li> <li class="flex items-start"> <div class="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div> <span data-i18n="fast_secure_process">Fast, secure online application process</span> </li> <li class="flex items-start"> <div class="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div> <span data-i18n="online_tools_24_7">24/7 online tools to track your loan progress</span> </li> <li class="flex items-start"> <div class="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div> <span data-i18n="expert_advice">Get expert advice when you need it most</span> </li> </ul> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" class="bg-white text-black px-6 py-3 rounded-[48px] font-semibold hover:bg-gray-100 transition-colors inline-block" data-i18n="get_started">Get started</a> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=happy%20elderly%20couple%20sitting%20together%20looking%20at%20laptop%20computer%2C%20smiling%2C%20home%20office%20setting%2C%20warm%20lighting%2C%20professional%20photography&image_size=landscape_4_3" alt="Happy elderly couple using laptop together" class="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (OnlineSection) --> <div id="i18n-online"', "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-online');
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
<\/script>`], ["", '<section class="py-16 bg-white"> <div class="w-full mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left side - Content --> <div class="bg-black text-white p-8 lg:p-12 rounded-2xl"> <h2 class="text-3xl font-bold mb-6" data-i18n="online_title">Online and on your side</h2> <ul class="space-y-4 mb-8"> <li class="flex items-start"> <div class="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div> <span data-i18n="real_people_expertise">Real people, real expertise - Connect with our licensed loan officers</span> </li> <li class="flex items-start"> <div class="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div> <span data-i18n="fast_secure_process">Fast, secure online application process</span> </li> <li class="flex items-start"> <div class="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div> <span data-i18n="online_tools_24_7">24/7 online tools to track your loan progress</span> </li> <li class="flex items-start"> <div class="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div> <span data-i18n="expert_advice">Get expert advice when you need it most</span> </li> </ul> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" class="bg-white text-black px-6 py-3 rounded-[48px] font-semibold hover:bg-gray-100 transition-colors inline-block" data-i18n="get_started">Get started</a> </div> <!-- Right side - Image --> <div> <img src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=happy%20elderly%20couple%20sitting%20together%20looking%20at%20laptop%20computer%2C%20smiling%2C%20home%20office%20setting%2C%20warm%20lighting%2C%20professional%20photography&image_size=landscape_4_3" alt="Happy elderly couple using laptop together" class="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (OnlineSection) --> <div id="i18n-online"', "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-online');
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
<\/script>`])), maybeRenderHead(), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/OnlineSection.astro", void 0);

const neighborhood_title$1 = "We're part of your neighborhood";
const neighborhood_description$1 = "When more people find a place to call home, every community grows stronger.";
const customer_satisfaction$1 = "Customer satisfaction rating from verified reviews";
const families_helped$1 = "Families helped achieve homeownership nationwide";
const loan_volume$1 = "Total loan volume originated since inception";
const en$1 = {
  neighborhood_title: neighborhood_title$1,
  neighborhood_description: neighborhood_description$1,
  customer_satisfaction: customer_satisfaction$1,
  families_helped: families_helped$1,
  loan_volume: loan_volume$1,
};

const neighborhood_title = "Somos parte de tu vecindario";
const neighborhood_description = "Cuando más personas encuentran un lugar al que llamar hogar, cada comunidad se vuelve más fuerte.";
const customer_satisfaction = "Calificación de satisfacción del cliente de reseñas verificadas";
const families_helped = "Familias ayudadas a lograr la propiedad de vivienda en todo el país";
const loan_volume = "Volumen total de préstamos originado desde el inicio";
const es$1 = {
  neighborhood_title,
  neighborhood_description,
  customer_satisfaction,
  families_helped,
  loan_volume,
};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$NeighborhoodStats = createComponent(($$result, $$props, $$slots) => {
  const enB64 = Buffer.from(JSON.stringify(en$1)).toString("base64");
  const esB64 = Buffer.from(JSON.stringify(es$1)).toString("base64");
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="py-16 bg-white"> <div class="w-full mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-i18n="neighborhood_title">We're part of your neighborhood</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-i18n="neighborhood_description">When more people find a place to call home, every community grows stronger.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Stat 1 --> <div class="text-center bg-gray-50 p-8 rounded-xl shadow-sm"> <div class="text-5xl font-bold text-red-500 mb-2"> <span class="speedometer-value" data-type="percent" data-target="96">0%</span> </div> <p class="text-gray-600" data-i18n="customer_satisfaction">Customer satisfaction rating from verified reviews</p> </div> <!-- Stat 2 --> <div class="text-center bg-gray-50 p-8 rounded-xl shadow-sm"> <div class="text-5xl font-bold text-red-500 mb-2"> <span class="speedometer-value" data-type="thousands" data-target="400000">+0k</span> </div> <p class="text-gray-600" data-i18n="families_helped">Families helped achieve homeownership nationwide</p> </div> <!-- Stat 3 --> <div class="text-center bg-gray-50 p-8 rounded-xl shadow-sm"> <div class="text-5xl font-bold text-red-500 mb-2"> <span class="speedometer-value" data-type="trillions" data-target="3.4">$0.0T</span> </div> <p class="text-gray-600" data-i18n="loan_volume">Total loan volume originated since inception</p> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (NeighborhoodStats) --> <div id="i18n-neighborhood"`, "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-neighborhood');
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
<\/script> `, ""], ["", `<section class="py-16 bg-white"> <div class="w-full mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-3xl font-bold text-gray-900 mb-4" data-i18n="neighborhood_title">We're part of your neighborhood</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-i18n="neighborhood_description">When more people find a place to call home, every community grows stronger.</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Stat 1 --> <div class="text-center bg-gray-50 p-8 rounded-xl shadow-sm"> <div class="text-5xl font-bold text-red-500 mb-2"> <span class="speedometer-value" data-type="percent" data-target="96">0%</span> </div> <p class="text-gray-600" data-i18n="customer_satisfaction">Customer satisfaction rating from verified reviews</p> </div> <!-- Stat 2 --> <div class="text-center bg-gray-50 p-8 rounded-xl shadow-sm"> <div class="text-5xl font-bold text-red-500 mb-2"> <span class="speedometer-value" data-type="thousands" data-target="400000">+0k</span> </div> <p class="text-gray-600" data-i18n="families_helped">Families helped achieve homeownership nationwide</p> </div> <!-- Stat 3 --> <div class="text-center bg-gray-50 p-8 rounded-xl shadow-sm"> <div class="text-5xl font-bold text-red-500 mb-2"> <span class="speedometer-value" data-type="trillions" data-target="3.4">$0.0T</span> </div> <p class="text-gray-600" data-i18n="loan_volume">Total loan volume originated since inception</p> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (NeighborhoodStats) --> <div id="i18n-neighborhood"`, "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-neighborhood');
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
<\/script> `, ""])), maybeRenderHead(), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"), renderScript($$result, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/NeighborhoodStats.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/components/NeighborhoodStats.astro", void 0);

const title$1 = "Broker Lenders - Home Loans Made for Your Lifestyle";
const hero$1 = {"title":"Home loans made for your lifestyle","refinancing":"Refinancing","buying":"Buying","todays_rates":"Today's rates","live":"Live"};
const next_move$1 = {"title":"What's your next move?","buy_smart":"Buy smart. Save more.","refinance_simple":"Refinance made simple.","transform_equity":"Transform equity into opportunity.","explore_va":"Explore your VA loan benefits."};
const final_cta$1 = {"title":"Thousands have made it home with us. You can too.","ready_to_buy":"I'm ready to buy","phone_number":"(801) 307-0273"};
const en = {
  title: title$1,
  hero: hero$1,
  next_move: next_move$1,
  final_cta: final_cta$1,
};

const title = "Broker Lenders - Préstamos Hipotecarios Hechos para tu Estilo de Vida";
const hero = {"title":"Préstamos hipotecarios hechos para tu estilo de vida","refinancing":"Refinanciamiento","buying":"Comprar","todays_rates":"Tasas de hoy","live":"En vivo"};
const next_move = {"title":"¿Cuál es tu próximo paso?","buy_smart":"Compra inteligente. Ahorra más.","refinance_simple":"Refinanciamiento simplificado.","transform_equity":"Transforma el capital en oportunidad.","explore_va":"Explora tus beneficios de préstamo VA."};
const final_cta = {"title":"Miles han hecho de esto su hogar con nosotros. Tú también puedes.","ready_to_buy":"Estoy listo para comprar","phone_number":"(801) 307-0273"};
const es = {
  title,
  hero,
  next_move,
  final_cta,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  Astro2.response.headers.set("Content-Type", "text/html; charset=UTF-8");
  const cookie = Astro2.request.headers.get("cookie") || "";
  const m = cookie.match(/(?:^|;\s*)lang=([^;]+)/);
  const cookieLang = m && m[1] ? m[1].toLowerCase() : null;
  const rawParam = new URL(Astro2.request.url).searchParams.get("lang");
  const raw = (rawParam || cookieLang || "en").toLowerCase();
  const lang = ["en", "es"].includes(raw) ? raw : "en";
  const dict = lang === "es" ? es : en;
  console.log("[i18n][index][SSR] resolve", {
    href: Astro2.request.url,
    param: rawParam,
    cookieLang,
    resolvedLang: lang
  });
  const enB64 = Buffer.from(JSON.stringify(en)).toString("base64");
  const esB64 = Buffer.from(JSON.stringify(es)).toString("base64");
  return renderTemplate(_a || (_a = __template(["", ' <!-- Inline i18n payloads encoded (index) --> <div id="i18n-index"', "", " style=\"display:none\"></div> <script>\n  (() => {\n    const init = () => {\n      // Apply i18n for index page texts (scoped to avoid globals)\n      const root = document.getElementById('i18n-index');\n      const decode = (val) => {\n        try {\n          const b64 = val || '';\n          const bin = atob(b64);\n          const bytes = new Uint8Array(bin.length);\n          for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);\n          const jsonText = new TextDecoder('utf-8').decode(bytes);\n          return JSON.parse(jsonText);\n        } catch { return {}; }\n      };\n      const translations = {\n        en: decode(root?.getAttribute('data-en') || ''),\n        es: decode(root?.getAttribute('data-es') || ''),\n      };\n      const getInitialLang = () => {\n        const urlLang = new URLSearchParams(window.location.search).get('lang');\n        const htmlLang = document.documentElement.getAttribute('lang');\n        let cookieLang = null;\n        try {\n          const m = document.cookie.match(/(?:^|;\\s*)lang=([^;]+)/);\n          cookieLang = m && m[1] ? m[1].toLowerCase() : null;\n        } catch {}\n        const stored = localStorage.getItem('lang');\n        const raw = (urlLang || htmlLang || cookieLang || stored || 'en').toLowerCase();\n        return raw === 'es' ? 'es' : 'en';\n      };\n      const applyIndexTranslations = (lang) => {\n        const dict = translations[lang] || translations.en;\n        document.querySelectorAll('[data-i18n]').forEach(el => {\n          const key = el.getAttribute('data-i18n');\n          // Support nested keys like final_cta.title\n          const parts = key.split('.');\n          let val = dict;\n          for (const p of parts) { if (val && p in val) { val = val[p]; } else { val = null; break; } }\n          if (typeof val === 'string') {\n            if (val.includes('<br>')) {\n              el.innerHTML = val;\n            } else {\n              el.textContent = val;\n            }\n          }\n        });\n        // Update document title if inside Layout\n        if (dict.title) {\n          document.title = dict.title;\n        }\n      };\n      const setLanguage = (lang) => {\n        try {\n          const next = (lang === 'es') ? 'es' : 'en';\n          // Persist in localStorage and cookie\n          localStorage.setItem('lang', next);\n          try { document.cookie = `lang=${next}; path=/; max-age=${60*60*24*365}; SameSite=Lax`; } catch {}\n          // Reflect in <html lang>\n          try { document.documentElement.setAttribute('lang', next); } catch {}\n          // Keep URL in sync\n          const url = new URL(window.location.href);\n          url.searchParams.set('lang', next);\n          const newUrl = url.toString();\n          if (newUrl !== window.location.href) {\n            window.history.replaceState({}, '', newUrl);\n          }\n          applyIndexTranslations(next);\n        } catch (e) {\n          console.warn('[i18n][index] setLanguage failed', e);\n        }\n      };\n      // Initialize: persist and apply so child components read consistent lang\n      setLanguage(getInitialLang());\n      // React to language menu clicks (Header intercepts click and updates URL)\n      document.addEventListener('click', (e) => {\n        const a = e.target.closest('a[href*=\"?lang=\"]');\n        if (!a) return;\n        let href;\n        try { href = new URL(a.href, window.location.origin); } catch { return; }\n        const newLang = href.searchParams.get('lang');\n        if (newLang) setLanguage(newLang);\n      });\n      // Nota: dejamos que el Header maneje la navegaci\xF3n de idioma (SSR)\n      // Aqu\xED solo reaccionamos si el almacenamiento cambia\n      // Also respond to storage events (e.g., Header updates lang)\n      window.addEventListener('storage', (ev) => {\n        if (ev.key === 'lang' && ev.newValue) {\n          applyIndexTranslations(ev.newValue);\n        }\n      });\n    };\n    if (document.readyState === 'loading') {\n      document.addEventListener('DOMContentLoaded', init);\n    } else {\n      init();\n    }\n  })();\n<\/script>"], ["", ' <!-- Inline i18n payloads encoded (index) --> <div id="i18n-index"', "", " style=\"display:none\"></div> <script>\n  (() => {\n    const init = () => {\n      // Apply i18n for index page texts (scoped to avoid globals)\n      const root = document.getElementById('i18n-index');\n      const decode = (val) => {\n        try {\n          const b64 = val || '';\n          const bin = atob(b64);\n          const bytes = new Uint8Array(bin.length);\n          for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);\n          const jsonText = new TextDecoder('utf-8').decode(bytes);\n          return JSON.parse(jsonText);\n        } catch { return {}; }\n      };\n      const translations = {\n        en: decode(root?.getAttribute('data-en') || ''),\n        es: decode(root?.getAttribute('data-es') || ''),\n      };\n      const getInitialLang = () => {\n        const urlLang = new URLSearchParams(window.location.search).get('lang');\n        const htmlLang = document.documentElement.getAttribute('lang');\n        let cookieLang = null;\n        try {\n          const m = document.cookie.match(/(?:^|;\\\\s*)lang=([^;]+)/);\n          cookieLang = m && m[1] ? m[1].toLowerCase() : null;\n        } catch {}\n        const stored = localStorage.getItem('lang');\n        const raw = (urlLang || htmlLang || cookieLang || stored || 'en').toLowerCase();\n        return raw === 'es' ? 'es' : 'en';\n      };\n      const applyIndexTranslations = (lang) => {\n        const dict = translations[lang] || translations.en;\n        document.querySelectorAll('[data-i18n]').forEach(el => {\n          const key = el.getAttribute('data-i18n');\n          // Support nested keys like final_cta.title\n          const parts = key.split('.');\n          let val = dict;\n          for (const p of parts) { if (val && p in val) { val = val[p]; } else { val = null; break; } }\n          if (typeof val === 'string') {\n            if (val.includes('<br>')) {\n              el.innerHTML = val;\n            } else {\n              el.textContent = val;\n            }\n          }\n        });\n        // Update document title if inside Layout\n        if (dict.title) {\n          document.title = dict.title;\n        }\n      };\n      const setLanguage = (lang) => {\n        try {\n          const next = (lang === 'es') ? 'es' : 'en';\n          // Persist in localStorage and cookie\n          localStorage.setItem('lang', next);\n          try { document.cookie = \\`lang=\\${next}; path=/; max-age=\\${60*60*24*365}; SameSite=Lax\\`; } catch {}\n          // Reflect in <html lang>\n          try { document.documentElement.setAttribute('lang', next); } catch {}\n          // Keep URL in sync\n          const url = new URL(window.location.href);\n          url.searchParams.set('lang', next);\n          const newUrl = url.toString();\n          if (newUrl !== window.location.href) {\n            window.history.replaceState({}, '', newUrl);\n          }\n          applyIndexTranslations(next);\n        } catch (e) {\n          console.warn('[i18n][index] setLanguage failed', e);\n        }\n      };\n      // Initialize: persist and apply so child components read consistent lang\n      setLanguage(getInitialLang());\n      // React to language menu clicks (Header intercepts click and updates URL)\n      document.addEventListener('click', (e) => {\n        const a = e.target.closest('a[href*=\"?lang=\"]');\n        if (!a) return;\n        let href;\n        try { href = new URL(a.href, window.location.origin); } catch { return; }\n        const newLang = href.searchParams.get('lang');\n        if (newLang) setLanguage(newLang);\n      });\n      // Nota: dejamos que el Header maneje la navegaci\xF3n de idioma (SSR)\n      // Aqu\xED solo reaccionamos si el almacenamiento cambia\n      // Also respond to storage events (e.g., Header updates lang)\n      window.addEventListener('storage', (ev) => {\n        if (ev.key === 'lang' && ev.newValue) {\n          applyIndexTranslations(ev.newValue);\n        }\n      });\n    };\n    if (document.readyState === 'loading') {\n      document.addEventListener('DOMContentLoaded', init);\n    } else {\n      init();\n    }\n  })();\n<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": dict.title, "lang": lang }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "CarouselRates", $$CarouselRates, {})} ${renderComponent($$result2, "NextMoveSection", $$NextMoveSection, { "lang": lang })} ${renderComponent($$result2, "UnderstandingSection", $$UnderstandingSection, {})} ${renderComponent($$result2, "OnlineSection", $$OnlineSection, {})} ${renderComponent($$result2, "RewardsCard", $$RewardsCard, {})} ${renderComponent($$result2, "NeighborhoodStats", $$NeighborhoodStats, {})} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, {})}  ${maybeRenderHead()}<section class="py-18 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h2 class="text-3xl font-bold text-gray-900 mb-8" data-i18n="final_cta.title">Thousands have made it home with us. <br>You can too.</h2> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="https://pedrolira.my1003app.com/318973/register" target="_blank" class="bg-black text-white px-8 py-4 rounded-[48px] font-semibold hover:bg-red-600 hover:text-white transition-colors text-lg inline-block text-center"> <span data-i18n="final_cta.ready_to_buy">I'm ready to buy</span> </a> <a href="tel:+1-801-307-0273" class="bg-white text-black px-8 py-4 rounded-[48px] font-semibold border-2 border-black hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center text-center"> <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span data-i18n="final_cta.phone_number">(801) 307-0273</span> </a> </div> </div> </div> </section>  ${renderComponent($$result2, "ImportantLegal", $$ImportantLegal, {})} ` }), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"));
}, "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/index.astro", void 0);

const $$file = "/Users/pamplona/Documents/trae_projects/broker-lenders/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
