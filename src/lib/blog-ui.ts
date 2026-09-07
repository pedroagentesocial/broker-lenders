import type { Lang } from './lang';

/**
 * Textos de la interfaz del blog. A diferencia del resto del sitio (que traduce
 * en el cliente con `data-i18n`), el blog se renderiza en SSR ya en el idioma
 * correcto: es contenido largo y queremos que Google indexe cada versión.
 */
export const blogUi = {
  en: {
    breadcrumbHome: 'Home',
    breadcrumbBlog: 'Blog',
    indexTitle: 'Mortgage guides that actually explain the numbers',
    indexSubtitle:
      'Short, visual guides on how home loans really work — written by Pedro Lira, licensed loan officer NMLS #318973. No jargon, no sales pitch: the same math we run for our clients.',
    indexMetaTitle: 'Mortgage Blog — Home Loan Guides Explained | Broker Lenders',
    indexMetaDescription:
      'Visual, plain-English guides on down payments, credit scores, closing costs, PMI, pre-approval and refinancing. New guide every 21 days. Available in English and Spanish.',
    newBadge: 'New',
    readTime: (m: number) => `${m} min read`,
    upcomingTitle: 'Coming next',
    upcomingNote: 'We publish a new guide every 21 days.',
    relatedTitle: 'Keep reading',
    sourcesTitle: 'Sources',
    sourcesNote: 'Every number in this guide is linked to its primary source. Rates and limits change — always confirm before you sign.',
    updatedOn: 'Updated',
    authorName: 'Pedro Lira',
    authorRole: 'Loan Officer · NMLS #318973 · Broker Lenders',
    authorBio:
      'Licensed in Utah, Idaho, Nevada, California, Texas, Florida and Colorado. I have spent years explaining these numbers at kitchen tables in two languages — this blog is that same conversation, written down.',
    ctaTitle: 'Want these numbers run on your actual situation?',
    ctaBody: 'A 15-minute call is usually enough to tell you what you qualify for and what it would cost.',
    ctaPrimary: 'Get started',
    ctaSecondary: 'Call (801) 307-0273',
    backToBlog: '← All guides',
    emptyState: 'The first guides are on their way. Check back soon.',
    notFoundTitle: 'That guide does not exist',
    notFoundBody: 'The link may be broken or the guide may have been renamed. Everything we have published is one click away.',
    legal: {
      title: 'Important legal disclosures',
      summary:
        'Educational content only. Not a commitment to lend. Equal Housing Lender. Pedro Lira NMLS #318973 · Xpert Home Lending NMLS #2179191.',
      items: [
        {
          heading: 'This is education, not advice',
          body: 'These guides are general educational content. They are not a commitment to lend, not an offer or solicitation to enter into any particular loan, and not financial, tax or legal advice. Talk to your own tax preparer or attorney about how any of this applies to your situation.',
        },
        {
          heading: 'About the payment examples',
          body: 'Payment figures in these guides are illustrations calculated from the loan amount, rate and term stated in each chart. They are not quotes and no one is being offered these terms. Your actual rate and payment depend on your credit score, loan amount, loan-to-value, occupancy, property type, loan term, discount points and other factors, and can only be determined after a complete application and credit review.',
        },
        {
          heading: 'About the rate data',
          body: 'Where a guide shows a current rate, it comes from the ICE Mortgage Technology (Optimal Blue) OBMMI indices published by FRED, Federal Reserve Bank of St. Louis, and is refreshed daily. Those figures are national averages, not an offer of credit, and are not available to every borrower. They exclude points, fees, mortgage insurance and closing costs, so they are not an APR.',
        },
        {
          heading: 'Programs, limits and guidelines change',
          body: 'All loan programs are subject to credit approval and property appraisal. Rates, program terms and conditions are subject to change without notice. Not all products are available in all states or for all loan amounts, and other restrictions apply. Loan limits, mortgage insurance premiums, funding fees and underwriting guidelines cited in a guide were accurate on that guide’s publication date and are revised periodically by the agencies that set them — always confirm the current figure with the linked source before you rely on it.',
        },
        {
          heading: 'Links to other sites',
          body: 'Each guide links to the primary sources behind its numbers, including federal agencies and industry publications. Those sites are provided for reference. We do not control them, we are not responsible for their content, and a link is not an endorsement.',
        },
        {
          heading: 'Licensing',
          body: 'Broker Lenders is a registered trademark. Pedro Lira NMLS #318973 and Xpert Home Lending NMLS #2179191. Licensed in Utah, Idaho, Nevada, California, Texas, Florida and Colorado. Licensed by the California Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. Equal Housing Lender — we do business in accordance with the Federal Fair Housing Law and the Equal Credit Opportunity Act. You can verify our licensing at NMLS Consumer Access.',
        },
      ],
      nmlsLabel: 'NMLS Consumer Access',
      nmlsUrl: 'https://www.nmlsconsumeraccess.org/',
      reviewed: 'Disclosures last reviewed',
    },
  },
  es: {
    breadcrumbHome: 'Inicio',
    breadcrumbBlog: 'Blog',
    indexTitle: 'Guías hipotecarias que sí te explican los números',
    indexSubtitle:
      'Guías cortas y visuales sobre cómo funcionan de verdad los préstamos de vivienda, escritas por Pedro Lira, oficial de préstamos con licencia NMLS #318973. Sin tecnicismos y sin venta: las mismas cuentas que hacemos con nuestros clientes.',
    indexMetaTitle: 'Blog Hipotecario — Guías de Préstamos de Vivienda | Broker Lenders',
    indexMetaDescription:
      'Guías visuales y en español claro sobre enganche, puntaje de crédito, costos de cierre, seguro hipotecario, precalificación y refinanciamiento. Guía nueva cada 21 días.',
    newBadge: 'Nuevo',
    readTime: (m: number) => `${m} min de lectura`,
    upcomingTitle: 'Próximamente',
    upcomingNote: 'Publicamos una guía nueva cada 21 días.',
    relatedTitle: 'Sigue leyendo',
    sourcesTitle: 'Fuentes',
    sourcesNote: 'Cada cifra de esta guía está enlazada a su fuente oficial. Las tasas y los límites cambian: confírmalos antes de firmar.',
    updatedOn: 'Actualizado',
    authorName: 'Pedro Lira',
    authorRole: 'Oficial de Préstamos · NMLS #318973 · Broker Lenders',
    authorBio:
      'Con licencia en Utah, Idaho, Nevada, California, Texas, Florida y Colorado. Llevo años explicando estos números en la mesa de la cocina, en dos idiomas. Este blog es esa misma conversación, por escrito.',
    ctaTitle: '¿Quieres que corramos estos números con tu caso real?',
    ctaBody: 'Con una llamada de 15 minutos normalmente basta para saber para cuánto calificas y cuánto te costaría.',
    ctaPrimary: 'Comenzar',
    ctaSecondary: 'Llama al (801) 307-0273',
    backToBlog: '← Todas las guías',
    emptyState: 'Las primeras guías vienen en camino. Vuelve pronto.',
    notFoundTitle: 'Esa guía no existe',
    notFoundBody: 'Puede que el enlace esté roto o que la guía haya cambiado de nombre. Todo lo que hemos publicado está a un clic.',
    legal: {
      title: 'Divulgaciones legales importantes',
      summary:
        'Contenido educativo únicamente. No es un compromiso de préstamo. Prestamista de Vivienda Justa. Pedro Lira NMLS #318973 · Xpert Home Lending NMLS #2179191.',
      items: [
        {
          heading: 'Esto es educación, no asesoría',
          body: 'Estas guías son contenido educativo general. No son un compromiso de préstamo, no son una oferta ni una solicitud para contratar ningún préstamo en particular, y no son asesoría financiera, fiscal ni legal. Habla con tu propio preparador de impuestos o abogado sobre cómo aplica todo esto a tu situación.',
        },
        {
          heading: 'Sobre los ejemplos de pago',
          body: 'Las cifras de pago de estas guías son ilustraciones calculadas con el monto, la tasa y el plazo indicados en cada gráfica. No son cotizaciones y no se le están ofreciendo estos términos a nadie. Tu tasa y tu pago reales dependen de tu puntaje de crédito, el monto del préstamo, el financiamiento sobre el valor, si vas a vivir ahí, el tipo de propiedad, el plazo, los puntos de descuento y otros factores, y solo se pueden determinar después de una solicitud completa y una revisión de crédito.',
        },
        {
          heading: 'Sobre los datos de tasas',
          body: 'Cuando una guía muestra una tasa vigente, viene de los índices OBMMI de ICE Mortgage Technology (Optimal Blue) publicados por FRED, del Banco de la Reserva Federal de St. Louis, y se actualiza a diario. Esas cifras son promedios nacionales, no una oferta de crédito, y no están disponibles para todos los prestatarios. No incluyen puntos, cuotas, seguro hipotecario ni costos de cierre, así que no son una APR.',
        },
        {
          heading: 'Los programas, límites y guías cambian',
          body: 'Todos los programas de préstamo están sujetos a aprobación crediticia y a un avalúo de la propiedad. Las tasas, términos y condiciones pueden cambiar sin previo aviso. No todos los productos están disponibles en todos los estados ni para todos los montos, y aplican otras restricciones. Los límites de préstamo, las primas de seguro hipotecario, las cuotas de financiamiento y las guías de evaluación citadas en una guía eran correctos en la fecha de publicación de esa guía y las agencias que los fijan los revisan periódicamente — confirma siempre la cifra vigente con la fuente enlazada antes de tomar una decisión.',
        },
        {
          heading: 'Enlaces a otros sitios',
          body: 'Cada guía enlaza a las fuentes primarias detrás de sus números, incluyendo agencias federales y publicaciones del sector. Esos sitios se ofrecen como referencia. No los controlamos, no somos responsables de su contenido, y un enlace no significa que los respaldemos.',
        },
        {
          heading: 'Licencias',
          body: 'Broker Lenders es una marca registrada. Pedro Lira NMLS #318973 y Xpert Home Lending NMLS #2179191. Con licencia en Utah, Idaho, Nevada, California, Texas, Florida y Colorado. Licenciado por el Departamento de Protección Financiera e Innovación de California bajo la Ley de Préstamos Hipotecarios Residenciales de California. Prestamista de Vivienda Justa — operamos conforme a la Ley Federal de Vivienda Justa y a la Ley de Igualdad de Oportunidades de Crédito. Puedes verificar nuestras licencias en NMLS Consumer Access.',
        },
      ],
      nmlsLabel: 'NMLS Consumer Access',
      nmlsUrl: 'https://www.nmlsconsumeraccess.org/',
      reviewed: 'Divulgaciones revisadas por última vez',
    },
  },
} as const;

export function ui(lang: Lang) {
  return blogUi[lang];
}
