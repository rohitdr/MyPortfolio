import AboutHero from "./components/AboutHero";
import AboutBio from "./components/AboutBio";
import WhatIDo from "./components/WhatIDo";
import TechStackGrid from "./components/TechStackGrid";
import WorkflowProcess from "./components/WorkflowProcess";
import AboutCTA from "./components/AboutCTA";
import Footer from "../Components/Footer";

export const metadata = {
  title: "About | Rohit Kumar",
  description:
    "Learn more about Rohit Kumar, a MERN Stack & Next.js Developer building scalable, real-time, SEO-friendly web applications.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | Rohit Kumar",
    description:
      "MERN Stack & Next.js Developer specializing in real-time, performant, and SEO-friendly web applications.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-28 pb-16 sm:pb-20 flex flex-col gap-12 sm:gap-16 lg:gap-24">
        <AboutHero />
        <AboutBio />
        <WhatIDo />
        <TechStackGrid />
        <WorkflowProcess />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
