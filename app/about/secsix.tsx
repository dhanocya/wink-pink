import React from 'react';

const cardData = [
  {
    id: "01",
    title: "Strategy Meets Engineering",
    heading: "Why Before How",
    desc: "Every project begins with understanding the “why” before building the “how.”"
  },
  {
    id: "02",
    title: "User-Friendly by Design",
    heading: "Complex Made Simple",
    desc: "We turn complex systems into simple, intuitive experiences for teams and customers alike."
  },
  {
    id: "03",
    title: "Global Strength, Local Insight",
    heading: "100+ Engineers, U.S. Strategy",
    desc: "Backed by 100+ engineers in India and a strategic leadership team in the U.S., we deliver world-class execution."
  }
];

export default function Secsix() {
  return (
    <section className="bg-white py-16 px-4">
      {/* Header Section */}
      <div className="flex justify-center mb-16">
        <div className="bg-black px-12 py-6 rounded-2xl shadow-lg">
          <h2 className="text-4xl font-bold text-white">What we do</h2>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
        {cardData.map((item) => (
          <div 
            key={item.id} 
            className="relative bg-[#d9d9d9] border border-gray-400 w-[320px] p-8 pt-12 rounded-xl"
          >
            {/* Number Badge: overlap ke liye negative top aur left use kiya hai */}
            <div className="absolute -top-5 -left-5 bg-[#eef430] w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shadow-md border border-gray-300">
              {item.id}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-tight text-gray-700">
                {item.title}
              </h4>
              <h3 className="text-2xl font-extrabold leading-tight text-black">
                {item.heading}
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
