"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const seoPoints = [
  {
    title: "Technical SEO",
    desc: "Semantic HTML, meta tags, sitemap & robots.txt, structured data, and strong Core Web Vitals.",
  },
  {
    title: "On-Page SEO",
    desc: "Optimized headings, alt text, and clean, crawlable content structure across pages.",
  },
  {
    title: "Performance",
    desc: "Lazy loading, code-splitting, and Redis-backed APIs to keep pages fast — which search engines reward.",
  },
];

export default function SeoExpertise() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 md:px-10 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto max-w-4xl text-center"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          SEO Expertise
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white/60">
          I build sites that don&apos;t just look good — they get found.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-3"
      >
        {seoPoints.map((point) => (
          <motion.div
            key={point.title}
            variants={fadeUp}
            className="border border-white/10 rounded-xl p-6 text-center sm:text-left"
          >
            <h3 className="text-base sm:text-lg font-medium">
              {point.title}
            </h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              {point.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
