import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Home, Info } from 'lucide-react';

function FreeTrial() {
    const navigate = useNavigate();

    return (
        <div className="p-5 px-10 bg-[#f8f9fa] dark:bg-[var(--bg-color)] min-h-[calc(100vh-64px)] font-sans">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-[#6c757d] mb-[30px]">
                <Home size={14} className="mr-2 mb-0.5" />
                <span className="mx-2 text-[#ced4da] dark:text-[#495057]">/</span>
                <span>Trader</span>
                <span className="mx-2 text-[#ced4da] dark:text-[#495057]">/</span>
                <span className="text-[#212529] dark:text-[#e9ecef] font-medium">Free Trial</span>
            </div>

            <div className="relative bg-white dark:bg-[#1f2937] rounded-lg shadow-sm p-10 min-h-[400px] mb-[60px] border border-transparent dark:border-[#374151]">
                {/* Blurred Background Content (Mocking the underlying form) */}
                <div className="blur-[4px] opacity-50 pointer-events-none select-none">
                    <div className="mb-10">
                        <h1 className="text-2xl text-[#343a40] dark:text-[#f3f4f6] mb-2.5 font-bold">Start Free Trial</h1>
                        <p className="text-[#6c757d] dark:text-[#9ca3af] text-sm max-w-[700px] mb-1.5">Use this opportunity to get the feel of our Trading Objectives without risking anything. Be disciplined and manage your risk carefully.</p>
                        <p className="text-[#6c757d] dark:text-[#9ca3af] text-sm max-w-[700px] mb-1.5">Our 14-day Free Trial is a shortened version of the Yo Pips Challenge so you practice trading with us.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-[30px] mt-10">
                        <div className="blur-card">
                            <h3 className="text-base mb-4 text-[#495057] dark:text-[#adb5bd] font-semibold">Account Balance</h3>
                            <div className="h-3 rounded bg-[#e9ecef] dark:bg-[#374151] mb-2 w-[40%]"></div>
                            <div className="h-3 rounded bg-[#e9ecef] dark:bg-[#374151] mb-2 w-[80%]"></div>
                        </div>
                        <div className="blur-card">
                            <h3 className="text-base mb-4 text-[#495057] dark:text-[#adb5bd] font-semibold">Summary</h3>
                            <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] dark:bg-[#111827] rounded-md">
                                <div className="w-10 h-10 bg-[#e9ecef] dark:bg-[#374151] rounded-full"></div>
                                <div>
                                    <div className="font-semibold text-[#343a40] dark:text-[#e9ecef] mb-1">Free Trial</div>
                                    <div className="text-[#6c757d] dark:text-[#9ca3af] text-[13px]">$200,000 account</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Active Trial Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-[600px] bg-transparent z-10 p-5">
                    <div className="mb-5 flex justify-center">
                        <Lock size={40} color="#6c757d" />
                    </div>
                    <h2 className="text-lg font-bold text-[#212529] dark:text-[#f3f4f6] mb-2.5 w-full">Active Free Trial Detected</h2>
                    <p className="text-sm text-[#495057] dark:text-[#adb5bd] mb-2.5 leading-normal">
                        You currently have an active Free Trial (Login: 1512264795). To start a new one, please end your current trial first.
                    </p>
                    <a href="#" className="block text-[#6c757d] dark:text-[#9ca3af] underline text-sm mb-[30px]">Learn more about managing Free Trial settings here.</a>

                    <button
                        className="bg-[#007bff] hover:bg-[#0056b3] text-white border-none px-6 py-2.5 rounded-md font-semibold text-sm cursor-pointer transition-colors duration-200"
                        onClick={() => navigate('/')}
                    >
                        Back to Accounts Overview
                    </button>
                </div>
            </div>

            <div className="text-left text-[#6c757d] text-xs pt-5 border-t border-transparent dark:border-[#374151]">
                <div className="mb-2.5">
                    <a href="#" className="decoration-none text-[#495057] dark:text-[#9ca3af] mr-4 font-medium hover:underline">Cookie settings</a>
                    <a href="#" className="decoration-none text-[#495057] dark:text-[#9ca3af] mr-4 font-medium hover:underline">Privacy policy</a>
                    <a href="#" className="decoration-none text-[#495057] dark:text-[#9ca3af] mr-4 font-medium hover:underline">Terms & Conditions</a>
                </div>
                <p className="mb-4 leading-normal text-[11px] text-[#6c757d] dark:text-[#6b7280]">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <p className="mb-1.5 copyright">2026 © Copyright - YoPips.com Made with ❤️ for trading.</p>
                <p className="text-[#adb5bd]">Version: 673b1000</p>
            </div>
        </div>
    );
}

export default FreeTrial;
