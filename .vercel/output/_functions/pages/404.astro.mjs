import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BIz3OSIC.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_DUGkeqT2.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found - Broker Lenders" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="py-24 bg-white min-h-screen flex items-center"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <div class="bg-gray-100 p-12 lg:p-16 rounded-[48px]"> <!-- 404 Number --> <div class="mb-8"> <h1 class="text-8xl lg:text-9xl font-bold text-gray-900 mb-4">404</h1> </div> <!-- Error Message --> <div class="mb-8"> <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Page Not Found</h2> <p class="text-lg text-gray-600 max-w-2xl mx-auto">
Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
</p> </div> <!-- Action Buttons --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center"> <a href="/" class="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
Go to Home
</a> <a href="/loan-options" class="bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
View Loan Options
</a> </div> <!-- Helpful Links --> <div class="mt-12 pt-8 border-t border-gray-300"> <p class="text-gray-600 mb-4">Looking for something specific? Try these popular pages:</p> <div class="flex flex-wrap justify-center gap-4"> <a href="/buy" class="text-gray-700 hover:text-gray-900 underline">Buy a Home</a> <a href="/refinance" class="text-gray-700 hover:text-gray-900 underline">Refinance</a> <a href="/rates" class="text-gray-700 hover:text-gray-900 underline">Current Rates</a> <a href="/calculators" class="text-gray-700 hover:text-gray-900 underline">Calculators</a> </div> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Admin/Documents/trae/broker-lenders/broker-lenders/src/pages/404.astro", void 0);

const $$file = "C:/Users/Admin/Documents/trae/broker-lenders/broker-lenders/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
