"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const IndustryCarousel = () => {
  const data = [
    {
      id: 1,
      tag: "Healthcare",
      title: "Industries We Transform",
      desc: "We've built systems for healthcare operations, retail platforms, educational ecosystems...",
      img: "/case.png", // अपनी इमेज का पाथ यहाँ डालें
    },
    {
      id: 2,
      tag: "Healthcare",
      title: "Industries We Transform",
      desc: "We've built systems for healthcare operations, retail platforms, educational ecosystems...",
      img: "/case.png", // अपनी इमेज का पाथ यहाँ डालें
    },
    {
      id: 3,
      tag: "Healthcare",
      title: "Industries We Transform",
      desc: "We've built systems for healthcare operations, retail platforms, educational ecosystems...",
      img: "/case.png", // अपनी इमेज का पाथ यहाँ डालें
    },
    // और स्लाइड्स यहाँ जोड़ें
  ];

  return (
    <div className="relative w-full max-w-5xl mx-auto px-12 py-10 group">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{ 
          clickable: true,
          el: '.custom-pagination' 
        }}
        className="rounded-lg overflow-hidden"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="bg-gray-100 pb-10">
            {/* Image Container */}
            <div className="relative h-[400px] w-full">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              {/* Yellow Tag */}
              <span className="absolute top-4 right-4 bg-[#EFFF33] text-black text-xs font-bold px-4 py-1 rounded-sm">
                {item.tag}
              </span>
            </div>

            {/* Text Content */}
            <div className="p-8 text-left">
              <h3 className="text-xl font-bold italic mb-4">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <button className="bg-[#EFFF33] text-black text-sm font-bold py-2 px-4 flex items-center hover:gap-2 transition-all">
                Read The Case Study <span className="ml-2">→</span>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows (Left/Right) */}
      <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-gray-300 hover:text-black transition-colors">
        ❮
      </button>
      <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-gray-300 hover:text-black transition-colors">
        ❯
      </button>

      {/* Custom Dots (Bottom) */}
      <div className="custom-pagination flex justify-center gap-2 mt-8"></div>
    </div>
  );
};

export default IndustryCarousel;
