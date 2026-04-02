"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
 import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

export default function ContactMe() {
  const [messageSent,setMessageSent]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
const [lastSentTime,setLastSentTime]=useState(0)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  if(formData.name.length<3){
alert("Please Write Your full Name")
  }
  else if(formData.message.length<20){
    alert("Messages length should be more than 20 Character")

  }
  else{
  e.preventDefault();
 const now = Date.now();

  if (now - lastSentTime < 30000) {
    alert("Please wait before sending another message ⏳");
    return;
  }
console.log(process.env.NEXT_PUBLIC_EMAILJS_KEY)
  setLastSentTime(now);
  emailjs.send(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
     process.env.NEXT_PUBLIC_EMAILJS_KEY
  )
  .then(() => {
    console.log("Form submitted");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  })
  .catch((error) => {
    console.error(error);
    alert("Failed to send ❌");
  });}
};

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <section
      id="Contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden p-6"
    >
              <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
  
      <motion.div
        className="relative w-full max-w-lg bg-gray-900/90 p-8 rounded-2xl shadow-lg border border-white/20 z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          variants={containerVariants}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
            variants={itemVariants}
            whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
            variants={itemVariants}
            whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500 resize-none"
            variants={itemVariants}
            whileFocus={{ scale: 1.02, borderColor: "#6366f1" }}
          />

          <motion.button
            type="submit"
            className="mt-4 bg-indigo-600 hover:bg-indigo-500 transition-colors rounded-lg py-3 font-semibold"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
 
      
        <motion.div
          className="flex justify-center gap-6 mt-6"
          variants={itemVariants}
        >
          <motion.a
             
            // href="https://linkedin.com"
            target="_blank"
         
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/rohitdr"
            target="_blank"
           
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://wa.me/7009962845"
            target="_blank"
        
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsapp size={24} />
          </motion.a>
          <motion.a
            href="mailto:rohitdr098@gmail.com"
            target="_blank"
        
            whileHover={{ scale: 1.2}}
          
          >
            <FaEnvelope size={24} />
          </motion.a>
        </motion.div>

     
        <motion.p className="mt-6 text-center text-gray-400 text-sm" variants={itemVariants}>
          © {new Date().getFullYear()} Rohit Kumar. All rights reserved.
        </motion.p>
      </motion.div>
    </section>


  );
}