"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiMail,
  FiGithub,
  FiFileText,
  FiArrowUpRight,
} from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      item: "Home",
      path: "/",
      icon: FiHome,
    },
    {
      item: "About",
      path: "/about",
      icon: FiUser,
    },
    {
      item: "Projects",
      path: "/projects",
      icon: FiCode,
    },
    {
      item: "Contact",
      path: "/contact",
      icon: FiMail,
    },
    {
      item: "GitHub",
      path: "https://github.com/rohitdr",
      icon: FiGithub,
      external: true,
    },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <nav
          className="
            max-w-7xl mx-auto
            px-6 lg:px-10
            py-6
            flex items-center justify-between
          "
        >
          {/* LOGO */}

          <Link
            href="/"
            className="text-white font-bold tracking-[0.3em] text-xs"
          >
            ROHIT KUMAR
          </Link>

          {/* DESKTOP LINKS */}

          <div
            className="
              hidden md:flex items-center gap-8
              text-xs uppercase tracking-[0.25em]
              text-zinc-400
            "
          >
            {links.map((link, i) => {
              const Icon = link.icon;

              if (link.external) {
                return (
                  <a
                    key={i}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group relative
                      flex items-center gap-2
                      hover:text-white transition
                    "
                  >
                    <Icon
                      size={14}
                      className="opacity-60 group-hover:opacity-100 transition"
                    />

                    {link.item}

                    <span
                      className="
                        absolute left-0 -bottom-2
                        w-0 h-px
                        bg-white
                        group-hover:w-full
                        transition-all duration-300
                      "
                    />
                  </a>
                );
              }

              return (
                <Link
                  key={i}
                  href={link.path}
                  className="
                    group relative
                    flex items-center gap-2
                    hover:text-white transition
                  "
                >
                  <Icon
                    size={14}
                    className="opacity-60 group-hover:opacity-100 transition"
                  />

                  {link.item}

                  <span
                    className="
                      absolute left-0 -bottom-2
                      w-0 h-px
                      bg-white
                      group-hover:w-full
                      transition-all duration-300
                    "
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT ACTIONS */}

          <div className="flex items-center gap-3">

            {/* Desktop Resume */}

            <a
              href="https://res.cloudinary.com/do2twyxai/image/upload/v1787247494/Rohit_Kumar_Resume.docx_phbb8k.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden md:flex
                group
                items-center gap-2
                text-xs uppercase tracking-[0.25em]
                text-zinc-300
                border border-white/10
                px-4 py-2.5
                hover:border-white/30
                hover:text-white
                transition
              "
            >
              <FiFileText
                size={14}
                className="group-hover:translate-y-[-1px] transition-transform"
              />

              Resume
            </a>

            {/* Desktop Let's Talk */}

            <Link
              href="/contact"
              className="
                hidden md:flex
                group
                items-center gap-2
                text-xs uppercase tracking-[0.25em]
                text-black
                bg-white
                px-4 py-2.5
                hover:bg-zinc-200
                transition
              "
            >
              Let's Talk

              <FiArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>

            {/* Mobile Resume Button (Visible directly on top navbar) */}

            <a
              href="https://res.cloudinary.com/do2twyxai/image/upload/v1787247494/Rohit_Kumar_Resume.docx_phbb8k.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex md:hidden items-center gap-1.5
                text-[10px] uppercase tracking-[0.2em]
                text-zinc-300
                border border-white/15
                px-3 py-1.5
                hover:border-white/40 hover:text-white
                transition
              "
            >
              <FiFileText size={12} />
              Resume
            </a>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className="md:hidden text-white text-xl p-1"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>

          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="
              fixed top-20 left-0 w-full z-40
              bg-black/90 backdrop-blur-xl
              border-t border-white/10
              md:hidden
            "
          >
            <div
              className="
                flex flex-col
                items-center
                py-10
                gap-7
                text-sm
                uppercase
                tracking-[0.3em]
                text-zinc-400
              "
            >
              {links.map((link, i) => {
                const Icon = link.icon;

                if (link.external) {
                  return (
                    <a
                      key={i}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="
                        flex items-center gap-3
                        hover:text-white
                        transition
                      "
                    >
                      <Icon size={17} />

                      {link.item}
                    </a>
                  );
                }

                return (
                  <Link
                    key={i}
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className="
                      flex items-center gap-3
                      hover:text-white
                      transition
                    "
                  >
                    <Icon size={17} />

                    {link.item}
                  </Link>
                );
              })}

              {/* Mobile Resume inside Drawer */}

              <a
                href="https://res.cloudinary.com/do2twyxai/image/upload/v1787247494/Rohit_Kumar_Resume.docx_phbb8k.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="
                  flex items-center gap-3
                  mt-3
                  border border-white/15
                  px-7 py-3
                  text-white
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  hover:border-white/40
                  transition
                "
              >
                <FiFileText size={16} />

                View Resume
              </a>

              {/* Mobile Contact CTA */}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="
                  flex items-center gap-3
                  text-black
                  bg-white
                  px-7 py-3
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  hover:bg-zinc-200
                  transition
                "
              >
                Let's Talk

                <FiArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}