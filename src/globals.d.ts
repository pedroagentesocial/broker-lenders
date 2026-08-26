/**
 * Declaraciones de las propiedades que el sitio cuelga de `window` desde los
 * bloques <script> de los .astro.
 *
 * Sin esto, TypeScript marca cada uso como "Property does not exist on type
 * 'Window & typeof globalThis'". No cambia nada en ejecución: es solo tipado.
 */

/** API de Google reCAPTCHA v2 (se carga por <script> externo). */
interface GoogleRecaptcha {
  render(
    container: string | HTMLElement,
    parameters: {
      sitekey: string;
      // reCAPTCHA acepta la función o el nombre de una función global.
      // Este proyecto usa la segunda forma (ver window.onRecaptchaSuccess).
      callback?: ((token: string) => void) | string;
      'expired-callback'?: (() => void) | string;
      'error-callback'?: (() => void) | string;
      theme?: 'light' | 'dark';
      size?: 'normal' | 'compact' | 'invisible';
      [key: string]: unknown;
    }
  ): number;
  reset(widgetId?: number): void;
  getResponse(widgetId?: number): string;
  ready(callback: () => void): void;
}

interface Window {
  // --- reCAPTCHA (contactus / feedback) ---
  grecaptcha?: GoogleRecaptcha;
  /** id del widget renderizado; null mientras no se ha montado */
  __recaptchaWidgetId: number | null;
  onRecaptchaLoad?: () => void;
  onRecaptchaSuccess?: (token: string) => void;
  onRecaptchaExpired?: () => void;
  onRecaptchaError?: () => void;

  // --- Tasas (rates.astro) ---
  /** snapshot de tasas inyectado en la página */
  __ratesData?: Record<string, unknown>;
  /** diccionario i18n activo de la tabla de tasas */
  __dictRates?: Record<string, any>;
  /** reconstruye la tabla de tasas con datos nuevos */
  rebuildRates?: (data: unknown) => void;
}
