"use client";

import { motion } from "framer-motion";

export default function Gallery({ project }) {
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
            Gallery
          </p>

          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl lg:text-7xl">
            Project
            <br />
            Showcase
          </h2>
        </motion.div>

        {/* Gallery */}

        <div className="grid gap-5 md:grid-cols-2">

          {project.gallery.map((image, index) => (

            <motion.div
              key={image}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className={`
                group
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-zinc-950

                ${
                  index % 3 === 0
                    ? "md:col-span-2"
                    : ""
                }
              `}
            >

              <div className="overflow-hidden">

                <img
                  src={image}
                  alt={`${project.title} Screenshot ${index + 1}`}
                  className={`
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105

                    ${
                      index % 3 === 0
                        ? "h-[260px] sm:h-[420px] lg:h-[620px]"
                        : "h-[240px] sm:h-[320px] lg:h-[420px]"
                    }
                  `}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}