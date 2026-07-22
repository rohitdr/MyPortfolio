"use client";

import { motion } from "framer-motion";

export default function Overview({ plan }) {
  if (!plan.overview) return null;

  return (
    <section className="border-b border-white/10 bg-black py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]"
            >
              01 / Overview
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl"
            >
              What's
              <br />
              Included?
            </motion.h2>
          </div>

          {/* Right */}
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="max-w-4xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9 lg:text-xl lg:leading-10"
            >
              {plan.overview}
            </motion.p>

            {/* Stats */}
            <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-3 lg:mt-16 lg:gap-8">
              <div className="border-l-2 border-white/10 pl-5 sm:pl-6">
                <p className="text-4xl font-black sm:text-5xl">
                  {plan.pagesPerMonth}
                </p>

                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-zinc-500 sm:mt-3 sm:text-sm">
                  Pages / Month
                </p>
              </div>

              <div className="border-l-2 border-white/10 pl-5 sm:pl-6">
                <p className="text-4xl font-black sm:text-5xl">
                  {plan.support}
                </p>

                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-zinc-500 sm:mt-3 sm:text-sm">
                  Support
                </p>
              </div>

              <div className="border-l-2 border-white/10 pl-5 sm:pl-6">
                <p className="text-4xl font-black break-words sm:text-5xl">
                  {plan.reporting}
                </p>

                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-zinc-500 sm:mt-3 sm:text-sm">
                  Reporting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}