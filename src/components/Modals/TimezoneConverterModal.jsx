import React, { useState, useEffect } from 'react';
import { X, Info } from 'lucide-react';

function TimezoneConverterModal({ onClose }) {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Helper to format time HH:MM:SS
    const formatTime = (date) => {
        return date.toLocaleTimeString('en-GB', { hour12: false });
    };

    // Calculate times
    // Current approach: Using browser local time and deriving others.
    // In a real app, you'd likely want fixed offsets or a library like date-fns-tz.
    // For visual matching:
    const utcTime = currentTime.getTime() + (currentTime.getTimezoneOffset() * 60000);
    const cetOffset = 1; // Standard CET
    const platformOffset = 2; // Platform (EET/CEST usually)

    const getOffsetTime = (offset) => new Date(utcTime + (3600000 * offset));

    const cetTime = getOffsetTime(cetOffset);
    const platformTime = getOffsetTime(platformOffset);

    // Countdown calculation (to midnight CET)
    const midnightCET = new Date(cetTime);
    midnightCET.setHours(24, 0, 0, 0);
    const diffMs = midnightCET - cetTime;
    const hours = Math.floor((diffMs % 86400000) / 3600000);
    const minutes = Math.floor((diffMs % 3600000) / 60000);
    const seconds = Math.floor((diffMs % 60000) / 1000);
    const countdown = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    return (
        <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center animate-[fadeIn_0.2s_ease-in-out]" onClick={onClose}>
            <div className="bg-white dark:bg-[#1f2937] rounded-lg shadow-xl w-[90%] max-w-[700px] overflow-hidden animate-[scaleIn_0.2s_ease-out] flex flex-col max-h-[90vh]" onClick={(e) => e.stopPropagation()}>

                {/* Header */}
                <div className="flex justify-between items-center px-6 py-5 border-b border-[#e5e7eb] dark:border-[#374151]">
                    <h3 className="text-[18px] font-bold text-[#111827] dark:text-[#f3f4f6] m-0">Timezone Converter</h3>
                    <button className="bg-transparent border-none text-[#9ca3af] hover:text-[#111827] dark:hover:text-[#f3f4f6] cursor-pointer p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-8 overflow-y-auto">
                    {/* Timezone Selector */}
                    <div className="mb-8">
                        <label className="block text-[15px] font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] mb-3">Choose your timezone</label>
                        <div className="relative">
                            <select className="w-full bg-[#e8eaed] dark:bg-[#374151] border-none text-[#111827] dark:text-[#f3f4f6] rounded-md px-4 py-3 text-[14px] font-medium appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-[#0066ff]/20">
                                <option>Autodetect</option>
                                <option>UTC</option>
                                <option>EST</option>
                                <option>CST</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#6b7280]">
                                <svg width="12" height="8" viewBox="0 0 10 6" fill="currentColor">
                                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <h4 className="text-[16px] font-bold text-[#111827] dark:text-[#f3f4f6] mb-4">Timezones and Max Daily Loss</h4>

                    {/* Blue Info Box */}
                    <div className="bg-[#dbeafe] dark:bg-[#1e3a8a]/30 rounded-md p-5 mb-8 flex gap-4 items-start">
                        <div className="mt-0.5 shrink-0 text-[#2563eb] dark:text-[#60a5fa]">
                            <div className="border-[1.5px] border-current rounded-[4px] w-5 h-5 flex items-center justify-center text-xs font-bold">!</div>
                        </div>
                        <p className="text-[13px] text-[#1e40af] dark:text-[#93c5fd] leading-[1.6] m-0">
                            It appears that you are in a different timezone, which is essential to consider for our Max Daily Loss objective. Our Max Daily Loss is calculated based on the Central European (Summer) Timezone (CE(S)T), which serves as the basic timezone for FTMO traders. To assist you in determining when the Max Daily Loss objective resets in your specific timezone, we have provided the following table for reference. Should you have any inquiries, please do not hesitate to reach out to us at <a href="#" className="underline font-semibold hover:no-underline text-current">support@ftmo.com</a>.
                        </p>
                    </div>

                    {/* Table */}
                    <div className="mb-8 overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[500px]">
                            <thead>
                                <tr>
                                    <th className="pb-4 text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6] w-[22%]">Area</th>
                                    <th className="pb-4 text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6] w-[18%]">Time</th>
                                    <th className="pb-4 text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6] w-[18%]">CET Offset</th>
                                    <th className="pb-4 text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6] w-[21%]">Start Hour Max<br />Daily Loss</th>
                                    <th className="pb-4 text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6] w-[21%]">End Hour Max<br />Daily Loss</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#e5e7eb] dark:divide-[#374151]">
                                <tr className="group hover:bg-[#f9fafb] dark:hover:bg-[#374151]/50 transition-colors">
                                    <td className="py-5 text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6] border-t border-[#e5e7eb] dark:border-[#374151]">CET Time</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db] border-t border-[#e5e7eb] dark:border-[#374151]">{formatTime(cetTime)}</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db] border-t border-[#e5e7eb] dark:border-[#374151]">-</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db] border-t border-[#e5e7eb] dark:border-[#374151]">00:00:01</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db] border-t border-[#e5e7eb] dark:border-[#374151]">23:59:59</td>
                                </tr>
                                <tr className="group hover:bg-[#f9fafb] dark:hover:bg-[#374151]/50 transition-colors">
                                    <td className="py-5 text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6]">
                                        FTMO Platform<br />Time
                                    </td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db]">{formatTime(platformTime)}</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db]">1 hrs</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db]">01:00:01</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db]">00:59:59</td>
                                </tr>
                                <tr className="group hover:bg-[#f9fafb] dark:hover:bg-[#374151]/50 transition-colors">
                                    <td className="py-5 text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6]">Your Local Time</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db]">{formatTime(currentTime)}</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db]">4.5 hrs</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db]">04:30:01</td>
                                    <td className="py-5 text-[14px] text-[#374151] dark:text-[#d1d5db]">04:29:59</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Bottom Blue Outlined Box */}
                    <div className="border border-[#2563eb] dark:border-[#60a5fa] rounded-lg p-10 flex flex-col items-center justify-center text-center bg-white dark:bg-[#1f2937]">
                        <div className="mb-4 text-[#2563eb] dark:text-[#60a5fa]">
                            <Info size={32} strokeWidth={2} />
                        </div>
                        <p className="text-[16px] font-bold text-[#2563eb] dark:text-[#60a5fa] m-0">
                            Today's permitted loss will reset in <span className="tabular-nums">{countdown}</span>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-5 flex justify-center border-t border-[#e5e7eb] dark:border-[#374151] bg-white dark:bg-[#1f2937]">
                    <button className="px-8 py-2.5 bg-[#e5e7eb] dark:bg-[#374151] text-[#1f2937] dark:text-[#e5e7eb] font-bold text-[14px] rounded-md cursor-pointer hover:bg-[#d1d5db] dark:hover:bg-[#4b5563] transition-colors" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TimezoneConverterModal;
