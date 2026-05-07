

export default function Art({ title } : {title : string}) {
    return (
        <>
            <div className="bg-white">
                {/* Container with drop-shadow creates the border effect */}
                <div className="filter drop-shadow-[0_4px_0_rgba(250,204,21,1)] pb-10">
                    <div
                        className="bg-black h-[150px] w-full flex items-center px-10"
                        style={{
                            clipPath: 'polygon(49% 0, 55% 54%, 100% 54%, 100% 100%, 70% 100%, 30% 100%, 0 100%, 0 0);'
                        }}
                    >
                        <div className="text-white font-bold leading-tight">
                            <p className="text-2xl"> {title} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}