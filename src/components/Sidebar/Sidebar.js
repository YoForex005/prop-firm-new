import React from 'react';
import {
    LayoutGrid,
    Crown,
    User,
    Users,
    MessageSquare,
    GraduationCap,
    CreditCard,
    Trophy,
    Award,
    Download,
    Share2,
    ChevronDown,
    Moon,
    Sun,
    LogOut,
    Globe,
    Calendar,
    Tag,
    TrendingUp,
    Clock,
    Handshake,
    LineChart,
    BarChart,
    Calculator,
    GraduationCap as GradCap,
    Target,
    Lock
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ darkMode, toggleTheme }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [supportOpen, setSupportOpen] = React.useState(false);
    const [toolsOpen, setToolsOpen] = React.useState(false);
    const [showLockedModal, setShowLockedModal] = React.useState(false);
    const isActive = (path) => location.pathname === path;

    const handleLockedClick = (e) => {
        e.preventDefault();
        setShowLockedModal(true);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <svg fill={darkMode ? "#ffffff" : "#000000"} width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z" />
                        <path d="M12 9h9v3h-6v4h6v3h-6v6h-3V9z" />
                    </svg>
                    <span className="brand-name">Yo Pips</span>
                </Link>
            </div>

            <div className="sidebar-scroll">
                <button
                    className="new-challenge-btn"
                    onClick={() => navigate('/new-challenge')}
                >
                    New Yo Pips Challenge
                </button>

                <div className="menu-group">
                    <div className="menu-label">Main menu</div>

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                            <LayoutGrid size={20} />
                            <span>Accounts Overview</span>
                        </div>
                    </Link>

                    <Link to="/premium" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item ${isActive('/premium') ? 'active' : ''}`}>
                            <Crown size={20} />
                            <span>Premium</span>
                        </div>
                    </Link>

                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item ${isActive('/profile') ? 'active' : ''}`}>
                            <User size={20} />
                            <span>Profile</span>
                        </div>
                    </Link>

                    <Link to="/yopips-traders" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item ${isActive('/yopips-traders') ? 'active' : ''}`}>
                            <Users size={18} />
                            <span>Yo Pips Traders</span>
                        </div>
                    </Link>

                    <Link to="/academy" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item ${isActive('/academy') ? 'active' : ''}`}>
                            <GraduationCap size={20} />
                            <span>Yo Pips Academy</span>
                        </div>
                    </Link>

                    <Link to="/billing" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item ${isActive('/billing') ? 'active' : ''}`}>
                            <CreditCard size={20} />
                            <span>Billing</span>
                        </div>
                    </Link>

                    <Link to="/leaderboard" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item ${isActive('/leaderboard') ? 'active' : ''}`}>
                            <Trophy size={20} />
                            <span>Leaderboard</span>
                        </div>
                    </Link>

                    <Link to="/certificates" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item ${isActive('/certificates') ? 'active' : ''}`}>
                            <Award size={20} />
                            <span>Certificates</span>
                        </div>
                    </Link>

                    <Link to="/downloads" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item ${isActive('/downloads') ? 'active' : ''}`}>
                            <Download size={20} />
                            <span>Downloads</span>
                        </div>
                    </Link>

                    <Link to="/social" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item ${isActive('/social') ? 'active' : ''}`}>
                            <Share2 size={20} />
                            <span>Social Media</span>
                        </div>
                    </Link>
                </div>

                <div className="menu-group">
                    <div
                        className={`nav-item ${toolsOpen ? 'active' : ''}`}
                        onClick={() => setToolsOpen(!toolsOpen)}
                        style={{ cursor: 'pointer' }}
                    >
                        <span style={{ flex: 1 }}>Tools & Services</span>
                        <ChevronDown
                            size={16}
                            style={{
                                transform: toolsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s'
                            }}
                        />
                    </div>
                    {toolsOpen && (
                        <div className="submenu">
                            <Link to="/calendar" style={{ textDecoration: 'none' }}>
                                <div className={`submenu-item ${isActive('/calendar') ? 'active' : ''}`}>
                                    <Calendar size={16} />
                                    <span>Economic Calendar</span>
                                </div>
                            </Link>
                            <Link to="/symbols-tickets" style={{ textDecoration: 'none' }}>
                                <div className={`submenu-item ${isActive('/symbols-tickets') ? 'active' : ''}`}>
                                    <Tag size={16} />
                                    <span>Symbols & Tickets</span>
                                </div>
                            </Link>
                            <Link to="/ticker" style={{ textDecoration: 'none' }}>
                                <div className={`submenu-item ${isActive('/ticker') ? 'active' : ''}`}>
                                    <TrendingUp size={16} />
                                    <span>Ticker</span>
                                </div>
                            </Link>
                            <div className="submenu-item locked" onClick={handleLockedClick}>
                                <LineChart size={16} />
                                <span>Trader's Analysis</span>
                                <Lock size={12} className="lock-icon" />
                            </div>
                            <Link to="/timezone-converter" style={{ textDecoration: 'none' }}>
                                <div className={`submenu-item ${isActive('/timezone-converter') ? 'active' : ''}`}>
                                    <Clock size={16} />
                                    <span>Timezone Converter</span>
                                </div>
                            </Link>
                            <div className="submenu-item locked" onClick={handleLockedClick}>
                                <Handshake size={16} />
                                <span>Partnership Deals</span>
                                <Lock size={12} className="lock-icon" />
                            </div>
                            <div className="submenu-item locked" onClick={handleLockedClick}>
                                <BarChart size={16} />
                                <span>Equity Simulator</span>
                                <Lock size={12} className="lock-icon" />
                            </div>
                            <div className="submenu-item locked" onClick={handleLockedClick}>
                                <LineChart size={16} />
                                <span>Statistical App</span>
                                <Lock size={12} className="lock-icon" />
                            </div>
                            <div className="submenu-item locked" onClick={handleLockedClick}>
                                <Calculator size={16} />
                                <span>Calculators</span>
                                <Lock size={12} className="lock-icon" />
                            </div>
                            <div className="submenu-item locked" onClick={handleLockedClick}>
                                <GradCap size={16} />
                                <span>Mentor App</span>
                                <Lock size={12} className="lock-icon" />
                            </div>
                            <div className="submenu-item locked" onClick={handleLockedClick}>
                                <Target size={16} />
                                <span>Performance Coaching</span>
                                <Lock size={12} className="lock-icon" />
                            </div>
                        </div>
                    )}
                    <div
                        className={`nav-item ${supportOpen ? 'active' : ''}`}
                        onClick={() => setSupportOpen(!supportOpen)}
                        style={{ cursor: 'pointer' }}
                    >
                        <span style={{ flex: 1 }}>Support</span>
                        <ChevronDown
                            size={16}
                            style={{
                                transform: supportOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s'
                            }}
                        />
                    </div>
                    {supportOpen && (
                        <div className="submenu">
                            <Link to="/support/send-message" style={{ textDecoration: 'none' }}>
                                <div className={`submenu-item ${isActive('/support/send-message') ? 'active' : ''}`}>
                                    <MessageSquare size={16} />
                                    <span>Send message</span>
                                </div>
                            </Link>
                            <Link to="/support/live-chat" style={{ textDecoration: 'none' }}>
                                <div className={`submenu-item ${isActive('/support/live-chat') ? 'active' : ''}`}>
                                    <MessageSquare size={16} />
                                    <span>Live Chat</span>
                                </div>
                            </Link>
                            <Link to="/support/discord" style={{ textDecoration: 'none' }}>
                                <div className={`submenu-item ${isActive('/support/discord') ? 'active' : ''}`}>
                                    <MessageSquare size={16} />
                                    <span>Discord</span>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="menu-group">
                    <div className="menu-label">Mobile app</div>
                    <div className={`nav-item`} onClick={toggleTheme}>
                        <Moon size={20} />
                        <span>Dark mode</span>
                        <div style={{ marginLeft: 'auto' }}>
                            {/* Toggle switch placeholder */}
                        </div>
                    </div>
                    <Link to="/website" style={{ textDecoration: 'none' }}>
                        <div className={`nav-item`}>
                            <LogOut size={20} style={{ transform: 'rotate(180deg)' }} />
                            <span>Back to website</span>
                        </div>
                    </Link>
                    <div className={`nav-item`}>
                        <Globe size={20} />
                        <span>English</span>
                        <ChevronDown size={16} style={{ marginLeft: 'auto' }} />
                    </div>
                </div>
            </div>

            {/* Locked Feature Modal */}
            {showLockedModal && (
                <div className="locked-modal-overlay" onClick={() => setShowLockedModal(false)}>
                    <div className="locked-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="locked-modal-icon">
                            <Lock size={32} />
                        </div>
                        <h3>Feature Locked</h3>
                        <p>To gain access to this feature, it is necessary to purchase a Yo Pips Challenge</p>
                        <div className="locked-modal-actions">
                            <button className="modal-btn-secondary" onClick={() => setShowLockedModal(false)}>
                                Close
                            </button>
                            <Link to="/new-challenge" style={{ textDecoration: 'none' }}>
                                <button className="modal-btn-primary">
                                    Purchase Challenge
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
