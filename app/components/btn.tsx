export default function Btn() {
    return (
        <div className="flex gap-4 flex-wrap">
            <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-5 py-2.5 rounded text-xs font-bold transition flex items-center gap-2">
                View Our Portfolio <span>→</span>
            </button>
            <button className="bg-[#EFFF00] hover:bg-yellow-400 text-black px-5 py-2.5 rounded text-xs font-bold transition flex items-center gap-2">
                Work With Us <span>→</span>
            </button>
        </div>
    )
}   