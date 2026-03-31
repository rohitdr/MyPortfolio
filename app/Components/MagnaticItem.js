"use client"
import { useMotionValue } from 'framer-motion'
import React, { use, useRef } from 'react'
import { motion } from 'framer-motion'
export default function MagnaticItem({children,onClick,active}) {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const handleMouseMove = (e)=>{
     const rect = ref.current.getBoundingClientRect()
        const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);

    x.set(dx * 0.2);
    y.set(dy * 0.2);
    }
    const handleMouseLeave =()=>{
        x.set(0)
        y.set(0)
    }
  return (
  <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative px-4 py-1.5 rounded-full cursor-pointer capitalize"
    >
      {/* Active pill */}
      {active && (
        <motion.div
          layoutId="pill"
          className="absolute inset-0 bg-white/10 rounded-full"
        />
      )}

      <span className="relative z-10 text-gray-300 hover:text-white transition">
        {children}
      </span>
    </motion.div>
  )
}
