"use client";
import Image from "next/image";
import { FaCalendar,FaClock,FaArrowRight } from "react-icons/fa";

export default function BlogHero({ blog }) {
  return (
    <section className="border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_520px] lg:items-center">
          {/* Left */}
          <div>
            <span className="inline-flex rounded-full border border-white/15 px-4 py-1 text-xs uppercase tracking-[0.3em] text-zinc-400">
              {blog.category}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-light leading-tight text-white md:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              {blog.excerpt}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <FaCalendar size={16} />
                <span>{blog.publishedAt}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaClock size={16} />
                <span>{blog.readingTime}</span>
              </div>

              <div className="h-4 w-px bg-white/10" />

              <span>{blog.author}</span>
            </div>

            <div className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-400">
              Scroll to Read
              <FaArrowRight size={15} />
            </div>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 520px"
              className="w-full h-auto transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}