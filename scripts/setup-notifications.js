import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Configurador de Notificaciones por Email');
console.log('==========================================\n');

// Verificar si existe el archivo .env
const envPath = path.join(__dirname, '..', '.env');
const envExamplePath = path.join(__dirname, '..', '.env.example');

if (!fs.existsSync(envPath)) {
  console.log('📄 Creando archivo .env desde .env.example...');
  fs.copyFileSync(envExamplePath, envPath);
  console.log('✅ Archivo .env creado\n');
}

console.log('📋 Instrucciones para configurar notificaciones por email:\n');
console.log('1. 📧 Abre el archivo .env en la raíz del proyecto');
console.log('2. 🔐 Configura tu cuenta de Gmail:');
console.log('   - EMAIL_USER: Tu dirección de Gmail sin @gmail.com');
console.log('   - EMAIL_APP_PASSWORD: Obtén una contraseña de aplicación:');
console.log('     → Ve a: https://support.google.com/accounts/answer/185833');
console.log('     → Activa la verificación en 2 pasos');
console.log('     → Genera una contraseña de aplicación');
console.log('   - NOTIFICATION_EMAIL: Email donde recibirás notificaciones\n');

console.log('3. 🧪 Para probar el sistema de notificaciones:');
console.log('   npm run test-notifications\n');

console.log('4. 📊 Los correos se enviarán en estos casos:');
console.log('   ✅ Éxito: Cuando las tasas se actualicen correctamente');
console.log('   ⚠️ Advertencia: Cuando falle el web scraping (usa datos de respaldo)');
console.log('   ❌ Error: Cuando falle completamente la actualización\n');

console.log('5. 📝 El sistema registra todos los eventos en:');
console.log(`   ${path.join(__dirname, '..', 'src', 'data', 'update-log.txt')}\n`);

// Verificar si las variables están configuradas
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const hasEmailUser = envContent.includes('EMAIL_USER=') && !envContent.includes('EMAIL_USER=tu_correo');
  const hasAppPassword = envContent.includes('EMAIL_APP_PASSWORD=') && !envContent.includes('EMAIL_APP_PASSWORD=tu_contraseña_de_aplicación');
  
  if (hasEmailUser && hasAppPassword) {
    console.log('✅ Configuración de email detectada');
  } else {
    console.log('⚠️ Configuración de email incompleta');
    console.log('   Por favor, completa las variables en el archivo .env');
  }
}

console.log('\n🚀 Para ejecutar la actualización manual con notificaciones:');
console.log('   npm run update-rates');