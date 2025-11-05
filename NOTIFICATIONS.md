# 🔔 Sistema de Notificaciones por Email

Este sistema envía notificaciones por email cuando:
- ✅ Las tasas se actualizan exitosamente
- ⚠️ El web scraping falla (se usan datos de respaldo)
- ❌ La actualización falla completamente

## 📧 Configuración

### 1. Preparar tu cuenta de Gmail

1. Activa la verificación en 2 pasos en tu cuenta de Gmail
2. Genera una contraseña de aplicación:
   - Ve a: https://support.google.com/accounts/answer/185833
   - Genera una nueva contraseña de aplicación
   - Guarda esta contraseña (solo la verás una vez)

### 2. Configurar variables de entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar el archivo .env con tu editor favorito
nano .env
```

Variables a configurar:
```env
EMAIL_USER=tu_correo_gmail_sin_arroba
EMAIL_APP_PASSWORD=tu_contraseña_de_aplicación
NOTIFICATION_EMAIL=correo_destino@ejemplo.com
```

### 3. Probar el sistema

```bash
# Ejecutar configurador interactivo
npm run setup-notifications

# Probar envío de correos
npm run test-notifications
```

## 🚀 Uso

### Actualización manual con notificaciones
```bash
npm run update-rates
```

### Actualización automática (cron job)
```bash
npm run setup-cron
```

## 📊 Tipos de Notificaciones

### ✅ Éxito
- **Asunto**: `[Broker Lenders] ✅ Actualización de tasas exitosa`
- **Contenido**: Confirma que las tasas se actualizaron correctamente
- **Prioridad**: Baja

### ⚠️ Advertencia (Scraping falló)
- **Asunto**: `[Broker Lenders] ⚠️ Web scraping falló - Usando datos de respaldo`
- **Contenido**: Avisa que el scraping falló pero el sistema continúa con datos de respaldo
- **Prioridad**: Media

### ❌ Error Crítico
- **Asunto**: `[Broker Lenders] ❌ Falló actualización de tasas hipotecarias`
- **Contenido**: Informa que la actualización falló completamente
- **Prioridad**: Alta

### 🔥 Error Fatal
- **Asunto**: `[Broker Lenders] 🔥 ERROR CRÍTICO: Falló incluso con datos de respaldo`
- **Contenido**: Error crítico cuando incluso los datos de respaldo fallan
- **Prioridad**: Alta

## 🔧 Solución de Problemas

### No llegan los correos
1. Verifica que el archivo `.env` existe y está configurado
2. Asegúrate de usar una contraseña de aplicación, no tu contraseña normal
3. Revisa que tu cuenta de Gmail tenga verificación en 2 pasos activada
4. Verifica el spam/papelera de tu correo

### Error de autenticación
- Asegúrate de usar el usuario sin @gmail.com (ej: `usuario` no `usuario@gmail.com`)
- Verifica que la contraseña de aplicación sea correcta
- La contraseña de aplicación debe tener 16 caracteres sin espacios

### Otros errores
```bash
# Ver logs del sistema
cat src/data/update-log.txt

# Verificar configuración actual
grep -E "(EMAIL|NOTIFICATION)" .env

# Ejecutar actualización con más detalles
DEBUG=1 npm run update-rates
```

## 📋 Scripts Disponibles

- `npm run setup-notifications` - Configurador interactivo
- `npm run test-notifications` - Prueba el sistema de correos
- `npm run update-rates` - Actualiza tasas con notificaciones
- `npm run setup-cron` - Configura actualización automática

## 🔒 Seguridad

- **Nunca** compartas tu archivo `.env`
- Usa contraseñas de aplicación, no tu contraseña principal
- Considera usar un email dedicado para notificaciones
- Las credenciales se almacenan localmente, no en el repositorio

## 📞 Soporte

Si tienes problemas con el sistema de notificaciones:

1. Verifica la configuración con `npm run setup-notifications`
2. Prueba el envío con `npm run test-notifications`
3. Revisa los logs en `src/data/update-log.txt`
4. Asegúrate de que tu cuenta de Gmail esté correctamente configurada