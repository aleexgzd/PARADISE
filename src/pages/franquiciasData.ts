// Datos y copy de /franquicias. Lo leen la página y el plugin de prerender.
//
// Criterio editorial (decisión de Alex, sept. 2026): esta página convence y
// capta; no reproduce el dossier. Aquí no van cifras de negocio de ningún tipo
// (ni facturación, ni canon, ni royalties, ni inversión, ni márgenes, ni
// metros). Todo eso se entrega por email con el dossier y en la documentación
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
  perfil: { parrafos: string[]; rasgos: string[] };
  acompanamiento: FrTarjeta[];
  pasos: FrTarjeta[];
  gallery: FrFoto[];
  faq: FrFaq[];
  mailto: string;
}

const SUBJECT = 'Quiero el dossier de franquicia de Açaí Paradise';
const BODY = [
  'Hola, me gustaría recibir el dossier de franquicia.',
  '',
  'Nombre:',
  'Ciudad donde me imagino mi Paradise:',
  'Teléfono para una primera llamada:',
  '¿Tengo ya un local en mente? (sí / no):',
  '',
  'Gracias.',
].join('\n');

/** Enlace de contacto (mailto con asunto y cuerpo). Exportado aparte para que
 *  la home no cargue todo el copy de la página solo por el botón. */
