import React from 'react';
import { Award } from 'lucide-react';

function Rewards() {
    return (
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 p-0">
            <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Rewards</h2>
            </div>

            <div className="flex gap-8 max-md:flex-col">
                {/* Left Card: No Certificate */}
                <div className="flex-1 bg-white dark:bg-[#141414] rounded-xl p-10 border border-[#e0e0e0] dark:border-[#333] shadow-[0_4px_12px_rgba(0,0,0,0.02)] min-h-[200px] flex flex-col justify-center items-center text-center">
                    <div className="mb-4 text-[#888] dark:text-[#9ca3af]">
                        <Award size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-semibold m-0 mb-3 text-[#1a1a1a] dark:text-[#f3f4f6]">No Certificate Available</h3>
                    <p className="text-[13px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed m-0 max-w-[320px]">
                        You'll earn your payout certificate once you start receiving rewards.
                        Keep trading to unlock your achievements!
                    </p>
                </div>

                {/* Right Card: Request Reward */}
                <div className="flex-1 bg-white dark:bg-[#141414] rounded-xl p-10 border border-[#e0e0e0] dark:border-[#333] shadow-[0_4px_12px_rgba(0,0,0,0.02)] min-h-[200px] flex flex-col justify-center items-start text-left">
                    <h3 className="text-base font-semibold m-0 mb-3 text-[#1a1a1a] dark:text-[#f3f4f6]">Ready to request your reward?</h3>
                    <p className="text-[13px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed m-0 mb-6">
                        Please click on the request button then proceed to fill out the required information, our team will reach out to you for further advancements.
                    </p>
                    <button className="bg-[#e5e7eb] dark:bg-[#262626] text-[#374151] dark:text-[#e5e7eb] border-none px-5 py-2.5 rounded-lg font-medium text-[13px] cursor-pointer flex items-center gap-2 hover:bg-[#d1d5db] dark:hover:bg-[#333] transition-colors duration-200 shadow-sm">Request Reward</button>
                </div>
            </div>

            {/* Table Headers */}
            <div className="grid grid-cols-8 px-4 mt-4 max-md:hidden">
                <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] font-medium">Reference ID</span>
                <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] font-medium">Reward Type</span>
                <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] font-medium">Requested On</span>
                <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] font-medium">Method</span>
                <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] font-medium">Status</span>
                <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] font-medium">Amount</span>
                <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] font-medium">Certificate</span>
                <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] font-medium">Invoice</span>
            </div>

            {/* Empty state for table or mobile view placeholder */}
            <div className="hidden max-md:block text-center text-sm text-[#9ca3af] py-4">
                No rewards found.
            </div>
        </div>
    );
}

export default Rewards;
