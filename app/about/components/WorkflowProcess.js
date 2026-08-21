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

const workflowSteps = [
  {
    number: "01",
    title: "Understand",
    desc: "Analyze business requirements, project goals, and target user experience.",
  },
  {
    number: "02",
    title: "Plan",
    desc: "Architect scalable database schemas, API contracts, and component hierarchy.",
  },
  {
    number: "03",
    title: "Build",
    desc: "Develop clean, maintainable code with modern frameworks and design patterns.",
  },
  {
    number: "04",
    title: "Optimize",
    desc: "Refactor performance, Core Web Vitals, caching, and SEO structure.",
  },
  {
    number: "05",
    title: "Deploy",
    desc: "Automate builds via CI/CD pipelines and launch directly to production.",
  },
];

export default function WorkflowProcess() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <p className="uppercase tracking-[0.4em] text-zinc-500 text-xs font-semibold mb-3 sm:mb-4">
        HOW I WORK
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {workflowSteps.map((step) => (
          <motion.div
            key={step.number}
            variants={fadeUp}
            className="border border-white/10 rounded-2xl bg-zinc-900/40 p-5 sm:p-6 hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-zinc-500 tracking-widest">
                {step.number}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 sm:mt-2">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-xs mt-1.5 sm:mt-2 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
