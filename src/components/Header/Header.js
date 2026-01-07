import React from 'react';
import { Rocket, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <div className="header">
                <div className="user-greeting">
                    <div className="avatar">Y</div>
                    <h1>Hey, Yo</h1>
                </div>
                <div className="header-actions">
                    <Link to="/new-challenge" state={{ mode: 'free-trial' }} className="btn-secondary" style={{ marginRight: '10px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        Free Trial
                    </Link>
                    <Link to="/new-challenge" className="btn-primary">
                        <Rocket size={16} fill="white" /> BUY CHALLENGE
                    </Link>
                    <button className="btn-secondary">
                        <Share2 size={16} /> Share
                    </button>
                </div>
            </div>
            <div className="breadcrumbs">
                {/* Simplified logo representation text as SVG not available */}
                <span style={{ fontWeight: '900', fontSize: '16px' }}>P</span>
                <span className="breadcrumb-bold">FundingPips</span>
                <span className="breadcrumb-separator">|</span>
                <span className="breadcrumb-bold">Trader Summary</span>
                <span className="allocation">Total Allocation: $0.00</span>
            </div>
        </div>
    );
}

export default Header;
