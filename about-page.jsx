"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const skills = [
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Redis",
  "Tailwind CSS", "REST APIs", "JWT", "WebSockets", "GitHub Actions",
  "Vercel", "Cloudinary", "SEO",
];

const projects = [
  {
    name: "ChatNova",
    desc: "Real-time chat app with Socket.IO — JWT auth, ~40% faster login (1.2s → 700ms) via Redis pipelining + server region optimization, React lazy-loading for smaller bundles.",
    link: "https://chat-nova-frontend-4nna.vercel.app",
  },
  {
    name: "Recipe Riot",
    desc: "Full-stack recipe sharing platform — auth, likes/comments, RBAC, Cloudinary image uploads, search & filtering.",
    link: "https://recipe-riot-frontend-aed5.vercel.app",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full px-4 py-16 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 sm:gap-12">

        {/* Header */}
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="border border-white/10 rounded-xl p-6 sm:p-8"
        >
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            About Me
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/60">
            MERN Stack Developer building real-time, SEO-friendly web apps.
          </p>
          <p className="mt-5 text-sm sm:text-base leading-relaxed text-white/80">
            I&apos;m Rohit, a MERN Stack Developer who builds scalable,
            real-time, SEO-friendly web applications with React, Next.js, and
            Node.js. I care about performance, security, and clean data
            handling — and I&apos;ve spent the last few months delivering
            production apps directly to freelance clients, end to end.
          </p>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="border border-white/10 rounded-xl p-6 sm:p-8"
        >
          <h2 className="text-lg sm:text-xl font-semibold">Experience</h2>
          <div className="mt-4">
            <p className="text-sm sm:text-base font-medium">
              Freelance MERN Stack Developer — Direct Clients
              <span className="ml-2 text-white/40 text-xs sm:text-sm">
                3 months
              </span>
            </p>
            <ul className="mt-3 space-y-2 text-sm sm:text-base text-white/70 list-disc list-inside">
              <li>
                Delivered 5 web applications — 1 full-stack MERN app and 4
                React/Next.js frontend projects
              </li>
              <li>
                Set up CI/CD pipelines for automated builds and deployments
              </li>
              <li>
                Designed REST APIs with JWT authentication and role-based
                access control
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="border border-white/10 rounded-xl p-6 sm:p-8"
        >
          <h2 className="text-lg sm:text-xl font-semibold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={fadeUp}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs sm:text-sm text-white/70"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="flex flex-col gap-4 sm:gap-5"
        >
          <h2 className="text-lg sm:text-xl font-semibold px-1">
            Featured Projects
          </h2>
          {projects.map((project) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -2 }}
              className="border border-white/10 rounded-xl p-6 sm:p-8 transition-colors hover:border-white/25"
            >
              <h3 className="text-base sm:text-lg font-medium">
                {project.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/70 leading-relaxed">
                {project.desc}
              </p>
            </motion.a>
          ))}
        </motion.section>

        {/* Education */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="border border-white/10 rounded-xl p-6 sm:p-8"
        >
          <h2 className="text-lg sm:text-xl font-semibold">Education</h2>
          <p className="mt-3 text-sm sm:text-base text-white/70">
            Bachelor of Computer Applications (BCA) — 81%
            <span className="ml-2 text-white/40">2020–2023</span>
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="border border-white/10 rounded-xl p-6 sm:p-8 text-center"
        >
          <h2 className="text-lg sm:text-xl font-semibold">
            Have an idea?
          </h2>
          <p className="text-white/60 text-sm sm:text-base mt-1">
            Let&apos;s build it.
          </p>
          <a
            href="/contact"
            className="inline-block mt-5 rounded-lg border border-white/20 px-5 py-2.5 text-sm sm:text-base hover:bg-white/5 transition-colors"
          >
            Contact Me →
          </a>
        </motion.section>

      </div>
    </main>
  );
}
