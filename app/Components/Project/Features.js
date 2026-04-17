import React from 'react'
import { motion } from 'framer-motion'
export default function Features({Features}) {
  return (
     <section className="mt-14 px-6 md:px-16 relative z-10  ">
        <h2 className="text-3xl font-semibold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {Features.map((feature, i) => (
          <motion.div
  key={i}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.1 }}
  viewport={{ once: true }}
  className="group p-6 rounded-2xl bg-white/5 backdrop-blur-lg 
             border border-white/10 hover:border-purple-400/50 
             hover:bg-white/10 transition-all duration-300 
             hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
>

  <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg 
                  bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                  group-hover:scale-110 transition">
    {/* replace with real icon later */}
    <span className="text-lg">⚡</span>
  </div>

  {/* TITLE */}
  <h3 className="text-lg font-semibold text-white leading-snug">
    {feature.title}
  </h3>

  {/* DESCRIPTION */}
  <p className="text-sm text-gray-400 mt-2 leading-relaxed">
    {feature.description}
  </p>
</motion.div>
          ))}
        </div>
      </section>
  )
}
