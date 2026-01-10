import React, { useState } from 'react';
import {
    Download, Info, Key, Phone, RefreshCw, Share2, XCircle,
    ChevronDown, Check, X, Calendar, ChevronLeft, ChevronRight,
    Settings, Search, ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CredentialsModal from '../../components/Modals/CredentialsModal';
import ShareModal from '../../components/Modals/ShareModal';

function AccountMetrix() {
    const navigate = useNavigate();
    const [chartTab, setChartTab] = useState('1-day');
    const [showCredentials, setShowCredentials] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [objectiveLinesOn, setObjectiveLinesOn] = useState(true);
    const [chartZoomed, setChartZoomed] = useState(true);

    const mockAccount = {
        login: '1512264795',
        server: 'YoPips-Server',
        platform: 'MT5',
        password: 'Password123'
    };

    const shareLink = "https://trader.ftmo.com/live-metrix/1512264795/share/019ba288-e56d-733a-b";

    return (
        <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0d] p-6 lg:p-10 font-sans text-[#1a1a1a] dark:text-[#f3f4f6]">
            {showCredentials && (
                <CredentialsModal
                    onClose={() => setShowCredentials(false)}
                    credentials={mockAccount}
                />
            )}
            {showShareModal && (
                <ShareModal
                    onClose={() => setShowShareModal(false)}
                    shareLink={shareLink}
                />
            )}
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 mb-3 text-[11px] text-[#9ca3af] dark:text-[#6b7280]">
                <span>Traders</span>
                <span className="mx-1">/</span>
                <span>Accounts Overview</span>
                <span className="mx-1">/</span>
                <span className="text-[#4b5563] dark:text-[#9ca3af]">Account Metrix: 1512264795</span>
            </div>

            {/* Page Header */}
            <div className="flex items-center mb-5">
                <div className="flex items-center gap-3">
                    <BarChartIcon />
                    <h1 className="text-xl font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Account Metrix 1512264795</h1>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200" onClick={() => setShowCredentials(true)}>
                    <Key size={14} /> Credentials
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200" onClick={() => navigate('/support')}>
                    <Phone size={14} /> Contact us
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200" onClick={() => window.location.reload()}>
                    <RefreshCw size={14} /> Refresh
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200" onClick={() => setShowShareModal(true)}>
                    <Share2 size={14} /> Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200">
                    <XCircle size={14} /> Close account
                </button>
            </div>

            {/* Top Grid: Current Results & Free Trial */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 mb-8">
                {/* Current Results */}
                <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                    <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Current Results</h3>

                    <div className="flex justify-between mb-5 pb-5 border-b border-[#f3f4f6] dark:border-[#374151]">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1">Balance <Info size={12} /></span>
                            <span className="text-lg font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">$50,000.00</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1">Equity <Info size={12} /></span>
                            <span className="text-lg font-bold text-[#10b981]">$50,205.01</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1">Unrealized PnL <Info size={12} /></span>
                            <span className="text-lg font-medium text-[#10b981]">$205.01</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mb-5 flex-wrap">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af]">Trading Objective lines</span>
                            <div className="flex bg-[#f3f4f6] dark:bg-[#374151] rounded p-0.5">
                                <button
                                    className={`px-4 py-1 border-none text-xs cursor-pointer rounded transition-all duration-200 ${!objectiveLinesOn ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] shadow-sm' : 'bg-transparent text-[#374151] dark:text-[#9ca3af] hover:text-[#1d1d1f] dark:hover:text-white'}`}
                                    onClick={() => setObjectiveLinesOn(false)}
                                >
                                    Off
                                </button>
                                <button
                                    className={`px-4 py-1 border-none text-xs cursor-pointer rounded transition-all duration-200 ${objectiveLinesOn ? 'bg-[#0066ff] text-white shadow-sm' : 'bg-transparent text-[#374151] dark:text-[#9ca3af] hover:text-[#1d1d1f] dark:hover:text-white'}`}
                                    onClick={() => setObjectiveLinesOn(true)}
                                >
                                    On
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af]">PnL Values</span>
                            <select className="px-3 py-1 border border-[#e5e7eb] dark:border-[#4b5563] rounded text-xs bg-white dark:bg-[#1f2937] text-[#1a1a1a] dark:text-[#f3f4f6]">
                                <option>Absolute</option>
                                <option>Percentage</option>
                            </select>
                        </div>
                        <button
                            className="ml-auto px-3 py-1.5 border border-[#e5e7eb] dark:border-[#4b5563] bg-white dark:bg-[#1f2937] rounded text-xs cursor-pointer text-[#374151] dark:text-[#e5e7eb] hover:bg-[#f3f4f6] dark:hover:bg-[#374151] transition-all duration-200 flex items-center gap-1.5"
                            onClick={() => setChartZoomed(!chartZoomed)}
                        >
                            {chartZoomed ? (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                                    Zoom out
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                                    Zoom in
                                </>
                            )}
                        </button>
                    </div>

                    <div className={`bg-[#fafbfc] dark:bg-[#111827] border border-dashed border-[#e5e7eb] dark:border-[#374151] relative transition-all duration-300 overflow-hidden ${chartZoomed ? 'h-[200px]' : 'h-[80px]'}`}>
                        {/* Placeholder for Bar Chart */}
                        <div className="h-full relative py-5 pl-[60px] pr-0">
                            {chartZoomed && (
                                <div className="absolute left-[10px] top-[20px] bottom-[40px] flex flex-col justify-between text-[10px] text-[#9ca3af]">
                                    <span>$50,200.00</span>
                                    <span>$50,100.00</span>
                                    <span>$50,000.00</span>
                                    <span>$49,900.00</span>
                                </div>
                            )}
                            {!chartZoomed && (
                                <div className="absolute left-[10px] top-[15px] bottom-[25px] flex flex-col justify-between text-[10px] text-[#9ca3af]">
                                    <span>$50,200.00</span>
                                    <span>$49,900.00</span>
                                </div>
                            )}
                            <div className="h-full flex items-end pb-[30px]">
                                <div className={`w-[60px] bg-[#60a5fa] opacity-50 ml-auto mr-[40px] transition-all duration-300`} style={{ height: chartZoomed ? '60%' : '40%' }}></div>
                            </div>
                            <div className="absolute bottom-[10px] left-[60px] right-[20px] flex justify-between text-[10px] text-[#9ca3af]">
                                <span>7 Jan 2025 10:00</span>
                                <span>Now</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Free Trial / Account Info */}
                <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] flex flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Free trial</h3>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Result:</span>
                            <span className="bg-[#10b981] text-white px-2 py-0.5 rounded text-[11px] font-semibold">Ongoing</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Status:</span>
                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">Active</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Free trial:</span>
                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">1512264795</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Start:</span>
                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6] flex items-center gap-1">7 Jan 2025 <Info size={12} /></span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">End:</span>
                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6] flex items-center gap-1">26 Jan 2025 <Info size={12} /></span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Account size:</span>
                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">$200,000.00</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Account Type:</span>
                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">FTMO</span>
                        </div>
                        <div className="flex justify-between py-3 border-b-0 text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Platform (MT5):</span>
                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">Downloaded</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <div className="cursor-pointer mb-2.5">
                    <div className="text-sm font-semibold text-[#4b5563] dark:text-[#9ca3af] flex items-center gap-1.5">
                        <span className="text-[10px] text-[#0066ff]">▼</span> Open trades
                    </div>
                </div>
                <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#e5e7eb] dark:border-[#333] overflow-x-auto">
                    <table className="w-full border-collapse min-w-[600px]">
                        <thead>
                            <tr>
                                <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Type</th>
                                <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Open Time</th>
                                <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Volume</th>
                                <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Symbol</th>
                                <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">PnL</th>
                                <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Pips</th>
                                <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Duration</th>
                                <th className="pb-3 border-b border-[#f3f4f6] dark:border-[#374151]"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-medium text-[#111827] dark:text-[#f3f4f6]">365273361</span>
                                        <span className="text-[#10b981] font-medium text-xs">↗ Buy</span>
                                    </div>
                                </td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">
                                    <div className="flex flex-col gap-0.5 text-[13px] text-[#374151] dark:text-[#9ca3af]">
                                        <span>7 Jan 2026,</span>
                                        <span className="text-xs">15:33:19</span>
                                    </div>
                                </td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">0.01</td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">XAUUSD</td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]"><span className="bg-[#f0fdf4] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399] px-3 py-1.5 rounded font-medium min-w-[80px] inline-block text-center">$33.77</span></td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]"><span className="text-[#10b981] dark:text-[#34d399] font-medium bg-[#f0fdf4] dark:bg-[#064e3b] px-3 py-1.5 rounded min-w-[60px] inline-block text-center">33.8</span></td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]"><span className="bg-[#f3f4f6] dark:bg-[#374151] px-3 py-1.5 rounded text-[#374151] dark:text-[#e5e7eb] text-xs inline-block">1d 22:26:02</span></td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]"><button className="bg-white dark:bg-[#374151] border border-[#e5e7eb] dark:border-[#4b5563] rounded w-7 h-7 flex items-center justify-center cursor-pointer text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f9fafb]"><ChevronDown size={16} /></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* "Your stats" Section */}
            <div className="mb-4">
                <h3 className="text-base font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">Your stats</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 mb-5">
                {/* Consistency Score */}
                <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] text-center">
                    <div className="flex justify-between items-center mb-4">
                        <h4 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Consistency score</h4>
                        <Settings size={14} className="text-gray-400 dark:text-gray-500" />
                    </div>
                    <div className="flex justify-center gap-3 text-[10px] text-[#6b7280] dark:text-[#9ca3af] mb-5">
                        <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#ef4444] inline-block mr-1"></span> 0 - 30%</span>
                        <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] inline-block mr-1"></span> 30 - 80%</span>
                        <span className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-[#10b981] inline-block mr-1"></span> 80 - 100%</span>
                    </div>
                    <div className="h-[120px] flex items-end justify-center bg-no-repeat bg-bottom bg-contain relative" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='100' viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 100 A 80 80 0 0 1 180 100' fill='none' stroke='%23f3f4f6' stroke-width='20'/%3E%3C/svg%3E")` }}>
                        <div className="text-center">
                            <span className="block text-2xl font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">0%</span>
                            <span className="text-xs text-[#ef4444]">Poor</span>
                        </div>
                    </div>
                </div>

                {/* Objectives */}
                <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                    <h4 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Objectives</h4>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Trading objectives</th>
                                <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Result</th>
                                <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Summary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa] cursor-pointer">Minimum 5 trading days</td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">1</td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right"><div className="inline-flex p-1 rounded bg-[#fee2e2] dark:bg-[#7f1d1d] text-[#ef4444] dark:text-[#f87171]"><X size={12} /></div></td>
                            </tr>
                            <tr>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa] cursor-pointer">Max Daily Loss - $10,000</td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">-$99.00 (0%)</td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right"><div className="inline-flex p-1 rounded bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]"><Check size={12} /></div></td>
                            </tr>
                            <tr>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa] cursor-pointer">Max Loss - $20,000</td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">-$99.00 (0%)</td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right"><div className="inline-flex p-1 rounded bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]"><Check size={12} /></div></td>
                            </tr>
                            <tr>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa] cursor-pointer">Profit Target $10,000</td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">$205.01 (0%)</td>
                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right"><div className="inline-flex p-1 rounded bg-[#fee2e2] dark:bg-[#7f1d1d] text-[#ef4444] dark:text-[#f87171]"><X size={12} /></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Permitted Loss Stats Bars */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
                <div className="bg-[#f9fafb] dark:bg-[#262626] p-3 rounded-md text-center flex flex-col gap-1.5 border border-[#e5e7eb] dark:border-[#333]">
                    <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] flex items-center justify-center gap-1">Today's permitted loss <Info size={12} /></span>
                    <span className="text-sm font-semibold text-[#111827] dark:text-[#f3f4f6]">$10,100.29</span>
                </div>
                <div className="bg-[#f9fafb] dark:bg-[#262626] p-3 rounded-md text-center flex flex-col gap-1.5 border border-[#e5e7eb] dark:border-[#333]">
                    <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] flex items-center justify-center gap-1">Max permitted loss <Info size={12} /></span>
                    <span className="text-sm font-semibold text-[#111827] dark:text-[#f3f4f6]">$20,100.29</span>
                </div>
                <div className="bg-[#f9fafb] dark:bg-[#262626] p-3 rounded-md text-center flex flex-col gap-1.5 border border-[#e5e7eb] dark:border-[#333]">
                    <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] flex items-center justify-center gap-1">Today's profit <Info size={12} /></span>
                    <span className="text-sm font-semibold text-[#111827] dark:text-[#f3f4f6]">$20.73</span>
                </div>
            </div>

            {/* Statistics & Daily Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
                <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                    <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Statistics</h3>
                    <div className="grid grid-cols-3 gap-3">
                        <StatBox label="Equity" value="$200,205.01" />
                        <StatBox label="Balance" value="$200,000.00" />
                        <StatBox label="Win rate" value="-" />
                        <StatBox label="Average profit" value="-" />
                        <StatBox label="Average loss" value="-" />
                        <StatBox label="Number of trades" value="0" />
                        <StatBox label="Lots" value="0" />
                        <StatBox label="Sharpe Ratio" value="-" />
                        <StatBox label="Average RRR" value="-" />
                        <StatBox label="Expectancy" value="0" />
                        <StatBox label="Profit factor" value="-" />
                    </div>
                </div>

                <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                    <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] flex items-center gap-1">Daily summary <Info size={14} /></h3>
                    <div className="flex justify-between text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-5">
                        <span>Date</span>
                        <span>Trades</span>
                        <span>Lots</span>
                        <span>Result</span>
                    </div>
                    <div className="h-[150px] bg-[#f9fafb] dark:bg-[#111827] rounded-lg flex items-center justify-center">
                        <div className="w-[60%] h-2.5 bg-[#e5e7eb] dark:bg-[#374151] rounded"></div>
                    </div>
                </div>
            </div>

            {/* Trading Journal - Calendar */}
            <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] mb-8">
                <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] flex items-center gap-1">Trading journal <Info size={14} /></h3>
                <div className="flex gap-5 border-b border-[#e5e7eb] dark:border-[#374151] mb-5">
                    <span className="pb-2.5 text-[13px] text-[#0066ff] dark:text-[#60a5fa] cursor-pointer border-b-2 border-[#0066ff] dark:border-[#60a5fa]">Daily PnL</span>
                    <span className="pb-2.5 text-[13px] text-[#6b7280] dark:text-[#9ca3af] cursor-pointer border-b-2 border-transparent hover:text-[#0066ff] dark:hover:text-[#60a5fa]">Closed trades</span>
                    <span className="pb-2.5 text-[13px] text-[#6b7280] dark:text-[#9ca3af] cursor-pointer border-b-2 border-transparent hover:text-[#0066ff] dark:hover:text-[#60a5fa]">Charts</span>
                </div>

                <div className="flex justify-between items-center mb-5 flex-wrap gap-4">
                    <button className="px-3 py-1.5 border border-[#e5e7eb] dark:border-[#4b5563] bg-white dark:bg-[#1f2937] rounded cursor-pointer text-xs text-[#374151] dark:text-[#e5e7eb]">Today</button>
                    <div className="flex items-center gap-3">
                        <button className="border-none bg-transparent cursor-pointer p-1 text-[#6b7280] dark:text-[#9ca3af]"><ChevronLeft size={16} /></button>
                        <span className="font-semibold text-[#111827] dark:text-[#f3f4f6]">January 2025</span>
                        <button className="border-none bg-transparent cursor-pointer p-1 text-[#6b7280] dark:text-[#9ca3af]"><ChevronRight size={16} /></button>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-[#374151] dark:text-[#e5e7eb]">
                        <span>Monthly view</span>
                        <button className="px-3 py-1 bg-[#f3f4f6] dark:bg-[#374151] border border-[#e5e7eb] dark:border-[#4b5563] rounded cursor-pointer font-semibold">Balance</button>
                        <button className="px-3 py-1 bg-transparent border border-[#e5e7eb] dark:border-[#4b5563] rounded cursor-pointer">Trading days</button>
                    </div>
                </div>

                <div className="grid grid-cols-7 gap-px bg-[#e5e7eb] dark:bg-[#374151] border border-[#e5e7eb] dark:border-[#374151]">
                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                        <div key={day} className="bg-[#f9fafb] dark:bg-[#111827] p-2.5 text-center text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af]">{day}</div>
                    ))}

                    {/* Simplified Calendar Days */}
                    {Array.from({ length: 31 }).map((_, i) => (
                        <div key={i} className={`bg-white dark:bg-[#1f2937] h-[100px] p-2.5 relative ${i === 6 ? 'bg-[#eff6ff] dark:bg-[#1e3a8a]' : ''}`}>
                            <span className="text-xs text-[#6b7280] dark:text-[#9ca3af]">{i + 1}</span>
                            {i === 6 && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#0066ff] rounded-full"></div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Economic Calendar Footer */}
            <div className="bg-white dark:bg-[#141414] rounded-lg p-0 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] overflow-hidden">
                <div className="p-5 pb-0">
                    <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Economic Calendar</h3>
                </div>
                <div className="px-4 py-3 text-sm font-semibold text-[#111827] dark:text-[#f3f4f6] border-b border-[#f3f4f6] dark:border-[#374151] bg-[#fff] dark:bg-[#1f2937]">Friday 9 Jan</div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-white dark:bg-[#1f2937]">
                                <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Description:</th>
                                <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Instrument:</th>
                                <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Date:</th>
                                <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Actual:</th>
                                <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Forecast:</th>
                                <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Previous:</th>
                                <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Actions:</th>
                            </tr>
                        </thead>
                        <tbody className="text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">
                            <tr>
                                <td className="px-4 py-3 align-middle">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-6 rounded-sm bg-[#f59e0b]"></div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[13px] text-[#374151] dark:text-[#e5e7eb]">PPI y/y</span>
                                            <span className="text-xs text-[#9ca3af]">📰</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 align-middle"><div className="flex items-center gap-2 font-semibold text-[#10b981] dark:text-[#34d399]"><span className="text-lg">🇨🇳</span> CNY</div></td>
                                <td className="px-4 py-3 align-middle"><div className="flex flex-col text-xs text-[#374151] dark:text-[#9ca3af]">08:00 9 Jan<span className="text-[11px] text-[#9ca3af]">Expired</span></div></td>
                                <td className="px-4 py-3 align-middle text-[#10b981] dark:text-[#34d399] font-medium">-1.9 %</td>
                                <td className="px-4 py-3 align-middle">-2 %</td>
                                <td className="px-4 py-3 align-middle">-2.2 %</td>
                                <td className="px-4 py-3 align-middle"><Calendar size={16} className="text-[#9ca3af] cursor-pointer hover:text-[#374151]" /></td>
                            </tr>
                            {/* ... more rows can be added similarly with correct colors ... */}
                            <tr>
                                <td className="px-4 py-3 align-middle">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-6 rounded-sm bg-[#e5e7eb] dark:bg-[#4b5563]"></div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[13px] text-[#374151] dark:text-[#e5e7eb]">Leading Indicators</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 align-middle"><div className="flex items-center gap-2 font-semibold text-[#10b981] dark:text-[#34d399]"><span className="text-lg">🇯🇵</span> JPY</div></td>
                                <td className="px-4 py-3 align-middle"><div className="flex flex-col text-xs text-[#374151] dark:text-[#9ca3af]">10:30 9 Jan<span className="text-[11px] text-[#9ca3af]">Expired</span></div></td>
                                <td className="px-4 py-3 align-middle text-[#10b981] dark:text-[#34d399] font-medium">110.5 %</td>
                                <td className="px-4 py-3 align-middle">110.4 %</td>
                                <td className="px-4 py-3 align-middle">110 %</td>
                                <td className="px-4 py-3 align-middle"><Calendar size={16} className="text-[#9ca3af] cursor-pointer hover:text-[#374151]" /></td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 align-middle">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1 h-6 rounded-sm bg-[#e5e7eb] dark:bg-[#4b5563]"></div>
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[13px] text-[#374151] dark:text-[#e5e7eb]">German Industrial Production m/m</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 align-middle"><div className="flex items-center gap-2 font-semibold text-[#60a5fa]"><span className="text-lg">🇪🇺</span> EUR</div></td>
                                <td className="px-4 py-3 align-middle"><div className="flex flex-col text-xs text-[#374151] dark:text-[#9ca3af]">12:30 9 Jan<span className="text-[11px] text-[#9ca3af]">Expired</span></div></td>
                                <td className="px-4 py-3 align-middle text-[#ef4444] dark:text-[#f87171] font-medium">0.8 %</td>
                                <td className="px-4 py-3 align-middle">-0.6 %</td>
                                <td className="px-4 py-3 align-middle">1.8 %</td>
                                <td className="px-4 py-3 align-middle"><Calendar size={16} className="text-[#9ca3af] cursor-pointer hover:text-[#374151]" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="w-full p-3 bg-[#f3f4f6] dark:bg-[#374151] border-none text-[13px] font-semibold text-[#111827] dark:text-[#f3f4f6] cursor-pointer hover:bg-[#e5e7eb] dark:hover:bg-[#4b5563]">Show this week's Economic Calendar</button>
            </div>

            <div className="text-[10px] text-[#374151] dark:text-[#9ca3af] mb-8 font-medium">
                THE VALUES IN THIS ACCOUNT METRIX ARE INFORMATIVE ONLY. REAL-TIME TRADING VALUES CAN BE SEEN IN THE TRADING PLATFORM.
            </div>

            {/* Footer */}
            <div className="border-t border-[#e5e7eb] dark:border-[#374151] pt-8 text-center">
                <div className="mb-5 flex justify-center gap-5">
                    <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Cookie settings</a>
                    <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Privacy policy</a>
                    <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Terms & Conditions</a>
                </div>
                <p className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-5 text-justify">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation...
                </p>
                <p className="text-[11px] text-[#9ca3af]">2025 © Copyright - FTMO.com Made with ❤️ for trading.</p>
            </div>
        </div>
    );
}

// Helper component for statistics boxes
function StatBox({ label, value }) {
    return (
        <div className="bg-[#f9fafb] dark:bg-[#262626] p-2.5 rounded-md text-center border border-[#e5e7eb] dark:border-[#333] flex flex-col items-center justify-center">
            <span className="block text-[10px] text-[#6b7280] dark:text-[#9ca3af] mb-1 flex items-center gap-1">{label} <Info size={10} className="ml-0.5" /></span>
            <span className="text-[13px] font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">{value}</span>
        </div>
    );
}

// Icon helper
function BarChartIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1a1a] dark:text-[#f3f4f6]">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
    )
}

export default AccountMetrix;
