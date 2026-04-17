"use client"
import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Project/Hero'
import Features from '../Components/Project/Features';
import TechStack from '../Components/Project/TechStack';
import SystemArch from '../Components/Project/SystemArch';
import Database from '../Components/Project/Database';
import Demo from '../Components/Project/Demo';
import Images from '../Components/Project/Images';
import Goals from '../Components/Project/Goals';


export default function page() {
   const techInfo=[
      {
        title: "Frontend",
        color: "from-purple-500/20 to-purple-500/0",
        border: "border-purple-500/30",
        text: "text-purple-300",
        items: ["React", "Bootstrap CSS", "Context API"],
      },
      {
        title: "Backend",
        color: "from-blue-500/20 to-blue-500/0",
        border: "border-blue-500/30",
        text: "text-blue-300",
        items: ["Node.js", "Express"],
      },
      {
        title: "Database",
        color: "from-green-500/20 to-green-500/0",
        border: "border-green-500/30",
        text: "text-green-300",
        items: ["MongoDB", "Mongoose"],
      },
     
      {
        title: "Cloud & Media",
        color: "from-pink-500/20 to-pink-500/0",
        border: "border-pink-500/30",
        text: "text-pink-300",
        items: ["Cloudinary"],
      },

    
      {
        title: "Security & Auth",
        color: "from-red-500/20 to-red-500/0",
        border: "border-red-500/30",
        text: "text-red-300",
        items: ["JWT Auth", "bcrypt", "Express Validator"],
      },
    ]
  const FeaturesInfo = [
  {
    title: "Recipe Search with API Integration",
    description:
      "Search thousands of recipes in real-time using external food API with fast and optimized query handling.",
  },
  {
    title: "Admin Panel for Content Management",
    description:
      "Dedicated admin dashboard to add, update, and delete recipes along with moderation controls.",
  },
  {
    title: "User Comments System",
    description:
      "Users can post, view, and interact with comments on recipes with real-time updates and moderation support.",
  },
  {
    title: "Favorite Recipes Feature",
    description:
      "Users can save recipes to their favorites list for quick access and personalized experience.",
  },
  {
    title: "Recipe CRUD Operations",
    description:
      "Full create, read, update, and delete functionality for managing recipe data efficiently.",
  },
  {
    title: "Role-Based Access Control (RBAC)",
    description:
      "Separate access levels for admin and users ensuring secure operations and restricted admin functionalities.",
  },
];
  const projectInfo ={
  name:"RecipeRiot",
  description:" A real-time chat platform built with modern technologies featuring instant messaging, smooth infinite scrolling, and scalable backend architecture.",
  img:"https://res.cloudinary.com/do2twyxai/image/upload/v1776438372/Screenshot_246_q46jee.png",
  link:"https://recipe-riot-frontend-4gsk2aapu-rohitdrs-projects.vercel.app/",
  github:"https://github.com/rohitdr/RecipeRiot-Frontend.git"
}
const DatabaseSchema = [
  {
    title: "User",
    fields: [
    
      ["Profile_Image.url", "String"],
      ["Liked_Recipes", "ObjectId[]"],
      ["Total_Recipes", "Number"],
      ["Total_Comments", "Number"],
      ["OnLine", "Boolean"],
    ],
  },
  {
    title: "Recipe",
    fields: [
      ["user", "ObjectId (ref: User)"],
      ["label", "String"],
      ["image.url", "String"],
      ["ingredients", "Array"],
      ["Likes", "Number"],
    ],
  },
  {
    title: "Contact",
    fields: [
      ["Name", "String"],
      ["Email", "String"],
      ["Subject", "String"],
      ["Message", "String"],
      ["Date", "Date"],
    ],
  },
];
const demoInfo = {
  name: "Reciperiot",
   src:"https://res.cloudinary.com/do2twyxai/video/upload/v1775322940/Untitled_89_1080p_zfl3yv.3gp",
  title: "Reciperiot Recipe Search & Admin Panel",
  tech: "React • Node.js • MongoDB • Recipe API • Admin Panel",
};
const screenshots = [
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776446122/Screenshot_247_sxneos.png",
    title: "Recipe Search",
    desc: "Search recipes in real-time with fast API response",
  },
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776446563/Screenshot_252_ogaxpj.png",
    title: "Recipe Categories",
    desc: "Browse recipes by food categories and filters",
  },
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776446563/Screenshot_251_msxbrv.png",
    title: "Individual Recipe Page",
    desc: "Detailed view with ingredients, instructions, and nutrition info",
  },
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776446119/Screenshot_250_llbdmf.png",
    title: "Comments & Ratings",
    desc: "Users can comment and rate recipes in real time",
  },
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776446122/Screenshot_249_l844la.png",
    title: "Liked Recipes",
    desc: "Save and manage favorite recipes for quick access",
  },
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776446120/Screenshot_248_c4ntpc.png",
    title: "Admin Panel",
    desc: "Manage recipes, delete content, and moderate platform data",
  },
];
const futureGoals = [
  {
    title: "🍲 Category-Based Smart Search",
    desc:
      "Implementing advanced category-based filtering to help users quickly discover recipes based on cuisine type, diet preferences, and meal categories.",
    theme: "cyan",
  },
  {
    title: "🎥 Recipe Video Integration",
    desc:
      "Adding video support for recipes so users can watch step-by-step cooking tutorials directly within the platform for better cooking experience.",
    theme: "purple",
  },
  {
    title: "💡 User Recipe Suggestions & Feedback System",
    desc:
      "Allowing users to suggest recipe improvements, corrections, and new ideas through a feedback system to improve recipe quality and engagement.",
    theme: "cyan",
  },

  // Added strong enhancements

  {
    title: "🤖 AI-Based Recipe Recommendation System",
    desc:
      "Integrating AI to suggest personalized recipes based on user preferences, history, and dietary patterns for a smarter cooking experience.",
    theme: "purple",
  },
  {
    title: "❤️ Advanced Personalization Engine",
    desc:
      "Building a user preference system that adapts homepage content based on liked recipes, search history, and favorite cuisines.",
    theme: "cyan",
  },
  {
    title: "⚡ Performance Optimization with Caching",
    desc:
      "Implementing caching strategies for recipe search results to reduce API calls and improve overall application speed and responsiveness.",
    theme: "purple",
  },
];
  return (
    <>
    
      <Navbar type='RecipeRiot'></Navbar>
        <div className="min-h-screen bg-[#0b0f19] text-white overflow-hidden relative pb-10 ">
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-600 opacity-30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-600 opacity-30 blur-3xl rounded-full" />
     
      
      <Hero project={projectInfo}/>
      <Features Features={FeaturesInfo}></Features>
      <TechStack Tech={techInfo}/>
      <SystemArch></SystemArch>
      <section className="mt-10 px-6 md:px-16 relative z-10">

  {/* Heading */}
  <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
    Auth Flow
  </h2>

  {/* Card */}
  <div className="max-w-7xl mx-auto p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl relative overflow-hidden">

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />

    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center">

    
{/* <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-1"> */}

  {/* 1. API Request */}
  <div className="p-5 rounded-xl border border-blue-500/30 bg-blue-500/10 flex-1 text-center">
    <h3 className="text-blue-300 text-sm font-semibold">User</h3>
    <p className="text-xs text-white/60">ChatNova </p>
  </div>
   <div className="text-white/40 hidden md:block">→</div>
  <div className="p-5 rounded-xl border border-blue-500/30 bg-blue-500/10 flex-1 text-center">
    <h3 className="text-blue-300 text-sm font-semibold">API Request</h3>
    <p className="text-xs text-white/60">Access Token used</p>
  </div>

  <div className="text-white/40 hidden md:block">→</div>
  <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/10 flex-1 hover:scale-110 transition">
        <h3 className="text-blue-300 font-semibold text-sm">Backend</h3>
        <p className="text-xs text-white/70">JWT + bycrpyt</p>
      </div>
        <div className="text-white/40 hidden md:block">→</div>
  {/* 2. Expired */}
  <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/10 flex-1 text-center">
    <h3 className="text-red-300 text-sm font-semibold">Auth Token</h3>
    <p className="text-xs text-white/60">Auth Token Verified</p>
  </div>


        <div className="text-white/40 hidden md:block">→</div>
         <div className="p-5 rounded-xl border border-purple-500/30 bg-purple-500/10 flex-1 text-center">
    <h3 className="text-purple-300 text-sm font-semibold">Recipe Riot</h3>
    <p className="text-xs text-white/60"> Api Succeed</p>
  </div>


  

    </div> 
  </div>
</section>
<Database Data={DatabaseSchema}/>
<Demo Info={demoInfo}/>
<Images name="RecipeRiot" screenshots={screenshots}/>
<Goals futureGoals={futureGoals}/>
</div>
    </>
  
  )
}
