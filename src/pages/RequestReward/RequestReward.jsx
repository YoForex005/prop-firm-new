import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import './RequestReward.css';

function RequestReward() {
    const navigate = useNavigate();

    return (
        <div className="request-reward-container">
            <div className="page-header">
                <div className="fp-logo-text">
                    <span className="fp-brand">YoPips</span>
                    <span className="fp-divider">|</span>
                    <span className="fp-page-title">Request A Reward</span>
                </div>
            </div>

            <div className="empty-state-container">
                <div className="icon-circle">
                    <Calendar size={32} strokeWidth={1.5} />
                </div>
                <h2>No Eligible Accounts</h2>
                <p>
                    You don't have any accounts eligible for payout yet.
                    Keep trading and meet your targets to become eligible.
                </p>
                <div className="action-buttons">
                    <button
                        className="btn-back"
                        onClick={() => navigate('/payouts')}
                    >
                        ← Back to Payouts
                    </button>
                    <button
                        className="btn-view-accounts"
                        onClick={() => navigate('/accounts')}
                    >
                        View Accounts
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RequestReward;
