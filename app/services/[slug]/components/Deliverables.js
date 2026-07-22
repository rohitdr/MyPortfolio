"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function Deliverables({ deliverables }) {
  return (
    <section
      id="deliverables"
      className="relative border-b border-white/10 bg-black py-16 text-white sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]">
              04 / Deliverables
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              What's Included.
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
              Every project follows a structured process with clearly defined
              deliverables. You'll always know what's included, what's being
              worked on, and what will be delivered.
            </p>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="mt-12 space-y-12 sm:mt-16 sm:space-y-14 lg:mt-24 lg:space-y-16">
          {deliverables.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="grid gap-8 border-t border-white/10 pt-8 sm:gap-10 sm:pt-10 lg:grid-cols-12 lg:gap-12"
            >
              {/* Left */}
              <div className="lg:col-span-4">
                <span className="text-xs text-zinc-600 sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-3 text-2xl font-semibold leading-tight sm:mt-4 sm:text-3xl">
                  {section.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                  {section.description}
                </p>
              </div>

              {/* Right */}
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-8">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-white/10 pb-4 sm:gap-4 sm:pb-5"
                  >
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/10">
                      <FiCheck size={13} />
                    </div>

                    <span className="text-sm leading-7 text-zinc-300 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}