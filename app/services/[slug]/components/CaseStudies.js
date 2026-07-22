"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function CaseStudies({ caseStudies }) {
  if (!caseStudies?.length) return null;

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
              07 / Case Studies
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Real Projects.
              <br />
              Real Results.
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
              Every project is different. These examples show how strategy,
              execution, and technical expertise helped solve real business
              challenges.
            </p>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="mt-12 border-t border-white/10 sm:mt-16 lg:mt-24">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <Link
                href={study.href}
                className="group grid gap-6 border-b border-white/10 py-8 transition duration-300 hover:bg-white/[0.02] sm:gap-8 sm:py-10 lg:grid-cols-12"
              >
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-xs text-zinc-600 sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-semibold leading-snug sm:text-2xl">
                    {study.title}
                  </h3>

                  <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
                    {study.category}
                  </p>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                    {study.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-400 sm:text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metric + Arrow */}
                <div className="flex items-center justify-between pt-2 lg:col-span-2 lg:flex-col lg:items-end lg:justify-between lg:pt-0">
                  {study.metric ? (
                    <div className="text-left lg:text-right">
                      <p className="text-2xl font-light sm:text-3xl">
                        {study.metric}
                      </p>

                      <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
                        {study.metricLabel}
                      </p>
                    </div>
                  ) : (
                    <div />
                  )}

                  <FiArrowUpRight
                    size={22}
                    className="text-zinc-700 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white lg:mt-10"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}