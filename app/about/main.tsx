import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <main className="relative w-full min-h-[90vh] bg-[#f4f4f4] overflow-hidden">

      {/* 1. Background Image Setup */}
      {/* Note: Apni hero background image (w/ people) ko public folder me rakhein aur yahan path change karein */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-right md:bg-center"
        style={{ backgroundImage: "url('abouto.png')" }}
      >
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col justify-center min-h-[90vh] px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl py-20">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-6 tracking-tight">
            Technology Built for the <br className="hidden md:block" />
            Way People Actually Work
          </h1>

          {/* Sub-heading */}
          <p className="text-lg md:text-[1.1rem] text-gray-800 mb-10 max-w-xl leading-relaxed font-medium">
            We bridge the gap between complex engineering and human intuition to build tech that users actually enjoy using.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-7 py-3 rounded-md font-bold text-sm transition shadow-sm">
              View Our Portfolio
            </button>
            <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-7 py-3 rounded-md font-bold text-sm transition shadow-sm">
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}