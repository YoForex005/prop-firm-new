import React, { useState } from 'react';
import { Rocket, Ticket, FileText, Briefcase, ChevronDown, Rocket as RocketIcon, ChevronLeft, ChevronRight, List, LayoutGrid, Trash2, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
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
        <div className="flex h-[calc(100vh-40px)] bg-[var(--bg-color)]">
            {/* Inner Sidebar */}
            <div className={`flex flex-col gap-4 bg-[var(--sidebar-bg)] border-r border-[#eee] dark:border-[#333] p-6 shrink-0 transition-[width] duration-300 relative z-10 dark:bg-transparent ${isCollapsed ? 'w-20 px-3 items-center' : 'w-[320px]'}`}>
                <div className="flex justify-between items-center mb-2 w-full">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-[#f3f4f6] rounded-full flex items-center justify-center font-medium text-[#1f2937] text-[15px]">Y</div>
                        {!isCollapsed && <div className="text-lg font-semibold text-[var(--text-color)]">Hey, Yo</div>}
                    </div>
                    <button
                        className="w-7 h-7 border border-[#e5e7eb] dark:border-[#333] rounded-md bg-white dark:bg-[#262626] text-[#6b7280] dark:text-[#9ca3af] flex items-center justify-center cursor-pointer"
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                    </button>
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <Link to="/new-challenge" className={`flex items-center justify-center gap-2 p-3 rounded-lg border-none font-bold text-[13px] cursor-pointer no-underline transition-transform active:scale-[0.98] bg-[#2563eb] text-white shadow-md shadow-blue-600/20 dark:text-white ${isCollapsed ? 'justify-center p-3' : ''}`}>
                        <Rocket size={18} /> {!isCollapsed && "BUY CHALLENGE"}
                    </Link>
                    <button className={`flex items-center justify-center gap-2 p-3 rounded-lg border-none font-bold text-[13px] cursor-pointer transition-transform active:scale-[0.98] bg-[#3b82f6] text-white shadow-md shadow-blue-500/20 dark:text-white ${isCollapsed ? 'justify-center p-3' : ''}`} onClick={() => setIsPrizeModalOpen(true)}>
                        <Ticket size={18} /> {!isCollapsed && "$50,000 CASH PRIZE"}
                    </button>
                </div>

                {!isCollapsed && (
                    <>
                        <div className="flex gap-2.5 mt-1">
                            <div className="relative flex-1">
                                <button
                                    className={`w-full bg-white dark:bg-[#262626] border px-3 py-2 rounded-lg text-xs text-[#4b5563] dark:text-[#9ca3af] cursor-pointer flex items-center justify-between whitespace-nowrap transition-all duration-200 hover:bg-[#f9fafb] dark:hover:bg-[#374151] hover:border-[#d1d5db] dark:hover:border-[#4b5563] ${activeDropdown === 'types' ? 'border-[#2563eb] text-[#2563eb] bg-[#eff6ff] dark:bg-[#1e3a8a]/20 dark:text-[#60a5fa]' : 'border-[#e5e7eb] dark:border-[#333]'}`}
                                    onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'types' ? null : 'types'); }}
                                >
                                    All Types <ChevronDown size={14} />
                                </button>
                                {activeDropdown === 'types' && (
                                    <div className="absolute top-[calc(100%+4px)] left-0 w-full min-w-[120px] bg-white dark:bg-[#141414] border border-[#e5e7eb] dark:border-[#333] rounded-lg shadow-lg z-50 overflow-hidden p-1 animate-[fadeIn_0.1s_ease-out_forwards]">
                                        <div className="p-2 py-2 text-[13px] text-[#374151] dark:text-[#d1d5db] cursor-pointer rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#111827] dark:hover:text-white">All Types</div>
                                        <div className="p-2 py-2 text-[13px] text-[#374151] dark:text-[#d1d5db] cursor-pointer rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#111827] dark:hover:text-white">Evaluation</div>
                                        <div className="p-2 py-2 text-[13px] text-[#374151] dark:text-[#d1d5db] cursor-pointer rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#111827] dark:hover:text-white">Express</div>
                                    </div>
                                )}
                            </div>

                            <div className="relative flex-1">
                                <button
                                    className={`w-full bg-white dark:bg-[#262626] border px-3 py-2 rounded-lg text-xs text-[#4b5563] dark:text-[#9ca3af] cursor-pointer flex items-center justify-between whitespace-nowrap transition-all duration-200 hover:bg-[#f9fafb] dark:hover:bg-[#374151] hover:border-[#d1d5db] dark:hover:border-[#4b5563] ${activeDropdown === 'states' ? 'border-[#2563eb] text-[#2563eb] bg-[#eff6ff] dark:bg-[#1e3a8a]/20 dark:text-[#60a5fa]' : 'border-[#e5e7eb] dark:border-[#333]'}`}
                                    onClick={(e) => { e.stopPropagation(); setActiveDropdown(activeDropdown === 'states' ? null : 'states'); }}
                                >
                                    All States <ChevronDown size={14} />
                                </button>
                                {activeDropdown === 'states' && (
                                    <div className="absolute top-[calc(100%+4px)] left-0 w-full min-w-[120px] bg-white dark:bg-[#141414] border border-[#e5e7eb] dark:border-[#333] rounded-lg shadow-lg z-50 overflow-hidden p-1 animate-[fadeIn_0.1s_ease-out_forwards]">
                                        <div className="p-2 py-2 text-[13px] text-[#374151] dark:text-[#d1d5db] cursor-pointer rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#111827] dark:hover:text-white">All States</div>
                                        <div className="p-2 py-2 text-[13px] text-[#374151] dark:text-[#d1d5db] cursor-pointer rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#111827] dark:hover:text-white">Active</div>
                                        <div className="p-2 py-2 text-[13px] text-[#374151] dark:text-[#d1d5db] cursor-pointer rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#111827] dark:hover:text-white">Passed</div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-1">
                            <div className="relative group">
                                <button
                                    className={`relative w-12 h-7 rounded-full border bg-white dark:bg-[#262626] flex items-center justify-center cursor-pointer text-[#6b7280] dark:text-[#9ca3af] ${showArchived ? 'bg-[#eff6ff] border-[#bfdbfe] text-[#2563eb] dark:bg-[#1e3a8a]/20 dark:text-[#60a5fa] dark:border-[#1e3a8a]' : 'border-[#e5e7eb] dark:border-[#333]'}`}
                                    onClick={() => setShowArchived(!showArchived)}
                                >
                                    <Trash2 size={14} />
                                    {showArchived && <div className="absolute bottom-[-2px] right-[-2px] w-3.5 h-3.5 bg-[#2563eb] rounded-full text-white flex items-center justify-center border-2 border-white"><Check size={8} strokeWidth={4} /></div>}
                                </button>
                                <div className="absolute bottom-full right-0 mb-2 bg-[#1e3a8a] text-white px-2.5 py-1.5 rounded text-[11px] whitespace-nowrap shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none after:content-[''] after:absolute after:top-full after:right-4 after:border-4 after:border-solid after:border-t-[#1e3a8a] after:border-x-transparent after:border-b-transparent">Show Archived</div>
                            </div>

                            <div className="relative group">
                                <button
                                    className={`relative w-12 h-7 rounded-full border bg-white dark:bg-[#262626] flex items-center justify-center cursor-pointer text-[#6b7280] dark:text-[#9ca3af] ${isCompactView ? 'bg-[#eff6ff] border-[#bfdbfe] text-[#2563eb] dark:bg-[#1e3a8a]/20 dark:text-[#60a5fa] dark:border-[#1e3a8a]' : 'border-[#e5e7eb] dark:border-[#333]'}`}
                                    onClick={() => setIsCompactView(!isCompactView)}
                                >
                                    <List size={14} />
                                    {isCompactView && <div className="absolute bottom-[-2px] right-[-2px] w-3.5 h-3.5 bg-[#2563eb] rounded-full text-white flex items-center justify-center border-2 border-white"><Check size={8} strokeWidth={4} /></div>}
                                </button>
                                <div className="absolute bottom-full right-0 mb-2 bg-[#1e3a8a] text-white px-2.5 py-1.5 rounded text-[11px] whitespace-nowrap shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none after:content-[''] after:absolute after:top-full after:right-4 after:border-4 after:border-solid after:border-t-[#1e3a8a] after:border-x-transparent after:border-b-transparent">Compact View</div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center mt-[100px] text-[#9ca3af]">
                            <FileText size={48} className="mb-4 text-[#d1d5db] stroke-1" />
                            <h3 className="text-sm font-medium text-[#6b7280] mb-1 m-0">No accounts match your filters</h3>
                            <p className="text-xs max-w-[200px] leading-snug m-0">Try selecting different filters to find your accounts.</p>
                        </div>
                    </>
                )}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex items-center justify-center bg-[var(--bg-color)]">
                <div className="bg-white dark:bg-[#141414] w-[400px] border-2 border-dashed border-[#e5e7eb] dark:border-[#333] rounded-2xl p-12 px-10 text-center flex flex-col items-center">
                    <div className="w-14 h-14 bg-[#f3f4f6] dark:bg-[#333] rounded-xl flex items-center justify-center text-[#6b7280] dark:text-[#9ca3af] mb-6">
                        <Briefcase size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-semibold text-[var(--text-color)] dark:text-[#f3f4f6] m-0 mb-2">Select an Account to View Details</h3>
                    <p className="text-[13px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-8 m-0">Choose a trading account from the list to see its detailed information and performance metrics.</p>

                    <div className="bg-[#f8fafc] dark:bg-[#1a1a1a] w-full p-5 rounded-xl border border-[#f1f5f9] dark:border-[#333]">
                        <span className="text-xs text-[#64748b] dark:text-[#9ca3af] mb-4 block leading-relaxed">Don't have an account yet?<br />Trade up to $300,000 in simulated capital.</span>
                        <Link to="/new-challenge" className="flex items-center justify-center gap-2 w-full bg-[#2563eb] text-white p-2.5 rounded-lg no-underline text-[13px] font-semibold">
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
