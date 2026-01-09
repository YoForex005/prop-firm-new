import React, { useState } from 'react';
import { Info } from 'lucide-react';
import './Certificates.css';

function Certificates() {
    const [activeFilter, setActiveFilter] = useState('all');

    const certificates = [
        { id: 1, type: 'Supreme Trader', level: 'Yo Pips', status: 'Certified', color: '#6b7280' },
        { id: 2, type: 'Prime Trader', level: 'Yo Pips', status: 'Certified', color: '#6b7280' },
        { id: 3, type: 'Max Allocation', level: 'Yo Pips', amount: '', color: '#87CEEB' },
        { id: 4, type: 'Paywall Rewards', level: 'Yo Pips', amount: '$50,000.00', color: '#8B4789' },
        { id: 5, type: 'Overall Rewards', level: 'Yo Pips', amount: '$20,000.00', color: '#D4AF37' },
        { id: 6, type: 'Paywell Rewards', level: 'Yo Pips', amount: '$10,000.00', color: '#6b7280' },
        { id: 7, type: 'Overall Rewards', level: 'Yo Pips', amount: '$5,000.00', color: '#8B4789' },
        { id: 8, type: 'Paywell', level: 'Yo Pips', amount: '$100.00', color: '#6b7280' },
        { id: 9, type: 'Passed', level: 'FTMO Challenge', subtitle: 'Yo Pips', color: '#6b7280' },
        { id: 10, type: 'Passed', level: 'Verification', subtitle: 'Yo Pips', color: '#6b7280' },
        { id: 11, type: 'FTMO Academy', level: 'Yo Pips', percent: '0%', color: '#6b7280' }
    ];

    return (
        <div className="certificates-page-container">
            {/* Breadcrumbs */}
            <div className="certificates-breadcrumbs">
                <span className="breadcrumb-item">Trader</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item">Certificates</span>
            </div>

            {/* Header with Filters */}
            <div className="certificates-header-section">
                <h2>Certificate</h2>
                <div className="certificate-filters">
                    <button
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All certificates
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'challenge' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('challenge')}
                    >
                        Challenge
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'payout' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('payout')}
                    >
                        Payout
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'other' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('other')}
                    >
                        Other
                    </button>
                </div>
            </div>

            {/* Info Notice */}
            <div className="certificates-info-notice">
                <Info size={16} />
                <p>
                    All your certificates are locked for 14 days after they have been issued.{' '}
                    <a href="#" className="learn-more-link">Learn more</a>
                </p>
            </div>

            {/* Certificates Grid */}
            <div className="certificates-grid">
                {certificates.map((cert) => (
                    <div key={cert.id} className="certificate-card">
                        <div className="certificate-badge" style={{ backgroundColor: cert.color }}>
                            {cert.type === 'Supreme Trader' || cert.type === 'Prime Trader' ? 'Certified' : ''}
                        </div>
                        <div className="certificate-content">
                            <div className="cert-type">{cert.type}</div>
                            <div className="cert-level">{cert.level}</div>
                            {cert.subtitle && <div className="cert-subtitle">{cert.subtitle}</div>}
                            {cert.amount && <div className="cert-amount">{cert.amount}</div>}
                            {cert.percent && <div className="cert-percent">{cert.percent}</div>}
                            {cert.type === 'FTMO Academy' && (
                                <div className="academy-icons">
                                    <span>📚</span>
                                    <span>📊</span>
                                    <span>💡</span>
                                    <span>🎯</span>
                                </div>
                            )}
                            <div className="cert-logo-placeholder">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="white" opacity="0.3">
                                    <rect width="40" height="40" rx="4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="certificates-footer">
                <div className="footer-links">
                    <a href="#">Cookie settings</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <p className="footer-disclaimer">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation. Yo Pips only provides services of simulated trading and educational tools for traders.
                </p>
                <p className="footer-copyright">
                    2025 © Copyright - YoPips.com Made with ❤️ for trading.<br />
                    Version: 6.713b1010
                </p>
            </div>
        </div>
    );
}

export default Certificates;
