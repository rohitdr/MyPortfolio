
import { Toaster } from "sonner";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import PricingSection from "./Components/PricingSection";
import Testimonials from "./Components/Testimonials";
import HomeStructuredData from "./Components/seo/HomePageStructuralData";
import SeoExpertise from "./Components/SeoExpertise";
import SEOExperience from "./Components/SeoExpertise";

export const metadata = {
  title: "Full Stack Developer",

  description:
    "Rohit Kumar is a Full Stack Developer specializing in Next.js, React, Node.js, Express, MongoDB, and scalable web applications. Explore projects, technical blogs, and professional experience.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Rohit Kumar | Full Stack Developer",

    description:
      "Explore modern web applications, technical blogs, and software engineering projects built by Rohit Kumar.",

    url: "/",

    images: ["/og-image.webp"],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.webp"],
  },
};


export default function Home() {
  return (
    <>
    <HomeStructuredData></HomeStructuredData>
    <Toaster/>
   <div className="bg-linear-to-br from-[#0B0F1A] via-[#0F172A] to-[#1E293B] min-h-screen text-white">
   <Hero></Hero>
   <Projects></Projects>
   <SEOExperience></SEOExperience>
   {/* <PricingSection></PricingSection> */}
   <Testimonials></Testimonials>
   <Skills></Skills>
  
   <ContactMe></ContactMe>
   <Footer></Footer>
    </div>
    </>
  );
}
