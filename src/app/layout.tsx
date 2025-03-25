// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { SiteFooter } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artist Grid Maker",
  description: "Create customizable grids for your artwork",
  openGraph: {
    title: "Artist Grid Maker",
    description: "Create customizable grids for your artwork, a free online grid maker tool for artists/beginners",
    url: "https://gridmaker.vercel.app/", 
    type: "website",
    images: [
      {
        url: "https://gridmaker.vercel.app/gridmakersharelink.png", 
        width: 1200,
        height: 630,
        alt: "Artist Grid Maker Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artist Grid Maker",
    description: "Create online free grids for your artwork",
    site: "@purvaspatel", 
    image: "https://gridmaker.vercel.app/gridmakersharelink.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="OlCBXN1AhSOlPfytynFjCcPiqB6TEHeOKdM4d1c84NY" />
        {/* Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp, etc.) */}
        <meta property="og:title" content="Artist Grid Maker" />
        <meta property="og:description" content="Create customizable grids for your artwork, a free online grid maker tool for artists/beginners" />
        <meta property="og:image" content="https://gridmaker.vercel.app/gridmakersharelink.png" />
        <meta property="og:url" content="https://gridmaker.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artist Grid Maker" />
        <meta name="twitter:description" content="Create customizable grids for your artwork" />
        <meta name="twitter:image" content="https://gridmaker.vercel.app/gridmakersharelink.png" />
        <meta name="twitter:site" content="@purvaspatel" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
