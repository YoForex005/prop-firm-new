import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Premium.css';
import { Info } from 'lucide-react';

function Premium() {
    const [activeTab, setActiveTab] = useState('main-info');
    const [isPrimeModalOpen, setIsPrimeModalOpen] = useState(false);
    const [isSupremeModalOpen, setIsSupremeModalOpen] = useState(false);
    const [isQuantlaneModalOpen, setIsQuantlaneModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="premium-container">
            {/* ... Existing ... */}
            <div className="premium-header">
                <div className="premium-title-section">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <h1>Premium</h1>
                </div>
                <div className="premium-tabs">
                    <button
                        className={`premium-tab ${activeTab === 'main-info' ? 'active' : ''}`}
                        onClick={() => setActiveTab('main-info')}
                    >
                        Main info
                    </button>
                    <button
                        className={`premium-tab ${activeTab === 'faq' ? 'active' : ''}`}
                        onClick={() => setActiveTab('faq')}
                    >
                        FAQ
                    </button>
                </div>
            </div>

            <div className="premium-warning">
                <Info size={20} />
                <span>
                    In order to participate, qualify for our Premium Programme, you must have at least 1 active Yo Pips Account while meeting the remaining conditions. Check the FAQ section for more details.
                </span>
                <button className="warning-cta" onClick={() => navigate('/new-challenge')}>Start Yo Pips Challenge</button>
            </div>

            <div className="premium-content">
                <h2>READY FOR THE PREMIUM PROGRAMME?</h2>
                <p className="premium-intro">
                    Welcome to our exclusive Premium Programme! At Yo Pips, we believe in rewarding our most consistent profitable traders and that's why this Premium Programme was created just for you.
                </p>
                <p className="premium-description">
                    As a top-performing trader, you will enjoy a host of exciting benefits and personalized perks designed to enhance your trading experience with us. Join us on this exclusive journey and unlock a world of privileges and exceptional treatment. <a href="#" className="learn-more">Learn more in the FAQ</a>.
                </p>

                <div className="premium-tiers">
                    {/* Prime Tier */}
                    <div className="tier-card tier-prime">
                        <div className="tier-header">
                            <div className="tier-icon-bg">
                                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                            </div>
                            <div className="tier-label">PRIME</div>
                        </div>
                        <h3 className="tier-title">Prime benefits</h3>
                        <div className="tier-benefits">
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>1 Free Challenge of same size</span>
                                <Info size={14} className="info-icon" />
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Unlocked $400k Yo Pips Challenge</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>$800k Max. Capital Allocation</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>60% Reward</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Sign up on new Yo Pips Challenges</span>
                                <Info size={14} className="info-icon" />
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>5% rollover bonus</span>
                                <Info size={14} className="info-icon" />
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Dedicated support</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Certificate of achievement</span>
                            </div>
                        </div>
                        <button className="tier-button" onClick={() => setIsPrimeModalOpen(true)}>More Details</button>
                    </div>

                    {/* Supreme Tier */}
                    <div className="tier-card tier-supreme">
                        <div className="tier-header">
                            <div className="tier-icon-bg">
                                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <div className="tier-label">SUPREME</div>
                        </div>
                        <h3 className="tier-title">Supreme benefits</h3>
                        <div className="tier-benefits">
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Prime benefits</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>$1M Max. Capital Allocation</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Invalidates reward</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>No Maximum Daily Loss</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Possible job interview at Quantlane</span>
                            </div>
                        </div>
                        <button className="tier-button" onClick={() => setIsSupremeModalOpen(true)}>More Details</button>
                    </div>

                    {/* Quantlane Tier */}
                    <div className="tier-card tier-quantlane">
                        <div className="tier-header">
                            <div className="tier-icon-bg">
                                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </div>
                            <div className="tier-label">QUANTLANE</div>
                        </div>
                        <h3 className="tier-title">Quantlane benefits</h3>
                        <div className="tier-benefits">
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>3-year contract. No fixed salary</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Performance & mindset coach</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Relocation package</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Competitive trading bonus scheme</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Part of the team</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Custom platform & tooling</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Trading station in Prague</span>
                            </div>
                            <div className="benefit-item">
                                <div className="check-icon">✓</div>
                                <span>Institutional trading conditions - spreads, liquidity, risk framework</span>
                            </div>
                        </div>
                        <button className="tier-button" onClick={() => setIsQuantlaneModalOpen(true)}>More Details</button>
                    </div>
                </div>

                <button className="start-now-button" onClick={() => navigate('/new-challenge')}>Start Now</button>

                <div className="premium-footer">
                    <div className="footer-links-premium">
                        <a href="#">Cookie settings</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                    <p className="footer-disclaimer-premium">
                        All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                    </p>
                    <div className="footer-copyright-premium">
                        2026 © Copyright - YoPips.com Made with ♥ for trading
                        <br />
                        Version: 673b1000
                    </div>
                </div>
            </div>

            {/* PRIME TRADER MODAL */}
            {isPrimeModalOpen && (
                <div className="prime-modal-overlay" onClick={() => setIsPrimeModalOpen(false)}>
                    <div className="prime-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="prime-modal-close" onClick={() => setIsPrimeModalOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="prime-modal-header-bg">
                            <div className="prime-logo-container">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                                <div className="prime-logo-text">PRIME</div>
                            </div>
                        </div>
                        <div className="prime-modal-body">
                            <h2 className="prime-modal-title">Prime Trader</h2>
                            <p className="prime-modal-desc">
                                Prime Trader is the first level in our Premium Programme. Once all the conditions are completed, your Yo Pips Account will be automatically submitted for a review. Upon completion, you will be allowed to enjoy all the benefits of the Prime Trader.
                            </p>

                            <div className="prime-sections-grid">
                                {/* Benefits - Orange */}
                                <div className="prime-benefits-section">
                                    <h3 className="modal-section-title">Prime benefits</h3>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>1x Free Yo Pips Challenge of same size</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>Unlocked $400K Yo Pips Challenge</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>$600K Max. Capital Allocation</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>90% Reward</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>10% off on new Yo Pips Challenges</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>5% rollover bonus</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>Dedicated support</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>Certificate of achievement</span>
                                    </div>
                                </div>

                                {/* Conditions - Teal */}
                                <div className="prime-conditions-section">
                                    <h3 className="modal-section-title">Prime conditions</h3>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-teal">✓</div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <span>Active Yo Pips Account</span>
                                            <Info size={16} color="#666" />
                                        </div>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-teal">✓</div>
                                        <span>No failed Yo Pips Account in the last 4 months</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-teal">✓</div>
                                        <span>Process 4 Rewards with at least 4% profit per Reward.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* SUPREME TRADER MODAL */}
            {isSupremeModalOpen && (
                <div className="prime-modal-overlay" onClick={() => setIsSupremeModalOpen(false)}>
                    <div className="prime-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="prime-modal-close" onClick={() => setIsSupremeModalOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="prime-modal-header-bg">
                            <div className="prime-logo-container">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <div className="prime-logo-text" style={{ background: 'linear-gradient(to bottom, #ffd700, #b8860b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SUPREME</div>
                            </div>
                        </div>
                        <div className="prime-modal-body">
                            <h2 className="prime-modal-title">Supreme Trader</h2>
                            <p className="prime-modal-desc">
                                Supreme Trader is the second level of the Premium Programme which will give you all of the perks as a Prime Trader along with some extra benefits. As a Supreme Trader, you will also be invited to be assessed for a job offer at our proprietary trading firm Quantlane where you will have a fixed based salary and an open door to the truly professional trading world.
                            </p>

                            <div className="prime-sections-grid">
                                {/* Benefits - Orange */}
                                <div className="prime-benefits-section">
                                    <h3 className="modal-section-title">Supreme benefits</h3>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>Prime benefits</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>$1M Max. Capital Allocation</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>Immediate reward</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>No Maximum Daily Loss</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-orange">✓</div>
                                        <span>Physical badge of achievement</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff4500' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>
                                        </div>
                                        <span>Possible job interview at Quantlane</span>
                                    </div>
                                </div>

                                {/* Conditions - Teal */}
                                <div className="prime-conditions-section">
                                    <h3 className="modal-section-title">Supreme conditions</h3>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-teal">✓</div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <span>Active $400K Yo Pips Account</span>
                                            <Info size={16} color="#666" />
                                        </div>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-teal">✓</div>
                                        <span>Prime Trader for 3 months</span>
                                    </div>
                                    <div className="modal-benefit-item">
                                        <div className="modal-check-box check-teal">✓</div>
                                        <span>Process 3 additional rewards with at least 4% profit per reward on the $400k Yo Pips Account</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* QUANTLANE TRADER MODAL */}
            {isQuantlaneModalOpen && (
                <div className="prime-modal-overlay" onClick={() => setIsQuantlaneModalOpen(false)}>
                    <div className="prime-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="prime-modal-close" onClick={() => setIsQuantlaneModalOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="prime-modal-header-bg">
                            <div className="prime-logo-container">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ff8c00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                                </svg>
                                <div className="prime-logo-text" style={{ color: 'white', fontWeight: '300', letterSpacing: '4px' }}>QUANTLANE</div>
                            </div>
                        </div>
                        <div className="prime-modal-body">
                            <h2 className="prime-modal-title">Quantlane Trader</h2>
                            <p className="prime-modal-desc">
                                The Quantlane Trader represents the pinnacle of achievement in the Yo Pips Premium Programme. This prestigious designation opens the doors to the professional trading world, signifying the trader's dedication and expertise. Achieving the Quantlane Trader is a testament to the seriousness and passion for trading, showcasing a commitment to excellence in the financial markets. <a href="#" style={{ color: '#007bff' }}>More Info.</a>
                            </p>

                            <h3 className="modal-section-title" style={{ textAlign: 'center' }}>Quantlane benefits</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
                                <div className="modal-benefit-item"> <div className="modal-check-box check-orange">✓</div> <span>2 year contract with fixed salary</span> </div>
                                <div className="modal-benefit-item"> <div className="modal-check-box check-orange">✓</div> <span>Part of the team</span> </div>
                                <div className="modal-benefit-item"> <div className="modal-check-box check-orange">✓</div> <span>Performance & mindset coach</span> </div>
                                <div className="modal-benefit-item"> <div className="modal-check-box check-orange">✓</div> <span>Custom platform & tooling</span> </div>
                                <div className="modal-benefit-item"> <div className="modal-check-box check-orange">✓</div> <span>Relocation package</span> </div>
                                <div className="modal-benefit-item"> <div className="modal-check-box check-orange">✓</div> <span>Trading station in Prague</span> </div>
                                <div className="modal-benefit-item"> <div className="modal-check-box check-orange">✓</div> <span>Competitive trading bonus scheme</span> </div>
                                <div className="modal-benefit-item"> <div className="modal-check-box check-orange">✓</div> <span>Institutional trading conditions - spreads, liquidity, risk framework</span> </div>
                            </div>

                            <h3 className="modal-section-title" style={{ textAlign: 'center' }}>Quantlane conditions</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div className="modal-benefit-item"> <div className="modal-check-box check-teal">✓</div> <span>Be a supreme trader</span> </div>
                                <div className="modal-benefit-item"> <div className="modal-check-box check-teal">✓</div> <span>Pass the assessment</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Premium;
