// Datos y copy SEO/GEO de cada landing de ciudad.
// Keywords basadas en datos reales de Search Console (jun 2026):
// açai/acai granada, acai bowl granada, acai sevilla, acai bowl sevilla,
// açaí sevilla centro, a domicilio, cerca de mí, restaurante brasileño...

export interface CityFaq {
  q: string;
  a: string;
}

export interface CityData {
  slug: 'granada' | 'sevilla';
  city: string;
  // ---- SEO <head> ----
  title: string;
  description: string;
  canonical: string;
  // ---- Cabecera ----
  eyebrow: string;
  h1Lead: string;
  h1Acc: string;
  intro: string[];
  // ---- Local / NEGOCIO ----
  storeName: string;
  streetAddress: string;
  postalCode: string;
  zona: string;
  mapsLink: string;
  mapEmbed: string;
  geo: { lat: number; lng: number };
  glovo: string;
  uber: string;
  rating: string;
  ratingValueSchema: string;
  reviewCount: string;
  reviewsLink: string;
  // ---- Fotos ----
  heroImg: string;
  heroAlt: string;
  gallery: { src: string; alt: string }[];
  // ---- FAQ (GEO) ----
  faq: CityFaq[];
}

export const GRANADA: CityData = {
  slug: 'granada',
  city: 'Granada',
  title: 'Açaí para llevar en Granada centro · Bowls desde 5 €',
  description:
    'Acai bowls cremosos en Granada centro, Plaza de la Universidad 1. Fruta fresca del día y +15 toppings. Desde 5 €. 4,8★ con 448 reseñas. Para llevar o a domicilio.',
  canonical: 'https://www.acaiparadise.es/granada',
  eyebrow: 'Açaí Paradise · Granada',
  h1Lead: 'Açaí en',
  h1Acc: 'Granada',
  intro: [
    'El açaí en Granada que estabas buscando. En Açaí Paradise Granada hacemos acai bowls de verdad —cremosos, fríos y bien montados— en pleno centro, en la Plaza de la Universidad, a un paso de Gran Vía y la zona universitaria. Fruta fresca del día, recetas propias y más de quince toppings a elegir.',
    'El açaí es una baya de Brasil, así que esto es lo más parecido a un rincón brasileño en Granada: sin complicaciones, sin postureo. Vienes, lo montas a tu gusto y te lo bordamos al momento. ¿No te apetece moverte? Te lo llevamos a domicilio por Glovo y Uber Eats.',
  ],
  storeName: 'Açaí Paradise Granada',
  streetAddress: 'Plaza de la Universidad, 1',
  postalCode: '18001',
  zona: 'En pleno centro de Granada, en la Plaza de la Universidad, a un paso de la Catedral, Gran Vía y la zona universitaria.',
  mapsLink: 'https://maps.app.goo.gl/zxZtzb7L4WeUQ8XV6',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3178.928061797072!2d-3.604120423066428!3d37.17818054629999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fd5c3364ef13%3A0x23bfe4611f5c77c1!2sA%C3%A7a%C3%AD%20Paradise%20Granada!5e0!3m2!1ses!2ses!4v1780853789761!5m2!1ses!2ses',
  geo: { lat: 37.1781763, lng: -3.6015455 },
  glovo: 'https://glovoapp.com/es/es/granada/stores/acai-paradise-granada',
  uber: 'https://www.ubereats.com/es/store/acai-paradise/Oo67PqodW6OgC13K_QBBXQ',
  rating: '4,8',
  ratingValueSchema: '4.8',
  reviewCount: '524',
  reviewsLink: 'https://share.google/IXYaUPGBe4V8oAeAI',
  heroImg: '/assets/acai-granada-hero.webp',
  heroAlt: 'Acai bowl en la mano con el rótulo azul de Açaí Paradise Granada al fondo',
  gallery: [
    { src: '/assets/acai-granada-fachada.webp', alt: 'Local de Açaí Paradise en el centro de Granada con gente en la puerta' },
    { src: '/assets/acai-granada-plaza.webp', alt: 'Bowl de açaí en la mano con la tienda de Açaí Paradise Granada al fondo' },
    { src: '/assets/acai-granada-escaparate.webp', alt: 'Escaparate y entrada de Açaí Paradise en el centro de Granada' },
    { src: '/assets/acai-granada-bowl.webp', alt: 'Acai bowl con plátano, fresa y arándanos en Granada' },
    { src: '/assets/acai-granada-local.webp', alt: 'Neón de la palmera de Açaí Paradise en el escaparate de Granada' },
    { src: '/assets/bowls-acai-granada.webp', alt: 'Dos acai bowls con fruta fresca, granola y crema en Granada' },
  ],
  faq: [
    {
      q: '¿Dónde comer açaí en Granada?',
      a: 'En Açaí Paradise Granada, en la Plaza de la Universidad, 1, en pleno centro. Hacemos acai bowls cremosos con fruta fresca del día y toppings a elegir. Consulta el horario actualizado en nuestra ficha de Google Maps.',
    },
    {
      q: '¿Cuánto cuesta un acai bowl en Granada?',
      a: 'Los bowls de açaí empiezan desde 5 € (tamaño mini). Tenemos cuatro tamaños: mini (5 €), pequeño (6,50 €), mediano (7,90 €) y grande (9,90 €).',
    },
    {
      q: '¿Hacéis açaí a domicilio en Granada?',
      a: 'Sí. Puedes pedir nuestros acai bowls a domicilio en Granada a través de Glovo y Uber Eats, además de recogerlos en la tienda del centro.',
    },
    {
      q: '¿Qué es el açaí y qué bowls tenéis?',
      a: 'El açaí (acai) es una baya de Brasil rica en antioxidantes. La servimos en bowl con granola y fruta fresca. Tenemos cinco recetas propias —Paradise, Brasil, Tropical, Dulce y Fit—, personalizables con más de quince toppings, incluida opción sin gluten y fit.',
    },
  ],
};

