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

import TimezoneConverterModal from '../Modals/TimezoneConverterModal';

function Sidebar({ darkMode, toggleTheme, openChat, closeSidebar }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [supportOpen, setSupportOpen] = React.useState(false);
    const [toolsOpen, setToolsOpen] = React.useState(false);
    const [showLockedModal, setShowLockedModal] = React.useState(false);
    const [showTimezoneModal, setShowTimezoneModal] = React.useState(false);
    const isActive = (path) => location.pathname === path;

    // Helper to handle navigation and closing sidebar
    const handleNav = (path) => {
        navigate(path);
        if (closeSidebar) closeSidebar();
    };

    const handleLockedClick = (e) => {
        e.preventDefault();
        setShowLockedModal(true);
        if (closeSidebar) closeSidebar();
    };

    // Shared Classes
    const navItemBase = "w-full flex items-center gap-3 px-3 py-2.5 bg-transparent border-none text-[var(--text-color)] text-sm font-medium cursor-pointer rounded-lg transition-all mb-1 h-auto decoration-none hover:bg-[#f7f9fc] hover:text-[var(--primary-color)] dark:hover:bg-[#1f1f1f]";
    const navItemActive = "bg-[#eff4ff] text-[var(--primary-color)] shadow-none dark:bg-[#1a2236]";

    const submenuItemBase = "flex items-center gap-3 px-3 py-2 rounded-md text-[var(--text-color)] text-[13px] font-medium cursor-pointer transition-all mb-0.5 hover:bg-[#f7f9fc] hover:text-[var(--primary-color)] dark:hover:bg-[#1f1f1f]";
    const submenuItemActive = "bg-[#eff4ff] text-[var(--primary-color)] dark:bg-[#1a2236]";

    return (
        <div className="w-[280px] bg-[var(--sidebar-bg)] flex flex-col py-6 border-r border-[#f0f0f0] z-10 h-full overflow-y-auto">
            <div className="px-6 pb-8 flex items-center gap-3">
                <Link to="/" className="flex items-center gap-2.5 no-underline" onClick={closeSidebar}>
                    <svg fill={darkMode ? "#ffffff" : "#000000"} width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14 14 14z" />
                        <path d="M12 9h9v3h-6v4h6v3h-6v6h-3V9z" />
                    </svg>
                    <span className="text-[20px] font-bold text-[var(--text-color)]">Yo Pips</span>
                </Link>
            </div>

            <div className="flex-1 overflow-y-auto px-4">
                <button
                    className="w-full bg-[#2563eb] text-white border-none rounded-lg p-3 font-semibold text-sm cursor-pointer mb-6 transition-colors hover:bg-[#1d4ed8]"
                    onClick={() => handleNav('/new-challenge')}
                >
                    New Yo Pips Challenge
                </button>

                <div className="mb-6">
                    <div className="text-xs text-[var(--gray-text)] font-semibold mb-2 pl-3 uppercase tracking-[0.5px]">Main menu</div>

                    <div className={`${navItemBase} ${isActive('/') ? navItemActive : ''}`} onClick={() => handleNav('/')}>
                        <LayoutGrid size={20} />
                        <span>Accounts Overview</span>
                    </div>

                    <div className={`${navItemBase} ${isActive('/premium') ? navItemActive : ''}`} onClick={() => handleNav('/premium')}>
                        <Crown size={20} />
                        <span>Premium</span>
                    </div>

                    <div className={`${navItemBase} ${isActive('/profile') ? navItemActive : ''}`} onClick={() => handleNav('/profile')}>
                        <User size={20} />
                        <span>Profile</span>
                    </div>

                    <div className={`${navItemBase} ${isActive('/yopips-traders') ? navItemActive : ''}`} onClick={() => handleNav('/yopips-traders')}>
                        <Users size={18} />
                        <span>Yo Pips Traders</span>
                    </div>

                    <div className={`${navItemBase} ${isActive('/academy') ? navItemActive : ''}`} onClick={() => handleNav('/academy')}>
                        <GraduationCap size={20} />
                        <span>Yo Pips Academy</span>
                    </div>

                    <div className={`${navItemBase} ${isActive('/billing') ? navItemActive : ''}`} onClick={() => handleNav('/billing')}>
                        <CreditCard size={20} />
                        <span>Billing</span>
                    </div>

                    <div className={`${navItemBase} ${isActive('/leaderboard') ? navItemActive : ''}`} onClick={() => handleNav('/leaderboard')}>
                        <Trophy size={20} />
                        <span>Leaderboard</span>
                    </div>

                    <div className={`${navItemBase} ${isActive('/certificates') ? navItemActive : ''}`} onClick={() => handleNav('/certificates')}>
                        <Award size={20} />
                        <span>Certificates</span>
                    </div>

                    <div className={`${navItemBase} ${isActive('/downloads') ? navItemActive : ''}`} onClick={() => handleNav('/downloads')}>
                        <Download size={20} />
                        <span>Downloads</span>
                    </div>

                    <div className={`${navItemBase} ${isActive('/social') ? navItemActive : ''}`} onClick={() => handleNav('/social')}>
                        <Share2 size={20} />
                        <span>Social Media</span>
                    </div>
                </div>

                <div className="mb-6">
                    <div
                        className={`${navItemBase} ${toolsOpen ? navItemActive : ''}`}
                        onClick={() => setToolsOpen(!toolsOpen)}
                    >
                        <span className="flex-1">Tools & Services</span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${toolsOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                    </div>
                    {toolsOpen && (
                        <div className="pl-3 mb-2">
                            <div className={`${submenuItemBase} ${isActive('/calendar') ? submenuItemActive : ''}`} onClick={() => handleNav('/calendar')}>
                                <Calendar size={16} className="min-w-[16px]" />
                                <span className="flex-1">Economic Calendar</span>
                            </div>
                            <div className={`${submenuItemBase} ${isActive('/symbols-tickets') ? submenuItemActive : ''}`} onClick={() => handleNav('/symbols-tickets')}>
                                <Tag size={16} className="min-w-[16px]" />
                                <span className="flex-1">Symbols & Tickets</span>
                            </div>
                            <div className={`${submenuItemBase} ${isActive('/ticker') ? submenuItemActive : ''}`} onClick={() => handleNav('/ticker')}>
                                <TrendingUp size={16} className="min-w-[16px]" />
                                <span className="flex-1">Ticker</span>
                            </div>
                            <div
                                className={`${submenuItemBase} text-[#999] hover:bg-[#fff8e1] hover:text-[#856404] relative group`}
                                onClick={handleLockedClick}
                            >
                                <LineChart size={16} className="min-w-[16px]" />
                                <span className="flex-1">Trader's Analysis</span>
                                <Lock size={12} className="ml-auto text-[#ff9800] shrink-0" />
                            </div>
                            {/* Updated Timezone Converter using state instead of navigation */}
                            <div className={`${submenuItemBase} ${showTimezoneModal ? submenuItemActive : ''}`} onClick={() => setShowTimezoneModal(true)}>
                                <Clock size={16} className="min-w-[16px]" />
                                <span className="flex-1">Timezone Converter</span>
                            </div>
                            {/* Locked Items Repeated Pattern */}
                            {[
                                { icon: Handshake, label: "Partnership Deals" },
                                { icon: BarChart, label: "Equity Simulator" },
                                { icon: LineChart, label: "Statistical App" },
                                { icon: Calculator, label: "Calculators" },
                                { icon: GradCap, label: "Mentor App" },
                                { icon: Target, label: "Performance Coaching" }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`${submenuItemBase} text-[#999] hover:bg-[#fff8e1] hover:text-[#856404] relative group`}
                                    onClick={handleLockedClick}
                                >
                                    <item.icon size={16} className="min-w-[16px]" />
                                    <span className="flex-1">{item.label}</span>
                                    <Lock size={12} className="ml-auto text-[#ff9800] shrink-0" />
                                </div>
                            ))}
                        </div>
                    )}
                    <div
                        className={`${navItemBase} ${supportOpen ? navItemActive : ''}`}
                        onClick={() => setSupportOpen(!supportOpen)}
                    >
                        <span className="flex-1">Support</span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${supportOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                    </div>
                    {supportOpen && (
                        <div className="pl-3 mb-2">
                            <div className={`${submenuItemBase} ${isActive('/support/send-message') ? submenuItemActive : ''}`} onClick={() => handleNav('/support/send-message')}>
                                <MessageSquare size={16} className="min-w-[16px]" />
                                <span>Send message</span>
                            </div>
                            <div
                                className={`${submenuItemBase} ${isActive('/support/live-chat') ? submenuItemActive : ''}`}
                                onClick={() => {
                                    openChat();
                                }}
                            >
                                <MessageSquare size={16} className="min-w-[16px]" />
                                <span>Live Chat</span>
                            </div>
                            <div className={`${submenuItemBase} ${isActive('/support/discord') ? submenuItemActive : ''}`} onClick={() => handleNav('/support/discord')}>
                                <MessageSquare size={16} className="min-w-[16px]" />
                                <span>Discord</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="mb-6">
                    <div className="text-xs text-[var(--gray-text)] font-semibold mb-2 pl-3 uppercase tracking-[0.5px]">Mobile app</div>
                    <div className={navItemBase} onClick={toggleTheme}>
                        <Moon size={20} className="min-w-[20px]" />
                        <span>Dark mode</span>
                    </div>
                    <Link to="/website" className={navItemBase}>
                        <LogOut size={20} className="rotate-180 min-w-[20px]" />
                        <span>Back to website</span>
                    </Link>
                    <div className={navItemBase}>
                        <Globe size={20} className="min-w-[20px]" />
                        <span>English</span>
                        <ChevronDown size={16} className="ml-auto" />
                    </div>
                </div>
            </div>

            {/* Timezone Converter Modal */}
            {showTimezoneModal && (
                <TimezoneConverterModal onClose={() => setShowTimezoneModal(false)} />
            )}

            {/* Locked Feature Modal */}
            {showLockedModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[10000] animate-[fadeIn_0.2s_ease-in]" onClick={() => setShowLockedModal(false)}>
                    <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl p-10 max-w-[450px] w-[90%] text-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-[slideUp_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#ff9800] shadow-[0_4px_12px_rgba(255,152,0,0.2)]" style={{ background: 'linear-gradient(135deg, #fff3cd 0%, #ffe8a1 100%)' }}>
                            <Lock size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] dark:text-white">Feature Locked</h3>
                        <p className="text-[15px] text-[#666] dark:text-[#ccc] mb-8 leading-relaxed">To gain access to this feature, it is necessary to purchase a Yo Pips Challenge</p>
                        <div className="flex gap-3 justify-center">
                            <button className="px-6 py-3 border-2 border-[#e0e0e0] dark:border-[#444] bg-white dark:bg-[#1a1a1a] rounded-lg text-sm font-semibold cursor-pointer transition-all text-[#666] dark:text-[#ccc] hover:bg-[#f7f7f7] hover:border-[#ccc]" onClick={() => setShowLockedModal(false)}>
                                Close
                            </button>
                            <button className="px-6 py-3 border-none bg-gradient-to-br from-[#007bff] to-[#0056b3] text-white rounded-lg text-sm font-semibold cursor-pointer transition-all shadow-[0_4px_12px_rgba(0,123,255,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,123,255,0.4)]" onClick={() => handleNav('/new-challenge')}>
                                Purchase Challenge
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Sidebar;
