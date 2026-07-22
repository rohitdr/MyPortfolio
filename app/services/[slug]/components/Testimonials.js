"use client";

import { motion } from "framer-motion";

export default function Testimonials({ testimonials }) {
  if (!testimonials?.length) return null;

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
              09 / Testimonials
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Trusted By
              <br />
              Clients.
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
              Every project is built around communication, quality, and
              measurable business value. Here's what clients have shared about
              working with me.
            </p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 space-y-6 sm:mt-16 sm:space-y-8 lg:mt-24 lg:space-y-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="border border-white/10 p-6 transition duration-300 hover:border-white/20 sm:p-8 lg:p-10"
            >
              {/* Quote */}
              <p className="text-xl leading-relaxed text-white sm:text-2xl md:text-3xl">
                “{item.quote}”
              </p>

              {/* Footer */}
              <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-white">
                    {item.name}
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    {item.role}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 sm:text-sm">
                    {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}