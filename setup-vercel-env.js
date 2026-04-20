#!/usr/bin/env node

/**
 * Script para configurar variables de entorno en Vercel
 * Uso: node setup-vercel-env.js <token>
 * 
 * Ejemplo: node setup-vercel-env.js vcp_83KZDFip6MnNeePCdZvySRhOum7WGgNQycJ8Sd1LJJMF4w6MrZ3sLvPF
 */

const https = require('https');

function makeRequest(method, path, token, body = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.vercel.com',
      path,
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({ status: res.statusCode, body: json });
        } catch (e) {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });

    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function setupVercelEnv(token) {
  console.log('🔧 Configurando variables en Vercel...\n');

  // Obtener proyecto
  const projectRes = await makeRequest('GET', '/v9/projects', token);
  if (projectRes.status !== 200) {
    console.error('❌ Error: No se puede autenticar. Verifica el token.');
    process.exit(1);
  }

  const project = projectRes.body.projects?.find(p => p.name === 'broker-lenders');
  if (!project) {
    console.error('❌ Proyecto "broker-lenders" no encontrado.');
    console.log('📋 Proyectos disponibles:', projectRes.body.projects?.map(p => p.name).join(', '));
    process.exit(1);
  }

  console.log(`✅ Proyecto encontrado: ${project.name} (${project.id})`);
  console.log(`🌐 URL: https://${project.alias || project.name}.vercel.app\n`);

  // Variables a configurar
  const envVars = [
    {
      key: 'PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY',
      target: ['preview', 'production'],
      description: 'Clave pública reCAPTCHA',
    },
    {
      key: 'GOOGLE_RECAPTCHA_SECRET_KEY',
      target: ['production'],
      description: 'Clave secreta reCAPTCHA',
    },
    {
      key: 'CONTACT_WEBHOOK_URL',
      target: ['production'],
      description: 'URL del webhook (Make/Zapier)',
    },
  ];

  console.log('📝 Variables requeridas:\n');
  envVars.forEach((v, i) => {
    console.log(`${i + 1}. ${v.key}`);
    console.log(`   Descripción: ${v.description}`);
    console.log(`   Ambientes: ${v.target.join(', ')}\n`);
  });

  console.log('💡 Próximos pasos:');
  console.log('1. Obtén los valores de:');
  console.log('   - Google Cloud Console (reCAPTCHA keys)');
  console.log('   - Make/Zapier (webhook URL)');
  console.log('\n2. Ejecuta nuevamente con valores:');
  console.log('   node setup-vercel-env.js <token> --set\n');
}

async function main() {
  const token = process.argv[2];
  if (!token) {
    console.error('❌ Token requerido');
    console.log('\nUso: node setup-vercel-env.js <token>\n');
    process.exit(1);
  }

  try {
    await setupVercelEnv(token);
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

main();
