import React, { useEffect, useState } from 'react';

function AccountSummary() {
    const [challenge, setChallenge] = useState(null);
    const [showPasswords, setShowPasswords] = useState(false);

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
                    <p>No active account. Start a Free Trial to see your account here.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card account-summary" style={{ textAlign: 'left', padding: '24px', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ margin: 0 }}>Active Account</h3>
                <div className="status-badge" style={{
                    padding: '4px 12px',
                    borderRadius: '20px',
                    background: '#10b981',
                    color: 'white',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                }}>
                    {challenge.status}
                </div>
            </div>

            <div className="account-details">
                <div className="detail-row" style={{ marginBottom: '20px' }}>
                    <span className="label" style={{ color: '#a0a0a0', fontSize: '14px', display: 'block' }}>Balance</span>
                    <span className="value" style={{ fontSize: '28px', fontWeight: 'bold', color: '#6366f1' }}>
                        ${parseInt(challenge.balance).toLocaleString()}.00
                    </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="detail-row">
                        <span className="label" style={{ color: '#a0a0a0', fontSize: '12px', display: 'block' }}>Type</span>
                        <span className="value" style={{ fontWeight: '500' }}>{challenge.type}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label" style={{ color: '#a0a0a0', fontSize: '12px', display: 'block' }}>Platform</span>
                        <span className="value" style={{ fontWeight: '500' }}>{challenge.platform}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label" style={{ color: '#a0a0a0', fontSize: '12px', display: 'block' }}>Login</span>
                        <span className="value" style={{ fontWeight: '600', color: '#fff' }}>{challenge.login}</span>
                    </div>
                    <div className="detail-row">
                        <span className="label" style={{ color: '#a0a0a0', fontSize: '12px', display: 'block' }}>Server</span>
                        <span className="value" style={{ fontWeight: '600', color: '#fff' }}>{challenge.server}</span>
                    </div>
                </div>

                <div style={{
                    marginTop: '24px',
                    padding: '16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ fontSize: '14px', fontWeight: '600' }}>Credentials</span>
                        <button
                            onClick={() => setShowPasswords(!showPasswords)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#6366f1',
                                fontSize: '12px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            {showPasswords ? 'HIDE' : 'SHOW'}
                        </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: '#a0a0a0', fontSize: '12px' }}>Trading Password:</span>
                            <span style={{ fontWeight: '500', fontFamily: 'monospace' }}>
                                {showPasswords ? (challenge.password || 'N/A') : '••••••••'}
                            </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <span style={{ color: '#a0a0a0', fontSize: '12px' }}>Investor Password:</span>
                            <span style={{ fontWeight: '500', fontFamily: 'monospace' }}>
                                {showPasswords ? (challenge.investorPassword || 'N/A') : '••••••••'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountSummary;
