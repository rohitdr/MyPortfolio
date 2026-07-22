"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function Deliverables({ deliverables }) {
  if (!deliverables?.length) return null;

  return (
    <section className="border-b border-white/10 bg-black py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]">
              02 / Deliverables
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Everything
              <br />
              Included.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              Every month you'll receive a structured set of deliverables
              designed to improve your website, strengthen local visibility,
              and create sustainable organic growth.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:mt-24 lg:gap-10">
          {deliverables.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="rounded-sm border border-white/10 p-6 transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.02] sm:p-8 lg:p-10"
            >
              <h3 className="text-xl font-semibold sm:text-2xl">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500 sm:mt-4 sm:text-base sm:leading-8">
                {group.description}
              </p>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10">
                      <FiCheck size={12} className="text-zinc-300" />
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