import { IoIosWarning } from "react-icons/io";

const ProcessCard = ({ id, step, title, text, position }: CardProps) => (
    <div id={id} className={`col-span-1 flex flex-col ${position === 'left' ? 'md:items-end' : 'md:items-start'} mb-10`}>
        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Step {step}:</p>
        <div className="bg-white p-6 rounded-lg shadow-md w-full border-l-[12px] border-[#EFFF00] relative group">
            <h4 className="text-xl font-bold text-[#186036] mb-2">{title}</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
        </div>
    </div>
);

export default function Einfo() {
    return (
        <>
            <main className="min-h-screen" >
                <div className="bg-black text-white p-4 rounded-xl">
                    <div>
                        <p className="text-3xl py-4">The Foundation of a <span className="text-yellow-500">Better Buying Experience</span></p>
                    </div>

                    <div>
                        <p className="py-4">Custom e-commerce solutions designed around real workflows, real customers, and real growth.</p>
                    </div>

                    <div>
                        <p className="py-4">Most platforms start with features.<br />We start with how your business actually operates-and how your customers actually buy.</p>
                    </div>
                </div>

                <div>
                    <ProcessCard id="s1" step="1" title='For Your Team"' text="E-commerce shouldn’t feel like constant maintenance." position="right" />
                </div>

                <div>
                    <p>if you are:</p>
                    <p><IoIosWarning className="text-yellow-500" />Managing inventory in multiple places</p>
                    <p><IoIosWarning className="text-yellow-500" />Waiting on updates to go live</p>
                    <p><IoIosWarning className="text-yellow-500" />Jumping between tools to track orders and customers</p>

                    <p className="text-gray-5005">That’s not a system. That’s friction.</p>
                </div>
            </main>
        </>
    )
}