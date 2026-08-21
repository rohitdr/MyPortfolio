"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redis",
  "Tailwind CSS",
  "REST APIs",
  "JWT",
  "WebSockets",
  "GitHub Actions",
  "Vercel",
  "Cloudinary",
  "SEO",
];

export default function TechStackGrid() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs font-semibold mb-3 sm:mb-4">
        TECH STACK
      </p>
      
      <div className="border border-white/10 rounded-2xl bg-zinc-900/40 p-5 sm:p-7">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-zinc-300 hover:border-white/30 hover:text-white transition-all"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
