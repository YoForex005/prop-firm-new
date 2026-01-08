import React from 'react';
import { Home, Bell, Info, X } from 'lucide-react';
import './Header.css';

function Header() {
    return (
        <div className="header-wrapper">
            {/* Center the top nav */}
            <div className="centered-content">
                <header className="header-container">
                    <div className="header-left">
                        <nav className="breadcrumb-nav">
                            <Home size={14} className="breadcrumb-icon" style={{ color: '#94a3b8' }} />
                            <span>Trader</span>
                            <span className="breadcrumb-sep">/</span>
                            <span className="breadcrumb-active">Accounts overview</span>
                        </nav>
                    </div>

                    <div className="header-right">
                        <div className="user-profile">
                            <span className="user-name">Arijeet</span>
                            <div className="user-initials">AN</div>
                        </div>

                        <div className="notification-bell">
                            <Bell size={20} style={{ color: '#1e293b' }} />
                            <div className="notification-dot"></div>
                        </div>
                    </div>
                </header>
            </div>

            {/* Center the banner content */}
            <div className="banner-outer">
                <div className="centered-content">
                    <div className="special-deal-banner">
                        <div className="banner-left">
                            <div className="banner-icons">
                                <Info size={14} className="banner-icon-bg" />
                            </div>
                            <div className="banner-text">
                                <span className="deal-pill">
                                    <Info size={14} /> Special Deal! $100,000 FTMO Challenge for €439 <span className="save-badge">Save €101</span>
                                </span>
                            </div>
                        </div>
                        <div className="banner-right">
                            <span className="banner-promo-text">$100,000 FTMO Challenge: <strong>Now 19% Off</strong></span>
                            <button className="get-it-now-btn">Get It Now</button>
                            <X size={18} className="close-banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
