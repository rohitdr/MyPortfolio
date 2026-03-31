"use client"
import React, { useEffect, useState } from 'react'

export default function TopScroll() {
  const [scrollProgress,setScrollProgess]=useState(0)
  useEffect(()=>{
    const handleScroll=()=>{
      const scrollTop =window.scrollY;
      const hight = document.documentElement.scrollHeight-document.documentElement.clientHeight
      if(hight ===0) return
      setScrollProgess(scrollTop/hight)

    }
     window.addEventListener("scroll",handleScroll)
     return ()=>{
        window.removeEventListener("scroll",handleScroll)
     }
  },[])
  return (
    <div className='h-2000px'>
   <div
  className="fixed top-0 left-0 h-0.75 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
  style={{ width: `${scrollProgress * 100}%` }}
/>


    </div>
  )
}
