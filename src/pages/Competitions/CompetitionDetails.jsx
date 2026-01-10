import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Clock,
    User,
    Trophy,
    ChevronLeft,
    ShieldAlert,
    Users,
    TrendingUp,
    CheckCircle,
    Medal,
    Ticket
} from 'lucide-react';
import trophyImg from './trophy.png';
import PrizePoolModal from '../../components/Modals/PrizePoolModal';
import CompetitionInfoModal from '../../components/Modals/CompetitionInfoModal';

// --- MOCK DATA ---
const monthlyLeaderboard = [
    { rank: 1, name: 'Nadeem Y', country: 'PK', trades: 25, winRatio: '0%', profit: '$975,205.65', gain: '975.21%' },
    { rank: 2, name: 'Abdirahim omar M', country: 'SO', trades: 118, winRatio: '0%', profit: '$877,613.23', gain: '877.61%' },
    { rank: 3, name: 'Rohit C', country: 'IN', trades: 150, winRatio: '0%', profit: '$811,647.08', gain: '811.65%' },
    { rank: 4, name: 'Aiyaz a', country: 'IN', trades: 110, winRatio: '0%', profit: '$807,212.80', gain: '807.21%' },
    { rank: 5, name: 'comradexbt .', country: 'IN', trades: 222, winRatio: '0%', profit: '$439,379.25', gain: '439.38%' },
];

const champTraders = [
    { rank: 1, name: 'Harsh K', country: '-', community: 'Team Harsh', trades: 150, ratio: 51, profit: '$189,408.66', gain: '189.41%' },
    { rank: 2, name: 'Jigishaben K', country: '-', community: 'Team Harsh', trades: 208, ratio: 57, profit: '$181,712.77', gain: '181.71%' },
    { rank: 3, name: 'Stephen A', country: 'NG', community: 'ClimaxPips', trades: 92, ratio: 100, profit: '$115,652.33', gain: '115.65%' },
    { rank: 4, name: 'Ali F', country: '-', community: 'Forexstreet247', trades: 10, ratio: 100, profit: '$107,899.50', gain: '107.9%' },
    { rank: 5, name: 'Stephen A', country: 'NG', community: 'ClimaxPips', trades: 89, ratio: 100, profit: '$107,868.47', gain: '107.87%' },
];

const champCommunities = [
    { rank: 1, name: 'Mr. Shrikant Joshi', avatar: 'MR', profit: '$4,494,513.30' },
    { rank: 2, name: 'Anjali Singh', avatar: 'AN', profit: '$3,710,340.03' },
    { rank: 3, name: 'Sandeep', avatar: 'SA', profit: '$2,753,830.59' },
    { rank: 4, name: 'DIMOND', avatar: 'DI', profit: '$1,494,264.90' },
    { rank: 5, name: 'BEYIM TRADERS', avatar: 'BE', profit: '$1,158,486.55' },
];

// --- RENDER HELPERS ---
const renderRankIcon = (rank) => {
    if (rank === 1) return <span className="text-xl">🏆</span>;
    if (rank === 2) return <span className="text-xl">🥈</span>;
    if (rank === 3) return <span className="text-xl">🥉</span>;
    return <span className="text-[#6b7280] dark:text-[#9ca3af] font-medium text-sm border border-[#e5e7eb] dark:border-[#4b5563] w-6 h-6 flex items-center justify-center rounded-full bg-[#f9fafb] dark:bg-[#374151]">{rank}</span>;
};

function CompetitionDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showPrizeModal, setShowPrizeModal] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);

    // Determine if this is the Championship view (ID 101)
    const isChampionship = id === '101';

    if (isChampionship) {
        return (
            <div className="max-w-[1500px] mx-auto flex flex-col gap-6">
                {/* Top Row: Hero + Podiums */}
                <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-6">
                    {/* Hero Card */}
                    <div className="bg-gradient-to-br from-[#1e3a8a] to-[#172554] rounded-[20px] p-6 flex justify-between text-white relative overflow-hidden">
                        <div className="z-[2] flex-1 flex flex-col justify-center">
                            <span className="text-xs opacity-80 mb-2 block">Ongoing Championship</span>
                            <h2 className="text-2xl font-bold m-0 mb-2 leading-[1.2]">Community Championship January 2025</h2>
                            <p className="text-[13px] opacity-70 mb-6">Communities joined: 1531</p>

                            <div className="flex gap-6 mb-6">
                                <div>
                                    <span className="block text-[11px] opacity-60 mb-1">Starts</span>
                                    <span className="block text-[13px] font-semibold">Jan 6, 2025</span>
                                </div>
                                <div>
                                    <span className="block text-[11px] opacity-60 mb-1">Ends</span>
                                    <span className="block text-[13px] font-semibold">Jan 31, 2025</span>
                                </div>
                                <div>
                                    <span className="block text-[11px] opacity-60 mb-1">Ending in</span>
                                    <span className="block text-[13px] font-semibold">00:00:00</span>
                                </div>
                            </div>

                            <div className="flex gap-3 items-center">
                                <button className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg text-[13px] hover:bg-white/20 cursor-pointer">Host Competition</button>
                                <button className="bg-transparent border-none text-white/70 text-xs hover:text-white cursor-pointer">Show prizes</button>
                                <button className="bg-transparent border-none text-white/70 text-xs hover:text-white cursor-pointer">More info</button>
                            </div>
                        </div>
                        <div className="relative z-[1] flex items-center justify-center">
                            <img src={trophyImg} alt="Trophy" className="h-40 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]" />
                        </div>
                    </div>

                    {/* Top Traders Podium */}
                    <div className="bg-white dark:bg-[#1f2937] rounded-[20px] p-6 border border-[#e5e7eb] dark:border-[#374151]">
                        <h3 className="text-sm font-bold mb-4 text-[#111827] dark:text-[#f3f4f6]">Top Traders</h3>
                        <div className="flex items-end justify-center gap-4 h-[180px] pb-4">
                            {/* 2nd Place */}
                            <div className="flex flex-col items-center relative z-[2]">
                                <div className="w-[60px] h-[60px] bg-[#f3f4f6] dark:bg-[#374151] rounded-full mb-[-15px] border-4 border-white dark:border-[#1f2937] z-[2]"></div>
                                <div className="w-[60px] h-20 bg-gradient-to-br from-[#e5e7eb] to-[#9ca3af] clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%] flex items-center justify-center text-2xl font-black text-white/50 mb-2 relative shadow-md">2</div>
                                <span className="text-xs font-semibold text-[#374151] dark:text-[#e5e7eb] mb-1">Jigishaben K</span>
                            </div>
                            {/* 1st Place */}
                            <div className="flex flex-col items-center relative z-[3] -mt-8">
                                <div className="w-[70px] h-[70px] bg-[#f3f4f6] dark:bg-[#374151] rounded-full mb-[-15px] border-4 border-white dark:border-[#1f2937] z-[2]"></div>
                                <div className="w-[80px] h-24 bg-gradient-to-br from-[#fbbf24] to-[#d97706] clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%] flex items-center justify-center text-4xl font-black text-white/50 mb-2 relative shadow-md">1</div>
                                <span className="text-[13px] font-bold text-[#111827] dark:text-white mb-1">Harsh K</span>
                            </div>
                            {/* 3rd Place */}
                            <div className="flex flex-col items-center relative z-[1]">
                                <div className="w-[60px] h-[60px] bg-[#f3f4f6] dark:bg-[#374151] rounded-full mb-[-15px] border-4 border-white dark:border-[#1f2937] z-[2]"></div>
                                <div className="w-[60px] h-20 bg-gradient-to-br from-[#fdba74] to-[#c2410c] clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%] flex items-center justify-center text-2xl font-black text-white/50 mb-2 relative shadow-md">3</div>
                                <span className="text-xs font-semibold text-[#374151] dark:text-[#e5e7eb] mb-1">STEPHEN A</span>
                            </div>
                        </div>
                    </div>

                    {/* Top Communities Podium */}
                    <div className="bg-white dark:bg-[#1f2937] rounded-[20px] p-6 border border-[#e5e7eb] dark:border-[#374151]">
                        <h3 className="text-sm font-bold mb-4 text-[#111827] dark:text-[#f3f4f6]">Top Communities</h3>
                        <div className="flex items-end justify-center gap-4 h-[180px] pb-4">
                            {/* 2nd Place */}
                            <div className="flex flex-col items-center relative z-[2]">
                                <div className="w-[60px] h-20 bg-gradient-to-br from-[#e5e7eb] to-[#9ca3af] clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%] flex items-center justify-center text-2xl font-black text-white/50 mb-2 relative shadow-md">2</div>
                                <span className="text-xs font-semibold text-[#374151] dark:text-[#e5e7eb] mb-1 text-center max-w-[80px]">Anjali Singh</span>
                            </div>
                            {/* 1st Place */}
                            <div className="flex flex-col items-center relative z-[3] -mt-8">
                                <div className="w-[80px] h-24 bg-gradient-to-br from-[#fbbf24] to-[#d97706] clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%] flex items-center justify-center text-4xl font-black text-white/50 mb-2 relative shadow-md">1</div>
                                <span className="text-[13px] font-bold text-[#111827] dark:text-white mb-1 text-center max-w-[100px]">Mr. Shrikant Joshi 😎</span>
                            </div>
                            {/* 3rd Place */}
                            <div className="flex flex-col items-center relative z-[1]">
                                <div className="w-[60px] h-20 bg-gradient-to-br from-[#fdba74] to-[#c2410c] clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%] flex items-center justify-center text-2xl font-black text-white/50 mb-2 relative shadow-md">3</div>
                                <span className="text-xs font-semibold text-[#374151] dark:text-[#e5e7eb] mb-1 text-center max-w-[80px]">Sandeep</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Leaderboards */}
                <div className="flex gap-6">
                    {/* Traders Leaderboard */}
                    <div className="flex-[2.2] bg-white dark:bg-[#1f2937] rounded-[20px] border border-[#e5e7eb] dark:border-[#374151] p-6">
                        <h3 className="text-sm font-bold mb-4 text-[#111827] dark:text-[#f3f4f6]">Traders Leaderboard</h3>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Rank</th>
                                    <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Name</th>
                                    <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Country</th>
                                    <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Community</th>
                                    <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Trades</th>
                                    <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Ratio</th>
                                    <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Profit</th>
                                    <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Gain</th>
                                </tr>
                            </thead>
                            <tbody>
                                {champTraders.map(row => (
                                    <tr key={row.rank}>
                                        <td className="p-4 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium border-b border-[#f9fafb] dark:border-[#374151]">{renderRankIcon(row.rank)}</td>
                                        <td className="p-4 text-[13px] text-[#111827] dark:text-white font-semibold border-b border-[#f9fafb] dark:border-[#374151]">
                                            {row.name}
                                        </td>
                                        <td className="p-4 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium border-b border-[#f9fafb] dark:border-[#374151]">{row.country === '-' ? '-' : <div className="w-6 h-6 rounded-full bg-[#f3f4f6] dark:bg-[#4b5563]"></div>}</td>
                                        <td className="p-4 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium border-b border-[#f9fafb] dark:border-[#374151]">{row.community}</td>
                                        <td className="p-4 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium border-b border-[#f9fafb] dark:border-[#374151]">{row.trades}</td>
                                        <td className="p-4 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium border-b border-[#f9fafb] dark:border-[#374151]">{row.ratio}</td>
                                        <td className="p-4 text-[13px] text-[#10b981] font-semibold border-b border-[#f9fafb] dark:border-[#374151]">{row.profit}</td>
                                        <td className="p-4 text-[13px] text-[#10b981] font-semibold border-b border-[#f9fafb] dark:border-[#374151]">{row.gain}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Communities Leaderboard */}
                    <div className="flex-1 bg-white dark:bg-[#1f2937] rounded-[20px] border border-[#e5e7eb] dark:border-[#374151] p-6">
                        <h3 className="text-sm font-bold mb-4 text-[#111827] dark:text-[#f3f4f6]">Communities Leaderboard</h3>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Rank</th>
                                    <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Name</th>
                                    <th className="text-right text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {champCommunities.map(row => (
                                    <tr key={row.rank}>
                                        <td className="p-4 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium border-b border-[#f9fafb] dark:border-[#374151]">{renderRankIcon(row.rank)}</td>
                                        <td className="p-4 text-[13px] text-[#111827] dark:text-white font-semibold border-b border-[#f9fafb] dark:border-[#374151] flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-full bg-[#f3f4f6] dark:bg-[#4b5563] flex items-center justify-center text-[10px] text-[#6b7280] dark:text-[#d1d5db] font-bold">{row.avatar}</div>
                                            {row.name}
                                        </td>
                                        <td className="p-4 text-[13px] text-[#10b981] font-semibold border-b border-[#f9fafb] dark:border-[#374151] text-right">{row.profit}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    // --- STANDARD RENDER (Monthly Competition) ---
    return (
        <div className="max-w-[1500px] mx-auto flex flex-col gap-6">
            {/* Header Section */}
            <div className="bg-white dark:bg-[#1f2937] rounded-[20px] p-8 flex flex-col md:flex-row justify-between shadow-sm border border-[#eef2f6] dark:border-[#374151] mb-6 relative">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold m-0 mb-4 text-[#111827] dark:text-[#f3f4f6]">January 2026 Monthly Competition</h1>
                    <div className="flex gap-4 mb-6 items-center">
                        <span className="flex items-center gap-1.5 text-[13px] text-[#6b7280] dark:text-[#9ca3af] font-medium">
                            <TrendingUp size={14} className="mr-1" /> matchtrader
                        </span>
                        <span className="flex items-center gap-1.5 text-[13px] text-[#10b981] font-semibold">
                            <span className="w-2 h-2 bg-[#10b981] rounded-full"></span> Ongoing
                        </span>
                    </div>

                    <div className="mb-8">
                        <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] mb-2 block font-medium">Ends In</span>
                        <div className="flex gap-3">
                            <div className="border border-[#e5e7eb] dark:border-[#4b5563] rounded-xl p-2 px-4 text-center min-w-[60px] dark:bg-[#374151]">
                                <span className="block text-xl font-bold text-[#111827] dark:text-[#f3f4f6]">23</span>
                                <span className="block text-[11px] text-[#9ca3af] dark:text-[#9ca3af]">Day</span>
                            </div>
                            <div className="border border-[#e5e7eb] dark:border-[#4b5563] rounded-xl p-2 px-4 text-center min-w-[60px] dark:bg-[#374151]">
                                <span className="block text-xl font-bold text-[#111827] dark:text-[#f3f4f6]">04</span>
                                <span className="block text-[11px] text-[#9ca3af] dark:text-[#9ca3af]">Hr</span>
                            </div>
                            <div className="border border-[#e5e7eb] dark:border-[#4b5563] rounded-xl p-2 px-4 text-center min-w-[60px] dark:bg-[#374151]">
                                <span className="block text-xl font-bold text-[#111827] dark:text-[#f3f4f6]">40</span>
                                <span className="block text-[11px] text-[#9ca3af] dark:text-[#9ca3af]">Min</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <button className="bg-[#2563eb] text-white border-none px-6 py-2.5 rounded-lg font-semibold cursor-pointer text-sm transition-colors hover:bg-[#1d4ed8] shadow-md shadow-blue-600/20">Join</button>
                        <button className="bg-white dark:bg-[#374151] border border-[#d1d5db] dark:border-[#4b5563] text-[#374151] dark:text-[#e5e7eb] px-5 py-2.5 rounded-lg font-semibold cursor-pointer text-sm transition-all hover:bg-[#f9fafb] dark:hover:bg-[#4b5563]" onClick={() => setShowPrizeModal(true)}>Show Prizepool</button>
                        <button className="bg-white dark:bg-[#374151] border border-[#d1d5db] dark:border-[#4b5563] text-[#374151] dark:text-[#e5e7eb] px-5 py-2.5 rounded-lg font-semibold cursor-pointer text-sm transition-all hover:bg-[#f9fafb] dark:hover:bg-[#4b5563]" onClick={() => setShowInfoModal(true)}>More Info</button>
                    </div>
                </div>

                <div className="flex-1 flex justify-end items-center">
                    <div className="flex items-end gap-6 relative pb-5">
                        {/* 2nd Place */}
                        <div className="flex flex-col items-center relative z-[2]">
                            <div className="w-[80px] h-[92px] bg-gradient-to-br from-[#e5e7eb] to-[#9ca3af] clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%] flex items-center justify-center mb-3 shadow-lg">
                                <div className="text-[32px] font-black text-white/50">P</div>
                            </div>
                            <span className="text-[13px] font-semibold text-[#374151] dark:text-[#e5e7eb] mb-1">Abdirahim omar M</span>
                            <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] font-medium">2</span>
                            <span className="w-2 h-2 rounded-full bg-[#2563eb] mt-1"></span>
                        </div>
                        {/* 1st Place */}
                        <div className="flex flex-col items-center relative z-[3] -mt-8 mb-[30px]">
                            <div className="absolute top-5 -left-5 w-10 h-[60px] bg-[#fbbf24] z-[-1] opacity-60 clip-path-polygon-[100%_0%,0%_50%,100%_100%]"></div>
                            <div className="w-[100px] h-[115px] bg-gradient-to-br from-[#fbbf24] to-[#d97706] clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%] flex items-center justify-center mb-3 shadow-lg">
                                <div className="text-[32px] font-black text-white/50">P</div>
                            </div>
                            <div className="absolute top-5 -right-5 w-10 h-[60px] bg-[#fbbf24] z-[-1] opacity-60 clip-path-polygon-[0%_0%,100%_50%,0%_100%]"></div>
                            <span className="text-sm font-bold text-[#111827] dark:text-white mb-1">Nadeem Y</span>
                            <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] font-medium">1</span>
                            <span className="w-2 h-2 rounded-full bg-[#10b981] mt-1"></span>
                        </div>
                        {/* 3rd Place */}
                        <div className="flex flex-col items-center relative z-[1] -mb-2.5">
                            <div className="w-[80px] h-[92px] bg-gradient-to-br from-[#fdba74] to-[#c2410c] clip-path-polygon-[50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%] flex items-center justify-center mb-3 shadow-lg">
                                <div className="text-[32px] font-black text-white/50">P</div>
                            </div>
                            <span className="text-[13px] font-semibold text-[#374151] dark:text-[#e5e7eb] mb-1">Aiyaz a</span>
                            <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] font-medium">3</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Left Column: Leaderboard */}
                <div className="flex-[2.2] bg-white dark:bg-[#1f2937] rounded-[20px] border border-[#e5e7eb] dark:border-[#374151] p-6">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Rank</th>
                                <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Name</th>
                                <th className="text-center text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Country</th>
                                <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Trades</th>
                                <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Win Ratio</th>
                                <th className="text-left text-xs text-[#10b981] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Profit</th>
                                <th className="text-left text-xs text-[#10b981] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]">Gain</th>
                                <th className="text-left text-xs text-[#9ca3af] font-normal p-3 border-b border-[#f3f4f6] dark:border-[#374151]"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthlyLeaderboard.map((row) => (
                                <tr key={row.rank}>
                                    <td className="p-4 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium border-b border-[#f9fafb] dark:border-[#374151]">{row.rank}</td>
                                    <td className="p-4 text-[13px] text-[#111827] dark:text-white font-semibold border-b border-[#f9fafb] dark:border-[#374151] flex items-center gap-2">
                                        {row.rank === 1 && <span className="text-base">🏆</span>}
                                        {row.rank > 1 && <span className="text-base">🛡️</span>}
                                        {row.name}
                                    </td>
                                    <td className="p-4 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium border-b border-[#f9fafb] dark:border-[#374151] text-center">
                                        {row.country !== '-' ? (
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mx-auto ${row.rank === 1 ? 'bg-[#f3f4f6] text-[#10b981]' : 'bg-[#f3f4f6] text-[#2563eb]'}`}>
                                                {row.country === 'PK' && '🇵🇰'}
                                                {row.country === 'SO' && '🇸🇴'}
                                                {row.country === 'IN' && '🇮🇳'}
                                            </div>
                                        ) : '-'}
                                    </td>
                                    <td className="p-4 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium border-b border-[#f9fafb] dark:border-[#374151]">{row.trades}</td>
                                    <td className="p-4 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium border-b border-[#f9fafb] dark:border-[#374151]">{row.winRatio}</td>
                                    <td className="p-4 text-[13px] text-[#10b981] font-semibold border-b border-[#f9fafb] dark:border-[#374151]">{row.profit}</td>
                                    <td className="p-4 text-[13px] text-[#10b981] font-semibold border-b border-[#f9fafb] dark:border-[#374151]">{row.gain}</td>
                                    <td className="p-4 text-[13px] font-medium border-b border-[#f9fafb] dark:border-[#374151]">
                                        <TrendingUp size={16} color="#2563eb" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Right Column: Sidebar */}
                <div className="flex-1 flex flex-col gap-6">
                    <div className="bg-[#2563eb] rounded-2xl p-6 text-white text-center">
                        <div className="flex flex-col items-center">
                            <h3 className="m-0 mb-2 text-base">? Current Rank</h3>
                            <p className="text-xs opacity-80 m-0 mb-4">Your current rank in the competition.</p>
                            <button className="bg-black/20 border-none px-4 py-2 rounded-lg text-white text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer">
                                <Clock size={14} /> My Stats
                            </button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1f2937] rounded-[20px] p-6 border border-[#e5e7eb] dark:border-[#374151]">
                        <div className="flex gap-4 mb-5 items-start">
                            <Clock size={18} className="text-[#9ca3af] shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-[11px] text-[#9ca3af] mb-0.5">Starts</span>
                                <span className="text-[13px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Jan 1, 2026 5:30 PM</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5 items-start">
                            <Clock size={18} className="text-[#9ca3af] shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-[11px] text-[#9ca3af] mb-0.5">Ends</span>
                                <span className="text-[13px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Jan 31, 2026 8:30 PM</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5 items-start">
                            <Ticket size={18} className="text-[#9ca3af] shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-[11px] text-[#9ca3af] mb-0.5">Entry</span>
                                <span className="text-[13px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Free</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-5 items-start">
                            <Users size={18} className="text-[#9ca3af] shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-[11px] text-[#9ca3af] mb-0.5">Participants</span>
                                <span className="text-[13px] font-semibold text-[#111827] dark:text-[#f3f4f6]">27656</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <Trophy size={18} className="text-[#9ca3af] shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-[11px] text-[#9ca3af] mb-0.5">Organizer</span>
                                <span className="text-[13px] font-semibold text-[#111827] dark:text-[#f3f4f6]">YoPips</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-[#1f2937] rounded-[20px] p-6 border border-[#e5e7eb] dark:border-[#374151]">
                        <h4 className="m-0 mb-4 text-sm text-[#6b7280] dark:text-[#9ca3af]">Trading Rules</h4>
                        <div className="flex items-center gap-3 mb-3 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium">
                            <CheckCircle size={16} className="text-[#3b82f6]" />
                            <span>10% Max Overall Loss</span>
                        </div>
                        <div className="flex items-center gap-3 mb-3 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium">
                            <CheckCircle size={16} className="text-[#3b82f6]" />
                            <span>5% Max Daily Loss</span>
                        </div>
                        <div className="flex items-center gap-3 text-[13px] text-[#374151] dark:text-[#e5e7eb] font-medium">
                            <CheckCircle size={16} className="text-[#3b82f6]" />
                            <span>EA execution is prohibited</span>
                        </div>
                    </div>
                </div>
            </div>
            <PrizePoolModal isOpen={showPrizeModal} onClose={() => setShowPrizeModal(false)} />
            <CompetitionInfoModal isOpen={showInfoModal} onClose={() => setShowInfoModal(false)} />
        </div>
    );
}

export default CompetitionDetails;
