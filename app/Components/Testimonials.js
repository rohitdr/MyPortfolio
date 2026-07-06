"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const testimonials = [
  {
    id: "01",
    name: "Aman Sharma",
    role: "Founder",
    company: "Luxe Drives",
    review:
      "Working with Saksam completely transformed our online presence. The website looks premium, performs exceptionally well, and has significantly improved customer enquiries.",
  },
  {
    id: "02",
    name: "Priya Verma",
    role: "Co-Founder",
    company: "Recipe Riot",
    review:
      "Excellent communication, beautiful design, and clean development. Every detail was thoughtfully crafted and delivered on time.",
  },
  {
    id: "03",
    name: "Rahul Singh",
    role: "Director",
    company: "Business Owner",
    review:
      "Professional from start to finish. The final website exceeded expectations in both design and performance. Highly recommended.",
  },
  {
    id: "04",
    name: "Ankit Gupta",
    role: "CEO",
    company: "Startup Founder",
    review:
      "One of the best developers I've worked with. Fast delivery, premium quality and incredible support throughout the project.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(testimonials[0]);

  return (
  <section className="bg-black text-white overflow-hidden py-16 lg:py-32">
  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-12 lg:mb-20"
    >
      <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-zinc-500">
        Testimonials
      </p>

      <h2 className="text-4xl font-black leading-none sm:text-5xl lg:text-7xl">
        What Clients
        <br />
        Say
      </h2>
    </motion.div>

        {/* Desktop */}

        <div className="hidden lg:grid lg:grid-cols-2 gap-24">

          {/* Left Client List */}

          <div>

            {testimonials.map((item) => (

              <motion.div
                key={item.id}
                onMouseEnter={() => setActive(item)}
                whileHover={{ x: 12 }}
                className={`group cursor-pointer border-b py-8 transition-all duration-300 ${
                  active.id === item.id
                    ? "border-white"
                    : "border-white/10 hover:border-white/40"
                }`}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <span className="text-zinc-600 text-sm tracking-widest">
                      {item.id}
                    </span>

                    <h3 className="mt-2 text-3xl font-bold">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-zinc-500">
                      {item.role} · {item.company}
                    </p>

                  </div>

                  <FaArrowRight
                    className={`transition-all duration-300 ${
                      active.id === item.id
                        ? "translate-x-2 opacity-100"
                        : "opacity-30"
                    }`}
                  />

                </div>

              </motion.div>

            ))}

          </div>

          {/* Right Preview */}

          <div className="sticky top-24">
            <AnimatePresence mode="wait">
  <motion.div
    key={active.id}
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -25 }}
    transition={{ duration: 0.35 }}
    className="relative"
  >
    {/* Decorative Quote */}

    <motion.div
      key={active.id + "-quote"}
      initial={{ opacity: 0, rotate: -8 }}
      animate={{ opacity: 0.08, rotate: 0 }}
      exit={{ opacity: 0 }}
      className="absolute -top-16 left-0 select-none text-[180px] font-black leading-none"
    >
      "
    </motion.div>

    {/* Review */}

    <div className="relative z-10">

      <p className="text-3xl xl:text-4xl leading-[1.45] font-semibold max-w-xl">
        {active.review}
      </p>

      <motion.div
        key={active.id + "-line"}
        initial={{ width: 0 }}
        animate={{ width: 80 }}
        transition={{ delay: 0.15 }}
        className="mt-14 h-[2px] bg-white"
      />

      <div className="mt-8">

        <h3 className="text-2xl font-bold">
          {active.name}
        </h3>

        <p className="mt-2 text-zinc-500 text-lg">
          {active.role}
        </p>

        <p className="text-zinc-600">
          {active.company}
        </p>

      </div>

      {/* Small Quote Number */}

      <div className="mt-20 flex items-center justify-between border-t border-white/10 pt-8">

        <span className="text-sm uppercase tracking-[0.35em] text-zinc-600">
          Client Review
        </span>

        <span className="text-5xl font-black text-zinc-800">
          {active.id}
        </span>

      </div>

    </div>

  </motion.div>
</AnimatePresence>

</div>

</div>
{/* Mobile Testimonials */}

{/* Mobile */}

<div className="lg:hidden">

  <div
    className="
      flex gap-4
      overflow-x-auto
      snap-x snap-mandatory
      pb-2
      [-ms-overflow-style:none]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
  >

    {testimonials.map((item) => (

      <motion.div
        key={item.id}
        whileTap={{ scale: .98 }}
        className="
  relative
  flex flex-col
  min-h-[380px]
  min-w-[88%]
  snap-center
  rounded-[26px]
  border border-white/10
  bg-zinc-950
  p-6
"
      >

        <span className="absolute right-5 top-2 text-[90px] font-black leading-none text-white/5">
          "
        </span>

       <p className="relative z-10 flex-1 text-lg leading-8">
  {item.review}
</p>

     <div className="mt-auto border-t border-white/10 pt-5">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-lg font-bold">
                {item.name}
              </h3>

              <p className="mt-1 text-sm text-zinc-500">
                {item.role}
              </p>

              <p className="text-sm text-zinc-600">
                {item.company}
              </p>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm">
              {item.id}
            </div>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

  <p className="mt-6 text-center text-[10px] uppercase tracking-[0.35em] text-zinc-500">
    Swipe →
  </p>

</div>
{/* Bottom Statistics */}

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-20 border-t border-white/10 pt-10 lg:mt-28 lg:pt-14"
>

  <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">

    {[
      ["10+", "Projects Delivered"],
      ["100%", "Client Satisfaction"],
      ["2+", "Years Experience"],
      ["24/7", "Support"],
    ].map(([value, label], index) => (

      <motion.div
        key={label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
      >

        <h3 className="text-4xl font-black sm:text-5xl lg:text-7xl">
          {value}
        </h3>

        <div className="mt-3 h-px w-10 bg-white/20 lg:w-14" />

        <p className="mt-3 text-xs uppercase tracking-[0.18em] text-zinc-500 lg:text-sm">
          {label}
        </p>

      </motion.div>

    ))}

  </div>

</motion.div>


</div>
</section>
  );
}