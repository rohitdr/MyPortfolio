"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Clean & Responsive UI",
    description:
      "I build responsive interfaces that work smoothly across mobile, tablet, and desktop while keeping the user experience simple and intuitive.",
  },
  {
    number: "02",
    title: "Performance Focused",
    description:
      "I pay attention to loading speed, efficient rendering, optimized assets, and overall frontend performance when building applications.",
  },
  {
    number: "03",
    title: "Production Mindset",
    description:
      "My projects focus on real-world application structure, reusable components, API integration, authentication, database design, and maintainable code.",
  },
  {
    number: "04",
    title: "Problem Solver",
    description:
      "I enjoy breaking complex requirements into practical solutions and continuously improving my skills by building and debugging real applications.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
            Why Work With Me
          </p>

          <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
            How I
            <br />
            Approach Development
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            I focus on building practical, maintainable, and user-friendly
            applications while continuously improving my skills through
            real-world projects and hands-on development.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid md:grid-cols-2 gap-8">

          {reasons.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-[32px] border border-white/10 bg-zinc-950 p-8 transition-all duration-300 hover:border-white/25"
            >
              <span className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                {item.number}
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 text-zinc-400 leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}