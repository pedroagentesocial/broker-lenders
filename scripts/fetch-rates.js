/**
 * Obtiene las tasas hipotecarias reales desde FRED (Federal Reserve Bank of
 * St. Louis), que publica los indices OBMMI de ICE Mortgage Technology
 * (Optimal Blue). Son datos diarios, publicos y verificables: cada serie tiene
 * su propia pagina en fred.stlouisfed.org.
 *
 * El indice publica la TASA. No incluye APR ni puntos, porque ambos dependen
 * del importe, el LTV y el perfil crediticio de cada operacion. Por eso este
 * script no los genera: publicar un APR generico seria inventarlo.
 *
 * Si FRED no responde, NO se inventa nada: se conserva el ultimo dato bueno.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

export const SERIES = {
  '30-year-fixed': { id: 'OBMMIC30YF', label: '30-year fixed' },
  '15-year-fixed': { id: 'OBMMIC15YF', label: '15-year fixed' },
  '30-year-fha': { id: 'OBMMIFHA30YF', label: '30-year FHA' },
  '30-year-va': { id: 'OBMMIVA30YF', label: '30-year VA' },
  '30-year-usda': { id: 'OBMMIUSDA30YF', label: '30-year USDA' },
  '30-year-jumbo': { id: 'OBMMIJUMBO30YF', label: '30-year Jumbo' },
};

export const STATES = ['utah', 'idaho', 'nevada', 'california', 'texas', 'florida', 'colorado'];

export const SOURCE = {
  name: 'ICE Mortgage Technology (Optimal Blue) — OBMMI',
  via: 'FRED, Federal Reserve Bank of St. Louis',
  url: 'https://fred.stlouisfed.org/series/OBMMIC30YF',
  scope: 'national',
  note: 'Promedio nacional. No es una cotizacion: tu tasa depende de importe, LTV, plazo y perfil crediticio.',
};

const HISTORY_POINTS = 90;

/** Descarga una serie de FRED y devuelve [{date, value}] de mas antigua a mas reciente. */
async function fetchSeries(id, { retries = 3 } = {}) {
  const url = `https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}`;
  let lastErr;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'broker-lenders-rates/1.0' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      if (!text.startsWith('observation_date')) throw new Error('respuesta inesperada (¿serie inexistente?)');

      const rows = text.trim().split('\n').slice(1);
      const points = [];
      for (const row of rows) {
        const [date, raw] = row.split(',');
        const value = parseFloat(raw);
        if (!date || !Number.isFinite(value)) continue; // FRED marca los huecos con "."
        points.push({ date: date.trim(), value });
      }
      if (!points.length) throw new Error('serie sin observaciones validas');
      return points;
    } catch (err) {
      lastErr = err;
      if (attempt < retries) await new Promise((r) => setTimeout(r, attempt * 1500));
    }
  }
  throw new Error(`No se pudo obtener ${id}: ${lastErr.message}`);
}

/** Descarga las 6 series y arma los ficheros de datos e historial. */
export async function fetchRates() {
  const series = {};
  for (const [key, { id }] of Object.entries(SERIES)) {
    series[key] = await fetchSeries(id);
    const last = series[key][series[key].length - 1];
    console.log(`   ${key.padEnd(15)} ${id.padEnd(15)} ${last.value.toFixed(3)}%  (${last.date})`);
  }

  // La fecha del dato es la observacion mas reciente comun a todas las series
  const asOf = Object.values(series)
    .map((s) => s[s.length - 1].date)
    .sort()[0];

  const national = {};
  for (const [key, points] of Object.entries(series)) {
    const at = [...points].reverse().find((p) => p.date <= asOf);
    national[key] = { rate: `${at.value.toFixed(3)}%` };
  }

  // Se replica el dato nacional en cada estado: el indice no tiene desglose
  // estatal y no se va a inventar uno.
  const states = {};
  for (const st of STATES) states[st] = national;

  const data = {
    timestamp: new Date().toISOString(),
    asOf,
    source: SOURCE,
    national,
    states,
  };

  // Historial: fechas comunes a todas las series, ultimas HISTORY_POINTS
  const dateSets = Object.values(series).map((s) => new Set(s.map((p) => p.date)));
  const commonDates = [...dateSets[0]].filter((d) => dateSets.every((set) => set.has(d))).sort();
  const points = commonDates.slice(-HISTORY_POINTS).map((date) => {
    const perState = {};
    const row = {};
    for (const [key, s] of Object.entries(series)) {
      row[key] = s.find((p) => p.date === date).value;
    }
    for (const st of STATES) perState[st] = row;
    return { date, states: perState };
  });

  const history = {
    updatedAt: asOf,
    maxPoints: HISTORY_POINTS,
    source: SOURCE,
    points,
  };

  return { data, history };
}

function writeJson(relPaths, value) {
  const body = JSON.stringify(value, null, 2);
  for (const rel of relPaths) {
    const full = path.join(ROOT, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, body);
  }
}

/** Punto de entrada del cron: descarga y guarda. Conserva lo anterior si falla. */
export async function updateRatesFromFred() {
  console.log('🔄 Obteniendo tasas desde FRED (indices OBMMI de ICE/Optimal Blue)...');
  const { data, history } = await fetchRates();

  writeJson(['src/data/rates-data.json', 'public/rates-data.json'], data);
  writeJson(['src/data/rates-history.json', 'public/rates-history.json'], history);

  const logPath = path.join(ROOT, 'src', 'data', 'update-log.txt');
  const entry = `[${data.timestamp}] Tasas reales desde FRED, dato del ${data.asOf}\n`;
  fs.writeFileSync(logPath, entry + (fs.existsSync(logPath) ? fs.readFileSync(logPath, 'utf8') : ''));

  console.log(`✅ Guardado. Dato del ${data.asOf}, ${history.points.length} dias de historial.`);
  return data;
}

// CLI
const entry = process.argv[1];
if (entry && path.resolve(entry) === path.resolve(fileURLToPath(import.meta.url))) {
  updateRatesFromFred()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error('❌', err.message);
      console.error('   No se modifican los datos: se conserva el ultimo dato bueno.');
      process.exit(1);
    });
}
