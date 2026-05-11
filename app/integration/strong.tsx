import Image from "next/image";
import { ArrowRight } from "lucide-react"; // 'npm i lucide-react' ya icon change kar lein

export default function StrongIntegrations() {
    const points = [
        "Systems that share data instantly— not overnight.",
        "Information that stays consistent across every platform.",
        "Infrastructure that’s ready for whatever comes next.",
        "Workflows that run on their own.",
    ];

    return (
        <section className="relative w-full bg-white py-20 overflow-hidden font-sans flex justify-center">
            <div className="z-1 absolute bottom-60">
                <Image src={"/vev.png"} alt="s image" width={2000} height={1000} />
            </div>
            <div className="bg-[#f5f5f5] w-[1300]">

                <div className="relative z-10 max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">
                        What Strong Integrations Deliver
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left Side: Image */}
                        <div className="relative border-[3px] border-[#d4e815] p-1">
                            <Image
                                src="/palm.png" // Apni image path yaha dalein
                                alt="Team high fiving"
                                width={600}
                                height={450}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Side: Cards */}
                        <div className="flex flex-col gap-4">
                            {points.map((text, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 shadow-lg transform transition-transform hover:scale-[1.02]"
                                >
                                    <p className="text-lg font-bold text-gray-900">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-16 max-w-2xl">
                        <p className="text-gray-500 text-lg mb-2">
                            That's the difference system integration makes.
                        </p>
                        <p className="text-xl font-bold mb-8">
                            Let's build the integration layer that powers your growth.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#d4e815] hover:bg-[#c2d612] text-black font-bold py-3 px-6 rounded-sm flex items-center gap-2 transition-colors">
                                View Our Portfolio <ArrowRight size={18} />
                            </button>
                            <button className="bg-[#d4e815] hover:bg-[#c2d612] text-black font-bold py-3 px-6 rounded-sm flex items-center gap-2 transition-colors">
                                Work With Us <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}