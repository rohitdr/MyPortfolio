import React from 'react'

export default function Goals({futureGoals}) {
  return (
   <section className="mt-16 px-6 md:px-16 relative z-10">

  {/* Heading */}
  <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
    Future Goals
  </h2>


  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">



{futureGoals.map((item, index) => (
   <div key={index} className={`p-6 rounded-2xl border border-${item.theme}-500/20 bg-${(index%2)===0?"cyan":"purple"}-500/10 backdrop-blur-xl shadow-lg hover:scale-[1.03] transition`}>

      <h3 className="text-cyan-300 font-semibold text-lg mb-2">
        {item.title}
      </h3>

      <p className="text-sm text-white/60">
      {item.desc}
      </p>

    </div>
))}

  

  </div>
</section>
  )
}
