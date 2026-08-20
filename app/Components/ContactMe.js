"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";

export default function ContactMe() {
  
  return (
  <section className="bg-black text-white py-16 px-4 overflow-hidden">
 <div className="relative max-w-5xl text-center mx-auto">
  <motion.p
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase text-zinc-500 tracking-[0.4em] text-xs"
  >
Contact
  </motion.p>
  <motion.h2
           initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-bold mt-6 leading-tight "
  >
      Let’s build something
           <br />
           exceptional together
  </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-zinc-400 mt-8 text-lg max-w-2xl mx-auto"
        >
           I'm a Full Stack Developer actively looking for full-time
          opportunities where I can contribute, learn, and grow with
          a team. Feel free to reach out.
        </motion.p>
               <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
        >
          <a
            href="mailto:rohitdr098@gmail.com"
            className="bg-white text-black px-8 py-4 hover:scale-95 transition-all rounded-full font-medium flex items-center justify-center gap-3"
          >
            Send Email <FaArrowRight />
          </a>

          <a
            href="https://wa.me/7009962845"
            target="_blank"
            className="border border-white/20 hover:border-[#25D366] hover:text-[#25D366] transition-all hover:scale-95 px-8 py-4 rounded-full text-white "
          >
           WhatsApp
          

          </a>
        </motion.div>
 </div>

  </section>
  );
}

