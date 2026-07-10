"use client";

import { motion } from "framer-motion";

export default function BlogsHero({blogs}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-28 text-center sm:px-6 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs"
        >
          Insights & Articles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-5 max-w-5xl text-4xl font-light leading-tight text-white sm:text-5xl lg:text-7xl"
        >
          Thoughts on Building
          <br />
          Modern Web Experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
        >
          Articles about modern web development, scalable backend systems,
          UI/UX design, performance optimization, Next.js, React,
          MongoDB, and everything I learn while building real-world
          applications.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8"
        >
          <div>
            <p className="text-3xl font-light text-white">{blogs?.length}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-zinc-500">
              Articles
            </p>
          </div>

          <div className="h-10 w-px bg-white/10" />

          <div>
            <p className="text-3xl font-light text-white">8</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-zinc-500">
              Categories
            </p>
          </div>

          <div className="h-10 w-px bg-white/10" />

          <div>
            <p className="text-3xl font-light text-white">100%</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-zinc-500">
              Practical
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}