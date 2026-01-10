import React, { useState } from 'react';
import {
    Download, Info, Key, Phone, RefreshCw, Share2, XCircle,
    ChevronDown, Check, X, Calendar, ChevronLeft, ChevronRight,
    Settings, Search, ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AccountMetrix.css';
import CredentialsModal from '../../components/Modals/CredentialsModal';
import ShareModal from '../../components/Modals/ShareModal';

function AccountMetrix() {
    const navigate = useNavigate();
    const [chartTab, setChartTab] = useState('1-day');
    const [showCredentials, setShowCredentials] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);

    const mockAccount = {
        login: '1512264795',
        server: 'YoPips-Server',
        platform: 'MT5',
        password: 'Password123'
    };

    const shareLink = "https://trader.ftmo.com/live-metrix/1512264795/share/019ba288-e56d-733a-b";

    return (
        <div className="account-metrix-wrapper">
            {showCredentials && (
                <CredentialsModal
                    onClose={() => setShowCredentials(false)}
                    credentials={mockAccount}
                />
            )}
            {showShareModal && (
                <ShareModal
                    onClose={() => setShowShareModal(false)}
                    shareLink={shareLink}
                />
            )}
            {/* Breadcrumbs */}
            <div className="am-breadcrumbs">
                <span>Traders</span>
                <span className="separator">/</span>
                <span>Accounts Overview</span>
                <span className="separator">/</span>
                <span className="current">Account Metrix: 1512264795</span>
            </div>

            {/* Page Header */}
            <div className="metrix-page-header">
                <div className="header-left">
                    <BarChartIcon />
                    <h1>Account Metrix 1512264795</h1>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="metrix-action-bar">
                <button className="action-button" onClick={() => setShowCredentials(true)}>
                    <Key size={14} /> Credentials
                </button>
                <button className="action-button" onClick={() => navigate('/support')}>
                    <Phone size={14} /> Contact us
                </button>
                <button className="action-button" onClick={() => window.location.reload()}>
                    <RefreshCw size={14} /> Refresh
                </button>
                <button className="action-button" onClick={() => setShowShareModal(true)}>
                    <Share2 size={14} /> Share
                </button>
                <button className="action-button">
                    <XCircle size={14} /> Close account
                </button>
            </div>

            {/* Top Grid: Current Results & Free Trial */}
            <div className="metrix-top-grid">
                {/* Current Results */}
                <div className="card current-results-card">
                    <h3>Current Results</h3>

                    <div className="results-metrics">
                        <div className="metric-item">
                            <span className="label">Balance <Info size={12} /></span>
                            <span className="value bold">$50,000.00</span>
                        </div>
                        <div className="metric-item">
                            <span className="label">Equity <Info size={12} /></span>
                            <span className="value bold green">$50,205.01</span>
                        </div>
                        <div className="metric-item">
                            <span className="label">Unrealized PnL <Info size={12} /></span>
                            <span className="value green">$205.01</span>
                        </div>
                    </div>

                    <div className="chart-controls">
                        <div className="control-group">
                            <span className="control-label">Trading Objective lines</span>
                            <div className="toggle-group">
                                <button className="toggle-btn">Off</button>
                                <button className="toggle-btn active">On</button>
                            </div>
                        </div>
                        <div className="control-group">
                            <span className="control-label">PnL Values</span>
                            <select className="control-select">
                                <option>Absolute</option>
                                <option>Percentage</option>
                            </select>
                        </div>
                        <button className="zoom-btn">Zoom out</button>
                    </div>

                    <div className="results-chart-area">
                        {/* Placeholder for Bar Chart */}
                        <div className="bar-chart-placeholder">
                            <div className="y-axis">
                                <span>$50,200.00</span>
                                <span>$50,100.00</span>
                                <span>$50,000.00</span>
                                <span>$49,900.00</span>
                            </div>
                            <div className="chart-bars-container">
                                <div className="chart-bar equity-bar" style={{ height: '60%' }}></div>
                            </div>
                            <div className="x-axis">
                                <span>7 Jan 2025 10:00</span>
                                <span>Now</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Free Trial / Account Info */}
                <div className="card account-info-card">
                    <div className="card-header-row">
                        <h3>Free trial</h3>
                    </div>

                    <div className="info-list">
                        <div className="info-item">
                            <span className="label">Result:</span>
                            <span className="badge ongoing">Ongoing</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Status:</span>
                            <span className="value">Active</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Free trial:</span>
                            <span className="value">1512264795</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Start:</span>
                            <span className="value">7 Jan 2025 <Info size={12} /></span>
                        </div>
                        <div className="info-item">
                            <span className="label">End:</span>
                            <span className="value">26 Jan 2025 <Info size={12} /></span>
                        </div>
                        <div className="info-item">
                            <span className="label">Account size:</span>
                            <span className="value">$200,000.00</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Account Type:</span>
                            <span className="value">FTMO</span>
                        </div>
                        <div className="info-item">
                            <span className="label">Platform (MT5):</span>
                            <span className="value">Downloaded</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="collapsible-section">
                <div className="section-header">
                    <div className="header-title">
                        <span className="toggle-icon">▼</span> Open trades
                    </div>
                </div>
                <div className="trades-table-container">
                    <table className="trades-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Open Time</th>
                                <th>Volume</th>
                                <th>Symbol</th>
                                <th>PnL</th>
                                <th>Pips</th>
                                <th>Duration</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="trade-id-cell">
                                        <span className="trade-id">365273361</span>
                                        <span className="trade-type buy">↗ Buy</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="trade-time">
                                        <span>7 Jan 2026,</span>
                                        <span className="time-sub">15:33:19</span>
                                    </div>
                                </td>
                                <td>0.01</td>
                                <td>XAUUSD</td>
                                <td><span className="pnl-badge positive">$33.77</span></td>
                                <td><span className="pips-badge positive">33.8</span></td>
                                <td><span className="duration-badge">1d 22:26:02</span></td>
                                <td><button className="expand-row-btn"><ChevronDown size={16} /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* "Your stats" Section */}
            <div className="section-title-row">
                <h3>Your stats</h3>
            </div>

            <div className="stats-grid-row">
                {/* Consistency Score */}
                <div className="card consistency-card">
                    <div className="card-header-row">
                        <h4>Consistency score</h4>
                        <Settings size={14} className="icon-gray" />
                    </div>
                    <div className="consistency-legend">
                        <span className="dot red"></span> 0 - 30%
                        <span className="dot yellow"></span> 30 - 80%
                        <span className="dot green"></span> 80 - 100%
                    </div>
                    <div className="gauge-container">
                        <div className="gauge-circle">
                            <span className="gauge-value">0%</span>
                            <span className="gauge-sub">Poor</span>
                        </div>
                    </div>
                </div>

                {/* Objectives */}
                <div className="card objectives-card">
                    <h4>Objectives</h4>
                    <table className="objectives-table">
                        <thead>
                            <tr>
                                <th>Trading objectives</th>
                                <th>Result</th>
                                <th>Summary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="blue-link">Minimum 5 trading days</td>
                                <td>1</td>
                                <td className="status-cell"><div className="status-icon red"><X size={12} /></div></td>
                            </tr>
                            <tr>
                                <td className="blue-link">Max Daily Loss - $10,000</td>
                                <td>-$99.00 (0%)</td>
                                <td className="status-cell"><div className="status-icon green"><Check size={12} /></div></td>
                            </tr>
                            <tr>
                                <td className="blue-link">Max Loss - $20,000</td>
                                <td>-$99.00 (0%)</td>
                                <td className="status-cell"><div className="status-icon green"><Check size={12} /></div></td>
                            </tr>
                            <tr>
                                <td className="blue-link">Profit Target $10,000</td>
                                <td>$205.01 (0%)</td>
                                <td className="status-cell"><div className="status-icon red"><X size={12} /></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Permitted Loss Stats Bars */}
            <div className="permitted-loss-grid">
                <div className="loss-stat-box">
                    <span className="stat-label">Today's permitted loss <Info size={12} /></span>
                    <span className="stat-val">$10,100.29</span>
                </div>
                <div className="loss-stat-box">
                    <span className="stat-label">Max permitted loss <Info size={12} /></span>
                    <span className="stat-val">$20,100.29</span>
                </div>
                <div className="loss-stat-box">
                    <span className="stat-label">Today's profit <Info size={12} /></span>
                    <span className="stat-val">$20.73</span>
                </div>
            </div>

            {/* Statistics & Daily Summary */}
            <div className="stats-daily-grid">
                <div className="card statistics-detail-card">
                    <h3>Statistics</h3>
                    <div className="detail-stats-grid">
                        <StatBox label="Equity" value="$200,205.01" />
                        <StatBox label="Balance" value="$200,000.00" />
                        <StatBox label="Win rate" value="-" />
                        <StatBox label="Average profit" value="-" />
                        <StatBox label="Average loss" value="-" />
                        <StatBox label="Number of trades" value="0" />
                        <StatBox label="Lots" value="0" />
                        <StatBox label="Sharpe Ratio" value="-" />
                        <StatBox label="Average RRR" value="-" />
                        <StatBox label="Expectancy" value="0" />
                        <StatBox label="Profit factor" value="-" />
                    </div>
                </div>

                <div className="card daily-summary-card">
                    <h3>Daily summary <Info size={14} /></h3>
                    <div className="summary-headers">
                        <span>Date</span>
                        <span>Trades</span>
                        <span>Lots</span>
                        <span>Result</span>
                    </div>
                    <div className="empty-chart-placeholder">
                        <div className="chart-skeleton"></div>
                    </div>
                </div>
            </div>

            {/* Trading Journal - Calendar */}
            <div className="card journal-card">
                <h3>Trading journal <Info size={14} /></h3>
                <div className="journal-tabs">
                    <span className="active">Daily PnL</span>
                    <span>Closed trades</span>
                    <span>Charts</span>
                </div>

                <div className="calendar-controls">
                    <button className="today-btn">Today</button>
                    <div className="month-nav">
                        <button><ChevronLeft size={16} /></button>
                        <span className="current-month">January 2025</span>
                        <button><ChevronRight size={16} /></button>
                    </div>
                    <div className="view-toggles">
                        <span>Monthly view</span>
                        <button className="toggle-view active">Balance</button>
                        <button className="toggle-view">Trading days</button>
                    </div>
                </div>

                <div className="calendar-grid">
                    <div className="cal-header">MON</div>
                    <div className="cal-header">TUE</div>
                    <div className="cal-header">WED</div>
                    <div className="cal-header">THU</div>
                    <div className="cal-header">FRI</div>
                    <div className="cal-header">SAT</div>
                    <div className="cal-header">SUN</div>

                    {/* Simplified Calendar Days */}
                    {Array.from({ length: 31 }).map((_, i) => (
                        <div key={i} className={`cal-day ${i === 6 ? 'active' : ''}`}>
                            <span className="day-num">{i + 1}</span>
                            {i === 6 && <div className="day-marker"></div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Economic Calendar Footer */}
            <div className="card full-width-card">
                <h3>Economic Calendar</h3>
                <div className="calendar-date-header">Friday 9 Jan</div>
                <table className="economic-calendar-table">
                    <thead>
                        <tr>
                            <th>Description:</th>
                            <th>Instrument:</th>
                            <th>Date:</th>
                            <th>Actual:</th>
                            <th>Forecast:</th>
                            <th>Previous:</th>
                            <th>Actions:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="desc-cell">
                                <div className="impact-bar medium"></div>
                                <div className="desc-content">
                                    <span className="event-name">PPI y/y</span>
                                    <span className="event-icon">📰</span>
                                </div>
                            </td>
                            <td><div className="currency-flag"><span className="flag-icon cny">🇨🇳</span> CNY</div></td>
                            <td><div className="date-time">08:00 9 Jan<span className="status-expired">Expired</span></div></td>
                            <td className="green">-1.9 %</td>
                            <td>-2 %</td>
                            <td>-2.2 %</td>
                            <td><Calendar size={16} className="action-icon" /></td>
                        </tr>
                        <tr>
                            <td className="desc-cell">
                                <div className="impact-bar low"></div>
                                <div className="desc-content">
                                    <span className="event-name">Leading Indicators</span>
                                </div>
                            </td>
                            <td><div className="currency-flag"><span className="flag-icon jpy">🇯🇵</span> JPY</div></td>
                            <td><div className="date-time">10:30 9 Jan<span className="status-expired">Expired</span></div></td>
                            <td className="green">110.5 %</td>
                            <td>110.4 %</td>
                            <td>110 %</td>
                            <td><Calendar size={16} className="action-icon" /></td>
                        </tr>
                        <tr>
                            <td className="desc-cell">
                                <div className="impact-bar low"></div>
                                <div className="desc-content">
                                    <span className="event-name">German Industrial Production m/m</span>
                                </div>
                            </td>
                            <td><div className="currency-flag"><span className="flag-icon eur">🇪🇺</span> EUR</div></td>
                            <td><div className="date-time">12:30 9 Jan<span className="status-expired">Expired</span></div></td>
                            <td className="red">0.8 %</td>
                            <td>-0.6 %</td>
                            <td>1.8 %</td>
                            <td><Calendar size={16} className="action-icon" /></td>
                        </tr>
                        <tr>
                            <td className="desc-cell">
                                <div className="impact-bar low"></div>
                                <div className="desc-content">
                                    <span className="event-name">French Consumer Spending m/m</span>
                                </div>
                            </td>
                            <td><div className="currency-flag"><span className="flag-icon eur">🇪🇺</span> EUR</div></td>
                            <td><div className="date-time">13:15 9 Jan<span className="status-expired">Expired</span></div></td>
                            <td className="red">-0.3 %</td>
                            <td>-0.1 %</td>
                            <td>0.4 %</td>
                            <td><Calendar size={16} className="action-icon" /></td>
                        </tr>
                        <tr>
                            <td className="desc-cell">
                                <div className="impact-bar low"></div>
                                <div className="desc-content">
                                    <span className="event-name">German Trade Balance</span>
                                </div>
                            </td>
                            <td><div className="currency-flag"><span className="flag-icon eur">🇪🇺</span> EUR</div></td>
                            <td><div className="date-time">13:30 9 Jan<span className="status-expired">Expired</span></div></td>
                            <td className="red">13.1 B</td>
                            <td>16.3 B</td>
                            <td>16.9 B</td>
                            <td><Calendar size={16} className="action-icon" /></td>
                        </tr>
                        <tr>
                            <td className="desc-cell">
                                <div className="impact-bar low"></div>
                                <div className="desc-content">
                                    <span className="event-name">Foreign Currency Reserves</span>
                                </div>
                            </td>
                            <td><div className="currency-flag"><span className="flag-icon chf">🇨🇭</span> CHF</div></td>
                            <td><div className="date-time">13:30 9 Jan<span className="status-expired">Expired</span></div></td>
                            <td className="red">725 B</td>
                            <td>-</td>
                            <td>727 B</td>
                            <td><Calendar size={16} className="action-icon" /></td>
                        </tr>
                        <tr>
                            <td className="desc-cell">
                                <div className="impact-bar low"></div>
                                <div className="desc-content">
                                    <span className="event-name">French Industrial Production m/m</span>
                                </div>
                            </td>
                            <td><div className="currency-flag"><span className="flag-icon eur">🇪🇺</span> EUR</div></td>
                            <td><div className="date-time">14:15 9 Jan<span className="status-expired">Expired</span></div></td>
                            <td className="red">-0.1 %</td>
                            <td>-0.2 %</td>
                            <td>0.2 %</td>
                            <td><Calendar size={16} className="action-icon" /></td>
                        </tr>
                        <tr>
                            <td className="desc-cell">
                                <div className="impact-bar low"></div>
                                <div className="desc-content">
                                    <span className="event-name">Unemployment Rate</span>
                                    <span className="event-icon">📰</span>
                                </div>
                            </td>
                            <td><div className="currency-flag"><span className="flag-icon chf">🇨🇭</span> CHF</div></td>
                            <td><div className="date-time">14:30 9 Jan<span className="status-expired">Expired</span></div></td>
                            <td>3 %</td>
                            <td>3 %</td>
                            <td>3 %</td>
                            <td><Calendar size={16} className="action-icon" /></td>
                        </tr>
                    </tbody>
                </table>
                <button className="show-week-calendar-btn">Show this week's Economic Calendar</button>
            </div>

            <div className="footer-disclaimer-text">
                THE VALUES IN THIS ACCOUNT METRIX ARE INFORMATIVE ONLY. REAL-TIME TRADING VALUES CAN BE SEEN IN THE TRADING PLATFORM.
            </div>

            {/* Footer */}
            <div className="metrix-footer">
                <div className="footer-links">
                    <a href="#">Cookie settings</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <p className="full-disclaimer">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation...
                </p>
                <p className="copyright">2025 © Copyright - FTMO.com Made with ❤️ for trading.</p>
            </div>
        </div>
    );
}

// Helper component for statistics boxes
function StatBox({ label, value }) {
    return (
        <div className="stat-box-detail">
            <span className="sb-label">{label} <Info size={10} className="ml-1" /></span>
            <span className="sb-value">{value}</span>
        </div>
    );
}

// Icon helper
function BarChartIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
    )
}

export default AccountMetrix;
