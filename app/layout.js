import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "./Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rohit Kumar | Full Stack Developer",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    ><head>
      <link rel="icon" type="image/png" href="/icon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Sora:wght@400;600&display=swap" rel="stylesheet"/></head>
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
 <Toaster
  position="top-center"
  toastOptions={{
    style: {
      background: "#ffffff",
      color: "#111111",
      border: "1px solid #e5e5e5",
      borderRadius: "18px",
      padding: "16px 20px",
      fontWeight: 500,
      boxShadow: "0 15px 40px rgba(0,0,0,.18)",
    },
  }}
/>
        </body>
    </html>
  );
}
