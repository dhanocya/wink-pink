import { IoIosWarning } from "react-icons/io";

interface CardProps {
    id: string;
    step: number | string;
    title: string;
    text: string;
    position: 'left' | 'right';
}

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
        <main className="min-h-screen p-4 md:p-10 bg-gray-50"> 
            <div className="bg-black text-white p-8 rounded-2xl mb-12">
                <p className="text-3xl md:text-5xl font-bold py-4">
                    The Foundation of a <span className="text-[#EFFF00]">Better Buying Experience</span>
                </p>
                <p className="py-2 text-gray-300 max-w-2xl">
                    Custom e-commerce solutions designed around real workflows, real customers, and real growth.
                </p>
                <p className="py-2 text-gray-400">
                    Most platforms start with features.<br />
                    We start with how your business actually operates—and how your customers actually buy.
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                <ProcessCard 
                    id="s1" 
                    step="1" 
                    title='For Your Team' 
                    text="E-commerce shouldn’t feel like constant maintenance." 
                    position="right" 
                />
            </div>

            <div className="space-y-4 mt-10 p-6 bg-white rounded-xl shadow-sm">
                <p className="font-bold text-lg">If you are:</p>
                <div className="space-y-3">
                    <p className="flex items-center gap-2"><IoIosWarning className="text-yellow-500 flex-shrink-0" /> Managing inventory in multiple places</p>
                    <p className="flex items-center gap-2"><IoIosWarning className="text-yellow-500 flex-shrink-0" /> Waiting on updates to go live</p>
                    <p className="flex items-center gap-2"><IoIosWarning className="text-yellow-500 flex-shrink-0" /> Jumping between tools to track orders and customers</p>
                </div>
                <p className="text-gray-500 mt-4 italic">That’s not a system. That’s friction.</p>
            </div>
        </main>
    );
}
