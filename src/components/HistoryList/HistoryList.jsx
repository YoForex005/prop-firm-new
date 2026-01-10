import React from 'react';
import { Calendar } from 'lucide-react';

function HistoryList() {
    // In a real app, this would be fetched from an API
    // For now, we'll try to get it from a 'challengeHistory' key in localStorage
    const [historyData, setHistoryData] = React.useState([]);

    React.useEffect(() => {
        const stored = localStorage.getItem('challengeHistory');
        if (stored) {
            try {
                setHistoryData(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse history", e);
            }
        }
    }, []);

    if (historyData.length === 0) return null; // Hide history section if empty


    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2 text-[#111827] dark:text-[#f3f4f6] m-0">
                    <Calendar size={18} className="text-[#1e293b] dark:text-[#94a3b8]" /> History
                </h2>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#6b7280] dark:text-[#9ca3af]">
                    <span>Show only visible</span>
                    <input type="checkbox" className="accent-[#2563eb]" />
                </div>
            </div>

            <div className="bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded-lg shadow-sm overflow-hidden">
                <div className="p-0 border-b border-[#e5e7eb] dark:border-[#374151] flex">
                    <div className="px-6 py-3 text-[13px] font-bold text-[#2563eb] border-b-2 border-[#2563eb] cursor-pointer">Free trial</div>
                </div>

                <div className="py-2">
                    {historyData.map((item, index) => (
                        <div key={index} className="flex items-center px-6 py-3 border-b border-[#f8fafc] dark:border-[#374151] last:border-none transition-colors hover:bg-[#f8fafc] dark:hover:bg-[#374151]">
                            <div className="min-w-[100px]">
                                <span className={`px-2.5 py-0.5 rounded-xl text-[10px] font-extrabold capitalize text-white ${item.status === 'not-passed' ? 'bg-[#ef4444]' : 'bg-[#94a3b8]'}`}>
                                    {item.statusText}
                                </span>
                            </div>
                            <div className="flex-1 text-[13px] font-medium text-[#64748b] dark:text-[#9ca3af]">
                                Login: <span className="font-extrabold text-[#1e293b] dark:text-[#e2e8f0]">{item.login}</span>
                            </div>
                            <div className="flex items-center gap-3 text-[13px] text-[#6b7280] dark:text-[#9ca3af] font-semibold">
                                <span>Visible</span>
                                <div className="w-9 h-5 bg-[#fee2e2] dark:bg-[#4b5563] rounded-full relative cursor-pointer">
                                    <div className="w-3.5 h-3.5 bg-white rounded-full absolute top-[3px] left-[3px]"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryList;
