export default function Ibox() {
    return (
        <div>
            <div className="bg-gray-500 m-4 flex justify-center flex-col items-center gap-8 p-4">

                <div className="bg-black text-white min-w-[100vh] p-4">
                    <p className="text-4xl font-bold">If your current tools create more work than they remove -<span className="text-[#EFFF00]"> that’s the signal</span></p>
                </div>

                <div className="flex justify-center items-center gap-8 m-4">
                    <p>Let’s build something that moves your business forward</p>
                </div>

                <div className="flex justify-center items-center gap-8 m-4">
                    <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold text-sm transition">
                        View Our Portfolio
                    </button>

                    <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold text-sm transition">
                        Work with us
                    </button>
                </div>
            </div>
        </div>
    )
}