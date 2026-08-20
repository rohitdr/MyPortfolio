"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";

export default function FeaturedBlog({ blog }) {
  if (!blog) return null;

  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-20 sm:px-6 lg:mt-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]"
      >
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <Link
            href={`/blogs/${blog.slug}`}
            className="group relative overflow-hidden bg-zinc-950"
          >
            <Image
              src={blog.thumbnail || blog.coverImage}
              alt={blog.title}
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute left-6 top-6">
              <span className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white backdrop-blur">
                Featured
              </span>
            </div>
          </Link>

          {/* Content */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
              {blog.category}
            </p>

            <h2 className="mt-5 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
              {blog.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-zinc-400 lg:text-lg">
              {blog.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-zinc-500">
              <span>{blog.author}</span>

              <span>•</span>

              <span>{blog.publishedAt}</span>

              <span>•</span>

              <span className="flex items-center gap-2">
                <FaClock size={13} />
                {blog.readingTime}
              </span>
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {blog.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href={`/blogs/blog/${blog.slug}`}
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.03]"
              >
                Read Article
                <FaArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}