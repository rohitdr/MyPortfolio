import React from "react";
import { notFound } from "next/navigation";

import { services } from "../data";

import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Problems from "./components/Problems";
import Benefits from "./components/Benefits";
import Deliverables from "./components/Deliverables";
import Process from "./components/Process";
import Results from "./components/Results";
import CaseStudies from "./components/CaseStudies";
import WhyMe from "./components/WhyMe";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";
import FAQ from "./components/FAQ";
import RelatedServices from "./components/RelatedServices";
import CTA from "./components/CTA";

import ServiceStructuredData from "@/app/Components/seo/ServiceStrucuturalData";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return {};
  }

  return {
    title: service.seo.title,

    description: service.seo.description,

    keywords: service.seo.keywords,

    alternates: {
      canonical: `/services/${service.slug}`,
    },

    openGraph: {
      type: "website",

      url: `/services/${service.slug}`,

      title: service.seo.title,

      description: service.seo.description,

      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: service.seo.title,

      description: service.seo.description,

      images: [service.image],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceStructuredData service={service} />

      <Hero service={service} />

      <Overview overview={service.overview} />

      <Problems problems={service.problems} />

      <Benefits benefits={service.benefits} />

      <Deliverables deliverables={service.deliverables} />

      <Process process={service.process} />

      <Results results={service.results} />

      <CaseStudies caseStudies={service.caseStudies} />

      <WhyMe whyMe={service.whyMe} />

      {/* Uncomment when testimonials exist */}
      {/* <Testimonials testimonials={service.testimonials} /> */}

      <Plans plans={service.plans} />

      <FAQ faqs={service.faqs} />

      <RelatedServices
        services={service.relatedServices}
      />

      <CTA cta={service.cta} />
    </>
  );
}