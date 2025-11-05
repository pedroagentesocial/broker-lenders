#!/usr/bin/env node
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { updateRates } from './update-rates.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

function sleep(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { times: 1, intervalSec: 5 };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--times' && args[i + 1]) opts.times = Number(args[++i]);
    else if (a === '--interval-sec' && args[i + 1]) opts.intervalSec = Number(args[++i]);
  }
  return opts;
}

function logPaths() {
  const dataPath = path.join(projectRoot, 'src', 'data', 'rates-data.json');
  const logPath = path.join(projectRoot, 'src', 'data', 'update-log.txt');
  return { dataPath, logPath };
}

function printVerification() {
  const { dataPath, logPath } = logPaths();
  try {
    const json = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    console.log(`\n✅ rates-data.json actualizado. Timestamp: ${json.timestamp}`);
  } catch (e) {
    console.log(`\n❌ No se pudo leer ${dataPath}:`, e.message);
  }

  try {
    const log = fs.readFileSync(logPath, 'utf8');
    const firstLine = log.split('\n')[0];
    console.log(`📒 Última entrada en update-log.txt: ${firstLine}`);
  } catch (e) {
    console.log(`❌ No se pudo leer ${logPath}:`, e.message);
  }
}

async function main() {
  const { times, intervalSec } = parseArgs();
  console.log('🧪 Prueba de automatización diaria de tasas');
  console.log(`📍 Proyecto: ${projectRoot}`);
  console.log(`🔁 Veces: ${times} | ⏱️ Intervalo (seg): ${intervalSec}`);

  for (let i = 1; i <= times; i++) {
    console.log(`\n➡️ Ejecución ${i}/${times} a las ${new Date().toLocaleTimeString()}`);
    try {
      await updateRates();
      console.log('✅ Ejecución completada');
    } catch (e) {
      console.log('❌ Error en ejecución:', e.message);
    }

    if (i < times) {
      console.log(`⏳ Esperando ${intervalSec}s antes de la siguiente ejecución...`);
      await sleep(intervalSec * 1000);
    }
  }

  printVerification();
  console.log('\n🎉 Prueba finalizada. Revise /rates en el sitio y los logs.');
}

main();