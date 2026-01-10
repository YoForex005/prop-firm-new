import React from 'react';
import { Key, BarChart2, ChevronRight, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './AccountRow.css';
import CredentialsModal from '../Modals/CredentialsModal';

function AccountRow({ account, isHistory, isVisible, onToggle }) {
    const navigate = useNavigate();
    // Local state removed in favor of lifted state
    const [showCredentialsModal, setShowCredentialsModal] = React.useState(false);

    if (isHistory) {
        // Simple history row layout
        return (
            <div className="history-row">
                <div className="history-badges">
                    {account.tags.map((tag, index) => (
                        <span key={index} className={`badge badge-${tag.type}`}>{tag.label}</span>
                    ))}
                </div>
                <div className="history-login">
                    <span className="login-label">Login:</span>
                    <span className="login-value">{account.login}</span>
                </div>
                <div className="history-visible">
                    <span className="visible-label">Visible</span>
                    <div
                        className={`toggle-circle ${isVisible ? 'on' : 'off'}`}
                        onClick={onToggle}
                    >
                        {isVisible && <div className="toggle-dot"></div>}
                    </div>
                </div>
            </div>
        );
    }

    // Active account layout
    return (
        <div className="account-row-card">
            <div className="account-row-header">
                <div className="account-badges">
                    {account.tags.map((tag, index) => (
                        <span key={index} className={`badge badge-${tag.type}`}>{tag.label}</span>
                    ))}
                </div>
                <div className="account-visibility">
                    <span className="visible-label">Visible</span>
                    <div className={`toggle-switch ${isVisible ? 'on' : 'off'}`} onClick={onToggle}>
                        <div className="toggle-thumb"></div>
                    </div>
                </div>
            </div>

            <div className="account-login-row">
                <span className="login-label">Login:</span>
                <span className="login-value">{account.login}</span>
            </div>

            <div className="account-meta-row">
                <div className="meta-item">
                    <span className="meta-label">Balance:</span>
                    <span className="meta-value">{account.balance}</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">End:</span>
                    <span className="meta-value">{account.endDate}</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Status:</span>
                    <span className="meta-value">{account.status}</span>
                </div>
            </div>

            <div className="account-actions-row">
                <div className="progress-bar-container">
                    <div className="progress-fill" style={{ width: '15%' }}></div>
                </div>

                <button className="action-btn" onClick={() => setShowCredentialsModal(true)}>
                    <Key size={14} /> Credentials
                </button>
                <button className="action-btn" onClick={() => navigate(`/account-metrix/${account.login}`)}>
                    <BarChart2 size={14} /> Account Metrix
                </button>
                <button className="action-btn-detail" onClick={() => navigate(`/account-metrix/${account.login}`)}>
                    Detail <ChevronRight size={14} />
                </button>
            </div>

            <div className="account-stats-row">
                <div className="stat-box">
                    <div className="stat-label">
                        Today's profit <Info size={12} className="info-icon" />
                    </div>
                    <div className="stat-value">{account.todaysProfit}</div>
                </div>
                <div className="stat-box">
                    <div className="stat-label">
                        Equity <Info size={12} className="info-icon" />
                    </div>
                    <div className="stat-value">{account.equity}</div>
                </div>
                <div className="stat-box">
                    <div className="stat-label">
                        Unrealized PnL <Info size={12} className="info-icon" />
                    </div>
                    <div className="stat-value">{account.unrealizedPnL}</div>
                </div>
            </div>

            {/* Credentials Modal */}
            {showCredentialsModal && (
                <CredentialsModal
                    onClose={() => setShowCredentialsModal(false)}
                    credentials={account}
                />
            )}
        </div>
    );
}

export default AccountRow;
