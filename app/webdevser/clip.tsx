export default function Clip() {
    return (
        <div className="bg-white">
            {/* Container with drop-shadow creates the border effect */}
            <div className="filter drop-shadow-[0_4px_0_rgba(250,204,21,1)] pb-10">
                <div
                    className="bg-black h-[150px] w-full flex items-center px-10"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 100% 45%, 60% 45%, 55% 100%, 0 100%)'
                    }}
                >
                    <div className="text-white font-bold leading-tight">
                        <p className="text-2xl">Big Tech Capability.</p>
                        <p className="text-2xl">Scaled For Your Growth.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}