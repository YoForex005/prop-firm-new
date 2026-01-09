import React from 'react';
import { useNavigate } from 'react-router-dom';
import './YoPipsTraders.css';
import { Info } from 'lucide-react';

function YoPipsTraders() {
    const navigate = useNavigate();
    return (
        <div className="yopips-traders-container">
            {/* Breadcrumbs */}
            <div className="traders-breadcrumbs">
                <span className="breadcrumb-item">Trader</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item active">Yo Pips Traders</span>
            </div>

            {/* Warning Banner */}
            <div className="traders-warning-banner">
                <Info size={20} />
                <span>
                    Sorry, this page is accessible only to Yo Pips Traders (Yo Pips Traders are those who already passed the Evaluation Process and are managing an Yo Pips Account).
                </span>
            </div>

            {/* Hero Section */}
            <div className="traders-hero-section">
                <div className="traders-hero-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>

                <h1 className="traders-hero-title">Ready to become a Yo Pips Trader?</h1>

                {/* Phone Mockups */}
                <div className="traders-phones">
                    <div className="phone phone-left">
                        <div className="phone-frame">
                            <div className="phone-screen"></div>
                        </div>
                    </div>
                    <div className="phone phone-right">
                        <div className="phone-frame">
                            <div className="phone-screen"></div>
                        </div>
                    </div>
                </div>

                <div className="traders-account-amount">
                    YO PIPS ACCOUNT UP TO <span className="amount-highlight">$200,000</span>
                </div>

                {/* Features Grid */}
                <div className="traders-features-grid">
                    <div className="feature-item">
                        <svg className="feature-check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Up to 90% Reward for traders</span>
                    </div>
                    <div className="feature-item">
                        <svg className="feature-check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Unlimited trading period</span>
                    </div>
                    <div className="feature-item">
                        <svg className="feature-check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Custom Trading Apps</span>
                    </div>
                    <div className="feature-item">
                        <svg className="feature-check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Performance coach</span>
                    </div>
                    <div className="feature-item">
                        <svg className="feature-check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Account Analysis</span>
                    </div>
                    <div className="feature-item">
                        <svg className="feature-check" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Scaling Plan</span>
                    </div>
                </div>

                <button className="traders-cta-button" onClick={() => navigate('/new-challenge')}>Accept Yo Pips Challenge</button>
            </div>

            {/* Footer */}
            <div className="traders-footer">
                <div className="footer-links-row">
                    <a href="#">Cookie settings</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <p className="footer-text">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a
                    specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of
                    investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at
                    residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker
                    and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <div className="footer-copyright-row">
                    2026 © Copyright - YoPips.com Made with ♥ for trading.
                    <br />
                    Version: 673b1000
                </div>
            </div>
        </div>
    );
}

export default YoPipsTraders;
