"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMessageCircle,
  FiMail,
} from "react-icons/fi";

export default function CTA({ service, plan }) {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-40">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <h2 className="select-none text-[24vw] font-black tracking-tight sm:text-[20vw]">
          {plan.name.toUpperCase()}
        </h2>
      </motion.div>

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-[140px] sm:h-[450px] sm:w-[450px] lg:h-[550px] lg:w-[550px]" />

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-10">
        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]"
        >
          Ready to Get Started?
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-5 text-3xl font-black leading-tight tracking-tight sm:mt-6 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Grow Your Business
          <br />
          with the {plan.name} Plan.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9"
        >
          Start with a transparent monthly plan designed to improve your online
          visibility, attract more customers, and build long-term growth for
          your business.
        </motion.p>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 sm:mt-12"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
            Starting From
          </p>

          <h3 className="mt-3 text-5xl font-black sm:text-6xl lg:text-7xl">
            {plan.price}
          </h3>

          <p className="mt-2 text-sm text-zinc-500 sm:text-base">
            / {plan.period}
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5"
        >
          <Link
            href={`/contact?service=${service.slug}&plan=${plan.slug}`}
            className="inline-flex w-full items-center justify-center gap-3 border border-white bg-white px-6 py-4 text-xs uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-white sm:w-auto sm:px-8 sm:text-sm"
          >
            Start This Plan
            <FiArrowRight />
          </Link>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-3 border border-white/10 px-6 py-4 text-xs uppercase tracking-[0.25em] transition hover:border-white sm:w-auto sm:px-8 sm:text-sm"
          >
            <FiMessageCircle />
            Free Consultation
          </Link>

          <Link
            href="mailto:hello@example.com"
            className="inline-flex w-full items-center justify-center gap-3 border border-white/10 px-6 py-4 text-xs uppercase tracking-[0.25em] transition hover:border-white sm:w-auto sm:px-8 sm:text-sm"
          >
            <FiMail />
            Email Me
          </Link>
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 border-t border-white/10 pt-8 sm:mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-2 gap-4 text-center text-[10px] uppercase tracking-[0.2em] text-zinc-500 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 sm:text-sm sm:tracking-[0.25em]">
            <span>No Long-Term Contracts</span>
            <span>Transparent Pricing</span>
            <span>Monthly SEO Improvements</span>
            <span>Direct Communication</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}