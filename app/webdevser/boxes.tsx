import Image from "next/image";

export default function Boxes() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <div>
                <p className="text-3xl font-bold bg-yellow-400">Sectors We Build For</p>
            </div>

            <div>
                <p> <span className="font-bold">Different industries. Same friction. Same fix.</span>
                    We connect what should never have been separate in the first place.
                </p>
            </div>

            <div className="flex flex-wrap justify-center mt-8">
                <div className="w-[200] h-[200] border-2 border-yellow-400 bg-[#f0f0f0] flex items-center justify-center m-4 flex-col">
                    <Image src="/nur.png" alt="Box 1" width={100} height={100} />
                    <p>healthcare</p>
                </div>
                <div className="w-[200] h-[200] border-2 border-yellow-400 bg-[#f0f0f0] flex items-center justify-center m-4 flex-col">
                    <Image src="/bar.png" alt="Box 1" width={100} height={100} />
                    <p>retail</p>
                </div>
                <div className="w-[200] h-[200] border-2 border-yellow-400 bg-[#f0f0f0] flex items-center justify-center m-4 flex-col">
                    <Image src="/study.png" alt="Box 1" width={100} height={100} />
                    <p>education</p>
                </div>
                <div className="w-[200] h-[200] border-2 border-yellow-400 bg-[#f0f0f0] flex items-center justify-center m-4 flex-col">
                    <Image src="/man.png" alt="Box 1" width={100} height={100} />
                    <p>construction</p>
                </div>
                <div className="w-[200] h-[200] border-2 border-yellow-400 bg-[#f0f0f0] flex items-center justify-center m-4 flex-col">
                    <Image src="/school.png" alt="Box 1" width={100} height={100} />
                    <p>manufacturing</p>
                </div>
            </div>

            <div>
                <p>The industries may differ, but the goal stays the same:
                    Replace fragmented technology with connected digital ecosystems.</p>
            </div>
        </div>
    )
}