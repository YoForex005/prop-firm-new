import React from 'react';
import { Award } from 'lucide-react';

function Payouts() {
    return (
        <div className="p-8 px-10 bg-[#f3f4f6] dark:bg-[#0d0d0d] min-h-screen box-border font-sans text-[#1a1a1a] dark:text-[#f3f4f6]">
            <div className="mb-8">
                <div className="flex items-center gap-3 text-xl">
                    <span className="font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] flex items-center gap-2">YoPips</span>
                    <span className="text-[#e0e0e0] dark:text-[#444] font-light">|</span>
                    <span className="font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">Rewards</span>
                </div>
            </div>

            <div className="flex gap-6 mb-10 max-md:flex-col">
                {/* Left Card: Certificate Status */}
                <div className="flex-1 bg-white dark:bg-[#141414] rounded-xl p-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)] min-h-[250px] flex flex-col justify-center items-center text-center">
                    <div>
                        <div className="mb-6 text-[#6b7280] dark:text-[#999] flex justify-center">
                            <Award size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className="m-0 mb-3 text-base font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">No Certificate Available</h3>
                        <p className="m-0 mb-1 text-[13px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed">You'll earn your payout certificate once you start receiving rewards.</p>
                        <p className="text-[#9ca3af] text-xs m-0">Keep trading to unlock your achievements!</p>
                    </div>
                </div>

                {/* Right Card: Request Reward */}
                <div className="flex-1 bg-white dark:bg-[#141414] rounded-xl p-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)] min-h-[250px] flex flex-col justify-center items-start text-left">
                    <div>
                        <h3 className="m-0 mb-4 text-base font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">Ready to request your reward?</h3>
                        <p className="m-0 mb-6 text-[13px] text-[#6b7280] dark:text-[#9ca3af] leading-[1.6] max-w-[90%]">Please click on the request button then proceed to fill out the required information, our team will reach out to you for further advancements.</p>
                        <button
                            className="bg-[#e5e7eb] dark:bg-[#262626] border-none px-5 py-2.5 rounded-lg text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm transition-all duration-200 hover:bg-[#d1d5db] dark:hover:bg-[#333]"
                            onClick={() => window.location.href = '/request-reward'}
                        >
                            Request Reward
                        </button>
                    </div>
                </div>
            </div>

            {/* Table Header Row */}
            <div className="grid grid-cols-8 py-4 border-b border-transparent max-md:hidden">
                <div className="text-xs text-[#9ca3af] font-medium text-left">Reference ID</div>
                <div className="text-xs text-[#9ca3af] font-medium text-left">Reward Type</div>
                <div className="text-xs text-[#9ca3af] font-medium text-left">Requested On</div>
                <div className="text-xs text-[#9ca3af] font-medium text-left">Method</div>
                <div className="text-xs text-[#9ca3af] font-medium text-left">Status</div>
                <div className="text-xs text-[#9ca3af] font-medium text-left">Amount</div>
                <div className="text-xs text-[#9ca3af] font-medium text-left">Certificate</div>
                <div className="text-xs text-[#9ca3af] font-medium text-left">Invoice</div>
            </div>

            {/* Empty state for table or mobile view placeholder */}
            <div className="hidden max-md:block text-center text-sm text-[#9ca3af] py-8">
                No payout records found.
            </div>
        </div>
    );
}

export default Payouts;
