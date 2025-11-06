export const prerender = false;

import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.resolve(process.cwd(), 'src', 'data', 'rates-data.json');
    const content = await fs.readFile(filePath, 'utf8');
    const json = JSON.parse(content);
    return new Response(JSON.stringify(json), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      status: 200,
    });
  } catch (e) {
    const fallback = {
      timestamp: new Date().toISOString(),
      states: {
        utah: {
          '30-year-fixed': { rate: '6.750%', apr: '6.890%', points: '1.75' },
          '20-year-fixed': { rate: '6.125%', apr: '6.285%', points: '1.50' },
          '15-year-fixed': { rate: '5.875%', apr: '6.125%', points: '1.00' },
          '30-year-fha': { rate: '6.500%', apr: '6.720%', points: '1.25' },
          '30-year-jumbo': { rate: '6.875%', apr: '7.010%', points: '1.75' },
        },
      },
      error: 'Failed to read rates-data.json',
      message: e.message,
    };
    return new Response(JSON.stringify(fallback), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
      status: 200,
    });
  }
}