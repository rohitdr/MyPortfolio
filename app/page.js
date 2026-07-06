
import { Toaster } from "sonner";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import PricingSection from "./Components/PricingSection";
import Testimonials from "./Components/Testimonials";

export default function Home() {
  return (
    <>
    <Toaster/>
 
   <div className="bg-linear-to-br from-[#0B0F1A] via-[#0F172A] to-[#1E293B] min-h-screen text-white">
   <Hero></Hero>
   <Projects></Projects>
   <PricingSection></PricingSection>
   <Testimonials></Testimonials>
   <Skills></Skills>
   <ContactMe></ContactMe>
   <Footer></Footer>
    </div>
  

 
    </>
   
  );
}
