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
          WORK
        </h2>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 lg:pt-40 lg:pb-32">

        {/* Label */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.45em] text-xs text-zinc-500"
        >
          Selected Projects
        </motion.p>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9]"
        >
          Building
          <br />
          Real-World
          <br />
          Applications.
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-2xl text-lg lg:text-xl leading-9 text-zinc-400"
        >
          A selection of projects I've built using the MERN stack and modern
          web technologies. Each project demonstrates my approach to building
          responsive interfaces, scalable APIs, database-driven applications,
          and production-ready web experiences.
        </motion.p>

        {/* Tech Stack */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10"
        >
          {[
            ["React", "Frontend"],
            ["Next.js", "Full Stack"],
            ["Node.js", "Runtime"],
            ["Express", "Backend"],
            ["MongoDB", "Database"],
            ["Socket.IO", "Real-Time"],
          ].map(([title, subtitle]) => (
            <div key={title}>
              <h3 className="text-2xl lg:text-3xl font-black">
                {title}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                {subtitle}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}

        <motion.a
          href="#featured-project"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 inline-flex items-center gap-3 text-zinc-500 hover:text-white transition-colors group"
        >
          <span className="uppercase tracking-[0.25em] text-xs">
            Explore My Work
          </span>

          <FaArrowDown className="transition-transform duration-300 group-hover:translate-y-1" />
        </motion.a>

      </div>
    </section>
  );
}