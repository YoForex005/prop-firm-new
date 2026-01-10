import React from 'react';
import { X } from 'lucide-react';

function CashPrizeModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[1000] backdrop-blur-[2px]">
            <div className="bg-white dark:bg-[#1a1a1a] dark:text-white w-full max-w-[550px] max-h-[90vh] rounded-xl relative flex flex-col shadow-[0_10px_25px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom-2 duration-200">
                <button className="absolute top-4 right-4 bg-transparent border-none cursor-pointer text-[#666] z-10 p-1 rounded-full flex items-center justify-center hover:bg-[#f0f0f0] transition-colors" onClick={onClose}>
                    <X size={20} />
                </button>

                <div className="p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-[#ccc] scrollbar-track-transparent">
                    <h2 className="text-center text-base font-bold mb-6 leading-[1.4] text-[#1a1a1a] dark:text-white uppercase">JOIN OUR LEGACY CAMPAIGN AND SHARE YOUR IMPACT STORY</h2>

                    <div className="bg-[#fff9e6] dark:bg-[#2a2010] border border-[#fde68a] dark:border-[#453010] rounded-lg p-6 text-center mb-6">
                        <h3 className="text-[#d97706] m-0 mb-2 text-lg font-bold"> $50,000 Cash Prize</h3>
                        <p className="text-[#78350f] m-0 text-[13px] leading-[1.4]">Share how YoPips has impacted your trading journey for a chance to win.</p>
                    </div>

                    <div className="bg-[#f9fafb] dark:bg-[#222] border border-[#e5e7eb] dark:border-[#333] rounded-lg p-4 mb-4">
                        <h4 className="text-sm font-semibold m-0 mb-3 text-[#1a1a1a] dark:text-white">How to Enter:</h4>
                        <ul className="m-0 pl-5">
                            <li className="text-[13px] text-[#4b5563] dark:text-[#ccc] mb-2 leading-[1.5]">Create a <strong>30 to 180 sec video</strong> sharing your YoPips story</li>
                            <li className="text-[13px] text-[#4b5563] dark:text-[#ccc] mb-2 leading-[1.5]">Post it on <strong>Instagram, TikTok, YouTube, or Twitter/X</strong> using <strong>#YoPips</strong></li>
                            <li className="text-[13px] text-[#4b5563] dark:text-[#ccc] mb-0 leading-[1.5]">Submit your video link(s) in the dashboard under "URL of Video Submission" section</li>
                        </ul>
                    </div>

                    <div className="bg-[#f9fafb] dark:bg-[#222] border border-[#e5e7eb] dark:border-[#333] rounded-lg p-4 mb-4">
                        <h4 className="text-sm font-semibold m-0 mb-3 text-[#1a1a1a] dark:text-white">Eligibility:</h4>
                        <ul className="m-0 pl-5">
                            <li className="text-[13px] text-[#4b5563] dark:text-[#ccc] mb-2 leading-[1.5]">You must hold <strong>at least one active YoPips Challenge account</strong> (any size, any model)</li>
                            <li className="text-[13px] text-[#4b5563] dark:text-[#ccc] mb-2 leading-[1.5]">Videos must remain <strong>public</strong> during the campaign</li>
                            <li className="text-[13px] text-[#4b5563] dark:text-[#ccc] mb-0 leading-[1.5]">Campaign will end on 19th January 2026, the winner will be announced on 26th January 2026</li>
                        </ul>
                    </div>

                    <form className="mt-6">
                        <div className="mb-4">
                            <label className="block text-[13px] font-semibold mb-1.5 text-[#1a1a1a] dark:text-white">Full Name <span className="text-[#ef4444]">*</span></label>
                            <input type="text" placeholder="Yo F" defaultValue="Yo F" className="w-full p-2.5 border border-[#e5e7eb] rounded-md text-sm bg-white dark:bg-[#374151] dark:border-[#4b5563] dark:text-white outline-none focus:border-[#2563eb]" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-[13px] font-semibold mb-1.5 text-[#1a1a1a] dark:text-white">Email <span className="text-[#ef4444]">*</span></label>
                            <input type="email" placeholder="yoforexpremium@gmail.com" defaultValue="yoforexpremium@gmail.com" className="w-full p-2.5 border border-[#e5e7eb] rounded-md text-sm bg-white dark:bg-[#374151] dark:border-[#4b5563] dark:text-white outline-none focus:border-[#2563eb]" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-[13px] font-semibold mb-1.5 text-[#1a1a1a] dark:text-white">Social Media Platform <span className="text-[#ef4444]">*</span></label>
                            <select className="w-full p-2.5 border border-[#e5e7eb] rounded-md text-sm bg-white dark:bg-[#374151] dark:border-[#4b5563] dark:text-white outline-none focus:border-[#2563eb]">
                                <option>Select Social Media Platform</option>
                                <option>Instagram</option>
                                <option>TikTok</option>
                                <option>YouTube</option>
                                <option>Twitter/X</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-[13px] font-semibold mb-1.5 text-[#1a1a1a] dark:text-white">Social handle <span className="text-[#ef4444]">*</span></label>
                            <input type="text" placeholder="Social handle" className="w-full p-2.5 border border-[#e5e7eb] rounded-md text-sm bg-white dark:bg-[#374151] dark:border-[#4b5563] dark:text-white outline-none focus:border-[#2563eb]" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-[13px] font-semibold mb-1.5 text-[#1a1a1a] dark:text-white">URL of Video Submission <span className="text-[#ef4444]">*</span></label>
                            <input type="text" placeholder="URL of Video Submission" className="w-full p-2.5 border border-[#e5e7eb] rounded-md text-sm bg-white dark:bg-[#374151] dark:border-[#4b5563] dark:text-white outline-none focus:border-[#2563eb]" />
                        </div>

                        <div className="flex items-start gap-2 mb-6 text-[13px] text-[#4b5563] dark:text-[#ccc]">
                            <input type="checkbox" id="terms" className="mt-1" />
                            <label htmlFor="terms">I have read and agreed to the <a href="#" className="text-[#2563eb] no-underline hover:underline">Terms and Conditions</a></label>
                        </div>

                        <button type="submit" className="w-full bg-[#2563eb] text-white border-none p-3 rounded-lg font-semibold cursor-pointer text-sm shadow-[0_4px_6px_rgba(37,99,235,0.2)] hover:bg-[#1d4ed8] transition-colors">Submit</button>
                        <p className="text-center text-xs text-[#d97706] mt-3 font-medium">You can submit multiple times</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CashPrizeModal;
