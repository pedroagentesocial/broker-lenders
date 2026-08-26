/**
 * Reconstruye / mantiene el historial de tasas.
 *
 * - Modo `--from-git`: lee todas las versiones de src/data/rates-data.json
 *   registradas en el historial de git y construye src/data/rates-history.json.
 *   Se usa una sola vez (o para re-sembrar el historial).
 * - Modo por defecto (`appendSnapshot`): agrega el snapshot actual al historial.
 *   Lo llama scripts/update-rates.js en cada corrida diaria.
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const SRC_DATA = path.join(ROOT, 'src', 'data', 'rates-data.json');
const SRC_HISTORY = path.join(ROOT, 'src', 'data', 'rates-history.json');
const PUBLIC_HISTORY = path.join(ROOT, 'public', 'rates-history.json');

// Cuántos días conservamos en el historial
const MAX_POINTS = 60;

const toNumber = (v) => {
  if (v === undefined || v === null) return null;
  const n = parseFloat(String(v).replace('%', '').trim());
  return Number.isFinite(n) ? n : null;
};

/** Convierte un snapshot completo en { estado: { producto: rate } } */
function flattenSnapshot(json) {
  const out = {};
  const states = json?.states || {};
  for (const [state, products] of Object.entries(states)) {
    out[state] = {};
    for (const [product, values] of Object.entries(products)) {
      const rate = toNumber(values?.rate);
      if (rate !== null) out[state][product] = rate;
    }
  }
  return out;
}

/** Deduplica por día (nos quedamos con el último snapshot de cada fecha) */
function dedupeByDay(points) {
  const byDay = new Map();
  for (const p of points) {
    const day = String(p.date).slice(0, 10);
    byDay.set(day, { ...p, date: day });
  }
  return Array.from(byDay.values()).sort((a, b) => a.date.localeCompare(b.date));
}

function buildFromGit() {
  console.log('🔎 Reconstruyendo historial desde git...');

  // --full-history evita la simplificación de git en los merges: sin ella, tras
  // un merge solo se ven los commits de una rama y el historial queda con huecos.
  const revs = execSync(
    'git log --full-history --format=%H -- src/data/rates-data.json',
    { cwd: ROOT, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }
  )
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
    .reverse(); // del más antiguo al más reciente

  const points = [];
  for (const rev of revs) {
    let raw;
    try {
      raw = execSync(`git show ${rev}:src/data/rates-data.json`, {
        cwd: ROOT,
        encoding: 'utf8',
        maxBuffer: 16 * 1024 * 1024,
      });
    } catch {
      continue; // el archivo no existía en ese commit
    }

    let json;
    try {
      json = JSON.parse(raw);
    } catch {
      continue; // snapshot corrupto
    }

    const date = json?.timestamp;
    if (!date) continue;

    points.push({ date, states: flattenSnapshot(json) });
  }

  // Incluir también el archivo actual del working tree
  if (fs.existsSync(SRC_DATA)) {
    const current = JSON.parse(fs.readFileSync(SRC_DATA, 'utf8'));
    if (current?.timestamp) {
      points.push({ date: current.timestamp, states: flattenSnapshot(current) });
    }
  }

  const history = dedupeByDay(points).slice(-MAX_POINTS);
  writeHistory(history);
  console.log(`✅ Historial construido: ${history.length} días (${history[0]?.date} → ${history.at(-1)?.date})`);
  return history;
}

function readHistory() {
  if (!fs.existsSync(SRC_HISTORY)) return [];
  try {
    const json = JSON.parse(fs.readFileSync(SRC_HISTORY, 'utf8'));
    return Array.isArray(json?.points) ? json.points : [];
  } catch {
    return [];
  }
}

function writeHistory(points) {
  const payload = {
    updatedAt: points.at(-1)?.date || null,
    maxPoints: MAX_POINTS,
    points,
  };
  const body = JSON.stringify(payload, null, 2);

  fs.mkdirSync(path.dirname(SRC_HISTORY), { recursive: true });
  fs.writeFileSync(SRC_HISTORY, body);

  fs.mkdirSync(path.dirname(PUBLIC_HISTORY), { recursive: true });
  fs.writeFileSync(PUBLIC_HISTORY, body);
}

/** Agrega el snapshot recibido al historial existente. Usado por update-rates.js */
export function appendSnapshot(data) {
  if (!data?.timestamp || !data?.states) return readHistory();
  const points = dedupeByDay([
    ...readHistory(),
    { date: data.timestamp, states: flattenSnapshot(data) },
  ]).slice(-MAX_POINTS);
  writeHistory(points);
  console.log(`📈 Historial actualizado: ${points.length} días`);
  return points;
}

export { buildFromGit, readHistory, MAX_POINTS };

// CLI: solo se ejecuta cuando este archivo es el punto de entrada.
// (Al importarlo desde update-rates.js o desde `node -e`, no debe hacer nada.)
const entry = process.argv[1];
const isEntry = Boolean(entry) &&
  path.resolve(entry) === path.resolve(fileURLToPath(import.meta.url));

if (isEntry) {
  if (process.argv.includes('--from-git')) {
    buildFromGit();
  } else {
    const data = JSON.parse(fs.readFileSync(SRC_DATA, 'utf8'));
    appendSnapshot(data);
  }
}
