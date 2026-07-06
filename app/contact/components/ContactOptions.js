"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa6";

export default function ContactOptions() {
  const options = [
    {
      title: "WhatsApp",
      subtitle: "Fastest way to reach me",
      description:
        "Have a project in mind? Let's discuss your requirements and get started today.",
      icon: FaWhatsapp,
      href: "https://wa.me/917009962845?text=Hi%20Saksam,%20I'd%20like%20to%20build%20a%20website.",
      featured: true,
      button: "Start Chat",
    },
    {
      title: "Email",
      subtitle: "Detailed project discussions",
      description:
        "Send me your project details and I'll get back to you within 24 hours.",
      icon: FaEnvelope,
      href: "mailto:rohitdr098@gmail.com",
      featured: false,
      button: "Send Email",
    },
    {
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      description:
        "Connect with me to discuss opportunities, collaborations, and web development projects.",
      icon: FaLinkedin,
      href: "https://linkedin.com/in/YOURUSERNAME",
      featured: false,
      button: "View Profile",
    },
  ];

  return (
    <section
      id="contact-options"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
          Contact Options
        </p>

        <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
          Choose Your
          <br />
          Preferred Way
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">

        {options.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group rounded-[36px] border p-10 transition-all duration-300 ${
                item.featured
                  ? "bg-white text-black border-white"
                  : "border-white/10 bg-zinc-950 hover:border-white/30"
              }`}
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                  item.featured
                    ? "bg-black text-white"
                    : "bg-white/5 text-white"
                }`}
              >
                <Icon size={28} />
              </div>

              <p
                className={`mt-8 uppercase tracking-[0.3em] text-xs ${
                  item.featured ? "text-black/60" : "text-zinc-500"
                }`}
              >
                {item.subtitle}
              </p>

              <h3 className="mt-4 text-3xl font-black">
                {item.title}
              </h3>

              <p
                className={`mt-6 leading-8 ${
                  item.featured ? "text-black/70" : "text-zinc-400"
                }`}
              >
                {item.description}
              </p>

              <div className="mt-10 flex items-center gap-3 font-medium">
                {item.button}

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          );
        })}

      </div>
    </section>
  );
}