// import BlogHero from "@/components/blogs/BlogsHero";
// import FeaturedBlog from "@/components/blogs/FeaturedBlog";
// import BlogGrid from "@/components/blogs/BlogsGrid";

import blogs from "./blog/[slug]/data";
import BlogsGrid from "./components/BlogGrid";
import BlogsHero from "./components/BlogsHero";
import FeaturedBlog from "./components/FeaturedBlog";

import BlogsStructuredData from "../Components/seo/BlogsStructuralData";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export const metadata = {
  title: "Technical Blogs",

  description:
    "Read practical articles on Next.js, React, Node.js, MongoDB, JavaScript, performance optimization, system design, UI/UX, and full-stack web development.",

  keywords: [
    "Next.js Blog",
    "React Blog",
    "MERN Blog",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Web Development",
    "System Design",
    "Performance",
  ],

  alternates: {
    canonical: "/blogs",
  },

  openGraph: {
    title: "Technical Blogs | Rohit Kumar",

    description:
      "Explore tutorials, guides, and practical articles about modern web development.",

    url: "/blogs",

    images: ["/og-image.webp"],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.webp"],
  },
};





export default function BlogsPage() {
  const featuredBlog =
    blogs.find((blog) => blog.featured) || blogs[0];

  return (
    <main className="pb-20 bg-black text-white">
      <BlogsStructuredData></BlogsStructuredData>
      <BlogsHero blogs={blogs} />

      <FeaturedBlog blog={featuredBlog} />

      <BlogsGrid blogs={blogs} />
    </main>
  );
}