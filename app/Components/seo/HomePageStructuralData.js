import { SITE_CONFIG } from "@/app/lib/seo";


export default function HomeStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.url}/#homepage`,
        url: SITE_CONFIG.url,
        name: "Rohit Kumar | Full Stack Developer",
        description: SITE_CONFIG.description,

        isPartOf: {
          "@id": `${SITE_CONFIG.url}/#website`,
        },

        about: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },

        primaryImageOfPage: {
          "@id": `${SITE_CONFIG.url}/#primaryimage`,
        },
      },

      {
        "@type": "ImageObject",
        "@id": `${SITE_CONFIG.url}/#primaryimage`,
        url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_CONFIG.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_CONFIG.url,
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