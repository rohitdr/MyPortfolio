"use client"
import { motion } from "framer-motion";
import Link from "next/link";
export default function Footer() {
    const links = 
  [
   { item:"Projects", path:'/projects'},
  //  { item:"Packages",path:'/pricing'},
   { item:"Contact",path:'/contact'}
  ];
  return (
    <footer className="relative bg-black text-white overflow-hidden py-24">

      {/* Soft Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-125 w-125 bg-white/5 blur-[180px]" />
      </div>

      {/* Huge Brand Text */}
      <div className="relative z-10 text-center font-black">

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          className="text-[18vw] leading-none tracking-tight"
        >
          ROHIT
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
          viewport={{ once: true }}
          className="text-[18vw] leading-none tracking-tight"
        >
          KUMAR
        </motion.h1>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">

        <p>© {new Date().getFullYear()} Rohit KUMAR</p>

        <div className="flex gap-6">
          {links.map((link,i)=>
            <Link key={i} href={link.path} className="hover:text-white transition">
           {link.item}
          </Link>
          )}
        
          
        </div>

        <p className="tracking-widest uppercase text-xs">
          Built with Next.js
        </p>

      </div>
    </footer>
  );
}