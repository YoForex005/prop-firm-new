import React from 'react';
import { Timer, LayoutPanelLeft, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PromoCard.css';

function PromoCard() {
    const navigate = useNavigate();

    return (
        <div className="promo-cards-container">
            {/* Free Trial Card */}
            <div className="card promo-card">
                <div className="promo-icon-wrapper">
                    <Timer size={48} strokeWidth={1.5} />
                </div>
                <h3 className="promo-title">Free Trial</h3>
                <p className="promo-subtitle">Master your skills</p>
                <p className="promo-description">
                    Practice your trading without risking anything, and be ready for the real challenge when it comes!
                </p>

                <ul className="promo-checklist">
                    <li className="checklist-item">
                        <div className="check-icon"><Check size={12} strokeWidth={3} /></div>
                        <span>No eligibility for FTMO Account</span>
                    </li>
                    <li className="checklist-item">
                        <div className="check-icon"><Check size={12} strokeWidth={3} /></div>
                        <span>14 days</span>
                    </li>
                    <li className="checklist-item">
                        <div className="check-icon"><Check size={12} strokeWidth={3} /></div>
                        <span>Basic Account Analysis</span>
                    </li>
                    <li className="checklist-item">
                        <div className="check-icon"><Check size={12} strokeWidth={3} /></div>
                        <span>Limited Apps</span>
                    </li>
                </ul>

                <button
                    className="promo-btn btn-white"
                    onClick={() => navigate('/new-challenge', { state: { mode: 'free-trial' } })}
                >
                    Start Free Trial
                </button>
            </div>

            {/* FTMO Challenge Card */}
            <div className="card promo-card">
                <div className="promo-icon-wrapper">
                    <LayoutPanelLeft size={48} strokeWidth={1.5} />
                </div>
                <h3 className="promo-title">FTMO Challenge</h3>
                <p className="promo-subtitle">Trade up to $200,000 FTMO Account</p>
                <p className="promo-description">
                    Show us your trading skills. Pass the Evaluation Course and receive the FTMO Account!
                </p>

                <ul className="promo-checklist">
                    <li className="checklist-item">
                        <div className="check-icon"><Check size={12} strokeWidth={3} /></div>
                        <span>We provide you with up to $200,000 FTMO Account</span>
                    </li>
                    <li className="checklist-item">
                        <div className="check-icon"><Check size={12} strokeWidth={3} /></div>
                        <span>Prove your trading skills</span>
                    </li>
                    <li className="checklist-item">
                        <div className="check-icon"><Check size={12} strokeWidth={3} /></div>
                        <span>Full Account Analysis</span>
                    </li>
                    <li className="checklist-item">
                        <div className="check-icon"><Check size={12} strokeWidth={3} /></div>
                        <span>Premium Apps</span>
                    </li>
                </ul>

                <button
                    className="promo-btn btn-blue"
                    onClick={() => navigate('/new-challenge')}
                >
                    New FTMO Challenge
                </button>
            </div>
        </div>
    );
}

export default PromoCard;
