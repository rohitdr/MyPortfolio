import React from 'react'

export default function Images({name,screenshots}) {
 
  return (
    <section className="mt-16 px-6 md:px-16 relative z-10">

 
  <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
    {name} Screenshots
  </h2>

 
<div className="max-w-7xl mx-auto relative">
  
  {/* Glow background */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 blur-3xl rounded-3xl" />

  <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {screenshots.map((item, index) => (
      <div
        key={index}
        className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl hover:scale-105 transition"
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
        />

        <div className="p-4">
          <h3 className="text-white text-sm font-semibold">
            {item.title}
          </h3>
          <p className="text-xs text-white/60">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
</section>
  )
}
