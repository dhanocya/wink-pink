import React from 'react';
import Image from 'next/image';

export default function Cta() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* 1. Left Content Column */}
        <div className="flex flex-col">
          {/* Main Green Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#186036] leading-tight mb-6">
            Ready to build technology with purpose?
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-black font-medium leading-relaxed mb-10 max-w-lg">
            Let's take the first step toward a smarter, more human-centered digital future.
          </p>

          {/* Black Action Buttons */}
          <div className="flex flex-col gap-4">
            <button className="bg-black text-white w-fit px-5 py-3 flex items-center gap-3 font-bold text-[11px] uppercase tracking-widest hover:bg-gray-800 transition shadow-md">
              <span className="text-yellow-400 text-lg">👉</span> DOWNLOAD OUR PORTFOLIO
            </button>
            
            <button className="bg-black text-white w-fit px-5 py-3 flex items-center gap-3 font-bold text-[11px] uppercase tracking-widest hover:bg-gray-800 transition shadow-md">
              <span className="text-yellow-400 text-lg">👉</span> CONTACT US TODAY
            </button>
          </div>
        </div>

        {/* 2. Right Image Column (Khaali for your image) */}
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-gray-100 flex items-center justify-center border border-gray-200">
           {/* Jab aapke paas image ho, bas yahan src update kar dena */}
           <Image 
             src="/pur.png" 
             alt="Team collaborating" 
             fill 
             className="object-cover" 
           />
           <div className="text-gray-400 italic text-sm text-center p-10">
             [Image Placeholder: Team working on a laptop]
           </div>
        </div>

      </div>
    </section>
  );
}