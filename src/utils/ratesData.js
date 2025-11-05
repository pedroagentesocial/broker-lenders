// Función para obtener los datos de tasas dinámicos
export async function getRatesData() {
  try {
    // Intentar cargar el archivo JSON de tasas
    const ratesData = await import('../data/rates-data.json');
    const data = ratesData.default;
    
    // Transformar la estructura para que sea más fácil de usar
    return {
      timestamp: data.timestamp,
      utah: data.states.utah,
      idaho: data.states.idaho,
      nevada: data.states.nevada,
      california: data.states.california,
      texas: data.states.texas,
      florida: data.states.florida,
      colorado: data.states.colorado
    };
  } catch (error) {
    console.error('Error al cargar datos de tasas:', error);
    // Retornar datos por defecto si hay error
    return getDefaultRatesData();
  }
}

// Función para obtener datos por defecto en caso de error
function getDefaultRatesData() {
  return {
    timestamp: new Date().toISOString(),
    utah: {
      '30-year-fixed': { rate: '6.375', apr: '6.607', points: '1.75' },
      '20-year-fixed': { rate: '6.125', apr: '6.285', points: '1.5' },
      '15-year-fixed': { rate: '5.875', apr: '6.125', points: '1.0' },
      '30-year-fha': { rate: '6.500', apr: '6.720', points: '1.25' },
      '30-year-va': { rate: '6.375', apr: '6.590', points: '1.0' },
      '30-year-jumbo': { rate: '5.875', apr: '6.125', points: '0.75' }
    }
  };
}