
"use client"
import React from 'react'
import { motion } from "framer-motion";
export default function Hero() {
  return (
   <section className='min-h-screen bg-black text-white relative flex items-center overflow-hidden'>
     <motion.div
     initial={{opacity:0}}
     animate={{opacity:0.03}}
     transition={{duration:1.15}}
     className="absolute inset-0 flex items-center justify-center  pointer-events-none "
     >
<h2 className='text-[20vw] relative font-black tracking-tight'>
  ROHIT
</h2>
     </motion.div>

     <div className='relative max-w-7xl mx-auto w-full px-6 lg:px-10 '>
   <motion.p
   initial={{opacity:0,y:30}}
   animate={{opacity:1,y:0}}
   transition={{duration:0.6}}
   className='uppercase tracking-[0.4em] text-zinc-500 text-xs mb-8'
   >
      creative developer • india
   

   </motion.p>

   <motion.h1
     initial={{ opacity: 0, y: 60 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className='font-black leading-[0.9] tracking-tight'>
    <span className='block text-6xl md:text-8xl lg:text-[10rem]'>
      ROHIT
    </span>
    <span className='block text-6xl md:text-8xl lg:text-[10rem] text-zinc-600'>
KUMAR
    </span>

   </motion.h1>
   <motion.p
    initial={{ opacity: 0, y: 40 }}
       animate={{ opacity: 1, y: 0 }}
         transition={{ delay: 0.2 }}
         className='max-w-2xl text-lg md:text-2xl mt-10 text-zinc-300'
   >
Full Stack Developer crafting fast, scalable web
applications with clean code, thoughtful design,
and real business impact.

    
   </motion.p>
   <motion.div
     initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='flex gap-6 tracking-widest mt-12 text-zinc-500 text-xs  sm:text-sm'>
<span>DEVELOPER</span>
<span>DESIGNER</span>
<span>PROBLEM SOLVER</span>

   </motion.div>
     </div>
   <motion.div
   animate={{y:[0,20,0]}}
   transition={{repeat:Infinity,
    duration:2
   }}
   className='flex justify-center w-full absolute bottom-10 text-zinc-500 uppercase tracking-[0.3em]'
   >
 Scroll ↓
   </motion.div>

   </section>
  )
}
