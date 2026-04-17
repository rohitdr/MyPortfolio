import React from 'react'
import { motion } from 'framer-motion'
export default function Hero({project}) {
    const {name,description,link,github,img} =project
  return (
     
      <section className="max-w-7xl mx-auto px-6 md:pt-24 relative z-10 mt-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
    
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                
                {name}
              </span>
            </h1>

            <p className="mt-6 text-gray-400 text-lg max-w-lg leading-relaxed">
            {description}
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg shadow-purple-500/20 hover:opacity-90 transition">
               <a href={link} target="_blank">Live Demo</a> 
              </button>

              <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
               <a href={github} target="_blank"> Source Code</a>
              </button>
            </div>
          </motion.div>

       
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
              <img
                src={img}
                alt={`${name} preview`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>
  )
}
