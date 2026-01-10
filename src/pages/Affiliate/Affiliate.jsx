import React from 'react';
import { Copy, Info, Calendar, TrendingUp, Check } from 'lucide-react';
import './Affiliate.css';

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
        <div className="affiliate-container">
            <div className="affiliate-header">
                <h2>Affiliate</h2>
            </div>

            <div className="referral-section">
                <h3>Referral Code</h3>
                <p className="referral-desc">Share your referral link or code to earn commissions.</p>

                <div className="referral-inputs">
                    <div className="input-group">
                        <input type="text" value="https://app.YoPips.com/register?ref=4D10C1E0" readOnly />
                        <button className="copy-btn" onClick={() => handleCopy('https://app.YoPips.com/register?ref=4D10C1E0', 'link')}>
                            {copiedKey === 'link' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                        </button>
                        {copiedKey === 'link' && <span className="copy-feedback">Copied!</span>}
                    </div>
                    <div className="input-group input-group-short">
                        <input type="text" value="4D10C1E0" readOnly />
                        <button className="copy-btn" onClick={() => handleCopy('4D10C1E0', 'code')}>
                            {copiedKey === 'code' ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                        </button>
                        {copiedKey === 'code' && <span className="copy-feedback">Copied!</span>}
                    </div>
                </div>

                <div className="commission-info">
                    <div className="info-text">
                        <Info size={16} />
                        Commissions are credited when referred users complete qualifying purchases.
                    </div>
                    <button className="btn-visit" onClick={() => window.open('/affiliate', '_blank')}>Visit Affiliate Page</button>
                </div>
            </div>

            <div className="stats-container">
                <div className="chart-area">
                    <div className="tabs-row">
                        <button
                            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                            onClick={() => setActiveTab('overview')}
                        >
                            Overview
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'daily' ? 'active' : ''}`}
                            onClick={() => setActiveTab('daily')}
                        >
                            Daily
                        </button>
                    </div>

                    {activeTab === 'overview' ? (
                        <>
                            <div className="chart-header">
                                <h3>Earnings</h3>
                                <div className="chart-controls">
                                    <div className="date-picker-wrapper" ref={datePickerRef}>
                                        <button
                                            className={`control-btn ${showDatePicker ? 'active' : ''}`}
                                            onClick={() => setShowDatePicker(!showDatePicker)}
                                        >
                                            <Calendar size={14} /> Pick date range
                                        </button>

                                        {showDatePicker && (
                                            <div className="date-picker-popover">
                                                <div className="quick-select-section">
                                                    <label>Quick Select</label>
                                                    <div className="quick-select-grid">
                                                        <button className="quick-btn" onClick={() => handleQuickSelect(7)}>Last 7 days</button>
                                                        <button className="quick-btn" onClick={() => handleQuickSelect(30)}>Last 30 days</button>
                                                        <button className="quick-btn" onClick={() => handleQuickSelect(90)}>Last 90 days</button>
                                                        <button className="quick-btn" onClick={() => handleQuickSelect('all')}>All time</button>
                                                    </div>
                                                </div>
                                                <div className="date-input-row">
                                                    <div className="date-field">
                                                        <label>From</label>
                                                        <div className="date-input-wrapper" onClick={() => fromDateRef.current?.showPicker()}>
                                                            <input
                                                                type="date"
                                                                ref={fromDateRef}
                                                                className="date-input-native"
                                                                value={dateRange.from}
                                                                onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                                                            />
                                                            <Calendar size={14} className="input-icon" />
                                                        </div>
                                                    </div>
                                                    <div className="date-field">
                                                        <label>To</label>
                                                        <div className="date-input-wrapper" onClick={() => toDateRef.current?.showPicker()}>
                                                            <input
                                                                type="date"
                                                                ref={toDateRef}
                                                                className="date-input-native"
                                                                value={dateRange.to}
                                                                onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                                                            />
                                                            <Calendar size={14} className="input-icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="toggle-group">
                                        <button
                                            className={`toggle-btn ${chartMode === 'cumulative' ? 'active' : ''}`}
                                            onClick={() => setChartMode('cumulative')}
                                        >
                                            Cumulative
                                        </button>
                                        <button
                                            className={`toggle-btn ${chartMode === 'daily' ? 'active' : ''}`}
                                            onClick={() => setChartMode('daily')}
                                        >
                                            Daily
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="chart-placeholder">
                                <TrendingUp size={32} style={{ opacity: 0.3 }} />
                                <h4>No referral data available</h4>
                                <p>Start referring users to see your earnings history</p>
                            </div>
                        </>
                    ) : (
                        <div className="daily-view-content">
                            <h3>Daily Breakdown</h3>
                            <div className="daily-placeholder-box">
                                <p>No daily data available for this period.</p>
                            </div>
                        </div>
                    )}
                </div>

                {activeTab === 'overview' && (
                    <div className="stats-sidebar">
                        <div className="stat-card-white">
                            <div className="stat-title">Total Referrals</div>
                            <div className="stat-val-large">0</div>
                        </div>
                        <div className="stat-card-white">
                            <div className="stat-title">Total Paid Out</div>
                            <div className="stat-val-large">$0.00</div>
                        </div>
                        <div className="stat-card-white">
                            <div className="stat-title">Available Balance</div>
                            <div className="stat-val-large">$0.00</div>
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
