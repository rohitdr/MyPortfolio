"use client";

import Image from "next/image";
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

                <Image
                  src={image}
                  alt={`${project.title} Screenshot ${index + 1}`}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
                  className="
                    w-full
                    h-auto
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}