export const FRANQUICIAS_MAILTO = `mailto:info@acaiparadise.es?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

export const FRANQUICIAS: FranquiciasData = {
  title: 'Franquicia de açaí en España · Abre tu Açaí Paradise',
  description:
    'Franquicia de açaí sin cocina ni salida de humos, probada en Granada y Sevilla. Para emprendedores que quieren su primer negocio. Pide el dossier.',
  canonical: 'https://www.acaiparadise.es/franquicias',
  heroImg: '/assets/franquicia-franquiciado.webp',
  heroAlt: 'Chico sonriendo con un bowl de açaí delante de la tienda Açaí Paradise, con gente haciendo cola',

  pills: [
    'Sin cocina ni salida de humos',
    'No necesitas experiencia',
    'Formación en una tienda real',
    'Te acompañamos en la apertura',
  ],

  historia: [
    'Todo empezó lejos de aquí. Viviendo en Australia, nuestro fundador descubrió el açaí y vio cómo lo pedía todo tipo de gente, a cualquier hora del día. Volvió con una pregunta que no se le iba de la cabeza: ¿por qué en España no había un sitio así?',
    'En enero de 2024 abrimos en la Plaza de la Universidad de Granada el primer local de la ciudad dedicado solo al açaí para llevar. Sin cocina, con una carta corta y el producto en el centro. Granada respondió, y en 2026 llegó Sevilla.',
    'Ahora queremos que el próximo Paradise lo abra alguien que sienta lo mismo que sentimos nosotros el primer día que subimos la persiana.',
  ],

  razones: [
    {
      title: 'La gente vuelve',
      text: 'Un bowl es comida, merienda o postre. Nuestros clientes no vienen una vez: lo meten en su semana. Y un negocio que vive de quien repite tiene una base sólida.',
    },
    {
      title: 'Una estructura ligera',
      text: 'Sin cocina ni salida de humos, con una carta corta y un equipo pequeño. Menos obra, menos procesos y muchos más locales donde encajar.',
    },
    {
      title: 'Un mercado por hacer',
      text: 'El açaí está empezando en España. Hay ciudades enteras sin un sitio especializado, y llegar el primero con una marca ya probada es una ventaja.',
    },
    {
      title: 'Una marca que se comparte',
      text: 'Un bowl bonito se fotografía. Cada cliente que lo sube a sus redes está haciendo publicidad de tu tienda sin que se lo pidas.',
    },
  ],

  perfil: {
    parrafos: [
      'No hace falta venir de la hostelería ni haber montado nada antes. Si estás pensando en tu primer negocio, el modelo está hecho para que sea posible: una carta que se aprende rápido, un método claro y un equipo detrás.',
      'Lo que sí necesitas es implicación. Buscamos franquiciados que estén en su tienda, que conozcan a sus clientes por el nombre y que quieran crecer con una marca joven.',
    ],
    rasgos: [
      'Ganas de tener algo tuyo.',
      'Trato cercano con la gente.',
      'Constancia para seguir un método.',
      'Ilusión por crecer con la marca.',
    ],
  },

  acompanamiento: [
    {
      title: 'Encontrar el local',
      text: 'Estudiamos contigo la zona y te ayudamos a elegir el local y a negociarlo.',
    },
    {
      title: 'Aprender detrás de un mostrador',
      text: 'Antes de abrir, tú y tu equipo os formáis en una de nuestras tiendas, con clientes reales. No con un manual.',
    },
    {
      title: 'El día que abres',
      text: 'Nuestro equipo está contigo en tu tienda los primeros días, hasta que todo rueda.',
    },
    {
      title: 'Y todo lo que viene después',
      text: 'Marca, redes, proveedores y producto nuevo. Tú te centras en tu tienda y en tu gente.',
    },
  ],

  pasos: [
    {
      title: 'Escríbenos',
      text: 'Cuéntanos quién eres y en qué ciudad te imaginas tu Paradise.',
    },
    {
      title: 'Recibe el dossier',
      text: 'Te lo enviamos con todas las cifras del modelo y hablamos por teléfono para resolver tus dudas.',
    },
    {
      title: 'Buscamos tu local',
      text: 'Si encajamos, empezamos a preparar juntos tu apertura.',
    },
  ],

  gallery: [
    { src: '/assets/franquicia-rotulo.webp', alt: 'Rótulo azul de la tienda Açaí Paradise en Granada' },
    { src: '/assets/franquicia-neon.webp', alt: 'Neón Paradise sobre la pared de madera del local' },
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
      a: 'Depende sobre todo del local. Al no necesitar cocina ni salida de humos, la obra y el equipamiento son más contenidos que en otros negocios de hostelería. Las condiciones completas vienen en el dossier: escríbenos y te lo enviamos.',
    },
    {
      q: '¿Es rentable un negocio de açaí?',
      a: 'Es un modelo que ya funciona en dos ciudades y que se apoya en dos cosas: clientes que repiten cada semana y una estructura sin cocina y con equipo pequeño. Los números, con su contexto, los compartimos en el dossier y en la primera llamada.',
    },
    {
      q: '¿Es una buena franquicia para jóvenes emprendedores?',
      a: 'Sí. Está pensada para que pueda ser tu primer negocio: la carta es corta, el método está muy definido y te formamos antes de abrir, así que la experiencia previa no es un requisito.',
    },
    {
      q: '¿Necesito experiencia en hostelería?',
      a: 'No. Te formamos a ti y a tu equipo en una de nuestras tiendas antes de abrir, y estamos contigo los primeros días de tu apertura.',
    },
    {
      q: '¿Qué tipo de local necesito?',
      a: 'Un local pequeño con paso de gente: plazas, paseos, zonas universitarias o comerciales. Como no hay cocina ni salida de humos, encajan muchos más locales que en otros conceptos de hostelería. Te ayudamos a encontrarlo.',
    },
    {
      q: '¿Puedo abrir en mi ciudad?',
      a: 'Empezamos por Andalucía y después iremos al resto de España. Cuéntanos dónde te imaginas tu Paradise y lo estudiamos contigo.',
    },
    {
      q: '¿Qué apoyo recibo como franquiciado?',
      a: 'Te acompañamos antes, durante y después de abrir: búsqueda del local, formación, apertura, marca, redes, proveedores y producto nuevo.',
    },
    {
      q: '¿Por qué açaí y por qué ahora?',
      a: 'Porque es un producto que la gente incorpora a su rutina y que en España todavía está empezando. Hay muchas ciudades donde aún no existe una marca especializada.',
    },
    {
      q: '¿Cómo empiezo?',
      a: 'Escríbenos a info@acaiparadise.es con tu nombre, tu ciudad y un teléfono. Te enviamos el dossier con todas las cifras y agendamos una primera llamada.',
    },
  ],

  mailto: FRANQUICIAS_MAILTO,
};
