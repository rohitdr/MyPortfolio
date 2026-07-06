"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 1–3 weeks, depending on the project scope, content availability, and custom features.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. I can redesign outdated websites with a modern UI, better performance, improved SEO, and a fully responsive experience.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Absolutely. Every project includes post-launch support, and ongoing maintenance plans are available for businesses that need regular updates.",
  },
  {
    question: "Can you build custom web applications?",
    answer:
      "Yes. Besides business websites, I build dashboards, booking systems, admin panels, portals, and fully custom web applications using modern technologies.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-28">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
            FAQ
          </p>

          <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
            Frequently
            <br />
            Asked Questions
          </h2>
        </motion.div>

        <div className="mt-20 space-y-5">

          {faqs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-zinc-950 overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <h3 className="text-xl lg:text-2xl font-semibold pr-8">
                  {item.question}
                </h3>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10">
                  {active === index ? (
                    <FaMinus />
                  ) : (
                    <FaPlus />
                  )}
                </div>
              </button>

              <AnimatePresence>

                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="px-8 pb-8 text-zinc-400 leading-8">
                      {item.answer}
                    </p>
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}