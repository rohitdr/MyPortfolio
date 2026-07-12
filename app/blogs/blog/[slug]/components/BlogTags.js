"use client";

import Link from "next/link";

export default function BlogTags({ tags = [] }) {
  if (!tags.length) return null;

  return (
    <section className="mx-auto mt-24 max-w-4xl px-6">
      <div className="border-t border-white/10 pt-10">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-zinc-500">
          Topics
        </p>

        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Link
              key={tag}
              // href={`/blogs?tag=${encodeURIComponent(tag)}`}
              href={`/blogs`}
              className="
                rounded-full
                border
                border-white/10
                px-4
                py-2
                text-sm
                text-zinc-400
                transition-all
                duration-300
                hover:border-white
                hover:text-white
                hover:bg-white/5
              "
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}