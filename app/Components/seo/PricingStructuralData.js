import { SITE_CONFIG } from "@/app/lib/seo";


export default function PricingStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebPage",

        "@id": `${SITE_CONFIG.url}/pricing#page`,

        url: `${SITE_CONFIG.url}/pricing`,

        name: "Pricing",

        description:
          "Explore website development packages for startups, businesses, and custom web applications built with Next.js, React, Node.js, and MongoDB.",

        isPartOf: {
          "@id": `${SITE_CONFIG.url}/#website`,
        },

        about: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },
      },

      {
        "@type": "BreadcrumbList",

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

            name: "Pricing",

            item: `${SITE_CONFIG.url}/pricing`,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}