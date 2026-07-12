"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";

export default function BlogCard({ blog, index = 0 }) {
  if (!blog) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="group"
    >
      <Link href={`/blogs/blog/${blog.slug}`}>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10">
          <Image
            src={blog.thumbnail || blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-white backdrop-blur">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
            <span>{blog.publishedAt}</span>

            <span>•</span>

            <span className="flex items-center gap-2">
              <FaClock size={11} />
              {blog.readingTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-4 text-2xl font-light leading-tight text-white transition group-hover:text-zinc-300">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="mt-4 line-clamp-3 leading-8 text-zinc-400">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-sm text-zinc-500">
              {blog.author}
            </p>

            <span className="flex items-center gap-2 text-sm font-medium text-white transition group-hover:gap-3">
              Read
              <FaArrowRight size={13} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}