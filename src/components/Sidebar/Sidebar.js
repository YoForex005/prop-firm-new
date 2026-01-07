import React from 'react';
import { Plus, Briefcase, Trophy, ScrollText, Calendar, User, Settings, Moon, LogOut, LayoutDashboard, BarChart2, Medal, Link2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <Link to="/">
                    <svg fill="#000000" width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z" /><path d="M12 9h9v3h-6v4h6v3h-6v6h-3V9z" /></svg>
                </Link>
            </div>
            <nav className="sidebar-nav">
                <Link to="/new-challenge">
                    <button className={`nav-item ${isActive('/new-challenge') ? 'active' : ''}`}><Plus size={22} /></button>
                </Link>
                <Link to="/accounts">
                    <button className={`nav-item ${isActive('/accounts') ? 'active' : ''}`}><Briefcase size={22} /></button>
                </Link>
                <Link to="/">
                    <button className={`nav-item ${isActive('/') ? 'active' : ''}`}><LayoutDashboard size={22} /></button>
                </Link>
                <Link to="/leaderboard">
                    <button className={`nav-item ${isActive('/leaderboard') ? 'active' : ''}`}><Medal size={22} /></button>
                </Link>
                <Link to="/competitions">
                    <button className={`nav-item ${isActive('/competitions') ? 'active' : ''}`}><Trophy size={22} /></button>
                </Link>
                <Link to="/certificates">
                    <button className={`nav-item ${isActive('/certificates') ? 'active' : ''}`}><ScrollText size={22} /></button>
                </Link>
                <Link to="/affiliate">
                    <button className={`nav-item ${isActive('/affiliate') ? 'active' : ''}`}><Link2 size={22} /></button>
                </Link>
                <Link to="/calendar">
                    <button className={`nav-item ${isActive('/calendar') ? 'active' : ''}`}><Calendar size={22} /></button>
                </Link>
            </nav>
            <div className="sidebar-footer">
                <Link to="/profile">
                    <button className={`nav-item ${isActive('/profile') ? 'active' : ''}`}><Settings size={22} /></button>
                </Link>
                <button className="nav-item"><Moon size={22} /></button>
                <button className="nav-item"><LogOut size={22} /></button>
            </div>
        </div>
    );
}

export default Sidebar;
