import React from 'react';

export default function Philosophy() {
  return (
    <section className="bg-white py-16 px-6 md:px-20 max-w-7xl mx-auto">
      {/* Top Header Tag */}
      <div className="flex justify-center mb-16">
        <div className="bg-[#eef430] px-16 py-3 font-bold text-2xl">
          Our Philosophy
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
            Technology should never feel like a <br />
            burden. It should 
            <span className="relative inline-block ml-2 italic">
              empower, simplify,
              <div className="absolute bottom-1 left-0 w-full h-[2px] bg-[#eef430]"></div>
            </span>
            <br />
            <span className="relative inline-block italic">
              and strengthen
              <div className="absolute bottom-1 left-0 w-full h-[2px] bg-[#eef430]"></div>
            </span> human connection.
          </h2>

          <div className="space-y-4">
            <p className="text-gray-600 text-sm font-medium">
              That's what we build at CustomTech Labs:
            </p>
            
            <div className="space-y-1">
              <p className="font-bold text-black text-lg">Technology with purpose.</p>
              <p className="text-gray-400 font-medium text-lg">Powered by strategy.</p>
              <p className="text-gray-400 font-medium text-lg">Designed for people.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative">
          <img 
            src="/pop.png" 
            alt="Team working" 
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
}
