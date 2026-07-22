"use client";

import { motion } from "framer-motion";

export default function Overview({ overview }) {
  return (
    <section className="relative border-b border-white/10 bg-black py-16 text-white sm:py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:gap-14 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]">
            01 / Overview
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
            {overview.title}
          </h2>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="space-y-6 sm:space-y-8 lg:col-span-8"
        >
          <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">
            {overview.description}
          </p>

          {overview.paragraphs?.map((paragraph, index) => (
            <p
              key={index}
              className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9"
            >
              {paragraph}
            </p>
          ))}

          {overview.highlights?.length > 0 && (
            <div className="grid gap-5 pt-6 sm:grid-cols-2 sm:gap-6 sm:pt-8 lg:pt-10">
              {overview.highlights.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-white/10 pt-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-400 sm:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}