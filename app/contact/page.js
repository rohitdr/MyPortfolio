import React from 'react'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import ContactOptions from './components/ContactOptions'
import FAQ from './components/Faq'

export default function page() {
  return (
    <div className='bg-black text-white'>
      <Hero></Hero>
      <ContactForm></ContactForm>
      <ContactOptions></ContactOptions>
      <FAQ></FAQ>
    </div>
  )
}
