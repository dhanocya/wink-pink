import Image from "next/image";

export default function Sectwo() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 py-12">
            <div className="bg-[#efff00] min-w-[500px] min-h-[100px] rounded-xl flex justify-center items-center">
                <p className="text-4xl font-bold">our mission</p>
            </div>

            <div>
                <p>To make technology human, simple, and smart—for both businesses and the people they serve.
                </p>
            </div>

            <div>
                <Image src="/ab.png" width={900} height={500} alt="Mission Image" />
            </div>
        </div>
    );
}