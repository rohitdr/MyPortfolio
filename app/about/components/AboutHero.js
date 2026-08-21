"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutHero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeUp}
      className="pt-4 sm:pt-6"
    >
      {/* Tag */}
      <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs font-semibold mb-3 sm:mb-4">
        ABOUT
      </p>

      {/* Main Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
        I&apos;m Rohit. <br />
        <span className="text-zinc-400">I build digital experiences.</span>
      </h1>

      {/* Subtitle / Role */}
      <p className="mt-3 sm:mt-5 text-lg sm:text-2xl text-zinc-300 font-medium">
        MERN / Next.js Developer
      </p>

      {/* Action Badges */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
        <a
          href="https://github.com/rohitdr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-300 border border-white/10 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full hover:border-white/30 hover:text-white transition-all"
        >
          <FiGithub size={15} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/rohit-kumar-2295ab404"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-300 border border-white/10 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full hover:border-white/30 hover:text-white transition-all"
        >
          <FiLinkedin size={15} />
          <span>LinkedIn</span>
        </a>

        <Link
          href="/contact"
          className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-black bg-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-full hover:bg-zinc-200 transition-all font-semibold"
        >
          <FiMail size={15} />
          <span>Contact</span>
        </Link>
      </div>
    </motion.section>
  );
}
