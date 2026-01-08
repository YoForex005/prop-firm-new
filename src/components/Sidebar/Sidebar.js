import React from 'react';
import { Plus, Briefcase, Trophy, ScrollText, Calendar, Users, Settings, Moon, Sun, LogOut, Coins, ListOrdered } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ darkMode, toggleTheme }) {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <Link to="/">
                    <svg fill={darkMode ? "#ffffff" : "#000000"} width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z" /><path d="M12 9h9v3h-6v4h6v3h-6v6h-3V9z" /></svg>
                </Link>
            </div>
            <nav className="sidebar-nav">
                <Link to="/new-challenge">
                    <button className="nav-item active-blue" style={{ backgroundColor: '#2563eb', color: 'white' }} data-tooltip="New Challenge">
                        <Plus size={24} />
                    </button>
                </Link>

                <Link to="/accounts">
                    <button className={`nav-item ${isActive('/accounts') ? 'active' : ''}`} data-tooltip="Accounts">
                        <Briefcase size={22} />
                    </button>
                </Link>

                <Link to="/payouts">
                    <button className={`nav-item ${isActive('/payouts') ? 'active' : ''}`} data-tooltip="Payouts">
                        <Coins size={22} />
                    </button>
                </Link>

                <Link to="/competitions">
                    <button className={`nav-item ${isActive('/competitions') ? 'active' : ''}`} data-tooltip="Competitions">
                        <Trophy size={22} />
                    </button>
                </Link>

                <Link to="/leaderboard">
                    <button className={`nav-item ${isActive('/leaderboard') ? 'active' : ''}`} data-tooltip="Leaderboard">
                        <ListOrdered size={22} />
                    </button>
                </Link>

                <Link to="/certificates">
                    <button className={`nav-item ${isActive('/certificates') ? 'active' : ''}`} data-tooltip="Certificates">
                        <ScrollText size={22} />
                    </button>
                </Link>

                <Link to="/calendar">
                    <button className={`nav-item ${isActive('/calendar') ? 'active' : ''}`} data-tooltip="Calendar">
                        <Calendar size={22} />
                    </button>
                </Link>

                <Link to="/affiliate">
                    <button className={`nav-item ${isActive('/affiliate') ? 'active' : ''}`} data-tooltip="Affiliate">
                        <Users size={22} />
                    </button>
                </Link>
            </nav>
            <div className="sidebar-footer">
                <Link to="/profile">
                    <button className={`nav-item ${isActive('/profile') ? 'active' : ''}`} data-tooltip="Profile"><Settings size={22} /></button>
                </Link>
                <button className="nav-item" onClick={toggleTheme} data-tooltip={darkMode ? "Generic Light Mode" : "Dark Mode"}>
                    {darkMode ? <Sun size={22} /> : <Moon size={22} />}
                </button>
                <Link to="/login">
                    <button className="nav-item" data-tooltip="Logout"><LogOut size={22} /></button>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
