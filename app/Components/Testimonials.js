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
    <section className="bg-black text-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-xs text-zinc-500 mb-4">
            Testimonials
          </p>

          <h2 className="text-5xl lg:text-7xl font-black leading-none">
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

<div className="lg:hidden mt-16">

  <div
    className="
      flex gap-5
      overflow-x-auto
      snap-x snap-mandatory
      pb-4
      [-ms-overflow-style:none]
      [scrollbar-width:none]
      [&::-webkit-scrollbar]:hidden
    "
  >

    {testimonials.map((item) => (

      <motion.div
        key={item.id}
        whileTap={{ scale: 0.98 }}
        className="
          min-w-[90%]
          snap-center
          rounded-[30px]
          border
          border-white/10
          bg-zinc-950
          p-8
        "
      >

        <span className="text-[100px] leading-none text-white/5 font-black">
          "
        </span>

        <p className="text-xl leading-9 -mt-10">
          {item.review}
        </p>

        <div className="mt-10 border-t border-white/10 pt-6">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="mt-1 text-zinc-500">
                {item.role}
              </p>

              <p className="text-zinc-600 text-sm">
                {item.company}
              </p>

            </div>

            <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center">
              {item.id}
            </div>

          </div>

        </div>

      </motion.div>

    ))}

  </div>

  {/* Swipe Hint */}

  <p className="mt-8 text-center text-xs uppercase tracking-[0.35em] text-zinc-500">
    ← Swipe to read more →
  </p>

</div>
{/* Bottom Statistics */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="mt-28 border-t border-white/10 pt-14"
>

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

    {[
      {
        value: "10+",
        label: "Projects Delivered",
      },
      {
        value: "100%",
        label: "Client Satisfaction",
      },
      {
        value: "2+",
        label: "Years Experience",
      },
      {
        value: "24/7",
        label: "Support",
      },
    ].map((item, index) => (

      <motion.div
        key={item.label}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 }}
        className="group"
      >

        <h3 className="text-5xl lg:text-7xl font-black transition-transform duration-300 group-hover:-translate-y-1">
          {item.value}
        </h3>

        <div className="mt-4 h-px w-12 bg-white/20 transition-all duration-300 group-hover:w-20 group-hover:bg-white" />

        <p className="mt-4 text-zinc-500 uppercase tracking-[0.15em] text-sm">
          {item.label}
        </p>

      </motion.div>

    ))}

  </div>

</motion.div>


</div>
</section>
  );
}