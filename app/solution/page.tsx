import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Einfo from './einfo';

export default function Solution() {
    return (
        <>
            <main className="relative w-full min-h-[90vh] bg-[#f4f4f4]">
                <Navbar />
                {/* 1. Background Image Setup */}
                {/* Note: Apni hero background image (w/ people) ko public folder me rakhein aur yahan path change karein */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-right md:bg-center"
                    style={{ backgroundImage: "url('solu.png')" }}
                >
                </div>

                {/* Main Content Wrapper */}
                <div className="relative z-10 flex flex-col justify-center min-h-[90vh] px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
                    <div className="max-w-2xl py-20">
                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] mb-6 tracking-tight">
                            E-comerce That Works The Way Your Business Actually Runs
                        </h1>

                        {/* Sub-heading */}
                        <p className="text-lg md:text-[1.1rem] text-gray-800 mb-10 max-w-xl leading-relaxed font-bold">
                            At Custom Labs, we deliver e-commerce development services that feel simple to use, easy to manage, and built to grow with you.
                        </p>
                        <p className="text-lg md:text-[1.1rem] text-gray-800 mb-10 max-w-xl leading-relaxed font-medium">
                            Your e-commerce system shouldn’t slow you down- it should move your business forward.

                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-7 py-3 rounded-md font-bold text-sm transition shadow-sm">
                                View Our Portfolio
                            </button>
                            <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-7 py-3 rounded-md font-bold text-sm transition shadow-sm">
                                Work With Us
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <div className='h-[20] bg-yellow-500'></div>

            <Einfo />
        </>
    );
}