"use client";

import { motion } from "framer-motion";

export default function TechStack({ project }) {
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
            Technology
          </p>

          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl lg:text-7xl">
            Built With
            <br />
            Modern Stack
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">

          {project.techStack.map((group, index) => (

            <motion.div
              key={group.category}
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
              <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                {group.category}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {group.items.map((tech) => (

                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-black
                      px-4
                      py-2
                      text-sm
                      transition
                      hover:border-white
                    "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}