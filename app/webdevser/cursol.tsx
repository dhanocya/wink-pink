"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface CursolProps {
  title: string;
}

const Cursol: React.FC<CursolProps> = ({ title }) => {
  const data = [
    {
      id: 1,
      tag: "Healthcare",
      title: "Industries We Transform",
      desc: "We've built systems for healthcare operations, retail platforms, educational ecosystems...",
      img: "/case.png",
    },
    {
      id: 2,
      tag: "Healthcare",
      title: "Industries We Transform",
      desc: "We've built systems for healthcare operations, retail platforms, educational ecosystems...",
      img: "/case.png",
    },
    {
      id: 3,
      tag: "Healthcare",
      title: "Industries We Transform",
      desc: "We've built systems for healthcare operations, retail platforms, educational ecosystems...",
      img: "/case.png",
    },
  ];

  return (
    <div>
      {/* Black box with yellow drop-shadow and cutout */}
      <div className="bg-white">
        <div className="filter drop-shadow-[0_4px_0_rgba(250,204,21,1)] pb-10">
          <div
            className="bg-black h-[150px] w-full flex items-center px-10"
            style={{
              clipPath:
                'polygon(49% 0, 55% 54%, 100% 54%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 0)',
            }}
          >
            <div className="text-white font-bold leading-tight">
              <p className="text-2xl">{title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel overlapping the black box */}
      <div className="relative w-full max-w-5xl mx-auto px-12 pt-0 pb-10 -mt-16 z-10 group">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          className="rounded-lg overflow-hidden"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="bg-gray-100 pb-10">
              <div className="relative h-[400px] w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-[#EFFF33] text-black text-xs font-bold px-4 py-1 rounded-sm">
                  {item.tag}
                </span>
              </div>

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

        {/* Left/Right arrows */}
        <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-gray-300 hover:text-black transition-colors">
          ❮
        </button>
        <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-gray-300 hover:text-black transition-colors">
          ❯
        </button>

        {/* Dots pagination */}
        <div className="custom-pagination flex justify-center gap-2 mt-8"></div>
      </div>
    </div>
  );
};

export default Cursol;