import React from 'react';
import { CreditCard, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import FilterCheck from './FilterCheck';
import './Billing.css';

function Billing() {
    const [isFilterOpen, setIsFilterOpen] = React.useState(false);
    const [filters, setFilters] = React.useState({
        waiting: true,
        paid: true,
        refunded: true,
        free: true
    });

    const toggleFilter = (key) => {
        setFilters(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="billing-container">
            {/* Header */}
            <div className="billing-header">
                <div className="header-title">
                    <CreditCard size={24} className="header-icon" />
                    <h1>Billing</h1>
                </div>
                <div className="filter-wrapper">
                    <button
                        className={`filter-btn ${isFilterOpen ? 'active' : ''}`}
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        <Filter size={16} />
                        Filter
                    </button>

                    {isFilterOpen && (
                        <div className="filter-popup">
                            <div className="filter-header">
                                Status:
                            </div>
                            <div className="filter-options">
                                <label className="filter-option" onClick={() => toggleFilter('waiting')}>
                                    <span>Waiting</span>
                                    <div className={`checkbox-custom ${filters.waiting ? 'checked' : ''}`}>
                                        {filters.waiting && <FilterCheck />}
                                    </div>
                                </label>
                                <label className="filter-option" onClick={() => toggleFilter('paid')}>
                                    <span>Paid</span>
                                    <div className={`checkbox-custom ${filters.paid ? 'checked' : ''}`}>
                                        {filters.paid && <FilterCheck />}
                                    </div>
                                </label>
                                <label className="filter-option" onClick={() => toggleFilter('refunded')}>
                                    <span>Refunded</span>
                                    <div className={`checkbox-custom ${filters.refunded ? 'checked' : ''}`}>
                                        {filters.refunded && <FilterCheck />}
                                    </div>
                                </label>
                                <label className="filter-option" onClick={() => toggleFilter('free')}>
                                    <span>Free</span>
                                    <div className={`checkbox-custom ${filters.free ? 'checked' : ''}`}>
                                        {filters.free && <FilterCheck />}
                                    </div>
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Billing Table Card */}
            <div className="billing-card">
                <div className="table-responsive">
                    <table className="billing-table">
                        <thead>
                            <tr>
                                <th>Yo Pips Challenge</th>
                                <th>Dates</th>
                                <th>Amount to pay</th>
                                <th>Order</th>
                                <th>Account</th>
                                <th>Status</th>
                                <th>Invoice & Documents</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Empty State Row */}
                            <tr className="empty-row">
                                <td colSpan="7">
                                    <div className="empty-state">
                                        <div className="docs-illustration">
                                            <div className="doc-card back-2"></div>
                                            <div className="doc-card back-1"></div>
                                            <div className="doc-card front">
                                                <div className="doc-line short"></div>
                                                <div className="doc-line long"></div>
                                                <div className="doc-block"></div>
                                            </div>
                                        </div>
                                        <p>No orders or transactions are available</p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer */}
            <div className="billing-footer">
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

export default Billing;
