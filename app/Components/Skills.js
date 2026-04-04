"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs,  FaJsSquare, } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiSocketdotio,SiTailwindcss  } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={50} color="#61DBFB" />, description: "Building interactive UIs & SPAs" },
    { name: "Node.js", icon: <FaNodeJs size={50} color="#339933" />, description: "Backend APIs & server logic" },
    { name: "Socket", icon: <SiSocketdotio size={50} color="#b794f4" />, description: "Real Time Communications" },
    { name: "TailWind", icon: <SiTailwindcss  size={50} color="#4fd1c5" />, description: "Styling, animations & layouts" },
    { name: "JavaScript", icon: <FaJsSquare size={50} color="#F7DF1E" />, description: "Logic, DOM & dynamic features" },
    { name: "MongoDb", icon: <DiMongodb size={50} color="#306998" />, description: "Flexible,Scalable Database" },
 
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.15, rotate: 5 },
  };

  return (
    <section
      id="Skills"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 overflow-hidden"
    >
 <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 blur-3xl rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
    
    

      <motion.h2
        className="text-3xl font-bold mb-12 z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 z-10 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-gray-800/70 shadow-lg border border-white/20 cursor-pointer hover:bg-gray-700/80 transition-colors"
            variants={itemVariants}
            whileHover="hover"
          >
            {skill.icon}
            <p className="mt-4 text-sm md:text-lg font-semibold">{skill.name}</p>
            <p className="mt-1 text-[10px] md:text-sm text-gray-300 text-center">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}