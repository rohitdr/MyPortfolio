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
    <section className="w-full px-6 lg:px-10 py-16 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mb-12"
      >
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs mb-3">
          SEO Expertise
        </p>
        <h2 className="text-4xl md:text-6xl font-black">
          Engineered for <br className="hidden sm:inline" /> Visibility & Performance
        </h2>
        <p className="mt-4 text-zinc-400 text-base max-w-2xl">
          I build web applications that don&apos;t just look great — they are structured to rank highly on search engines and load instantaneously.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {seoPoints.map((point) => (
          <motion.div
            key={point.title}
            variants={fadeUp}
            className="border border-white/10 rounded-2xl bg-zinc-900/40 p-8 hover:border-white/20 transition-all group"
          >
            <h3 className="text-xl font-bold group-hover:text-white transition-colors">
              {point.title}
            </h3>
            <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
              {point.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}