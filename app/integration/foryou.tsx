"use client"; // Next.js App Router ke liye
import React from "react";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { FaRegClock } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";

// 1. Props ke liye Interface define karna
interface CardProps {
  icon: React.ReactNode;
  text: string;
  bgColor: string;
  borderColor: string;
  iconColor?: string; // Optional prop
}

// 2. Reusable Card Component (Typed)
const Card: React.FC<CardProps> = ({ icon, text, bgColor, borderColor }) => {
  return (
    <div className={`flex items-center gap-4 p-4 border-2 ${bgColor} ${borderColor} rounded-xl min-h-[70px] transition-all hover:shadow-sm`}>
      <div className="flex-shrink-0 text-xl">
        {icon}
      </div>
      <p className="text-sm md:text-base leading-snug text-gray-800">
        {text}
      </p>
    </div>
  );
};

export default function ForYou() {
  return (
    <section className="w-full px-4 py-12 md:py-20 bg-white overflow-x-hidden">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold inline-block px-6 py-2 bg-black text-white rounded-lg">
          For Your Customers
        </h2>
        <p className="mt-6 text-gray-600 text-lg md:text-xl">
          Customers only see the front end. <br className="hidden md:block" /> 
          But their experience depends on everything behind it.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Image Area */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[450px]">
            <Image 
              src="/ana.png" 
              alt="System Integration Illustration" 
              width={500} 
              height={500} 
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 space-y-10">
          
          {/* Negative States (Red) */}
          <div className="space-y-4">
            <p className="font-bold text-red-600 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              When systems aren’t connected, things break:
            </p>
            <div className="grid gap-3">
              <Card 
                icon={<GoDotFill className="text-red-500" />} 
                text="Conversion-focused architecture that turns attention into inquiries." 
                bgColor="bg-[#fff6f6]" 
                borderColor="border-[#fee6e5]" 
              />
              <Card 
                icon={<GoDotFill className="text-red-500" />} 
                text="Integrated systems that reduce internal friction." 
                bgColor="bg-[#fff6f6]" 
                borderColor="border-[#fee6e5]" 
              />
              <Card 
                icon={<GoDotFill className="text-red-500" />} 
                text="Client portals that strengthen retention and loyalty." 
                bgColor="bg-[#fff6f6]" 
                borderColor="border-[#fee6e5]" 
              />
            </div>
          </div>

          {/* Positive States (Green/Yellow) */}
          <div className="space-y-4">
            <p className="font-bold text-green-700 flex items-center gap-2">
               <span className="w-2 h-2 bg-green-600 rounded-full"></span>
               With the right system integration, everything stays aligned:
            </p>
            <div className="grid gap-3">
              <Card 
                icon={<MdSecurity className="text-green-600" />} 
                text="Secure architecture that builds long-term customer trust." 
                bgColor="bg-[#fcfdec]" 
                borderColor="border-[#F7FBCE]" 
              />
              <Card 
                icon={<AiFillThunderbolt className="text-yellow-500" />} 
                text="Lightning-fast systems that improve user engagement." 
                bgColor="bg-[#fcfdec]" 
                borderColor="border-[#F7FBCE]" 
              />
              <Card 
                icon={<FaRegClock className="text-green-600" />} 
                text="Real-time data syncing for a seamless user experience." 
                bgColor="bg-[#fcfdec]" 
                borderColor="border-[#F7FBCE]" 
              />
            </div>
          </div>

          <p className="italic text-gray-500 text-center md:text-left border-l-4 border-[#EFFF00] pl-4">
            "The result? An experience your customers can trust — every time."
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-16 px-4">
        <button className="w-full sm:w-64 bg-[#EFFF00] hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
          View Our Portfolio
        </button>
        <button className="w-full sm:w-64 bg-black text-white hover:bg-gray-900 px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg">
          Work with us
        </button>
      </div>
    </section>
  );
}