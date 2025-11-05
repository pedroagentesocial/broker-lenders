# Automatización diaria de tasas

Este proyecto incluye scripts para automatizar la actualización diaria de `rates-data.json` y registrar eventos en `src/data/update-log.txt`.

## Opciones de automatización
- Cron (macOS/Linux): tarea programada diaria
- LaunchAgent (macOS nativo): alternativa integrada con `launchd`
- Windows: usar el Programador de tareas

## Scripts disponibles
- `npm run update-rates`: ejecuta la actualización de tasas
- `npm run setup-cron`: guía e instalación automática de cron
- `npm run test-automation`: simula ejecuciones múltiples y verifica resultados

## Configurar cron (macOS/Linux)
1. Ver el comando sugerido sin instalar:
   - `npm run setup-cron -- --print`
2. Instalar a las 08:00 (por defecto):
   - `npm run setup-cron -- --apply`
3. Cambiar hora (ej. 09:30) e instalar:
   - `npm run setup-cron -- --hour 9 --minute 30 --apply`
4. Eliminar la entrada de cron:
   - `npm run setup-cron -- --remove`

Los logs se guardan en `scripts/cron.log`. Verifique el estado con:
- `crontab -l` (debe incluir la línea con `# BROKER_LENDERS_UPDATE_RATES`)

## LaunchAgent (macOS)
1. Cree `~/Library/LaunchAgents/com.brokerlenders.update-rates.plist` con el contenido que imprime `setup-cron`.
2. Cargue el agente:
   - `launchctl load -w ~/Library/LaunchAgents/com.brokerlenders.update-rates.plist`
3. Verifique:
   - `launchctl list | grep com.brokerlenders.update-rates`

## Windows
- Use el Programador de tareas para ejecutar:
  - Programa: `powershell.exe`
  - Argumentos: `-NoProfile -ExecutionPolicy Bypass -Command "cd '<ruta_del_proyecto>'; npm run update-rates"`

## Verificación de funcionamiento
- Abra `/rates` en el sitio y confirme el timestamp mostrado.
- Revise `src/data/update-log.txt` para la última entrada.
- Revise `scripts/cron.log` para la salida de cron/LaunchAgent.

## Prueba rápida
- Ejecutar 3 veces con intervalos de 10s:
  - `npm run test-automation -- --times 3 --interval-sec 10`

## Modificar la hora
- Use los flags `--hour` y `--minute` al correr `setup-cron`.

## Notas
- El script añade `PATH` extendido para Homebrew (`/opt/homebrew/bin`) y `/usr/local/bin` por si `node`/`npm` están allí.
- Si su shell por defecto no es zsh, puede ajustar el comando en el plist o el env PATH.