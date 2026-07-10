import React from 'react'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import ProjectsGrid from './components/ProjectsGrid'
import WhyChooseMe from './components/WhyChooseUs'
import CTA from './components/CTA'
import ProjectsStructuredData from '../Components/seo/ProjectsStructuralData'


export const metadata = {
  title: "Projects",

  description:
    "Explore a collection of modern web applications built by Rohit Kumar using Next.js, React, Node.js, Express, MongoDB, Tailwind CSS, and other modern technologies.",

  keywords: [
    "Next.js Projects",
    "React Projects",
    "MERN Projects",
    "Portfolio Projects",
    "Full Stack Developer",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
  ],

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Projects | Rohit Kumar",

    description:
      "Browse modern web applications and full-stack projects built with the latest web technologies.",

    url: "/projects",

    images: ["/og-image.webp"],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.webp"],
  },
};


export default function page() {
  return (
    <div className='bg-black text-white'>
         <ProjectsStructuredData/>
      <Hero></Hero>
      <FeaturedProject></FeaturedProject>
      <ProjectsGrid></ProjectsGrid>
      <WhyChooseMe></WhyChooseMe>
       <CTA></CTA>
    </div>
  )
}
