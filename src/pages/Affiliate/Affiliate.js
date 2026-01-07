import React from 'react';
import { Copy, Info, Calendar, TrendingUp } from 'lucide-react';
/* Use placeholder icon for chart if needed */
import './Affiliate.css';

function Affiliate() {
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
                        <input type="text" value="https://app.fundingpips.com/register?ref=4D10C1E0" readOnly />
                        <button className="copy-btn"><Copy size={16} /></button>
                    </div>
                    <div className="input-group input-group-short">
                        <input type="text" value="4D10C1E0" readOnly />
                        <button className="copy-btn"><Copy size={16} /></button>
                    </div>
                </div>

                <div className="commission-info">
                    <div className="info-text">
                        <Info size={16} />
                        Commissions are credited when referred users complete qualifying purchases.
                    </div>
                    <button className="btn-visit">Visit Affiliate Page</button>
                </div>
            </div>

            <div className="stats-container">
                <div className="chart-area">
                    <div className="tabs-row">
                        <button className="tab-btn active">Overview</button>
                        <button className="tab-btn">Daily</button>
                    </div>

                    <div className="chart-header">
                        <h3>Earnings</h3>
                        <div className="chart-controls">
                            <button className="control-btn"><Calendar size={14} /> Pick date range</button>
                            <div className="toggle-group">
                                <button className="toggle-btn active">Cumulative</button>
                                <button className="toggle-btn">Daily</button>
                            </div>
                        </div>
                    </div>

                    <div className="chart-placeholder">
                        <TrendingUp size={32} style={{ opacity: 0.3 }} />
                        <h4>No referral data available</h4>
                        <p>Start referring users to see your earnings history</p>
                    </div>
                </div>

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
            </div>

            <div style={{ textAlign: 'center', color: '#888', fontSize: '12px', marginTop: '20px' }}>
                No referrals found<br />Try adjusting the date range.
            </div>
        </div>
    );
}

export default Affiliate;
