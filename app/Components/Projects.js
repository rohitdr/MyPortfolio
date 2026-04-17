"use client"
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Projects() {
  
const projects = [
  {
    title: "ChatNova",
    desc: "Real-time chat app with smooth UX and optimized rendering.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB","Cloudinary"],
    features: [
      "Real-time messaging",
      "No UI flicker",
      "Fast chat switching",
    ],
    image:"https://res.cloudinary.com/do2twyxai/image/upload/v1775015007/Screenshot_235_shn4la.png",
    live: "https://chat-nova-frontend-4nna.vercel.app/",
    github: "https://github.com/rohitdr/ChatNova-Frontend.git",
  },
  {
    title: "RecipeRiot",
    desc: "Recipe discovery platform with search and filtering.",
    tech: ["React", "Tailwind", "API", "Node.js"],
    features: [
      "Dynamic search",
      "Responsive UI",
      "Smooth interactions",
    ],
    image: "https://res.cloudinary.com/do2twyxai/image/upload/v1776438372/Screenshot_246_q46jee.png",
    live: "https://recipe-riot-frontend.vercel.app/",
    github: "https://github.com/rohitdr/RecipeRiot-Frontend.git",
  },
];
const handleClick=(name)=>{
router.push(`/${name}`)
}
  const router=useRouter();
  return (
    <section className="relative py-16 px-6  mx-auto overflow-hidden justify-center flex">

      <div className="absolute w-[600px] h-[600px] bg-indigo-500/20 blur-3xl rounded-full top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full bottom-[-150px] right-[-150px]" />
      <div className="max-w-6xl">

    

      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white text-center">
        Projects 🚀
      </h2>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            onClick={()=>{handleClick(project.title)}}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-10 items-center relative  ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* Image */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl group overflow-hidden border border-white/10 shadow-xl cursor-pointer"
            >
                      <img src={project.image} alt={`${project.title} Preview`} />
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
    <p className="text-white font-semibold">View Project →</p>
  </div>
              <div className="absolute -inset-2  rounded-2xl blur-2xl opacity-30 pointer-events-none" />
            </motion.a>

            {/* Content Card */}
            <motion.div
              className="bg-[#0B0F1A]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl space-y-4"
              initial={{ opacity: 0, x: index % 2 !== 0 ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            
          
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.desc}</p>

              {/* Tech Pills (Transparent Gradient like Hero) */}
           <div className="flex flex-wrap gap-2 mt-2">
  {project.tech.map((t) => {
    let bg = "bg-white/10";   // default soft transparent background
    let text = "text-white";  // default text

    // Map each tech to a hero-like color
    if (t === "React") {
      bg = "bg-indigo-500/20";
      text = "text-indigo-300";
    }
    if (t === "Node.js") {
      bg = "bg-purple-500/20";
      text = "text-purple-300";
    }
    if (t === "Socket.io") {
      bg = "bg-pink-500/20";
      text = "text-pink-300";
    }
    if (t === "MongoDB") {
      bg = "bg-green-500/20";
      text = "text-green-300";
    }
    if (t === "Cloudinary") {
      bg = "bg-yellow-500/20";
      text = "text-yellow-300";
    }
    if (t === "Tailwind") {
      bg = "bg-sky-500/20";
      text = "text-sky-300";
    }

    return (
      <motion.span
        key={t}
        whileHover={{ scale: 1.1, textShadow: "0 0 6px rgba(255,255,255,0.4)" }}
        className={`px-3 py-1 text-sm rounded-full font-medium ${bg} ${text} backdrop-blur-sm border border-white/20`}
      >
        {t}
      </motion.span>
    );
  })}
</div>
              {/* Features */}
              <ul className="text-gray-400 text-sm space-y-1 mt-2">
                {project.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <motion.a
                  href={project.live}
                  target="_blank"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #6366f1" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-all"
                >
                  Live
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px #fff" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 rounded-xl border border-white/20 text-white text-sm hover:bg-white/10 transition-all"
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>  </div>
    </section>
  );
}