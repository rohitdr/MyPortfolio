"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa6";

export default function PackageSection({ plan, reverse = false }) {
  return (
    <section
      id={plan.id}
className="mx-auto max-w-7xl border-t border-white/10 px-5 sm:px-6 lg:px-10 py-16 lg:py-28 overflow-hidden"    >
      <div
        className={`grid gap-12 lg:grid-cols-2 gap-20 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
            {plan.name} Package
          </p>

          <h2 className="mt-5 break-words text-5xl sm:text-6xl lg:text-8xl font-black leading-none">
            {plan.price}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 lg:mt-8 lg:text-xl lg:leading-9">
            {plan.tag}
          </p>

          <div className="mt-12 flex flex-wrap gap-3">

            {plan.idealFor.map((item) => (
              <span
                key={item}
                className="max-w-full break-words rounded-full border border-white/10 px-4 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm"
              >
                {item}
              </span>
            ))}

          </div>

          <div className="mt-14">

            <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
              Delivery Time
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              {plan.delivery}
            </h3>

          </div>

          <a
            href="https://wa.me/917009962845"
            target="_blank"
            className="group mt-14 inline-flex items-center gap-4 rounded-full bg-white px-8 py-5 text-black transition-all duration-300 hover:scale-105"
          >
            Start Your Project

            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
      className="rounded-[28px] lg:rounded-[36px] border border-white/10 bg-zinc-950 p-6 sm:p-8 lg:p-12 overflow-hidden"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
            Everything Included
          </p>

          <div className="mt-10 grid gap-6">

            {plan.features.map((feature) => (

              <div
                key={feature}
              className="flex items-start gap-4 border-b border-white/5 pb-5 last:border-none"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                  <FaCheck size={14} />
                </div>

             <span className="flex-1 break-words text-base lg:text-lg">
                  {feature}
                </span>
              </div>

            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}