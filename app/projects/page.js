import React from 'react'
import Hero from './components/Hero'
import FeaturedProject from './components/FeaturedProject'
import ProjectsGrid from './components/ProjectsGrid'
import WhyChooseMe from './components/WhyChooseUs'
import CTA from './components/CTA'

export default function page() {
  return (
    <div className='bg-black text-white'>
      <Hero></Hero>
      <FeaturedProject></FeaturedProject>
      <ProjectsGrid></ProjectsGrid>
      <WhyChooseMe></WhyChooseMe>
       <CTA></CTA>
    </div>
  )
}
