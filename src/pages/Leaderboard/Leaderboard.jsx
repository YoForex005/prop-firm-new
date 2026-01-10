import React, { useState } from 'react';
import { Trophy, Award, Coins, Wallet } from 'lucide-react';

function Leaderboard() {
    const [activeFilter, setActiveFilter] = useState('All');

    const data = [
        { rank: 1, name: 'Gert D', profit: '+$55,843.48', profitP: '+55.44%', win: '91.2%', pair: 'XAUUSD', avgWin: '$935.27', avgLoss: '-$135.90', dur: '1h 30m', trades: 36, lossS: 5, winS: 4 },
        { rank: 2, name: 'Amad B', profit: '+$22,793.70', profitP: '+27.84%', win: '66.0%', pair: 'XAUUSD', avgWin: '$83.16', avgLoss: '-$30.44', dur: '2h 2m', trades: 200, lossS: 14, winS: 11 },
        { rank: 3, name: 'Paulos H', profit: '+$22,699.99', profitP: '+25.99%', win: '23.3%', pair: 'XAUUSD', avgWin: '$430.24', avgLoss: '-$104.36', dur: '43m', trades: 30, lossS: 6, winS: 2 },
        { rank: 4, name: 'Rao H', profit: '+$21,039.71', profitP: '+28.39%', win: '58.0%', pair: 'XAUUSD', avgWin: '$210.61', avgLoss: '-$112.25', dur: '2h 41m', trades: 54, lossS: 0, winS: 5 },
        { rank: 5, name: 'Wisha M', profit: '+$21,512.47', profitP: '+29.12%', win: '43.8%', pair: 'XAUUSD', avgWin: '$245.17', avgLoss: '-$87.84', dur: '3h 33m', trades: 48, lossS: 6, winS: 7 },
        { rank: 6, name: 'Muhammad S', profit: '+$21,510.60', profitP: '+25.14%', win: '18.1%', pair: 'XAUUSD', avgWin: '$334.80', avgLoss: '-$91.85', dur: '44m', trades: 155, lossS: 19, winS: 3 },
        { rank: 7, name: 'Hicham T', profit: '+$21,422.99', profitP: '+24.31%', win: '52.6%', pair: 'XAUUSD', avgWin: '$142.24', avgLoss: '-$60.52', dur: '1h 3m', trades: 75, lossS: 1, winS: 11 },
        { rank: 8, name: 'Nurkattan N', profit: '+$21,300.95', profitP: '+22.80%', win: '33.5%', pair: 'XAUUSD', avgWin: '$113.85', avgLoss: '-$33.47', dur: '42m', trades: 335, lossS: 16, winS: 4 },
        { rank: 9, name: 'Abdelyali K', profit: '+$21,154.04', profitP: '+21.55%', win: '58.1%', pair: 'XAUUSD', avgWin: '$50.44', avgLoss: '-$43.37', dur: '45m', trades: 194, lossS: 7, winS: 11 },
        { rank: 10, name: 'Mohes A', profit: '+$21,138.43', profitP: '+21.30%', win: '88.2%', pair: 'XAUUSD', avgWin: '$145.89', avgLoss: '-$60.77', dur: '34m', trades: 83, lossS: 14, winS: 8 },
        { rank: 11, name: 'Josie W', profit: '+$21,081.08', profitP: '+22.21%', win: '58.1%', pair: 'XAUUSD', avgWin: '$145.39', avgLoss: '-$35.39', dur: '45m', trades: 39, lossS: 5, winS: 5 },
        { rank: 12, name: 'Abd H', profit: '+$21,003.68', profitP: '+20.84%', win: '34.6%', pair: 'XAUUSD', avgWin: '$114.74', avgLoss: '-$110.51', dur: '3h 39m', trades: 36, lossS: 7, winS: 4 },
        { rank: 13, name: 'Adheno B', profit: '+$11,914.72', profitP: '+19.14%', win: '63.6%', pair: 'XAUUSD', avgWin: '$156.36', avgLoss: '-$46.27', dur: '22m', trades: 48, lossS: 9, winS: 4 },
        { rank: 14, name: 'Harish S', profit: '+$11,902.94', profitP: '+19.02%', win: '37.4%', pair: 'XAUUSD', avgWin: '$92.72', avgLoss: '-$78.57', dur: '1d 1h', trades: 51, lossS: 10, winS: 8 },
        { rank: 15, name: 'Gilli M', profit: '+$11,878.70', profitP: '+18.79%', win: '98.6%', pair: 'DJI30', avgWin: '$209.23', avgLoss: '-$132.99', dur: '2h', trades: 17, lossS: 2, winS: 4 },
        { rank: 16, name: 'Mohamad mohamed A', profit: '+$11,875.19', profitP: '+18.75%', win: '42.0%', pair: 'XAUUSD', avgWin: '$209.90', avgLoss: '-$120.56', dur: '5h 7m', trades: 41, lossS: 4, winS: 4 },
        { rank: 17, name: 'Antuan G', profit: '+$11,869.51', profitP: '+18.70%', win: '53.1%', pair: 'XAUUSD', avgWin: '$23.45', avgLoss: '-$20.71', dur: '1h 10m', trades: 425, lossS: 17, winS: 10 },
        { rank: 18, name: 'Nathan M', profit: '+$11,860.24', profitP: '+18.60%', win: '42.0%', pair: 'XAUUSD', avgWin: '$25.47', avgLoss: '-$55.82', dur: '1h 32m', trades: 247, lossS: 13, winS: 8 },
    ];

    const filters = ['5k', '10k', '25k', '50k', '100k', 'All'];

    return (
        <div className="p-10 bg-[var(--bg-color)] min-h-screen box-border max-sm:p-4">
            {/* Header with Glassmorphism Filter */}
            <div className="flex justify-between items-center mb-10 max-sm:flex-col max-sm:items-start max-sm:gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-[#262626] rounded-2xl flex items-center justify-center font-bold text-xl text-[#333] dark:text-white shadow-sm border border-[#eee] dark:border-[#333]">Y</div>
                    <div>
                        <h1 className="text-2xl font-bold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Leaderboard</h1>
                        <p className="text-xs text-[#666] dark:text-[#888] font-medium mt-1">Top traders of the month</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 p-1.5 bg-white dark:bg-[#141414] border border-[#e5e7eb] dark:border-[#333] rounded-xl shadow-sm overflow-x-auto max-w-full">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-all duration-300 whitespace-nowrap ${activeFilter === filter ? 'bg-[#1d1d1f] text-white shadow-md transform scale-105 dark:bg-white dark:text-black' : 'text-[#666] dark:text-[#999] hover:bg-[#f3f4f6] dark:hover:bg-[#262626] hover:text-[#333] dark:hover:text-[#ccc]'}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Top Stats Cards with Gradients & Hover Effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                <div className="bg-gradient-to-br from-[#2563eb] to-[#4f46e5] rounded-2xl p-6 text-white shadow-[0_8px_30px_rgba(37,99,235,0.25)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Trophy size={80} />
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-inner">
                            <Trophy size={24} className="text-yellow-300" />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Highest Total Rewards</div>
                            <div className="text-2xl font-bold mb-2 tracking-tight">$8,240.00</div>
                            <div className="text-xs font-medium bg-white/20 self-start inline-block px-2.5 py-1 rounded-full backdrop-blur-md">Sunil W 🇮🇳</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#7c3aed] to-[#9333ea] rounded-2xl p-6 text-white shadow-[0_8px_30px_rgba(124,58,237,0.25)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Award size={80} />
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-inner">
                            <Award size={24} className="text-purple-200" />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Longest Duration</div>
                            <div className="text-2xl font-bold mb-2 tracking-tight">773 days</div>
                            <div className="text-xs font-medium bg-white/20 self-start inline-block px-2.5 py-1 rounded-full backdrop-blur-md">Chas-chan H 🇮🇳</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#059669] to-[#10b981] rounded-2xl p-6 text-white shadow-[0_8px_30px_rgba(5,150,105,0.25)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Coins size={80} />
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-inner">
                            <Coins size={24} className="text-emerald-200" />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Highest Single Reward</div>
                            <div className="text-2xl font-bold mb-2 tracking-tight">$8,240.00</div>
                            <div className="text-xs font-medium bg-white/20 self-start inline-block px-2.5 py-1 rounded-full backdrop-blur-md">Sunil W 🇮🇳</div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-[#ea580c] to-[#f97316] rounded-2xl p-6 text-white shadow-[0_8px_30px_rgba(234,88,12,0.25)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Wallet size={80} />
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-inner">
                            <Wallet size={24} className="text-orange-200" />
                        </div>
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">Most Rewards Count</div>
                            <div className="text-2xl font-bold mb-2 tracking-tight">19</div>
                            <div className="text-xs font-medium bg-white/20 self-start inline-block px-2.5 py-1 rounded-full backdrop-blur-md">Layla Z 🇨🇳</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-bold m-0 flex items-center gap-2 text-[#1a1a1a] dark:text-[#f3f4f6]">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400">
                        <Trophy size={16} />
                    </span>
                    Rankings
                </h2>
            </div>

            {/* Enhanced Table */}
            <div className="bg-white dark:bg-[#141414] rounded-2xl border border-[#e5e7eb] dark:border-[#333] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm min-w-[1200px]">
                        <thead>
                            <tr className="bg-[#f9fafb] dark:bg-[#262626] border-b border-[#e5e7eb] dark:border-[#333]">
                                <th className="text-left px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider sticky left-0 bg-[#f9fafb] dark:bg-[#262626] z-10">Rank</th>
                                <th className="text-left px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider sticky left-[80px] bg-[#f9fafb] dark:bg-[#262626] z-10">Trader</th>
                                <th className="text-right px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider">Profit</th>
                                <th className="text-right px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider">Gain</th>
                                <th className="text-center px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider">Win Rate</th>
                                <th className="text-center px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider">Pair</th>
                                <th className="text-right px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider">Avg Win</th>
                                <th className="text-right px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider">Avg Loss</th>
                                <th className="text-center px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider">Duration</th>
                                <th className="text-center px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider">Trades</th>
                                <th className="text-center px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider">Loss Streak</th>
                                <th className="text-center px-6 py-4 text-[#6b7280] dark:text-[#9ca3af] font-bold text-[11px] uppercase tracking-wider">Win Streak</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row) => (
                                <tr key={row.rank} className="border-b border-[#f3f4f6] dark:border-[#2a2a2a] last:border-b-0 hover:bg-[#f9fafb] dark:hover:bg-[#262626] transition-colors group">
                                    <td className="px-6 py-4 sticky left-0 bg-white dark:bg-[#141414] group-hover:bg-[#f9fafb] dark:group-hover:bg-[#262626] transition-colors z-10">
                                        <div className={`w-8 h-8 flex items-center justify-center font-bold rounded-lg text-sm ${row.rank === 1 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : row.rank === 2 ? 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300' : row.rank === 3 ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}>
                                            {row.rank <= 3 ? <Trophy size={14} /> : row.rank}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-[#111827] dark:text-[#f3f4f6] sticky left-[80px] bg-white dark:bg-[#141414] group-hover:bg-[#f9fafb] dark:group-hover:bg-[#262626] transition-colors z-10 whitespace-nowrap">{row.name}</td>
                                    <td className="px-6 py-4 text-right font-bold text-[#10b981]">{row.profit}</td>
                                    <td className="px-6 py-4 text-right font-medium text-[#10b981] bg-[#ecfdf5] dark:bg-[#064e3b]/20 rounded-lg">{row.profitP}</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                <div className="h-full bg-blue-500 rounded-full" style={{ width: row.win }}></div>
                                            </div>
                                            <span className="text-xs font-medium text-[#6b7280] dark:text-[#9ca3af] w-8">{row.win}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center"><span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">{row.pair}</span></td>
                                    <td className="px-6 py-4 text-right text-[#10b981] font-medium">{row.avgWin}</td>
                                    <td className="px-6 py-4 text-right text-[#ef4444] font-medium">{row.avgLoss}</td>
                                    <td className="px-6 py-4 text-center text-[#6b7280] dark:text-[#9ca3af]">{row.dur}</td>
                                    <td className="px-6 py-4 text-center font-medium text-[#374151] dark:text-[#e5e7eb]">{row.trades}</td>
                                    <td className="px-6 py-4 text-center text-[#ef4444] font-semibold">{row.lossS}</td>
                                    <td className="px-6 py-4 text-center text-[#10b981] font-semibold">{row.winS}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
}

export default Leaderboard;
