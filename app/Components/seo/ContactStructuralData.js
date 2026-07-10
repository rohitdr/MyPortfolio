import { SITE_CONFIG } from "@/app/lib/seo";


export default function ContactStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "ContactPage",

        "@id": `${SITE_CONFIG.url}/contact#page`,

        url: `${SITE_CONFIG.url}/contact`,

        name: "Contact Rohit Kumar",

        description:
          "Get in touch with Rohit Kumar for freelance projects, full-stack web development, collaborations, or job opportunities.",

        about: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },

        isPartOf: {
          "@id": `${SITE_CONFIG.url}/#website`,
        },

        inLanguage: "en",
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

            name: "Contact",

            item: `${SITE_CONFIG.url}/contact`,
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