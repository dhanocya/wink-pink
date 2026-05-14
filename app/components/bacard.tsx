import Bocard from "./bocard";

export default function Bacard() {
    return (
        <div>
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

                        <div className="flex flex-wrap justify-center mt-10">
                            <Bocard name="retail and fashion" imageSrc="/ki.png" />
                            <Bocard name="beauty and personal care" imageSrc="/kia.png" />
                            <Bocard name="Electronics" imageSrc="/kib.png" />
                            <Bocard name="Grocery" imageSrc="/kic.png" /> 
                            <Bocard name="healthcare" imageSrc="/nur.png" /> 
                            <Bocard name="Marketplace" imageSrc="/kid.png" /> 
                        </div>
            
            
                        {/* Footer Text */}
                        <div className="w-full max-w-3xl mt-10 px-4">
                            <p className="text-center text-sm md:text-base text-gray-700 italic">
                                The industries may differ, but the goal stays the same:<br className="hidden md:block"/>
                                Replace fragmented technology with connected digital ecosystems.
                            </p>
                        </div>
                    </div>
        </div>
    )
}