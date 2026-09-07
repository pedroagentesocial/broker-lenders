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
    disclaimer:
      'Educational content only. Not a commitment to lend, and not financial, tax or legal advice. Loan programs, rates and limits shown were accurate on the publication date and are subject to change. Equal Housing Lender.',
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
    disclaimer:
      'Contenido educativo únicamente. No es un compromiso de préstamo ni asesoría financiera, fiscal o legal. Los programas, tasas y límites mostrados eran correctos en la fecha de publicación y pueden cambiar. Prestamista de Vivienda Justa.',
  },
} as const;

export function ui(lang: Lang) {
  return blogUi[lang];
}
