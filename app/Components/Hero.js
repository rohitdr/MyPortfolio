"use client"
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />

      {/* 🧱 MAIN CONTENT WRAPPER */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* 🟣 LEFT CONTENT */}
        <div className="max-w-2xl text-center lg:text-left z-10">

          {/* 👋 NAME */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Rohit
            </span>
          </motion.h1>

          {/* 💼 ROLE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mt-3"
          >
         <TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "MERN Developer",
    2000,
    "React Specialist",
    2000,
  ]}
  speed={50}
  repeat={Infinity}
/>
          </motion.h2>

          {/* 📄 DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 mt-5"
          >
            I build modern, scalable and real-time web applications using the MERN stack.
          </motion.p>

          {/* 🚀 PROJECT HIGHLIGHT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-500 mt-2"
          >
            Currently building{" "}
            <span className="text-indigo-400">ChatNova</span> – a real-time chat application.
          </motion.p>

          {/* 🎯 BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 mt-8 justify-center lg:justify-start"
          >
            <button
              onClick={() =>
                document
                  .getElementById("Projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </button>

          <motion.a
          whileHover={{ boxShadow: "0 0 15px rgb(67 56 202)" }}
  href="/resume.pdf"
  download
  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all hover:scale-105"
>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="24" y2="24">
        <stop offset="0%" stopColor="#818cf8" />   {/* indigo */}
        <stop offset="50%" stopColor="#a855f7" />  {/* purple */}
        <stop offset="100%" stopColor="#ec4899" /> {/* pink */}
      </linearGradient>
    </defs>

    <path
      d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
      stroke="url(#grad)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

   Resume
</motion.a>
          </motion.div>
        </div>

        {/* 🟢 RIGHT SIDE CARD (FIXES EMPTY SPACE 🔥) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
    
          className="hidden lg:block z-10"
        >
          <div className="bg-[#0B0F1A]/80 backdrop-blur-xl border border-white/10 rounded-xl p-5 w-[300px] shadow-xl">
            
            <h3 className="text-white font-semibold text-lg">
              ChatNova
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Real-time chat app with socket.io, typing indicators, and modern UI.
            </p>

            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">
                React
              </span>
              <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded">
                Node.js
              </span>
              <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded">
                Socket.io
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ⬇️ SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 text-sm animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}