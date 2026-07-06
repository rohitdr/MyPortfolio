"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { projects } from "../data";

export default function FeaturedProject() {
  const project = projects.find((item) => item.featured);

  return (
    <section
      id="featured-project"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-28"
    >
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
          Featured Project
        </p>

        <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
          My Best
          <br />
          Work
        </h2>
      </motion.div>

      {/* Card */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6 }}
        className="overflow-hidden rounded-[36px] border border-white/10 bg-zinc-950"
      >
        {/* Image */}

        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-[260px] md:h-[420px] lg:h-[560px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}

        <div className="p-8 lg:p-12">

          <div className="flex flex-wrap items-center justify-between gap-6">

            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
                {project.category}
              </p>

              <h3 className="mt-3 text-4xl lg:text-6xl font-black">
                {project.title}
              </h3>
            </div>

            <span className="rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-400">
              {project.year}
            </span>

          </div>

          <p className="mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            {project.description}
          </p>

          {/* Tech */}

          <div className="mt-10 flex flex-wrap gap-3">

            {project.technologies.map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-white/10 px-4 py-2 text-sm"
              >
                {tech}
              </span>

            ))}

          </div>

          {/* Features */}

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {project.features.map((feature) => (

              <div
                key={feature}
                className="rounded-2xl border border-white/10 p-5"
              >
                <p className="text-white font-medium">
                  {feature}
                </p>
              </div>

            ))}

          </div>

          {/* CTA */}

          <div className="mt-14 flex flex-wrap gap-5">

            <a
              href={`/projects/${project.slug}`}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-black transition-all duration-300 hover:scale-105"
            >
              View Case Study

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-7 py-4 hover:bg-white hover:text-black transition-all"
            >
              Visit Website
            </a>

          </div>

        </div>

      </motion.div>
    </section>
  );
}