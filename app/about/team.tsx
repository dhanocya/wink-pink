import React from 'react';

const teamMembers = [
  {
    name: "Divakar Saini",
    role: "Managing Director, Business Growth & Strategy",
    desc: "Divakar leads business growth, partnerships, and strategic direction at CustomTech Labs. He brings a rare combination of business acumen and technical understanding, allowing him to see both the opportunity and the execution behind it. He works closely with clients to identify what's actually holding their business back and translates that into clear, scalable technology solutions.",
    additionalInfo: "His strength lies in connecting the dots between business goals, user needs, and technical possibilities. From client acquisition to long-term partnerships, Divakar ensures every engagement is rooted in impact, not just delivery.",
    image: "./divaker.png" // replace with real path
  },
  {
    name: "Harvindra Singh",
    role: "Managing Director & CTO, Technology & Engineering",
    desc: "Harvindra leads the engineering vision at CustomTech Labs, ensuring every product is built with precision, scalability, and long-term performance in mind. With deep expertise in system architecture and modern technologies, he turns complex business requirements into robust, high-performing solutions.",
    additionalInfo: "He takes a hands-on approach to development, guiding teams through clean architecture, efficient processes, and enterprise-grade execution. His focus is simple: build technology that not only works today, but continues to perform as the business grows.",
    image: "./har.png"
  },
  {
    name: "Prati Kaufman",
    role: "Human-Centered Systems Architect",
    desc: "Prati Kaufman leads strategy, user experience, and growth alignment at CustomTech Labs. With a strong foundation in marketing, business growth, and human behavior, she ensures that every product is not just built well but built right.",
    additionalInfo: "Her approach starts before the first line of code. She focuses on defining the why behind every build—who it is for, how it will be used, and how it will drive real business outcomes. At her core, Prati believes that technology should simplify decisions, not complicate them.",
    image: "./hara.png"
  }
];

export default function Team() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 max-w-7xl mx-auto space-y-24">
      {teamMembers.map((member, index) => (
        <div 
          key={index} 
          className={`flex flex-col md:flex-row items-center gap-12 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Image Box */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#d9d9d9] aspect-square w-full rounded-sm shadow-sm overflow-hidden">
               <img 
                 src={member.image} 
                 alt={member.name} 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
               />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <p className="text-gray-400 text-sm font-medium tracking-wide">
              {member.role}
            </p>
            <h3 className="text-3xl font-bold text-black italic">
              {member.name}
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
              <p>{member.desc}</p>
              <p>{member.additionalInfo}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}