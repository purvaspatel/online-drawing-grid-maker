// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { SiteFooter } from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artist Grid Maker",
  description: "Create customizable grids for your artwork",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        {children}
        <SiteFooter />
      </body>
    </html>
  );
}