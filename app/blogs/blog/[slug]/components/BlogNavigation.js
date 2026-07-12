"use client";

import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function BlogNavigation({
  previous,
  next,
}) {
  if (!previous && !next) return null;

  return (
    <section className="mx-auto mt-24 max-w-7xl px-6">
      <div className="grid gap-6 border-t border-white/10 pt-10 md:grid-cols-2">
        {/* Previous */}
        <div>
          {previous && (
            <Link
              href={`/blogs/blog/${previous.slug}`}
              className="group block rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-zinc-500">
                <FaArrowLeft size={14} />
                Previous Article
              </div>

              <h3 className="mt-5 text-2xl font-light leading-snug text-white transition group-hover:text-zinc-200">
                {previous.title}
              </h3>
            </Link>
          )}
        </div>

        {/* Next */}
        <div>
          {next && (
            <Link
              href={`/blogs/blog/${next.slug}`}
              className="group block rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-left transition hover:border-white/20 md:text-right"
            >
              <div className="flex items-center justify-start gap-2 text-xs uppercase tracking-[0.3em] text-zinc-500 md:justify-end">
                Next Article
                <FaArrowRight size={14} />
              </div>

              <h3 className="mt-5 text-2xl font-light leading-snug text-white transition group-hover:text-zinc-200">
                {next.title}
              </h3>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}