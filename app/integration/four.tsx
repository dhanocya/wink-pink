import { Square3Stack3DIcon, BoltIcon, ChartBarIcon, CpuChipIcon, ScaleIcon } from "@heroicons/react/24/outline";

const approachItems = [
  {
    title: "We Start With Your Workflow",
    description: "Before we build anything, we understand how your business operates today. Our consulting and system integration services focus on real processes, not assumptions.",
    icon: Square3Stack3DIcon,
  },
  {
    title: "We Connect With Purpose",
    description: "Every integration is designed to move data securely and reliably between systems.",
    icon: BoltIcon,
  },
  {
    title: "We Build for What’s Next",
    description: "Flexible architecture that supports new tools without needing to start over.",
    icon: CpuChipIcon,
  },
  {
    title: "We Prioritize Stability",
    description: "No surprises. No downtime. Just systems you can depend on.",
    icon: ScaleIcon,
  },
  {
    title: "We Improve Over Time",
    description: "We track how your systems perform in real use, and refine where needed.",
    icon: ChartBarIcon,
  },
];

export default function Square() {
  return (
    <>
      <div className="bg-[#f0f0f0] min-h-screen font-sans text-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col items-center mb-16 gap-8">
            <span className="bg-black text-[#eef430] uppercase tracking-wider px-10 py-3 rounded-full text-lg font-medium shadow-md">
              Our Approach To Integration
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1a1a1a]">
              How We Build Systems That Work Together
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-20">
            {approachItems.map((item, index) => (
              <div 
                key={item.title} 
                className={`flex rounded-xl shadow-lg bg-white ${index === 4 ? 'md:col-span-2 md:w-3/5 md:mx-auto' : ''}`}
              >
                <div className="bg-[#eef430] min-w-[3rem] w-[3rem] rounded-l-xl flex items-center justify-center p-3">
                    <item.icon className="h-full w-full text-[#1a1a1a]" aria-hidden="true" />
                </div>
                <div className="flex flex-col p-8 gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#034a27]">
                    {item.title}
                  </h2>
                  <p className="text-lg md:text-xl text-[#333333] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-6">
            <button className="bg-[#EFFF00] hover:bg-[#e6ee00] text-black px-12 py-3 rounded-full font-bold text-lg transition shadow-md">
              View Our Portfolio
            </button>
            <button className="bg-[#EFFF00] hover:bg-[#e6ee00] text-black px-12 py-3 rounded-full font-bold text-lg transition shadow-md">
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}