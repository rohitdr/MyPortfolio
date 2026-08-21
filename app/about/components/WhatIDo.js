"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: "💻",
    title: "Frontend",
    desc: "Crafting fast, responsive, and SEO-optimized web interfaces using React, Next.js, Tailwind CSS, and Framer Motion.",
  },
  {
    icon: "⚙️",
    title: "Backend",
    desc: "Designing robust REST APIs with Node.js & Express, JWT authentication, role-based access control, and Redis integration.",
  },
  {
    icon: "🚀",
    title: "Fullstack",
    desc: "Building end-to-end applications with real-time WebSockets (Socket.IO), MongoDB database design, and CI/CD pipelines.",
  },
];

export default function WhatIDo() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs font-semibold mb-3 sm:mb-4">
        WHAT I DO
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="border border-white/10 rounded-2xl bg-zinc-900/40 p-5 sm:p-7 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
