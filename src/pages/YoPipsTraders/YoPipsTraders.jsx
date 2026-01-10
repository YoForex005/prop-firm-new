import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';

function YoPipsTraders() {
    const navigate = useNavigate();
    return (
        <div className="max-w-[1200px] mx-auto p-0">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-6 text-[13px] text-[#999]">
                <span className="text-[#999]">Trader</span>
                <span className="text-[#ddd]">/</span>
                <span className="text-[#333] dark:text-[#f3f4f6] font-medium">Yo Pips Traders</span>
            </div>

            {/* Warning Banner */}
            <div className="bg-[#fff8e1] dark:bg-[#fff8e1]/10 border border-[#ffc107] rounded-lg p-4 px-5 flex items-center gap-3 mb-8 text-[13px] text-[#856404] dark:text-[#ffd54f]">
                <Info size={20} className="text-[#ff8c00] shrink-0" />
                <span>
                    Sorry, this page is accessible only to Yo Pips Traders (Yo Pips Traders are those who already passed the Evaluation Process and are managing an Yo Pips Account).
                </span>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#1e88e5] to-[#1565c0] rounded-xl p-[60px] px-10 text-center text-white relative overflow-hidden mb-10">
                <div className="inline-flex w-20 h-20 bg-white/15 rounded-2xl items-center justify-center mb-8">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>

                <h1 className="text-4xl md:text-[28px] lg:text-4xl font-bold m-0 mb-12 text-white">Ready to become a Yo Pips Trader?</h1>

                {/* Phone Mockups */}
                <div className="flex justify-center items-center gap-10 mb-10 min-h-[300px] md:gap-5">
                    <div className="w-[180px] h-[360px] relative transform -rotate-[10deg] translate-y-5 md:w-[140px] md:h-[280px]">
                        <div className="w-full h-full bg-[#1a1a1a] rounded-[30px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-[3px] border-[#333]">
                            <div className="w-full h-full bg-gradient-to-b from-[#2c3e50] to-[#1a252f] rounded-[20px]"></div>
                        </div>
                    </div>
                    <div className="w-[180px] h-[360px] relative transform rotate-[10deg] -translate-y-5 md:w-[140px] md:h-[280px]">
                        <div className="w-full h-full bg-[#1a1a1a] rounded-[30px] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] border-[3px] border-[#333]">
                            <div className="w-full h-full bg-gradient-to-b from-[#2c3e50] to-[#1a252f] rounded-[20px]"></div>
                        </div>
                    </div>
                </div>

                <div className="text-2xl font-bold mb-10 tracking-wider">
                    YO PIPS ACCOUNT UP TO <span className="text-[#ffa726] text-[28px]"> $200,000</span>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-5 max-w-[700px] mx-auto mb-12 text-left">
                    <div className="flex items-center gap-3 text-base font-semibold">
                        <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Up to 90% Reward for traders</span>
                    </div>
                    <div className="flex items-center gap-3 text-base font-semibold">
                        <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Unlimited trading period</span>
                    </div>
                    <div className="flex items-center gap-3 text-base font-semibold">
                        <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Custom Trading Apps</span>
                    </div>
                    <div className="flex items-center gap-3 text-base font-semibold">
                        <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Performance coach</span>
                    </div>
                    <div className="flex items-center gap-3 text-base font-semibold">
                        <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Account Analysis</span>
                    </div>
                    <div className="flex items-center gap-3 text-base font-semibold">
                        <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="10" fill="rgba(255,255,255,0.2)" />
                            <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                        <span>Scaling Plan</span>
                    </div>
                </div>

                <button className="bg-[#1a1a1a] text-white border-none py-4 px-12 rounded-lg text-base font-bold cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:bg-[#2a2a2a] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)]" onClick={() => navigate('/new-challenge')}>Accept Yo Pips Challenge</button>
            </div>

            {/* Footer */}
            <div className="pt-10 border-t border-[#eee] dark:border-[#333] mt-10">
                <div className="flex gap-5 mb-4">
                    <a href="#" className="text-xs text-[#666] dark:text-[#9ca3af] underline font-semibold">Cookie settings</a>
                    <a href="#" className="text-xs text-[#666] dark:text-[#9ca3af] underline font-semibold">Privacy policy</a>
                    <a href="#" className="text-xs text-[#666] dark:text-[#9ca3af] underline font-semibold">Terms & Conditions</a>
                </div>
                <p className="text-[11px] text-[#999] leading-[1.6] m-0 mb-4">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a
                    specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of
                    investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at
                    residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker
                    and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <div className="text-[11px] text-[#999]">
                    2026 © Copyright - YoPips.com Made with ♥ for trading.
                    <br />
                    Version: 673b1000
                </div>
            </div>
        </div>
    );
}

export default YoPipsTraders;
