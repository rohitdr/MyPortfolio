"use client";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Project/Hero";
import Features from "../Components/Project/Features";
import TechStack from "../Components/Project/TechStack";
import SystemArch from "../Components/Project/SystemArch";
import Database from "../Components/Project/Database";
import Demo from "../Components/Project/Demo";
import Images from "../Components/Project/Images";
import Goals from "../Components/Project/Goals";


export default function chatnova() {
  const FeaturesInfo = [
  {
    title: "Offline Push Notification",
    description:
      "Real-time push notification using Firebase cloud Messaging(FCM)",
  },
  {
    title: "Virtualized List Rendering",
  
    description:
      "Efficient rendering of large message lists using virtualization for smooth performance.",
  },
  {
    title: "Optimistic UI Updates",
  
    description:
      "Messages appear instantly using React Query’s optimistic updates before server confirmation.",
  },
  {
    title: "Media Sharing with Cloudinary",
  
    description:
      "Upload and share images/Video with cloud storage integration for scalability and speed.",
  },
  {
    title: "Typing Indicator & Online Presence",
  
    description:
      "Event driven websocket updates with debounced typing signal and live presence traking",
  },
  {
    title: "Private & Group Chat with Status",
  
    description:
      "Supports one-to-one and group chats with message status indicators like sent, delivered, and seen with reaction and reply function",
  },

];
  const techInfo=[
      {
        title: "Frontend",
        color: "from-purple-500/20 to-purple-500/0",
        border: "border-purple-500/30",
        text: "text-purple-300",
        items: ["React", "Tailwind CSS", "Context API"],
      },
      {
        title: "Backend",
        color: "from-blue-500/20 to-blue-500/0",
        border: "border-blue-500/30",
        text: "text-blue-300",
        items: ["Node.js", "Express", "Socket.IO"],
      },
      {
        title: "Database",
        color: "from-green-500/20 to-green-500/0",
        border: "border-green-500/30",
        text: "text-green-300",
        items: ["MongoDB", "Mongoose"],
      },
      {
        title: "Realtime & Performance",
        color: "from-yellow-500/20 to-yellow-500/0",
        border: "border-yellow-500/30",
        text: "text-yellow-300",
        items: ["React Query", "Virtuoso", "WebSockets"],
      },
      {
        title: "Cloud & Media",
        color: "from-pink-500/20 to-pink-500/0",
        border: "border-pink-500/30",
        text: "text-pink-300",
        items: ["Cloudinary", "FCM Notifications"],
      },

    
      {
        title: "Security & Auth",
        color: "from-red-500/20 to-red-500/0",
        border: "border-red-500/30",
        text: "text-red-300",
        items: ["JWT Auth", "bcrypt", "Express Validator"],
      },
    ]
 const DatabaseSchema=[
      {
        title: "User",
        fields: [
       
          ["email", "String"],
          ["password", "String"],
          ["username", "String"],
          ["refreshToken", "String"],
          ["deviceTokens", "String[]"],
      
        
        ],
      },
      {
        title: "Conversation",
        fields: [
          ["participants", "Object"],
          ["type", "String"],
          ["lastMessage", "Onbect"],
          ["lastActivity", "Date"],
          ["inviteCode", "String"],

        ],
      },
      {
        title: "Message",
        fields: [
          ["senderId", "ObjectId"],
          ["conversationId", "ObjectId"],
          ["seenBy", "Object"],
          ["reaction", "Object"],
          ["replyTo", "Object"],
        ],
      },
    ]
    const demoInfo={
  name:"ChatNova",
  src:"https://res.cloudinary.com/do2twyxai/video/upload/v1775322940/Untitled_89_1080p_zfl3yv.3gp",
  title:"ChatNova Real-Time Chat App",
  tech:"Socket.IO • JWT Auth • MongoDB • React"

    }
const projectInfo ={
  name:"ChatNova",
  description:" A real-time chat platform built with modern technologies featuring instant messaging, smooth infinite scrolling, and scalable backend architecture.",
  img:"https://res.cloudinary.com/do2twyxai/image/upload/v1775015007/Screenshot_235_shn4la.png",
  link:"https://chat-nova-frontend-4nna.vercel.app",
  github:"https://github.com/rohitdr/ChatNova-Frontend.git"
}
const screenshots = [
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776420978/Screenshot_239_syabhh.png",
    title: "Real-time Chat UI",
    desc: "Socket powered messaging",
  },
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776421171/Screenshot_241_nkfkx6.png",
    title: "Message Status",
    desc: "Message Status, Message Reactions",
  },
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776427345/Screenshot_245_gyusdu.png",
    title: "JWT Auth Flow",
    desc: "Secure login system",
  },
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776421201/Screenshot_242_e87la4.png",
    title: "Group Chats",
    desc: "Multi-user conversations",
  },
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776425789/Screenshot_244_asxq9p.png",
    title: "Online Presence",
    desc: "Live User Tracking",
  },
  {
    img: "https://res.cloudinary.com/do2twyxai/image/upload/v1776421326/Screenshot_243_cwzauq.png",
    title: "Responsive UI",
    desc: "Mobile optimized design",
  },
];
const futureGoals = [
  {
    title: "⚡ Redis Scaling for Real-Time System",
    desc:
      "Integrating Redis Pub/Sub to scale Socket.IO across multiple servers, enabling seamless real-time messaging, presence sync, and low-latency communication even under high traffic load.",
    theme: "cyan",
  },
  {
    title: "📞 Audio & Video Calling (WebRTC)",
    desc:
      "Implementing peer-to-peer audio and video calling using WebRTC with secure signaling via Socket.IO for low-latency one-to-one and group communication.",
    theme: "purple",
  },
  {
    title: "👥 Role-Based Group Management",
    desc:
      "Implementing role-based access control in group chats to support Admin, Moderator, and Member roles for better control and moderation.",
    theme: "cyan",
  },
  {
    title: "🔐 End-to-End Message Encryption",
    desc:
      "Implementing asynchronous end-to-end encryption to ensure only sender and receiver can read messages, improving chat security.",
    theme: "purple",
  },
  {
    title: "🤖 AI-Powered Chat Suggestions",
    desc:
      "Integrating AI-based suggestion system to recommend smart replies, message completions, and contextual responses in real time.",
    theme: "cyan",
  },
  {
    title: "🗑️ Message Deletion (Delete for Me & Everyone)",
    desc:
      "Adding advanced message deletion allowing users to remove messages locally or for all participants in a conversation.",
    theme: "purple",
  },
];
  return (
<>    <Navbar type="chatnova"></Navbar>
    <div className="min-h-screen bg-[#0b0f19] text-white overflow-hidden relative pb-10 ">
      {/* Background glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-600 opacity-30 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-blue-600 opacity-30 blur-3xl rounded-full" />

      {/* HERO SECTION */}
     <Hero project={projectInfo}/>

    <Features Features={FeaturesInfo}></Features>



<TechStack Tech={techInfo}/>
<section className="mt-16 px-6 md:px-16 relative z-10">

  {/* Heading */}
  <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
    Challenges & Solutions
  </h2>

  {/* Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Card 1 */}
    <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/10 backdrop-blur-xl shadow-lg hover:scale-[1.03] transition">
      <h3 className="text-red-300 font-semibold text-lg mb-2">
        🔴 Real-time Online User Status Sync   Issue
      </h3>
      <p className="text-sm text-white/60 mb-3">
        Users appeared online/offline inconsistently due to multiple socket connections and refresh events.
      </p>
      <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
        <p className="text-green-300 text-sm font-semibold">Solution</p>
        <p className="text-xs text-white/60">
          Used Map-based socket tracking + emit only after stable connect/disconnect state.
        </p>
      </div>
    </div>
    <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/10 backdrop-blur-xl shadow-lg hover:scale-[1.03] transition">
      <h3 className="text-red-300 font-semibold text-lg mb-2">
        🔴 Excessive Refetch on Every Chat Open
      </h3>
      <p className="text-sm text-white/60 mb-3">
       Chat data was being refetched on every chat open causing unnecessary API calls and UI flicker.
      </p>
      <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
        <p className="text-green-300 text-sm font-semibold">Solution</p>
        <p className="text-xs text-white/60">
         Fixed using React Query caching with proper query keys and staleTime to reuse existing data instead of refetching
        </p>
      </div>
    </div>
    <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/10 backdrop-blur-xl shadow-lg hover:scale-[1.03] transition">
      <h3 className="text-red-300 font-semibold text-lg mb-2">
        🔴 Token Expiry Causing Forced Logout
      </h3>
      <p className="text-sm text-white/60 mb-3">
      Users were logged out immediately when access token expired.
      </p>
      <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
        <p className="text-green-300 text-sm font-semibold">Solution</p>
        <p className="text-xs text-white/60">
          Implemented refresh token flow for silent re-authentication without interrupting session.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/10 backdrop-blur-xl shadow-lg hover:scale-[1.03] transition">
      <h3 className="text-red-300 font-semibold text-lg mb-2">
        🔴 Back Button Redirecting to Login on Mobile
      </h3>
      <p className="text-sm text-white/60 mb-3">
On mobile back navigation, users were incorrectly redirected to login due to auth state mismatch.  
    </p>
      <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
        <p className="text-green-300 text-sm font-semibold">Solution</p>
        <p className="text-xs text-white/60">
Fixed using persistent JWT auth check with protected routes and synced global auth state (React Context/React Query).
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/10 backdrop-blur-xl shadow-lg hover:scale-[1.03] transition">
      <h3 className="text-red-300 font-semibold text-lg mb-2">
        🔴 Socket Disconnect Not Triggering Properly
      </h3>
      <p className="text-sm text-white/60 mb-3">
        Users remained online after tab close due to unstable disconnect events.
      </p>
      <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
        <p className="text-green-300 text-sm font-semibold">Solution</p>
        <p className="text-xs text-white/60">
          Added debounce (setTimeout) + proper cleanup of socket IDs in Map.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="p-6 rounded-2xl border border-red-500/20 bg-red-500/10 backdrop-blur-xl shadow-lg hover:scale-[1.03] transition">
      <h3 className="text-red-300 font-semibold text-lg mb-2">
        🔴 Slow Loading of Chatted Users List
      </h3>
      <p className="text-sm text-white/60 mb-3">
Chatted users list API was slow due to inefficient queries and multiple database lookups on each request.      </p>
      <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20">
        <p className="text-green-300 text-sm font-semibold">Solution</p>
        <p className="text-xs text-white/60">
Optimized using MongoDB aggregation pipeline to reduce joins and fetch required data in a single query, significantly improving response time.        </p>
      </div>
    </div>

  </div>
</section>
<SystemArch></SystemArch>
<section className="mt-10 px-6 md:px-16 relative z-10">

  {/* Heading */}
  <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
    Message Flow
  </h2>

  {/* Card */}
  <div className="max-w-7xl mx-auto p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl relative overflow-hidden">

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />

    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center">

      {/* 1. Frontend */}
      <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/10 flex-1 hover:scale-110 transition">
        <h3 className="text-purple-300 font-semibold text-sm">Frontend</h3>
        <p className="text-xs text-white/70">Send + Optimistic UI</p>
      </div>

      <div className="text-white/40 hidden md:block">→</div>

      {/* 2. Backend */}
      <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/10 flex-1 hover:scale-110 transition">
        <h3 className="text-blue-300 font-semibold text-sm">Backend</h3>
        <p className="text-xs text-white/70">JWT + Express API</p>
      </div>

      <div className="text-white/40 hidden md:block">→</div>

      {/* 3. Database */}
      <div className="p-6 rounded-xl border border-green-500/30 bg-green-500/10 flex-1 hover:scale-110 transition">
        <h3 className="text-green-300 font-semibold text-sm">Database</h3>
        <p className="text-xs text-white/70">MongoDB Atlas Save</p>
      </div>

      <div className="text-white/40 hidden md:block">→</div>

      {/* 4. Delivery Split */}
      <div className="flex flex-col md:flex-row gap-1 flex-1">

        <div className="p-6 rounded-xl border border-green-500/30 bg-green-500/10 flex-1 hover:scale-110 transition">
          <h3 className="text-green-300 font-semibold text-sm">Online</h3>
          <p className="text-xs text-white/70">Socket.IO</p>
        </div>

        <div className="p-6 rounded-xl border border-orange-500/30 bg-orange-500/10 flex-1 hover:scale-110 transition">
          <h3 className="text-orange-300 font-semibold text-sm">Offline</h3>
          <p className="text-xs text-white/70">FCM Push</p>
        </div>

      </div>

      <div className="text-white/40 hidden md:block">→</div>

      {/* 5. Sync */}
      <div className="p-6 rounded-xl border border-purple-500/30 bg-purple-500/10 flex-1 hover:scale-110 transition">
        <h3 className="text-purple-300 font-semibold text-sm">UI Sync</h3>
        <p className="text-xs text-white/70">React Query Update</p>
      </div>

    </div>
  </div>
</section>
<section className="mt-10 px-6 md:px-16 relative z-10">

  {/* Heading */}
  <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
    Auth Flow
  </h2>

  {/* Card */}
  <div className="max-w-7xl mx-auto p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl relative overflow-hidden">

    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-2xl" />

    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center">

    
{/* <div className="flex flex-col md:flex-row items-center justify-between gap-4 flex-1"> */}

  {/* 1. API Request */}
  <div className="p-5 rounded-xl border border-blue-500/30 bg-blue-500/10 flex-1 text-center">
    <h3 className="text-blue-300 text-sm font-semibold">User</h3>
    <p className="text-xs text-white/60">ChatNova </p>
  </div>
   <div className="text-white/40 hidden md:block">→</div>
  <div className="p-5 rounded-xl border border-blue-500/30 bg-blue-500/10 flex-1 text-center">
    <h3 className="text-blue-300 text-sm font-semibold">API Request</h3>
    <p className="text-xs text-white/60">Access Token used</p>
  </div>

  <div className="text-white/40 hidden md:block">→</div>
  <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/10 flex-1 hover:scale-110 transition">
        <h3 className="text-blue-300 font-semibold text-sm">Backend</h3>
        <p className="text-xs text-white/70">JWT + bycrpyt</p>
      </div>
        <div className="text-white/40 hidden md:block">→</div>
  {/* 2. Expired */}
  <div className="p-5 rounded-xl border border-red-500/30 bg-red-500/10 flex-1 text-center">
    <h3 className="text-red-300 text-sm font-semibold">401 Error</h3>
    <p className="text-xs text-white/60">Access Token Expired</p>
  </div>

  <div className="text-white/40 hidden md:block">→</div>

  {/* 3. Refresh Call */}
  <div className="p-5 rounded-xl border border-orange-500/30 bg-orange-500/10 flex-1 text-center">
    <h3 className="text-orange-300 text-sm font-semibold">Refresh API</h3>
    <p className="text-xs text-white/60">Send Refresh Token</p>
  </div>

  <div className="text-white/40 hidden md:block">→</div>

  {/* 4. New Token */}
  <div className="p-5 rounded-xl border border-green-500/30 bg-green-500/10 flex-1 text-center">
    <h3 className="text-green-300 text-sm font-semibold">New Access Token</h3>
    <p className="text-xs text-white/60">Auto regenerated</p>
  </div>

  <div className="text-white/40 hidden md:block">→</div>


  <div className="p-5 rounded-xl border border-purple-500/30 bg-purple-500/10 flex-1 text-center">
    <h3 className="text-purple-300 text-sm font-semibold">Retry Request</h3>
    <p className="text-xs text-white/60">Request succeeds</p>
  </div>

{/* </div> */}
        <div className="text-white/40 hidden md:block">→</div>
         <div className="p-5 rounded-xl border border-purple-500/30 bg-purple-500/10 flex-1 text-center">
    <h3 className="text-purple-300 text-sm font-semibold">ChatNova</h3>
    <p className="text-xs text-white/60"> Api Succeed</p>
  </div>


  

    </div> 
  </div>
</section>



  
<Database Data={DatabaseSchema}/>
<Demo Info={demoInfo}/>
<Images name="ChatNova" screenshots={screenshots} />
<Goals futureGoals={futureGoals}/>
    </div></>
    
    
  )
}

   

