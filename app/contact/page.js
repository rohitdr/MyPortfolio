import React from 'react'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import ContactOptions from './components/ContactOptions'
import FAQ from './components/Faq'
import ContactStructuredData from '../Components/seo/ContactStructuralData'

export const metadata = {
  title: "Contact",

  description:
    "Contact Rohit Kumar for freelance web development, full-time opportunities, technical consulting, or collaborations. Let's build modern web applications together.",

  keywords: [
    "Contact Rohit Kumar",
    "Hire MERN Developer",
    "Hire Next.js Developer",
    "Freelance Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact | Rohit Kumar",

    description:
      "Let's discuss your next project, collaboration, or opportunity.",

    url: "/contact",

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
      <ContactStructuredData></ContactStructuredData>
      <Hero></Hero>
      <ContactForm></ContactForm>
      <ContactOptions></ContactOptions>
      <FAQ></FAQ>
    </div>
  )
}
