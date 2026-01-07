import React from 'react';
import { Rocket, Ticket, FileText, Briefcase, ChevronDown, Rocket as RocketIcon } from 'lucide-react';
import './Accounts.css';

function Accounts() {
    return (
        <div className="accounts-container">
            {/* Inner Sidebar */}
            <div className="accounts-sidebar">
                <div className="profile-mini">
                    <div className="profile-avatar">Y</div>
                    <div className="profile-name">Hey, Yo</div>
                    {/* Collapse icon placeholder */}
                    <div className="collapse-icon">{'<'}</div>
                </div>

                <div className="action-buttons">
                    <button className="btn-blue-block">
                        <Rocket size={18} /> BUY CHALLENGE
                    </button>
                    <button className="btn-prize-block">
                        <Ticket size={18} /> $50,000 CASH PRIZE
                    </button>
                </div>

                <div className="filters-row">
                    <button className="filter-chip">All Types <ChevronDown size={12} /></button>
                    <button className="filter-chip">All States <ChevronDown size={12} /></button>
                    <button className="filter-chip">All Phases <ChevronDown size={12} /></button>
                </div>

                <div className="view-toggles">
                    {/* Placeholder icons for list/grid toggle */}
                    <div className="view-toggle-btn"><span>=</span></div>
                    <div className="view-toggle-btn"><span>::</span></div>
                </div>

                <div className="empty-list-state">
                    <FileText size={48} className="empty-icon" />
                    <p>No accounts match your filters</p>
                    <p style={{ fontSize: '11px' }}>Try selecting different filters to find your accounts.</p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="accounts-main">
                <div className="empty-selection-card">
                    <div className="selection-icon">
                        <Briefcase size={32} />
                    </div>
                    <h3>Select an Account to View Details</h3>
                    <p>Choose a trading account from the list to see its detailed information and performance metrics.</p>

                    <div className="simulated-box">
                        <span className="simulated-text">Don't have an account yet?<br />Trade up to $300,000 in simulated capital.</span>
                        <button className="btn-buy-small">
                            <RocketIcon size={16} /> BUY CHALLENGE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accounts;
