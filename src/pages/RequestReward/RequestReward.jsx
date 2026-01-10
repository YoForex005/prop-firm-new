import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';

function RequestReward() {
    const navigate = useNavigate();

    return (
        <div className="p-8 px-10 bg-[var(--bg-color)] min-h-screen box-border flex flex-col">
            <div className="flex items-center gap-3 text-xl mb-8">
                <span className="font-semibold text-[--text-color] dark:text-[#f3f4f6]">YoPips</span>
                <span className="text-[#e0e0e0] dark:text-[#444] font-light">|</span>
                <span className="font-semibold text-[--text-color] dark:text-[#f3f4f6]">Request A Reward</span>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center max-w-[500px] mx-auto">
                <div className="w-16 h-16 bg-[#f3f4f6] dark:bg-[#1f2937] rounded-full flex items-center justify-center mb-6 text-[#4b5563] dark:text-[#9ca3af]">
                    <Calendar size={32} strokeWidth={1.5} />
                </div>
                <h2 className="text-xl font-semibold text-[--text-color] dark:text-[#f3f4f6] mb-3 m-0">No Eligible Accounts</h2>
                <p className="text-sm text-[--gray-text] dark:text-[#9ca3af] leading-relaxed mb-8 m-0">
                    You don't have any accounts eligible for payout yet.
                    Keep trading and meet your targets to become eligible.
                </p>
                <div className="flex gap-4">
                    <button
                        className="bg-[--primary-color] text-white border-none px-5 py-2.5 rounded-lg font-medium text-[13px] cursor-pointer flex items-center gap-2 shadow-sm hover:opacity-90 transition-opacity"
                        onClick={() => navigate('/payouts')}
                    >
                        ← Back to Payouts
                    </button>
                    <button
                        className="bg-[#e5e7eb] dark:bg-[#374151] text-[#374151] dark:text-[#e5e7eb] border-none px-5 py-2.5 rounded-lg font-medium text-[13px] cursor-pointer flex items-center gap-2 hover:bg-[#d1d5db] dark:hover:bg-[#4b5563] transition-colors duration-200 shadow-sm"
                        onClick={() => navigate('/accounts')}
                    >
                        View Accounts
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RequestReward;
