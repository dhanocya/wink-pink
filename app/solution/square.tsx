export default function Square() {
    return (
        <>
            <div>
                <div className="bg-black-100">
                    <p className="text-2xl md:text-4xl font-thin text-center text-[#eef430] uppercase tracking-wider"> Our Approach</p>
                </div>
                <div className="flex justify-center items-center flex-col gap-4 mb-12">
                    <p className="family-semibold text-3xl font-bold">Our Approach to E-Commerce Development</p>
                    <p>Our guiding rules behind every e-commerce platform we craft</p>
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-4">
                    <div className="flex p-2">
                        <div className="bg-[#eef430] h-[200px] w-[50px]"></div>
                        <div className="shadow-xl flex flex-wrap items-center p-4">
                            <p className="text-3xl font-bold text-[#034a27]">Customer Journey First</p>
                            <p>A store loaded with features won’t sell if customers get stuck.<br></br>We simplify buying, step by step.</p>
                        </div>
                    </div>

                    <div className="flex p-2">
                        <div className="bg-[#eef430] h-[200px] w-[50px]"></div>
                        <div className="shadow-xl flex flex-wrap items-center p-4">
                            <p className="text-3xl font-bold text-[#034a27]">We Design for Real Behavior</p>
                            <p>Not assumptions.Not ideal scenarios.<br />Real users, real actions..</p>
                        </div>
                    </div>
                    <div className="flex p-2">
                        <div className="bg-[#eef430] h-[200px] w-[50px]"></div>
                        <div className="shadow-xl flex flex-wrap items-center p-4">
                            <p className="text-3xl font-bold text-[#034a27]">We Build for What’s Next</p>
                            <p>A store loaded with features won’t sell if customers get stuck.<br />We simplify buying, step by step.</p>
                        </div>
                    </div>
                    <div className="flex p-2">
                        <div className="bg-[#eef430] h-[200px] w-[50px]"></div>
                        <div className="shadow-xl flex flex-wrap items-center p-4">
                            <p className="text-3xl font-bold text-[#034a27]">We Connect Everything That Matters</p>
                            <p>Payments. Inventory. Fulfillment. Tools. Because disconnected systems create hidden problems.</p>
                        </div>
                    </div>
                    <div className="flex p-2">
                        <div className="bg-[#eef430] h-[200px] w-[50px]"></div>
                        <div className="shadow-xl flex flex-wrap items-center p-4">
                            <p className="text-3xl font-bold text-[#034a27]">We Prioritize Performance</p>
                            <p>Speed isn’t a feature, it’s the baseline.<br />Stable, fast experiences that keep customers moving.
                            </p>
                        </div>
                    </div>

                    <div className="flex p-2">
                        <div className="bg-[#eef430] h-[200px] w-[50px]"></div>
                        <div className="shadow-xl flex flex-wrap items-center p-4">
                            <p className="text-3xl font-bold text-[#034a27]">We Learn From Real Usage</p>
                            <p>We track how people actually interact with your store-and refine what isn’t working.

                            </p>
                        </div>
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
        </>
    )
}