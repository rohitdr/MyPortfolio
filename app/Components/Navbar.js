"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Projects", "Skills", "Contact"];

  return (
    <>
      <motion.header
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <nav className="
          max-w-7xl mx-auto
          px-6 lg:px-10
          py-6
          flex items-center justify-between
        ">

          {/* LOGO */}
          <div className="text-white font-bold tracking-[0.3em] text-xs">
            ROHIT DEVSTACK
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.3em] text-zinc-400">
            {links.map((link, i) => (
              <a
                key={i}
                href={`#${link.toLowerCase()}`}
                className="relative group hover:text-white transition"
              >
                {link}
                <span className="
                  absolute left-0 -bottom-2
                  w-0 h-px
                  bg-white
                  group-hover:w-full
                  transition-all duration-300
                " />
              </a>
            ))}
          </div>

          {/* CTA (desktop only) */}
          <a
            href="https://wa.me/7009962845"
            className="
              hidden md:block
              text-xs uppercase tracking-[0.3em]
              text-white
              border border-white/20
              px-4 py-2
              hover:bg-white hover:text-black
              transition
            "
          >
            Hire Me
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>

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
            <div className="flex flex-col items-center py-10 gap-8 text-sm uppercase tracking-[0.3em] text-zinc-400">

              {links.map((link, i) => (
                <a
                  key={i}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  {link}
                </a>
              ))}

              <a
                href="https://wa.me/7009962845"
                onClick={() => setOpen(false)}
                className="
                  mt-4
                  text-black bg-white
                  px-6 py-2
                  text-xs uppercase tracking-[0.3em]
                "
              >
                Hire Me
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}