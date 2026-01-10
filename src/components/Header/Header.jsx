import { useState, useRef, useEffect } from 'react';
import { Bell, User, CreditCard, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import NotificationSidebar from './NotificationSidebar';

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

    // Shared Classes
    const dropdownItemClass = "flex items-start gap-3 px-5 py-3 text-[#1a1a1a] no-underline cursor-pointer transition-colors duration-200 hover:bg-[#f7f9fc] dark:text-[#f3f4f6] dark:hover:bg-[#2a2a2a]";

    return (
        <div className="flex items-center justify-between mb-6 h-auto p-0 bg-transparent mt-4 w-full">
            <div className="flex items-center gap-3 text-[13px] text-[#64748b] font-medium">
                <Link to="/" className="text-[#64748b] no-underline">Trader</Link>
                <span className="text-[#cbd5e1] text-sm">/</span>
                <span className="text-[#1e293b] font-bold dark:text-[#f3f4f6]">Accounts overview</span>
            </div>

            <div className="flex items-center gap-8">
                <div className="relative" ref={dropdownRef}>
                    <div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                    >
                        <span className="text-sm font-extrabold text-[#1e293b] dark:text-[#f3f4f6]">Arijeet</span>
                        <div className="w-8 h-8 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-[11px] font-extrabold shadow-sm">AN</div>
                    </div>

                    {showUserDropdown && (
                        <div className="absolute top-[calc(100%+12px)] right-0 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] min-w-[320px] z-[1000] animate-[dropdownSlide_0.2s_ease-out] text-left">
                            <div className="flex gap-3 p-5 items-start">
                                <div className="w-8 h-8 bg-[#1e293b] text-white rounded-full flex items-center justify-center text-[11px] font-extrabold shadow-sm shrink-0">AN</div>
                                <div className="flex-1">
                                    <div className="text-[15px] font-bold text-[#1a1a1a] dark:text-white mb-1">Arijeet Nayak</div>
                                    <div className="text-xs text-[#666] dark:text-[#9ca3af] mb-1">ranjan.nayak1968@gmail.com</div>
                                    <div className="text-xs text-[#007bff] font-semibold">0 Yo Pips Points</div>
                                </div>
                            </div>

                            <div className="h-[1px] bg-[#e5e7eb] dark:bg-[#374151] my-2"></div>

                            <Link to="/profile" className={dropdownItemClass} onClick={() => setShowUserDropdown(false)}>
                                <User size={20} className="text-[#007bff] shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-[#1a1a1a] dark:text-white mb-0.5">My Profile</div>
                                    <div className="text-xs text-[#999] dark:text-[#9ca3af]">Account settings and more</div>
                                </div>
                            </Link>

                            <Link to="/billing" className={dropdownItemClass} onClick={() => setShowUserDropdown(false)}>
                                <CreditCard size={20} className="text-[#007bff] shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-[#1a1a1a] dark:text-white mb-0.5">Billing</div>
                                    <div className="text-xs text-[#999] dark:text-[#9ca3af]">Billing & statements</div>
                                </div>
                            </Link>

                            <Link to="/personalisation" className={dropdownItemClass} onClick={() => setShowUserDropdown(false)}>
                                <Settings size={20} className="text-[#007bff] shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-[#1a1a1a] dark:text-white mb-0.5">Personalisation</div>
                                    <div className="text-xs text-[#999] dark:text-[#9ca3af]">Personalisation options</div>
                                </div>
                            </Link>

                            <div className="h-[1px] bg-[#e5e7eb] dark:bg-[#374151] my-2"></div>

                            <Link to="/login" className="flex items-center justify-center gap-2 p-3 mx-3 mb-3 mt-2 bg-gradient-to-br from-[#007bff] to-[#0056b3] text-white rounded-lg no-underline text-sm font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,123,255,0.3)]" onClick={() => setShowUserDropdown(false)}>
                                <LogOut size={20} />
                                <span>Log Out</span>
                            </Link>
                        </div>
                    )}
                </div>
                <div
                    className="relative cursor-pointer flex items-center justify-center"
                    onClick={() => setShowNotifications(true)}
                >
                    <Bell size={20} />
                    <span className="w-3.5 h-3.5 bg-[#ef4444] rounded-full absolute -top-[5px] -right-[5px] border-2 border-[var(--bg-main)] flex items-center justify-center text-white text-[8px] font-extrabold">12</span>
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
