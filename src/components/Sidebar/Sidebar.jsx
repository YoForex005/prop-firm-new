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
    Lock,
    Sparkles,
    ChevronRight
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

    const handleNav = (path) => {
        navigate(path);
        if (closeSidebar) closeSidebar();
    };

    const handleLockedClick = (e) => {
        e.preventDefault();
        setShowLockedModal(true);
        if (closeSidebar) closeSidebar();
    };

    return (
        <div className="w-[260px] bg-white dark:bg-[#0d0d0d] flex flex-col border-r border-[#f0f0f0] dark:border-[#1a1a1a] z-10 h-full overflow-hidden">
            {/* Logo Section */}
            <div className="px-5 py-5 border-b border-[#f5f5f5] dark:border-[#1a1a1a]">
                <Link to="/" className="flex items-center gap-3 no-underline group" onClick={closeSidebar}>
                    <img
                        src="/logo.png"
                        alt="Yo Pips Logo"
                        className="w-10 h-10 rounded-xl object-contain group-hover:scale-105 transition-transform"
                    />
                    <span className="text-lg font-bold text-[#1d1d1f] dark:text-white">Yo Pips</span>
                </Link>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-3 py-4">
                {/* CTA Button */}
                <button
                    className="w-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white border-none rounded-xl p-3.5 font-semibold text-sm cursor-pointer mb-6 transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    onClick={() => handleNav('/new-challenge')}
                >
                    <Sparkles size={16} />
                    New Yo Pips Challenge
                </button>

                {/* Main Menu */}
                <div className="mb-5">
                    <div className="text-[10px] text-[#9ca3af] dark:text-[#6b7280] font-semibold mb-3 px-3 uppercase tracking-wider">Main Menu</div>

                    <nav className="space-y-0.5">
                        {[
                            { path: '/', icon: LayoutGrid, label: 'Accounts Overview' },
                            { path: '/premium', icon: Crown, label: 'Premium' },
                            { path: '/profile', icon: User, label: 'Profile' },
                            { path: '/yopips-traders', icon: Users, label: 'Yo Pips Traders' },
                            { path: '/academy', icon: GraduationCap, label: 'Yo Pips Academy' },
                            { path: '/billing', icon: CreditCard, label: 'Billing' },
                            { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
                            { path: '/certificates', icon: Award, label: 'Certificates' },
                            { path: '/downloads', icon: Download, label: 'Downloads' },
                            { path: '/social', icon: Share2, label: 'Social Media' },
                        ].map(({ path, icon: Icon, label }) => (
                            <button
                                key={path}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 border-none text-sm font-medium cursor-pointer rounded-xl transition-all duration-200 text-left ${isActive(path)
                                    ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] shadow-md'
                                    : 'bg-transparent text-[#4b5563] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#141414] hover:text-[#1d1d1f] dark:hover:text-white'
                                    }`}
                                onClick={() => handleNav(path)}
                            >
                                <Icon size={18} className="shrink-0" />
                                <span>{label}</span>
                                {isActive(path) && <ChevronRight size={14} className="ml-auto opacity-60" />}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Tools & Services Section */}
                <div className="mb-5">
                    <button
                        className={`w-full flex items-center gap-3 px-3 py-2.5 border-none text-sm font-medium cursor-pointer rounded-xl transition-all duration-200 text-left ${toolsOpen
                            ? 'bg-[#f5f7fa] dark:bg-[#141414] text-[#1d1d1f] dark:text-white'
                            : 'bg-transparent text-[#4b5563] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#141414]'
                            }`}
                        onClick={() => setToolsOpen(!toolsOpen)}
                    >
                        <span className="flex-1">Tools & Services</span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${toolsOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${toolsOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-2 pt-1 space-y-0.5">
                            {/* Available Items */}
                            {[
                                { path: '/calendar', icon: Calendar, label: 'Economic Calendar' },
                                { path: '/symbols-tickets', icon: Tag, label: 'Symbols & Tickets' },
                                { path: '/ticker', icon: TrendingUp, label: 'Ticker' },
                            ].map(({ path, icon: Icon, label }) => (
                                <button
                                    key={path}
                                    className={`w-full flex items-center gap-3 px-3 py-2 border-none text-[13px] font-medium cursor-pointer rounded-lg transition-all duration-200 text-left ${isActive(path)
                                        ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f]'
                                        : 'bg-transparent text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#1a1a1a] hover:text-[#1d1d1f] dark:hover:text-white'
                                        }`}
                                    onClick={() => handleNav(path)}
                                >
                                    <Icon size={16} className="shrink-0" />
                                    <span>{label}</span>
                                </button>
                            ))}

                            {/* Timezone Converter */}
                            <button
                                className={`w-full flex items-center gap-3 px-3 py-2 border-none text-[13px] font-medium cursor-pointer rounded-lg transition-all duration-200 text-left ${showTimezoneModal
                                    ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f]'
                                    : 'bg-transparent text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#1a1a1a] hover:text-[#1d1d1f] dark:hover:text-white'
                                    }`}
                                onClick={() => setShowTimezoneModal(true)}
                            >
                                <Clock size={16} className="shrink-0" />
                                <span>Timezone Converter</span>
                            </button>

                            {/* Locked Items */}
                            {[
                                { icon: LineChart, label: "Trader's Analysis" },
                                { icon: Handshake, label: 'Partnership Deals' },
                                { icon: BarChart, label: 'Equity Simulator' },
                                { icon: Calculator, label: 'Calculators' },
                                { icon: GradCap, label: 'Mentor App' },
                                { icon: Target, label: 'Performance Coaching' }
                            ].map((item, idx) => (
                                <button
                                    key={idx}
                                    className="w-full flex items-center gap-3 px-3 py-2 border-none text-[13px] font-medium cursor-pointer rounded-lg transition-all duration-200 text-left bg-transparent text-[#9ca3af] dark:text-[#6b7280] hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 group"
                                    onClick={handleLockedClick}
                                >
                                    <item.icon size={16} className="shrink-0" />
                                    <span className="flex-1">{item.label}</span>
                                    <Lock size={12} className="text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <div className="mb-5">
                    <button
                        className={`w-full flex items-center gap-3 px-3 py-2.5 border-none text-sm font-medium cursor-pointer rounded-xl transition-all duration-200 text-left ${supportOpen
                            ? 'bg-[#f5f7fa] dark:bg-[#141414] text-[#1d1d1f] dark:text-white'
                            : 'bg-transparent text-[#4b5563] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#141414]'
                            }`}
                        onClick={() => setSupportOpen(!supportOpen)}
                    >
                        <span className="flex-1">Support</span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${supportOpen ? 'rotate-180' : 'rotate-0'}`}
                        />
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ${supportOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-2 pt-1 space-y-0.5">
                            <button
                                className={`w-full flex items-center gap-3 px-3 py-2 border-none text-[13px] font-medium cursor-pointer rounded-lg transition-all duration-200 text-left ${isActive('/support/send-message')
                                    ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f]'
                                    : 'bg-transparent text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#1a1a1a] hover:text-[#1d1d1f] dark:hover:text-white'
                                    }`}
                                onClick={() => handleNav('/support/send-message')}
                            >
                                <MessageSquare size={16} className="shrink-0" />
                                <span>Send Message</span>
                            </button>
                            <button
                                className="w-full flex items-center gap-3 px-3 py-2 border-none text-[13px] font-medium cursor-pointer rounded-lg transition-all duration-200 text-left bg-transparent text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#1a1a1a] hover:text-[#1d1d1f] dark:hover:text-white"
                                onClick={() => openChat()}
                            >
                                <MessageSquare size={16} className="shrink-0" />
                                <span>Live Chat</span>
                                <span className="ml-auto w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            </button>
                            <button
                                className={`w-full flex items-center gap-3 px-3 py-2 border-none text-[13px] font-medium cursor-pointer rounded-lg transition-all duration-200 text-left ${isActive('/support/discord')
                                    ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f]'
                                    : 'bg-transparent text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#1a1a1a] hover:text-[#1d1d1f] dark:hover:text-white'
                                    }`}
                                onClick={() => handleNav('/support/discord')}
                            >
                                <MessageSquare size={16} className="shrink-0" />
                                <span>Discord</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="px-3 py-4 border-t border-[#f5f5f5] dark:border-[#1a1a1a] space-y-1">
                <div className="text-[10px] text-[#9ca3af] dark:text-[#6b7280] font-semibold mb-2 px-3 uppercase tracking-wider">Settings</div>

                {/* Dark Mode Toggle */}
                <button
                    className="w-full flex items-center gap-3 px-3 py-2.5 border-none text-sm font-medium cursor-pointer rounded-xl transition-all duration-200 text-left bg-transparent text-[#4b5563] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#141414]"
                    onClick={toggleTheme}
                >
                    {darkMode ? <Sun size={18} className="shrink-0" /> : <Moon size={18} className="shrink-0" />}
                    <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    <div className={`ml-auto w-9 h-5 rounded-full relative transition-colors ${darkMode ? 'bg-[#1d1d1f]' : 'bg-[#e5e7eb]'}`}>
                        <div className={`absolute w-4 h-4 bg-white rounded-full top-0.5 transition-all shadow-sm ${darkMode ? 'left-[18px]' : 'left-0.5'}`}></div>
                    </div>
                </button>

                {/* Language Selector */}
                <button className="w-full flex items-center gap-3 px-3 py-2.5 border-none text-sm font-medium cursor-pointer rounded-xl transition-all duration-200 text-left bg-transparent text-[#4b5563] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#141414]">
                    <Globe size={18} className="shrink-0" />
                    <span>English</span>
                    <ChevronDown size={14} className="ml-auto opacity-50" />
                </button>

                {/* Back to Website */}
                <Link
                    to="/website"
                    className="w-full flex items-center gap-3 px-3 py-2.5 border-none text-sm font-medium cursor-pointer rounded-xl transition-all duration-200 text-left bg-transparent text-[#4b5563] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#141414] no-underline"
                >
                    <LogOut size={18} className="shrink-0 rotate-180" />
                    <span>Back to Website</span>
                </Link>
            </div>

            {/* Timezone Converter Modal */}
            {showTimezoneModal && (
                <TimezoneConverterModal onClose={() => setShowTimezoneModal(false)} />
            )}

            {/* Locked Feature Modal */}
            {showLockedModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[10000] animate-[fadeIn_0.2s_ease-in]" onClick={() => setShowLockedModal(false)}>
                    <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 max-w-[400px] w-[90%] text-center shadow-2xl animate-[slideUp_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-500/20 dark:to-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-amber-500">
                            <Lock size={28} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#1d1d1f] dark:text-white">Feature Locked</h3>
                        <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] mb-6 leading-relaxed">To gain access to this feature, it is necessary to purchase a Yo Pips Challenge</p>
                        <div className="flex gap-3 justify-center">
                            <button
                                className="px-5 py-2.5 border border-[#e5e7eb] dark:border-[#333] bg-white dark:bg-[#141414] rounded-xl text-sm font-medium cursor-pointer transition-all text-[#4b5563] dark:text-[#9ca3af] hover:bg-[#f5f7fa] dark:hover:bg-[#1a1a1a]"
                                onClick={() => setShowLockedModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="px-5 py-2.5 border-none bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] rounded-xl text-sm font-semibold cursor-pointer transition-all hover:opacity-90"
                                onClick={() => handleNav('/new-challenge')}
                            >
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
