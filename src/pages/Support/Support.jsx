import React, { useState } from 'react';
import { Headset, Plus, ChevronDown, Check, X, FileText, Paperclip } from 'lucide-react';
import { Link } from 'react-router-dom';

function Support() {
    const [activeTab, setActiveTab] = useState('new-ticket');

    return (
        <div className="p-6 px-10 bg-[#f3f4f6] dark:bg-[#0d0d0d] min-h-screen font-sans text-[#1a1a1a] dark:text-[#e5e7eb]">
            {/* Breadcrumbs */}
            <div className="flex items-center text-[13px] text-[#6b7280] dark:text-[#6b7280] mb-5">
                <Link to="/" className="text-[#9ca3af] dark:text-[#9ca3af] no-underline">Trader</Link>
                <span className="mx-2 text-[#d1d5db] dark:text-[#4b5563]">/</span>
                <span className="text-[#6b7280] dark:text-[#9ca3af]">Support</span>
            </div>

            {/* Header */}
            <div className="bg-white dark:bg-[#141414] p-6 rounded-lg shadow-sm border border-[#e5e7eb] dark:border-[#333] mb-[30px]">
                <div className="flex items-center gap-3">
                    <Headset size={24} className="text-[#1a1a1a] dark:text-[#f3f4f6]" />
                    <h1 className="text-lg font-bold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Customer Support</h1>
                </div>
            </div>

            {/* Opened Tickets Section */}
            <div className="mb-[30px]">
                <div className="flex justify-between items-center mb-2.5">
                    <h3 className="text-sm font-bold mb-3 text-[#111827] dark:text-[#f3f4f6]">Opened tickets</h3>
                    <button className="bg-[#007bff] text-white border-none rounded-md px-4 py-2 text-[13px] font-semibold flex items-center gap-1.5 cursor-pointer">
                        <Plus size={16} /> New ticket
                    </button>
                </div>

                <div className="bg-white dark:bg-[#141414] rounded-lg border border-[#e5e7eb] dark:border-[#333] overflow-hidden shadow-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left p-4 px-6 text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333]">Ticket</th>
                                <th className="text-left p-4 px-6 text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333]">Subject</th>
                                <th className="text-left p-4 px-6 text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333]">Created</th>
                                <th className="text-left p-4 px-6 text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333]">Changed</th>
                                <th className="text-left p-4 px-6 text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333]">Status</th>
                                <th className="text-left p-4 px-6 text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Empty State */}
                            <tr className="border-none">
                                <td colSpan="6">
                                    <div className="p-10 flex flex-col items-center gap-4 text-[#9ca3af] dark:text-[#6b7280] text-[13px]">
                                        <div className="w-[200px] h-20 bg-[#f3f4f6] dark:bg-[#333] rounded bg-gradient-to-b from-[#f9fafb] to-[#f3f4f6] dark:from-[#333] dark:to-[#141414] relative before:content-[''] before:absolute before:top-5 before:left-5 before:right-5 before:h-2 before:bg-[#e5e7eb] dark:before:bg-[#4b5563] before:rounded after:content-[''] after:absolute after:top-10 after:left-5 after:w-3/5 after:h-2 after:bg-[#e5e7eb] dark:after:bg-[#4b5563] after:rounded"></div>
                                        <span>No tickets</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Solved Tickets Section */}
            <div className="mb-[30px]">
                <div className="flex justify-between items-center">
                    <h3 className="text-sm font-bold mb-3 text-[#111827] dark:text-[#f3f4f6]">Solved tickets</h3>
                    <div className="bg-white dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#333] rounded-md px-3 py-1.5 text-[13px] text-[#374151] dark:text-[#e5e7eb] flex items-center gap-2">
                        0 <ChevronDown size={16} />
                    </div>
                </div>
            </div>

            {/* Open New Ticket Form */}
            <div className="mb-10">
                <h3 className="text-sm font-bold mb-3 text-[#111827] dark:text-[#f3f4f6]">Open new ticket</h3>
                <div className="bg-white dark:bg-[#141414] p-6 rounded-lg border border-[#e5e7eb] dark:border-[#333] shadow-sm">
                    <div className="mb-5">
                        <label className="block text-xs font-semibold text-[#374151] dark:text-[#e5e7eb] mb-2">Subject</label>
                        <input type="text" className="w-full p-2.5 px-3 border border-[#e5e7eb] dark:border-[#333] rounded-md bg-[#f3f4f6] dark:bg-[#262626] text-[13px] text-[#111827] dark:text-[#f3f4f6] outline-none transition-colors duration-200 focus:border-[#d1d5db] dark:focus:border-[#555] focus:bg-white dark:focus:bg-[#1a1a1a]" />
                    </div>

                    <div className="mb-5">
                        <label className="block text-xs font-semibold text-[#374151] dark:text-[#e5e7eb] mb-2">Message</label>
                        <textarea className="w-full p-2.5 px-3 border border-[#e5e7eb] dark:border-[#333] rounded-md bg-[#f3f4f6] dark:bg-[#262626] text-[13px] text-[#111827] dark:text-[#f3f4f6] outline-none transition-colors duration-200 focus:border-[#d1d5db] dark:focus:border-[#555] focus:bg-white dark:focus:bg-[#1a1a1a] resize-y" rows="6"></textarea>
                    </div>

                    <div className="mb-5">
                        <label className="block text-xs font-semibold text-[#374151] dark:text-[#e5e7eb] mb-2">Attachments (Optional)</label>
                        <div className="border border-dashed border-[#d1d5db] dark:border-[#333] rounded-md p-4 flex items-center gap-3">
                            <button className="bg-[#e5e7eb] dark:bg-[#262626] border-none rounded px-3 py-1.5 text-xs font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer">Select file</button>
                            <span className="text-[11px] text-[#9ca3af] dark:text-[#6b7280]">Max 5.24 MB</span>
                        </div>
                    </div>

                    <button className="w-full bg-[#007bff] hover:bg-[#0069d9] text-white border-none rounded-md p-3 text-sm font-semibold cursor-pointer">Send</button>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center pt-10 border-t border-transparent">
                <div className="mb-5">
                    <a href="#" className="text-[#111827] dark:text-[#9ca3af] underline text-xs font-semibold mx-3">Cookie settings</a>
                    <a href="#" className="text-[#111827] dark:text-[#9ca3af] underline text-xs font-semibold mx-3">Privacy policy</a>
                    <a href="#" className="text-[#111827] dark:text-[#9ca3af] underline text-xs font-semibold mx-3">Terms & Conditions</a>
                </div>
                <p className="text-[10px] text-[#6b7280] dark:text-[#6b7280] leading-[1.5] max-w-[900px] mx-auto mb-5 text-justify text-center-last">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <div className="text-[11px] text-[#9ca3af] dark:text-[#6b7280]">
                    2026 © Copyright - YoPips.com Made with <span className="text-[#ef4444]">♥</span> for trading.<br />
                    Version: 673b1000
                </div>
            </div>
        </div>
    );
}

export default Support;
