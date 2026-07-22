"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function Hero({ service }) {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden border-b border-white/10 bg-black text-white">
      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <h2 className="select-none text-[34vw] font-black uppercase tracking-tight sm:text-[28vw] lg:text-[22vw]">
          {service.backgroundText || service.shortTitle}
        </h2>
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[100px] sm:h-[350px] sm:w-[350px] sm:blur-[140px] lg:h-[500px] lg:w-[500px] lg:blur-[180px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-36">
        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:mb-8 sm:text-xs sm:tracking-[0.4em]"
        >
          {service.badge || "Professional Service"}
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="max-w-6xl font-black leading-[0.9] tracking-tight"
        >
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[7rem]">
            {service.heroTitle}
          </span>

          {service.heroHighlight && (
            <span className="mt-2 block text-4xl text-zinc-600 sm:text-5xl md:text-6xl lg:text-[7rem]">
              {service.heroHighlight}
            </span>
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:mt-8 sm:text-lg lg:mt-10 lg:text-xl"
        >
          {service.heroDescription}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5 lg:mt-12"
        >
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-3 border border-white px-6 py-4 text-xs font-medium uppercase tracking-[0.25em] transition hover:bg-white hover:text-black sm:w-auto sm:text-sm"
          >
            Start Project
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="#deliverables"
            className="inline-flex w-full items-center justify-center border border-white/10 px-6 py-4 text-xs uppercase tracking-[0.25em] text-zinc-400 transition hover:border-white/30 hover:text-white sm:w-auto sm:text-sm"
          >
            Explore Service
          </Link>
        </motion.div>

        {/* Stats */}
        {service.stats?.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-14 grid grid-cols-2 gap-8 border-white/10 pt-8 sm:mt-16 sm:gap-10 lg:mt-24 lg:grid-cols-4 lg:pt-10"
          >
            {service.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-light text-white sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs sm:tracking-[0.3em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.35em] text-zinc-500 lg:block"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}