"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiMinus,
} from "react-icons/fi";

const rows = [
  { label: "Blog Articles", key: "blogs" },
  { label: "Service Pages", key: "services" },
  { label: "Location Pages", key: "locations" },
  { label: "Google Business Profile", key: "gbp" },
  { label: "Technical SEO", key: "technicalSeo" },
  { label: "Content Strategy", key: "contentStrategy" },
  { label: "Schema Markup", key: "schema" },
  { label: "CTR Optimization", key: "ctr" },
  { label: "Performance Reports", key: "reports" },
  { label: "Priority Support", key: "support" },
];

export default function Comparison({
  plans,
  current,
  service,
}) {
  const filteredPlans = plans.filter(
    (plan) => plan.service === service.slug
  );

  if (filteredPlans.length < 2) return null;

  return (
    <section className="border-b border-white/10 bg-black py-16 text-white sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Header */}

        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs sm:tracking-[0.4em]">
            04 / Compare Plans
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:mt-6 sm:text-4xl lg:text-5xl">
            Find Your
            <br />
            Perfect Plan.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9">
            Compare every plan side by side and choose the one
            that best matches your business goals.
          </p>
        </div>

        {/* ---------------- MOBILE ---------------- */}

        <div className="mt-12 space-y-6 lg:hidden">
          {filteredPlans.map((plan, index) => (
            <motion.div
              key={plan.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className={`border p-6 ${
                current === plan.slug
                  ? "border-white"
                  : "border-white/10"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    {plan.name}
                  </h3>

                  <p className="mt-2 text-zinc-500">
                    {plan.price}/month
                  </p>
                </div>

                {current === plan.slug && (
                  <span className="rounded-full border border-white px-3 py-1 text-xs uppercase">
                    Current
                  </span>
                )}
              </div>

              <div className="mt-8 space-y-4">
                {rows.map((row) => (
                  <div
                    key={row.key}
                    className="flex items-start justify-between gap-6 border-b border-white/10 pb-4"
                  >
                    <span className="text-sm text-zinc-400">
                      {row.label}
                    </span>

                    <div className="text-right">
                      {plan.comparison[row.key] ? (
                        plan.comparison[row.key] === true ? (
                          <FiCheck />
                        ) : (
                          <span>{plan.comparison[row.key]}</span>
                        )
                      ) : (
                        <FiMinus className="text-zinc-700" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={`/services/seo/plans/${plan.slug}`}
                className={`mt-8 inline-flex w-full items-center justify-center gap-3 border py-4 uppercase tracking-[0.25em] transition ${
                  current === plan.slug
                    ? "border-white bg-white text-black"
                    : "border-white/10 hover:border-white"
                }`}
              >
                {current === plan.slug
                  ? "Current Plan"
                  : "View Plan"}

                <FiArrowRight />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ---------------- DESKTOP ---------------- */}

        <div className="mt-20 hidden overflow-x-auto lg:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 text-left font-medium text-zinc-500">
                  Features
                </th>

                {filteredPlans.map((plan) => (
                  <th
                    key={plan.slug}
                    className={`min-w-[220px] px-6 py-6 text-left ${
                      current === plan.slug
                        ? "bg-white text-black"
                        : ""
                    }`}
                  >
                    <h3 className="text-2xl font-bold">
                      {plan.name}
                    </h3>

                    <p
                      className={`mt-2 ${
                        current === plan.slug
                          ? "text-black/70"
                          : "text-zinc-500"
                      }`}
                    >
                      {plan.price}/month
                    </p>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.key}
                  className="border-b border-white/10"
                >
                  <td className="py-6 text-zinc-400">
                    {row.label}
                  </td>

                  {filteredPlans.map((plan) => (
                    <td
                      key={plan.slug}
                      className={`px-6 py-6 ${
                        current === plan.slug
                          ? "bg-white/5"
                          : ""
                      }`}
                    >
                      {plan.comparison[row.key] ? (
                        plan.comparison[row.key] === true ? (
                          <FiCheck />
                        ) : (
                          plan.comparison[row.key]
                        )
                      ) : (
                        <FiMinus className="text-zinc-700" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              <tr>
                <td />

                {filteredPlans.map((plan) => (
                  <td
                    key={plan.slug}
                    className="px-6 pt-8"
                  >
                    <Link
                      href={`/services/seo/plans/${plan.slug}`}
                      className={`inline-flex w-full items-center justify-center gap-3 border py-4 uppercase tracking-[0.25em] transition ${
                        current === plan.slug
                          ? "border-white bg-white text-black"
                          : "border-white/10 hover:border-white"
                      }`}
                    >
                      {current === plan.slug
                        ? "Current Plan"
                        : "View Plan"}

                      <FiArrowRight />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}