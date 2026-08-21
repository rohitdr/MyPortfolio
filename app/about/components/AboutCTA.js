"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutCTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="border border-white/10 rounded-2xl bg-zinc-900/40 p-6 sm:p-12 lg:p-14 text-center relative overflow-hidden"
    >
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
        HAVE AN IDEA? <br />
        LET&apos;S BUILD IT.
      </h2>
      <p className="text-zinc-400 mt-3 sm:mt-4 text-xs sm:text-base max-w-md mx-auto">
        I&apos;m actively available for freelance projects, full-time engineering roles, and client partnerships.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2.5 mt-6 sm:mt-8 bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-widest hover:bg-zinc-200 transition-all hover:scale-95"
      >
        <span>Contact Me</span>
        <FiArrowUpRight size={16} />
      </Link>
    </motion.section>
  );
}
