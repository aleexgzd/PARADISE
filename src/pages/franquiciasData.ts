// Datos y copy de /franquicias. Lo leen la página y el plugin de prerender.
//
// Criterio editorial (decisión de Alex, sept. 2026): esta página convence y
// capta; no reproduce el dossier. Aquí no van cifras de negocio de ningún tipo
// (ni facturación, ni canon, ni royalties, ni inversión, ni márgenes, ni
// metros). Todo eso se trabaja en las reuniones y en la documentación
// precontractual. Antes de añadir un dato, pregúntate si le sirve más a un
// competidor que a un candidato.

export interface FrFaq { q: string; a: string }
export interface FrTarjeta { title: string; text: string }
export interface FrFoto { src: string; alt: string }

export interface FranquiciasData {
  title: string;
  description: string;
  canonical: string;
  heroImg: string;
  heroAlt: string;
  pills: string[];
  historia: string[];
  razones: FrTarjeta[];
  perfiles: FrTarjeta[];
  apoyo: FrTarjeta[];
  pasos: FrTarjeta[];
  gallery: FrFoto[];
  faq: FrFaq[];
  mailto: string;
}

const SUBJECT = 'Información sobre la franquicia Açaí Paradise';
const BODY = [
  'Hola, me gustaría recibir información sobre la franquicia.',
  '',
  'Nombre:',
  'Ciudad donde me imagino mi Paradise:',
  'Teléfono para una primera llamada:',
  '¿Tienes local? (sí, ya lo tengo / tengo uno en mente / todavía no):',
  '¿Cómo te ves? (llevando yo la tienda / invirtiendo con un encargado):',
  '',
  'Gracias.',
].join('\n');

/** Enlace de contacto (mailto con asunto y cuerpo). Exportado aparte para que
 *  la home no cargue todo el copy de la página solo por el botón. */
