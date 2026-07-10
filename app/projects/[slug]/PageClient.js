import React from 'react'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Challenge from './components/Challenges'
import Process from './components/Process'
import Features from './components/Features'
import Gallery from './components/Gallery'
import TechStack from './components/TechStack'
import Results from './components/Result'
import Testimonial from './components/Testimonials'
import NextProject from './components/NextProject'

export default function PageClient({project}) {
  return (
    <div className='bg-black text-white'>
      <Hero project={project}></Hero>
      <Overview project={project}></Overview>
      <Challenge project={project}></Challenge>
      <Process project={project}></Process>
      <Features project={project}></Features>
      <Gallery project={project}></Gallery>
      <TechStack project={project}></TechStack>
      <Results project={project}></Results>
      <Testimonial project={project}></Testimonial>
      <NextProject project={project}></NextProject>

    </div>
  )
}
