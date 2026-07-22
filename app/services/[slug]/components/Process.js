"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

export default function Process({ process }) {
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
              05 / Process
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              How We Work Together.
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
              Every project follows a structured workflow designed to keep you
              informed from discovery to delivery. No guesswork, no surprises—
              just a transparent process focused on quality results.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mt-12 sm:mt-16 lg:mt-24">
          {process.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="grid gap-5 border-t border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-6 sm:py-8 lg:grid-cols-12 lg:gap-8 lg:py-10"
            >
              {/* Step Number */}
              <div className="lg:col-span-2">
                <p className="text-4xl font-black text-zinc-800 sm:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-xl font-semibold leading-tight sm:text-2xl">
                  {step.title}
                </h3>

                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:mt-3 sm:text-xs">
                  {step.duration}
                </p>
              </div>

              {/* Description */}
              <div className="lg:col-span-5">
                <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                  {step.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-end lg:col-span-1 lg:items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-white/20">
                  <FiArrowDownRight
                    size={18}
                    className="text-zinc-600 transition duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-white"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}