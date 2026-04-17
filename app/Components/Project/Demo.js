
import React from 'react'

export default function Demo({Info}) {
    const {name,title,src,tech}=Info
  return (
  <section className="mt-16 px-6 md:px-16 relative z-10">

  {/* Heading */}
  <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
    {name} Demo
  </h2>

  {/* Container */}
  <div className="max-w-7xl mx-auto relative">

    {/* Glow background */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-3xl" />

    {/* Card */}
    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

      {/* Video */}
      <div className="aspect-video w-full bg-black">
        <video
          controls
          className="w-full h-full object-cover"
          poster="/chatnova-thumbnail.png"
          autoPlay
          muted
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Footer Info */}
      <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h3 className="text-white text-lg font-semibold">
          {title}
          </h3>
          <p className="text-sm text-white/60">
           {tech}
          </p>
        </div>

       

      </div>
    </div>
  </div>
</section>
  )
}
