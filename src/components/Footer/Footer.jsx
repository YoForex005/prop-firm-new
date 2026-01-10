import React from 'react';

function Footer() {
    return (
        <footer className="mt-12 py-8 pb-16 border-t border-[#e5e7eb] dark:border-[#374151]">
            <div className="flex justify-center gap-6 mb-6">
                <span className="text-[11px] font-bold text-[#1a1a1a] dark:text-[#9ca3af] underline cursor-pointer hover:text-[#2563eb] dark:hover:text-white transition-colors">Cookie settings</span>
                <span className="text-[11px] font-bold text-[#1a1a1a] dark:text-[#9ca3af] underline cursor-pointer hover:text-[#2563eb] dark:hover:text-white transition-colors">Privacy policy</span>
                <span className="text-[11px] font-bold text-[#1a1a1a] dark:text-[#9ca3af] underline cursor-pointer hover:text-[#2563eb] dark:hover:text-white transition-colors">Terms & Conditions</span>
            </div>

            <p className="text-[10px] text-[#6b7280] dark:text-[#6b7280] leading-[1.6] text-center max-w-[1000px] mx-auto mb-6 px-4">
                All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a
                specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of
                investment instruments. FTMO only provides services of simulated trading and educational tools for traders. The information on this site is not directed at
                residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. FTMO companies do not act as a broker and
                do not accept any deposits. The offered technical solution for the FTMO platforms and data feed is powered by Liquidity providers.
            </p>

            <div className="text-[10px] text-[#6b7280] dark:text-[#6b7280] text-center">
                2026 © Copyright - FTMO.com Made with ❤️ for trading.<br />
                Version: 673b1000
            </div>
        </footer>
    );
}

export default Footer;
