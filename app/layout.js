import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
