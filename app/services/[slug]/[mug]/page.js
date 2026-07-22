import React from 'react'
import { plans } from './plans'
import Hero from './components/Hero'
import Overview from './components/Overview'
import Deliverables from './components/Deliverables'
import Timeline from './components/TimeLine'
import Comparison from './components/Comparison'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import { services } from '../../data'

export default async function page({params}) {
    const {mug}=await params
    const plan=plans.find((plan)=>plan.slug===mug)
    const service=services.find((service)=>service.slug===plan.service)
    if(!plan || !service){
        return notFound()
    }
  return (
    <div>
      <Hero plan={plan} service={service}></Hero>
      <Overview plan={plan} ></Overview>
      <Deliverables deliverables={plan.deliverables} ></Deliverables>
      <Timeline timeline={plan.timeline}></Timeline>
      <Comparison plans={plans} current={plan.slug} service={service}></Comparison>
      <FAQ faqs={plan.faqs}></FAQ>
      <CTA plan={plan} service={service}></CTA>
    </div>
  )
}
