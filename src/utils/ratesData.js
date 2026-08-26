// Función para obtener los datos de tasas dinámicos
export async function getRatesData() {
  try {
    // Intentar cargar el archivo JSON de tasas
    const ratesData = await import('../data/rates-data.json');
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

/* ------------------------------------------------------------------ *
 * Historial de tasas (para sparklines y variación real)
 * ------------------------------------------------------------------ */

const toNumber = (value) => {
  if (value === undefined || value === null) return null;
  const n = parseFloat(String(value).replace('%', '').trim());
  return Number.isFinite(n) ? n : null;
};

/**
 * Carga el historial diario reconstruido por scripts/build-rates-history.js
 * Devuelve [] si todavía no existe (el sitio sigue funcionando sin gráficas).
 */
export async function getRatesHistory() {
  try {
    const mod = await import('../data/rates-history.json');
    const points = mod.default?.points;
    return Array.isArray(points) ? points : [];
  } catch {
    return [];
  }
}

/**
 * Serie temporal de un producto en un estado, ordenada de más antigua a más
 * reciente. Devuelve solo valores numéricos válidos.
 */
export function getSeries(history, state, product, maxPoints = 30) {
  if (!Array.isArray(history)) return [];
  const values = history
    .map((point) => toNumber(point?.states?.[state]?.[product]))
    .filter((v) => v !== null);
  return maxPoints > 0 ? values.slice(-maxPoints) : values;
}

/**
 * Variación real de la tasa comparando el valor actual contra el de hace
 * `lookbackDays` días (por defecto una semana), tal como dice la nota legal
 * "Compared week over week".
 *
 * Devuelve null cuando no hay historial suficiente, para que la UI pueda
 * mostrar un estado neutro en lugar de inventar un número.
 */
export function getRateChange(series, lookbackDays = 7) {
  if (!Array.isArray(series) || series.length < 2) return null;

  const current = series[series.length - 1];
  const previousIndex = Math.max(0, series.length - 1 - lookbackDays);
  const previous = series[previousIndex];
  if (!Number.isFinite(current) || !Number.isFinite(previous)) return null;

  const delta = current - previous;
  const flat = Math.abs(delta) < 0.0005;

  return {
    delta,
    value: Math.abs(delta).toFixed(3),
    sign: flat ? '' : delta > 0 ? '+' : '−',
    // Para el usuario final: tasa que sube = malo (rojo), tasa que baja = bueno (verde)
    direction: flat ? 'flat' : delta > 0 ? 'up' : 'down',
    days: series.length - 1 - previousIndex
  };
}

/** Estadísticas de la serie: mínimo, máximo y posición relativa del valor actual. */
export function getSeriesStats(series) {
  if (!Array.isArray(series) || series.length === 0) return null;
  const min = Math.min(...series);
  const max = Math.max(...series);
  const current = series[series.length - 1];
  const span = max - min;
  return {
    min,
    max,
    current,
    // 0 = está en el mínimo del periodo, 1 = en el máximo
    position: span > 0 ? (current - min) / span : 0.5
  };
}

/**
 * Genera el `d` de un <path> SVG para una sparkline dentro de un viewBox
 * de `width` x `height`. Usa una curva suave (Catmull-Rom → Bézier).
 */
export function buildSparklinePath(series, width = 120, height = 34, padding = 3) {
  if (!Array.isArray(series) || series.length < 2) return null;

  const min = Math.min(...series);
  const max = Math.max(...series);
  const span = max - min || 1;
  const innerH = height - padding * 2;

  const points = series.map((value, i) => [
    (i / (series.length - 1)) * width,
    padding + innerH - ((value - min) / span) * innerH
  ]);

  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] || points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)}, ${c2x.toFixed(2)} ${c2y.toFixed(2)}, ${p2[0].toFixed(2)} ${p2[1].toFixed(2)}`;
  }
  return { d, points, width, height };
}
