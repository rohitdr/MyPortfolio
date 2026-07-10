import React from 'react'
import PageClient from './PageClient'
import { notFound } from 'next/navigation'
import { projects } from '../data';
import ProjectStructuredData from '@/app/Components/seo/ProjectSturcturalData';
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
export async function generateMetadata({ params }) {
  const slug=await params
  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Projects`,

    description: project.description,

    keywords: [
      ...project.technologies,
      project.category,
      "Next.js",
      "React",
      "Portfolio",
    ],

    alternates: {
      canonical: `/projects/${project.slug}`,
    },

    openGraph: {
      title: project.title,

      description: project.description,

      url: `/projects/${project.slug}`,

      type: "article",

      images: [
        {
          url: project.image,

          width: 1200,

          height: 630,

          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      images: [project.image],
    },
  };
}
export default async function page({params}) {
  const {slug} = await params
  const project = projects.find((item) => item.slug === slug);
  if(!project){
    notFound()
  }
  return (
    <div>
      <ProjectStructuredData project={project}></ProjectStructuredData>
      <PageClient project={project}></PageClient>
    </div>
  )
}