export const SEVILLA: CityData = {
  slug: 'sevilla',
  city: 'Sevilla',
  title: 'Açaí para llevar en Sevilla centro · Bowls desde 5 €',
  description:
    'Acai bowls cremosos en Sevilla centro, Plaza Cristo de Burgos 9, junto a la Alfalfa. Fruta fresca del día y +15 toppings. Desde 5 €. 4,9★. Para llevar o a domicilio.',
  canonical: 'https://www.acaiparadise.es/sevilla',
  eyebrow: 'Açaí Paradise · Sevilla',
  h1Lead: 'Açaí en',
  h1Acc: 'Sevilla',
  intro: [
    'El açaí en Sevilla que estabas buscando. En Açaí Paradise Sevilla hacemos acai bowls de verdad —cremosos, fríos y bien montados— en el centro, en la Plaza Cristo de Burgos, junto a la Alfalfa y a un paso de la Encarnación (Las Setas). Fruta fresca del día, recetas propias y más de quince toppings a elegir.',
    'El açaí es una baya de Brasil, así que esto es lo más parecido a un rincón brasileño en pleno centro de Sevilla: sin complicaciones, sin postureo. Vienes, lo montas a tu gusto y te lo bordamos al momento. ¿No te apetece moverte? Te lo llevamos a domicilio por Glovo y Uber Eats.',
  ],
  storeName: 'Açaí Paradise Sevilla',
  streetAddress: 'Plaza Cristo de Burgos, 9',
  postalCode: '41003',
  zona: 'En el centro de Sevilla, en la Plaza Cristo de Burgos, junto a la Alfalfa y a un paso de la Encarnación (Las Setas).',
  mapsLink: 'https://maps.app.goo.gl/gFLrE63PyDLXMheS9',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.9019865034716!2d-5.992112923060678!3d37.39215013410679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126d4ad4f39085%3A0xc0d0e659321c5f53!2sA%C3%A7a%C3%AD%20Paradise%20Sevilla!5e0!3m2!1ses!2ses!4v1780853809556!5m2!1ses!2ses',
  geo: { lat: 37.3921459, lng: -5.989538 },
  glovo: 'https://glovoapp.com/es/es/sevilla/stores/acai-paradise-sevilla',
  uber: 'https://www.ubereats.com/es/store/acai-paradise-sevilla/FcgQBm3mXd67qH1DO9gu4w',
  rating: '5,0',
  ratingValueSchema: '5.0',
  reviewCount: '315',
  reviewsLink: 'https://share.google/3jKJpQpucrMkYyPad',
  heroImg: '/assets/acai-sevilla-hero.webp',
  heroAlt: 'Acai bowl con galleta lotus recién montado en Açaí Paradise Sevilla',
  gallery: [
    { src: '/assets/acai-sevilla-fachada.webp', alt: 'Fachada de Açaí Paradise en el centro de Sevilla' },
    { src: '/assets/acai-sevilla-barra.webp', alt: 'Mostrador de Açaí Paradise Sevilla con las pantallas para personalizar tu bowl' },
    { src: '/assets/acai-sevilla-interior.webp', alt: 'Interior de Açaí Paradise Sevilla con plantas y madera natural' },
    { src: '/assets/bowls-acai-sevilla.webp', alt: 'Dos acai bowls con fruta fresca y granola en Sevilla' },
    { src: '/assets/acai-sevilla-atardecer.webp', alt: 'Bowl de açaí con dos cucharas al atardecer en Sevilla' },
    { src: '/assets/acai-sevilla-preparacion.webp', alt: 'Preparación de un bowl de açaí con fresas frescas en Sevilla' },
  ],
  faq: [
    {
      q: '¿Dónde comer açaí en Sevilla?',
      a: 'En Açaí Paradise Sevilla, en la Plaza Cristo de Burgos, 9, en el centro (junto a la Alfalfa). Hacemos acai bowls cremosos con fruta fresca del día y toppings a elegir. Consulta el horario actualizado en nuestra ficha de Google Maps.',
    },
    {
      q: '¿Cuánto cuesta un acai bowl en Sevilla?',
      a: 'Los bowls de açaí empiezan desde 5 € (tamaño mini). Tenemos cuatro tamaños: mini (5 €), pequeño (6,50 €), mediano (7,90 €) y grande (9,90 €).',
    },
    {
      q: '¿Hacéis açaí a domicilio en Sevilla?',
      a: 'Sí. Puedes pedir nuestros acai bowls a domicilio en Sevilla a través de Glovo y Uber Eats, además de recogerlos en la tienda del centro.',
    },
    {
      q: '¿Qué es el açaí y qué bowls tenéis?',
      a: 'El açaí (acai) es una baya de Brasil rica en antioxidantes. La servimos en bowl con granola y fruta fresca. Tenemos cinco recetas propias —Paradise, Brasil, Tropical, Dulce y Fit—, personalizables con más de quince toppings, incluida opción sin gluten y fit.',
    },
  ],
};

export const CITIES: Record<string, CityData> = {
  granada: GRANADA,
  sevilla: SEVILLA,
};
