import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// Configuración del transportador de correo (Gmail por defecto; SMTP si está configurado)
const useCustomSmtp = !!process.env.SMTP_HOST;

const transporter = createTransport(
  useCustomSmtp
    ? {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure:
          String(process.env.SMTP_SECURE).toLowerCase() === 'true' ||
          Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      }
    : {
        service: 'gmail',
        auth: {
          // Usa email completo (Gmail/Workspace) con contraseña de aplicación
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_APP_PASSWORD,
        },
      }
);

/**
 * Enviar correo de notificación
 * @param {string} subject - Asunto del correo
 * @param {string} message - Mensaje del correo
 * @param {string} priority - Prioridad: 'high', 'medium', 'low'
 * @param {object} errorDetails - Detalles del error (opcional)
 */
export async function sendNotificationEmail(subject, message, priority = 'medium', errorDetails = null) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_APP_PASSWORD;

  if (!emailUser || !emailPass) {
    console.log('⚠️ Falta configuración EMAIL_USER/EMAIL_APP_PASSWORD en .env');
    return false;
  }

  const toEmail = process.env.NOTIFICATION_EMAIL || emailUser;
  
  if (!toEmail) {
    console.log('⚠️ No se configuró email de notificación, omitiendo envío');
    return false;
  }

  try {
    // Construir el mensaje HTML
    let htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
          <h2 style="color: #dc3545; margin-top: 0;">🚨 ${subject}</h2>
          <p style="font-size: 16px; color: #333;">${message}</p>
          
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #495057; margin-bottom: 10px;">📊 Detalles del Sistema</h3>
            <p style="margin: 5px 0;"><strong>Sistema:</strong> Broker Lenders - Actualización de Tasas</p>
            <p style="margin: 5px 0;"><strong>Fecha/Hora:</strong> ${new Date().toLocaleString('es-US', { timeZone: 'America/Denver' })}</p>
            <p style="margin: 5px 0;"><strong>Zona Horaria:</strong> Utah (MST/MDT)</p>
            <p style="margin: 5px 0;"><strong>Prioridad:</strong> ${priority.toUpperCase()}</p>
          </div>
    `;

    // Agregar detalles del error si existen
    if (errorDetails) {
      htmlContent += `
        <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #856404; margin-bottom: 10px;">🔍 Detalles del Error</h3>
          <p style="margin: 5px 0;"><strong>Tipo de Error:</strong> ${errorDetails.type || 'Desconocido'}</p>
          <p style="margin: 5px 0;"><strong>Mensaje:</strong> ${errorDetails.message || 'Sin mensaje detallado'}</p>
          <p style="margin: 5px 0;"><strong>Función:</strong> ${errorDetails.function || 'No especificada'}</p>
      `;
      
      if (errorDetails.stack) {
        htmlContent += `
          <details style="margin-top: 10px;">
            <summary style="cursor: pointer; color: #856404;">Ver stack trace completo</summary>
            <pre style="background-color: #f8f9fa; padding: 10px; border-radius: 3px; font-size: 12px; overflow-x: auto;">${errorDetails.stack}</pre>
          </details>
        `;
      }
      
      htmlContent += '</div>';
    }

    // Agregar información de resolución
    htmlContent += `
          <div style="background-color: #d1ecf1; border: 1px solid #bee5eb; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #0c5460; margin-bottom: 10px;">🔧 Acciones Recomendadas</h3>
            <ul style="color: #0c5460; margin: 0; padding-left: 20px;">
              <li>Verificar los logs del sistema: <code style="background-color: white; padding: 2px 4px; border-radius: 3px;">cat src/data/update-log.txt</code></li>
              <li>Revisar el estado del cron job: <code style="background-color: white; padding: 2px 4px; border-radius: 3px;">crontab -l</code></li>
              <li>Ejecutar actualización manual: <code style="background-color: white; padding: 2px 4px; border-radius: 3px;">npm run update-rates</code></li>
              <li>Verificar la página web: <a href="http://localhost:4321/rates" style="color: #007bff;">http://localhost:4321/rates</a></li>
            </ul>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
          <p>Este es un mensaje automático del sistema de actualización de tasas de Broker Lenders</p>
          <p>Hora del servidor: ${new Date().toISOString()}</p>
        </div>
      </div>
    `;

    // Configuración del correo
    const mailOptions = {
      from: process.env.EMAIL_FROM || emailUser,
      to: toEmail,
      subject: `[Broker Lenders] ${subject}`,
      html: htmlContent,
      priority: priority === 'high' ? 'high' : 'normal',
    };

    // Enviar correo
    const result = await transporter.sendMail(mailOptions);
    console.log(`✅ Correo enviado exitosamente a ${toEmail}`);
    console.log(`📧 ID del mensaje: ${result.messageId}`);
    
    return true;
    
  } catch (error) {
    console.error(`❌ Error enviando correo: ${error.message}`);
    return false;
  }
}

/**
 * Enviar notificación de fallo en actualización
 */
export async function notifyUpdateFailure(error, details = {}) {
  const subject = '❌ Falló actualización de tasas hipotecarias';
  const message = 'El sistema de actualización automática de tasas ha fallado. Se están utilizando datos de respaldo.';
  
  return await sendNotificationEmail(
    subject, 
    message, 
    'high', 
    { 
      type: 'Actualización de Tasas', 
      message: error.message, 
      function: 'updateRates',
      stack: error.stack,
      ...details
    }
  );
}

/**
 * Enviar notificación de fallo en web scraping
 */
export async function notifyScrapingFailure(error, details = {}) {
  const subject = '⚠️ Web scraping falló - Usando datos de respaldo';
  const message = 'El web scraping de Bankrate falló, pero el sistema continúa funcionando con datos de respaldo.';
  
  return await sendNotificationEmail(
    subject, 
    message, 
    'medium', 
    { 
      type: 'Web Scraping', 
      message: error.message, 
      function: 'scrapeBankrate',
      stack: error.stack,
      ...details
    }
  );
}

/**
 * Enviar notificación de éxito
 */
export async function notifySuccess(details = {}) {
  const subject = '✅ Actualización de tasas exitosa';
  const message = 'Las tasas hipotecarias se han actualizado exitosamente en el sistema.';
  
  return await sendNotificationEmail(
    subject, 
    message, 
    'low', 
    { 
      type: 'Éxito', 
      ...details
    }
  );
}

// Exportar funciones
export default {
  sendNotificationEmail,
  notifyUpdateFailure,
  notifyScrapingFailure,
  notifySuccess,
};