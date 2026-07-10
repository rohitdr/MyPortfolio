import React from 'react'
import BlogClient from './BlogClient'
import blogs from './data';
import BlogStructuredData from '@/app/Components/seo/BlogStructuralData';

export async function generateMetadata({ params }) {
  const slug=await params
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return {};
  }

  return {
    title: blog.seo.title,

    description: blog.seo.description,

    keywords: blog.seo.keywords,

    alternates: {
      canonical: `/blogs/blog/${blog.slug}`,
    },

    openGraph: {
      type: "article",

      url: `/blogs/${blog.slug}`,

      title: blog.seo.title,

      description: blog.seo.description,

      publishedTime: blog.publishedAt,

      modifiedTime: blog.updatedAt,

      authors: [blog.author],

      tags: blog.tags,

      images: [
        {
          url: blog.coverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: blog.seo.title,

      description: blog.seo.description,

      images: [blog.coverImage],
    },
  };
}
export default async function page({params}) {
    const { slug } = await params;
  
    const blog = blogs.find((item) => item.slug === slug);
  
    if (!blog) {
      notFound();
    }
  
    const currentIndex = blogs.findIndex(
      (item) => item.slug === slug
    );
  
    const previous =
      currentIndex > 0 ? blogs[currentIndex - 1] : null;
  
    const next =
      currentIndex < blogs.length - 1
        ? blogs[currentIndex + 1]
        : null;
  
    const relatedBlogs = blogs
      .filter((item) => item.slug !== slug)
      .filter((item) => item.category === blog.category)
      .slice(0, 3);
  return (
    <>
    <BlogStructuredData blog={blog}></BlogStructuredData>
    <BlogClient blog={blog} next={next} previous={previous} relatedBlogs={relatedBlogs}></BlogClient>
    </>
  )
}
