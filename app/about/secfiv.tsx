import { MdNorthEast } from "react-icons/md";

export default function Sectwo() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-4 py-12">
            <div className="bg-[#efff00] min-w-[500px] min-h-[100px] rounded-xl flex justify-center items-center">
                <p className="text-4xl font-bold">What we do</p>
            </div>

            <div>
                <p className="font-bold">We design and build custom enterprise solutions for small to mid-sized businesses, combining innovation with real-world usability.<br></br>
                    Our services include:
                </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="bg-[#f5f5f5] min-w-[200px] border-l-12 border-[#efff00] p-4">
                    <div className="flex justify-end">
                        <MdNorthEast className="text-4xl"/>
                    </div>

                    <div>
                        <p className="text-2xl font-bold py-4">Custom Websites</p>
                        <p>Built for performance, clarity, and conversion</p>
                    </div>
                </div>

                <div className="bg-[#f5f5f5] min-w-[200px] border-l-12 border-[#efff00] p-4">
                    <div className="flex justify-end">
                        <MdNorthEast className="text-4xl"/>
                    </div>

                    <div>
                        <p className="text-2xl font-bold py-4">Custom Websites</p>
                        <p>Built for performance, clarity, and conversion</p>
                    </div>
                </div>
                <div className="bg-[#f5f5f5] min-w-[200px] border-l-12 border-[#efff00] p-4">
                    <div className="flex justify-end">
                        <MdNorthEast className="text-4xl"/>
                    </div>

                    <div>
                        <p className="text-2xl font-bold py-4">Custom Websites</p>
                        <p>Built for performance, clarity, and conversion</p>
                    </div>
                </div>
                <div className="bg-[#f5f5f5] min-w-[200px] border-l-12 border-[#efff00] p-4">
                    <div className="flex justify-end">
                        <MdNorthEast className="text-4xl"/>
                    </div>

                    <div>
                        <p className="text-2xl font-bold py-4">Custom Websites</p>
                        <p>Built for performance, clarity, and conversion</p>
                    </div>
                </div>
            </div>

            <div>
                <p>Every solution is built specifically for your business. No templates, No shortcuts.</p>
            </div>
        </div>
    );
}