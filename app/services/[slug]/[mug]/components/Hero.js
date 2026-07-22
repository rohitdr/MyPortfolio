"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiChevronRight,
} from "react-icons/fi";

export default function Hero({ service, plan }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black text-white">
      {/* Background Word */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <h2 className="select-none text-[28vw] font-black tracking-tight sm:text-[22vw] lg:text-[18vw]">
          {plan.name.toUpperCase()}
        </h2>
      </motion.div>

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[140px] sm:h-[450px] sm:w-[450px] lg:h-[600px] lg:w-[600px]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-32 lg:pt-40">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 sm:text-sm"
        >
          <Link
            href="/services"
            className="transition hover:text-white"
          >
            Services
          </Link>

          <FiChevronRight size={14} />

          <Link
            href={`/services/${service.slug}`}
            className="transition hover:text-white"
          >
            {service.title}
          </Link>

          <FiChevronRight size={14} />

          <span className="text-white">
            {plan.name}
          </span>
        </motion.div>

        {/* Hero */}
        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]"
            >
              {service.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl font-black leading-none tracking-tight sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {plan.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9"
            >
              {plan.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap"
            >
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-3 border border-white bg-white px-6 py-4 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-white sm:w-auto sm:px-8 sm:text-sm"
              >
                Get Started
                <FiArrowRight />
              </Link>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex w-full items-center justify-center gap-3 border border-white/10 px-6 py-4 text-xs uppercase tracking-[0.25em] transition hover:border-white sm:w-auto sm:px-8 sm:text-sm"
              >
                View Service
              </Link>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="rounded-sm border border-white/10 bg-white/[0.02] p-6 sm:p-8 lg:col-span-5"
          >
            <div className="border-b border-white/10 pb-6 sm:pb-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
                Monthly Investment
              </p>

              <h2 className="mt-4 text-5xl font-black sm:mt-5 sm:text-6xl">
                {plan.price}
              </h2>

              <p className="mt-2 text-sm text-zinc-500 sm:text-base">
                / {plan.period}
              </p>
            </div>

            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {plan.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10">
                    <FiCheck
                      size={12}
                      className="text-zinc-300"
                    />
                  </div>

                  <span className="text-sm leading-7 text-zinc-300 sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 sm:mt-10">
              <p className="text-sm text-zinc-500">
                Best For
              </p>

              <p className="mt-2 text-base leading-7 text-white sm:text-lg">
                {plan.bestFor}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}