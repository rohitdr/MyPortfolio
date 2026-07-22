"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQ({ faqs }) {
  const [active, setActive] = useState(0);

  if (!faqs?.length) return null;

  return (
    <section className="border-b border-white/10 bg-black py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]">
              05 / FAQ
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Questions
              <br />
              You May Have.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-white/10">
              {faqs.map((faq, index) => {
                const open = active === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-white/10"
                  >
                    <button
                      onClick={() => setActive(open ? -1 : index)}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-white sm:items-center sm:py-8"
                    >
                      <h3 className="flex-1 text-lg font-medium leading-7 sm:text-xl sm:leading-8">
                        {faq.question}
                      </h3>

                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-colors duration-300 hover:border-white/20 hover:text-white sm:mt-0">
                        {open ? (
                          <FiMinus size={16} />
                        ) : (
                          <FiPlus size={16} />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-3xl pb-6 text-sm leading-7 text-zinc-400 sm:pb-8 sm:text-base sm:leading-8">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}