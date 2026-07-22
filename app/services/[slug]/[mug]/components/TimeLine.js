"use client";

import { motion } from "framer-motion";

export default function Timeline({ timeline }) {
  if (!timeline?.length) return null;

  return (
    <section className="border-b border-white/10 bg-black py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]">
              03 / Monthly Workflow
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              How We
              <br />
              Work.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              Every month follows a consistent workflow so you always know
              what's being worked on and what results to expect.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-12 space-y-8 sm:mt-16 lg:mt-24 lg:space-y-12">
          {timeline.map((step, index) => (
            <motion.div
              key={step.week}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="grid gap-6 border-b border-white/10 pb-8 sm:gap-8 sm:pb-10 lg:grid-cols-12 lg:pb-12"
            >
              {/* Week */}
              <div className="lg:col-span-2">
                <span className="text-2xl font-black text-zinc-600 sm:text-3xl">
                  {step.week}
                </span>
              </div>

              {/* Title */}
              <div className="lg:col-span-3">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  {step.title}
                </h3>
              </div>

              {/* Content */}
              <div className="lg:col-span-7">
                <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                  {step.description}
                </p>

                <ul className="mt-5 space-y-3 sm:mt-6">
                  {step.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-3 text-sm leading-7 text-zinc-300 sm:text-base"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white" />

                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}