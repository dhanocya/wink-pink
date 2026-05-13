import Image from 'next/image';
import React from 'react';

interface TeamSectionProps {
  title?: string;
  imgSrc?: string;
  imgAlt?: string;
  description?: string[];
  primaryBtnText?: string;
  secondaryBtnText?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({ 
  title = "For Your Team", 
  imgSrc = "/image_4783dc.png", 
  imgAlt = "Team working together",
  description = [
    "When operations rely on spreadsheets, disconnected tools, or manual workarounds, growth slows down.",
    "We build internal applications around how your business actually operates, turning technology from daily frustration into operational leverage.",
    "Let’s centralize workflows, connect systems, and give leadership real-time visibility without overwhelming your team."
  ],
  primaryBtnText = "View Our Portfolio",
  secondaryBtnText = "Work With Us"
}) => {
  return (
    <div className="bg-[#D1D5DB] p-6 md:p-10 rounded-[1rem] w-full mx-auto shadow-md border-2 border-gray-300 font-sans my-8">
      {/* Title */}
      <h2 className="text-[#064E3B] text-2xl md:text-3xl font-bold mb-6">
        {title}
      </h2>

      {/* Image Container: Mobile pe Full, Desktop pe Max-Width */}
      <div className="relative w-full lg:max-w-3xl aspect-video mb-8 overflow-hidden rounded-lg shadow-sm">
        <Image 
          src={imgSrc} 
          alt={imgAlt} 
          fill  // 'fill' use karne se parent container ka size lega
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          priority
        />
      </div>

      {/* Description Text */}
      <div className="text-gray-800 italic text-base md:text-lg leading-relaxed">
        {description.map((para, index) => (
          <p key={index} className="max-w-4xl mb-4">
            {para}
          </p>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">
        <button className="bg-[#EFFF3C] hover:bg-[#d9e630] text-black font-bold py-3 px-6 rounded-md flex items-center transition-all duration-200 text-sm md:text-base">
          {primaryBtnText} <span className="ml-2 text-xl">→</span>
        </button>
        <button className="bg-[#EFFF3C] hover:bg-[#d9e630] text-black font-bold py-3 px-6 rounded-md flex items-center transition-all duration-200 text-sm md:text-base">
          {secondaryBtnText} <span className="ml-2 text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default TeamSection;