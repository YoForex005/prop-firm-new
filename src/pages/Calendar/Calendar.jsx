import React from 'react';
import { Filter, Calendar as CalendarIcon, Clock, ChevronDown, Search, Check, TrendingUp, AlertTriangle, Flame, Globe, Bell, ExternalLink } from 'lucide-react';

// Currency color mapping for professional badges
const currencyColors = {
    USD: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-400', border: 'border-blue-200 dark:border-blue-700' },
    EUR: { bg: 'bg-indigo-100 dark:bg-indigo-900/30', text: 'text-indigo-700 dark:text-indigo-400', border: 'border-indigo-200 dark:border-indigo-700' },
    GBP: { bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-700 dark:text-purple-400', border: 'border-purple-200 dark:border-purple-700' },
    JPY: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-400', border: 'border-red-200 dark:border-red-700' },
    AUD: { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-400', border: 'border-emerald-200 dark:border-emerald-700' },
    CAD: { bg: 'bg-rose-100 dark:bg-rose-900/30', text: 'text-rose-700 dark:text-rose-400', border: 'border-rose-200 dark:border-rose-700' },
    CHF: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-400', border: 'border-orange-200 dark:border-orange-700' },
    NZD: { bg: 'bg-teal-100 dark:bg-teal-900/30', text: 'text-teal-700 dark:text-teal-400', border: 'border-teal-200 dark:border-teal-700' },
    CNY: { bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-400', border: 'border-amber-200 dark:border-amber-700' },
};

const defaultCurrencyColor = { bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-700 dark:text-gray-400', border: 'border-gray-200 dark:border-gray-700' };

function Calendar() {
    const [currencyDropdownOpen, setCurrencyDropdownOpen] = React.useState(false);
    const [selectedCurrency, setSelectedCurrency] = React.useState('All Currencies');
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
    const currencies = [
        { code: 'All', name: 'All Currencies' },
        { code: 'USD', name: 'US Dollar' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'British Pound' },
        { code: 'JPY', name: 'Japanese Yen' },
        { code: 'AUD', name: 'Australian Dollar' },
        { code: 'CAD', name: 'Canadian Dollar' },
        { code: 'CHF', name: 'Swiss Franc' },
        { code: 'NZD', name: 'New Zealand Dollar' },
        { code: 'CNY', name: 'Chinese Yuan' },
    ];

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
        setSelectedCurrency(currency.code === 'All' ? 'All Currencies' : currency.code);
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

    const getImpactBarColor = (impact) => {
        switch (impact) {
            case 'high': return 'bg-gradient-to-b from-red-400 to-red-600';
            case 'medium': return 'bg-gradient-to-b from-orange-400 to-orange-600';
            case 'low': return 'bg-gradient-to-b from-emerald-400 to-emerald-600';
            default: return 'bg-gray-300 dark:bg-gray-600';
        }
    };

    const getCurrencyBadge = (code) => {
        const colors = currencyColors[code] || defaultCurrencyColor;
        return (
            <div className={`flex items-center gap-2`}>
                <div className={`w-8 h-8 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                    <span className={`text-[10px] font-bold ${colors.text}`}>{code}</span>
                </div>
                <span className="font-semibold text-[#1d1d1f] dark:text-white">{code}</span>
            </div>
        );
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="max-w-[1400px] mx-auto">
            {/* Enhanced Page Header */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                                <CalendarIcon size={20} className="text-white" />
                            </div>
                            <h1 className="text-2xl font-bold text-[#1d1d1f] dark:text-white">Economic Calendar</h1>
                        </div>
                        <p className="text-sm text-[#86868b] dark:text-[#9ca3af] ml-[52px]">
                            Track market-moving events and plan your trades accordingly
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <div className="text-sm font-semibold text-[#1d1d1f] dark:text-white">{formattedDate}</div>
                            <div className="text-xs text-[#86868b] dark:text-[#9ca3af] flex items-center justify-end gap-1">
                                <Globe size={12} />
                                <span>UTC+5:30 (IST)</span>
                            </div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5">
                            <Bell size={16} />
                            Set Alerts
                        </button>
                    </div>
                </div>
            </div>

            {/* Filters - Enhanced Design */}
            <div className="bg-white/80 dark:bg-[#141414]/80 backdrop-blur-xl p-5 rounded-2xl border border-[#e0e0e0]/50 dark:border-[#333]/50 mb-6 shadow-lg shadow-black/5 dark:shadow-black/20">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-5">
                        {/* Currency Dropdown */}
                        <div className="relative" ref={dropdownRef}>
                            <label className="text-[11px] uppercase tracking-wider font-semibold text-[#86868b] dark:text-[#6b7280] block mb-1.5">Currency</label>
                            <button
                                className={`w-[180px] p-2.5 border border-[#e0e0e0] dark:border-[#333] rounded-xl bg-white dark:bg-[#1a1a1a] text-[13px] text-[#1d1d1f] dark:text-white flex items-center justify-between cursor-pointer hover:border-blue-400 dark:hover:border-blue-500 transition-colors ${currencyDropdownOpen ? 'border-blue-400 dark:border-blue-500 ring-2 ring-blue-400/20' : ''}`}
                                onClick={toggleCurrencyDropdown}
                            >
                                <span className="flex items-center gap-2">
                                    {selectedCurrency === 'All Currencies' ? (
                                        <Globe size={14} className="text-[#86868b]" />
                                    ) : (
                                        <div className={`w-5 h-5 rounded ${(currencyColors[selectedCurrency] || defaultCurrencyColor).bg} flex items-center justify-center`}>
                                            <span className={`text-[8px] font-bold ${(currencyColors[selectedCurrency] || defaultCurrencyColor).text}`}>{selectedCurrency}</span>
                                        </div>
                                    )}
                                    {selectedCurrency}
                                </span>
                                <ChevronDown size={14} className={`opacity-50 transition-transform ${currencyDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {currencyDropdownOpen && (
                                <div className="absolute top-[calc(100%+4px)] left-0 w-[220px] bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] rounded-xl shadow-2xl z-20 p-2 animate-[fadeIn_0.15s_ease-out]">
                                    <div className="flex items-center border border-[#e0e0e0] dark:border-[#333] rounded-lg px-3 py-2 mb-2 bg-[#f9f9f9] dark:bg-[#141414]">
                                        <Search size={14} className="text-[#999]" />
                                        <input type="text" placeholder="Search currency..." className="border-none outline-none text-xs w-full ml-2 text-[#1d1d1f] dark:text-white bg-transparent placeholder:text-[#999]" />
                                    </div>
                                    <div className="max-h-[250px] overflow-y-auto">
                                        {currencies.map(curr => {
                                            const colors = currencyColors[curr.code] || defaultCurrencyColor;
                                            return (
                                                <div
                                                    key={curr.code}
                                                    className="p-2.5 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] cursor-pointer rounded-lg hover:bg-[#f3f4f6] dark:hover:bg-[#262626] flex items-center gap-3 transition-colors"
                                                    onClick={() => handleCurrencySelect(curr)}
                                                >
                                                    {curr.code === 'All' ? (
                                                        <div className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                                            <Globe size={14} className="text-gray-500" />
                                                        </div>
                                                    ) : (
                                                        <div className={`w-7 h-7 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                                                            <span className={`text-[9px] font-bold ${colors.text}`}>{curr.code}</span>
                                                        </div>
                                                    )}
                                                    <div>
                                                        <div className="font-medium">{curr.code === 'All' ? 'All' : curr.code}</div>
                                                        <div className="text-[11px] text-[#86868b] dark:text-[#6b7280]">{curr.name}</div>
                                                    </div>
                                                    {(selectedCurrency === curr.code || (selectedCurrency === 'All Currencies' && curr.code === 'All')) && (
                                                        <Check size={14} className="ml-auto text-blue-500" />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Day Selector */}
                        <div>
                            <label className="text-[11px] uppercase tracking-wider font-semibold text-[#86868b] dark:text-[#6b7280] block mb-1.5">Day</label>
                            <div className="flex bg-[#f5f7fa] dark:bg-[#1a1a1a] rounded-xl p-1 gap-1">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                                    <button
                                        key={day}
                                        className={`px-3.5 py-2 text-xs font-semibold border-none cursor-pointer rounded-lg transition-all duration-200 ${selectedDays.includes(day)
                                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/25'
                                            : 'bg-transparent text-[#86868b] dark:text-[#6b7280] hover:text-[#1d1d1f] dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                                            }`}
                                        onClick={() => toggleDay(day)}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        {/* Impact Filters */}
                        <div>
                            <label className="text-[11px] uppercase tracking-wider font-semibold text-[#86868b] dark:text-[#6b7280] block mb-1.5">Impact Level</label>
                            <div className="flex gap-2">
                                {[
                                    { key: 'high', label: 'High', icon: Flame, colors: 'bg-red-50 text-red-500 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-400/30' },
                                    { key: 'med', label: 'Medium', icon: AlertTriangle, colors: 'bg-orange-50 text-orange-500 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-400/30' },
                                    { key: 'low', label: 'Low', icon: TrendingUp, colors: 'bg-emerald-50 text-emerald-500 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-400/30' },
                                    { key: 'none', label: 'None', icon: null, colors: 'bg-gray-50 text-gray-500 border-gray-200 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-400/30' },
                                ].map(({ key, label, icon: Icon, colors }) => (
                                    <button
                                        key={key}
                                        className={`px-3 py-2 rounded-lg text-[11px] font-semibold cursor-pointer border flex items-center gap-1.5 transition-all duration-200 ${colors} ${impactFilters[key] ? 'opacity-100 shadow-sm' : 'opacity-40 hover:opacity-70'}`}
                                        onClick={() => toggleImpact(key)}
                                    >
                                        {Icon && <Icon size={12} />}
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Show Passed Events Toggle */}
                        <div className="border-l border-[#e0e0e0] dark:border-[#333] pl-5">
                            <label className="text-[11px] uppercase tracking-wider font-semibold text-[#86868b] dark:text-[#6b7280] block mb-1.5">Passed Events</label>
                            <div
                                className="flex items-center gap-2.5 cursor-pointer"
                                onClick={() => setShowPassedEvents(!showPassedEvents)}
                            >
                                <div className={`w-11 h-6 rounded-full relative transition-all duration-300 ${showPassedEvents ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-[#e5e7eb] dark:bg-[#333]'}`}>
                                    <div className={`w-5 h-5 bg-white rounded-full absolute top-[2px] transition-all duration-300 shadow-md ${showPassedEvents ? 'left-[22px]' : 'left-[2px]'}`} />
                                </div>
                                <span className="text-[13px] font-medium text-[#1d1d1f] dark:text-[#e5e7eb]">Show</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Table - Enhanced Design */}
            <div className="bg-white dark:bg-[#141414] rounded-2xl border border-[#e0e0e0]/50 dark:border-[#333]/50 overflow-hidden shadow-lg shadow-black/5 dark:shadow-black/20">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-[#f9fafb] dark:bg-[#1a1a1a]">
                            <th className="text-left text-[10px] text-[#86868b] dark:text-[#6b7280] font-semibold px-6 py-4 border-b border-[#eee] dark:border-[#262626] uppercase tracking-wider">Time</th>
                            <th className="text-left text-[10px] text-[#86868b] dark:text-[#6b7280] font-semibold px-6 py-4 border-b border-[#eee] dark:border-[#262626] uppercase tracking-wider w-[60px]">Impact</th>
                            <th className="text-left text-[10px] text-[#86868b] dark:text-[#6b7280] font-semibold px-6 py-4 border-b border-[#eee] dark:border-[#262626] uppercase tracking-wider">Currency</th>
                            <th className="text-left text-[10px] text-[#86868b] dark:text-[#6b7280] font-semibold px-6 py-4 border-b border-[#eee] dark:border-[#262626] uppercase tracking-wider">Event</th>
                            <th className="text-right text-[10px] text-[#86868b] dark:text-[#6b7280] font-semibold px-6 py-4 border-b border-[#eee] dark:border-[#262626] uppercase tracking-wider">Previous</th>
                            <th className="text-right text-[10px] text-[#86868b] dark:text-[#6b7280] font-semibold px-6 py-4 border-b border-[#eee] dark:border-[#262626] uppercase tracking-wider">Forecast</th>
                            <th className="text-right text-[10px] text-[#86868b] dark:text-[#6b7280] font-semibold px-6 py-4 border-b border-[#eee] dark:border-[#262626] uppercase tracking-wider"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((ev, index) => (
                            <tr key={index} className="hover:bg-[#f9fafb] dark:hover:bg-[#1a1a1a] transition-colors group">
                                <td className="px-6 py-4 text-sm text-[#1d1d1f] dark:text-[#e5e7eb] border-b border-[#f5f5f5] dark:border-[#1f1f1f] tabular-nums align-middle font-medium">
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} className="text-[#86868b] dark:text-[#6b7280]" />
                                        {ev.time}
                                    </div>
                                </td>
                                <td className="px-6 py-4 border-b border-[#f5f5f5] dark:border-[#1f1f1f] align-middle">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3].map((bar) => (
                                            <div
                                                key={bar}
                                                className={`w-1 rounded-full transition-all ${bar === 1 ? 'h-2' : bar === 2 ? 'h-3' : 'h-4'} ${(ev.impact === 'high') || (ev.impact === 'medium' && bar <= 2) || (ev.impact === 'low' && bar === 1)
                                                    ? getImpactBarColor(ev.impact)
                                                    : 'bg-gray-200 dark:bg-gray-700'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] border-b border-[#f5f5f5] dark:border-[#1f1f1f] align-middle">
                                    {getCurrencyBadge(ev.currency)}
                                </td>
                                <td className="px-6 py-4 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] border-b border-[#f5f5f5] dark:border-[#1f1f1f] align-middle">
                                    <div className="font-medium flex items-center gap-2.5">
                                        <span>{ev.event}</span>
                                        {ev.restricted && (
                                            <span className="text-[10px] bg-gradient-to-r from-red-500 to-rose-500 text-white px-2 py-0.5 rounded-md font-semibold shadow-sm">
                                                Restricted
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-[13px] text-[#86868b] dark:text-[#9ca3af] border-b border-[#f5f5f5] dark:border-[#1f1f1f] align-middle text-right tabular-nums">
                                    {ev.previous || '—'}
                                </td>
                                <td className="px-6 py-4 text-[13px] font-semibold text-[#1d1d1f] dark:text-[#e5e7eb] border-b border-[#f5f5f5] dark:border-[#1f1f1f] align-middle text-right tabular-nums">
                                    {ev.forecast ? (
                                        <span className={ev.forecast.startsWith('-') ? 'text-red-500' : 'text-emerald-500'}>
                                            {ev.forecast}
                                        </span>
                                    ) : '—'}
                                </td>
                                <td className="px-6 py-4 border-b border-[#f5f5f5] dark:border-[#1f1f1f] align-middle text-right relative">
                                    <button
                                        className={`inline-flex items-center justify-between gap-2 px-4 py-2.5 border border-[#e0e0e0] dark:border-[#333] bg-white dark:bg-[#1a1a1a] rounded-xl text-[12px] text-[#1d1d1f] dark:text-[#ccc] cursor-pointer transition-all duration-200 min-w-[150px] font-semibold hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md group-hover:border-blue-400/50 ${activeDropdown === index ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10 ring-2 ring-blue-400/20' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleDropdown(index);
                                        }}
                                    >
                                        <span className="flex items-center gap-2">
                                            <CalendarIcon size={14} className="text-blue-500" />
                                            Add to Calendar
                                        </span>
                                        <ChevronDown size={14} className={`opacity-50 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                                    </button>

                                    {activeDropdown === index && (
                                        <div className="absolute top-[calc(100%+4px)] right-6 w-[180px] bg-white dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] rounded-xl shadow-2xl z-10 overflow-hidden text-left py-1 animate-[fadeIn_0.15s_ease-out]">
                                            {[
                                                { name: 'Google Calendar', color: 'text-blue-500' },
                                                { name: 'Outlook', color: 'text-sky-500' },
                                                { name: 'Apple Calendar', color: 'text-gray-600 dark:text-gray-400' },
                                                { name: 'Download .ics', color: 'text-emerald-500' },
                                            ].map((cal) => (
                                                <div key={cal.name} className="px-4 py-2.5 text-[13px] text-[#1d1d1f] dark:text-[#e5e7eb] cursor-pointer hover:bg-[#f3f4f6] dark:hover:bg-[#262626] flex items-center gap-2.5 transition-colors">
                                                    <ExternalLink size={14} className={cal.color} />
                                                    {cal.name}
                                                </div>
                                            ))}
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
