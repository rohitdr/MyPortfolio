"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendar, FaClock } from "react-icons/fa";

export default function RelatedBlogs({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section className="mx-auto mt-28 max-w-7xl px-6">
      {/* Heading */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Continue Reading
        </p>

        <h2 className="mt-3 text-4xl font-light text-white">
          Related Articles
        </h2>
      </div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition hover:border-white/20"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                {blog.category}
              </span>

              <h3 className="mt-4 text-2xl font-light leading-snug text-white transition group-hover:text-zinc-200">
                {blog.title}
              </h3>

              <p className="mt-4 line-clamp-3 leading-7 text-zinc-400">
                {blog.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-zinc-500">
                <span className="flex items-center gap-2">
                  <FaCalendar size={15} />
                  {blog.publishedAt}
                </span>

                <span className="flex items-center gap-2">
                  <FaClock size={15} />
                  {blog.readingTime}
                </span>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-zinc-400 transition group-hover:text-white">
                Read Article
                <FaArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}