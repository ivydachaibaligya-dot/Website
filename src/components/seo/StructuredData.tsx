import { siteConfig, absoluteUrl } from '@/config/site';
import { services, contactEmail, linkedInUrl } from '@/lib/services';

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

export default function StructuredData() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': absoluteUrl('/#organization'),
    name: siteConfig.name,
    alternateName: `${siteConfig.name} ${siteConfig.descriptor}`,
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: absoluteUrl('/icon.svg'),
    image: absoluteUrl('/opengraph-image'),
    email: contactEmail,
    sameAs: [linkedInUrl],
    areaServed: { '@type': 'Country', name: 'United States' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${siteConfig.name} Services`,
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          url: absoluteUrl(`/services#${service.id}`),
        },
      })),
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { '@id': absoluteUrl('/#organization') },
    inLanguage: 'en-US',
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
    </>
  );
}
