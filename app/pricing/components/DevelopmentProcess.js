"use client";

import { motion } from "framer-motion";

const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We discuss your business, goals, competitors, and the type of website you need.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "A clean, modern UI is designed with a focus on user experience and conversions.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "The website is developed using modern technologies with performance and SEO in mind.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing and revisions, your website goes live with full deployment support.",
  },
];

export default function DevelopmentProcess() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28 border-t border-white/10">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
          Process
        </p>

        <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
          How We
          <br />
          Work
        </h2>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          A transparent and collaborative process from the first conversation
          to your website going live.
        </p>
      </motion.div>

      {/* Timeline */}

      <div className="mt-20 space-y-10">

        {process.map((step, index) => (

          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="group grid lg:grid-cols-[180px_1fr] gap-10 border-b border-white/10 pb-10"
          >

            <div>

              <span className="text-6xl lg:text-7xl font-black text-white/15 group-hover:text-white transition-colors duration-300">
                {step.number}
              </span>

            </div>

            <div>

              <h3 className="text-3xl lg:text-4xl font-bold">
                {step.title}
              </h3>

              <p className="mt-5 max-w-2xl text-zinc-400 leading-8">
                {step.description}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}