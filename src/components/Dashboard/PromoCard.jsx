import React from 'react';
import './PromoCard.css';
import { Check } from 'lucide-react';

function PromoCard({ icon: Icon, title, subtitle, description, features, buttonText, buttonAction, isPrimary }) {
    return (
        <div className="promo-card">
            <div className="promo-icon-wrapper">
                <Icon size={24} className={isPrimary ? "text-primary" : "text-blue"} />
            </div>
            <h3 className="promo-title">{title}</h3>
            <div className="promo-subtitle">{subtitle}</div>
            <p className="promo-desc">{description}</p>

            <div className="promo-features">
                {features.map((feature, idx) => (
                    <div key={idx} className="promo-feature-row">
                        <div className="check-box">
                            <Check size={12} color="white" />
                        </div>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            <button
                className={`promo-btn ${isPrimary ? 'btn-blue' : 'btn-white'}`}
                onClick={buttonAction}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default PromoCard;
