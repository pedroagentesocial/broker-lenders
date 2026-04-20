import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CaEH1FW5.mjs';
import { manifest } from './manifest_C8_eUFBn.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/aboutus.astro.mjs');
const _page3 = () => import('./pages/api/contact-submit.astro.mjs');
const _page4 = () => import('./pages/booking.astro.mjs');
const _page5 = () => import('./pages/buy.astro.mjs');
const _page6 = () => import('./pages/calculators/mortgage-calculator.astro.mjs');
const _page7 = () => import('./pages/calculators/mortgage-payoff-calculator.astro.mjs');
const _page8 = () => import('./pages/calculators/refinance-calculator.astro.mjs');
const _page9 = () => import('./pages/calculators/rent-buy-calculator.astro.mjs');
const _page10 = () => import('./pages/calculators.astro.mjs');
const _page11 = () => import('./pages/contactus.astro.mjs');
const _page12 = () => import('./pages/faqs.astro.mjs');
const _page13 = () => import('./pages/feedback.astro.mjs');
const _page14 = () => import('./pages/form.astro.mjs');
const _page15 = () => import('./pages/legal/disclosures.astro.mjs');
const _page16 = () => import('./pages/legal/privacy.astro.mjs');
const _page17 = () => import('./pages/legal/terms-of-use.astro.mjs');
const _page18 = () => import('./pages/loan-options/construction-loan.astro.mjs');
const _page19 = () => import('./pages/loan-options/conventional-loan.astro.mjs');
const _page20 = () => import('./pages/loan-options/fha-loan.astro.mjs');
const _page21 = () => import('./pages/loan-options/first-time-loan.astro.mjs');
const _page22 = () => import('./pages/loan-options/investment-loan.astro.mjs');
const _page23 = () => import('./pages/loan-options/jumbo-loan.astro.mjs');
const _page24 = () => import('./pages/loan-options/refinance-loan.astro.mjs');
const _page25 = () => import('./pages/loan-options/usda-loan.astro.mjs');
const _page26 = () => import('./pages/loan-options/va-loan.astro.mjs');
const _page27 = () => import('./pages/loan-options.astro.mjs');
const _page28 = () => import('./pages/rates.astro.mjs');
const _page29 = () => import('./pages/realtors.astro.mjs');
const _page30 = () => import('./pages/refinance.astro.mjs');
const _page31 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/aboutus.astro", _page2],
    ["src/pages/api/contact-submit.ts", _page3],
    ["src/pages/booking.astro", _page4],
    ["src/pages/buy.astro", _page5],
    ["src/pages/calculators/mortgage-calculator.astro", _page6],
    ["src/pages/calculators/mortgage-payoff-calculator.astro", _page7],
    ["src/pages/calculators/refinance-calculator.astro", _page8],
    ["src/pages/calculators/rent-buy-calculator.astro", _page9],
    ["src/pages/calculators.astro", _page10],
    ["src/pages/contactus.astro", _page11],
    ["src/pages/faqs.astro", _page12],
    ["src/pages/feedback.astro", _page13],
    ["src/pages/form.astro", _page14],
    ["src/pages/legal/disclosures.astro", _page15],
    ["src/pages/legal/privacy.astro", _page16],
    ["src/pages/legal/terms-of-use.astro", _page17],
    ["src/pages/loan-options/construction-loan.astro", _page18],
    ["src/pages/loan-options/conventional-loan.astro", _page19],
    ["src/pages/loan-options/fha-loan.astro", _page20],
    ["src/pages/loan-options/first-time-loan.astro", _page21],
    ["src/pages/loan-options/investment-loan.astro", _page22],
    ["src/pages/loan-options/jumbo-loan.astro", _page23],
    ["src/pages/loan-options/refinance-loan.astro", _page24],
    ["src/pages/loan-options/usda-loan.astro", _page25],
    ["src/pages/loan-options/va-loan.astro", _page26],
    ["src/pages/loan-options.astro", _page27],
    ["src/pages/rates.astro", _page28],
    ["src/pages/realtors.astro", _page29],
    ["src/pages/refinance.astro", _page30],
    ["src/pages/index.astro", _page31]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "ccaff2a7-c0a5-4588-a290-b5921fed7780",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
