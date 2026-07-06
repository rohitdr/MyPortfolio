"use client";

import { motion } from "framer-motion";
import { comparison } from "../data";
import { FaCheck, FaXmark } from "react-icons/fa6";

export default function ComparisonTable() {
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
          Compare Features
        </p>

        <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
          Everything
          <br />
          At A Glance
        </h2>

        <p className="mt-8 text-zinc-400 leading-8 text-lg">
          Compare every package side by side and choose the one
          that best fits your business.
        </p>
      </motion.div>

      {/* Desktop */}

      <div className="hidden lg:block mt-20 overflow-hidden rounded-[32px] border border-white/10">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10 bg-zinc-950">

              <th className="text-left px-8 py-7 text-zinc-500 uppercase tracking-[0.25em] text-xs">
                Feature
              </th>

              <th className="py-7 text-center">
                Starter
              </th>

              <th className="py-7 bg-white text-black">
                Business
              </th>

              <th className="py-7 text-center">
                Premium
              </th>

            </tr>

          </thead>

          <tbody>

            {comparison.map((row, index) => (

              <motion.tr
                key={row[0]}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="border-b border-white/5 last:border-none"
              >

                <td className="px-8 py-6 font-medium">
                  {row[0]}
                </td>

                {[row[1], row[2], row[3]].map((item, i) => (

                  <td
                    key={i}
                    className={`text-center py-6 ${
                      i === 1 ? "bg-white text-black" : ""
                    }`}
                  >
                    {typeof item === "boolean" ? (
                      item ? (
                        <FaCheck className="mx-auto" />
                      ) : (
                        <FaXmark className="mx-auto opacity-30" />
                      )
                    ) : (
                      item
                    )}
                  </td>

                ))}

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Mobile */}

      <div className="lg:hidden mt-16 space-y-4">

        {comparison.map((row) => (

          <div
            key={row[0]}
            className="rounded-3xl border border-white/10 bg-zinc-950 p-6"
          >

            <h3 className="font-semibold text-lg">
              {row[0]}
            </h3>

            <div className="mt-5 space-y-3 text-sm">

              {[
                ["Starter", row[1]],
                ["Business", row[2]],
                ["Premium", row[3]],
              ].map(([name, value]) => (

                <div
                  key={name}
                  className="flex items-center justify-between border-b border-white/5 pb-3 last:border-none"
                >

                  <span className="text-zinc-500">
                    {name}
                  </span>

                  <span>

                    {typeof value === "boolean" ? (
                      value ? (
                        <FaCheck />
                      ) : (
                        <FaXmark className="opacity-30" />
                      )
                    ) : (
                      value
                    )}

                  </span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}