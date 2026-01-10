import React, { useState } from 'react';
import { Download, X, FileText } from 'lucide-react';

function Downloads() {
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    return (
        <div className="p-6 px-8 bg-[#f5f5f5] dark:bg-[#0d0d0d] min-h-screen max-md:p-4">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-6 text-[13px] text-[#666] dark:text-[#9ca3af]">
                <span className="text-[#666] dark:text-[#9ca3af]">Trader</span>
                <span className="mx-2 text-[#666] dark:text-[#9ca3af]">/</span>
                <span className="text-[#666] dark:text-[#9ca3af]">Downloads</span>
            </div>

            {/* MetaTrader Extension Banner */}
            <div className="bg-gradient-to-br from-[#0072ff] to-[#0052cc] rounded-xl p-8 flex gap-6 mb-8 text-white max-md:flex-col max-md:p-6">
                <div className="shrink-0">
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 24 24' fill='%23fff'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E" alt="Extension" className="w-[60px] h-[60px]" />
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-bold m-0 mb-3 text-white">🔥 Get the extension for your MetaTrader 4 & 5</h2>
                    <p className="text-sm m-0 mb-5 leading-relaxed opacity-95">The App Suite offers over 35 powerful tools to help you analyse market trends, optimise trading strategies, and manage your trades efficiently.</p>
                    <div className="flex gap-3 max-sm:flex-col">
                        <button
                            className="bg-white text-[#0072ff] border-none px-6 py-3 rounded-md text-sm font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)]"
                            onClick={() => setShowDownloadModal(true)}
                        >
                            Download now ⬇️
                        </button>
                        <button className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-md text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-[rgba(255,255,255,0.1)]">How it works?</button>
                    </div>
                </div>
            </div>

            {/* Downloads Section */}
            <div className="bg-white dark:bg-[#141414] rounded-xl p-8 mb-6 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                    <Download size={24} className="text-[#1a1a1a] dark:text-[#f3f4f6]" />
                    <h2 className="text-xl font-bold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Downloads</h2>
                </div>

                {/* EAs and Indicators */}
                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] m-0 mb-4">EAs and Indicators</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse mb-5 min-w-[600px]">
                            <thead>
                                <tr className="bg-[#f7f9fc] dark:bg-[#262626]">
                                    <th className="text-left p-3 px-4 text-sm font-semibold text-[#666] dark:text-[#9ca3af]">Description</th>
                                    <th className="text-left p-3 px-4 text-sm font-semibold text-[#666] dark:text-[#9ca3af]">File</th>
                                    <th className="text-left p-3 px-4 text-sm font-semibold text-[#666] dark:text-[#9ca3af]">More Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-4 border-b border-[#e5e7eb] dark:border-[#333] text-sm text-[#1a1a1a] dark:text-[#f3f4f6]">
                                        <a href="#" className="text-[#0072ff] no-underline font-medium hover:underline dark:text-[#60a5fa]">App Suite MT4 extension (Win)</a>
                                    </td>
                                    <td className="p-4 border-b border-[#e5e7eb] dark:border-[#333] text-sm text-[#1a1a1a] dark:text-[#f3f4f6]">
                                        <a href="#" className="text-[#0072ff] no-underline font-medium hover:underline dark:text-[#60a5fa]">More Info</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-b-0 text-sm text-[#1a1a1a] dark:text-[#f3f4f6]">App Suite MT5 extension (Win)</td>
                                    <td className="p-4 border-b-0 text-sm text-[#1a1a1a] dark:text-[#f3f4f6]">
                                        <a href="#" className="text-[#0072ff] no-underline font-medium hover:underline dark:text-[#60a5fa]">App Suite MT5 extension (Win)</a>
                                    </td>
                                    <td className="p-4 border-b-0 text-sm text-[#1a1a1a] dark:text-[#f3f4f6]">
                                        <a href="#" className="text-[#0072ff] no-underline font-medium hover:underline dark:text-[#60a5fa]">More Info</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Chrome Browser Note */}
                <div className="bg-[#0072ff] text-white p-4 px-5 rounded-lg text-sm text-center mb-8">
                    If you have troubles downloading .ex4 file, please use Google Chrome browser.
                </div>

                {/* Platforms */}
                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] m-0 mb-5">Platforms</h3>

                    <div className="bg-[#f8f9fa] dark:bg-[#262626] flex items-center justify-between p-6 mb-3 rounded-lg border border-[#e5e7eb] dark:border-[#333] max-sm:flex-col max-sm:gap-4 max-sm:text-center">
                        <div className="flex items-center">
                            <svg width="180" height="40" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="20" r="12" fill="#4CAF50" opacity="0.8" />
                                <circle cx="24" cy="16" r="10" fill="#2196F3" opacity="0.8" />
                                <text x="40" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="currentColor" className="text-[#6b7280] dark:text-[#9ca3af]">MetaTrader</text>
                                <text x="148" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#FF9800">4</text>
                            </svg>
                        </div>
                        <button className="bg-white dark:bg-[#1f2937] text-[#1a1a1a] dark:text-[#f3f4f6] border border-[#d1d5db] dark:border-[#4b5563] px-5 py-2.5 rounded-md text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f7f9fc] dark:hover:bg-[#374151] hover:border-[#0072ff] hover:text-[#0072ff] dark:hover:text-[#60a5fa]">Supported platforms</button>
                    </div>

                    <div className="bg-[#f8f9fa] dark:bg-[#262626] flex items-center justify-between p-6 mb-3 rounded-lg border border-[#e5e7eb] dark:border-[#333] max-sm:flex-col max-sm:gap-4 max-sm:text-center">
                        <div className="flex items-center">
                            <svg width="180" height="40" viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="20" r="12" fill="#4CAF50" opacity="0.8" />
                                <circle cx="24" cy="16" r="10" fill="#2196F3" opacity="0.8" />
                                <text x="40" y="26" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600" fill="currentColor" className="text-[#6b7280] dark:text-[#9ca3af]">MetaTrader</text>
                                <text x="148" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#FF9800">5</text>
                            </svg>
                        </div>
                        <button className="bg-white dark:bg-[#1f2937] text-[#1a1a1a] dark:text-[#f3f4f6] border border-[#d1d5db] dark:border-[#4b5563] px-5 py-2.5 rounded-md text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f7f9fc] dark:hover:bg-[#374151] hover:border-[#0072ff] hover:text-[#0072ff] dark:hover:text-[#60a5fa]">Supported platforms</button>
                    </div>

                    <div className="bg-[#f8f9fa] dark:bg-[#262626] flex items-center justify-between p-6 mb-0 rounded-lg border border-[#e5e7eb] dark:border-[#333] max-sm:flex-col max-sm:gap-4 max-sm:text-center">
                        <div className="flex items-center">
                            <svg width="140" height="40" viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
                                <text x="0" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" fill="#E53935">c</text>
                                <text x="18" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="600" fill="currentColor" className="text-[#6b7280] dark:text-[#9ca3af]">Trader</text>
                            </svg>
                        </div>
                        <button className="bg-white dark:bg-[#1f2937] text-[#1a1a1a] dark:text-[#f3f4f6] border border-[#d1d5db] dark:border-[#4b5563] px-5 py-2.5 rounded-md text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f7f9fc] dark:hover:bg-[#374151] hover:border-[#0072ff] hover:text-[#0072ff] dark:hover:text-[#60a5fa]">Supported platforms</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-white dark:bg-[#141414] rounded-xl p-8 mb-6 shadow-sm">
                <div className="flex gap-6 mb-4 pb-4 border-b border-[#e5e7eb] dark:border-[#333] max-sm:flex-col max-sm:gap-3">
                    <a href="#" className="text-sm font-medium text-[#0072ff] dark:text-[#60a5fa] no-underline hover:underline">Cookie settings</a>
                    <a href="#" className="text-sm font-medium text-[#0072ff] dark:text-[#60a5fa] no-underline hover:underline">Privacy policy</a>
                    <a href="#" className="text-sm font-medium text-[#0072ff] dark:text-[#60a5fa] no-underline hover:underline">Terms & Conditions</a>
                </div>
                <p className="text-xs text-[#666] dark:text-[#9ca3af] leading-relaxed m-0 mb-4">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <p className="text-xs text-[#999] dark:text-[#6b7280] m-0">
                    2025 © Copyright - YoPips.com Made with ❤️ for trading.<br />
                    Version: 6.713b1010
                </p>
            </div>

            {/* Download Extension Modal */}
            {showDownloadModal && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[10000] animate-[fadeIn_0.2s_ease-in]"
                    onClick={() => setShowDownloadModal(false)}
                >
                    <div
                        className="bg-white dark:bg-[#141414] rounded-xl w-[90%] max-w-[600px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-[slideUpModal_0.3s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center p-6 px-8 border-b border-[#e5e7eb] dark:border-[#333]">
                            <h2 className="text-xl font-bold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Extension for your MetaTrader 4 & 5</h2>
                            <button className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer p-1 flex items-center justify-center transition-colors hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6]" onClick={() => setShowDownloadModal(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-8">
                            <div className="grid grid-cols-2 gap-8 mb-8 max-sm:grid-cols-1">
                                <div className="download-option">
                                    <h4 className="text-sm font-semibold text-[#666] dark:text-[#9ca3af] m-0 mb-3">MetaTrader 4</h4>
                                    <div className="flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="18" height="18" fill="#5a6c7d" opacity="0.2" />
                                            <rect x="6" y="6" width="12" height="12" fill="#5a6c7d" opacity="0.3" />
                                            <rect x="8" y="8" width="8" height="8" fill="#5a6c7d" />
                                        </svg>
                                        <a href="#" className="text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm font-medium hover:text-[#0072ff] dark:hover:text-[#60a5fa]">Download now</a>
                                    </div>
                                </div>

                                <div className="download-option">
                                    <h4 className="text-sm font-semibold text-[#666] dark:text-[#9ca3af] m-0 mb-3">MetaTrader 5</h4>
                                    <div className="flex items-center gap-2">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="18" height="18" fill="#5a6c7d" opacity="0.2" />
                                            <rect x="6" y="6" width="12" height="12" fill="#5a6c7d" opacity="0.3" />
                                            <rect x="8" y="8" width="8" height="8" fill="#5a6c7d" />
                                        </svg>
                                        <a href="#" className="text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm font-medium hover:text-[#0072ff] dark:hover:text-[#60a5fa]">Download now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-[#666] dark:text-[#9ca3af] m-0 mb-3">How it works?</h4>
                                <div className="flex items-center gap-2 text-[#1a1a1a] dark:text-[#f3f4f6]">
                                    <FileText size={20} />
                                    <a href="#" className="text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm font-medium hover:text-[#0072ff] dark:hover:text-[#60a5fa]">Learn more</a>
                                </div>
                            </div>

                            <div className="bg-[#e0f7fa] dark:bg-[rgba(0,184,212,0.15)] border border-[#b2ebf2] dark:border-[rgba(0,184,212,0.3)] rounded-md p-3 px-4 flex items-center gap-3">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="16" height="16" rx="2" fill="#00b8d4" />
                                    <path d="M8 4V12M4 8H12" stroke="white" strokeWidth="2" />
                                </svg>
                                <span className="text-sm font-medium text-[#00838f] dark:text-[#00bcd4]">Available only for Windows.</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Downloads;
