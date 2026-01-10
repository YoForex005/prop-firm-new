import React from 'react';
import { X } from 'lucide-react';

function PrizePoolModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000] backdrop-blur-[2px]" onClick={onClose}>
            <div className="bg-white dark:bg-[#1f2937] w-[500px] rounded-xl p-6 shadow-[0_10px_25px_rgba(0,0,0,0.2)] animate-in slide-in-from-bottom-5 duration-200" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6 border-b border-[#e5e7eb] dark:border-[#374151] pb-4">
                    <h3 className="m-0 text-[#2563eb] text-lg font-semibold">Prize pool for this competition</h3>
                    <button className="bg-transparent border-none cursor-pointer text-[#9ca3af] p-1 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#4b5563] transition-colors" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="text-sm text-[#374151] dark:text-[#e5e7eb]">
                    <div className="flex flex-col gap-4 mb-6">
                        <div className="font-medium">1st place: 100K Evaluation (+$1500)</div>
                        <div className="font-medium">2nd place: 100K Evaluation (+$1200)</div>
                        <div className="font-medium">3rd place: 100K Evaluation (+$1000)</div>
                        <div className="font-medium">4th place: 100K Evaluation</div>
                        <div className="font-medium">5th place: 50K Evaluation</div>
                        <div className="font-medium">6th / 10th: 25K Evaluation</div>
                        <div className="font-medium">11th / 20th: 10K Evaluation</div>
                    </div>

                    <div className="text-[13px] leading-[1.5] text-[#1f2937] dark:text-[#d1d5db]">
                        <strong className="font-bold text-[#111827] dark:text-[#e5e7eb]">Compensation price:</strong> Thirteen random participants, ranked from 4th place to 1000th place, will receive a cash compensation prize of $100.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrizePoolModal;
