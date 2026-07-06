import React from 'react'
import PricingHero from './components/PricingHero'

import PackagePreview from './components/PricingPreview'
import ComparisonTable from './components/ComparisionTable'
import DevelopmentProcess from './components/DevelopmentProcess'
import FAQ from './components/Faq'
import CTA from './components/CTA'
import PackageSection from './components/PackageSection'
import { packages } from './data'
export default function page() {
  return (
   <div className="bg-black min-h-screen text-white">
   <PricingHero></PricingHero>
   <PackagePreview></PackagePreview>
{/* <PackageSection plan={packages[0]}></PackageSection>
<PackageSection plan={packages[1]}></PackageSection>
<PackageSection plan={packages[2]}></PackageSection> */}
  <ComparisonTable></ComparisonTable>
  <DevelopmentProcess></DevelopmentProcess>
  <FAQ></FAQ>
  <CTA></CTA>
   </div>
  )
}
