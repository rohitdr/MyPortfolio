import blogs from "@/app/blogs/blog/[slug]/data";
import { SITE_CONFIG } from "@/app/lib/seo";



export default function BlogsStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${SITE_CONFIG.url}/blogs#blog`,
        url: `${SITE_CONFIG.url}/blogs`,
        name: "Technical Blog | Rohit Kumar",
        description:
          "Technical articles covering Next.js, React, Node.js, Express, MongoDB, JavaScript, system design, performance optimization, and modern web development.",

        inLanguage: "en",

        publisher: {
          "@id": `${SITE_CONFIG.url}/#person`,
        },

        blogPost: blogs.map((blog) => ({
          "@type": "BlogPosting",
          "@id": `${SITE_CONFIG.url}/blogs/${blog.slug}`,
          headline: blog.title,
          url: `${SITE_CONFIG.url}/blogs/${blog.slug}`,
        })),
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_CONFIG.url}/blogs#breadcrumb`,
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