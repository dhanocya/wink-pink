import React from 'react';
import Image from 'next/image';
// Reusable Card Component
const ServiceCard = ({ title, subtitle, description, buttonText }: any) => (
  <div className="border border-black p-8 flex flex-col h-full bg-white">
    <h3 className="text-2xl font-bold text-black mb-1">{title}</h3>
    <p className="text-sm italic font-medium text-gray-700 mb-6">{subtitle}</p>
    
    <Image src="/o.png" alt={`${title} image`} width={400} height={225} className="mb-6" />

    <p className="text-[15px] leading-relaxed text-gray-800 mb-8 flex-grow">
      {description}
    </p>

    <button className="bg-black text-white text-[11px] font-bold py-2 px-4 w-fit uppercase tracking-wider flex items-center gap-2 hover:bg-gray-800 transition-colors">
      {buttonText} <span>→</span>
    </button>
  </div>
);

export default function CapabilitiesSection() {
  return (
    <section className="w-full bg-white pb-20">

      {/* 2. Grid System for Cards */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <ServiceCard 
            title="Custom Websites"
            subtitle="Performance Focused & Conversion Driven"
            description="Move beyond digital brochures. We build high-converting engines that establish authority and turn visitors into long-term partners."
            buttonText="VIEW WEBSITE SOLUTIONS"
          />

          <ServiceCard 
            title="Custom Applications"
            subtitle="Workflow-Specific & User-First"
            description="Software should adapt to you, not the other way around. We build tools designed around how your team and customers actually move."
            buttonText="EXPLORE CUSTOM APPS"
          />

          <ServiceCard 
            title="System Integrations"
            subtitle="Harmonious & Frictionless"
            description="Stop the manual data entry. We make your disparate tools talk to each other so your business can run on autopilot."
            buttonText="LEARN ABOUT INTEGRATIONS"
          />

          <ServiceCard 
            title="eCommerce Solutions"
            subtitle="Scalable & Growth-Ready"
            description="Remove the hurdles between your product and your customer. We design buying experiences that simplify the path to purchase."
            buttonText="SEE E-COMMERCE SUCCESS"
          />

        </div>
      </div>
    </section>
  );
}