"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// --- Data Array (Reviews ko yahan manage karein) ---
const testimonials = [
  {
    id: 1,
    name: "Sarah J.",
    role: "Operations Director",
    image: "/dp.png",
    text: "CustomTech Labs didn't just hand us a platform; they gave us a strategy. They understood that for our business to grow, we needed to stop fighting our own software and start trusting it. The technical execution was flawless, but the human insight was what truly changed our workflow."
  },
  {
    id: 2,
    name: "Michael R.",
    role: "Product Manager",
    image: "/dp.png",
    text: "The team delivered beyond expectations. The seamless integration and user-centric design have significantly boosted our team's productivity. It's not just code; it's a solution that works for people."
  },
  {
    id: 3,
    name: "Emma W.",
    role: "CEO, TechFlow",
    image: "/dp.png",
    text: "I've worked with many agencies, but the way they reverse-engineer problems is unique. Our launch was zero-friction, and the post-launch support has been incredible."
  }
];

export default function RatingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      
      {/* 1. Slider Container */}
      <div className="relative w-full max-w-[450px] overflow-hidden">
        
        {/* 2. Moving Track */}
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-[#a6a6a6] rounded-xl p-8 shadow-xl">
                
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 border-b border-gray-500/30 pb-5">
                  <div className="w-[60px] h-[60px] rounded-xl overflow-hidden border-2 border-gray-400">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="text-lg font-bold leading-tight">{item.name}</h3>
                    <p className="text-sm font-normal text-gray-200">{item.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-gray-100 italic leading-relaxed">
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Navigation Dots */}
      <div className="flex gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border-2 border-gray-400 transition-all duration-300 ${
              currentIndex === index ? 'bg-gray-600 scale-125' : 'bg-transparent'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}