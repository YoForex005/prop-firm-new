import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleAuthMock() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading check
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleAccountSelect = (email) => {
        // Mark as authenticated with Google
        localStorage.setItem('has_google_login', 'true');
        // Simulate network delay
        setTimeout(() => {
            navigate('/');
        }, 800);
    };

    if (loading) return null;

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontFamily: 'Roboto, arial, sans-serif',
            backgroundColor: '#fff',
            color: '#202124'
        }}>
            <div style={{
                border: '1px solid #dadce0',
                borderRadius: '8px',
                padding: '48px 40px 36px',
                width: '450px',
                textAlign: 'center'
            }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    height="24"
                    style={{ marginBottom: '16px' }}
                />
                <h1 style={{
                    fontSize: '24px',
                    fontWeight: '400',
                    margin: '0 0 16px'
                }}>
                    Sign in
                </h1>
                <p style={{ fontSize: '16px', margin: '0 0 40px' }}>
                    to continue to YoPips
                </p>

                {/* Mock Account List */}
                <div style={{ textAlign: 'left' }}>
                    <div
                        onClick={() => handleAccountSelect('user@example.com')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 0',
                            borderTop: '1px solid #dadce0',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                    >
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: '#8e24aa',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '12px',
                            fontSize: '14px'
                        }}>Y</div>
                        <div>
                            <div style={{ fontWeight: '500', fontSize: '14px' }}>Yo Forex</div>
                            <div style={{ color: '#5f6368', fontSize: '12px' }}>yoforex@example.com</div>
                        </div>
                    </div>

                    <div
                        onClick={() => handleAccountSelect('another@example.com')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 0',
                            borderTop: '1px solid #dadce0',
                            cursor: 'pointer'
                        }}
                    >
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: '#039be5',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: '12px',
                            fontSize: '14px'
                        }}>A</div>
                        <div>
                            <div style={{ fontWeight: '500', fontSize: '14px' }}>Another User</div>
                            <div style={{ color: '#5f6368', fontSize: '12px' }}>another.user@example.com</div>
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '12px 0',
                            borderTop: '1px solid #dadce0',
                            cursor: 'pointer',
                            color: '#5f6368',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}
                    >
                        <div style={{ marginRight: '16px' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#5f6368"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>
                        </div>
                        Use another account
                    </div>
                </div>

                <p style={{ fontSize: '14px', color: '#5f6368', marginTop: '40px' }}>
                    To continue, Google will share your name, email address, and language preference with YoPips.
                </p>
            </div>
        </div>
    );
}

export default GoogleAuthMock;
