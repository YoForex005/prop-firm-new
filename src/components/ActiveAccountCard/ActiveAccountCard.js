import React from 'react';
import { Key, BarChart2, Briefcase, ChevronRight, Info } from 'lucide-react';
import './ActiveAccountCard.css';

function ActiveAccountCard({ account }) {
    if (!account) return null;

    const isProfit = parseFloat(account.todayProfit || -17.65) > 0;
    const isUnrealizedProfit = parseFloat(account.unrealizedPnL || -17.65) > 0;

    return (
        <div className="account-card-container">
            <div className="section-header">
                <h2>Active accounts</h2>
                <div className="visible-toggle">
                    <span>Show only visible</span>
                    <div style={{
                        width: '32px',
                        height: '18px',
                        background: '#e2e8f0',
                        borderRadius: '20px',
                        position: 'relative'
                    }}>
                        <div style={{
                            width: '14px',
                            height: '14px',
                            background: 'white',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '2px',
                            right: '2px'
                        }}></div>
                    </div>
                </div>
            </div>

            <div className="card account-card">
                <div className="account-card-header">
                    <div>
                        <div className="header-badges">
                            <span className="badge badge-ongoing">Ongoing</span>
                            <span className="badge badge-free">Free trial</span>
                        </div>
                        <div className="login-info">
                            Login: <span className="login-number">{account.login}</span>
                        </div>
                    </div>

                    <div className="card-actions-right">
                        <div className="visibility-status">
                            <span>Visible</span>
                            <div style={{
                                width: '36px',
                                height: '20px',
                                background: '#0084ff',
                                borderRadius: '20px',
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: '16px',
                                    height: '16px',
                                    background: 'white',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    top: '2px',
                                    right: '2px'
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="account-main-details">
                    <div className="detail-item">
                        <span className="detail-label">Balance:</span>
                        <span className="detail-value">${parseFloat(account.balance || 199999.97).toLocaleString()}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">End:</span>
                        <span className="detail-value">{account.endDate || '21 Jan 2026'}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Status:</span>
                        <span className="detail-value" style={{ color: '#10b981' }}>{account.status || 'Active'}</span>
                    </div>
                </div>

                <div className="progress-section">
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: '45%' }}></div>
                    </div>

                    <div className="interaction-btns">
                        <button className="btn-icon-text">
                            <Key size={14} />
                            <span>Credentials</span>
                        </button>
                        <button className="btn-icon-text">
                            <Briefcase size={14} />
                            <span>Account Metrix</span>
                        </button>
                    </div>

                    <button className="btn-detail">
                        <span>Detail</span>
                        <ChevronRight size={16} />
                    </button>
                </div>

                <div className="stats-grid">
                    <div className={`stat-box ${isProfit ? 'positive' : ''}`}>
                        <div className="stat-header">
                            <span>Today's profit</span>
                            <Info size={12} />
                        </div>
                        <div className={`stat-value ${isProfit ? 'positive' : 'negative'}`}>
                            {isProfit ? '+' : ''}${account.todayProfit || '-17.65'}
                        </div>
                    </div>

                    <div className="stat-box neutral">
                        <div className="stat-header">
                            <span>Equity</span>
                            <Info size={12} />
                        </div>
                        <div className="stat-value" style={{ color: '#ef4444' }}>
                            ${parseFloat(account.equity || 199982.32).toLocaleString()}
                        </div>
                    </div>

                    <div className={`stat-box ${isUnrealizedProfit ? 'positive' : ''}`}>
                        <div className="stat-header">
                            <span>Unrealized PnL</span>
                            <Info size={12} />
                        </div>
                        <div className={`stat-value ${isUnrealizedProfit ? 'positive' : 'negative'}`}>
                            {isUnrealizedProfit ? '+' : ''}${account.unrealizedPnL || '-17.65'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiveAccountCard;
