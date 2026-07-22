"use client";

import { motion } from "framer-motion";
import { FiTrendingUp } from "react-icons/fi";

export default function Results({ results }) {
  return (
    <section className="relative border-b border-white/10 bg-black py-16 text-white sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]">
              06 / Outcomes
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              What You Can Expect.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-8"
          >
            <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              Every business starts from a different position, so outcomes vary.
              My focus is on delivering measurable improvements that strengthen
              your online presence and support long-term growth.
            </p>
          </motion.div>
        </div>

        {/* Results */}
        <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-16 md:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {results.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.06,
              }}
              className="group bg-black p-6 transition duration-300 hover:bg-white/[0.02] sm:p-8 lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-600 sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-white/20">
                  <FiTrendingUp
                    size={18}
                    className="text-zinc-600 transition duration-300 group-hover:text-white"
                  />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-tight sm:mt-8 sm:text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:mt-5 sm:text-base sm:leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}