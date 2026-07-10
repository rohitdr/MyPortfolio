"use client";

import { motion } from "framer-motion";

export default function Overview({ project }) {
  return (
    <section
      id="overview"
      className="border-t border-white/10 py-20 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            Overview
          </p>

          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl lg:text-7xl">
            Project
            <br />
            Overview
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 lg:text-lg lg:leading-9">
            {project.overview}
          </p>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-[28px] border border-white/10 bg-zinc-950 p-6 sm:p-8 lg:rounded-[36px] lg:p-10"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
            Quick Facts
          </p>

          <div className="mt-8 space-y-6">

            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-zinc-500">Client</span>

              <span className="font-semibold text-right">
                {project.title}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-zinc-500">Industry</span>

              <span className="font-semibold text-right">
                {project.category}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-zinc-500">Year</span>

              <span className="font-semibold">
                {project.year}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-zinc-500">Services</span>

              <span className="font-semibold text-right">
                UI/UX • Development • SEO
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-zinc-500">Platform</span>

              <span className="font-semibold">
                Web
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-zinc-500">Status</span>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-400">
                Live
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}