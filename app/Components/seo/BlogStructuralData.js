import { SITE_CONFIG } from "@/app/lib/seo";


export default function BlogStructuredData({ blog }) {
  if (!blog) return null;

  const wordCount = blog.content
    ?.filter((item) => item.text)
    .reduce((count, item) => count + item.text.split(/\s+/).length, 0);

  const hasFaq = blog.faq && blog.faq.length > 0;

  const graph = [
    {
      "@type": "BlogPosting",
      "@id": `${SITE_CONFIG.url}/blogs/blog/${blog.slug}#article`,

      headline: blog.title,

      description: blog.seo.description,

      image: `${SITE_CONFIG.url}${blog.coverImage}`,

      datePublished: blog.publishedAt,

      dateModified: blog.updatedAt,

      wordCount,

      inLanguage: "en",

      url: `${SITE_CONFIG.url}/blogs/${blog.slug}`,

      keywords: blog.seo.keywords.join(", "),

      articleSection: blog.category,

      author: {
        "@id": `${SITE_CONFIG.url}/#person`,
      },

      publisher: {
        "@id": `${SITE_CONFIG.url}/#person`,
      },

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}`,
      },
    },

    {
      "@type": "BreadcrumbList",

      "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}#breadcrumb`,

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
          name: "Blogs",
          item: `${SITE_CONFIG.url}/blogs`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Blog",
          item: `${SITE_CONFIG.url}/blog`,
        },

        {
          "@type": "ListItem",
          position: 4,
          name: blog.title,
          item: `${SITE_CONFIG.url}/blogs/blog/${blog.slug}`,
        },
      ],
    },
  ];

  if (hasFaq) {
    graph.push({
      "@type": "FAQPage",

      "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}#faq`,

      mainEntity: blog.faq.map((item) => ({
        "@type": "Question",

        name: item.question,

        acceptedAnswer: {
          "@type": "Answer",

          text: item.answer,
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