import React from 'react';
import { Award } from 'lucide-react'; // Using Award for medal/ribbon icon
import './Rewards.css';

function Rewards() {
    return (
        <div className="rewards-container">
            <div className="rewards-header">
                <div className="logo-small" style={{ display: 'none' }}>P</div> {/* Placeholder if needed */}
                <h2>Rewards</h2>
            </div>

            <div className="rewards-overview">
                {/* Left Card: No Certificate */}
                <div className="reward-card certificate-card">
                    <div className="cert-icon">
                        <Award size={40} strokeWidth={1.5} />
                    </div>
                    <h3>No Certificate Available</h3>
                    <p>
                        You'll earn your payout certificate once you start receiving rewards.
                        Keep trading to unlock your achievements!
                    </p>
                </div>

                {/* Right Card: Request Reward */}
                <div className="reward-card request-card">
                    <h3>Ready to request your reward?</h3>
                    <p>
                        Please click on the request button then proceed to fill out the required information, our team will reach out to you for further advancements.
                    </p>
                    <button className="btn-request">Request Reward</button>
                </div>
            </div>

            {/* Table Headers */}
            <div className="rewards-table-header">
                <span className="table-head-item">Reference ID</span>
                <span className="table-head-item">Reward Type</span>
                <span className="table-head-item">Requested On</span>
                <span className="table-head-item">Method</span>
                <span className="table-head-item">Status</span>
                <span className="table-head-item">Amount</span>
                <span className="table-head-item">Certificate</span>
                <span className="table-head-item">Invoice</span>
            </div>
        </div>
    );
}

export default Rewards;
