import { sendNotificationEmail, notifyUpdateFailure, notifyScrapingFailure, notifySuccess } from './email-notifications.js';

console.log('🧪 Probando sistema de notificaciones por email...\n');

async function testNotifications() {
  try {
    console.log('1. 📧 Probando notificación de éxito...');
    const successResult = await notifySuccess({
      timestamp: new Date().toISOString(),
      statesUpdated: 7,
      loanTypes: 5,
      testMode: true
    });
    
    if (successResult) {
      console.log('✅ Notificación de éxito enviada\n');
    } else {
      console.log('⚠️ Notificación de éxito falló (verifica configuración)\n');
    }
    
    // Esperar un momento entre pruebas
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('2. ⚠️ Probando notificación de scraping fallido...');
    const scrapingError = new Error('Error de conexión con Bankrate');
    const scrapingResult = await notifyScrapingFailure(scrapingError, {
      fallbackUsed: true,
      statesCount: 7,
      loanTypesCount: 5,
      testMode: true
    });
    
    if (scrapingResult) {
      console.log('✅ Notificación de scraping fallido enviada\n');
    } else {
      console.log('⚠️ Notificación de scraping fallido falló\n');
    }
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('3. ❌ Probando notificación de actualización fallida...');
    const updateError = new Error('Error crítico en el sistema de actualización');
    const updateResult = await notifyUpdateFailure(updateError, {
      fallbackUsed: false,
      statesCount: 7,
      loanTypesCount: 5,
      testMode: true
    });
    
    if (updateResult) {
      console.log('✅ Notificación de actualización fallida enviada\n');
    } else {
      console.log('⚠️ Notificación de actualización fallida falló\n');
    }
    
    console.log('🎉 Pruebas de notificaciones completadas!');
    console.log('\n📋 Resumen:');
    console.log('- Éxito:', successResult ? '✅' : '❌');
    console.log('- Scraping fallido:', scrapingResult ? '✅' : '❌');
    console.log('- Actualización fallida:', updateResult ? '✅' : '❌');
    
    if (!successResult && !scrapingResult && !updateResult) {
      console.log('\n🔧 Sugerencias:');
      console.log('1. Verifica que el archivo .env esté configurado correctamente');
      console.log('2. Asegúrate de usar una contraseña de aplicación de Gmail');
      console.log('3. Ejecuta: node scripts/setup-notifications.js');
      console.log('4. Revisa los logs en src/data/update-log.txt');
    }
    
  } catch (error) {
    console.error('❌ Error durante las pruebas:', error.message);
    console.log('\n🔧 Verifica:');
    console.log('1. Que el archivo .env existe y está configurado');
    console.log('2. Que las dependencias están instaladas: npm install');
    console.log('3. Que tu cuenta de Gmail tiene verificación en 2 pasos activada');
    console.log('4. Que estás usando una contraseña de aplicación válida');
  }
}

// Ejecutar pruebas
testNotifications();