"use client";

import { motion } from "framer-motion";

export default function Results({ project }) {
  return (
    <section className="border-t border-white/10 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 lg:mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            Results
          </p>

          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl lg:text-7xl">
            Project
            <br />
            Impact
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 lg:text-lg">
            Every project is built with performance, scalability, accessibility,
            and long-term business growth in mind.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {project.results.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="
                rounded-[28px]
                border
                border-white/10
                bg-zinc-950
                p-7
                transition-all
                duration-300
                hover:border-white/20
              "
            >

              <h3 className="text-5xl font-black lg:text-6xl">
                {item.value}
              </h3>

              <div className="mt-5 h-px w-14 bg-white/20" />

              <p className="mt-5 uppercase tracking-[0.2em] text-xs text-zinc-500">
                {item.label}
              </p>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Bottom Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="
            mt-20
            rounded-[32px]
            border
            border-white/10
            bg-zinc-950
            p-8
            lg:p-12
          "
        >

          <p className="text-2xl font-bold leading-relaxed lg:text-4xl lg:leading-[1.5]">
            "The objective wasn't just building a beautiful website—it was
            creating a fast, scalable, and conversion-focused digital
            experience."
          </p>

        </motion.div>

      </div>
    </section>
  );
}