import Hori from "../components/Hori";
import Image from "next/image"
import { FaCheckCircle } from "react-icons/fa";


export default function Fea() {
    return (
        <div>
            <Hori />    
            <div className="flex justify-center">
                <p className="text-3xl bg-black text-white p-4">Where Custom Websites Deliver the Most Value</p>
            </div>
            <div>
                <div className="flex bg-gray-400 border-2 border-yellow-300 h-20 items-center m-4">
                    <FaCheckCircle className="text-[#EFFF00] text-4xl mx-4 " />
                    <p>Conversion-focused architecture  that turns attention into inquiries.</p>
                </div>
                <div className="flex bg-gray-400 border-2 border-yellow-300 h-20 items-center m-4">
                    <FaCheckCircle className="text-[#EFFF00] text-4xl mx-4 " />
                    <p>Integrated systems that reduce  internal friction.</p>
                </div>
                <div className="flex bg-gray-400 border-2 border-yellow-300 h-20 items-center m-4">
                    <FaCheckCircle className="text-[#EFFF00] text-4xl mx-4 " />
                    <p>Client portals that strengthen retention and loyalty.</p>
                </div>
                <div className="flex bg-gray-400 border-2 border-yellow-300 h-20 items-center m-4">
                    <FaCheckCircle className="text-[#EFFF00] text-4xl mx-4 " />
                    <p>Scalable infrastructure designed for expansion.</p>
                </div>
            </div>
        </div>
    )
}