import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl bg-black text-white rounded-xl flex justify-between px-6 py-3 shadow-2xl">
      
      {/* Logo Area */}
      <div className="flex items-center gap-3 cursor-pointer">
        <Image src="/logo.png" alt="Company Logo" width={100} height={50} />
      </div>

      <div className="flex items-center gap-10">
              <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
        <li className="hover:text-white cursor-pointer transition">About Us</li>
        <li className="hover:text-white cursor-pointer transition">What we do</li>
        <li className="hover:text-white cursor-pointer transition">Our Results</li>
        <li className="hover:text-white cursor-pointer transition">Insight</li>
      </ul>

      {/* Contact Button */}
      <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold text-sm transition">
        Contact Us
      </button>
      </div>
    </nav>
  );
}