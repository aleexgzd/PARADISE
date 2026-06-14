const menuItems = [
  { '@type': 'MenuItem' as const, name: 'Bowl Paradise', description: 'Açaí, granola crunchy, crema paradise, yogurt, fresa, plátano, arándano', offers: { '@type': 'Offer' as const, priceCurrency: 'EUR', price: '5.00' } },
  { '@type': 'MenuItem' as const, name: 'Bowl Brasil', description: 'Açaí, granola 0% azúcar, crema cacahuete, leche condensada, plátano', offers: { '@type': 'Offer' as const, priceCurrency: 'EUR', price: '5.00' } },
  { '@type': 'MenuItem' as const, name: 'Bowl Tropical', description: 'Açaí, granola crunchy, crema de maracuyá, pudding de chía, piña, mango, kiwi', offers: { '@type': 'Offer' as const, priceCurrency: 'EUR', price: '5.00' } },
  { '@type': 'MenuItem' as const, name: 'Bowl Dulce', description: 'Açaí, granola chocolate, choco avellana, galleta lotus, leche condensada, fresa, plátano', offers: { '@type': 'Offer' as const, priceCurrency: 'EUR', price: '5.00' } },
  { '@type': 'MenuItem' as const, name: 'Bowl Fit', description: 'Açaí, granola 0%, crema cacahuete, pudding chía, proteína, fresa, plátano', offers: { '@type': 'Offer' as const, priceCurrency: 'EUR', price: '5.00' } },
];

const socialLinks = [
  'https://www.instagram.com/acaiparadise.es',
  'https://www.tiktok.com/@acaiparadise.es',
];

const menuSection = {
  '@type': 'Menu',
  hasMenuSection: {
    '@type': 'MenuSection',
    name: 'Bowls de açaí',
    hasMenuItem: menuItems,
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://acaiparadise.es/#website',
      url: 'https://acaiparadise.es',
      name: 'Açaí Paradise',
      description: 'Bowls de açaí y smoothies en Granada y Sevilla.',
      publisher: { '@id': 'https://acaiparadise.es/#org' },
      inLanguage: 'es',
    },
    {
      '@type': 'Restaurant',
      '@id': 'https://acaiparadise.es/#granada',
      name: 'Açaí Paradise Granada',
      description: 'Bowls de açaí y smoothies naturales en el centro de Granada. Plaza de la Universidad, 1.',
      url: 'https://acaiparadise.es',
      email: 'info@acaiparadise.es',
      image: 'https://acaiparadise.es/assets/837abd8c6f.webp',
      servesCuisine: ['Açaí bowls', 'Smoothies', 'Bowls de fruta'],
      priceRange: '€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Efectivo, Tarjeta, Bizum',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plaza de la Universidad, 1',
        addressLocality: 'Granada',
        addressRegion: 'Andalucía',
        postalCode: '18001',
        addressCountry: 'ES',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 37.1773, longitude: -3.5986 },
      areaServed: { '@type': 'City', name: 'Granada' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '429', bestRating: '5' },
      sameAs: socialLinks,
      parentOrganization: { '@id': 'https://acaiparadise.es/#org' },
      hasMenu: menuSection,
    },
    {
      '@type': 'Restaurant',
      '@id': 'https://acaiparadise.es/#sevilla',
      name: 'Açaí Paradise Sevilla',
      description: 'Bowls de açaí y smoothies naturales en el centro de Sevilla. Plaza Cristo de Burgos, 9.',
      url: 'https://acaiparadise.es',
      email: 'info@acaiparadise.es',
      image: 'https://acaiparadise.es/assets/144c64bb4a.webp',
      servesCuisine: ['Açaí bowls', 'Smoothies', 'Bowls de fruta'],
      priceRange: '€',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Efectivo, Tarjeta, Bizum',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plaza Cristo de Burgos, 9',
        addressLocality: 'Sevilla',
        addressRegion: 'Andalucía',
        postalCode: '41004',
        addressCountry: 'ES',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 37.3891, longitude: -5.9945 },
      areaServed: { '@type': 'City', name: 'Sevilla' },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '73', bestRating: '5' },
      sameAs: socialLinks,
      parentOrganization: { '@id': 'https://acaiparadise.es/#org' },
      hasMenu: menuSection,
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://acaiparadise.es/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué es el açaí?',
          acceptedAnswer: { '@type': 'Answer', text: 'El açaí es una baya originaria de Brasil, rica en antioxidantes. En Açaí Paradise lo servimos en bowl con granola, frutas frescas y toppings a elegir.' },
        },
        {
          '@type': 'Question',
          name: '¿Dónde está Açaí Paradise en Granada?',
          acceptedAnswer: { '@type': 'Answer', text: 'Estamos en Plaza de la Universidad, 1, en pleno centro de Granada. Consulta el horario actualizado en nuestra ficha de Google Maps.' },
        },
        {
          '@type': 'Question',
          name: '¿Dónde está Açaí Paradise en Sevilla?',
          acceptedAnswer: { '@type': 'Answer', text: 'Nuestra tienda de Sevilla está en Plaza Cristo de Burgos, 9. Consulta el horario actualizado en nuestra ficha de Google Maps.' },
        },
        {
          '@type': 'Question',
          name: '¿Cuánto cuesta un bowl de açaí?',
          acceptedAnswer: { '@type': 'Answer', text: 'Los bowls empiezan desde 5 € (tamaño mini). Tenemos cuatro tamaños: mini (5 €), pequeño (6,50 €), mediano (7,90 €) y grande (9,90 €).' },
        },
        {
          '@type': 'Question',
          name: '¿Tenéis opciones sin gluten o fit?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sí. Tenemos granola sin gluten y el Bowl Fit con granola 0% azúcar, proteína y pudding de chía. Puedes personalizar cualquier bowl con los toppings que prefieras.' },
        },
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://acaiparadise.es/#org',
      name: 'Açaí Paradise',
      url: 'https://acaiparadise.es',
      logo: 'https://acaiparadise.es/assets/logo-full-blue.png',
      email: 'info@acaiparadise.es',
      sameAs: socialLinks,
    },
  ],
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
