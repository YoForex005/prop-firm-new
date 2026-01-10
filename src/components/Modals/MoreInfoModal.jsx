import React from 'react';
import { X } from 'lucide-react';

const MoreInfoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000] backdrop-blur-[2px]" onClick={onClose}>
            <div className="bg-white dark:bg-[#0f1218] dark:border-[#1f2937] dark:text-[#e5e7eb] w-[600px] max-w-[90%] rounded-2xl p-8 relative shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-[#e0e0e0] max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#eee] dark:border-[#1f2937]">
                    <h2 className="text-lg font-semibold text-[#2563eb] dark:text-[#3b82f6] m-0">About this Competition</h2>
                    <button className="bg-transparent border-none cursor-pointer text-[#9ca3af] p-1 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#4b5563] transition-colors" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="flex flex-col gap-4 text-sm leading-[1.6] text-[#333] dark:text-[#e5e7eb]">
                    <p className="mb-0 text-[#1f2937] dark:text-[#e5e7eb]">YoPips Trading Competition</p>
                    <p className="mb-0 text-[#1f2937] dark:text-[#e5e7eb]">$5000 in cash and $575.000 worth of Evaluations.</p>

                    <div className="rules-section">
                        <p className="mb-0 text-[#1f2937] dark:text-[#e5e7eb]">The rules for the competition:</p>
                        <ul className="list-none p-0 m-0 mt-2">
                            <li className="mb-1 text-[#4b5563] dark:text-[#d1d5db]">- 10% Maximum Loss Limit</li>
                            <li className="mb-1 text-[#4b5563] dark:text-[#d1d5db]">- 5% Maximum Daily Loss Limit</li>
                            <li className="mb-1 text-[#4b5563] dark:text-[#d1d5db]">- EAs are not allowed</li>
                            <li className="mb-1 text-[#4b5563] dark:text-[#d1d5db]">- Taking advantage of unrealistic fills in the demo environment is not allowed.</li>
                            <li className="mb-1 text-[#4b5563] dark:text-[#d1d5db]">- Only one account per person is permitted.</li>
                        </ul>
                    </div>

                    <p className="mb-0 text-[#1f2937] dark:text-[#e5e7eb]">
                        If one of the rules is breached, you will be disqualified from the competition.
                    </p>

                    <p className="mb-0 text-[#1f2937] dark:text-[#e5e7eb]">
                        We have room for 50,000 participants. FULL = FULL
                    </p>

                    <div className="mt-2">
                        <h3 className="text-sm font-bold m-0 mb-1 text-[#111] dark:text-white">Important Notice:</h3>
                        <p className="font-semibold text-[#111] dark:text-white m-0">
                            Please be aware that the website link and your account credentials for competition accounts are different from those used for our evaluation accounts.
                        </p>
                    </div>

                    <div className="mt-2">
                        <p className="font-medium text-[#111] dark:text-white mb-4">
                            To access your competition account on Match Trader, please use the following link:
                            <a href="https://mtr-competition.YoPips.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-[#2563eb] dark:text-[#60a5fa] no-underline hover:underline"> https://mtr-competition.YoPips.com/dashboard</a>.
                            This link is also available on your account dashboard under the "Credentials" section.
                        </p>
                        <p className="font-bold text-[#111] dark:text-white m-0 mt-4">
                            Make sure you are using the correct link and credentials to avoid any access issues.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreInfoModal;
