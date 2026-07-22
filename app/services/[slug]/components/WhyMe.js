"use client";

import { motion } from "framer-motion";

export default function WhyMe({ whyMe }) {
  if (!whyMe?.points?.length) return null;

  return (
    <section className="relative border-b border-white/10 bg-black py-16 text-white sm:py-20 lg:py-32">
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
              08 / Why Work With Me
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              More Than
              <br />
              Just Delivery.
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
              I don't believe in one-size-fits-all solutions. Every project is
              approached with a focus on business goals, technical quality, and
              long-term maintainability—not just getting the work done.
            </p>
          </motion.div>
        </div>

        {/* Points */}
        <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:mt-16 md:grid-cols-2 lg:mt-24">
          {whyMe.points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="bg-black p-6 transition duration-300 hover:bg-white/[0.02] sm:p-8 lg:p-10"
            >
              <span className="text-xs text-zinc-600 sm:text-sm">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl font-semibold leading-tight sm:mt-6 sm:text-2xl">
                {point.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:mt-5 sm:text-base sm:leading-8">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        {whyMe.statement && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-4xl text-center sm:mt-16 lg:mt-24"
          >
            <h3 className="text-2xl font-light leading-relaxed text-white sm:text-3xl md:text-4xl">
              {whyMe.statement}
            </h3>
          </motion.div>
        )}
      </div>
    </section>
  );
}