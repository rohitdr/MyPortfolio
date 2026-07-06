"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[450px] w-[450px] rounded-full bg-white/5 blur-[130px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >
          <p className="uppercase tracking-[0.45em] text-xs text-zinc-500">
            Your Project Could Be Next
          </p>

          <h2 className="mt-8 text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9]">
            Let's Build
            <br />
            Something
            <br />
            Exceptional.
          </h2>

          <p className="mt-10 max-w-2xl text-lg lg:text-xl leading-9 text-zinc-400">
            Every website I build is designed to look premium, perform fast,
            and help businesses grow online. If you're ready to create a
            website that stands out, let's talk.
          </p>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap gap-5">

            <a
              href="https://wa.me/917009962845?text=Hi%20Rohit,%20I'd%20like%20to%20build%20a%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full bg-white px-8 py-5 text-black transition-all duration-300 hover:scale-105"
            >
              Start Your Project

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/pricing"
              className="rounded-full border border-white/15 px-8 py-5 transition-all duration-300 hover:bg-white hover:text-black"
            >
              View Website Packages
            </a>

          </div>

        </motion.div>

        {/* Bottom Strip */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-10"
        >

          {[
            "Modern Design",
            "SEO Optimized",
            "Responsive",
            "Ongoing Support",
          ].map((item) => (

            <div
              key={item}
              className="group"
            >
              <div className="h-2 w-2 rounded-full bg-white mb-5 transition-transform duration-300 group-hover:scale-150" />

              <p className="text-zinc-400">
                {item}
              </p>
            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}