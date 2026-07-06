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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.45em] text-xs text-zinc-500"
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9]"
        >
          Let's Build
          <br />
          Something
          <br />
          Amazing.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-2xl text-lg lg:text-xl leading-9 text-zinc-400"
        >
          Whether you need a business website, portfolio, or a custom web
          application, I'd love to hear about your idea. Let's create something
          modern, fast, and built for growth.
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
              Response Time
            </p>
            <h3 className="mt-3 text-3xl font-black">
              &lt; 24 Hours
            </h3>
          </div>

          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-zinc-500">
              Location
            </p>
            <h3 className="mt-3 text-3xl font-black">
              Punjab, India
            </h3>
          </div>

          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-zinc-500">
              Availability
            </p>
            <h3 className="mt-3 text-3xl font-black">
              Open for Projects
            </h3>
          </div>
        </motion.div>

        <motion.a
          href="#contact-options"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-20 inline-flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group"
        >
          <span className="uppercase tracking-[0.25em] text-xs">
            Get In Touch
          </span>

          <FaArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
        </motion.a>

      </div>
    </section>
  );
}