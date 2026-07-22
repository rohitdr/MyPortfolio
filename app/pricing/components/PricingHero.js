"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">

      {/* Background Glow */}
  <motion.div
     initial={{opacity:0}}
     animate={{opacity:0.03}}
     transition={{duration:1.15}}
     className="absolute inset-0 flex items-center justify-center  pointer-events-none "
     >
<h2 className='text-[20vw] relative font-black tracking-tight'>
  PRICING
</h2>
     </motion.div>
      <div className="absolute left-1/2 top-24 -translate-x-1/2">
        <div className="h-80 w-80 rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36">

        {/* Small Label */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.45em] text-xs text-zinc-500"
        >
          Website Packages
        </motion.p>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9]"
        >
          Build A
          <br />
          Website
          <br />
          That Sells.
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 max-w-2xl text-lg lg:text-xl leading-9 text-zinc-400"
        >
          Whether you're launching a startup, growing your business,
          or need a fully custom web application, choose a package
          designed to help you stand out online.
        </motion.p>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-14 flex flex-wrap gap-5"
        >
          <a
            href="#packages"
            className="group flex items-center gap-3 rounded-full bg-white px-8 py-5 text-black transition-all duration-300 hover:scale-105"
          >
            View Packages

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="https://wa.me/917009962845"
            target="_blank"
            className="rounded-full border border-white/15 px-8 py-5 transition-all duration-300 hover:bg-white hover:text-black"
          >
            Get Free Quote
          </a>
        </motion.div>

        {/* Bottom Info */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-10"
        >
          <div>
            <h3 className="text-4xl font-black">
              ₹4,999
            </h3>

            <p className="mt-2 text-zinc-500">
              Starting Price
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black">
              10+
            </h3>

            <p className="mt-2 text-zinc-500">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black">
              100%
            </h3>

            <p className="mt-2 text-zinc-500">
              Satisfaction
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black">
              24/7
            </h3>

            <p className="mt-2 text-zinc-500">
              Support
            </p>
          </div>
        </motion.div>

      </div>

    </section>
  );
}