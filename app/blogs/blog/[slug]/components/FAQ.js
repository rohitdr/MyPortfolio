"use client";

import { FaChevronDown } from "react-icons/fa";

export default function FAQ({ faq = [] }) {
  if (!faq.length) return null;

  return (
    <section className="mx-auto mt-16 w-full max-w-4xl px-4 sm:mt-20 sm:px-6 lg:mt-24">
      {/* Heading */}
      <div className="mb-8 sm:mb-12">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
          Frequently Asked Questions
        </p>

        <h2 className="mt-3 text-2xl font-light leading-tight text-white sm:mt-4 sm:text-3xl lg:text-4xl">
          Questions You Might Have
        </h2>
      </div>

      {/* FAQ */}
      <div className="space-y-3 sm:space-y-4">
        {faq.map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
              <span className="pr-2 text-base font-medium leading-6 text-white sm:text-lg">
                {item.question}
              </span>

              <FaChevronDown className="h-4 w-4 shrink-0 text-zinc-500 transition-transform duration-300 group-open:rotate-180 sm:h-5 sm:w-5" />
            </summary>

            <div className="border-t border-white/10 px-4 py-4 sm:px-6 sm:py-5">
              <p className="text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}