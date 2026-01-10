import React, { useState } from 'react';
import { Info } from 'lucide-react';
import { Link } from 'react-router-dom';

function Certificates() {
    const [activeFilter, setActiveFilter] = useState('all');

    const certificates = [
        { id: 1, type: 'Supreme Trader', level: 'Yo Pips', status: 'Certified', color: '#6b7280' },
        { id: 2, type: 'Prime Trader', level: 'Yo Pips', status: 'Certified', color: '#6b7280' },
        { id: 3, type: 'Max Allocation', level: 'Yo Pips', amount: '', color: '#87CEEB' },
        { id: 4, type: 'Paywall Rewards', level: 'Yo Pips', amount: '$50,000.00', color: '#8B4789' },
        { id: 5, type: 'Overall Rewards', level: 'Yo Pips', amount: '$20,000.00', color: '#D4AF37' },
        { id: 6, type: 'Paywell Rewards', level: 'Yo Pips', amount: '$10,000.00', color: '#6b7280' },
        { id: 7, type: 'Overall Rewards', level: 'Yo Pips', amount: '$5,000.00', color: '#8B4789' },
        { id: 8, type: 'Paywell', level: 'Yo Pips', amount: '$100.00', color: '#6b7280' },
        { id: 9, type: 'Passed', level: 'FTMO Challenge', subtitle: 'Yo Pips', color: '#6b7280' },
        { id: 10, type: 'Passed', level: 'Verification', subtitle: 'Yo Pips', color: '#6b7280' },
        { id: 11, type: 'FTMO Academy', level: 'Yo Pips', percent: '0%', color: '#6b7280' }
    ];

    return (
        <div className="px-8 py-6 bg-[#f5f5f5] dark:bg-[#0d0d0d] min-h-screen">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-6 text-[13px] text-[#666] dark:text-[#9ca3af]">
                <span className="text-[#666] dark:text-[#9ca3af]">Trader</span>
                <span className="mx-2 text-[#666] dark:text-[#9ca3af]">/</span>
                <span className="text-[#666] dark:text-[#9ca3af]">Certificates</span>
            </div>

            {/* Header with Filters */}
            <div className="bg-white dark:bg-[#141414] rounded-t-xl px-8 pt-6">
                <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-[#f3f4f6] mb-5">Certificate</h2>
                <div className="flex gap-2 border-b border-[#e5e7eb] dark:border-[#374151]">
                    {['all', 'challenge', 'payout', 'other'].map(filter => (
                        <button
                            key={filter}
                            className={`bg-transparent border-none px-5 py-3 text-sm font-medium text-[#666] dark:text-[#9ca3af] cursor-pointer border-b-2 transition-all duration-200 hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] capitalize ${activeFilter === filter ? 'text-[#0072ff] dark:text-[#0072ff] border-[#0072ff]' : 'border-transparent'}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter === 'all' ? 'All certificates' : filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Info Notice */}
            <div className="bg-white dark:bg-[#141414] px-8 py-4 flex items-start gap-3 text-[#666] dark:text-[#9ca3af] text-[13px] leading-relaxed">
                <Info size={16} className="text-[#0072ff] shrink-0 mt-[2px]" />
                <p className="m-0">
                    All your certificates are locked for 14 days after they have been issued.{' '}
                    <a href="#" className="text-[#0072ff] underline hover:text-[#0056b3]">Learn more</a>
                </p>
            </div>

            {/* Certificates Grid */}
            <div className="bg-white dark:bg-[#141414] rounded-b-xl p-8 grid grid-cols-2 gap-6 mb-6 max-md:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] max-md:gap-4">
                {certificates.map((cert) => (
                    <div key={cert.id} className="relative aspect-[1.4/1] rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_4px_16px_rgba(0,0,0,0.15)] bg-white dark:bg-[#262626]">
                        <div className="absolute top-3 right-3 bg-[#8B4789] text-white px-3 py-1 rounded text-[11px] font-semibold z-10">
                            {(cert.type === 'Supreme Trader' || cert.type === 'Prime Trader') ? 'Certified' : ''}
                        </div>
                        <div className="relative w-full h-full bg-linear-to-br from-[#9ca3af] to-[#6b7280] dark:from-[#4b5563] dark:to-[#1f2937] p-6 flex flex-col justify-center items-center text-center text-white">
                            <div className="text-[11px] font-semibold uppercase tracking-wider mb-2 opacity-90">{cert.type}</div>
                            <div className="text-2xl font-bold mb-1">{cert.level}</div>
                            {cert.subtitle && <div className="text-sm mb-2 opacity-90">{cert.subtitle}</div>}
                            {cert.amount && <div className="text-[32px] font-bold mt-3">{cert.amount}</div>}
                            {cert.percent && <div className="text-4xl font-bold mt-4">{cert.percent}</div>}
                            {cert.type === 'FTMO Academy' && (
                                <div className="flex gap-3 text-2xl mt-4">
                                    <span>📚</span>
                                    <span>📊</span>
                                    <span>💡</span>
                                    <span>🎯</span>
                                </div>
                            )}
                            <div className="absolute bottom-4 right-4">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="white" opacity="0.3">
                                    <rect width="40" height="40" rx="4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="bg-white dark:bg-[#141414] rounded-xl px-8 py-6">
                <div className="flex gap-6 mb-4 pb-4 border-b border-[#e5e7eb] dark:border-[#374151]">
                    <a href="#" className="text-[#0072ff] no-underline text-sm font-medium hover:underline">Cookie settings</a>
                    <a href="#" className="text-[#0072ff] no-underline text-sm font-medium hover:underline">Privacy policy</a>
                    <a href="#" className="text-[#0072ff] no-underline text-sm font-medium hover:underline">Terms & Conditions</a>
                </div>
                <p className="text-xs text-[#666] dark:text-[#9ca3af] leading-relaxed m-0 mb-4">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation. Yo Pips only provides services of simulated trading and educational tools for traders.
                </p>
                <p className="text-xs text-[#999] m-0">
                    2025 © Copyright - YoPips.com Made with ❤️ for trading.<br />
                    Version: 6.713b1010
                </p>
            </div>
        </div>
    );
}

export default Certificates;
