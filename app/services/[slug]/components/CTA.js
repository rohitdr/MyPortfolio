"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

export default function CTA({ cta }) {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white sm:py-20 lg:py-40">
      {/* Background Word */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <h2 className="select-none text-[32vw] font-black tracking-tight sm:text-[24vw] lg:text-[22vw]">
          {cta.background || "NEXT"}
        </h2>
      </motion.div>

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[120px] sm:h-[350px] sm:w-[350px] lg:h-[500px] lg:w-[500px] lg:blur-[180px]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]"
        >
          13 / Let's Work Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-4xl font-black leading-[0.95] tracking-tight sm:mt-8 sm:text-5xl md:text-6xl lg:text-8xl"
        >
          {cta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9 lg:mt-10"
        >
          {cta.description}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-5 lg:mt-14"
        >
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-3 border border-white bg-white px-6 py-4 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-white sm:w-auto sm:px-8"
          >
            Start Your Project
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="mailto:hello@example.com"
            className="inline-flex w-full items-center justify-center gap-3 border border-white/10 px-6 py-4 text-xs uppercase tracking-[0.25em] transition hover:border-white sm:w-auto sm:px-8"
          >
            <FiMail />
            Email Me
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-3 border border-white/10 px-6 py-4 text-xs uppercase tracking-[0.25em] transition hover:border-white sm:w-auto sm:px-8"
          >
            <FiMessageCircle />
            Schedule a Call
          </Link>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-16 border-t border-white/10 pt-8 sm:mt-20 sm:pt-10 lg:mt-24"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 sm:text-xs sm:tracking-[0.35em]">
            Available For Freelance • Contract • Long-Term Partnerships
          </p>
        </motion.div>
      </div>
    </section>
  );
}