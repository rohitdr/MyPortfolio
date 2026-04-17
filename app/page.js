import Image from "next/image";
import Navbar from "./Components/Navbar";
import TopScroll from "./Components/TopScroller";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <>
    <Toaster/>
 
   <div className="bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-[#1E293B] min-h-screen text-white">
     <TopScroll/>
   <Navbar></Navbar>
    </div>
  

 
    </>
   
  );
}
