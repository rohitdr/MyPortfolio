"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BlogCTA() {
  return (
    <section className="mx-auto mt-4  max-w-7xl px-4 pb-16 sm:mt-20 sm:px-6 sm:pb-20 lg:mt-28 lg:pb-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-transparent to-white/[0.02]">
        <div className="mx-auto max-w-3xl px-6 py-12 text-center sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
            What's Next?
          </p>

          <h2 className="mt-4 text-3xl font-light leading-tight text-white sm:mt-5 sm:text-4xl lg:mt-6 lg:text-5xl">
            Like the way I build products?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
            I design and develop modern web applications focused on performance,
            scalability, and exceptional user experience. Explore my work or
            let's discuss your next project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/projects"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-[1.02] sm:w-auto sm:px-7"
            >
              View Projects
              <FaArrowRight size={14} />
            </Link>

            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-white hover:bg-white/5 sm:w-auto sm:px-7"
            >
              Let's Work Together
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}