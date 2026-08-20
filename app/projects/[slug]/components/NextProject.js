"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { projects } from "../../data";

export default function NextProject({ project }) {
  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const nextProject =
    currentIndex === projects.length - 1
      ? projects[0]
      : projects[currentIndex + 1];

  return (
    <section className="border-t border-white/10 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-zinc-950
          "
        >

          <div className="grid lg:grid-cols-2">

            {/* Image */}

            <div className="overflow-hidden">

              <Image
                src={nextProject.image}
                alt={nextProject.title}
                width={1000}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  w-full
                  h-auto
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

            </div>

            {/* Content */}

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

              <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                Next Case Study
              </p>

              <h2 className="mt-6 text-4xl font-black leading-none lg:text-6xl">
                {nextProject.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                {nextProject.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-2">

                {nextProject.technologies
                  .slice(0, 4)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-4
                        py-2
                        text-xs
                      "
                    >
                      {tech}
                    </span>
                  ))}

              </div>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">

                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="
                    group
                    flex
                    h-14
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-white
                    px-7
                    text-black
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  View Next Project

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/projects"
                  className="
                    flex
                    h-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    px-7
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-black
                  "
                >
                  All Projects
                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}