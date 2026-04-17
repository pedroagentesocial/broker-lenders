import { e as createComponent, r as renderTemplate, l as renderScript, g as addAttribute, m as maybeRenderHead } from './astro/server_DeoLMx00.mjs';
import 'piccolore';
import 'clsx';

const important_legal_disclosures$1 = "Important legal disclosures";
const broker_lenders_trademark$1 = "<strong>Broker Lenders</strong> is a registered trademark. Pedro Lira NMLS #318973 and Xpert Home Lending NMLS #2179191. Equal Housing Lender.";
const loan_programs_disclaimer$1 = "All loan programs are subject to credit approval and property appraisal. Rates, program terms and conditions are subject to change without notice. Not all products are available in all states or for all amounts. Other restrictions and limitations apply.";
const not_commitment_to_lend$1 = "This is not a commitment to lend. All information provided is for informational purposes only and is not an advertisement for products or services in states where prohibited by law.";
const licensing_info$1 = "Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. Licensed by the Department of Financial Protection and Innovation under the California Financing Law License.";
const interest_rates_disclaimer$1 = "Interest rates and Annual Percentage Rates (APRs) are based on current market conditions and may change. The actual rate you receive may be higher or lower depending on your credit profile and other factors.";
const privacy_policy$1 = "Privacy Policy:";
const privacy_policy_text$1 = "We are committed to protecting your privacy. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in our Privacy Policy.";
const copyright_notice$1 = "© 2024 Broker Lenders. All rights reserved. Last updated: December 2024.";
const en = {
  important_legal_disclosures: important_legal_disclosures$1,
  broker_lenders_trademark: broker_lenders_trademark$1,
  loan_programs_disclaimer: loan_programs_disclaimer$1,
  not_commitment_to_lend: not_commitment_to_lend$1,
  licensing_info: licensing_info$1,
  interest_rates_disclaimer: interest_rates_disclaimer$1,
  privacy_policy: privacy_policy$1,
  privacy_policy_text: privacy_policy_text$1,
  copyright_notice: copyright_notice$1,
};

