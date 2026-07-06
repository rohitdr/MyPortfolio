"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "sonner";
export default function ContactForm() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  projectType: "Business Website",
  budget: "₹5k – ₹10k",
  message: "",
});
const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = (e) => {
  e.preventDefault();
if (
    !form.name ||
    !form.email ||
    !form.message
) {
    toast.warning("Please fill all required fields.");
    return;
}
  const text = `
*New Website Inquiry*

👤 Name: ${form.name}

📧 Email: ${form.email}

💻 Project Type: ${form.projectType}

💰 Budget: ${form.budget}

📝 Project Details:
${form.message}
`;

  window.open(
    `https://wa.me/917009962845?text=${encodeURIComponent(text)}`,
    "_blank"
  );
};
  return (
    <section className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
              Project Inquiry
            </p>

            <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
              Tell Me About
              <br />
              Your Project
            </h2>

            <p className="mt-8 text-zinc-400 leading-8 text-lg">
              Fill out the form and I'll get back to you within 24 hours.
              The more details you share, the better I can understand
              your requirements.
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs">
                  Response Time
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Less than 24 Hours
                </h3>
              </div>

              <div>
                <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs">
                  Project Types
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Business Websites, Portfolios & Web Apps
                </h3>
              </div>

            </div>

          </motion.div>

          {/* Right */}

    <motion.form
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  onSubmit={handleSubmit}
  viewport={{ once: true }}
  className="rounded-[28px] lg:rounded-[36px] border border-white/10 bg-zinc-950 p-6 sm:p-8 lg:p-10"
>
  <div className="space-y-5">

    {/* Name */}

    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-500">
        Full Name
      </label>

      <input
        type="text"
        name="name"
    value={form.name}
    onChange={handleChange}
        placeholder="John Doe"
        className="h-14 w-full rounded-xl lg:rounded-2xl border border-white/10 bg-black px-5 text-white placeholder:text-zinc-600 outline-none transition focus:border-white"
      />
    </div>

    {/* Email */}

    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-500">
        Email Address
      </label>

      <input
        type="email"
          name="email"
    value={form.email}
    onChange={handleChange}
        placeholder="john@example.com"
        className="h-14 w-full rounded-xl lg:rounded-2xl border border-white/10 bg-black px-5 text-white placeholder:text-zinc-600 outline-none transition focus:border-white"
      />
    </div>

    {/* Project Type + Budget */}

    <div className="grid gap-5 md:grid-cols-2">

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-500">
          Project Type
        </label>

        <select   name="projectType"
    value={form.projectType}
    onChange={handleChange} className="h-14 w-full rounded-xl lg:rounded-2xl border border-white/10 bg-black px-5 text-white outline-none transition focus:border-white">
          <option>Business Website</option>
          <option>E-Commerce Website</option>
          <option>Portfolio Website</option>
          <option>Landing Page</option>
          <option>Custom Web Application</option>
          <option>Website Redesign</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-500">
          Budget
        </label>

        <select    name="budget"
    value={form.budget}
    onChange={handleChange} className="h-14 w-full rounded-xl lg:rounded-2xl border border-white/10 bg-black px-5 text-white outline-none transition focus:border-white">
          <option>₹5k – ₹10k</option>
          <option>₹10k – ₹20k</option>
          <option>₹20k – ₹40k</option>
          <option>₹40k+</option>
        </select>
      </div>

    </div>

    {/* Message */}

    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-500">
        Project Details
      </label>

      <textarea
        rows={5}
         name="message"
    value={form.message}
    onChange={handleChange}
        placeholder="Tell me about your project..."
        className="w-full rounded-xl lg:rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-white resize-none"
      />
    </div>

    {/* Button */}

    <button
      type="submit"
      className="group mt-2 flex h-14 sm:h-16 w-full items-center justify-center gap-3 rounded-full bg-white text-black font-medium transition-all duration-300 hover:scale-[1.02]"
    >
      <span>Send Inquiry</span>

      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
    </button>

  </div>
</motion.form>

        </div>

      </div>
    </section>
  );
}