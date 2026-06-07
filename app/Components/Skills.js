"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "Next.js", level: "Advanced" },
  { name: "React", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Framer Motion", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "Cloudinary", level: "Intermediate" },
  { name: "API Development", level: "Advanced" },
  { name: "React Query", level: "Advanced" },
  { name: "UI/UX Design", level: "Advanced" },
];

export default function Skills() {
  const [skillsLength,setSkillsLength]=useState(6)
  return (
 <section className="bg-black text-white py-16 relative">
   <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <motion.div
                initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
      >
        <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs">Exerpertise</p>
        <h2 className=" text-5xl md:text-7xl font-black mt-4">
          Skills &
          <br/>
          Capabilities
        </h2>

      </motion.div>
      <AnimatePresence>
      <div className="grid lg:grid-cols-2 gap-x-20 gap-y-10">
        {skills.slice(0,skillsLength).map((skill,index)=>{
  return   <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{opacity:0,x:-30}}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-white/10 pb-6 flex justify-between items-center group"
            >
              <h3 className="text-2xl md:text-3xl font-semibold group-hover:translate-x-2 transition">
                {skill.name}
              </h3>

           
            </motion.div>
})}
       
      </div></AnimatePresence>
     <div className="flex justify-center items-center py-12">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() =>
      setSkillsLength((prev) =>
        prev === skills.length ? 6 : skills.length
      )
    }
    className="
      relative px-8 py-4 rounded-full
      text-sm md:text-base font-medium
      border border-white/10
      bg-white/5 backdrop-blur-xl
      text-white
      overflow-hidden
      group
      cursor-pointer
    "
  >
  
  
    <span className="relative z-10 flex items-center gap-2">
      {skillsLength === skills.length ? "Show Less" : "Read More"}

      <motion.span
        animate={{ y: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="text-xs opacity-70"
      >
        ↓
      </motion.span>
    </span>
  </motion.button>
</div>
   
   </div>
 </section>
  );
}
