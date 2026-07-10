import React from 'react'
import PricingHero from './components/PricingHero'

import PackagePreview from './components/PricingPreview'
import ComparisonTable from './components/ComparisionTable'
import DevelopmentProcess from './components/DevelopmentProcess'
import FAQ from './components/Faq'
import CTA from './components/CTA'
import PricingStructuredData from '../Components/seo/PricingStructuralData'

export const metadata = {
  title: "Pricing",

  description:
    "Affordable website development packages for startups, businesses, and individuals. Custom Next.js, React, MERN Stack, and full-stack web development services.",

  keywords: [
    "Website Development Pricing",
    "Next.js Developer",
    "React Developer",
    "MERN Stack",
    "Freelance Web Developer",
    "Website Cost",
    "Custom Website",
  ],

  alternates: {
    canonical: "/pricing",
  },

  openGraph: {
    title: "Pricing | Rohit Kumar",

    description:
      "Explore modern website development packages and custom solutions.",

    url: "/pricing",

    images: ["/og-image.webp"],
  },

  twitter: {
    card: "summary_large_image",

    images: ["/og-image.webp"],
  },
};


export default function page() {
  return (
   <div className="bg-black min-h-screen text-white">
    <PricingStructuredData></PricingStructuredData>
   <PricingHero></PricingHero>
   <PackagePreview></PackagePreview>

  <ComparisonTable></ComparisonTable>
  <DevelopmentProcess></DevelopmentProcess>
  <FAQ></FAQ>
  <CTA></CTA>
   </div>
  )
}
