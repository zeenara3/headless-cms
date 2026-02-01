export default function PhoneMockup() {
    return (
        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-800 dark:bg-gray-800 relative">
                {/* Screen Content - Gradient Skeleton */}
                <div className="absolute inset-0 bg-gradient-to-b from-gray-700 via-gray-900 to-black opacity-80" />

                {/* Fake App UI */}
                <div className="absolute top-12 left-4 right-4 space-y-4">
                    <div className="h-20 bg-white/10 rounded-xl backdrop-blur-md border border-white/5 animate-pulse" />
                    <div className="grid grid-cols-2 gap-3">
                        <div className="h-32 bg-white/5 rounded-xl border border-white/5" />
                        <div className="h-32 bg-white/5 rounded-xl border border-white/5" />
                    </div>
                    <div className="h-40 bg-white/5 rounded-xl border border-white/5" />
                </div>

                {/* Bottom Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
            </div>
        </div>
    );
}
