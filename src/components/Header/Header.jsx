import { useState, useRef, useEffect } from 'react';
import { Bell, User, CreditCard, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import NotificationSidebar from './NotificationSidebar';
import './Header.css'; // Ensure Header.css imports styles or add them inline

function Header() {
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowUserDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="header-container">
            <div className="header-breadcrumbs">
                <Link to="/" className="breadcrumb-link">Trader</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">Accounts overview</span>
            </div>

            <div className="header-user-actions">
                <div className="user-info" ref={dropdownRef}>
                    <div
                        className="user-trigger"
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                        style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
                    >
                        <span className="user-name">Arijeet</span>
                        <div className="user-avatar">AN</div>
                    </div>

                    {showUserDropdown && (
                        <div className="user-dropdown">
                            <div className="user-dropdown-header">
                                <div className="user-avatar">AN</div>
                                <div className="user-info-text">
                                    <div className="user-name-full">Arijeet Nayak</div>
                                    <div className="user-email">ranjan.nayak1968@gmail.com</div>
                                    <div className="user-points">0 Yo Pips Points</div>
                                </div>
                            </div>

                            <div className="user-dropdown-divider"></div>

                            <Link to="/profile" className="user-dropdown-item" onClick={() => setShowUserDropdown(false)}>
                                <User size={20} />
                                <div>
                                    <div className="dropdown-item-title">My Profile</div>
                                    <div className="dropdown-item-subtitle">Account settings and more</div>
                                </div>
                            </Link>

                            <Link to="/billing" className="user-dropdown-item" onClick={() => setShowUserDropdown(false)}>
                                <CreditCard size={20} />
                                <div>
                                    <div className="dropdown-item-title">Billing</div>
                                    <div className="dropdown-item-subtitle">Billing & statements</div>
                                </div>
                            </Link>

                            <Link to="/personalisation" className="user-dropdown-item" onClick={() => setShowUserDropdown(false)}>
                                <Settings size={20} />
                                <div>
                                    <div className="dropdown-item-title">Personalisation</div>
                                    <div className="dropdown-item-subtitle">Personalisation options</div>
                                </div>
                            </Link>

                            <div className="user-dropdown-divider"></div>

                            <Link to="/login" className="user-dropdown-logout" onClick={() => setShowUserDropdown(false)}>
                                <LogOut size={20} />
                                <span>Log Out</span>
                            </Link>
                        </div>
                    )}
                </div>
                <div
                    className="notification-bell"
                    onClick={() => setShowNotifications(true)}
                    style={{ cursor: 'pointer' }}
                >
                    <Bell size={20} />
                    <span className="notification-badge">12</span>
                </div>
            </div>

            <NotificationSidebar
                isOpen={showNotifications}
                onClose={() => setShowNotifications(false)}
            />
        </div>
    );
}

export default Header;
