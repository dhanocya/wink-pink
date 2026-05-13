import Image from "next/image";

export default function Boxes() {
    // Data array taaki code clean rahe
    const sectors = [
        { name: "healthcare", src: "/nur.png" },
        { name: "retail", src: "/bar.png" },
        { name: "education", src: "/study.png" },
        { name: "construction", src: "/man.png" },
        { name: "manufacturing", src: "/school.png" },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
            
            {/* Header Section */}
            <div className="bg-black w-full max-w-4xl p-4 m-4">
                <p className="text-2xl md:text-3xl font-bold text-white text-center uppercase tracking-wider">
                    Sectors We Build For
                </p>
            </div>

            {/* Sub-header Text */}
            <div className="w-full max-w-2xl px-4">
                <p className="text-center text-gray-800"> 
                    <span className="font-bold">Different industries. Same friction. Same fix.</span><br/>
                    We connect what should never have been separate in the first place.
                </p>
            </div>

            {/* Responsive Grid for Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8 w-full max-w-6xl px-4">
                {sectors.map((sector, index) => (
                    <div 
                        key={index} 
                        className="aspect-square border-2 border-yellow-400 bg-[#f0f0f0] flex items-center justify-center flex-col transition-all hover:bg-yellow-50 hover:shadow-lg rounded-sm group"
                    >
                        <div className="relative w-16 h-16 md:w-24 md:h-24">
                            <Image 
                                src={sector.src} 
                                alt={sector.name} 
                                fill
                                className="object-contain p-2 group-hover:scale-110 transition-transform" 
                            />
                        </div>
                        <p className="mt-2 font-bold text-xs md:text-sm uppercase tracking-tight text-center px-1">
                            {sector.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* Footer Text */}
            <div className="w-full max-w-3xl mt-10 px-4">
                <p className="text-center text-sm md:text-base text-gray-700 italic">
                    The industries may differ, but the goal stays the same:<br className="hidden md:block"/>
                    Replace fragmented technology with connected digital ecosystems.
                </p>
            </div>
        </div>
    );
}