import React from 'react';
import { Award } from 'lucide-react';
import './Payouts.css';

function Payouts() {
    return (
        <div className="payouts-container">
            <div className="payouts-header">
                <div className="fp-logo-text">
                    <span className="fp-brand">YoPips</span>
                    <span className="fp-divider">|</span>
                    <span className="fp-page-title">Rewards</span>
                </div>
            </div>

            <div className="payouts-cards-row">
                {/* Left Card: Certificate Status */}
                <div className="payout-card certificate-card">
                    <div className="certificate-content">
                        <div className="certificate-icon-wrapper">
                            <Award size={48} strokeWidth={1.5} />
                        </div>
                        <h3>No Certificate Available</h3>
                        <p>You'll earn your payout certificate once you start receiving rewards.</p>
                        <p className="sub-text">Keep trading to unlock your achievements!</p>
                    </div>
                </div>

                {/* Right Card: Request Reward */}
                <div className="payout-card request-card">
                    <div className="request-content">
                        <h3>Ready to request your reward?</h3>
                        <p>Please click on the request button then proceed to fill out the required information, our team will reach out to you for further advancements.</p>
                        <button
                            className="request-btn"
                            onClick={() => window.location.href = '/request-reward'}
                        >
                            Request Reward
                        </button>
                    </div>
                </div>
            </div>

            {/* Table Header Row */}
            <div className="payouts-table-header">
                <div className="th-item">Reference ID</div>
                <div className="th-item">Reward Type</div>
                <div className="th-item">Requested On</div>
                <div className="th-item">Method</div>
                <div className="th-item">Status</div>
                <div className="th-item">Amount</div>
                <div className="th-item">Certificate</div>
                <div className="th-item">Invoice</div>
            </div>
        </div>
    );
}

export default Payouts;
