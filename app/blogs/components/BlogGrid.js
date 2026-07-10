"use client";

import { motion } from "framer-motion";
import BlogCard from "./BlogCard";

export default function BlogsGrid({ blogs = [] }) {
  if (!blogs.length) return null;

  const featuredBlog = blogs.find((blog) => blog.featured);

  const remainingBlogs = blogs.filter(
    (blog) => blog.id !== featuredBlog?.id
  );

  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-28">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
          Latest Articles
        </p>

        <h2 className="mt-4 text-3xl font-light text-white sm:text-4xl">
          Explore More Articles
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
          Practical guides, tutorials, and insights from real-world
          projects covering React, Next.js, Node.js, MongoDB,
          system design, performance optimization, and modern web
          development.
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {remainingBlogs.map((blog, index) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}