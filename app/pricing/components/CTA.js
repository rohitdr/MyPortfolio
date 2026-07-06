"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/10">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-40">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl"
        >

          <p className="uppercase tracking-[0.45em] text-xs text-zinc-500">
            Let's Build Something Amazing
          </p>

          <h2 className="mt-8 text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.9]">
            Ready To
            <br />
            Grow Your
            <br />
            Business?
          </h2>

          <p className="mt-10 max-w-2xl text-lg lg:text-xl leading-9 text-zinc-400">
            Whether you need a simple business website or a fully custom web
            application, I'm here to turn your ideas into a fast, modern, and
            conversion-focused digital experience.
          </p>

          <div className="mt-14 flex flex-wrap gap-5">

            <a
              href="https://wa.me/917009962845?text=Hi%20Rohit,%20I'm%20interested%20in%20building%20a%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-full bg-white px-8 py-5 text-black transition-all duration-300 hover:scale-105"
            >
              Start Your Project

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/projects"
              className="rounded-full border border-white/15 px-8 py-5 transition-all duration-300 hover:bg-white hover:text-black"
            >
              View My Work
            </a>

          </div>

        </motion.div>

        {/* Bottom Trust Strip */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-10"
        >

          {[
            "Responsive Design",
            "SEO Optimized",
            "Fast Delivery",
            "Post Launch Support",
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