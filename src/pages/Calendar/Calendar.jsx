import React from 'react';
import { Filter, Calendar as CalendarIcon, Clock, ChevronDown, Search, Check } from 'lucide-react';

function Calendar() {
    const [currencyDropdownOpen, setCurrencyDropdownOpen] = React.useState(false);
    const [selectedCurrency, setSelectedCurrency] = React.useState('Select currency...');
    const [activeDropdown, setActiveDropdown] = React.useState(null);
    const [selectedDays, setSelectedDays] = React.useState(['Wed']);
    const [showPassedEvents, setShowPassedEvents] = React.useState(false);

    const toggleDay = (day) => {
        setSelectedDays(prev =>
            prev.includes(day)
                ? prev.filter(d => d !== day)
                : [...prev, day]
        );
    };
    const [impactFilters, setImpactFilters] = React.useState({
        high: true,
        med: true,
        low: true,
        none: false
    });
    const dropdownRef = React.useRef(null);
    const currencies = ['JPY', 'CNY', 'CHF', 'EUR', 'GBP', 'USD', 'NZD', 'AUD', 'CAD'];

    const toggleImpact = (level) => {
        setImpactFilters(prev => ({
            ...prev,
            [level]: !prev[level]
        }));
    };

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    const toggleCurrencyDropdown = () => setCurrencyDropdownOpen(!currencyDropdownOpen);

    const handleCurrencySelect = (currency) => {
        setSelectedCurrency(currency);
        setCurrencyDropdownOpen(false);
    };

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setCurrencyDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const events = [
        { time: '4:00 PM', currency: 'USD', event: 'ISM Services PMI', restricted: true, actual: '', forecast: '52.2', previous: '52.6', impact: 'high' },
        { time: '4:00 PM', currency: 'USD', event: 'JOLTs Job Openings', restricted: true, actual: '', forecast: '7.40M', previous: '7.67M', impact: 'high' },
        { time: '4:00 PM', currency: 'CAD', event: 'Ivey PMI', restricted: false, actual: '', forecast: '49.5', previous: '48.4', impact: 'medium' },
        { time: '4:00 PM', currency: 'USD', event: 'Factory Orders m/m', restricted: false, actual: '', forecast: '-1.1%', previous: '0.2%', impact: 'medium' },
        { time: '4:30 PM', currency: 'USD', event: 'Crude Oil Inventories', restricted: false, actual: '', forecast: '-1.2M', previous: '-1.6M', impact: 'medium' },
        { time: '7:45 PM', currency: 'USD', event: 'FOMC Member Bowman Speaks', restricted: false, actual: '', forecast: '', previous: '', impact: 'low' },
        { time: '12:00 AM', currency: 'JPY', event: 'Average Cash Earnings y/y', restricted: false, actual: '', forecast: '2.3%', previous: '2.6%', impact: 'low' },
        { time: '1:30 AM', currency: 'AUD', event: 'Goods Trade Balance', restricted: false, actual: '', forecast: '5.14B', previous: '4.39B', impact: 'low' },
        { time: '4:35 AM', currency: 'JPY', event: '30-y Bond Auction', restricted: false, actual: '', forecast: '', previous: '3.42|4.0', impact: 'low' },
        { time: '9:00 AM', currency: 'JPY', event: 'Consumer Confidence', restricted: false, actual: '', forecast: '37.8', previous: '37.3', impact: 'low' },
        { time: '9:00 AM', currency: 'EUR', event: 'German Factory Orders m/m', restricted: false, actual: '', forecast: '-0.8%', previous: '1.6%', impact: 'medium' },
        { time: '9:30 AM', currency: 'GBP', event: 'Halifax HPI m/m', restricted: false, actual: '', forecast: '0.1%', previous: '0.0%', impact: 'medium' },
        { time: '9:30 AM', currency: 'CHF', event: 'CPI m/m', restricted: true, actual: '', forecast: '0.0%', previous: '-0.2%', impact: 'high' },
    ];

    const getImpactStyles = (impact, type) => {
        if (!type) return '';
        switch (impact) {
            case 'high': return 'bg-[#fee2e2] text-[#ef4444] border-transparent dark:bg-red-900/20 dark:text-red-400';
            case 'medium': return 'bg-[#ffedd5] text-[#f97316] border-transparent dark:bg-orange-900/20 dark:text-orange-400';
            case 'low': return 'bg-[#dcfce7] text-[#10b981] border-transparent dark:bg-green-900/20 dark:text-green-400';
            case 'none': return 'bg-[#f3f4f6] text-[#9ca3af] border-transparent dark:bg-gray-800 dark:text-gray-400';
            default: return '';
        }
    };

    return (
        <div className="max-w-[1400px] mx-auto">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-[#1d1d1f] dark:text-[#f3f4f6] flex items-center gap-3"><Filter size={20} /> Economic Calendar</h2>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-[#1a1a1a] p-4 rounded-xl border border-[#e0e0e0] dark:border-[#333] mb-6 flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                    <span className="text-[13px] font-semibold text-[#666] dark:text-[#9ca3af]">Filters</span>

                    <div className="relative w-[200px]" ref={dropdownRef}>
                        <button
                            className={`w-full p-2 border border-[#e0e0e0] dark:border-[#333] rounded-lg bg-white dark:bg-[#1a1a1a] text-[13px] text-[#1d1d1f] dark:text-white flex items-center justify-between cursor-pointer hover:bg-[#f9f9f9] dark:hover:bg-[#222] ${currencyDropdownOpen ? 'bg-[#f9f9f9] dark:bg-[#222]' : ''}`}
                            onClick={toggleCurrencyDropdown}
                        >
                            {selectedCurrency}
                            <ChevronDown size={14} className="opacity-50" />
                        </button>

                        {currencyDropdownOpen && (
                            <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white dark:bg-[#1f2937] border border-[#e0e0e0] dark:border-[#333] rounded-lg shadow-lg z-20 p-2">
                                <div className="flex items-center border border-[#e0e0e0] dark:border-[#333] rounded-md px-2 py-1.5 mb-2">
                                    <div className="flex items-center justify-center">
                                        <Search size={14} color="#999" />
                                    </div>
                                    <input type="text" placeholder="Search currency..." className="border-none outline-none text-xs w-full ml-2 text-[#1d1d1f] dark:text-white bg-transparent" />
                                </div>
                                <div className="max-h-[200px] overflow-y-auto">
                                    {currencies.map(curr => (
                                        <div
                                            key={curr}
                                            className="p-2 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] cursor-pointer rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151]"
                                            onClick={() => handleCurrencySelect(curr)}
                                        >
                                            {curr}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex bg-[#f5f7fa] dark:bg-[#262626] rounded-md p-1">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                            <button
                                key={day}
                                className={`px-3 py-1.5 text-xs font-medium border-none bg-transparent cursor-pointer rounded transition-all duration-200 ${selectedDays.includes(day) ? 'bg-[#3b5bdb] text-white shadow-md' : 'text-[#86868b] dark:text-[#9ca3af] hover:text-[#1d1d1f] dark:hover:text-[#e5e7eb]'}`}
                                onClick={() => toggleDay(day)}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                        <div
                            className={`px-3 py-1.5 rounded-md text-[11px] font-semibold cursor-pointer border border-transparent flex items-center gap-1.5 transition-all duration-200 ${impactFilters.high ? 'bg-[#fee2e2] text-[#ef4444] dark:bg-red-900/20 dark:text-red-400 opacity-100' : 'bg-[#fee2e2] text-[#ef4444] dark:bg-red-900/20 dark:text-red-400 opacity-50'}`}
                            onClick={() => toggleImpact('high')}
                        >
                            {impactFilters.high && <Check size={12} strokeWidth={3} />} High Impact
                        </div>
                        <div
                            className={`px-3 py-1.5 rounded-md text-[11px] font-semibold cursor-pointer border border-transparent flex items-center gap-1.5 transition-all duration-200 ${impactFilters.med ? 'bg-[#ffedd5] text-[#f97316] dark:bg-orange-900/20 dark:text-orange-400 opacity-100' : 'bg-[#ffedd5] text-[#f97316] dark:bg-orange-900/20 dark:text-orange-400 opacity-50'}`}
                            onClick={() => toggleImpact('med')}
                        >
                            {impactFilters.med && <Check size={12} strokeWidth={3} />} Medium Impact
                        </div>
                        <div
                            className={`px-3 py-1.5 rounded-md text-[11px] font-semibold cursor-pointer border border-transparent flex items-center gap-1.5 transition-all duration-200 ${impactFilters.low ? 'bg-[#dcfce7] text-[#10b981] dark:bg-green-900/20 dark:text-green-400 opacity-100' : 'bg-[#dcfce7] text-[#10b981] dark:bg-green-900/20 dark:text-green-400 opacity-50'}`}
                            onClick={() => toggleImpact('low')}
                        >
                            {impactFilters.low && <Check size={12} strokeWidth={3} />} Low Impact
                        </div>
                        <div
                            className={`px-3 py-1.5 rounded-md text-[11px] font-semibold cursor-pointer border border-transparent flex items-center gap-1.5 transition-all duration-200 ${impactFilters.none ? 'bg-[#f3f4f6] text-[#9ca3af] dark:bg-gray-800 dark:text-gray-400 opacity-100' : 'bg-[#f3f4f6] text-[#9ca3af] dark:bg-gray-800 dark:text-gray-400 opacity-50'}`}
                            onClick={() => toggleImpact('none')}
                        >
                            {impactFilters.none && <Check size={12} strokeWidth={3} />} No Impact
                        </div>
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer text-[13px] font-medium text-[#1d1d1f] dark:text-[#e5e7eb] ml-2" onClick={() => setShowPassedEvents(!showPassedEvents)}>
                        <div className={`w-9 h-5 rounded-full relative transition-colors duration-200 ${showPassedEvents ? 'bg-[#9ca3af]' : 'bg-[#e5e7eb] dark:bg-[#333]'}`}>
                            <div className={`w-4 h-4 bg-white rounded-full absolute top-[2px] transition-transform duration-200 shadow-sm ${showPassedEvents ? 'left-[2px] translate-x-4' : 'left-[2px]'}`} />
                        </div>
                        <span>Show Passed Events</span>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white dark:bg-[#1a1a1a] rounded-xl border border-[#e0e0e0] dark:border-[#333] overflow-hidden">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="text-left text-[11px] text-[#86868b] dark:text-[#9ca3af] font-medium px-6 py-4 border-b border-[#eee] dark:border-[#333] uppercase">Time</th>
                            <th className="text-left text-[11px] text-[#86868b] dark:text-[#9ca3af] font-medium px-6 py-4 border-b border-[#eee] dark:border-[#333] uppercase">Currency</th>
                            <th className="text-left text-[11px] text-[#86868b] dark:text-[#9ca3af] font-medium px-6 py-4 border-b border-[#eee] dark:border-[#333] uppercase">Event Type</th>
                            <th className="text-left text-[11px] text-[#86868b] dark:text-[#9ca3af] font-medium px-6 py-4 border-b border-[#eee] dark:border-[#333] uppercase">Previous</th>
                            <th className="text-left text-[11px] text-[#86868b] dark:text-[#9ca3af] font-medium px-6 py-4 border-b border-[#eee] dark:border-[#333] uppercase">Forecast</th>
                            <th className="text-left text-[11px] text-[#86868b] dark:text-[#9ca3af] font-medium px-6 py-4 border-b border-[#eee] dark:border-[#333] uppercase"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((ev, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 text-xs text-[#86868b] dark:text-[#9ca3af] border-b border-[#f9f9f9] dark:border-[#262626] tabular-nums align-middle">{ev.time}</td>
                                <td className="px-6 py-4 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] border-b border-[#f9f9f9] dark:border-[#262626] align-middle">
                                    <div className="flex items-center gap-2 font-semibold">
                                        <div className="w-[18px] h-[18px] rounded-full bg-[#eee] dark:bg-[#333] dark:text-[#ccc] flex items-center justify-center text-[8px]">{ev.currency[0]}</div>
                                        {ev.currency}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] border-b border-[#f9f9f9] dark:border-[#262626] align-middle">
                                    <div className="font-medium flex items-center gap-2">
                                        {ev.event}
                                        {ev.restricted && <span className="text-[10px] bg-[#fee2e2] text-[#ef4444] px-1.5 py-0.5 rounded font-semibold border border-[#fecaca]">Restricted</span>}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] border-b border-[#f9f9f9] dark:border-[#262626] align-middle">{ev.previous}</td>
                                <td className="px-6 py-4 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] border-b border-[#f9f9f9] dark:border-[#262626] align-middle">{ev.forecast}</td>
                                <td className="px-6 py-4 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] border-b border-[#f9f9f9] dark:border-[#262626] align-middle text-right relative">
                                    <button
                                        className={`inline-flex items-center justify-between gap-2 px-3 py-2 border border-[#e0e0e0] dark:border-[#333] bg-white dark:bg-[#1a1a1a] rounded-md text-[13px] text-[#1d1d1f] dark:text-[#ccc] cursor-pointer transition-all duration-200 min-w-[140px] font-medium hover:bg-[#f9f9f9] dark:hover:bg-[#333] hover:border-[#ccc] ${activeDropdown === index ? 'border-[#555] bg-[#f9f9f9] dark:bg-[#333]' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleDropdown(index);
                                        }}
                                    >
                                        <span className="flex items-center gap-1.5">
                                            <CalendarIcon size={14} />
                                            Add to Calendar
                                        </span>
                                        <ChevronDown size={14} className="opacity-50" />
                                    </button>

                                    {activeDropdown === index && (
                                        <div className="absolute top-[calc(100%+4px)] right-0 w-full min-w-[160px] bg-white dark:bg-[#1f2937] border border-[#e0e0e0] dark:border-[#333] rounded-lg shadow-lg z-10 overflow-hidden text-left py-1">
                                            <div className="px-4 py-2 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#374151]">Google Calendar</div>
                                            <div className="px-4 py-2 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#374151]">Outlook</div>
                                            <div className="px-4 py-2 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#374151]">Apple Calendar</div>
                                            <div className="px-4 py-2 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#374151]">Yahoo Calendar</div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Click overlay to close dropdowns */}
            {activeDropdown !== null && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setActiveDropdown(null)}
                />
            )}
        </div>
    );
}

export default Calendar;
