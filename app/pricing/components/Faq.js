"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { faqs } from "../data";

export default function FAQ() {
  const [active, setActive] = useState(0);

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
          Frequently Asked Questions
        </p>

        <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
          Got
          <br />
          Questions?
        </h2>

        <p className="mt-8 text-lg leading-8 text-zinc-400">
          Here are answers to the questions clients ask before starting a
          project.
        </p>
      </motion.div>

      {/* FAQ */}

      <div className="mt-20">

        {faqs.map((item, index) => {

          const open = active === index;

          return (

            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border-b border-white/10"
            >

              <button
                onClick={() => setActive(open ? -1 : index)}
                className="flex w-full items-center justify-between py-8 text-left"
              >

                <h3 className="text-xl lg:text-2xl font-semibold">
                  {item.question}
                </h3>

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10">

                  {open ? (
                    <FaMinus size={14} />
                  ) : (
                    <FaPlus size={14} />
                  )}

                </div>

              </button>

              <AnimatePresence>

                {open && (

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >

                    <p className="pb-8 max-w-3xl text-zinc-400 leading-8">
                      {item.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}