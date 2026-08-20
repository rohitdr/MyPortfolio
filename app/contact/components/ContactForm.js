"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
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
      !form.company ||
      !form.role ||
      !form.message
    ) {
      toast.warning("Please fill all required fields.");
      return;
    }

    const text = `
*New Job Opportunity / Recruiter Inquiry*

👤 Name: ${form.name}

📧 Email: ${form.email}

🏢 Company: ${form.company}

💼 Role: ${form.role}

📝 Message:
${form.message}
`;

    window.open(
      `https://wa.me/917009962845?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact-options"
      className="border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
              Let's Connect
            </p>

            <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
              Have a Role
              <br />
              in Mind?
            </h2>

            <p className="mt-8 text-zinc-400 leading-8 text-lg max-w-xl">
              I'm currently open to MERN Stack Developer opportunities.
              If you're hiring for a frontend, backend, or full-stack role,
              I'd be happy to connect and discuss how I can contribute to
              your team.
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs">
                  Role
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  MERN Stack Developer
                </h3>
              </div>

              <div>
                <p className="text-zinc-500 uppercase tracking-[0.25em] text-xs">
                  Open To
                </p>

                <h3 className="mt-2 text-3xl font-bold">
                  Full-Time Opportunities
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
                  Your Name
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
                  placeholder="john@company.com"
                  className="h-14 w-full rounded-xl lg:rounded-2xl border border-white/10 bg-black px-5 text-white placeholder:text-zinc-600 outline-none transition focus:border-white"
                />
              </div>

              {/* Company + Role */}
              <div className="grid gap-5 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="h-14 w-full rounded-xl lg:rounded-2xl border border-white/10 bg-black px-5 text-white placeholder:text-zinc-600 outline-none transition focus:border-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Role
                  </label>

                  <input
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="MERN Developer"
                    className="h-14 w-full rounded-xl lg:rounded-2xl border border-white/10 bg-black px-5 text-white placeholder:text-zinc-600 outline-none transition focus:border-white"
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the opportunity..."
                  className="w-full rounded-xl lg:rounded-2xl border border-white/10 bg-black px-5 py-4 text-white placeholder:text-zinc-600 outline-none transition focus:border-white resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group mt-2 flex h-14 sm:h-16 w-full items-center justify-center gap-3 rounded-full bg-white text-black font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Let's Connect</span>

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </div>
          </motion.form>

        </div>

      </div>
    </section>
  );
}