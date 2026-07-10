import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "./Components/Navbar";
import { SITE_CONFIG } from "./lib/seo";
import StructuredData from "./Components/seo/StructuralData";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.name,
    template: "%s | Rohit Kumar",
  },

  description: SITE_CONFIG.description,

  applicationName: SITE_CONFIG.name,

  keywords: SITE_CONFIG.keywords,

  authors: [
    {
      name: SITE_CONFIG.author.name,
      url: SITE_CONFIG.url,
    },
  ],

  creator: SITE_CONFIG.author.name,

  publisher: SITE_CONFIG.author.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,

    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.social.twitter,
    images: [SITE_CONFIG.ogImage],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  category: "technology",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],

    apple: "/apple-icon.png",

    shortcut: "/favicon.ico",
  },
   verification: {
    google: "4-5XbeYknM6Ag2tnuivd6NWpEetWaVzI1bKScvSQGtk",
  },

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
        <StructuredData/>
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
        <GoogleAnalytics gaId="G-S01MHKJ03M"></GoogleAnalytics>
    </html>
  );
}
