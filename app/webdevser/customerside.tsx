import React from 'react';
import Image from 'next/image';

export default function CustomerSide() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-24 flex justify-center">
      {/* Light Gray Container */}
      <div className="w-full max-w-6xl bg-[#f4f5f6] rounded-xl p-8 md:p-12 shadow-sm border border-gray-100">
        
        {/* 1. Header */}
        <h2 className="text-center text-xl md:text-2xl font-bold text-[#186036] mb-10">
          For Your Customers
        </h2>

        {/* 2. Top Section: Image (Left) & Text (Right) */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-8">
          
          {/* Left: Image Placeholder */}
          <div className="w-full lg:w-1/2 aspect-[16/9] md:aspect-[4/3] bg-gray-400 rounded-sm relative overflow-hidden">
            {/* Aap yahan apni image laga sakte hain */}
            <Image 
              src="/meet.png" 
              alt="Customer experience" 
              fill 
              className="object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
            <h3 className="text-2xl md:text-[1.75rem] font-bold italic text-black mb-6 leading-snug">
              Your website is often the first experience someone has with your brand.
            </h3>
            
            <p className="text-[15px] font-bold text-black mb-1">
              Every interaction shapes perception.
            </p>
            
            {/* Highlighted Text */}
            <span className="bg-black text-[#EFFF00] font-bold text-[15px] px-2 py-0.5 inline-block">
              Speed. Navigation. Structure. Flow.
            </span>
          </div>
        </div>

        {/* 3. Bottom Section: Details & CTA */}
        <div className="flex flex-col items-start w-full">
          
          <p className="text-[15px] italic text-black leading-relaxed mb-6 max-w-4xl">
            We build custom digital environments that guide users with clarity- whether that means <span className="font-bold">custom ecommerce website development</span>, service pages, booking systems, advanced integrations or modern <span className="font-bold">AI features in website experiences</span> or integrated portals.
          </p>

          <p className="text-[15px] italic font-bold text-black mb-2">
            We build platforms that guide users through information and action.
          </p>

          <p className="text-[15px] font-bold text-black mb-1">
            Because a well-built website doesn't just function.
          </p>

          {/* Highlighted Text */}
          <span className="bg-black text-[#EFFF00] font-bold text-[15px] px-2 py-0.5 inline-block mb-8">
            It builds confidence.
          </span>

          {/* 4. Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-6 py-2.5 rounded text-xs font-bold transition flex items-center gap-2">
              View Our Portfolio <span>→</span>
            </button>
            <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-6 py-2.5 rounded text-xs font-bold transition flex items-center gap-2">
              Work With Us <span>→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}