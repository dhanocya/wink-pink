import Hori from "../components/Hori";
import { FaCheckCircle } from "react-icons/fa";

export default function Fea() {
    return (
        <div className="w-full">
            <Hori />    
            
            {/* Heading: Mobile pe text size adjust kiya hai */}
            <div className="flex justify-center px-4 mb-6">
                <p className="text-xl md:text-3xl bg-black text-white p-4 text-center w-full md:w-auto">
                    Where Custom Websites Deliver the Most Value
                </p>
            </div>

            {/* Features Container */}
            <div className="px-2 md:px-10">
                {/* Feature Card */}
                {[
                    "Conversion-focused architecture that turns attention into inquiries.",
                    "Integrated systems that reduce internal friction.",
                    "Client portals that strengthen retention and loyalty.",
                    "Scalable infrastructure designed for expansion."
                ].map((text, index) => (
                    <div 
                        key={index} 
                        className="flex bg-gray-400 border-2 border-yellow-300 min-h-[80px] items-center m-4 p-4 rounded-sm transition-transform hover:scale-[1.01]"
                    >
                        {/* Icon: Size mobile ke liye shrink nahi hoga */}
                        <div className="flex-shrink-0">
                            <FaCheckCircle className="text-[#EFFF00] text-3xl md:text-4xl mr-4" />
                        </div>
                        
                        {/* Text: Responsive font size */}
                        <p className="text-sm md:text-lg font-medium text-black leading-tight">
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}