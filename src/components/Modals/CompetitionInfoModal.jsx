import React from 'react';
import { X } from 'lucide-react';

function CompetitionInfoModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000] backdrop-blur-[2px]" onClick={onClose}>
            <div className="bg-white dark:bg-[#1f2937] w-[600px] rounded-xl p-6 shadow-[0_10px_25px_rgba(0,0,0,0.2)] animate-in slide-in-from-bottom-5 duration-200 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6 border-b border-[#e5e7eb] dark:border-[#374151] pb-4">
                    <h3 className="m-0 text-[#2563eb] text-lg font-semibold">About this Competition</h3>
                    <button className="bg-transparent border-none cursor-pointer text-[#9ca3af] p-1 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#4b5563] transition-colors" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="text-sm text-[#374151] leading-[1.6]">
                    <p className="mb-4 text-[#1f2937] dark:text-[#e5e7eb]">YoPips Trading Competition</p>
                    <p className="mb-4 text-[#1f2937] dark:text-[#e5e7eb]">$5000 in cash and $575.000 worth of Evaluations.</p>

                    <p className="mb-4 text-[#1f2937] dark:text-[#e5e7eb]">The rules for the competition:</p>
                    <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-1">
                        <li>- 10% Maximum Loss Limit</li>
                        <li>- 5% Maximum Daily Loss Limit</li>
                        <li>- EAs are not allowed</li>
                        <li>- Taking advantage of unrealistic fills in the demo environment is not allowed.</li>
                        <li>- Only one account per person is permitted.</li>
                    </ul>

                    <p className="mb-4 text-[#1f2937] dark:text-[#e5e7eb]">If one of the rules is breached, you will be disqualified from the competition.</p>
                    <p className="mb-4 text-[#1f2937] dark:text-[#e5e7eb]">We have room for 50,000 participants. FULL = FULL</p>

                    <div className="mt-6">
                        <p className="mb-4">
                            <strong className="font-bold text-[#111827] dark:text-[#e5e7eb]">Important Notice:</strong>
                        </p>
                        <p className="mb-4">
                            <strong className="font-bold text-[#111827] dark:text-[#e5e7eb]">Please be aware that the website link and your account credentials for competition accounts are different from those used for our evaluation accounts.</strong>
                        </p>
                    </div>

                    <div className="mt-6">
                        <p className="mb-4">
                            <strong className="font-bold text-[#111827] dark:text-[#e5e7eb]">
                                To access your competition account on Match Trader, please use the following link: <a href="https://mtr-competition.YoPips.com/dashboard" target="_blank" rel="noreferrer" className="text-[#2563eb] hover:underline">https://mtr-competition.YoPips.com/dashboard</a>. This link is also available on your account dashboard under the "Credentials" section.
                            </strong>
                        </p>
                    </div>

                    <div className="mt-6">
                        <p className="mb-4">
                            <strong className="font-bold text-[#111827] dark:text-[#e5e7eb]">Make sure you are using the correct link and credentials to avoid any access issues.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompetitionInfoModal;
