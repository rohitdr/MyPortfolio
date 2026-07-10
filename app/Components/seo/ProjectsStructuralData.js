import { SITE_CONFIG } from "@/app/lib/seo";


export default function ProjectsStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_CONFIG.url}/projects#webpage`,
        url: `${SITE_CONFIG.url}/projects`,
        name: "Projects | Rohit Kumar",
        description:
          "Explore modern web applications, full-stack projects, and UI/UX case studies built with Next.js, React, Node.js, Express, MongoDB, and Tailwind CSS.",

        isPartOf: {
          "@id": `${SITE_CONFIG.url}/#website`,
        },

        about: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_CONFIG.url}/projects#breadcrumb`,
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
            name: "Projects",
            item: `${SITE_CONFIG.url}/projects`,
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