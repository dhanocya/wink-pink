"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Xarrow from 'react-xarrows';

// --- Interface ---
interface CardProps {
  id: string;
  step: string;
  title: string;
  text: string;
  position: 'left' | 'right';
}

// --- Card Component ---
const ProcessCard = ({ id, step, title, text, position }: CardProps) => (
  <div id={id} className={`col-span-1 flex flex-col ${position === 'left' ? 'md:items-end' : 'md:items-start'} mb-10`}>
    <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Step {step}:</p>
    <div className="bg-white p-6 rounded-lg shadow-md w-full border-l-[12px] border-[#EFFF00] relative group">
      <h4 className="text-xl font-bold text-[#186036] mb-2">{title}</h4>
      <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
    </div>
  </div>
);

// --- Main Page Component ---
export default function ProcessBlueprint() {
  const [mounted, setMounted] = useState(false);

  // Next.js Hydration error se bachne ke liye
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* 1. Header Banner */}
        <div className="w-full bg-black rounded-sm p-4 text-center mb-16 border-y-4 border-[#EFFF00]">
          <h2 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wider">
            The Tech Blueprint for the <span className="text-[#EFFF00]">Best User Experience</span>
          </h2>
        </div>

        {/* 2. Top Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-24">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-gray-800">
              <Image 
                src="/girl.png" // Apni image check karein
                alt="Working" 
                width={600} 
                height={400} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-extrabold text-black mb-4">
              Custom websites, applications, and integrations designed with a "people first" mindset.
            </h3>
            <p className="text-gray-600 mb-4">
              Unlike most tech companies, we don't start with a tech stack. We start with your end goal and reverse engineer the process.
            </p>
          </div>
        </div>

        {/* 3. Zigzag Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 relative">
          
          {/* Step 1 */}
          <div className="hidden md:block"></div>
          <ProcessCard id="s1" step="1" title='We Listen for the "Why"' text="Before we touch a keyboard, we figure out why you're building this. We dig for the friction in your current process." position="right" />

          {/* Step 2 */}
          <ProcessCard id="s2" step="2" title="Design for Real People" text="We map out an experience that makes sense at a glance. We want your team to actually want to use the tool." position="left" />
          <div className="hidden md:block"></div>

          {/* Step 3 */}
          <div className="hidden md:block"></div>
          <ProcessCard id="s3" step="3" title="The Muscle to Build It Right" text="We hand-pick the right technology to build a robust foundation. No templates, no shortcuts." position="right" />

          {/* Step 4 */}
          <ProcessCard id="s4" step="4" title="Zero-Friction Launch" text="We collaborate with you on the heavy lifting. Our goal is that the new tech feels natural on day one." position="left" />
          <div className="hidden md:block"></div>

          {/* Step 5 */}
          <div className="hidden md:block"></div>
          <ProcessCard id="s5" step="5" title="Refining the Reality" text="Post-launch, we stay in the trenches. We use data to see how people actually click and scroll." position="right" />
        </div>

      </div>

      {/* --- 90 Degree Angular Arrows --- */}
      {mounted && (
        <div className="hidden md:block"> 
          {/* s1 to s2 */}
          <Xarrow 
            start="s1" end="s2" 
            path="grid" color="#d1d5db" strokeWidth={2} showHead={false} 
            startAnchor="left" endAnchor="top" gridBreak="50%"
          />
          {/* s2 to s3 */}
          <Xarrow 
            start="s2" end="s3" 
            path="grid" color="#d1d5db" strokeWidth={2} showHead={false} 
            startAnchor="right" endAnchor="top" gridBreak="50%"
          />
          {/* s3 to s4 */}
          <Xarrow 
            start="s3" end="s4" 
            path="grid" color="#d1d5db" strokeWidth={2} showHead={false} 
            startAnchor="left" endAnchor="top" gridBreak="50%"
          />
          {/* s4 to s5 */}
          <Xarrow 
            start="s4" end="s5" 
            path="grid" color="#d1d5db" strokeWidth={2} showHead={false} 
            startAnchor="right" endAnchor="top" gridBreak="50%"
          />
        </div>
      )}
    </section>
  );
}
