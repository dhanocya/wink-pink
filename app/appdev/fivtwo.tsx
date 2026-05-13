export default function Fivtwo() {
    return (
        <>
            <div>
                <div className="w-full flex justify-center items-center py-4">
                    <p className="text-2xl md:text-4xl font-thin text-center text-[#eef430] uppercase tracking-wider bg-black w-100 p-4 rounded-xl"> Our Operating Doctrine</p>
                </div>

                <div className="flex justify-center items-center flex-col gap-4 mb-12 px-4 text-center">
                    <p className="font-bold text-3xl">We follow the same philosophy outlined across our platform</p>
                </div>

                {/* Max width set kiya aur gap add kiya taki grid clean dikhe */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">

                    {/* Card 1 */}
                    <div className="flex shadow-lg rounded-r-md overflow-hidden bg-white min-h-[140px]">

                        <div className="flex flex-col justify-center p-6 max-w-md">
                            <p className="text-xl font-bold text-[#034a27] mb-2 bg-[#eef430]">We Start with friction</p>
                            <p className="text-gray-600 text-sm leading-relaxed">If the workflow isn’t clear, the app won’t fix it.</p>
                        </div>

                    </div>
                    <div className="flex shadow-lg rounded-r-md overflow-hidden bg-white min-h-[140px]">

                        <div className="flex flex-col justify-center p-6 max-w-md">
                            <p className="text-xl font-bold text-[#034a27] mb-2 bg-[#eef430]">We design for real behavior</p>
                            <p className="text-gray-600 text-sm leading-relaxed">Not ideal behavior. Not assumed behavior.</p>
                        </div>

                    </div>
                    <div className="flex shadow-lg rounded-r-md overflow-hidden bg-white min-h-[140px]">

                        <div className="flex flex-col justify-center p-6 max-w-md">
                            <p className="text-xl font-bold text-[#034a27] mb-2 bg-[#eef430]">We Build for longevity</p>
                            <p className="text-gray-600 text-sm leading-relaxed">No shortcuts. No tech debt traps.</p>
                        </div>

                    </div>
                    <div className="flex shadow-lg rounded-r-md overflow-hidden bg-white min-h-[140px]">

                        <div className="flex flex-col justify-center p-6 max-w-md">
                            <p className="text-xl font-bold text-[#034a27] mb-2 bg-[#eef430]">We launch without chaos</p>
                            <p className="text-gray-600 text-sm leading-relaxed">If adoption requires force, the system is wrong.</p>
                        </div>

                    </div>

                </div>

                <div className="flex justify-center items-center gap-8 m-12">
                                        <div className="flex shadow-lg rounded-r-md overflow-hidden bg-white min-h-[140px]">

                        <div className="flex flex-col justify-center p-6 max-w-md">
                            <p className="text-xl font-bold text-[#034a27] mb-2 bg-[#eef430]">We Start with friction</p>
                            <p className="text-gray-600 text-sm leading-relaxed">If the workflow isn’t clear, the app won’t fix it.</p>
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