import React from 'react'

export default function SystemArch() {
  return (
    <section className="mt-10 px-6 md:px-16 relative z-10">

  {/* Heading */}
  <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
    System Architecture
  </h2>

  {/* Card */}
  <div className="max-w-7xl mx-auto p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl relative overflow-hidden">

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />

    {/* Flow */}
    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center">

      {/* Frontend */}
      <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/10 flex-1 hover:scale-110 transition">
        <h3 className="text-purple-300 font-semibold text-sm">Frontend</h3>
        <p className="text-xs text-white/70">React + Context API</p>
      </div>

      <div className="text-white/40 hidden md:block">→</div>

      {/* Backend */}
      <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/10 flex-1 hover:scale-110 transition">
        <h3 className="text-blue-300 font-semibold text-sm">Backend</h3>
        <p className="text-xs text-white/70">Node.js + Express + JWT</p>
      </div>

      <div className="text-white/40 hidden md:block">→</div>

      {/* Database */}
      <div className="p-6 rounded-xl border border-green-500/30 bg-green-500/10 flex-1 hover:scale-110 transition">
        <h3 className="text-green-300 font-semibold text-sm">Database</h3>
        <p className="text-xs text-white/70">MongoDB + Mongoose</p>
      </div>

      <div className="text-white/40 hidden md:block">→</div>

      {/* Atlas (storage layer) */}
      <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex-1 hover:scale-110 transition">
        <h3 className="text-emerald-300 font-semibold text-sm">MongoDB Atlas</h3>
        <p className="text-xs text-white/70">Users + Messages + Conversations</p>
      </div>

    </div>
  </div>
</section>
  )
}
