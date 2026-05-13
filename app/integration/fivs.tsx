export default function Fivs() {
    return (
        <>
            <div>
                <div className="w-full flex justify-center items-center py-4">
                    <p className="text-2xl md:text-4xl font-thin text-center text-[#eef430] uppercase tracking-wider bg-black w-100 p-4 rounded-xl"> Our Approach</p>
                </div>

                <div className="flex justify-center items-center flex-col gap-4 mb-12 px-4 text-center">
                    <p className="font-bold text-3xl">Our Approach to E-Commerce Development</p>
                    <p className="text-gray-600">Our guiding rules behind every e-commerce platform we craft</p>
                </div>

                {/* Max width set kiya aur gap add kiya taki grid clean dikhe */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">

                    {/* Card 1 */}
                    <div className="flex shadow-lg rounded-r-md overflow-hidden bg-white min-h-[140px]">
                        {/* Yellow strip automatically height adjust karegi layout ke sath */}
                        <div className="bg-[#eef430] w-[20px] flex-shrink-0"></div>
                        <div className="flex flex-col justify-center p-6 w-full">
                            <p className="text-xl font-bold text-[#034a27] mb-2">Customer Journey First</p>
                            <p className="text-gray-600 text-sm leading-relaxed">A store loaded with features won’t sell if customers get stuck. We simplify buying, step by step.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex shadow-lg rounded-r-md overflow-hidden bg-white min-h-[140px]">
                        <div className="bg-[#eef430] w-[20px] flex-shrink-0"></div>
                        <div className="flex flex-col justify-center p-6 w-full">
                            <p className="text-xl font-bold text-[#034a27] mb-2">We Design for Real Behavior</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Not assumptions. Not ideal scenarios. Real users, real actions.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex shadow-lg rounded-r-md overflow-hidden bg-white min-h-[140px]">
                        <div className="bg-[#eef430] w-[20px] flex-shrink-0"></div>
                        <div className="flex flex-col justify-center p-6 w-full">
                            <p className="text-xl font-bold text-[#034a27] mb-2">We Build for What’s Next</p>
                            <p className="text-gray-600 text-sm leading-relaxed">A store loaded with features won’t sell if customers get stuck. We simplify buying, step by step.</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex shadow-lg rounded-r-md overflow-hidden bg-white min-h-[140px]">
                        <div className="bg-[#eef430] w-[20px] flex-shrink-0"></div>
                        <div className="flex flex-col justify-center p-6 w-full">
                            <p className="text-xl font-bold text-[#034a27] mb-2">We Connect Everything That Matters</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Payments. Inventory. Fulfillment. Tools. Because disconnected systems create hidden problems.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-8 m-12">
                                        {/* Card 5 */}
                    <div className="flex shadow-lg rounded-r-md overflow-hidden bg-white min-h-[140px]">
                        <div className="bg-[#eef430] w-[20px] flex-shrink-0"></div>
                        <div className="flex flex-col justify-center p-6 w-full">
                            <p className="text-xl font-bold text-[#034a27] mb-2">We Prioritize Performance</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Speed isn’t a feature, it’s the baseline. Stable, fast experiences that keep customers moving.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-8 m-12">
                    <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold text-sm transition">
                        View Our Portfolio
                    </button>
                    <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold text-sm transition">
                        Work with us
                    </button>
                </div>
            </div>

        </>
    )
}