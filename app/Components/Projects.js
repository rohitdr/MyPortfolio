"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "LUXE DRIVES",
      image: "/luxedrives.jpg",
      category: "Luxury Car Rental Platform",
    },
    {
      id: "02",
      title: "CHATNOVA",
      image: "/chatnova.jpg",
      category: "Real-Time Messaging App",
    },
    // {
    //   id: "03",
    //   title: "SHYAM LABS",
    //   image: "/projects/shyamlabs.webp",
    //   category: "Business Website",
    // },
    {
      id: "04",
      title: "RECIPE RIOT",
      image: "reciperiot.jpg",
      category: "Recipe Discovery Platform",
    },
  ];

  const [activeProject, setActiveProject] = useState(projects[0]);
  const [mobilePreview, setMobilePreview] = useState(null);

  return (
    <section className="bg-black text-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-24"
        >
          <p className="uppercase tracking-[0.4em] text-xs text-zinc-500 mb-4">
            Selected Work
          </p>

          <h2 className="text-5xl lg:text-7xl font-black leading-none">
            Featured <br />
            Projects
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* LEFT LIST */}
          <div>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveProject(project)}
                onClick={() => setMobilePreview(project)}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group cursor-pointer border-b border-white/10 py-6 lg:py-8"
              >
                <div className="flex items-center gap-5">
                  <span className="text-zinc-600 text-sm">
                    {project.id}
                  </span>

                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold transition-all duration-500 group-hover:translate-x-4">
                    {project.title}
                  </h3>
                </div>

                <p className="text-zinc-500 mt-2 ml-8 lg:ml-10">
                  {project.category}
                </p>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP PREVIEW */}
          <div className="hidden lg:block lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.image}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
              >
                <img
                loading="lazy"
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-137.5 object-cover"
                />

                <div className="p-8">
                  <span className="text-xs uppercase text-zinc-500 tracking-widest">
                    Featured Project
                  </span>

                  <h3 className="text-4xl font-bold mt-3">
                    {activeProject.title}
                  </h3>

                  <p className="text-zinc-400 mt-3">
                    {activeProject.category}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <AnimatePresence>
        {mobilePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 lg:hidden"
            onClick={() => setMobilePreview(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              className="bg-zinc-900 rounded-2xl overflow-hidden w-full max-w-md border border-white/10"
            >
              <img
                src={mobilePreview.image}
                alt={mobilePreview.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <span className="text-xs text-zinc-500 uppercase tracking-widest">
                  Project
                </span>

                <h3 className="text-2xl font-bold mt-2">
                  {mobilePreview.title}
                </h3>

                <p className="text-zinc-400 mt-2 text-sm">
                  {mobilePreview.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* MORE PROJECTS COMING */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-20 lg:mt-28 text-center"
>
  <div className="relative inline-block">

    {/* subtle glow */}
    <div className="absolute inset-0 flex justify-center">
      <div className="h-24 w-24 bg-white/10 blur-2xl rounded-full" />
    </div>

    <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
      More Projects Coming Soon
    </h3>

    <p className="text-zinc-500 mt-4 text-sm md:text-base max-w-md mx-auto">
      I’m constantly building new digital experiences. Stay tuned for more work.
    </p>

    {/* animated dots */}
    <motion.div
      animate={{ opacity: [0.3, 1, 0.3] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="mt-6 text-zinc-500 tracking-[0.3em] text-xs"
    >
      ● ● ●
    </motion.div>
  </div>
</motion.div>
    </section>
  );
}