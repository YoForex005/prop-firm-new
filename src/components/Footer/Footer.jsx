import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="dashboard-footer">
            <div className="footer-links">
                <span className="footer-link">Cookie settings</span>
                <span className="footer-link">Privacy policy</span>
                <span className="footer-link">Terms & Conditions</span>
            </div>

            <p className="footer-disclaimer">
                All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a
                specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of
                investment instruments. FTMO only provides services of simulated trading and educational tools for traders. The information on this site is not directed at
                residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. FTMO companies do not act as a broker and
                do not accept any deposits. The offered technical solution for the FTMO platforms and data feed is powered by Liquidity providers.
            </p>

            <div className="footer-copy">
                2026 © Copyright - FTMO.com Made with ❤️ for trading.<br />
                Version: 673b1000
            </div>
        </footer>
    );
}

export default Footer;
