"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { projects } from "../data";

export default function FeaturedProject() {
  const project = projects.find((item) => item.featured);

  return (
<section
  id="featured-project"
  className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-28"
>
  {/* Heading */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-10 lg:mb-16"
  >
    <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
      Featured Project
    </p>

    <h2 className="mt-4 text-4xl font-black leading-none sm:text-5xl lg:text-7xl">
      My Best
      <br />
      Work
    </h2>
  </motion.div>

  {/* ================= MOBILE ================= */}

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="lg:hidden"
  >
    <div className="overflow-hidden rounded-[26px] border border-white/10 bg-zinc-950">

      <img
        src={project.image}
        alt={project.title}
        className="aspect-[16/10] w-full object-cover"
      />

      <div className="p-6">

        <div className="flex items-center justify-between">

          <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            {project.category}
          </p>

          <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-500">
            {project.year}
          </span>

        </div>

        <h3 className="mt-4 text-3xl font-black leading-none">
          {project.title}
        </h3>

        <p className="mt-5 text-[15px] leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-8">

          <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-2">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white/5 px-3 py-2 text-xs"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        <div className="mt-8 space-y-3">

          {project.features.map((feature) => (

            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <div className="h-2 w-2 rounded-full bg-white" />

              <span className="text-sm">
                {feature}
              </span>

            </div>

          ))}

        </div>

        <div className="mt-8 flex flex-col gap-3">

          <a
            href={`/projects/${project.slug}`}
            className="group flex h-14 items-center justify-center gap-3 rounded-full bg-white font-medium text-black"
          >
            View Case Study

            <FaArrowRight className="transition group-hover:translate-x-1" />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center rounded-full border border-white/10"
          >
            Visit Website
          </a>

        </div>

      </div>

    </div>
  </motion.div>

  {/* ================= DESKTOP ================= */}

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="hidden overflow-hidden rounded-[36px] border border-white/10 bg-zinc-950 lg:block"
  >

    {/* Keep your existing desktop card exactly as it is */}

  </motion.div>

</section>
  );
}