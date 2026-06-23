// Contenido del blog. Cada artículo es un objeto BlogPost.
// Para publicar uno nuevo: añade un objeto a POSTS (el primero del array es el más reciente).

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h2'; text: string }
  | { t: 'ul'; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;        // <title> / SEO (50-60 c)
  description: string;  // meta description (120-160 c)
  h1: string;
  excerpt: string;      // resumen para el índice
  dateISO: string;      // '2026-06-22'
  dateLabel: string;    // '22 de junio de 2026'
  category: string;
  readMin: number;
  heroImg: string;
  heroAlt: string;
  body: Block[];
  faq: { q: string; a: string }[];
  related: string[];    // slugs relacionados
}

export const POSTS: BlogPost[] = [
  {
    slug: 'que-es-el-acai',
    title: 'Qué es el açaí: origen, sabor y por qué engancha | Açaí Paradise',
    description:
      'Qué es el açaí (acai), de dónde viene, a qué sabe y por qué se ha puesto de moda. Te lo contamos claro, sin postureo, desde Açaí Paradise (Granada y Sevilla).',
    h1: '¿Qué es el açaí? Origen, sabor y por qué engancha',
    excerpt:
      'De dónde viene la baya brasileña que ha conquistado España, a qué sabe de verdad y por qué un buen bowl de açaí engancha desde la primera cucharada.',
    dateISO: '2026-06-22',
    dateLabel: '22 de junio de 2026',
    category: 'El açaí',
    readMin: 4,
    heroImg: '/assets/acai-granada-plaza.jpg',
    heroAlt: 'Acai bowl cremoso con fruta fresca recién montado',
    body: [
      { t: 'p', text: 'Si has llegado hasta aquí es porque has visto bowls de açaí por todas partes —en Instagram, por la calle, en la cola de algún sitio— y te preguntas qué es exactamente eso de color morado que lleva fruta encima. Te lo contamos claro y sin postureo.' },
      { t: 'h2', text: 'De dónde viene el açaí' },
      { t: 'p', text: 'El açaí (se escribe açaí, pero mucha gente busca «acai» o «açai», y todo es lo mismo) es una baya pequeña y oscura que crece en unas palmeras del Amazonas, en Brasil. Allí se toma desde hace siglos: lo recolectan, lo trituran y lo consumen casi a diario, sobre todo en el norte del país.' },
      { t: 'p', text: 'Lo que en Brasil es comida de toda la vida, en los últimos años se ha convertido en una pequeña obsesión saludable por medio mundo. Y con razón.' },
      { t: 'h2', text: 'A qué sabe el açaí' },
      { t: 'p', text: 'El açaí solo, sin nada, sabe a una mezcla entre frutos del bosque y un toque a cacao. No es dulce de por sí: es más bien suave y con un puntito amargo, parecido a un chocolate negro muy ligero. Por eso se monta en bowl con plátano, fruta fresca, granola y cremas: ahí es donde explota de sabor.' },
      { t: 'h2', text: 'Cómo se toma: el açaí bowl' },
      { t: 'p', text: 'La forma estrella de tomarlo es el acai bowl: una base de açaí cremoso y frío (textura tipo helado o sorbete) en un vaso o cuenco, y encima los toppings que tú elijas —fruta del día, granola, crema de cacahuete, leche condensada, galleta lotus, choco avellana...—. Frío, cremoso y para comer con cuchara.' },
      { t: 'ul', items: [
        'Base: açaí cremoso (a veces con plátano para suavizarlo).',
        'Capa de granola para el crujiente.',
        'Fruta fresca del día: fresa, plátano, kiwi, arándanos, mango...',
        'Toppings a elegir: cremas, galleta, coco, proteína, sin gluten...',
      ] },
      { t: 'h2', text: '¿Es saludable?' },
      { t: 'p', text: 'El açaí es famoso por ser rico en antioxidantes, fibra y grasas buenas. No es un superalimento mágico —ningún alimento lo es—, pero sí es una merienda mucho más interesante que un dulce procesado: fruta de verdad, energía y algo que apetece. Y luego está la versión fit, con granola 0% y proteína, para quien lo quiere aún más ligero.' },
      { t: 'h2', text: 'Dónde probar un buen açaí en Granada y Sevilla' },
      { t: 'p', text: 'En Açaí Paradise hacemos acai bowls de verdad, con recetas propias y fruta fresca del día, en el centro de Granada (Plaza de la Universidad) y en el centro de Sevilla (Plaza Cristo de Burgos). Tú lo montas a tu gusto y nosotros lo bordamos al momento. También te lo llevamos a casa por Glovo y Uber Eats.' },
    ],
    faq: [
      { q: '¿Cómo se pronuncia açaí?', a: 'Se pronuncia «a-sa-í», con el acento en la última i. Se escribe açaí, pero también verás «acai» o «açai»: todo se refiere a lo mismo.' },
      { q: '¿El açaí lleva azúcar?', a: 'El açaí en sí no es dulce; el dulzor del bowl viene de la fruta y los toppings que elijas. Por eso puedes hacerlo más goloso o más fit según tu antojo.' },
      { q: '¿El açaí se toma frío?', a: 'Sí. El acai bowl se sirve frío, con una textura cremosa tipo sorbete, y se come con cuchara.' },
    ],
    related: ['acai-en-granada-guia', 'acai-en-sevilla-guia'],
  },

  {
    slug: 'acai-en-granada-guia',
    title: 'Açaí en Granada: dónde comer acai bowls en el centro | Guía',
    description:
      'Dónde comer açaí en Granada centro: acai bowls cremosos, fruta fresca y a domicilio. Guía rápida de Açaí Paradise en la Plaza de la Universidad.',
    h1: 'Açaí en Granada: dónde comer un buen acai bowl',
    excerpt:
      'Guía rápida para tomar açaí en Granada: dónde estamos, qué bowls pedir, cuánto cuesta y cómo pedirlo a domicilio.',
    dateISO: '2026-06-15',
    dateLabel: '15 de junio de 2026',
    category: 'Granada',
    readMin: 3,
    heroImg: '/assets/acai-granada-fachada.jpg',
    heroAlt: 'Local de Açaí Paradise en el centro de Granada con gente en la puerta',
    body: [
      { t: 'p', text: 'El açaí ha llegado para quedarse en Granada, y si buscas dónde tomarte un buen acai bowl en el centro, esta guía rápida es para ti.' },
      { t: 'h2', text: 'Dónde comer açaí en Granada' },
      { t: 'p', text: 'Estamos en la Plaza de la Universidad, 1, en pleno centro de Granada, a un paso de Gran Vía, la Catedral y la zona universitaria. Es de los sitios más céntricos para parar a merendar algo rico sin complicarte.' },
      { t: 'h2', text: 'Qué bowl pedir' },
      { t: 'p', text: 'Tenemos cinco recetas propias y, si no te decides, esta es la chuleta rápida:' },
      { t: 'ul', items: [
        'Paradise: el que da nombre, cremoso con fresa, plátano y arándano. Empieza por aquí.',
        'Brasil: plátano, crema de cacahuete y leche condensada. La receta brasileña de toda la vida.',
        'Tropical: piña, mango, kiwi y maracuyá. El más fresco (y el que más fotos se lleva).',
        'Dulce: granola de chocolate, choco avellana y galleta lotus. Postre disfrazado de bowl.',
        'Fit: granola 0%, proteína y crema de cacahuete. El que no parece fit y lo es.',
      ] },
      { t: 'h2', text: 'Cuánto cuesta' },
      { t: 'p', text: 'Los bowls empiezan desde 5 € (tamaño mini) y hay cuatro tamaños: mini (5 €), pequeño (6,50 €), mediano (7,90 €) y grande (9,90 €). Personalizable con más de quince toppings.' },
      { t: 'h2', text: 'Açaí a domicilio en Granada' },
      { t: 'p', text: '¿No te apetece moverte? Pídelo a domicilio en Granada por Glovo o Uber Eats y te llega a casa. También puedes pasarte por la tienda y montarlo a tu gusto en el momento.' },
    ],
    faq: [
      { q: '¿Dónde está Açaí Paradise en Granada?', a: 'En la Plaza de la Universidad, 1, en pleno centro de Granada. Consulta el horario actualizado en nuestra ficha de Google Maps.' },
      { q: '¿Hacéis açaí a domicilio en Granada?', a: 'Sí, repartimos en Granada por Glovo y Uber Eats, además de servirte en tienda.' },
    ],
    related: ['que-es-el-acai', 'acai-en-sevilla-guia'],
  },

  {
    slug: 'acai-en-sevilla-guia',
    title: 'Açaí en Sevilla: dónde comer acai bowls en el centro | Guía',
    description:
      'Dónde comer açaí en Sevilla centro (junto a la Alfalfa): acai bowls cremosos, fruta fresca y a domicilio. Guía de Açaí Paradise en Plaza Cristo de Burgos.',
    h1: 'Açaí en Sevilla: dónde comer un buen acai bowl',
    excerpt:
      'Guía rápida para tomar açaí en Sevilla: dónde estamos, qué bowls pedir, precios y cómo pedirlo a domicilio.',
    dateISO: '2026-06-08',
    dateLabel: '8 de junio de 2026',
    category: 'Sevilla',
    readMin: 3,
    heroImg: '/assets/acai-sevilla-barra.jpg',
    heroAlt: 'Mostrador de Açaí Paradise Sevilla para personalizar tu bowl',
    body: [
      { t: 'p', text: 'Si buscas dónde comer un buen acai bowl en Sevilla centro, te lo ponemos fácil con esta guía rápida.' },
      { t: 'h2', text: 'Dónde comer açaí en Sevilla' },
      { t: 'p', text: 'Estamos en la Plaza Cristo de Burgos, 9, en el centro de Sevilla, junto a la Alfalfa y a un paso de la Encarnación (Las Setas). Un sitio perfecto para parar a media tarde o después de pasear por el casco antiguo.' },
      { t: 'h2', text: 'Qué bowl pedir' },
      { t: 'p', text: 'Cinco recetas propias para todos los antojos:' },
      { t: 'ul', items: [
        'Paradise: cremoso con fresa, plátano y arándano. El clásico para empezar.',
        'Brasil: plátano, crema de cacahuete y leche condensada.',
        'Tropical: piña, mango, kiwi y maracuyá. El más fresco para el calor sevillano.',
        'Dulce: granola de chocolate, choco avellana y galleta lotus.',
        'Fit: granola 0%, proteína y crema de cacahuete.',
      ] },
      { t: 'h2', text: 'Cuánto cuesta' },
      { t: 'p', text: 'Desde 5 € el mini. Cuatro tamaños: mini (5 €), pequeño (6,50 €), mediano (7,90 €) y grande (9,90 €), con más de quince toppings a elegir.' },
      { t: 'h2', text: 'Açaí a domicilio en Sevilla' },
      { t: 'p', text: 'Pídelo a domicilio en Sevilla por Glovo o Uber Eats, o pásate por la tienda y te lo montamos al momento.' },
    ],
    faq: [
      { q: '¿Dónde está Açaí Paradise en Sevilla?', a: 'En la Plaza Cristo de Burgos, 9, en el centro de Sevilla, junto a la Alfalfa. Consulta el horario actualizado en nuestra ficha de Google Maps.' },
      { q: '¿Hacéis açaí a domicilio en Sevilla?', a: 'Sí, repartimos en Sevilla por Glovo y Uber Eats, además de servirte en tienda.' },
    ],
    related: ['que-es-el-acai', 'acai-en-granada-guia'],
  },
];

export const POSTS_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  POSTS.map((p) => [p.slug, p]),
);
