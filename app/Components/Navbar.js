"use client"
import React, {  useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import MagnaticItem from './MagnaticItem'
import Hero from './Hero'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Skills from './Skills'
import { useRouter } from 'next/navigation'
export default function Navbar({type="portfolio"}) {
  const router =useRouter()
  const [active,setActive]=useState("Home")
  const portfolioSection=["Home","Projects","Skills","Contact","CV"]
  const ChatSection=["Home","Projects","Skills","Contact","CV"]
const sections =["Home","Projects","Skills","Contact","CV"]
const [isOpen,setIsOpen]=useState(false)
const scrollToSection=(item)=>{
  if(item==="Resume") return
  const el= document.getElementById(item)
  el.scrollIntoView({behavior:"smooth"})

}


 useEffect(()=>{
    const handleScrollActive=()=>{
        let current=""
          const scrollTop = window.scrollY
         if (scrollTop < 50) {
      setActive("Home")
      return
    }
    sections.forEach((id)=>{
    

  const el = document.getElementById(id)
  if(!el) return
     const rect = el.getBoundingClientRect()

      if (rect.top <= 150 && rect.bottom >= 150) {
      
    current=id
  }
  

})
 if (current && current !== active) {
      setActive(current)
    }
  
    }
     window.addEventListener("scroll",handleScrollActive)
     return ()=>{
        window.removeEventListener("scroll",handleScrollActive)
     }
  },[])

  const handleSectionClick=(section)=>{

    if(type!=="portfolio"){
      router.push('/')
      setTimeout(() => {
         if(section !=="CV"){
scrollToSection(section)

    }
      }, 200);
      return
    }
     if(section !=="CV"){
scrollToSection(section)

    }
   
    else{

      window.open("https://drive.google.com/file/d/1L4KBT9Pto4LxVC2OgAhrexBfeBPHazhX/view?usp=drivesdk","_blank")
    }
  }
  return (
 <>
 <motion.nav initial={{y:-80,opacity:0}} animate={{y:0,opacity:1}} className='fixed left-1/2 -translate-x-1/2 top-6 z-40 hidden md:block'>
 <div className="p-[1px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

 <div className='flex items-center gap-6 py-3 px-2 rounded-full bg-[#0B0F1A]/80 backdrop-blur-xl border border-white/10'>
 <div className='text-lg font-semibold cursor-pointer pl-2 text-white'>Rohit</div>
 <div className='flex text-white relative gap-2 '> 
{sections.map((item)=>(
  <MagnaticItem key={item}  active={active === item}
                  onClick={()=>handleSectionClick(item)}>
    {item}
</MagnaticItem>
))}

 </div>

 </div>
</div>
 </motion.nav>
 <div className="fixed top-5 right-5 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-white/10 backdrop-blur text-white"
        >
          ☰
        </button>
      </div>
      {isOpen && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex items-center justify-center md:hidden"
  >
    <motion.div
      initial={{ y: 40, scale: 0.95, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="bg-[#0B0F1A]/90 backdrop-blur-xl rounded-2xl p-6 w-72 space-y-4 text-center border border-white/10 shadow-2xl"
    >
      {sections.map((section, index) => (
        <motion.div
          key={section}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={()=>{setIsOpen(false),handleSectionClick(section)}}
          className={`relative px-4 py-2 rounded-lg text-lg capitalize cursor-pointer transition-all
            ${
              active === section
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
        >
          {section}
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
)}
{type==="portfolio" &&<>
<section id="Home" className=''><Hero></Hero></section>
<section id="Projects" className=''><Projects></Projects></section>
<section id="Skills" className=''><Skills></Skills></section>
<section id="Contact" className=''><ContactMe/></section></>
}
 </>
  )
}
