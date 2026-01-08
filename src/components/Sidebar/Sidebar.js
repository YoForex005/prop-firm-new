import React from 'react';
import {
    Plus,
    LayoutDashboard,
    Star,
    User,
    Users,
    GraduationCap,
    CreditCard,
    Trophy,
    ScrollText,
    Download,
    Share2,
    Wrench,
    HelpCircle,
    Smartphone,
    Moon,
    Sun,
    Globe,
    ExternalLink,
    ChevronDown
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ darkMode, toggleTheme }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <svg fill={darkMode ? "#ffffff" : "#000000"} width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z" />
                    <path d="M12 9h9v3h-6v4h6v3h-6v6h-3V9z" />
                </svg>
                <span className="logo-text">FTMO</span>
            </div>

            <Link to="/new-challenge" className="new-challenge-btn">
                New FTMO Challenge
            </Link>

            <nav className="sidebar-nav">
                <div className="sidebar-section">
                    <h3 className="section-title">Main menu</h3>
                    <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                        <LayoutDashboard size={18} />
                        <span>Accounts Overview</span>
                    </Link>
                    <Link to="/premium" className={`nav-link ${isActive('/premium') ? 'active' : ''}`}>
                        <Star size={18} />
                        <span>Premium</span>
                    </Link>
                    <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`}>
                        <User size={18} />
                        <span>Profile</span>
                    </Link>
                    <Link to="/traders" className={`nav-link ${isActive('/traders') ? 'active' : ''}`}>
                        <Users size={18} />
                        <span>FTMO Traders</span>
                    </Link>
                    <Link to="/academy" className={`nav-link ${isActive('/academy') ? 'active' : ''}`}>
                        <GraduationCap size={18} />
                        <span>FTMO Academy</span>
                    </Link>
                    <Link to="/billing" className={`nav-link ${isActive('/billing') ? 'active' : ''}`}>
                        <CreditCard size={18} />
                        <span>Billing</span>
                    </Link>
                    <Link to="/leaderboard" className={`nav-link ${isActive('/leaderboard') ? 'active' : ''}`}>
                        <Trophy size={18} />
                        <span>Leaderboard</span>
                    </Link>
                    <Link to="/certificates" className={`nav-link ${isActive('/certificates') ? 'active' : ''}`}>
                        <ScrollText size={18} />
                        <span>Certificates</span>
                    </Link>
                    <Link to="/downloads" className={`nav-link ${isActive('/downloads') ? 'active' : ''}`}>
                        <Download size={18} />
                        <span>Downloads</span>
                    </Link>
                    <Link to="/social" className={`nav-link ${isActive('/social') ? 'active' : ''}`}>
                        <Share2 size={18} />
                        <span>Social Media</span>
                    </Link>
                </div>

                <div className="sidebar-section">
                    <h3 className="section-title">Tools & Services</h3>
                    <Link to="/tools" className="nav-link">
                        <Wrench size={18} />
                        <span>Trading Tools</span>
                        <ChevronDown size={14} className="chevron-down" style={{ marginLeft: 'auto' }} />
                    </Link>
                </div>

                <div className="sidebar-section">
                    <h3 className="section-title">Support</h3>
                    <Link to="/support" className="nav-link">
                        <HelpCircle size={18} />
                        <span>Help Center</span>
                        <ChevronDown size={14} className="chevron-down" style={{ marginLeft: 'auto' }} />
                    </Link>
                </div>

                <div className="sidebar-section">
                    <h3 className="section-title">Mobile app</h3>
                    <Link to="/mobile" className="nav-link">
                        <Smartphone size={18} />
                        <span>iOS & Android</span>
                        <ChevronDown size={14} className="chevron-down" style={{ marginLeft: 'auto' }} />
                    </Link>
                </div>
            </nav>

            <div className="sidebar-footer">
                <div className={`footer-item ${darkMode ? 'active' : ''}`} onClick={toggleTheme}>
                    <div className="footer-left">
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        <span>Dark mode</span>
                    </div>
                    <div className="toggle-switch">
                        <div className="toggle-dot"></div>
                    </div>
                </div>

                <a href="https://ftmo.com" target="_blank" rel="noreferrer" className="footer-item">
                    <div className="footer-left">
                        <ExternalLink size={18} />
                        <span>Back to website</span>
                    </div>
                </a>

                <div className="footer-item">
                    <div className="footer-left">
                        <Globe size={18} />
                        <span className="lang-selector">English</span>
                    </div>
                    <ChevronDown size={14} className="chevron-down" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

