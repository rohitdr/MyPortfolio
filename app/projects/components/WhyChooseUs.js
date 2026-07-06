"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Modern Design",
    description:
      "Clean, premium interfaces designed to impress visitors and build trust from the first impression.",
  },
  {
    number: "02",
    title: "Performance",
    description:
      "Every website is optimized for speed, responsiveness, and smooth user experience across all devices.",
  },
  {
    number: "03",
    title: "SEO Ready",
    description:
      "Built with SEO best practices to help your business rank better on search engines.",
  },
  {
    number: "04",
    title: "Long-Term Support",
    description:
      "From launch to future updates, I provide ongoing support to keep your website running smoothly.",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
            Why Work With Me
          </p>

          <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
            Built For
            <br />
            Business Growth
          </h2>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            I don't just build beautiful websites. Every project is designed
            to generate trust, improve user experience, and help businesses
            grow online.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid md:grid-cols-2 gap-8">

          {reasons.map((item, index) => (

            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-[32px] border border-white/10 bg-zinc-950 p-8 transition-all duration-300 hover:border-white/25"
            >
              <span className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                {item.number}
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 text-zinc-400 leading-8">
                {item.description}
              </p>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}