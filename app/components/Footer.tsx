import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
    return (
        <div className="w-full px-4 md:px-6 mt-10">
            <div className='bg-black rounded-2xl text-white p-8 md:p-12 flex flex-col lg:flex-row justify-between items-start gap-12'>
                
                {/* Logo Section - Mobile pe center, Desktop pe left */}
                <div className='w-full lg:w-auto flex justify-center lg:justify-start'>
                    <Image 
                        src="/logo.png" 
                        alt="Company Logo" 
                        width={180} 
                        height={60} 
                        className="object-contain" 
                    />
                </div>

                {/* Links Container - Responsive Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full lg:w-auto'>
                    
                    {/* About */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-xl font-bold mb-4">About</h4>
                        <ul className="space-y-2">
                            <li className="list-none text-[#EFFF00] hover:underline cursor-pointer">Our story</li>
                            <li className="list-none text-[#EFFF00] hover:underline cursor-pointer">Careers</li>
                        </ul>
                    </div>

                    {/* Quick links */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-xl font-bold mb-4">Quick links</h4>
                        <ul className="space-y-2">
                            <li className="list-none text-[#EFFF00] hover:underline cursor-pointer">Our story</li>
                            <li className="list-none text-[#EFFF00] hover:underline cursor-pointer">Careers</li>
                        </ul>
                    </div>

                    {/* Our services */}
                    <div className="text-center sm:text-left">
                        <h4 className="text-xl font-bold mb-4">Our services</h4>
                        <ul className="space-y-2">
                            <li className="list-none text-[#EFFF00] hover:underline cursor-pointer">Our story</li>
                            <li className="list-none text-[#EFFF00] hover:underline cursor-pointer">Careers</li>
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h4 className="text-xl font-bold mb-4">Let's connect</h4>
                        <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-8 py-2 rounded-full font-bold text-sm transition-transform active:scale-95">
                            Email Now
                        </button>
                        <div className='flex gap-5 mt-6 text-2xl text-[#EFFF00]'>
                            <FaFacebook className="hover:text-white cursor-pointer transition" />
                            <RiInstagramFill className="hover:text-white cursor-pointer transition" />
                            <FaTwitterSquare className="hover:text-white cursor-pointer transition" />
                            <FaLinkedin className="hover:text-white cursor-pointer transition" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}