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
import './CompetitionDetails.css';
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
    if (rank === 1) return <span className="trophy-gold">🏆</span>;
    if (rank === 2) return <span className="trophy-silver">🥈</span>;
    if (rank === 3) return <span className="trophy-bronze">🥉</span>;
    return <span className="rank-num">{rank}</span>;
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
            <div className="comp-details-container championship-mode">
                {/* Top Row: Hero + Podiums */}
                <div className="champ-top-row">
                    {/* Hero Card */}
                    <div className="champ-hero-card">
                        <div className="champ-hero-content">
                            <span className="champ-hero-tag">Ongoing Championship</span>
                            <h2>Community Championship January 2025</h2>
                            <p className="communities-joined">Communities joined: 1531</p>

                            <div className="champ-dates-grid">
                                <div>
                                    <span className="label">Starts</span>
                                    <span className="val">Jan 6, 2025</span>
                                </div>
                                <div>
                                    <span className="label">Ends</span>
                                    <span className="val">Jan 31, 2025</span>
                                </div>
                                <div>
                                    <span className="label">Ending in</span>
                                    <span className="val">00:00:00</span>
                                </div>
                            </div>

                            <div className="champ-actions">
                                <button className="btn-host">Host Competition</button>
                                <button className="btn-text-blue">Show prizes</button>
                                <button className="btn-text-blue">More info</button>
                            </div>
                        </div>
                        <div className="champ-hero-img">
                            <img src={trophyImg} alt="Trophy" />
                        </div>
                    </div>

                    {/* Top Traders Podium */}
                    <div className="podium-card">
                        <h3>Top Traders</h3>
                        <div className="podium-display">
                            {/* 2nd Place */}
                            <div className="podium-spot rank-2">
                                <div className="p-avatar-hex"></div>
                                <div className="p-medal silver"></div>
                                <span className="p-name">Jigishaben K</span>
                                <span className="p-rank">2</span>
                            </div>
                            {/* 1st Place */}
                            <div className="podium-spot rank-1">
                                <div className="p-avatar-hex main"></div>
                                <div className="p-medal gold"></div>
                                <span className="p-name">Harsh K</span>
                                <span className="p-rank">1</span>
                            </div>
                            {/* 3rd Place */}
                            <div className="podium-spot rank-3">
                                <div className="p-avatar-hex"></div>
                                <div className="p-medal bronze"></div>
                                <span className="p-name">STEPHEN A</span>
                                <span className="p-rank">3</span>
                            </div>
                        </div>
                    </div>

                    {/* Top Communities Podium */}
                    <div className="podium-card">
                        <h3>Top Communities</h3>
                        <div className="podium-display">
                            {/* 2nd Place */}
                            <div className="podium-spot rank-2">
                                <span className="p-name">Anjali Singh</span>
                                <span className="p-rank">2</span>
                            </div>
                            {/* 1st Place */}
                            <div className="podium-spot rank-1">
                                <span className="p-name">Mr. Shrikant <br /> Joshi 😎</span>
                                <span className="p-rank">1</span>
                            </div>
                            {/* 3rd Place */}
                            <div className="podium-spot rank-3">
                                <span className="p-name">Sandeep</span>
                                <span className="p-rank">3</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row: Leaderboards */}
                <div className="champ-bottom-row">
                    {/* Traders Leaderboard */}
                    <div className="champ-leaderboard-card main">
                        <h3>Traders Leaderboard</h3>
                        <table className="leaderboard-table">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>Community</th>
                                    <th>Trades</th>
                                    <th>Ratio</th>
                                    <th>Profit</th>
                                    <th>Gain</th>
                                </tr>
                            </thead>
                            <tbody>
                                {champTraders.map(row => (
                                    <tr key={row.rank}>
                                        <td className="rank-cell">{renderRankIcon(row.rank)}</td>
                                        <td className="name-cell flex-name">
                                            {/* Avatar Placeholder */}
                                            {row.name}
                                        </td>
                                        <td>{row.country === '-' ? '-' : <div className="flag-circle"></div>}</td>
                                        <td>{row.community}</td>
                                        <td>{row.trades}</td>
                                        <td>{row.ratio}</td>
                                        <td className="profit-text">{row.profit}</td>
                                        <td className="gain-text">{row.gain}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Communities Leaderboard */}
                    <div className="champ-leaderboard-card side">
                        <h3>Communities Leaderboard</h3>
                        <table className="leaderboard-table">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th className="text-right">Profit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {champCommunities.map(row => (
                                    <tr key={row.rank}>
                                        <td className="rank-cell">{renderRankIcon(row.rank)}</td>
                                        <td className="name-cell">
                                            <div className="comm-avatar">{row.avatar}</div>
                                            {row.name}
                                        </td>
                                        <td className="profit-text text-right">{row.profit}</td>
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
        <div className="comp-details-container">
            {/* Header Section */}
            <div className="comp-header-card">
                <div className="header-content-left">
                    <h1>January 2026 Monthly Competition</h1>
                    <div className="header-tags">
                        <span className="tag-matchtrader">
                            <TrendingUp size={14} className="icon-mr" /> matchtrader
                        </span>
                        <span className="tag-ongoing">
                            <span className="dot-green"></span> Ongoing
                        </span>
                    </div>

                    <div className="countdown-section">
                        <span className="countdown-label">Ends In</span>
                        <div className="timer-blocks">
                            <div className="timer-block">
                                <span className="time-val">23</span>
                                <span className="time-label">Day</span>
                            </div>
                            <div className="timer-block">
                                <span className="time-val">04</span>
                                <span className="time-label">Hr</span>
                            </div>
                            <div className="timer-block">
                                <span className="time-val">40</span>
                                <span className="time-label">Min</span>
                            </div>
                        </div>
                    </div>

                    <div className="header-actions">
                        <button className="btn-join">Join</button>
                        <button className="btn-secondary" onClick={() => setShowPrizeModal(true)}>Show Prizepool</button>
                        <button className="btn-secondary" onClick={() => setShowInfoModal(true)}>More Info</button>
                    </div>
                </div>

                <div className="header-podium-right">
                    <div className="podium-visual">
                        {/* 2nd Place */}
                        <div className="podium-rank rank-2">
                            <div className="podium-badge silver">
                                <div className="badge-inner">P</div>
                            </div>
                            <span className="p-name">Abdirahim omar M</span>
                            <span className="p-num">2</span>
                            <span className="p-status dot-blue"></span>
                        </div>
                        {/* 1st Place */}
                        <div className="podium-rank rank-1">
                            <div className="wing-left"></div>
                            <div className="podium-badge gold">
                                <div className="badge-inner">P</div>
                            </div>
                            <div className="wing-right"></div>
                            <span className="p-name main">Nadeem Y</span>
                            <span className="p-num">1</span>
                            <span className="p-status dot-green"></span>
                        </div>
                        {/* 3rd Place */}
                        <div className="podium-rank rank-3">
                            <div className="podium-badge bronze">
                                <div className="badge-inner">P</div>
                            </div>
                            <span className="p-name">Aiyaz a</span>
                            <span className="p-num">3</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="comp-details-content">
                {/* Left Column: Leaderboard */}
                <div className="comp-leaderboard-section">
                    <table className="leaderboard-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Name</th>
                                <th className="text-center">Country</th>
                                <th>Trades</th>
                                <th>Win Ratio</th>
                                <th className="text-green">Profit</th>
                                <th className="text-green">Gain</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {monthlyLeaderboard.map((row) => (
                                <tr key={row.rank}>
                                    <td className="rank-cell">{row.rank}</td>
                                    <td className="name-cell">
                                        {row.rank === 1 && <span className="trophy-icon">🏆</span>}
                                        {row.rank > 1 && <span className="medal-icon">🛡️</span>}
                                        {row.name}
                                    </td>
                                    <td className="country-cell text-center">
                                        {row.country !== '-' ? (
                                            <div className={`status-dot ${row.rank === 1 ? 'green' : 'blue'}`}>
                                                {row.country === 'PK' && '🇵🇰'}
                                                {row.country === 'SO' && '🇸🇴'}
                                                {row.country === 'IN' && '🇮🇳'}
                                            </div>
                                        ) : '-'}
                                    </td>
                                    <td>{row.trades}</td>
                                    <td>{row.winRatio}</td>
                                    <td className="profit-cell">{row.profit}</td>
                                    <td className="gain-cell">{row.gain}</td>
                                    <td className="trend-cell">
                                        <TrendingUp size={16} color="#2563eb" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Right Column: Sidebar */}
                <div className="comp-sidebar">
                    <div className="current-rank-card">
                        <div className="rank-card-content">
                            <h3>? Current Rank</h3>
                            <p>Your current rank in the competition.</p>
                            <button className="btn-my-stats">
                                <Clock size={14} /> My Stats
                            </button>
                        </div>
                    </div>

                    <div className="info-grid-card">
                        <div className="info-row">
                            <Clock size={18} className="icon-gray" />
                            <div className="info-col">
                                <span className="label">Starts</span>
                                <span className="val-bold">Jan 1, 2026 5:30 PM</span>
                            </div>
                        </div>
                        <div className="info-row">
                            <Clock size={18} className="icon-gray" />
                            <div className="info-col">
                                <span className="label">Ends</span>
                                <span className="val-bold">Jan 31, 2026 8:30 PM</span>
                            </div>
                        </div>
                        <div className="info-row">
                            <Ticket size={18} className="icon-gray" />
                            <div className="info-col">
                                <span className="label">Entry</span>
                                <span className="val-bold">Free</span>
                            </div>
                        </div>
                        <div className="info-row">
                            <Users size={18} className="icon-gray" />
                            <div className="info-col">
                                <span className="label">Participants</span>
                                <span className="val-bold">27656</span>
                            </div>
                        </div>
                        <div className="info-row">
                            <Trophy size={18} className="icon-gray" />
                            <div className="info-col">
                                <span className="label">Organizer</span>
                                <span className="val-bold">YoPips</span>
                            </div>
                        </div>
                    </div>

                    <div className="rules-card">
                        <h4>Trading Rules</h4>
                        <div className="rule-item">
                            <CheckCircle size={16} className="icon-blue" />
                            <span>10% Max Overall Loss</span>
                        </div>
                        <div className="rule-item">
                            <CheckCircle size={16} className="icon-blue" />
                            <span>5% Max Daily Loss</span>
                        </div>
                        <div className="rule-item">
                            <CheckCircle size={16} className="icon-blue" />
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
