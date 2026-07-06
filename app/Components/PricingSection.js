"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";


const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    subtitle: "Perfect for individuals & small businesses",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Modern UI Design",
      "Contact Form",
      "Google Maps Integration",
      "Basic SEO Setup",
      "WhatsApp Chat Button",
      "Fast Loading",
      "Free SSL Setup",
      "1 Month Support",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "₹14,999",
    subtitle: "Ideal for growing businesses",
    features: [
      "Up to 10 Pages",
      "Premium Custom Design",
      "Admin Dashboard",
      "Blog Management",
      "Advanced SEO",
      "Google Analytics Setup",
      "WhatsApp & Social Integrations",
      "Performance Optimization",
      "Speed Optimized",
      "2 Months Support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "₹29,999+",
    subtitle: "Custom websites & web applications",
    features: [
      "Unlimited Pages",
      "Fully Custom UI/UX",
      "Custom Admin Panel",
      "User Authentication",
      "Payment Gateway",
      "API Integrations",
      "CMS / Dashboard",
      "Booking or Appointment System",
      "Advanced Security",
      "Premium SEO Optimization",
      "Priority Support",
      "3 Months Support",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  const handleClick=()=>{
      window.open(
    `https://wa.me/917009962845`,
    "_blank"
  );
  }
  return (
    <section className="bg-black text-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.4em] text-xs text-zinc-500 mb-5">
            Pricing
          </p>

          <h2 className="text-5xl lg:text-7xl font-black leading-none">
            Website
            <br />
            Packages
          </h2>

          <p className="text-zinc-500 mt-8 text-lg leading-relaxed max-w-xl">
            Premium websites built for speed, conversions and long-term growth.
            Every project is handcrafted with clean code and modern design.
          </p>
        </motion.div>

        {/* Cards */}

  {/* MOBILE */}
<div
  className="
    lg:hidden
    mt-16
    flex gap-5 overflow-x-auto pb-4
    snap-x snap-mandatory
    [-ms-overflow-style:none]
    [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
  "
>
  {plans.map((plan) => (
    <motion.div
      key={plan.name}
      whileHover={{ y: -8 }}
      className={`min-w-[88%] snap-center rounded-[28px] border overflow-hidden ${
        plan.featured
          ? "bg-white text-black border-white"
          : "bg-zinc-950 border-white/10 text-white"
      }`}
    >
      {plan.featured && (
        <div className="bg-black text-white text-center py-2 text-xs uppercase tracking-[0.3em]">
          Most Popular
        </div>
      )}

      <div className="p-8">
        <p className="uppercase tracking-[0.3em] text-xs opacity-60">
          {plan.name}
        </p>

        <h2 className="mt-4 text-5xl font-black">
          {plan.price}
        </h2>

        <p className="mt-4 opacity-70">
          {plan.subtitle}
        </p>

        <div className="my-6 h-px bg-current opacity-10" />

        <div className="space-y-3">
          {plan.features.slice(0, 6).map((item) => (
            <div key={item} className="flex gap-3 items-center">
              <div className="h-2 w-2 rounded-full bg-current" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button
        onClick={handleClick}
          className={`mt-8 w-full rounded-full border py-4 transition ${
            plan.featured
              ? "border-black hover:bg-black hover:text-white"
              : "border-white/20 hover:bg-white hover:text-black"
          }`}
        >
          Start Project
        </button>
      </div>
    </motion.div>
  ))}
</div>

{/* DESKTOP */}
<div className="hidden lg:grid lg:grid-cols-3 gap-8 mt-20">

  {/* BUSINESS (BIG CARD) */}
  <motion.div
    whileHover={{ y: -8 }}
    className="col-span-2 rounded-[34px] bg-white text-black p-12 relative overflow-hidden"
  >
    <div className="absolute right-8 top-8 rounded-full bg-black text-white px-5 py-2 text-xs uppercase tracking-[0.3em]">
      Most Popular
    </div>

    <div className="max-w-lg">

      <p className="uppercase tracking-[0.35em] text-xs text-black/60">
        {plans[1].name}
      </p>

      <h2 className="mt-6 text-7xl font-black">
        {plans[1].price}
      </h2>

      <p className="mt-5 text-black/70 text-lg">
        {plans[1].subtitle}
      </p>

      <div className="grid grid-cols-2 gap-y-5 mt-10">

        {plans[1].features.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <div className="h-2 w-2 rounded-full bg-black" />

            <span>{item}</span>
          </div>
        ))}

      </div>

      <button onClick={handleClick} className="mt-12 flex items-center gap-4 rounded-full border border-black px-8 py-4 hover:bg-black hover:text-white transition">
        <span className="uppercase tracking-[0.2em] text-sm">
          Start Project
        </span>

        <FaArrowRight />
      </button>

    </div>
  </motion.div>

  {/* RIGHT COLUMN */}
  <div className="flex flex-col gap-8">

    {[plans[0], plans[2]].map((plan) => (
      <motion.div
        key={plan.name}
        whileHover={{ y: -8 }}
        className="rounded-[30px] border border-white/10 bg-zinc-950 p-8"
      >
        <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
          {plan.name}
        </p>

        <h3 className="mt-5 text-5xl font-black">
          {plan.price}
        </h3>

        <p className="mt-3 text-zinc-400">
          {plan.subtitle}
        </p>

        <div className="my-6 h-px bg-white/10" />

        <div className="space-y-3">
          {plan.features.slice(0, 5).map((item) => (
            <div
              key={item}
              className="flex items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-white" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <button onClick={handleClick} className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em]">
          Start Project
          <FaArrowRight />
        </button>
      </motion.div>
    ))}

  </div>
</div>

{/* Mobile Swipe Hint */}
<div className="mt-6 flex justify-center lg:hidden">
  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
    ← Swipe to Explore →
  </p>
</div>

        {/* Bottom Text */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-zinc-500 max-w-2xl mx-auto leading-8">
            Need something unique? I also build custom web applications,
            dashboards, booking systems, e-commerce platforms and SaaS products.
            Every quote is tailored to your business requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
}