import Image from "next/image";
export default function Philosophy() {
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center mt-12 mb-8 bg-black text-white">Our web development Philosophy</h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-4 mb-12">
                <p className="">Built on the same principles that guide every platform we develop.</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-4">
                <div className="border-2 p-2">
                    <div className="bg-[#EFFF00] w-[50px] h-[50px]">
                        <Image src="/bl.png" alt="Clarity Icon" width={50} height={50} />
                    </div>
                    <h3>Clarity before disign</h3>
                    <p>We start with clarity.
                        If positioning isn’t sharp, design won’t save it.</p>
                </div>
                <div className="border-2 p-2">
                    <div className="bg-[#EFFF00] w-[50px] h-[50px]">
                        <Image src="/bla.png" alt="Clarity Icon" width={50} height={50} />
                    </div>
                    <h3>Clarity before disign</h3>
                    <p>We start with clarity.
                        If positioning isn’t sharp, design won’t save it.</p>
                </div>
                <div className="border-2 p-2">
                    <div className="bg-[#EFFF00] w-[50px] h-[50px]">
                        <Image src="/blb.png" alt="Clarity Icon" width={50} height={50} />
                    </div>
                    <h3>Clarity before disign</h3>
                    <p>We start with clarity.
                        If positioning isn’t sharp, design won’t save it.</p>
                </div>
                <div className="border-2 p-2">
                    <div className="bg-[#EFFF00] w-[50px] h-[50px]">
                        <Image src="/blc.png" alt="Clarity Icon" width={50} height={50} />
                    </div>
                    <h3>Clarity before disign</h3>
                    <p>We start with clarity.
                        If positioning isn’t sharp, design won’t save it.</p>
                </div>
                <div className="border-2 p-2">
                    <div className="bg-[#EFFF00] w-[50px] h-[50px]">
                        <Image src="/bld.png" alt="Clarity Icon" width={50} height={50} />
                    </div>
                    <h3>Clarity before disign</h3>
                    <p>We start with clarity.
                        If positioning isn’t sharp, design won’t save it.</p>
                </div>
                <div className="border-2 p-2">
                    <div className="bg-[#EFFF00] w-[50px] h-[50px]">
                        <Image src="/ble.png" alt="Clarity Icon" width={50} height={50} />
                    </div>
                    <h3>Clarity before disign</h3>
                    <p>We start with clarity.
                        If positioning isn’t sharp, design won’t save it.</p>
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
    );
}