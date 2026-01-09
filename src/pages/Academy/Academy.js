import React from 'react';
import './Academy.css';

function Academy() {
    return (
        <div className="academy-container">
            {/* Breadcrumbs */}
            <div className="academy-breadcrumbs">
                <span className="breadcrumb-item">Trader</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item active">Yo Pips Academy</span>
            </div>

            {/* Main Content Card */}
            <div className="academy-content-card">
                <h1 className="academy-title">Yo Pips Academy</h1>
                <p className="academy-description">
                    Learn trading knowledge from basic to advanced levels, test yourself, and move closer to trading with up to $200,000 on a Yo Pips Account.
                    Gain access to comprehensive materials, progress, take exams and receive rewards. Our Yo Pips Academy is free for everyone interested in becoming a serious trader.
                    Are you ready to become one of them?
                </p>
                <button className="academy-cta-button">Yo Pips Academy</button>
            </div>

            {/* Footer */}
            <div className="academy-footer">
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

export default Academy;
