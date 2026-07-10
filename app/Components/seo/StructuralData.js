import { SITE_CONFIG } from "@/app/lib/seo";


export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_CONFIG.url}/#person`,
        name: SITE_CONFIG.author.name,
        url: SITE_CONFIG.url,
        image: `${SITE_CONFIG.url}${SITE_CONFIG.author.image}`,
        jobTitle: SITE_CONFIG.author.jobTitle,
        description: SITE_CONFIG.author.bio,

        email: SITE_CONFIG.contact.email,

        sameAs: [
          SITE_CONFIG.social.github,
          SITE_CONFIG.social.linkedin,
          SITE_CONFIG.social.portfolio,
        ].filter(Boolean),
      },

      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        url: SITE_CONFIG.url,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },

        inLanguage: "en",
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