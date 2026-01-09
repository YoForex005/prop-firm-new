import React, { useState } from 'react';
import { Headset, Plus, ChevronDown, Check, X, FileText, Paperclip } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Support.css';

function Support() {
    const [activeTab, setActiveTab] = useState('new-ticket');

    return (
        <div className="support-container">
            {/* Breadcrumbs */}
            <div className="support-breadcrumbs">
                <Link to="/" className="crumb-link">Trader</Link>
                <span className="crumb-sep">/</span>
                <span className="crumb-current">Support</span>
            </div>

            {/* Header */}
            <div className="support-header-card">
                <div className="header-title">
                    <Headset size={24} className="headset-icon" />
                    <h1>Customer Support</h1>
                </div>
            </div>

            {/* Opened Tickets Section */}
            <div className="tickets-section">
                <div className="section-top-row">
                    <h3>Opened tickets</h3>
                    <button className="new-ticket-btn">
                        <Plus size={16} /> New ticket
                    </button>
                </div>

                <div className="tickets-table-card">
                    <table className="tickets-table">
                        <thead>
                            <tr>
                                <th>Ticket</th>
                                <th>Subject</th>
                                <th>Created</th>
                                <th>Changed</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Empty State */}
                            <tr className="empty-row">
                                <td colSpan="6">
                                    <div className="no-tickets-state">
                                        <div className="empty-img-placeholder"></div>
                                        <span>No tickets</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Solved Tickets Section */}
            <div className="solved-section">
                <div className="solved-header">
                    <h3>Solved tickets</h3>
                    <div className="solved-count-badge">
                        0 <ChevronDown size={16} />
                    </div>
                </div>
            </div>

            {/* Open New Ticket Form */}
            <div className="new-ticket-form-section">
                <h3>Open new ticket</h3>
                <div className="form-card">
                    <div className="form-group">
                        <label>Subject</label>
                        <input type="text" className="form-input" />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea className="form-textarea" rows="6"></textarea>
                    </div>

                    <div className="form-group">
                        <label>Attachments (Optional)</label>
                        <div className="file-upload-area">
                            <button className="select-file-btn">Select file</button>
                            <span className="file-limit">Max 5.24 MB</span>
                        </div>
                    </div>

                    <button className="send-ticket-btn">Send</button>
                </div>
            </div>

            {/* Footer */}
            <div className="support-footer">
                <div className="footer-links">
                    <a href="#">Cookie settings</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <p className="footer-disclaimer">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <div className="footer-copyright">
                    2026 © Copyright - YoPips.com Made with <span className="heart">♥</span> for trading.<br />
                    Version: 673b1000
                </div>
            </div>
        </div>
    );
}

export default Support;
