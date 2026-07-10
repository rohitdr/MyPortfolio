import { SITE_CONFIG } from "@/app/lib/seo";


export default function ProjectStructuredData({ project }) {
  if (!project) return null;

  const jsonLd = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CreativeWork",

        "@id": `${SITE_CONFIG.url}/projects/${project.slug}#project`,

        headline: project.title,

        name: project.title,

        description: project.description,

        url: `${SITE_CONFIG.url}/projects/${project.slug}`,

        image: `${SITE_CONFIG.url}${project.image}`,

        creator: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },

        author: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },

        publisher: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },

        keywords: project.technologies.join(", "),

        genre: project.category,

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

            name: "Projects",

            item: `${SITE_CONFIG.url}/projects`,
          },

          {
            "@type": "ListItem",

            position: 3,

            name: project.title,

            item: `${SITE_CONFIG.url}/projects/${project.slug}`,
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