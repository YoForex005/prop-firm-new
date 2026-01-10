import React, { useState, useRef, useEffect } from 'react';
import { Bell, User, CreditCard, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TopNavbar.css';

function TopNavbar() {
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
        <div className="top-navbar">
            <div className="navbar-logo">
                <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z" />
                    <path d="M12 9h9v3h-6v4h6v3h-6v6h-3V9z" />
                </svg>
                <span className="navbar-brand">Yo Pips</span>
            </div>

            <div className="navbar-user">
                <div className="navbar-username-container" ref={dropdownRef}>
                    <span
                        className="navbar-username"
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                        style={{ cursor: 'pointer' }}
                    >
                        Arijeet
                    </span>

                    {showUserDropdown && (
                        <div className="user-dropdown">
                            <div className="user-dropdown-header">
                                <div className="user-avatar">AN</div>
                                <div className="user-info">
                                    <div className="user-name">Arijeet Nayak</div>
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

                <div className="navbar-search-icon">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </div>
                <div className="navbar-bell">
                    <Bell size={18} />
                    <span className="navbar-notification-badge">12</span>
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;
