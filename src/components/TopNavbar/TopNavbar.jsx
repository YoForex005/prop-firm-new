import React, { useState, useRef, useEffect } from 'react';
import { Bell, User, CreditCard, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

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
        <div className="bg-[#1a1a1a] text-white flex justify-between items-center px-6 h-14 sticky top-0 z-[100]">
            <div className="flex items-center gap-2">
                <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z" />
                    <path d="M12 9h9v3h-6v4h6v3h-6v6h-3V9z" />
                </svg>
                <span className="text-lg font-bold text-white">Yo Pips</span>
            </div>

            <div className="flex items-center gap-5">
                <div className="relative" ref={dropdownRef}>
                    <span
                        className="text-sm font-semibold text-[#e0e0e0] hover:text-white cursor-pointer transition-colors"
                        onClick={() => setShowUserDropdown(!showUserDropdown)}
                    >
                        Arijeet
                    </span>

                    {showUserDropdown && (
                        <div className="absolute top-[calc(100%+12px)] right-0 bg-white dark:bg-[#1f2937] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] min-w-[320px] z-[1000] animate-in fade-in slide-in-from-top-2 duration-200 border border-transparent dark:border-[#374151]">
                            <div className="flex gap-3 p-5 items-start">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-base font-bold shrink-0">AN</div>
                                <div className="flex-1">
                                    <div className="text-[15px] font-bold text-[#1a1a1a] dark:text-[#f3f4f6] mb-1">Arijeet Nayak</div>
                                    <div className="text-xs text-[#666] dark:text-[#9ca3af] mb-1">ranjan.nayak1968@gmail.com</div>
                                    <div className="text-xs text-[#007bff] font-semibold">0 Yo Pips Points</div>
                                </div>
                            </div>

                            <div className="h-px bg-[#e5e7eb] dark:bg-[#374151] my-2"></div>

                            <Link to="/profile" className="flex items-start gap-3 p-3 px-5 text-[#1a1a1a] dark:text-[#f3f4f6] hover:bg-[#f7f9fc] dark:hover:bg-[#374151] transition-colors cursor-pointer no-underline" onClick={() => setShowUserDropdown(false)}>
                                <User size={20} className="text-[#007bff] shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] mb-0.5">My Profile</div>
                                    <div className="text-xs text-[#999] dark:text-[#6b7280]">Account settings and more</div>
                                </div>
                            </Link>

                            <Link to="/billing" className="flex items-start gap-3 p-3 px-5 text-[#1a1a1a] dark:text-[#f3f4f6] hover:bg-[#f7f9fc] dark:hover:bg-[#374151] transition-colors cursor-pointer no-underline" onClick={() => setShowUserDropdown(false)}>
                                <CreditCard size={20} className="text-[#007bff] shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] mb-0.5">Billing</div>
                                    <div className="text-xs text-[#999] dark:text-[#6b7280]">Billing & statements</div>
                                </div>
                            </Link>

                            <Link to="/personalisation" className="flex items-start gap-3 p-3 px-5 text-[#1a1a1a] dark:text-[#f3f4f6] hover:bg-[#f7f9fc] dark:hover:bg-[#374151] transition-colors cursor-pointer no-underline" onClick={() => setShowUserDropdown(false)}>
                                <Settings size={20} className="text-[#007bff] shrink-0 mt-0.5" />
                                <div>
                                    <div className="text-sm font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] mb-0.5">Personalisation</div>
                                    <div className="text-xs text-[#999] dark:text-[#6b7280]">Personalisation options</div>
                                </div>
                            </Link>

                            <div className="h-px bg-[#e5e7eb] dark:bg-[#374151] my-2"></div>

                            <Link to="/login" className="flex items-center justify-center gap-2 p-3.5 m-3 mt-2 bg-gradient-to-br from-[#007bff] to-[#0056b3] text-white rounded-lg text-sm font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,123,255,0.3)] no-underline" onClick={() => setShowUserDropdown(false)}>
                                <LogOut size={20} />
                                <span>Log Out</span>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="text-[#e0e0e0] cursor-pointer">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                </div>
                <div className="relative cursor-pointer text-[#e0e0e0]">
                    <Bell size={18} />
                    <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[16px] text-center">12</span>
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;
