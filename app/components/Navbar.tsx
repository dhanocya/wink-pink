"use client"; // Next.js App Router ke liye zaroori hai
import React, { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "About Us", href: "#" },
    { name: "What we do", href: "#" },
    { name: "Our Results", href: "#" },
    { name: "Insight", href: "#" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-black text-white rounded-xl flex justify-between items-center px-6 py-3 shadow-2xl border border-white/10">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Image src="/logo.png" alt="Company Logo" width={100} height={50} className="w-auto h-8 md:h-10" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name} className="hover:text-white cursor-pointer transition">
                {link.name}
              </li>
            ))}
          </ul>

          <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold text-sm transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-black/95 transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <ul className="text-center space-y-6 text-xl font-medium text-gray-300">
          {navLinks.map((link) => (
            <li key={link.name} onClick={toggleMenu} className="hover:text-[#EFFF00] cursor-pointer transition">
              {link.name}
            </li>
          ))}
        </ul>
        <button className="bg-[#EFFF00] text-black px-8 py-3 rounded-md font-bold text-lg">
          Contact Us
        </button>
      </div>
    </>
  );
}