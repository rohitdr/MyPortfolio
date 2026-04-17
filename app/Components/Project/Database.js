import React from 'react'

export default function Database({Data}) {
  return (
   <section className="mt-24 px-6 md:px-16">

  {/* Heading */}
  <h2 className="text-3xl font-semibold text-center mb-10 text-white">
   Entity Relationship Design
  </h2>

  <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">

    {Data.map((col, i) => (
      <div
        key={i}
        className="rounded-xl border border-white/10 bg-[#0b0f19] overflow-hidden"
      >
   
        <div className="px-4 py-3 border-b border-white/10 bg-white/5 text-white font-medium">
          {col.title}
        </div>

    
<div className="text-xs max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20">
  {col.fields.map(([field, type], idx) => (
    <div
      key={idx}
      className="flex justify-between px-4 py-2 border-b border-white/5 hover:bg-white/5"
    >
      <span className="text-white/80">{field}</span>
      <span className="text-white/50">{type}</span>
    </div>
  ))}
</div>
      </div>
    ))}

  </div>
</section>
  )
}
