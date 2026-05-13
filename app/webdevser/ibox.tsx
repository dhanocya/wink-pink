export default function Ibox() {
    return (
        <div className="w-full px-4 md:px-8">
            {/* Main Container: Mobile pe padding kam, desktop pe zyada */}
            <div className="bg-gray-500 rounded-2xl flex justify-center flex-col items-center gap-6 md:gap-8 p-6 md:p-12 text-center">

                {/* Text Box: min-w-[100vh] ko hatakar max-w use kiya hai */}
                <div className="bg-black text-white w-full max-w-4xl p-6 md:p-10 rounded-xl">
                    <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                        If your current tools create more work than they remove - 
                        <span className="text-[#EFFF00]"> that’s the signal</span>
                    </p>
                </div>

                {/* Sub-text */}
                <div className="max-w-2xl">
                    <p className="text-lg md:text-xl text-white font-medium">
                        Let’s build something that moves your business forward
                    </p>
                </div>

                {/* Buttons: Mobile pe full width aur stack, Desktop pe side-by-side */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                    <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black w-full sm:w-auto px-8 py-3 rounded-md font-bold text-base transition-all active:scale-95">
                        View Our Portfolio
                    </button>

                    <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black w-full sm:w-auto px-8 py-3 rounded-md font-bold text-base transition-all active:scale-95">
                        Work with us
                    </button>
                </div>

            </div>
        </div>
    )
}