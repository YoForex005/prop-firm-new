import React, { useState } from 'react';
import { Download, X, FileText } from 'lucide-react';
import './Downloads.css';

function Downloads() {
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    return (
        <div className="downloads-container">
            {/* Breadcrumbs */}
            <div className="downloads-breadcrumbs">
                <span className="breadcrumb-item">Trader</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item">Downloads</span>
            </div>

            {/* MetaTrader Extension Banner */}
            <div className="mt-extension-banner">
                <div className="banner-icon">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E" alt="Extension" />
                </div>
                <div className="banner-content">
                    <h2>🔥 Get the extension for your MetaTrader 4 & 5</h2>
                    <p>The App Suite offers over 35 powerful tools to help you analyse market trends, optimise trading strategies, and manage your trades efficiently.</p>
                    <div className="banner-buttons">
                        <button className="download-btn-white" onClick={() => setShowDownloadModal(true)}>
                            Download now ⬇️
                        </button>
                        <button className="how-it-works-btn">How it works?</button>
                    </div>
                </div>
            </div>

            {/* Downloads Section */}
            <div className="downloads-section">
                <div className="section-header">
                    <Download size={24} />
                    <h2>Downloads</h2>
                </div>

                {/* EAs and Indicators */}
                <div className="downloads-subsection">
                    <h3>EAs and Indicators</h3>
                    <table className="downloads-table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>File</th>
                                <th>More Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>App Suite MT4 extension (Win)</td>
                                <td>
                                    <a href="#" className="file-link">App Suite MT4 extension (Win)</a>
                                </td>
                                <td>
                                    <a href="#" className="info-link">More Info</a>
                                </td>
                            </tr>
                            <tr>
                                <td>App Suite MT5 extension (Win)</td>
                                <td>
                                    <a href="#" className="file-link">App Suite MT5 extension (Win)</a>
                                </td>
                                <td>
                                    <a href="#" className="info-link">More Info</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Chrome Browser Note */}
                <div className="chrome-note">
                    If you have troubles downloading .ex4 file, please use Google Chrome browser.
                </div>

                {/* Platforms */}
                <div className="platforms-subsection">
                    <h3>Platforms</h3>

                    <div className="platform-item">
                        <div className="platform-logo-container">
                            <svg width="180" height="40" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
                                {/* MetaTrader icon - green and blue overlapping circles */}
                                <circle cx="16" cy="20" r="12" fill="#4CAF50" opacity="0.8" />
                                <circle cx="24" cy="16" r="10" fill="#2196F3" opacity="0.8" />
                                {/* MetaTrader text */}
                                <text x="40" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="#6b7280">MetaTrader</text>
                                {/* Number 4 in orange */}
                                <text x="148" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#FF9800">4</text>
                            </svg>
                        </div>
                        <button className="supported-platforms-btn">Supported platforms</button>
                    </div>

                    <div className="platform-item">
                        <div className="platform-logo-container">
                            <svg width="180" height="40" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
                                {/* MetaTrader icon - green and blue overlapping circles */}
                                <circle cx="16" cy="20" r="12" fill="#4CAF50" opacity="0.8" />
                                <circle cx="24" cy="16" r="10" fill="#2196F3" opacity="0.8" />
                                {/* MetaTrader text */}
                                <text x="40" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="#6b7280">MetaTrader</text>
                                {/* Number 5 in orange */}
                                <text x="148" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#FF9800">5</text>
                            </svg>
                        </div>
                        <button className="supported-platforms-btn">Supported platforms</button>
                    </div>

                    <div className="platform-item">
                        <div className="platform-logo-container">
                            <svg width="140" height="40" viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
                                {/* cTrader logo */}
                                <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#E53935">c</text>
                                <text x="18" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="600" fill="#6b7280">Trader</text>
                            </svg>
                        </div>
                        <button className="supported-platforms-btn">Supported platforms</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="downloads-footer">
                <div className="footer-links">
                    <a href="#">Cookie settings</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms & Conditions</a>
                </div>
                <p className="footer-disclaimer">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <p className="footer-copyright">
                    2025 © Copyright - YoPips.com Made with ❤️ for trading.<br />
                    Version: 6.713b1010
                </p>
            </div>

            {/* Download Extension Modal */}
            {showDownloadModal && (
                <div className="download-modal-overlay" onClick={() => setShowDownloadModal(false)}>
                    <div className="download-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Extension for your MetaTrader 4 & 5</h2>
                            <button className="modal-close-btn" onClick={() => setShowDownloadModal(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="download-options">
                                <div className="download-option">
                                    <h4>MetaTrader 4</h4>
                                    <div className="download-link">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="18" height="18" fill="#5a6c7d" opacity="0.2" />
                                            <rect x="6" y="6" width="12" height="12" fill="#5a6c7d" opacity="0.3" />
                                            <rect x="8" y="8" width="8" height="8" fill="#5a6c7d" />
                                        </svg>
                                        <a href="#" className="download-now-link">Download now</a>
                                    </div>
                                </div>

                                <div className="download-option">
                                    <h4>MetaTrader 5</h4>
                                    <div className="download-link">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="18" height="18" fill="#5a6c7d" opacity="0.2" />
                                            <rect x="6" y="6" width="12" height="12" fill="#5a6c7d" opacity="0.3" />
                                            <rect x="8" y="8" width="8" height="8" fill="#5a6c7d" />
                                        </svg>
                                        <a href="#" className="download-now-link">Download now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="how-it-works-section">
                                <h4>How it works?</h4>
                                <div className="learn-more-link">
                                    <FileText size={20} />
                                    <a href="#">Learn more</a>
                                </div>
                            </div>

                            <div className="windows-notice">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="16" height="16" rx="2" fill="#00b8d4" />
                                    <path d="M8 4V12M4 8H12" stroke="white" strokeWidth="2" />
                                </svg>
                                <span>Available only for Windows.</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Downloads;
