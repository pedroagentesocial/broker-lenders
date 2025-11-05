#!/usr/bin/env node
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = { hour: 8, minute: 0, apply: false, remove: false, print: false };
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === '--hour' && args[i + 1]) opts.hour = Number(args[++i]);
    else if (a === '--minute' && args[i + 1]) opts.minute = Number(args[++i]);
    else if (a === '--apply') opts.apply = true;
    else if (a === '--remove') opts.remove = true;
    else if (a === '--print') opts.print = true;
  }
  return opts;
}

function generateCronLine(hour, minute) {
  const cronMarker = '# BROKER_LENDERS_UPDATE_RATES';
  const logPath = path.join(projectRoot, 'scripts', 'cron.log');
  const envPath = '/usr/bin/env PATH=$PATH:/opt/homebrew/bin:/usr/local/bin';
  const line = `${minute} ${hour} * * * cd ${projectRoot} && ${envPath} npm run update-rates >> ${logPath} 2>&1 ${cronMarker}`;
  return { line, cronMarker, logPath };
}

function checkCrontabInstalled(cronMarker) {
  const res = spawnSync('crontab', ['-l'], { encoding: 'utf8' });
  if (res.status !== 0) return { exists: false, raw: res.stderr || res.stdout };
  const exists = (res.stdout || '').includes(cronMarker);
  return { exists, raw: res.stdout };
}

function applyCrontab(line) {
  // Append our line to existing crontab
  // (crontab -l 2>/dev/null; echo "<line>") | crontab -
  const script = `(crontab -l 2>/dev/null; echo "${line}") | crontab -`;
  const res = spawnSync('/bin/zsh', ['-lc', script], { encoding: 'utf8' });
  return res;
}

function removeCrontab(cronMarker) {
  // Remove lines containing our marker
  const script = `crontab -l 2>/dev/null | grep -v '${cronMarker}' | crontab -`;
  const res = spawnSync('/bin/zsh', ['-lc', script], { encoding: 'utf8' });
  return res;
}

function printLaunchAgentInstructions(hour, minute) {
  const plistLabel = 'com.brokerlenders.update-rates';
  const plistPath = path.join(os.homedir(), 'Library', 'LaunchAgents', `${plistLabel}.plist`);
  const program = '/bin/zsh';
  const args = ['-lc', `cd ${projectRoot} && npm run update-rates >> ${path.join(projectRoot, 'scripts', 'cron.log')} 2>&1`];
  const launchdTime = { Hour: hour, Minute: minute };
  console.log('\n=== LaunchAgent (macOS nativo) ===');
  console.log('1) Cree el archivo:', plistPath);
  console.log('2) Contenido sugerido:');
  console.log(`\n<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n  <dict>\n    <key>Label</key><string>${plistLabel}</string>\n    <key>ProgramArguments</key>\n    <array>\n      <string>${program}</string>\n      <string>${args[0]}</string>\n      <string>${args[1]}</string>\n    </array>\n    <key>StartCalendarInterval</key>\n    <dict>\n      <key>Hour</key><integer>${launchdTime.Hour}</integer>\n      <key>Minute</key><integer>${launchdTime.Minute}</integer>\n    </dict>\n    <key>StandardOutPath</key><string>${path.join(projectRoot, 'scripts', 'cron.log')}</string>\n    <key>StandardErrorPath</key><string>${path.join(projectRoot, 'scripts', 'cron.log')}</string>\n    <key>RunAtLoad</key><true/>\n  </dict>\n</plist>`);
  console.log('\n3) Cargar el agente:');
  console.log('   launchctl load -w ~/Library/LaunchAgents/' + `${plistLabel}.plist`);
  console.log('4) Ver estado:');
  console.log('   launchctl list | grep ' + plistLabel);
}

function main() {
  const { hour, minute, apply, remove, print } = parseArgs();
  const isMac = os.platform() === 'darwin';
  console.log('🛠️ Configuración de automatización diaria de tasas');
  console.log(`📍 Proyecto: ${projectRoot}`);
  console.log(`⏰ Hora programada: ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
  const { line, cronMarker, logPath } = generateCronLine(hour, minute);

  console.log('\n=== Comando cron sugerido (macOS) ===');
  console.log(line);
  console.log('\n🗒️ Este comando añadirá logs en:', logPath);

  if (print) {
    // Sólo imprimir y salir
    process.exit(0);
  }

  if (!isMac) {
    console.log('\n⚠️ Sistema no macOS. Use cron estándar en Linux o el Programador de tareas en Windows.');
  }

  // Estado actual
  const check = checkCrontabInstalled(cronMarker);
  console.log('\n=== Verificación de instalación ===');
  console.log(check.exists ? '✅ Entrada encontrada en crontab' : '❌ Entrada NO encontrada en crontab');

  if (remove) {
    const res = removeCrontab(cronMarker);
    if (res.status === 0) console.log('🧹 Entrada de cron eliminada');
    else console.log('❌ Error eliminando entrada:', res.stderr || res.stdout);
    process.exit(res.status || 0);
  }

  if (apply) {
    const res = applyCrontab(line);
    if (res.status === 0) {
      console.log('✅ Cron instalado correctamente.');
      const verify = checkCrontabInstalled(cronMarker);
      console.log(verify.exists ? '🔍 Verificado: entrada presente.' : '❌ No se detecta la entrada tras instalar.');
    } else {
      console.log('❌ Error instalando cron:', res.stderr || res.stdout);
    }
  } else {
    console.log('\n➡️ Para instalar automáticamente, ejecute:');
    console.log('   node scripts/setup-cron.js --apply');
    console.log('\n➡️ Para cambiar la hora, use:');
    console.log('   node scripts/setup-cron.js --hour 9 --minute 30 --apply');
  }

  // Instrucciones LaunchAgent
  printLaunchAgentInstructions(hour, minute);

  // Pasos de verificación
  console.log('\n=== Cómo verificar que funciona ===');
  console.log('- Revise el archivo de log: ' + logPath);
  console.log('- Verifique que src/data/update-log.txt tenga una entrada reciente.');
  console.log('- Abra la ruta /rates en su sitio y confirme el timestamp.');
}

main();