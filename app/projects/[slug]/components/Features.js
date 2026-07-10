"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function Features({ project }) {
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
            Features
          </p>

          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl lg:text-7xl">
            What Makes
            <br />
            It Special
          </h2>
        </motion.div>

        {/* Grid */}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {project.features.map((feature, index) => (

            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -6,
              }}
              className="
                group
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

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black">

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />

              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {feature}
              </h3>

              <p className="mt-4 leading-8 text-zinc-400">
                Carefully designed and developed to deliver a smooth user
                experience while maintaining performance, scalability, and a
                premium visual appearance.
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}