const important_legal_disclosures = "Divulgaciones legales importantes";
const broker_lenders_trademark = "<strong>Broker Lenders</strong> es una marca registrada. Pedro Lira NMLS #318973 y Xpert Home Lending NMLS #2179191. Prestamista de Vivienda Justa.";
const loan_programs_disclaimer = "Todos los programas de préstamos están sujetos a aprobación crediticia y evaluación de propiedad. Las tasas, términos y condiciones del programa están sujetos a cambios sin previo aviso. No todos los productos están disponibles en todos los estados o para todas las cantidades. Se aplican otras restricciones y limitaciones.";
const not_commitment_to_lend = "Esto no es un compromiso de préstamo. Toda la información proporcionada es solo con fines informativos y no es un anuncio de productos o servicios en estados donde esté prohibido por ley.";
const licensing_info = "Licenciado por el Departamento de Protección Financiera e Innovación bajo la Ley de Préstamos Hipotecarios Residenciales de California. Licenciado por el Departamento de Protección Financiera e Innovación bajo la Licencia de Financiamiento de California.";
const interest_rates_disclaimer = "Las tasas de interés y las Tasas de Porcentaje Anual (APR) se basan en las condiciones actuales del mercado y pueden cambiar. La tasa real que reciba puede ser mayor o menor dependiendo de su perfil crediticio y otros factores.";
const privacy_policy = "Política de Privacidad:";
const privacy_policy_text = "Estamos comprometidos a proteger su privacidad. No vendemos, intercambiamos ni transferimos de otra manera su información personal a terceros sin su consentimiento, excepto como se describe en nuestra Política de Privacidad.";
const copyright_notice = "© 2024 Broker Lenders. Todos los derechos reservados. Última actualización: diciembre 2024.";
const es = {
  important_legal_disclosures,
  broker_lenders_trademark,
  loan_programs_disclaimer,
  not_commitment_to_lend,
  licensing_info,
  interest_rates_disclaimer,
  privacy_policy,
  privacy_policy_text,
  copyright_notice,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ImportantLegal = createComponent(($$result, $$props, $$slots) => {
  const enB64 = Buffer.from(JSON.stringify(en)).toString("base64");
  const esB64 = Buffer.from(JSON.stringify(es)).toString("base64");
  return renderTemplate(_a || (_a = __template(["", '<section class="py-8 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-white"> <button id="legal-toggle" class="w-full px-6 py-4 flex items-center text-left hover:bg-gray-50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300" aria-expanded="false" aria-controls="legal-content"> <svg id="legal-arrow" class="w-5 h-5 text-gray-500 transform transition-transform duration-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> <h3 class="text-lg font-semibold text-gray-900" data-i18n="important_legal_disclosures">Important legal disclosures</h3> </button> <div id="legal-content" class="overflow-hidden transition-all duration-300 ease-in-out max-h-0" aria-hidden="true"> <div class="px-6 pb-6 pt-2 text-sm text-gray-600 space-y-4"> <p data-i18n="broker_lenders_trademark"> <strong>Broker Lenders</strong> is a registered trademark. Pedro Lira NMLS #318973 and Xpert Home Lending NMLS #2179191. Equal Housing Lender.\n</p> <p data-i18n="loan_programs_disclaimer">\nAll loan programs are subject to credit approval and property appraisal. Rates, program terms and conditions are subject to change without notice. Not all products are available in all states or for all amounts. Other restrictions and limitations apply.\n</p> <p data-i18n="not_commitment_to_lend">\nThis is not a commitment to lend. All information provided is for informational purposes only and is not an advertisement for products or services in states where prohibited by law.\n</p> <p data-i18n="licensing_info">\nLicensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. Licensed by the Department of Financial Protection and Innovation under the California Financing Law License.\n</p> <p data-i18n="interest_rates_disclaimer">\nInterest rates and Annual Percentage Rates (APRs) are based on current market conditions and may change. The actual rate you receive may be higher or lower depending on your credit profile and other factors.\n</p> <p> <strong data-i18n="privacy_policy">Privacy Policy:</strong> <span data-i18n="privacy_policy_text">We are committed to protecting your privacy. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in our Privacy Policy.</span> </p> <div class="pt-2 border-t border-gray-100"> <p class="text-xs text-gray-500" data-i18n="copyright_notice">\n\xA9 2024 Broker Lenders. All rights reserved. Last updated: December 2024.\n</p> </div> </div> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (ImportantLegal) --> <div id="i18n-important-legal"', "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-important-legal');
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
          // Allow HTML in translations when needed (e.g., <strong>)
          if (val.includes('<')) {
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
<\/script> `, ""], ["", '<section class="py-8 bg-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="bg-white"> <button id="legal-toggle" class="w-full px-6 py-4 flex items-center text-left hover:bg-gray-50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300" aria-expanded="false" aria-controls="legal-content"> <svg id="legal-arrow" class="w-5 h-5 text-gray-500 transform transition-transform duration-200 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> <h3 class="text-lg font-semibold text-gray-900" data-i18n="important_legal_disclosures">Important legal disclosures</h3> </button> <div id="legal-content" class="overflow-hidden transition-all duration-300 ease-in-out max-h-0" aria-hidden="true"> <div class="px-6 pb-6 pt-2 text-sm text-gray-600 space-y-4"> <p data-i18n="broker_lenders_trademark"> <strong>Broker Lenders</strong> is a registered trademark. Pedro Lira NMLS #318973 and Xpert Home Lending NMLS #2179191. Equal Housing Lender.\n</p> <p data-i18n="loan_programs_disclaimer">\nAll loan programs are subject to credit approval and property appraisal. Rates, program terms and conditions are subject to change without notice. Not all products are available in all states or for all amounts. Other restrictions and limitations apply.\n</p> <p data-i18n="not_commitment_to_lend">\nThis is not a commitment to lend. All information provided is for informational purposes only and is not an advertisement for products or services in states where prohibited by law.\n</p> <p data-i18n="licensing_info">\nLicensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. Licensed by the Department of Financial Protection and Innovation under the California Financing Law License.\n</p> <p data-i18n="interest_rates_disclaimer">\nInterest rates and Annual Percentage Rates (APRs) are based on current market conditions and may change. The actual rate you receive may be higher or lower depending on your credit profile and other factors.\n</p> <p> <strong data-i18n="privacy_policy">Privacy Policy:</strong> <span data-i18n="privacy_policy_text">We are committed to protecting your privacy. We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in our Privacy Policy.</span> </p> <div class="pt-2 border-t border-gray-100"> <p class="text-xs text-gray-500" data-i18n="copyright_notice">\n\xA9 2024 Broker Lenders. All rights reserved. Last updated: December 2024.\n</p> </div> </div> </div> </div> </div> </section> <!-- Inline i18n payloads encoded (ImportantLegal) --> <div id="i18n-important-legal"', "", ` style="display:none"></div> <script>
  (() => {
    const root = document.getElementById('i18n-important-legal');
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
          // Allow HTML in translations when needed (e.g., <strong>)
          if (val.includes('<')) {
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
<\/script> `, ""])), maybeRenderHead(), addAttribute(enB64, "data-en"), addAttribute(esB64, "data-es"), renderScript($$result, "C:/Users/Admin/Documents/trae/broker-lenders/broker-lenders/src/components/ImportantLegal.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/Admin/Documents/trae/broker-lenders/broker-lenders/src/components/ImportantLegal.astro", void 0);

export { $$ImportantLegal as $ };
