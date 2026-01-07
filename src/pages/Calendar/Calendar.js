import React from 'react';
import { Filter, Calendar as CalendarIcon, Clock } from 'lucide-react';
import './Calendar.css';

function Calendar() {
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
                    <select className="currency-select">
                        <option>Select currency...</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>GBP</option>
                    </select>

                    <div className="day-selector">
                        <button className="day-btn">Mon</button>
                        <button className="day-btn">Tue</button>
                        <button className="day-btn active">Wed</button>
                        <button className="day-btn">Thu</button>
                        <button className="day-btn">Fri</button>
                        <button className="day-btn">Sat</button>
                        <button className="day-btn">Sun</button>
                    </div>
                </div>

                <div className="filter-group">
                    <div className="impact-toggles">
                        <div className="impact-toggle impact-high active">High Impact</div>
                        <div className="impact-toggle impact-med active">Medium Impact</div>
                        <div className="impact-toggle impact-low active">Low Impact</div>
                        <div className="impact-toggle impact-none">No Impact</div>
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
                                <td style={{ textAlign: 'right' }}>
                                    <button className="btn-add-cal">
                                        <CalendarIcon size={14} /> Add to Calendar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Calendar;
