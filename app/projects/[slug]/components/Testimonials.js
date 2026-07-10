"use client";

import { motion } from "framer-motion";

export default function Testimonial({ project }) {
  if (!project.testimonial) return null;

  const { quote, name, role, company } = project.testimonial;

  return (
    <section className="border-t border-white/10 py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-zinc-950
            p-8
            sm:p-10
            lg:p-14
          "
        >

          {/* Quote */}

          <span
            className="
              absolute
              right-5
              top-0
              select-none
              text-[140px]
              font-black
              leading-none
              text-white/5
              lg:text-[220px]
            "
          >
            "
          </span>

          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            Client Testimonial
          </p>

          <h2 className="mt-6 text-3xl font-bold leading-relaxed lg:text-5xl lg:leading-[1.45]">
            "{quote}"
          </h2>

          <div className="mt-12 border-t border-white/10 pt-8">

            <h3 className="text-2xl font-bold">
              {name}
            </h3>

            <p className="mt-2 text-zinc-400">
              {role}
            </p>

            <p className="text-zinc-500">
              {company}
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}