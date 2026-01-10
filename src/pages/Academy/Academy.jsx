import React from 'react';

function Academy() {
    return (
        <div className="max-w-[1200px] mx-auto p-0">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-6 text-[13px] text-[#999]">
                <span className="text-[#999]">Trader</span>
                <span className="text-[#ddd]">/</span>
                <span className="text-[#333] dark:text-[#f3f4f6] font-medium">Yo Pips Academy</span>
            </div>

            {/* Main Content Card */}
            <div className="bg-white dark:bg-[#141414] border border-[#eee] dark:border-[#333] rounded-lg p-12 mb-10 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <h1 className="text-2xl font-bold m-0 mb-6 text-[#1a1a1a] dark:text-[#f3f4f6]">Yo Pips Academy</h1>
                <p className="text-[15px] text-[#333] dark:text-[#d1d5db] leading-[1.7] m-0 mb-8">
                    Learn trading knowledge from basic to advanced levels, test yourself, and move closer to trading with up to $200,000 on a Yo Pips Account.
                    Gain access to comprehensive materials, progress, take exams and receive rewards. Our Yo Pips Academy is free for everyone interested in becoming a serious trader.
                    Are you ready to become one of them?
                </p>
                <button className="bg-[#007bff] hover:bg-[#0056b3] text-white border-none px-8 py-3 rounded-md text-sm font-semibold cursor-pointer transition-colors duration-200">Yo Pips Academy</button>
            </div>

            {/* Footer */}
            <div className="pt-10 border-t border-[#eee] dark:border-[#333]">
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

export default Academy;
