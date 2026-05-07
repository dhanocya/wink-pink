import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function RatingCard() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="w-[400px] bg-[#a6a6a6] rounded-lg p-6 shadow-xl mx-4">
        {/* Header: Profile & Name/Title */}
        <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-5">
          <div className="w-[60px] h-[60px] rounded-xl overflow-hidden border-2 border-gray-600">
            <Image
              src="/dp.png" // Assumes you have an asset at public/dp.png that matches the person in the reference image.
              alt="Profile Image"
              width={60}
              height={60}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold leading-tight">Sarah J.</h3>
            <p className="text-sm font-normal text-gray-300">Operations Director</p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-6 pl-4">
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
        </div>

        {/* Testimonial Quote */}
        <p className="p-4 text-sm text-gray-200 italic leading-relaxed text-left">
          "CustomTech Labs didn't just hand us a platform; they gave us a strategy. They understood that for our business to grow, we needed to stop fighting our own software and start trusting it. <span className="font-bold">The technical execution was flawless</span>, but the human insight was what truly changed our workflow."
        </p>
      </div>
      <div className="w-[400px] bg-[#a6a6a6] rounded-lg p-6 shadow-xl mx-4">
        {/* Header: Profile & Name/Title */}
        <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-5">
          <div className="w-[60px] h-[60px] rounded-xl overflow-hidden border-2 border-gray-600">
            <Image
              src="/dp.png" // Assumes you have an asset at public/dp.png that matches the person in the reference image.
              alt="Profile Image"
              width={60}
              height={60}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold leading-tight">Sarah J.</h3>
            <p className="text-sm font-normal text-gray-300">Operations Director</p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-6 pl-4">
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
        </div>

        {/* Testimonial Quote */}
        <p className="p-4 text-sm text-gray-200 italic leading-relaxed text-left">
          "CustomTech Labs didn't just hand us a platform; they gave us a strategy. They understood that for our business to grow, we needed to stop fighting our own software and start trusting it. <span className="font-bold">The technical execution was flawless</span>, but the human insight was what truly changed our workflow."
        </p>
      </div>
      <div className="w-[400px] bg-[#a6a6a6] rounded-lg p-6 shadow-xl mx-4">
        {/* Header: Profile & Name/Title */}
        <div className="flex items-center gap-4 mb-6 border-b border-gray-700 pb-5">
          <div className="w-[60px] h-[60px] rounded-xl overflow-hidden border-2 border-gray-600">
            <Image
              src="/dp.png" // Assumes you have an asset at public/dp.png that matches the person in the reference image.
              alt="Profile Image"
              width={60}
              height={60}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-white">
            <h3 className="text-lg font-bold leading-tight">Sarah J.</h3>
            <p className="text-sm font-normal text-gray-300">Operations Director</p>
          </div>
        </div>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-6 pl-4">
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
          <FaStar className="text-yellow-400 text-xl" />
        </div>

        {/* Testimonial Quote */}
        <p className="p-4 text-sm text-gray-200 italic leading-relaxed text-left">
          "CustomTech Labs didn't just hand us a platform; they gave us a strategy. They understood that for our business to grow, we needed to stop fighting our own software and start trusting it. <span className="font-bold">The technical execution was flawless</span>, but the human insight was what truly changed our workflow."
        </p>
      </div>
    </div>
  );
}