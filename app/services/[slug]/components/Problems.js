"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function Problems({ problems }) {
  return (
    <section className="relative border-b border-white/10 bg-black py-16 text-white sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]">
              02 / Challenges
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Problems I Help Solve.
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
              Every project begins by identifying the obstacles holding your
              business back. Once those are clear, we focus on solving the
              issues that create the greatest impact.
            </p>
          </motion.div>
        </div>

        {/* Problems */}
        <div className="mt-12 border-t border-white/10 sm:mt-16 lg:mt-20">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="group grid gap-5 border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.02] sm:gap-6 sm:py-8 lg:grid-cols-12 lg:gap-8 lg:py-10"
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span className="text-xs text-zinc-600 sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-xl font-semibold leading-tight sm:text-2xl">
                  {problem.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-6">
                <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                  {problem.description}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-end lg:col-span-1 lg:items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:border-white/20">
                  <FiArrowUpRight className="text-zinc-600 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}