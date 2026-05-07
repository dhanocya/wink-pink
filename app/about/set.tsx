import React from 'react';

export default function WhatSetsUsApart() {
  return (
    <section className="bg-[#f3f4f6] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Black Header Tag */}
        <div className="flex justify-center mb-10">
          <div className="bg-black text-white px-10 py-3 rounded-full text-xl font-semibold">
            What Sets Us Apart
          </div>
        </div>

        {/* Main Heading Section */}
        <div className="mb-10">
          <p className="text-gray-400 text-lg">
            Most tech companies build what is <span className="line-through decoration-yellow-400 decoration-2">asked.</span>
          </p>
          <h2 className="text-2xl font-bold text-black mt-1">
            We build what is <span className="bg-[#eef430] px-1 italic">needed.</span>
          </h2>
        </div>

        {/* Description Paragraphs */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-800 italic leading-relaxed text-[15px]">
          <p>
            We start by understanding why something is being built and who it is for. By blending engineering with empathy, we design solutions that align with real user behavior, operational realities, and long-term business goals along with technical requirements.
          </p>
          <p className="font-medium not-italic">
            We bridge the gap between <span className="font-bold">strategy and execution</span>, ensuring every product is as practical as it is powerful.
          </p>
        </div>

        {/* Bottom Feature Box */}
        <div className="mt-16 bg-[#8e8e8e] rounded-3xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          
          {/* Column 1 */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="text-[#eef430] font-bold tracking-widest text-sm">EMPATHY</span>
            <p className="font-semibold text-center leading-tight">User <br/> Behavior First</p>
          </div>

          {/* Column 2 - With borders for desktop */}
          <div className="flex flex-col items-center justify-center space-y-1 md:border-x border-white/30 px-4">
            <span className="text-[#eef430] font-bold tracking-widest text-sm">ENGINEERING</span>
            <p className="font-semibold text-center leading-tight">Enterprise-Grade <br/> System</p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="text-[#eef430] font-bold tracking-widest text-sm">OUTCOMES</span>
            <p className="font-semibold text-center leading-tight">Real Business <br/> Impact</p>
          </div>

        </div>
      </div>
    </section>
  );
}
