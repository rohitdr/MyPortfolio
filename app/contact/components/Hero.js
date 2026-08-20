"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-24 -translate-x-1/2">
        <div className="h-[420px] w-[420px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      {/* Background Typography */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.15 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <h2 className="text-[20vw] relative font-black tracking-tight">
          HIRE ME
        </h2>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.45em] text-xs text-zinc-500"
        >
          Open to MERN Opportunities
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9]"
        >
          Looking for
          <br />
          My Next
          <br />
          Opportunity.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-2xl text-lg lg:text-xl leading-9 text-zinc-400"
        >
          I'm a MERN Stack Developer focused on building scalable, responsive,
          and production-ready web applications using React, Next.js, Node.js,
          Express, and MongoDB. I'm currently looking for an opportunity where
          I can contribute, learn, and grow as a developer.
        </motion.p>

        {/* Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >

          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-zinc-500">
              Role
            </p>
            <h3 className="mt-3 text-3xl font-black">
              MERN Developer
            </h3>
          </div>

          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-zinc-500">
              Looking For
            </p>
            <h3 className="mt-3 text-3xl font-black">
              Full-Time Role
            </h3>
          </div>

          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-zinc-500">
              Availability
            </p>
            <h3 className="mt-3 text-3xl font-black">
              Open to Work
            </h3>
          </div>

        </motion.div>

        {/* CTA */}
        <motion.a
          href="#contact-options"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-20 inline-flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group"
        >
          <span className="uppercase tracking-[0.25em] text-xs">
            Let's Connect
          </span>

          <FaArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
        </motion.a>

      </div>
    </section>
  );
}