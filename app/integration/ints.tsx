import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";

export default function Ints() {
    return (
        <section className="w-full bg-[#f4f5f6] py-16 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">

                {/* 1. Main Yellow Banner */}
                <div className="w-full flex  mb-8">
                    <div className="bg-[#EFFF00] w-full max-w-4xl py-6 px-4 rounded-xl shadow-sm text-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-wide">
                            Built Around How Your Business Actually Runs
                        </h2>
                    </div>
                </div>

                {/* 2. Subtitle */}
                <h3 className=" text-xl md:text-2xl font-bold text-[#186036] mb-12">
                    For Your Team
                </h3>


                {/* 4. Two-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-10 lg:gap-16 items-start">

                    {/* Left Column: Image */}
                    <div className="relative w-130 aspect-[4/2] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                        {/* Image Placeholder - Replace src with your actual image path */}
                        <Image
                            src="/team.png"
                            alt="Team discussing UX/UI design"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium italic text-sm p-4 text-center">
                            [Image Placeholder: Team working on UX/UI Wireframes]
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex justify-between">

                        <div>
                            {/* Bold Text */}
                            <p className="text-[15px] font-bold text-black mb-6 leading-relaxed">
                                Your systems should talk to each other.
                            </p>

                            {/* Italic Light Text */}
                            <p className="text-[15px] italic text-gray-500 mb-8 leading-relaxed">
                                If they don’t, your team fills the gaps manually.
                            </p>

                            {/* Bullet Points with Red X */}
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <span className="text-red-600 font-bold text-lg">✖</span>
                                    <span className="text-gray-500 font-semibold text-sm">Copying orders between platforms.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-red-600 font-bold text-lg">✖</span>
                                    <span className="text-gray-500 font-semibold text-sm">Checking inventory across tools.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-red-600 font-bold text-lg">✖</span>
                                    <span className="text-gray-500 font-semibold text-sm">Pulling reports from multiple sources.</span>
                                </li>
                            </ul>

                            <p>That’s not a workflow- it’s friction.</p>
                        </div>

                        <div>
                            {/* Bold Text */}
                            <p className="text-[15px] text-black mb-6 leading-relaxed">
                                Through our consulting and system integration services, we connect your systems so data moves automatically.
                            </p>

                            {/* Bullet Points with Red X */}
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-[#EFFF00] text-4xl mx-4 " />
                                    <span className="text-gray-500 font-semibold text-sm">No bottlenecks.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-[#EFFF00] text-4xl mx-4 " />
                                    <span className="text-gray-500 font-semibold text-sm">No fragmented systems.</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaCheckCircle className="text-[#EFFF00] text-4xl mx-4 " />
                                    <span className="text-gray-500 font-semibold text-sm">No fragile builds that break under growth.</span>
                                </li>
                            </ul>

                            <p className="text-[15px] italic text-gray-500 mb-8 leading-relaxed">
                                Your team stops doing repetitive tasks…and focuses on work that actually drives growth.
                            </p>
                        </div>

                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-5 py-2.5 rounded text-xs font-bold transition flex items-center gap-2">
                            View Our Portfolio <span>→</span>
                        </button>
                        <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-5 py-2.5 rounded text-xs font-bold transition flex items-center gap-2">
                            Work With Us <span>→</span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}