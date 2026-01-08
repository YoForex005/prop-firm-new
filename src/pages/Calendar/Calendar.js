import React from 'react';
import { Filter, Calendar as CalendarIcon, Clock, ChevronDown, Search, Check } from 'lucide-react';
import './Calendar.css';

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

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <h2><Filter size={20} /> Economic Calendar</h2>
            </div>

            {/* Filters */}
            <div className="calendar-filters">
                <div className="filter-group">
                    <span style={{ fontSize: '13px', fontWeight: '600', color: '#666' }}>Filters</span>

                    <div className="custom-select-wrapper" ref={dropdownRef}>
                        <button className={`custom-select-trigger ${currencyDropdownOpen ? 'active' : ''}`} onClick={toggleCurrencyDropdown}>
                            {selectedCurrency}
                            <ChevronDown size={14} className="chevron-icon" />
                        </button>

                        {currencyDropdownOpen && (
                            <div className="custom-select-dropdown">
                                <div className="search-wrapper">
                                    <div className="search-icon-wrapper">
                                        <Search size={14} color="#999" />
                                    </div>
                                    <input type="text" placeholder="Search currency..." className="currency-search-input" />
                                </div>
                                <div className="currency-list">
                                    {currencies.map(curr => (
                                        <div
                                            key={curr}
                                            className="currency-item"
                                            onClick={() => handleCurrencySelect(curr)}
                                        >
                                            {curr}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="day-selector">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                            <button
                                key={day}
                                className={`day-btn ${selectedDays.includes(day) ? 'active' : ''}`}
                                onClick={() => toggleDay(day)}
                            >
                                {day}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="filter-group">
                    <div className="impact-toggles">
                        <div
                            className={`impact-toggle impact-high ${impactFilters.high ? 'active' : ''}`}
                            onClick={() => toggleImpact('high')}
                        >
                            {impactFilters.high && <Check size={12} strokeWidth={3} />} High Impact
                        </div>
                        <div
                            className={`impact-toggle impact-med ${impactFilters.med ? 'active' : ''}`}
                            onClick={() => toggleImpact('med')}
                        >
                            {impactFilters.med && <Check size={12} strokeWidth={3} />} Medium Impact
                        </div>
                        <div
                            className={`impact-toggle impact-low ${impactFilters.low ? 'active' : ''}`}
                            onClick={() => toggleImpact('low')}
                        >
                            {impactFilters.low && <Check size={12} strokeWidth={3} />} Low Impact
                        </div>
                        <div
                            className={`impact-toggle impact-none ${impactFilters.none ? 'active' : ''}`}
                            onClick={() => toggleImpact('none')}
                        >
                            {impactFilters.none && <Check size={12} strokeWidth={3} />} No Impact
                        </div>
                    </div>

                    <div className="passed-events-toggle" onClick={() => setShowPassedEvents(!showPassedEvents)}>
                        <div className={`toggle-switch ${showPassedEvents ? 'active' : ''}`}>
                            <div className="toggle-knob" />
                        </div>
                        <span>Show Passed Events</span>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="calendar-table-wrapper">
                <table className="calendar-table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Currency</th>
                            <th>Event Type</th>
                            <th>Previous</th>
                            <th>Forecast</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((ev, index) => (
                            <tr key={index}>
                                <td className="event-time">{ev.time}</td>
                                <td>
                                    <div className="currency-cell">
                                        <div className={`flag-icon`}>{ev.currency[0]}</div>
                                        {ev.currency}
                                    </div>
                                </td>
                                <td>
                                    <div className="event-name">
                                        {ev.event}
                                        {ev.restricted && <span className="tag-restricted">Restricted</span>}
                                    </div>
                                </td>
                                <td>{ev.previous}</td>
                                <td>{ev.forecast}</td>
                                <td style={{ textAlign: 'right', position: 'relative' }}>
                                    <button
                                        className={`btn-add-cal ${activeDropdown === index ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleDropdown(index);
                                        }}
                                    >
                                        <span className="btn-content">
                                            <CalendarIcon size={14} />
                                            Add to Calendar
                                        </span>
                                        <ChevronDown size={14} className="chevron-icon" />
                                    </button>

                                    {activeDropdown === index && (
                                        <div className="cal-dropdown-menu">
                                            <div className="cal-dropdown-item">Google Calendar</div>
                                            <div className="cal-dropdown-item">Outlook</div>
                                            <div className="cal-dropdown-item">Apple Calendar</div>
                                            <div className="cal-dropdown-item">Yahoo Calendar</div>
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
                    style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 5 }}
                    onClick={() => setActiveDropdown(null)}
                />
            )}
        </div>
    );
}

export default Calendar;
