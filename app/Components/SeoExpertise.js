"use client";

import { motion } from "framer-motion";
import {
  FaMagnifyingGlass,
  FaChartLine,
  FaCode,
  FaGaugeHigh,
} from "react-icons/fa6";

const expertise = [
  {
    number: "01",
    icon: FaMagnifyingGlass,
    title: "Technical SEO",
    description:
      "Metadata, canonical URLs, sitemaps, robots.txt, schema markup, and crawl-friendly architecture.",
  },
  {
    number: "02",
    icon: FaChartLine,
    title: "On-Page SEO",
    description:
      "Keyword targeting, headings, internal linking, content structure, and local SEO.",
  },
  {
    number: "03",
    icon: FaCode,
    title: "SEO Development",
    description:
      "Next.js metadata, semantic HTML, structured data, URL architecture, and indexability.",
  },
  {
    number: "04",
    icon: FaGaugeHigh,
    title: "Performance",
    description:
      "Page speed, responsive development, Core Web Vitals, and performance optimization.",
  },
];

export default function SEOExperience() {
  return (
    <section className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-28">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs text-zinc-500">
            Additional Expertise
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95]">
            Development
            <br />
            Meets SEO.
          </h2>

          <p className="mt-6 text-sm sm:text-base leading-7 text-zinc-400">
            Alongside development, I have hands-on experience with technical
            SEO, on-page optimization, structured data, and website
            performance.
          </p>
        </motion.div>

        {/* Expertise */}

        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-3 sm:gap-4">

          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="
                  group
                  flex gap-4
                  rounded-2xl
                  border border-white/10
                  bg-zinc-950
                  p-4 sm:p-5
                  transition-colors duration-300
                  hover:border-white/25
                "
              >

                {/* Icon */}

                <div
                  className="
                    shrink-0
                    flex h-10 w-10
                    items-center justify-center
                    rounded-xl
                    bg-white/5
                    text-zinc-400
                    group-hover:bg-white
                    group-hover:text-black
                    transition-colors
                  "
                >
                  <Icon size={16} />
                </div>

                {/* Content */}

                <div className="min-w-0">

                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold">
                      {item.title}
                    </h3>

                    <span className="text-[9px] tracking-widest text-zinc-600">
                      {item.number}
                    </span>
                  </div>

                  <p className="mt-1.5 text-xs sm:text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}