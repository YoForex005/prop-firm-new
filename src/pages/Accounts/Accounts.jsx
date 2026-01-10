import React, { useState } from 'react';
import { Rocket, Ticket, FileText, Briefcase, ChevronDown, Rocket as RocketIcon, ChevronLeft, ChevronRight, List, LayoutGrid, Trash2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Accounts.css';
import CashPrizeModal from '../../components/Modals/CashPrizeModal';

function Accounts() {
    const [isPrizeModalOpen, setIsPrizeModalOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [showArchived, setShowArchived] = useState(false);
    const [isCompactView, setIsCompactView] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(false);

    React.useEffect(() => {
        const handleClickOutside = () => setActiveDropdown(null);
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="accounts-container">
            {/* Inner Sidebar */}
            <div className={`accounts-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-header-row">
                    <div className="profile-mini">
                        <div className="profile-avatar">Y</div>
                        {!isCollapsed && <div className="profile-name">Hey, Yo</div>}
                    </div>
                    <button className="collapse-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
                        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                    </button>
                </div>

                <div className="action-buttons">
                    <Link to="/new-challenge" className={`btn-main-action btn-dark-blue ${isCollapsed ? 'icon-only' : ''}`}>
                        <Rocket size={18} /> {!isCollapsed && "BUY CHALLENGE"}
                    </Link>
                    <button className={`btn-main-action btn-light-blue ${isCollapsed ? 'icon-only' : ''}`} onClick={() => setIsPrizeModalOpen(true)}>
                        <Ticket size={18} /> {!isCollapsed && "$50,000 CASH PRIZE"}
                    </button>
                </div>

                {!isCollapsed && (
                    <>
                        <div className="filters-container">
                            <div className="filter-wrapper">
                                <button
                                    className={`filter-chip ${activeDropdown === 'types' ? 'active' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'types' ? null : 'types'); }}
                                >
                                    All Types <ChevronDown size={14} />
                                </button>
                                {activeDropdown === 'types' && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item">All Types</div>
                                        <div className="dropdown-item">Evaluation</div>
                                        <div className="dropdown-item">Express</div>
                                    </div>
                                )}
                            </div>

                            <div className="filter-wrapper">
                                <button
                                    className={`filter-chip ${activeDropdown === 'states' ? 'active' : ''}`}
                                    onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'states' ? null : 'states'); }}
                                >
                                    All States <ChevronDown size={14} />
                                </button>
                                {activeDropdown === 'states' && (
                                    <div className="dropdown-menu">
                                        <div className="dropdown-item">All States</div>
                                        <div className="dropdown-item">Active</div>
                                        <div className="dropdown-item">Passed</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="view-toggles-row">
                            <div className="tooltip-container">
                                <button
                                    className={`view-toggle-pill ${showArchived ? 'active' : ''}`}
                                    onClick={() => setShowArchived(!showArchived)}
                                >
                                    <Trash2 size={14} />
                                    {showArchived && <div className="pill-check"><Check size={8} strokeWidth={4} /></div>}
                                </button>
                                <div className="custom-tooltip">Show Archived</div>
                            </div>

                            <div className="tooltip-container">
                                <button
                                    className={`view-toggle-pill ${isCompactView ? 'active' : ''}`}
                                    onClick={() => setIsCompactView(!isCompactView)}
                                >
                                    <List size={14} />
                                    {isCompactView && <div className="pill-check"><Check size={8} strokeWidth={4} /></div>}
                                </button>
                                <div className="custom-tooltip">Compact View</div>
                            </div>
                        </div>

                        <div className="empty-list-state">
                            <FileText size={48} className="empty-icon" strokeWidth={1} />
                            <h3>No accounts match your filters</h3>
                            <p>Try selecting different filters to find your accounts.</p>
                        </div>
                    </>
                )}
            </div>

            {/* Main Content Area */}
            <div className="accounts-main">
                <div className="empty-selection-card">
                    <div className="selection-icon">
                        <Briefcase size={32} strokeWidth={1.5} />
                    </div>
                    <h3>Select an Account to View Details</h3>
                    <p>Choose a trading account from the list to see its detailed information and performance metrics.</p>

                    <div className="simulated-footer">
                        <span className="simulated-text">Don't have an account yet?<br />Trade up to $300,000 in simulated capital.</span>
                        <Link to="/new-challenge" className="btn-buy-footer">
                            <RocketIcon size={16} /> BUY CHALLENGE
                        </Link>
                    </div>
                </div>
            </div>

            <CashPrizeModal isOpen={isPrizeModalOpen} onClose={() => setIsPrizeModalOpen(false)} />
        </div>
    );
}

export default Accounts;
