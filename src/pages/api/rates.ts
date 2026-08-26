import type { APIRoute } from 'astro';
import ratesData from '../../data/rates-data.json';
import ratesHistory from '../../data/rates-history.json';

export const prerender = false;

/**
 * Tasas hipotecarias publicadas en el sitio.
 *
 * Origen: indices OBMMI de ICE Mortgage Technology (Optimal Blue), publicados
 * por FRED (Federal Reserve Bank of St. Louis). Se refrescan una vez al dia.
 *
 *   GET /api/rates            -> tasas actuales + fuente
 *   GET /api/rates?history=1  -> incluye el historial diario
 *   GET /api/rates?history=30 -> historial limitado a N dias
 */
export const GET: APIRoute = async ({ url }) => {
  const historyParam = url.searchParams.get('history');

  const body: Record<string, unknown> = {
    asOf: ratesData.asOf,
    updatedAt: ratesData.timestamp,
    scope: ratesData.source?.scope ?? 'national',
    source: ratesData.source,
    rates: ratesData.national,
    disclaimer:
      'Promedio nacional del indice OBMMI. No constituye una cotizacion ni un compromiso de prestamo. ' +
      'Tu tasa depende del importe, el LTV, el plazo y tu perfil crediticio. Broker Lenders LLC, NMLS #318973.',
  };

  if (historyParam) {
    const limit = Number.parseInt(historyParam, 10);
    const points = ratesHistory.points ?? [];
    body.history = Number.isFinite(limit) && limit > 0 ? points.slice(-limit) : points;
  }

  return new Response(JSON.stringify(body, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      // Los datos cambian una vez al dia; se permite cachear con revalidacion.
      'Cache-Control': 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
