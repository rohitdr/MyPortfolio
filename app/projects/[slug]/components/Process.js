"use client";

import { motion } from "framer-motion";

export default function Process({ project }) {
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
            Process
          </p>

          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl lg:text-7xl">
            From Idea
            <br />
            To Launch
          </h2>
        </motion.div>

        <div className="relative">

          {/* Center Line */}

          <div className="absolute left-5 top-0 h-full w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-14">

            {project.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "lg:justify-start"
                    : "lg:justify-end"
                }`}
              >
                {/* Timeline Dot */}

                <div className="absolute left-5 top-8 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-black text-xs font-bold lg:left-1/2">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Card */}

                <div
                  className="
                    ml-14
                    w-full
                    rounded-[28px]
                    border
                    border-white/10
                    bg-zinc-950
                    p-6
                    lg:ml-0
                    lg:w-[46%]
                    lg:p-8
                  "
                >
                  <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-4 text-2xl font-black lg:text-3xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 leading-8 text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}