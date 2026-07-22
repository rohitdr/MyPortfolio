"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function Plans({ plans, quote }) {
  // Custom Quote Only
  if (!plans?.length) {
    return (
      <section className="border-b border-white/10 bg-black py-16 text-white sm:py-20 lg:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-10">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]">
            10 / Pricing
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
            Every Project
            <br />
            Is Unique.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9">
            {quote?.description ||
              "Pricing depends on your requirements, project complexity, timeline, and business goals. Let's discuss your project and prepare a tailored proposal."}
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex w-full items-center justify-center gap-3 border border-white px-6 py-4 text-xs uppercase tracking-[0.25em] transition hover:bg-white hover:text-black sm:mt-10 sm:w-auto sm:px-8"
          >
            Request a Proposal
            <FiArrowRight />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-white/10 bg-black py-16 text-white sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]">
              10 / Pricing
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
              Choose Your
              <br />
              Plan.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              Select the option that best matches your business goals. Need
              something custom? Every plan can be tailored to your requirements.
            </p>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-12 grid gap-6 sm:mt-16 lg:mt-24 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className={`flex h-full flex-col border p-6 sm:p-8 lg:p-10 ${
                plan.featured
                  ? "border-white"
                  : "border-white/10"
              }`}
            >
              {plan.featured && (
                <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
                  Most Popular
                </span>
              )}

              <h3 className="mt-4 text-2xl font-semibold sm:mt-6 sm:text-3xl">
                {plan.name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-400 sm:mt-5 sm:text-base">
                {plan.description}
              </p>

              <div className="mt-8 sm:mt-10">
                <span className="text-4xl font-black sm:text-5xl">
                  {plan.price}
                </span>

                {plan.period && (
                  <span className="ml-2 text-sm text-zinc-500 sm:text-base">
                    / {plan.period}
                  </span>
                )}
              </div>

              <div className="mt-8 space-y-4 sm:mt-10">
                {plan.features.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <FiCheck className="mt-1 shrink-0 text-zinc-400" />

                    <span className="text-sm leading-7 text-zinc-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 space-y-4 sm:pt-10">
                <Link
                  href={plan.slug}
                  className={`inline-flex w-full items-center justify-center gap-3 border py-4 text-xs uppercase tracking-[0.25em] transition sm:text-sm ${
                    plan.featured
                      ? "border-white bg-white text-black hover:bg-transparent hover:text-white"
                      : "border-white/10 hover:border-white"
                  }`}
                >
                  View Plan
                  <FiArrowRight />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500 transition hover:text-white sm:text-sm"
                >
                  Get a Free Consultation
                  <FiArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}