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
  className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 py-16 lg:py-28"
>
  {/* Heading */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-10 lg:mb-16"
  >
    <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
      Contact Options
    </p>

    <h2 className="mt-4 text-4xl font-black leading-none sm:text-5xl lg:mt-5 lg:text-7xl">
      Choose Your
      <br />
      Preferred Way
    </h2>
  </motion.div>

  {/* Cards */}

  <div className="grid gap-5 lg:grid-cols-3 lg:gap-8">

    {options.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ y: -8 }}
          className={`
            group
            flex flex-col
            rounded-[26px] lg:rounded-[36px]
            border
            p-6 sm:p-8 lg:p-10
            transition-all duration-300
            ${
              item.featured
                ? "border-white bg-white text-black"
                : "border-white/10 bg-zinc-950 hover:border-white/30"
            }
          `}
        >
          {/* Icon */}

          <div
            className={`
              flex h-14 w-14 items-center justify-center
              rounded-2xl
              lg:h-16 lg:w-16
              ${
                item.featured
                  ? "bg-black text-white"
                  : "bg-white/5 text-white"
              }
            `}
          >
            <Icon size={24} />
          </div>

          {/* Subtitle */}

          <p
            className={`mt-6 text-[11px] uppercase tracking-[0.3em] ${
              item.featured ? "text-black/60" : "text-zinc-500"
            }`}
          >
            {item.subtitle}
          </p>

          {/* Title */}

          <h3 className="mt-3 text-2xl font-black lg:mt-4 lg:text-3xl">
            {item.title}
          </h3>

          {/* Description */}

          <p
            className={`mt-4 flex-1 text-sm leading-7 lg:mt-6 lg:text-base lg:leading-8 ${
              item.featured ? "text-black/70" : "text-zinc-400"
            }`}
          >
            {item.description}
          </p>

          {/* CTA */}

          <div className="mt-8 flex items-center justify-between border-t border-current/10 pt-5">

            <span className="text-sm font-medium uppercase tracking-[0.18em]">
              {item.button}
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight size={14} />
            </div>

          </div>
        </motion.a>
      );
    })}

  </div>
</section>
  );
}