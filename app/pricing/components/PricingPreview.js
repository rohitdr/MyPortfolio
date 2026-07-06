"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { packages } from "../data";

export default function PackagePreview() {
  return (
    <section
      id="packages"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
          Compare Packages
        </p>

        <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
          Choose The
          <br />
          Right Plan
        </h2>

        <p className="mt-8 text-zinc-400 leading-8 text-lg">
          Every website is handcrafted for performance, user experience,
          and conversions. Choose the package that best matches your goals.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid lg:grid-cols-3 gap-8 mt-20">

        {packages.map((plan, index) => (

          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12 }}
            whileHover={{
              y: -10,
            }}
            className={`group relative rounded-[34px] border overflow-hidden transition-all duration-500 ${
              plan.featured
                ? "bg-white text-black border-white scale-[1.02]"
                : "border-white/10 bg-zinc-950 hover:border-white/30"
            }`}
          >
            {/* Badge */}

            {plan.featured && (
              <div className="absolute right-6 top-6 rounded-full bg-black px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white">
                Most Popular
              </div>
            )}

            {/* Glow */}

            {!plan.featured && (
              <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/5 blur-[80px]" />
            )}

            <div className="relative p-9 flex flex-col h-full">

              <p
                className={`uppercase tracking-[0.3em] text-xs ${
                  plan.featured
                    ? "text-black/60"
                    : "text-zinc-500"
                }`}
              >
                {plan.name}
              </p>

              <h3 className="mt-6 text-5xl font-black">
                {plan.price}
              </h3>

              <p
                className={`mt-3 ${
                  plan.featured
                    ? "text-black/70"
                    : "text-zinc-500"
                }`}
              >
                {plan.tag}
              </p>

              <div className="my-8 h-px bg-current opacity-10" />

              {/* Perfect For */}

              <div>

                <p
                  className={`text-xs uppercase tracking-[0.3em] ${
                    plan.featured
                      ? "text-black/50"
                      : "text-zinc-600"
                  }`}
                >
                  Ideal For
                </p>

                <div className="flex flex-wrap gap-2 mt-4">

                  {plan.idealFor.map((item) => (

                    <span
                      key={item}
                      className={`rounded-full border px-3 py-2 text-xs ${
                        plan.featured
                          ? "border-black/10"
                          : "border-white/10"
                      }`}
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

              {/* Features */}

              <ul className="space-y-4 mt-10 flex-1">

                {plan.features.slice(0, 5).map((feature) => (

                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <FaCheck size={12} />

                    <span className="text-sm">
                      {feature}
                    </span>

                  </li>

                ))}

              </ul>

              {/* Footer */}

              <div className="border-t border-current/10 pt-8 mt-10">

                <div className="flex items-center justify-between">

                  <div>

                    <p
                      className={`text-xs uppercase tracking-[0.3em] ${
                        plan.featured
                          ? "text-black/50"
                          : "text-zinc-600"
                      }`}
                    >
                      Delivery
                    </p>

                    <h4 className="mt-2 font-semibold">
                      {plan.delivery}
                    </h4>

                  </div>

                  <a
                    href={`#${plan.id}`}
                    className={`group/button h-14 w-14 rounded-full border flex items-center justify-center transition-all ${
                      plan.featured
                        ? "border-black hover:bg-black hover:text-white"
                        : "border-white/15 hover:bg-white hover:text-black"
                    }`}
                  >
                    <FaArrowRight className="transition-transform duration-300 group-hover/button:translate-x-1" />
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}