export const FRANQUICIAS_MAILTO = `mailto:info@acaiparadise.es?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

export const FRANQUICIAS: FranquiciasData = {
  title: 'Franquicia de açaí en España · Abre tu Açaí Paradise',
  description:
    'Franquicia de açaí sin cocina ni salida de humos, probada en Granada y Sevilla. Sencilla de operar, con acompañamiento continuo. Pide información.',
  canonical: 'https://www.acaiparadise.es/franquicias',
  heroImg: '/assets/franquicia-bowl-cola.webp',
  heroAlt: 'Bowl de açaí en la mano con clientes haciendo cola al fondo en Açaí Paradise',

  pills: [
    'Sin cocina ni salida de humos',
    'Local pequeño',
    'Con o sin experiencia',
    'Acompañamiento continuo',
  ],

  historia: [
    'Todo empezó lejos de aquí. Viviendo en Australia, nuestro fundador descubrió el açaí y vio cómo lo pedía todo tipo de gente, a cualquier hora del día. Volvió con una pregunta que no se le iba de la cabeza: ¿por qué en España no había un sitio así?',
    'En enero de 2024 abrimos en la Plaza de la Universidad de Granada el primer local de la ciudad dedicado solo al açaí para llevar. Sin cocina, con una carta corta y el producto en el centro. Granada respondió, y en 2026 llegó Sevilla.',
    'Hoy tenemos un modelo probado en dos ciudades, y queremos llevarlo a muchas más de la mano de franquiciados que crean en él tanto como nosotros.',
  ],

  razones: [
    {
      title: 'Pensado para ser rentable',
      text: 'Una inversión contenida frente a otros conceptos de hostelería y una estructura de costes diseñada desde el primer día para favorecer la rentabilidad.',
    },
    {
      title: 'La gente vuelve',
      text: 'Un bowl es comida, merienda o postre. Nuestros clientes no vienen una vez: lo meten en su semana. Y un negocio que vive de quien repite tiene una base sólida.',
    },
    {
      title: 'Sencillo de operar',
      text: 'Sin cocina ni salida de humos, con una carta corta, procesos estandarizados y un equipo pequeño. Más locales posibles y menos complejidad en el día a día.',
    },
    {
      title: 'Un mercado por hacer',
      text: 'El açaí está empezando en España. Hay ciudades enteras sin un sitio especializado, y llegar el primero con una marca ya probada es una ventaja.',
    },
  ],

  perfiles: [
    {
      title: 'Si quieres llevar tu propia tienda',
      text: 'Es un modelo ideal para un primer negocio, también para jóvenes emprendedores: una carta que se aprende rápido, un método claro y formación antes de abrir. No necesitas experiencia en hostelería.',
    },
    {
      title: 'Si buscas invertir con un encargado',
      text: 'El modelo funciona con un equipo pequeño y procesos muy definidos, así que puedes apoyarte en un encargado para el día a día. Eso sí, te pedimos implicación de verdad en el arranque: es cuando se construye el negocio.',
    },
  ],

  apoyo: [
    {
      title: 'Tu local',
      text: 'Si ya lo tienes, lo analizamos contigo. Si no, estudiamos la zona, te ayudamos a encontrarlo y a negociarlo.',
    },
    {
      title: 'Formación en una tienda real',
      text: 'Antes de abrir, tú y tu equipo os formáis detrás de nuestro mostrador, con clientes de verdad. No con un manual.',
    },
    {
      title: 'La apertura',
      text: 'Nuestro equipo está contigo en tu tienda los primeros días, hasta que todo rueda.',
    },
    {
      title: 'Seguimiento continuo',
      text: 'Cuando la tienda arranca seguimos en contacto: revisamos contigo cómo va, te ayudamos a ajustar y compartimos lo que aprendemos en toda la red.',
    },
    {
      title: 'Marca y marketing',
      text: 'Campañas, redes y acciones de lanzamiento y fidelización. La marca trabaja para tu tienda, y cada tienda hace más fuerte la marca.',
    },
    {
      title: 'Proveedores y producto',
      text: 'Proveedores seleccionados para toda la red y producto nuevo que probamos antes de llevarlo a tu carta.',
    },
  ],

  pasos: [
    {
      title: 'Primer contacto',
      text: 'Escríbenos, tengas ya un local o solo una ciudad en mente. Te respondemos personalmente.',
    },
    {
      title: 'Nos conocemos',
      text: 'Una primera reunión para saber qué buscas, contarte quiénes somos y ver si encajamos.',
    },
    {
      title: 'El modelo, a fondo',
      text: 'Te presentamos el dossier y resolvemos todas tus dudas sobre cómo funciona una tienda Paradise.',
    },
    {
      title: 'Tus números',
      text: 'Entramos en el detalle del negocio y estudiamos tu caso con nuestra herramienta de cálculo, simulando distintos escenarios para tu local.',
    },
    {
      title: 'Tu ubicación',
      text: 'Validamos el local que ya tienes o lo buscamos contigo, hasta dar con el sitio adecuado.',
    },
    {
      title: 'Firma y preparación',
      text: 'Formalizamos la relación y preparamos juntos la obra, la formación y el lanzamiento.',
    },
    {
      title: 'Apertura y después',
      text: 'Abrimos contigo y seguimos a tu lado mientras la tienda crece.',
    },
  ],

  gallery: [
    { src: '/assets/franquicia-rotulo.webp', alt: 'Rótulo azul de la tienda Açaí Paradise en Granada' },
    { src: '/assets/franquicia-neon.webp', alt: 'Neón Paradise sobre la pared de madera del local' },
    { src: '/assets/franquicia-grupo.webp', alt: 'Cuatro amigos comiendo bowls de açaí sentados en una plaza de Granada' },
    { src: '/assets/franquicia-preparacion.webp', alt: 'Preparación de un bowl de açaí en el mostrador' },
    { src: '/assets/franquicia-tienda-sevilla.webp', alt: 'Clientes entrando en la tienda Açaí Paradise de Sevilla' },
    { src: '/assets/franquicia-moto.webp', alt: 'Dos personas compartiendo un bowl de açaí apoyadas en una moto' },
    { src: '/assets/franquicia-fruta.webp', alt: 'Fresas y plátano recién cortados sobre un bowl de açaí' },
    { src: '/assets/franquicia-cliente-bowl.webp', alt: 'Clienta comiendo un bowl de açaí al sol' },
    { src: '/assets/marca-tote.webp', alt: 'Tote bag de Açaí Paradise con el logo de la palmera' },
  ],

  faq: [
    {
      q: '¿Cuánto cuesta abrir una franquicia de Açaí Paradise?',
      a: 'Depende sobre todo del local. Al no necesitar cocina ni salida de humos, la obra y el equipamiento son más contenidos que en otros negocios de hostelería. Las condiciones completas las vemos en las reuniones, estudiando tu caso concreto.',
    },
    {
      q: '¿Es rentable un negocio de açaí?',
      a: 'Es un modelo que ya funciona en dos ciudades y que se apoya en clientes que repiten cada semana y en una estructura sin cocina y con equipo pequeño. Los números los trabajamos contigo, simulando distintos escenarios para tu local.',
    },
    {
      q: '¿Tengo que estar yo en la tienda?',
      a: 'No necesariamente todos los días: el modelo funciona con un equipo pequeño y puedes apoyarte en un encargado. Lo que sí pedimos es implicación directa en el arranque, porque es cuando se construye el negocio.',
    },
    {
      q: '¿Es una buena franquicia para jóvenes emprendedores?',
      a: 'Sí. Está pensada para que pueda ser tu primer negocio: la carta es corta, el método está muy definido y te formamos antes de abrir, así que la experiencia previa no es un requisito.',
    },
    {
      q: '¿Necesito experiencia en hostelería?',
      a: 'No. Te formamos a ti y a tu equipo en una de nuestras tiendas antes de abrir, y estamos contigo en la apertura y después.',
    },
    {
      q: 'Ya tengo un local, ¿me sirve?',
      a: 'Cuéntanoslo en tu primer mensaje. Lo analizamos contigo desde el principio: ubicación, paso de gente y encaje con el modelo. Como no hace falta cocina ni salida de humos, encajan muchos más locales que en otros conceptos.',
    },
    {
      q: '¿Qué tipo de local necesito?',
      a: 'Un local pequeño con paso de gente: plazas, paseos, zonas universitarias o comerciales. Si todavía no lo tienes, te ayudamos a encontrarlo.',
    },
    {
      q: '¿Puedo abrir en mi ciudad?',
      a: 'Empezamos por Andalucía y después iremos al resto de España. Cuéntanos dónde te imaginas tu Paradise y lo estudiamos contigo.',
    },
    {
      q: '¿Qué pasa después de abrir?',
      a: 'Seguimos en contacto: hacemos seguimiento de cómo va la tienda, te ayudamos a ajustar lo que haga falta y te damos marketing, proveedores, formación y producto nuevo.',
    },
    {
      q: '¿Cómo es el proceso para unirme?',
      a: 'Empieza con un mensaje y sigue con varias reuniones: nos conocemos, te presentamos el modelo, estudiamos tus números y validamos la ubicación. Solo después se formaliza, y toda la información precontractual se entrega con la antelación que marca la ley.',
    },
  ],

  mailto: FRANQUICIAS_MAILTO,
};
