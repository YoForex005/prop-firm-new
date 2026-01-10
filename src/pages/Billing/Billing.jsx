import React from 'react';
import { CreditCard, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import FilterCheck from './FilterCheck';

function Billing() {
    const [isFilterOpen, setIsFilterOpen] = React.useState(false);
    const [filters, setFilters] = React.useState({
        waiting: true,
        paid: true,
        refunded: true,
        free: true
    });

    const toggleFilter = (key) => {
        setFilters(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="px-10 py-6 bg-[#f3f4f6] dark:bg-[#0d0d0d] min-h-screen font-sans text-[#111827] dark:text-[#f3f4f6] max-md:p-4">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] items-center w-full mb-6 max-md:grid-cols-1 max-md:gap-4">
                <div className="flex items-center gap-3">
                    <CreditCard size={24} className="text-[#111827] dark:text-[#f3f4f6]" />
                    <h1 className="text-xl font-bold m-0 text-[#111827] dark:text-[#f3f4f6]">Billing</h1>
                </div>
                <div className="relative ml-auto max-md:ml-0 max-md:w-full">
                    <button
                        className={`flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#141414] border border-[#e5e7eb] dark:border-[#333] rounded-md text-sm font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer transition-all duration-200 hover:bg-[#f9fafb] dark:hover:bg-[#262626] max-md:w-full max-md:justify-center ${isFilterOpen ? 'bg-[#f9fafb] border-[#d1d5db]' : ''}`}
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        <Filter size={16} />
                        Filter
                    </button>

                    {isFilterOpen && (
                        <div className="absolute top-[calc(100%+8px)] right-0 w-[200px] bg-white dark:bg-[#141414] border border-[#e5e7eb] dark:border-[#333] rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] z-50 overflow-hidden animate-[fadeIn_0.1s_ease-out] max-md:w-full">
                            <div className="px-4 py-3 text-sm font-semibold text-[#111827] dark:text-[#f3f4f6] border-b border-[#f3f4f6] dark:border-[#333]">
                                Status:
                            </div>
                            <div className="py-2">
                                {['waiting', 'paid', 'refunded', 'free'].map((key) => (
                                    <div key={key} className="flex justify-between items-center px-4 py-2.5 cursor-pointer transition-colors hover:bg-[#f9fafb] dark:hover:bg-[#262626] select-none" onClick={() => toggleFilter(key)}>
                                        <span className="text-sm text-[#374151] dark:text-[#e5e7eb] capitalize">{key}</span>
                                        <div className={`w-5 h-5 border border-[#d1d5db] dark:border-[#4b5563] rounded flex items-center justify-center bg-white dark:bg-[#262626] transition-colors ${filters[key] ? '!bg-[#2563eb] !border-[#2563eb]' : ''}`}>
                                            {filters[key] && <FilterCheck />}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Billing Table Card */}
            <div className="bg-white dark:bg-[#141414] rounded-lg border border-[#e5e7eb] dark:border-[#333] shadow-sm overflow-hidden mb-10">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left px-6 py-4 text-[13px] font-bold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333] whitespace-nowrap bg-white dark:bg-[#141414]">Yo Pips Challenge</th>
                                <th className="text-left px-6 py-4 text-[13px] font-bold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333] whitespace-nowrap bg-white dark:bg-[#141414]">Dates</th>
                                <th className="text-left px-6 py-4 text-[13px] font-bold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333] whitespace-nowrap bg-white dark:bg-[#141414]">Amount to pay</th>
                                <th className="text-left px-6 py-4 text-[13px] font-bold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333] whitespace-nowrap bg-white dark:bg-[#141414]">Order</th>
                                <th className="text-left px-6 py-4 text-[13px] font-bold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333] whitespace-nowrap bg-white dark:bg-[#141414]">Account</th>
                                <th className="text-left px-6 py-4 text-[13px] font-bold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333] whitespace-nowrap bg-white dark:bg-[#141414]">Status</th>
                                <th className="text-left px-6 py-4 text-[13px] font-bold text-[#6b7280] dark:text-[#9ca3af] border-b border-[#f3f4f6] dark:border-[#333] whitespace-nowrap bg-white dark:bg-[#141414]">Invoice & Documents</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Empty State Row */}
                            <tr className="border-none">
                                <td colSpan="7" className="p-0 border-none">
                                    <div className="py-[60px] px-5 flex flex-col items-center justify-center gap-6 min-h-[300px]">
                                        <div className="relative w-[200px] h-[100px]">
                                            <div className="absolute top-0 left-5 right-5 h-[60px] bg-[#f9fafb] dark:bg-[#1a1a1a] border border-[#f3f4f6] dark:border-[#333] rounded-md shadow-sm z-10"></div>
                                            <div className="absolute top-[15px] left-2.5 right-2.5 h-[60px] bg-[#f9fafb] dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#444] rounded-md shadow-sm z-20"></div>
                                            <div className="absolute top-[30px] left-0 right-0 h-[70px] bg-white dark:bg-[#141414] border border-[#e5e7eb] dark:border-[#333] rounded-md shadow-sm z-30 p-3 flex flex-col gap-2">
                                                <div className="h-1.5 rounded-full bg-[#dbeafe] dark:bg-[#3b82f6] dark:opacity-30 w-[40%]"></div>
                                                <div className="h-1.5 rounded-full bg-[#f3f4f6] dark:bg-[#333] w-[70%]"></div>
                                                <div className="absolute right-3 top-3 w-[30px] h-5 bg-[#f3f4f6] dark:bg-[#333] rounded"></div>
                                            </div>
                                        </div>
                                        <p className="text-[13px] font-medium text-[#9ca3af]">No orders or transactions are available</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer */}
            <div className="text-center border-t border-transparent">
                <div className="mb-5">
                    <a href="#" className="text-[#111827] dark:text-[#e5e7eb] underline text-xs font-semibold mx-3">Cookie settings</a>
                    <a href="#" className="text-[#111827] dark:text-[#e5e7eb] underline text-xs font-semibold mx-3">Privacy policy</a>
                    <a href="#" className="text-[#111827] dark:text-[#e5e7eb] underline text-xs font-semibold mx-3">Terms & Conditions</a>
                </div>
                <p className="text-[10px] text-[#6b7280] leading-relaxed max-w-[900px] mx-auto mb-5 text-justify text-center-last">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <div className="text-[11px] text-[#9ca3af]">
                    2026 © Copyright - YoPips.com Made with <span className="text-[#ef4444]">♥</span> for trading.<br />
                    Version: 673b1000
                </div>
            </div>
        </div>
    );
}

export default Billing;
