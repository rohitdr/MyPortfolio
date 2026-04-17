import React from 'react'

export default function TechStack({Tech}) {
  
  return (
   <section className="mt-24 px-6 md:px-16 text-center relative z-10">
  <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
    Tech Stack
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

    {Tech.map((section, i) => (
      <div
        key={i}
        className={`group relative p-6 rounded-2xl border ${section.border}
        bg-gradient-to-br ${section.color}
        backdrop-blur-xl transition-all duration-300
        hover:scale-[1.03] hover:shadow-2xl`}
      >
        <h3 className={`text-lg font-semibold mb-5 ${section.text}`}>
          {section.title}
        </h3>

        <div className="flex flex-wrap gap-2 justify-center">
          {section.items.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-sm rounded-lg
              bg-white/5 border border-white/10
              hover:bg-white/10 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
  )
}
