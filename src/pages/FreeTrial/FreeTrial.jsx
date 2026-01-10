import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Home, Info } from 'lucide-react';
import './FreeTrial.css';

function FreeTrial() {
    const navigate = useNavigate();

    return (
        <div className="free-trial-container">
            {/* Breadcrumbs */}
            <div className="ft-breadcrumbs">
                <Home size={14} className="home-icon" />
                <span className="separator">/</span>
                <span>Trader</span>
                <span className="separator">/</span>
                <span className="current">Free Trial</span>
            </div>

            <div className="free-trial-content-wrapper">
                {/* Blurred Background Content (Mocking the underlying form) */}
                <div className="blurred-background">
                    <div className="blur-header">
                        <h1>Start Free Trial</h1>
                        <p>Use this opportunity to get the feel of our Trading Objectives without risking anything. Be disciplined and manage your risk carefully.</p>
                        <p>Our 14-day Free Trial is a shortened version of the Yo Pips Challenge so you practice trading with us.</p>
                    </div>

                    <div className="blur-grid">
                        <div className="blur-card">
                            <h3>Account Balance</h3>
                            <div className="blur-line short"></div>
                            <div className="blur-line long"></div>
                        </div>
                        <div className="blur-card">
                            <h3>Summary</h3>
                            <div className="blur-summary-row">
                                <div className="blur-icon"></div>
                                <div>
                                    <div className="blur-text-bold">Free Trial</div>
                                    <div className="blur-text">$200,000 account</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active Trial Overlay */}
                <div className="active-trial-overlay">
                    <div className="lock-icon-container">
                        <Lock size={40} color="#6c757d" />
                    </div>
                    <h2>Active Free Trial Detected</h2>
                    <p>
                        You currently have an active Free Trial (Login: 1512264795). To start a new one, please end your current trial first.
                    </p>
                    <a href="#" className="learn-more-link">Learn more about managing Free Trial settings here.</a>

                    <button className="back-btn" onClick={() => navigate('/')}>
                        Back to Accounts Overview
                    </button>
                </div>
            </div>

            <div className="ft-footer">
                <div className="footer-links">
                    <a href="#">Cookie settings</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <p className="full-disclaimer">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <p className="copyright">2026 © Copyright - YoPips.com Made with ❤️ for trading.</p>
                <p className="version">Version: 673b1000</p>
            </div>
        </div>
    );
}

export default FreeTrial;
