/**
 * Actualizacion diaria de tasas.
 *
 * Los datos vienen de FRED (Federal Reserve Bank of St. Louis), que publica los
 * indices OBMMI de ICE Mortgage Technology (Optimal Blue). Ver scripts/fetch-rates.js.
 *
 * Antes este script simulaba el scraping: generaba variaciones aleatorias sobre
 * numeros fijos. Ya no inventa nada. Si la fuente no responde, falla y conserva
 * el ultimo dato bueno en lugar de publicar cifras fabricadas.
 */
import path from 'path';
import { fileURLToPath } from 'url';
import { updateRatesFromFred, SERIES } from './fetch-rates.js';
import {
  sendNotificationEmail,
  notifyUpdateFailure,
  notifySuccess,
} from './email-notifications.js';

const __filename = fileURLToPath(import.meta.url);

async function updateRates() {
  console.log('🚀 Iniciando actualizacion de tasas...');
  console.log(`📅 Fecha: ${new Date().toLocaleString()}`);

  try {
    const data = await updateRatesFromFred();

    console.log('🎉 Actualizacion completada exitosamente!');
    console.log(`📊 Dato del: ${data.asOf}`);

    await notifySuccess({
      timestamp: data.timestamp,
      statesUpdated: Object.keys(data.states).length,
      loanTypes: Object.keys(SERIES).length,
    });

    return data;
  } catch (error) {
    console.error('❌ Error obteniendo las tasas:', error.message);
    console.error('   Se conservan los datos anteriores. No se publica nada inventado.');

    await notifyUpdateFailure(error, {
      fallbackUsed: false,
      statesCount: 7,
      loanTypesCount: Object.keys(SERIES).length,
      detail: 'Los ficheros de tasas no se han modificado; el sitio sigue mostrando el ultimo dato bueno.',
    }).catch(() => {});

    throw error;
  }
}

// Ejecutar si se llama directamente. Se comparan rutas resueltas en vez de
// cadenas file:// para que funcione igual en Windows que en Linux (CI).
const __entry = process.argv[1];
const __isEntry = Boolean(__entry) && path.resolve(__entry) === path.resolve(__filename);

if (__isEntry) {
  updateRates()
    .then(() => {
      console.log('✅ Proceso finalizado');
      process.exit(0);
    })
    .catch(async (error) => {
      await sendNotificationEmail(
        '⚠️ Fallo al actualizar las tasas',
        'No se pudieron obtener las tasas desde FRED. El sitio conserva el ultimo dato publicado.',
        'high',
        { type: 'Fuente no disponible', message: error.message, function: 'updateRatesFromFred' }
      ).catch(() => {});
      console.error('❌ Error fatal:', error.message);
      process.exit(1);
    });
}

export { updateRates };
