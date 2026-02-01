export default function PhoneMockup() {
    return (
        <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10">
            <div className="w-[148px] h-[28px] bg-black top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

            {/* Screen Content */}
            <div className="w-full h-full bg-slate-900 relative overflow-hidden flex flex-col">
                {/* Glossy Reflection */}
                <div className="absolute top-0 right-0 w-[300px] h-[600px] bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 pointer-events-none" />

                {/* Header Area */}
                <div className="h-32 bg-gradient-to-b from-[#6227F8] to-[#4e1db5] flex items-end p-5 pb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30" />
                        <div className="space-y-1.5">
                            <div className="w-24 h-2.5 bg-white/40 rounded-full" />
                            <div className="w-16 h-2 bg-white/20 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* App Body */}
                <div className="flex-1 bg-gray-50 p-5 space-y-4">
                    {/* Stats Row */}
                    <div className="flex gap-3">
                        <div className="flex-1 h-24 bg-white rounded-2xl shadow-sm p-3 flex flex-col justify-between">
                            <div className="w-8 h-8 rounded-full bg-orange-100" />
                            <div className="w-12 h-2 bg-gray-200 rounded-full" />
                        </div>
                        <div className="flex-1 h-24 bg-white rounded-2xl shadow-sm p-3 flex flex-col justify-between">
                            <div className="w-8 h-8 rounded-full bg-purple-100" />
                            <div className="w-12 h-2 bg-gray-200 rounded-full" />
                        </div>
                    </div>

                    {/* Big Chart Area */}
                    <div className="h-40 bg-white rounded-2xl shadow-sm p-4 relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-500/10 to-transparent" />
                        <div className="flex items-end justify-between h-full pt-8 gap-2">
                            {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="w-full bg-[#6227F8] rounded-t-sm opacity-80" />
                            ))}
                        </div>
                    </div>

                    {/* List Items */}
                    <div className="space-y-2.5">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-14 bg-white rounded-xl shadow-sm flex items-center px-3 gap-3">
                                <div className="w-8 h-8 rounded-lg bg-gray-100" />
                                <div className="flex-1 space-y-1.5">
                                    <div className="w-20 h-2 bg-gray-200 rounded-full" />
                                    <div className="w-32 h-1.5 bg-gray-100 rounded-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="h-12 bg-white flex items-center justify-center border-t border-gray-100">
                    <div className="w-32 h-1 bg-gray-900 rounded-full" />
                </div>
            </div>
        </div>
    );
}
