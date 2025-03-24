"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side - Logo & Brand Name */}
        <div className="flex items-center space-x-3">
          <img src="/next.svg" alt="Brand Logo" className="w-8 h-8" />
          <Link href="/" className="text-xl font-bold text-gray-800">
            MyBrand
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
            Grid Maker
          </Link>
          <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition">
            Blogs
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col space-y-3 py-4 px-6">
            <Link href="/grid-maker" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
              Grid Maker
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
              Blogs
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
