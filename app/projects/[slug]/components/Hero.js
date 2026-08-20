"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero({ project }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pt-28 pb-14 lg:pt-40 lg:pb-20">

        {/* Category */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[11px] uppercase tracking-[0.35em] text-zinc-500"
        >
          {project.category}
        </motion.p>

        {/* Title */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-5 max-w-5xl text-5xl font-black leading-none sm:text-6xl lg:text-8xl"
        >
          {project.title}
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 lg:text-xl lg:leading-9"
        >
          {project.description}
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-14 items-center justify-center gap-3 rounded-full bg-white px-8 text-black transition-all duration-300 hover:scale-[1.02]"
          >
            Visit Website

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#overview"
            className="flex h-14 items-center justify-center rounded-full border border-white/10 px-8 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            Explore Case Study
          </a>
        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-14 grid grid-cols-2 gap-5 border-t border-white/10 pt-8 lg:grid-cols-4"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Year
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {project.year}
            </h3>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Industry
            </p>

            <h3 className="mt-2 text-xl font-bold">
              {project.category}
            </h3>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Platform
            </p>

            <h3 className="mt-2 text-xl font-bold">
              Web Application
            </h3>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Status
            </p>

            <h3 className="mt-2 text-xl font-bold text-green-400">
              Live
            </h3>
          </div>
        </motion.div>

      </div>

      {/* Hero Image */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 pb-20"
      >
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950 lg:rounded-[40px]">

          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={900}
            priority
            sizes="(max-width: 1200px) 100vw, 1400px"
            className="w-full h-auto"
          />

        </div>
      </motion.div>

    </section>
  );
}