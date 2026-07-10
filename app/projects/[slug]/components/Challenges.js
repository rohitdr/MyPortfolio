"use client";

import { motion } from "framer-motion";

export default function Challenge({ project }) {
  return (
    <section className="border-t border-white/10 py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            Challenge
          </p>

          <h2 className="mt-5 text-4xl font-black leading-none sm:text-5xl lg:text-7xl">
            The Problem
            <br />
            To Solve
          </h2>

          <p className="mt-8 max-w-xl text-base leading-8 text-zinc-400 lg:text-lg lg:leading-9">
            Every successful project starts with understanding the client's
            challenges. Before designing or writing a single line of code, the
            focus was on identifying the problems and creating a solution that
            improves user experience while supporting business growth.
          </p>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* Challenge */}

          <div className="rounded-[28px] border border-white/10 bg-zinc-950 p-6 lg:p-8">

            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Challenge
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-300">
              {project.challenge}
            </p>

          </div>

          {/* Solution */}

          <div className="rounded-[28px] border border-white/10 bg-zinc-950 p-6 lg:p-8">

            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Solution
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-300">
              {project.solution}
            </p>

          </div>

          {/* Outcome */}

          <div className="rounded-[28px] border border-white/10 bg-zinc-950 p-6 lg:p-8">

            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              Outcome
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-300">
              {project.outcome}
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}