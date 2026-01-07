import React, { useEffect, useState } from 'react';

function AccountSummary() {
    const [challenge, setChallenge] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('activeChallenge');
        if (stored) {
            try {
                setChallenge(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse active challenge", e);
            }
        }
    }, []);

    if (!challenge) {
        return (
            <div className="card account-summary">
                <div className="card-content">
                    <p>No data available</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card account-summary" style={{ textAlign: 'left', padding: '20px' }}>
            <h3 style={{ marginTop: 0, marginBottom: '15px' }}>Active Challenge</h3>
            <div className="account-details">
                <div className="detail-row">
                    <span className="label">Balance:</span>
                    <span className="value" style={{ fontSize: '24px', fontWeight: 'bold' }}>${parseInt(challenge.balance).toLocaleString()}</span>
                </div>
                <div className="detail-row" style={{ marginTop: '10px' }}>
                    <span className="label">Type:</span>
                    <span className="value"> {challenge.type}</span>
                </div>
                <div className="detail-row">
                    <span className="label">Platform:</span>
                    <span className="value"> {challenge.platform}</span>
                </div>
                <div className="detail-row">
                    <span className="label">Login:</span>
                    <span className="value"> {challenge.login}</span>
                </div>
                <div className="detail-row">
                    <span className="label">Server:</span>
                    <span className="value"> {challenge.server}</span>
                </div>
                <div className="status-badge" style={{
                    marginTop: '15px',
                    display: 'inline-block',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    background: '#4caf50',
                    color: 'white',
                    fontSize: '12px'
                }}>
                    {challenge.status}
                </div>
            </div>
        </div>
    );
}

export default AccountSummary;
