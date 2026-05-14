import Image from "next/image"
import Btn from "../components/btn"

export default function Impact() {
    return (
        <div className="flex gap-4 flex-col">
            <div className="flex items-center justify-center h-[30vh]">
                <h1 className="text-3xl bg-black text-white text-center rounded-lg max-w-7xl p-8"> Where We Make the <span className="text-yellow-400">Biggest Impact</span></h1>
            </div>
            <div className="flex items-center justify-center">
                <p>We combine <span className="font-bold">e-commerce website design development</span> with smart systems to create real business results.
                </p>
            </div>

            <div className="flex items-center mt-10">
                <div className="flex items-center  w-full">
                    <div className="md:max-w-4xl pl-[10%]">
                        <div className="flex items-center">
                            <Image src="/ap.png" alt="AP" width={50} height={50} />
                            <p>Turn traffic into consistent revenue</p>
                        </div>

                        <div className="flex items-center">
                            <Image src="/apa.png" alt="AP" width={50} height={50} />
                            <p>Reduce operational bottlenecks with workflow automation software</p>
                        </div>

                        <div className="flex  items-center">
                            <Image src="/apb.png" alt="AP" width={50} height={50} />
                            <p>Automate repetitive workflows</p>
                        </div>

                        <div className="flex items-center">
                            <Image src="/apc.png" alt="AP" width={50} height={50} />
                            <p>Create smooth mobile buying experiences</p>
                        </div>

                        <p>No matter your industry, the goal stays the same: Build a custom e-commerce system that supports how
                            your business runs today—and how it grows tomorrow.</p>
                    </div>
                </div>
            </div>

            <div className="ml-[10%]">
                <Btn />
            </div>
        </div>
    )
}