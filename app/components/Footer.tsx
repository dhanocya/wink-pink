import Image from 'next/image';

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function () {
    return (
        <div className="w-full rounded-lg p-6 shadow-xl mt-10">
            <div className='bg-black rounded-xl text-white flex justify-between flex-wrap items-start gap-10 p-6'>
                <div className='align-center'>
                    <Image src="/logo.png" alt="Company Logo" width={200} height={200} className="" />
                </div>

                <div className='flex flex-wrap gap-10 p-6'>
                    <div>
                        <h4 className="text-2xl">About</h4>
                        <li className="list-none text-[#EFFF00]">Our story</li>
                        <li className="list-none text-[#EFFF00]">Careers</li>
                    </div>
                    <div>
                        <h4 className="text-2xl">Quick links</h4>
                        <li className="list-none text-[#EFFF00]">Our story</li>
                        <li className="list-none text-[#EFFF00]">Careers</li>
                    </div>
                    <div>
                        <h4 className="text-2xl">Our services</h4>
                        <li className="list-none text-[#EFFF00]">Our story</li>
                        <li className="list-none text-[#EFFF00]">Careers</li>
                    </div>

                    <div>
                        <h4 className="text-2xl">Lets connect</h4>
                        <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold text-sm transition">
                            Email Now
                        </button>
                        <div className='flex gap-4 mt-4 text-2xl'>
                            <FaFacebook />
                            <RiInstagramFill />
                            <FaTwitterSquare />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}