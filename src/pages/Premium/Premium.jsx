import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';

function Premium() {
    const [activeTab, setActiveTab] = useState('main-info');
    const [isPrimeModalOpen, setIsPrimeModalOpen] = useState(false);
    const [isSupremeModalOpen, setIsSupremeModalOpen] = useState(false);
    const [isQuantlaneModalOpen, setIsQuantlaneModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="max-w-[1200px] mx-auto p-0">
            {/* ... Existing ... */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#eee] dark:border-[#374151]">
                <div className="flex items-center gap-3">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-[#666] dark:text-[#9ca3af]">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <h1 className="text-[22px] font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Premium</h1>
                </div>
                <div className="flex gap-2">
                    <button
                        className={`bg-none border-none px-4 py-2 text-sm font-semibold cursor-pointer border-b-2 transition-all duration-200 ${activeTab === 'main-info' ? 'text-[#007bff] border-b-[#007bff]' : 'text-[#999] dark:text-[#6b7280] border-transparent hover:text-[#007bff] dark:hover:text-[#007bff]'}`}
                        onClick={() => setActiveTab('main-info')}
                    >
                        Main info
                    </button>
                    <button
                        className={`bg-none border-none px-4 py-2 text-sm font-semibold cursor-pointer border-b-2 transition-all duration-200 ${activeTab === 'faq' ? 'text-[#007bff] border-b-[#007bff]' : 'text-[#999] dark:text-[#6b7280] border-transparent hover:text-[#007bff] dark:hover:text-[#007bff]'}`}
                        onClick={() => setActiveTab('faq')}
                    >
                        FAQ
                    </button>
                </div>
            </div>

            <div className="bg-[#fff3cd] dark:bg-[rgba(255,193,7,0.15)] border border-[#ffc107] dark:border-[rgba(255,193,7,0.3)] rounded-lg px-5 py-4 flex items-center gap-3 mb-8 text-[13px] text-[#856404] dark:text-[#ffc107]">
                <Info size={20} className="min-w-[20px] text-[#ff8c00]" />
                <span>
                    In order to participate, qualify for our Premium Programme, you must have at least 1 active Yo Pips Account while meeting the remaining conditions. Check the FAQ section for more details.
                </span>
                <button className="ml-auto bg-[#ff8c00] text-white border-none px-4 py-2 rounded-md font-semibold cursor-pointer whitespace-nowrap" onClick={() => navigate('/new-challenge')}>Start Yo Pips Challenge</button>
            </div>

            <div className="text-center">
                <h2 className="text-[32px] font-bold mb-6 text-[#1a1a1a] dark:text-[#f3f4f6]">READY FOR THE PREMIUM PROGRAMME?</h2>
                <p className="text-[15px] text-[#333] dark:text-[#e5e7eb] mb-4 leading-relaxed">
                    Welcome to our exclusive Premium Programme! At Yo Pips, we believe in rewarding our most consistent profitable traders and that's why this Premium Programme was created just for you.
                </p>
                <p className="text-sm text-[#666] dark:text-[#9ca3af] mb-12 leading-relaxed">
                    As a top-performing trader, you will enjoy a host of exciting benefits and personalized perks designed to enhance your trading experience with us. Join us on this exclusive journey and unlock a world of privileges and exceptional treatment. <a href="#" className="text-[#007bff] no-underline">Learn more in the FAQ</a>.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                    {/* Prime Tier */}
                    <div className="bg-white dark:bg-[#1f2937] border border-[#eee] dark:border-[#374151] rounded-xl p-8 px-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                        <div className="mb-6">
                            <div className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 bg-[#3d3f71] text-white">
                                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                            </div>
                            <div className="text-2xl font-bold tracking-widest text-[#3d3f71]">PRIME</div>
                        </div>
                        <h3 className="text-lg font-bold mb-6 text-left text-[#1a1a1a] dark:text-[#f3f4f6]">Prime benefits</h3>
                        <div className="text-left mb-6">
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>1 Free Challenge of same size</span>
                                <Info size={14} className="text-[#999] ml-auto shrink-0 cursor-pointer" />
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Unlocked $400k Yo Pips Challenge</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>$800k Max. Capital Allocation</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>60% Reward</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Sign up on new Yo Pips Challenges</span>
                                <Info size={14} className="text-[#999] ml-auto shrink-0 cursor-pointer" />
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>5% rollover bonus</span>
                                <Info size={14} className="text-[#999] ml-auto shrink-0 cursor-pointer" />
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Dedicated support</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Certificate of achievement</span>
                            </div>
                        </div>
                        <button className="w-full p-2.5 bg-white dark:bg-[#374151] border border-[#ddd] dark:border-[#4b5563] rounded-md font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f7f7f7] dark:hover:bg-[#4b5563] text-[#1a1a1a] dark:text-[#e5e7eb]" onClick={() => setIsPrimeModalOpen(true)}>More Details</button>
                    </div>

                    {/* Supreme Tier */}
                    <div className="bg-white dark:bg-[#1f2937] border border-[#eee] dark:border-[#374151] rounded-xl p-8 px-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                        <div className="mb-6">
                            <div className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 bg-[#6b4423] text-[#ffd700]">
                                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <div className="text-2xl font-bold tracking-widest text-[#6b4423]">SUPREME</div>
                        </div>
                        <h3 className="text-lg font-bold mb-6 text-left text-[#1a1a1a] dark:text-[#f3f4f6]">Supreme benefits</h3>
                        <div className="text-left mb-6">
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Prime benefits</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>$1M Max. Capital Allocation</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Invalidates reward</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>No Maximum Daily Loss</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Possible job interview at Quantlane</span>
                            </div>
                        </div>
                        <button className="w-full p-2.5 bg-white dark:bg-[#374151] border border-[#ddd] dark:border-[#4b5563] rounded-md font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f7f7f7] dark:hover:bg-[#4b5563] text-[#1a1a1a] dark:text-[#e5e7eb]" onClick={() => setIsSupremeModalOpen(true)}>More Details</button>
                    </div>

                    {/* Quantlane Tier */}
                    <div className="bg-white dark:bg-[#1f2937] border border-[#eee] dark:border-[#374151] rounded-xl p-8 px-6 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                        <div className="mb-6">
                            <div className="w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 bg-[#2a2a2a] text-[#ff8c00]">
                                <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </div>
                            <div className="text-2xl font-bold tracking-widest text-[#2a2a2a]">QUANTLANE</div>
                        </div>
                        <h3 className="text-lg font-bold mb-6 text-left text-[#1a1a1a] dark:text-[#f3f4f6]">Quantlane benefits</h3>
                        <div className="text-left mb-6">
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>3-year contract. No fixed salary</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Performance & mindset coach</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Relocation package</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Competitive trading bonus scheme</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Part of the team</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Custom platform & tooling</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Trading station in Prague</span>
                            </div>
                            <div className="flex items-center gap-2.5 mb-3 text-sm text-[#333] dark:text-[#e5e7eb]">
                                <div className="w-5 h-5 bg-[#fff3cd] rounded flex items-center justify-center font-bold text-[#ffa500] shrink-0 text-xs">✓</div>
                                <span>Institutional trading conditions - spreads, liquidity, risk framework</span>
                            </div>
                        </div>
                        <button className="w-full p-2.5 bg-white dark:bg-[#374151] border border-[#ddd] dark:border-[#4b5563] rounded-md font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f7f7f7] dark:hover:bg-[#4b5563] text-[#1a1a1a] dark:text-[#e5e7eb]" onClick={() => setIsQuantlaneModalOpen(true)}>More Details</button>
                    </div>
                </div>

                <button className="bg-[#007bff] text-white border-none py-3.5 px-12 rounded-md text-base font-semibold cursor-pointer mb-16 hover:bg-[#0056b3] transition-colors duration-200" onClick={() => navigate('/new-challenge')}>Start Now</button>

                <div className="text-left mt-16 pt-10 border-t border-[#eee] dark:border-[#374151]">
                    <div className="flex gap-5 mb-4 text-xs">
                        <a href="#" className="text-[#666] dark:text-[#9ca3af] underline font-semibold">Cookie settings</a>
                        <a href="#" className="text-[#666] dark:text-[#9ca3af] underline font-semibold">Privacy policy</a>
                        <a href="#" className="text-[#666] dark:text-[#9ca3af] underline font-semibold">Terms & Conditions</a>
                    </div>
                    <p className="text-[11px] text-[#999] dark:text-[#9ca3af] leading-relaxed mb-4">
                        All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                    </p>
                    <div className="text-[11px] text-[#999] dark:text-[#9ca3af]">
                        2026 © Copyright - YoPips.com Made with ♥ for trading
                        <br />
                        Version: 673b1000
                    </div>
                </div>
            </div>

            {/* PRIME TRADER MODAL */}
            {isPrimeModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] animate-[fadeIn_0.2s_ease-out]" onClick={() => setIsPrimeModalOpen(false)}>
                    <div className="bg-white dark:bg-[#1f2937] w-full max-w-[800px] rounded-xl overflow-hidden relative max-h-[90vh] overflow-y-auto animate-[slideUp_0.3s_ease-out] shadow-2xl" onClick={e => e.stopPropagation()}>
                        <button className="absolute top-4 right-4 bg-transparent border-none text-white/70 cursor-pointer z-10 p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors" onClick={() => setIsPrimeModalOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e] p-10 flex justify-center items-center">
                            <div className="text-center text-white">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                                <div className="text-[32px] font-extrabold mt-2 tracking-widest italic bg-gradient-to-b from-white to-[#e0e0e0] text-transparent bg-clip-text drop-shadow-sm">PRIME</div>
                            </div>
                        </div>
                        <div className="p-10 text-[#333] dark:text-[#e5e7eb]">
                            <h2 className="text-center text-2xl font-bold mb-4 text-[#111] dark:text-[#f3f4f6]">Prime Trader</h2>
                            <p className="text-center text-[13px] leading-relaxed text-[#555] dark:text-[#9ca3af] max-w-[700px] mx-auto mb-10">
                                Prime Trader is the first level in our Premium Programme. Once all the conditions are completed, your Yo Pips Account will be automatically submitted for a review. Upon completion, you will be allowed to enjoy all the benefits of the Prime Trader.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Benefits - Orange */}
                                <div>
                                    <h3 className="text-lg font-bold mb-6 text-[#111] dark:text-[#f3f4f6]">Prime benefits</h3>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>1x Free Yo Pips Challenge of same size</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>Unlocked $400K Yo Pips Challenge</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>$600K Max. Capital Allocation</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>90% Reward</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>10% off on new Yo Pips Challenges</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>5% rollover bonus</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>Dedicated support</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>Certificate of achievement</span>
                                    </div>
                                </div>

                                {/* Conditions - Teal */}
                                <div>
                                    <h3 className="text-lg font-bold mb-6 text-[#111] dark:text-[#f3f4f6]">Prime conditions</h3>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#00c4b4] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <span>Active Yo Pips Account</span>
                                            <Info size={16} color="#666" />
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#00c4b4] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>No failed Yo Pips Account in the last 4 months</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#00c4b4] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>Process 4 Rewards with at least 4% profit per Reward.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* SUPREME TRADER MODAL */}
            {isSupremeModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] animate-[fadeIn_0.2s_ease-out]" onClick={() => setIsSupremeModalOpen(false)}>
                    <div className="bg-white dark:bg-[#1f2937] w-full max-w-[800px] rounded-xl overflow-hidden relative max-h-[90vh] overflow-y-auto animate-[slideUp_0.3s_ease-out] shadow-2xl" onClick={e => e.stopPropagation()}>
                        <button className="absolute top-4 right-4 bg-transparent border-none text-white/70 cursor-pointer z-10 p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors" onClick={() => setIsSupremeModalOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e] p-10 flex justify-center items-center">
                            <div className="text-center text-white">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <div className="text-[32px] font-extrabold mt-2 tracking-widest italic bg-gradient-to-b from-[#ffd700] to-[#b8860b] text-transparent bg-clip-text drop-shadow-sm">SUPREME</div>
                            </div>
                        </div>
                        <div className="p-10 text-[#333] dark:text-[#e5e7eb]">
                            <h2 className="text-center text-2xl font-bold mb-4 text-[#111] dark:text-[#f3f4f6]">Supreme Trader</h2>
                            <p className="text-center text-[13px] leading-relaxed text-[#555] dark:text-[#9ca3af] max-w-[700px] mx-auto mb-10">
                                Supreme Trader is the second level of the Premium Programme which will give you all of the perks as a Prime Trader along with some extra benefits. As a Supreme Trader, you will also be invited to be assessed for a job offer at our proprietary trading firm Quantlane where you will have a fixed based salary and an open door to the truly professional trading world.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Benefits - Orange */}
                                <div>
                                    <h3 className="text-lg font-bold mb-6 text-[#111] dark:text-[#f3f4f6]">Supreme benefits</h3>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>Prime benefits</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>$1M Max. Capital Allocation</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>Immediate reward</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>No Maximum Daily Loss</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>Physical badge of achievement</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 flex items-center justify-center text-[#ff4500] shrink-0">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>
                                        </div>
                                        <span>Possible job interview at Quantlane</span>
                                    </div>
                                </div>

                                {/* Conditions - Teal */}
                                <div>
                                    <h3 className="text-lg font-bold mb-6 text-[#111] dark:text-[#f3f4f6]">Supreme conditions</h3>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#00c4b4] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <span>Active $400K Yo Pips Account</span>
                                            <Info size={16} color="#666" />
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#00c4b4] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>Prime Trader for 3 months</span>
                                    </div>
                                    <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug">
                                        <div className="w-5 h-5 bg-[#00c4b4] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div>
                                        <span>Process 3 additional rewards with at least 4% profit per reward on the $400k Yo Pips Account</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* QUANTLANE TRADER MODAL */}
            {isQuantlaneModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] animate-[fadeIn_0.2s_ease-out]" onClick={() => setIsQuantlaneModalOpen(false)}>
                    <div className="bg-white dark:bg-[#1f2937] w-full max-w-[800px] rounded-xl overflow-hidden relative max-h-[90vh] overflow-y-auto animate-[slideUp_0.3s_ease-out] shadow-2xl" onClick={e => e.stopPropagation()}>
                        <button className="absolute top-4 right-4 bg-transparent border-none text-white/70 cursor-pointer z-10 p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors" onClick={() => setIsQuantlaneModalOpen(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <div className="bg-gradient-to-br from-[#2a2a4a] to-[#1a1a2e] p-10 flex justify-center items-center">
                            <div className="text-center text-white">
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ff8c00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                                </svg>
                                <div className="text-[32px] font-extrabold mt-2 tracking-widest text-[#fff] font-light tracking-[4px]">QUANTLANE</div>
                            </div>
                        </div>
                        <div className="p-10 text-[#333] dark:text-[#e5e7eb]">
                            <h2 className="text-center text-2xl font-bold mb-4 text-[#111] dark:text-[#f3f4f6]">Quantlane Trader</h2>
                            <p className="text-center text-[13px] leading-relaxed text-[#555] dark:text-[#9ca3af] max-w-[700px] mx-auto mb-10">
                                The Quantlane Trader represents the pinnacle of achievement in the Yo Pips Premium Programme. This prestigious designation opens the doors to the professional trading world, signifying the trader's dedication and expertise. Achieving the Quantlane Trader is a testament to the seriousness and passion for trading, showcasing a commitment to excellence in the financial markets. <a href="#" className="text-[#007bff] no-underline">More Info.</a>
                            </p>

                            <h3 className="text-center text-lg font-bold mb-6 text-[#111] dark:text-[#f3f4f6]">Quantlane benefits</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                                <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug"> <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div> <span>2 year contract with fixed salary</span> </div>
                                <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug"> <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div> <span>Part of the team</span> </div>
                                <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug"> <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div> <span>Performance & mindset coach</span> </div>
                                <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug"> <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div> <span>Custom platform & tooling</span> </div>
                                <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug"> <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div> <span>Relocation package</span> </div>
                                <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug"> <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div> <span>Trading station in Prague</span> </div>
                                <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug"> <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div> <span>Competitive trading bonus scheme</span> </div>
                                <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug"> <div className="w-5 h-5 bg-[#ffb700] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div> <span>Institutional trading conditions - spreads, liquidity, risk framework</span> </div>
                            </div>

                            <h3 className="text-center text-lg font-bold mb-6 text-[#111] dark:text-[#f3f4f6]">Quantlane conditions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug"> <div className="w-5 h-5 bg-[#00c4b4] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div> <span>Be a supreme trader</span> </div>
                                <div className="flex items-start gap-3 mb-4 text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] leading-snug"> <div className="w-5 h-5 bg-[#00c4b4] rounded flex items-center justify-center shrink-0 text-white text-xs">✓</div> <span>Pass the assessment</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Premium;
