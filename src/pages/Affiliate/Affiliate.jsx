import React from 'react';
import { Copy, Info, Calendar, TrendingUp, Check } from 'lucide-react';

function Affiliate() {
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const [dateRange, setDateRange] = React.useState({ from: '', to: '' });
    const [chartMode, setChartMode] = React.useState('cumulative');
    const [activeTab, setActiveTab] = React.useState('overview');
    const datePickerRef = React.useRef(null);
    const fromDateRef = React.useRef(null);
    const toDateRef = React.useRef(null);

    const handleQuickSelect = (days) => {
        const end = new Date();
        const start = new Date();

        if (days === 'all') {
            start.setFullYear(2023, 0, 1); // Default large range
        } else {
            start.setDate(end.getDate() - days);
        }

        setDateRange({
            from: start.toISOString().split('T')[0],
            to: end.toISOString().split('T')[0]
        });
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
                setShowDatePicker(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const [copiedKey, setCopiedKey] = React.useState(null);

    const handleCopy = (text, key) => {
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    return (
        <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
            <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold m-0 text-[var(--text-color)] flex items-center gap-3">Affiliate</h2>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-[#e0e0e0] dark:border-[#333] p-6">
                <h3 className="text-base font-semibold m-0 mb-2">Referral Code</h3>
                <p className="text-[13px] text-[--gray-text] dark:text-[#999] m-0 mb-5">Share your referral link or code to earn commissions.</p>

                <div className="flex gap-4 mb-5">
                    <div className="flex items-center border border-[#e0e0e0] dark:border-[#333] rounded-lg p-2 px-3 bg-[#f9fafb] dark:bg-[#262626] flex-1 relative">
                        <input type="text" value="https://app.YoPips.com/register?ref=4D10C1E0" readOnly className="border-none bg-transparent w-full text-[13px] text-[--text-color] dark:text-white outline-none" />
                        <button className="bg-transparent border-none cursor-pointer text-[--gray-text] flex items-center" onClick={() => handleCopy('https://app.YoPips.com/register?ref=4D10C1E0', 'link')}>
                            {copiedKey === 'link' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                        </button>
                        {copiedKey === 'link' && <span className="absolute right-10 bg-[#10b981] text-white text-[11px] px-2 py-1 rounded animate-[fadeIn_0.2s] pointer-events-none">Copied!</span>}
                    </div>
                    <div className="flex items-center border border-[#e0e0e0] dark:border-[#333] rounded-lg p-2 px-3 bg-[#f9fafb] dark:bg-[#262626] flex-[0_0_200px] relative">
                        <input type="text" value="4D10C1E0" readOnly className="border-none bg-transparent w-full text-[13px] text-[--text-color] dark:text-white outline-none" />
                        <button className="bg-transparent border-none cursor-pointer text-[--gray-text] flex items-center" onClick={() => handleCopy('4D10C1E0', 'code')}>
                            {copiedKey === 'code' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                        </button>
                        {copiedKey === 'code' && <span className="absolute right-10 bg-[#10b981] text-white text-[11px] px-2 py-1 rounded animate-[fadeIn_0.2s] pointer-events-none">Copied!</span>}
                    </div>
                </div>

                <div className="flex items-center justify-between bg-[#f0f9ff] dark:bg-[rgba(3,105,161,0.2)] border border-[#bae6fd] dark:border-[#0369a1] rounded-lg p-3 px-4">
                    <div className="text-[13px] text-[#0369a1] dark:text-[#7dd3fc] flex items-center gap-2">
                        <Info size={16} />
                        Commissions are credited when referred users complete qualifying purchases.
                    </div>
                    <button className="bg-white dark:bg-[#262626] border border-[#e0e0e0] dark:border-[#333] px-4 py-2 rounded-md text-xs font-medium cursor-pointer text-black dark:text-[#ccc]" onClick={() => window.open('/affiliate', '_blank')}>Visit Affiliate Page</button>
                </div>
            </div>

            <div className="flex gap-6">
                <div className="flex-[3] flex flex-col gap-4 min-w-0">
                    <div className="flex gap-4 border-b border-[#eee]">
                        <button
                            className={`px-4 py-2 border border-transparent bg-transparent text-[13px] font-medium text-[--gray-text] dark:text-[#999] cursor-pointer border-b-2 mb-[-1px] ${activeTab === 'overview' ? 'text-[var(--text-color)] font-semibold border-b-[var(--text-color)] bg-[#f3f4f6] dark:bg-[#333] dark:text-white dark:border-b-white rounded-t-lg' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            Overview
                        </button>
                        <button
                            className={`px-4 py-2 border border-transparent bg-transparent text-[13px] font-medium text-[--gray-text] dark:text-[#999] cursor-pointer border-b-2 mb-[-1px] ${activeTab === 'daily' ? 'text-[var(--text-color)] font-semibold border-b-[var(--text-color)] bg-[#f3f4f6] dark:bg-[#333] dark:text-white dark:border-b-white rounded-t-lg' : ''}`}
                            onClick={() => setActiveTab('daily')}
                        >
                            Daily
                        </button>
                    </div>

                    {activeTab === 'overview' ? (
                        <>
                            <div className="flex justify-between items-center">
                                <h3 className="m-0 text-base">Earnings</h3>
                                <div className="flex gap-2">
                                    <div className="relative" ref={datePickerRef}>
                                        <button
                                            className={`flex items-center gap-1.5 px-3 py-1.5 border border-[#e0e0e0] dark:border-[#333] bg-white dark:bg-[#262626] rounded-md text-xs cursor-pointer text-black dark:text-[#ccc] ${showDatePicker ? 'bg-[#f3f4f6] border-[#ccc]' : ''}`}
                                            onClick={() => setShowDatePicker(!showDatePicker)}
                                        >
                                            <Calendar size={14} /> Pick date range
                                        </button>

                                        {showDatePicker && (
                                            <div className="absolute top-[calc(100%+8px)] right-0 left-0 w-[300px] bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] rounded-xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-50 flex flex-col gap-4">
                                                <div className="flex flex-col gap-2">
                                                    <label className="block text-[11px] font-semibold text-[--gray-text] uppercase">Quick Select</label>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        <button className="p-2 text-xs border border-[#e0e0e0] dark:border-[#333] bg-white dark:bg-[#262626] rounded-md cursor-pointer text-[var(--text-color)] dark:text-[#ccc] hover:bg-[#f9f9f9] dark:hover:bg-[#333] transition-all" onClick={() => handleQuickSelect(7)}>Last 7 days</button>
                                                        <button className="p-2 text-xs border border-[#e0e0e0] dark:border-[#333] bg-white dark:bg-[#262626] rounded-md cursor-pointer text-[var(--text-color)] dark:text-[#ccc] hover:bg-[#f9f9f9] dark:hover:bg-[#333] transition-all" onClick={() => handleQuickSelect(30)}>Last 30 days</button>
                                                        <button className="p-2 text-xs border border-[#e0e0e0] dark:border-[#333] bg-white dark:bg-[#262626] rounded-md cursor-pointer text-[var(--text-color)] dark:text-[#ccc] hover:bg-[#f9f9f9] dark:hover:bg-[#333] transition-all" onClick={() => handleQuickSelect(90)}>Last 90 days</button>
                                                        <button className="p-2 text-xs border border-[#e0e0e0] dark:border-[#333] bg-white dark:bg-[#262626] rounded-md cursor-pointer text-[var(--text-color)] dark:text-[#ccc] hover:bg-[#f9f9f9] dark:hover:bg-[#333] transition-all" onClick={() => handleQuickSelect('all')}>All time</button>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <div className="flex-1">
                                                        <label className="block text-[11px] font-semibold text-[--gray-text] uppercase mb-2">From</label>
                                                        <div className="flex items-center border border-[#e0e0e0] dark:border-[#333] rounded-md p-2 bg-white dark:bg-[#262626] cursor-pointer" onClick={() => fromDateRef.current?.showPicker()}>
                                                            <input
                                                                type="date"
                                                                ref={fromDateRef}
                                                                className="border-none outline-none w-full text-xs text-[var(--text-color)] dark:text-white bg-transparent font-inherit"
                                                                value={dateRange.from}
                                                                onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                                                            />
                                                            <Calendar size={14} className="text-[--gray-text] opacity-70 pointer-events-none" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <label className="block text-[11px] font-semibold text-[--gray-text] uppercase mb-2">To</label>
                                                        <div className="flex items-center border border-[#e0e0e0] dark:border-[#333] rounded-md p-2 bg-white dark:bg-[#262626] cursor-pointer" onClick={() => toDateRef.current?.showPicker()}>
                                                            <input
                                                                type="date"
                                                                ref={toDateRef}
                                                                className="border-none outline-none w-full text-xs text-[var(--text-color)] dark:text-white bg-transparent font-inherit"
                                                                value={dateRange.to}
                                                                onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                                                            />
                                                            <Calendar size={14} className="text-[--gray-text] opacity-70 pointer-events-none" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex bg-[#f3f4f6] dark:bg-[#262626] p-0.5 rounded-md">
                                        <button
                                            className={`px-3 py-1 text-xs border-none bg-transparent cursor-pointer rounded text-[--gray-text] ${chartMode === 'cumulative' ? 'bg-[--primary-color] text-white font-medium' : ''}`}
                                            onClick={() => setChartMode('cumulative')}
                                        >
                                            Cumulative
                                        </button>
                                        <button
                                            className={`px-3 py-1 text-xs border-none bg-transparent cursor-pointer rounded text-[--gray-text] ${chartMode === 'daily' ? 'bg-[--primary-color] text-white font-medium' : ''}`}
                                            onClick={() => setChartMode('daily')}
                                        >
                                            Daily
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] rounded-xl h-[300px] flex flex-col items-center justify-center text-[--gray-text] dark:text-[#999] text-center">
                                <TrendingUp size={32} style={{ opacity: 0.3 }} />
                                <h4 className="m-0 mt-3 font-medium">No referral data available</h4>
                                <p className="text-[13px] mt-3">Start referring users to see your earnings history</p>
                            </div>
                        </>
                    ) : (
                        <div>
                            <h3 className="m-0 mb-4 text-base">Daily Breakdown</h3>
                            <div className="bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] rounded-xl p-8 text-center text-[--gray-text]">
                                <p className="text-sm">No daily data available for this period.</p>
                            </div>
                        </div>
                    )}
                </div>

                {activeTab === 'overview' && (
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] rounded-xl p-5">
                            <div className="text-[13px] text-[--gray-text] mb-2">Total Referrals</div>
                            <div className="text-xl font-semibold text-[--text-color] dark:text-white">0</div>
                        </div>
                        <div className="bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] rounded-xl p-5">
                            <div className="text-[13px] text-[--gray-text] mb-2">Total Paid Out</div>
                            <div className="text-xl font-semibold text-[--text-color] dark:text-white">$0.00</div>
                        </div>
                        <div className="bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] rounded-xl p-5">
                            <div className="text-[13px] text-[--gray-text] mb-2">Available Balance</div>
                            <div className="text-xl font-semibold text-[--text-color] dark:text-white">$0.00</div>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ textAlign: 'center', color: '#888', fontSize: '12px', marginTop: '20px' }}>
                No referrals found<br />Try adjusting the date range.
            </div>
        </div>
    );
}

export default Affiliate;
