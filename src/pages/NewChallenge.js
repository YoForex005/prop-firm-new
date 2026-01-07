import React, { useState, useEffect } from 'react';
import { Sliders } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function NewChallenge() {
    const location = useLocation();
    const [step, setStep] = useState('two-step');
    const [model, setModel] = useState('funding-pips');
    const [size, setSize] = useState('100000');
    const [platform, setPlatform] = useState('mt5');

    useEffect(() => {
        if (location.state?.mode === 'free-trial') {
            setStep('free-trial');
        }
    }, [location.state]);

    const prices = {
        '5000': 32,
        '10000': 60,
        '25000': 139,
        '50000': 239,
        '100000': 529
    };

    const currentPrice = prices[size] || 0;

    return (
        <div className="new-challenge-container">
            <div className="page-header">
                <div className="logo-small">P</div>{/* Placeholder */}
                <h2>New Challenge</h2>
            </div>

            <div className="challenge-layout">
                <div className="challenge-config">
                    {/* Challenge Type */}
                    <div className="config-section">
                        <h3>Challenge Type</h3>
                        <p className="section-desc">Choose the type of challenge you want to take</p>
                        <div className="radio-group-row">
                            <label className={`radio-card ${step === 'one-step' ? 'active' : ''}`} onClick={() => setStep('one-step')}>
                                <div className="radio-circle">{step === 'one-step' && <div className="dot"></div>}</div>
                                <span>One Step</span>
                            </label>
                            <label className={`radio-card ${step === 'two-step' ? 'active' : ''}`} onClick={() => setStep('two-step')}>
                                <div className="radio-circle">{step === 'two-step' && <div className="dot"></div>}</div>
                                <span>Two Step</span>
                            </label>
                            <label className={`radio-card ${step === 'zero' ? 'active' : ''}`} onClick={() => setStep('zero')}>
                                <div className="radio-circle">{step === 'zero' && <div className="dot"></div>}</div>
                                <span>Zero</span>
                            </label>
                            <label className={`radio-card ${step === 'free-trial' ? 'active' : ''}`} onClick={() => setStep('free-trial')}>
                                <div className="radio-circle">{step === 'free-trial' && <div className="dot"></div>}</div>
                                <span>Free Trial</span>
                            </label>
                        </div>
                    </div>

                    {/* Model */}
                    <div className="config-section">
                        <h3>Model</h3>
                        <p className="section-desc">Choose the trading model</p>
                        <div className="radio-group-row">
                            <label className={`radio-card ${model === 'funding-pips' ? 'active' : ''}`} onClick={() => setModel('funding-pips')}>
                                <div className="radio-circle">{model === 'funding-pips' && <div className="dot"></div>}</div>
                                <span>FundingPips</span>
                            </label>
                            <label className={`radio-card ${model === 'funding-pips-pro' ? 'active' : ''}`} onClick={() => setModel('funding-pips-pro')}>
                                <div className="radio-circle">{model === 'funding-pips-pro' && <div className="dot"></div>}</div>
                                <span>FundingPips Pro</span>
                            </label>
                        </div>
                    </div>

                    {/* Customise Trading Rules */}
                    <div className="config-section highlight-section">
                        <div className="custom-rules-header">
                            <div className="icon-wrapper"><Sliders size={18} /></div>
                            <div>
                                <h3>Customise Trading Rules</h3>
                                <p>Adjust your challenge parameters to match your trading style</p>
                            </div>
                        </div>

                        <div className="rules-options">
                            <div className="rule-row">
                                <div>
                                    <h4>Profit Target</h4>
                                    <p>Choose options for profit target</p>
                                </div>
                                <div className="toggle-group">
                                    <button className="toggle-btn active"><div className="dot"></div> 8% <span className="tag">Default</span></button>
                                    <button className="toggle-btn"><div className="circle-outline"></div> 10% <span className="price-tag">-$40.00</span></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Account Size */}
                    <div className="config-section">
                        <h3>Account Size</h3>
                        <p className="section-desc">Choose your preferred account size</p>
                        <div className="size-grid">
                            {['5000', '10000', '25000', '50000', '100000'].map(val => (
                                <label key={val} className={`radio-card size-card ${size === val ? 'active' : ''}`} onClick={() => setSize(val)}>
                                    <div className="radio-circle">{size === val && <div className="dot"></div>}</div>
                                    <span>${parseInt(val).toLocaleString()}.00</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Trading Platform */}
                    <div className="config-section">
                        <h3>Trading Platform</h3>
                        <p className="section-desc">Choose your preferred trading platform</p>
                        <div className="radio-group-row">
                            {['MetaTrader 5', 'MatchTrader', 'CTrader +$20.00'].map(p => {
                                const val = p.split(' ')[0].toLowerCase();
                                return (
                                    <label key={p} className={`radio-card ${platform === val ? 'active' : ''}`} onClick={() => setPlatform(val)}>
                                        <div className="radio-circle">{platform === val && <div className="dot"></div>}</div>
                                        <span>{p}</span>
                                    </label>
                                )
                            })}
                        </div>
                    </div>

                </div>

                <div className="challenge-summary-col">
                    {/* Billing Details Stub */}
                    <div className="summary-section">
                        <div className="collapse-header">
                            <h3>Billing Details</h3>
                            <span className="down-arrow">v</span>
                        </div>
                        <p className="section-desc">Enter your billing information for the challenge purchase</p>
                    </div>

                    {/* Coupon */}
                    <div className="summary-section">
                        <h3>Coupon Code</h3>
                        <p className="section-desc">Enter a coupon code to get a discount on your challenge</p>
                        <div className="coupon-input-group">
                            <input type="text" placeholder="Enter coupon code" />
                            <button>Apply</button>
                        </div>
                    </div>

                    {/* Order Summary Card */}
                    <div className="order-summary-card">
                        <h3>Order Summary</h3>
                        <div className="summary-row">
                            <span>${parseInt(size).toLocaleString()}.00 — {step === 'free-trial' ? 'Free Trial' : (step === 'two-step' ? 'Two Step' : (step === 'zero' ? 'Zero' : 'One Step'))} {model === 'funding-pips' ? 'FundingPips' : 'Pro'}</span>
                            <span className="price">${step === 'free-trial' ? 0 : currentPrice}.00</span>
                        </div>
                        <div className="summary-meta">
                            Platform: {platform === 'metatrader' ? 'MetaTrader 5' : 'MatchTrader'}
                        </div>

                        <div className="summary-divider"></div>

                        <div className="summary-total">
                            <span>Total</span>
                            <span className="total-price">${step === 'free-trial' ? 0 : currentPrice}.00</span>
                        </div>

                        <div className="terms-box">
                            <label className="checkbox-container">
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark"></span>
                                <span className="terms-text">I agree with all the following terms:</span>
                            </label>
                            <ul className="terms-list">
                                <li>I have read and agreed to the <a href="#">Terms of Use</a>.</li>
                                <li>All information provided is correct and matches government-issued ID.</li>
                                <li>I have read and agree with the <a href="#">Terms & Conditions</a>.</li>
                                <li>I confirm that I am not a U.S. citizen or resident.</li>
                            </ul>
                        </div>

                        <button className="btn-checkout">{step === 'free-trial' ? 'Start Free Trial' : 'Continue to Payment'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewChallenge;
