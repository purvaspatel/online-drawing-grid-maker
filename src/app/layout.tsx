// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";

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
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-xl font-bold text-gray-800">Artist Grid Maker</h1>
          </div>
        </header>
        {children}
        <footer className="bg-gray-50 mt-8">
          <div className="container mx-auto px-4 py-6">
            <p className="text-center text-gray-600 text-sm">
              Artist Grid Maker © {new Date().getFullYear()}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}