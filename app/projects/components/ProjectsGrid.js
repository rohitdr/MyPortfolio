"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaChevronDown } from "react-icons/fa6";
import { projects } from "../data";
import Link from "next/link";

export default function ProjectsGrid() {
  const [showAll, setShowAll] = useState(false);

  // Exclude featured project
  const otherProjects = projects.filter((project) => !project.featured);

  const visibleProjects = otherProjects.slice(0, 3);
  const hiddenProjects = otherProjects.slice(3);

  const ProjectCard = ({ project, reverse = false }) => (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="border-t border-white/10 py-16"
    >
      <div
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-zinc-950">
          <img
            src={project.image}
            alt={project.title}
            className="h-[260px] md:h-[380px] lg:h-[460px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        {/* Content */}

        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-zinc-500">
            {project.category}
          </p>

          <h3 className="mt-5 text-4xl lg:text-6xl font-black">
            {project.title}
          </h3>

          <p className="mt-8 text-zinc-400 leading-8">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-4 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/projects/${project.slug}`}
           
              className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-black transition hover:scale-105"
            >
              View Case Study

              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-6 py-4 hover:bg-white hover:text-black transition"
            >
              Live Website
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
    return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py:10 lg:py-28">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <p className="uppercase tracking-[0.35em] text-xs text-zinc-500">
          Selected Projects
        </p>

        <h2 className="mt-5 text-5xl lg:text-7xl font-black leading-none">
          More
          <br />
          Case Studies
        </h2>
      </motion.div>

      {/* Always Visible */}

      {visibleProjects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          reverse={index % 2 !== 0}
        />
      ))}

      {/* Hidden Projects */}

      <AnimatePresence>

        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {hiddenProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                reverse={(visibleProjects.length + index) % 2 !== 0}
              />
            ))}
          </motion.div>
        )}

      </AnimatePresence>

      {/* View More */}

      {hiddenProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-4 rounded-full border border-white/10 px-8 py-5 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <div className="text-left">
              <p className="text-sm font-medium">
                {showAll
                  ? "Hide Projects"
                  : `View ${hiddenProjects.length} More Project${
                      hiddenProjects.length > 1 ? "s" : ""
                    }`}
              </p>

              <p className="text-xs opacity-60 mt-1">
                {showAll
                  ? "Show fewer projects"
                  : "Explore additional case studies"}
              </p>
            </div>

            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown />
            </motion.div>
          </button>
        </motion.div>
      )}

    </section>
  );
}