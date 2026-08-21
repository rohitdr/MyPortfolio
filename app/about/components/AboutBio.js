"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stats = [
  { value: "5+", label: "Apps Delivered" },
  { value: "3+", label: "Months Direct Clients" },
  { value: "100%", label: "Production Ready" },
];

export default function AboutBio() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs font-semibold mb-3 sm:mb-4">
        A LITTLE ABOUT ME
      </p>
      
      <div className="border border-white/10 rounded-2xl bg-zinc-900/40 p-5 sm:p-8 md:p-10 backdrop-blur-xl">
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-4xl">
          I&apos;m Rohit, a MERN Stack Developer who builds scalable, real-time, SEO-friendly web applications with React, Next.js, and Node.js. I care about performance, security, and clean data handling — and I&apos;ve spent the last few months delivering production apps directly to freelance clients, end to end.
        </p>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-6 sm:pt-8 border-t border-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                {stat.value}
              </span>
              <span className="text-zinc-400 text-xs sm:text-sm mt-1 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
