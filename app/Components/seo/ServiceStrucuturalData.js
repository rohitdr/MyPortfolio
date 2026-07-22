import { SITE_CONFIG } from "@/app/lib/seo";

export default function ServiceStructuredData({ service }) {
  if (!service) return null;

  const hasFaq =
    service.faqs && service.faqs.length > 0;

  const graph = [
    {
      "@type": "Service",
      "@id": `${SITE_CONFIG.url}/services/${service.slug}#service`,

      name: service.title,

      description:
        service.seo?.description ||
        service.heroDescription,

      serviceType: service.title,

      url: `${SITE_CONFIG.url}/services/${service.slug}`,

      areaServed: {
        "@type": "Country",
        name: "India",
      },

      provider: {
        "@id": `${SITE_CONFIG.url}/#organization`,
      },

      image: `${SITE_CONFIG.url}${service.image || "/images/services/default.jpg"}`,

      offers: service.price
        ? {
            "@type": "Offer",
            price: service.price,
            priceCurrency: "INR",
          }
        : undefined,
    },

    {
      "@type": "WebPage",

      "@id": `${SITE_CONFIG.url}/services/${service.slug}`,

      url: `${SITE_CONFIG.url}/services/${service.slug}`,

      name: service.seo?.title || service.title,

      description:
        service.seo?.description ||
        service.heroDescription,

      isPartOf: {
        "@id": `${SITE_CONFIG.url}/#website`,
      },

      primaryImageOfPage: service.image
        ? {
            "@type": "ImageObject",
            url: `${SITE_CONFIG.url}${service.image}`,
          }
        : undefined,
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${SITE_CONFIG.url}/services/${service.slug}#breadcrumb`,

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_CONFIG.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_CONFIG.url}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: `${SITE_CONFIG.url}/services/${service.slug}`,
        },
      ],
    },
  ];

  if (hasFaq) {
    graph.push({
      "@type": "FAQPage",

      "@id": `${SITE_CONFIG.url}/services/${service.slug}#faq`,

      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",

        name: faq.question,

        acceptedAnswer: {
          "@type": "Answer",

          text: faq.answer,
        },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}