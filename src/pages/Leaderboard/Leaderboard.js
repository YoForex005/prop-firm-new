import React, { useState } from 'react';
import { Trophy, Award, Coins, Wallet } from 'lucide-react';
import './Leaderboard.css';

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
        <div className="leaderboard-container">
            <div className="page-header">
                <div className="user-greeting">
                    <div className="avatar">Y</div>
                    <h1>Hey, Yo</h1>
                </div>
                <div className="account-size-filter">
                    <span className="filter-label">Account Size:</span>
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Top Stats Cards */}
            <div className="stats-row">
                <div className="stat-card-blue">
                    <div className="stat-icon-wrapper">
                        <Trophy size={28} color="#FFD700" fill="#FFD700" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">HIGHEST TOTAL REWARDS</div>
                        <div className="stat-value">$8,240.00</div>
                        <div className="stat-sub">Sunil W 🇮🇳</div>
                    </div>
                </div>

                <div className="stat-card-blue">
                    <div className="stat-icon-wrapper">
                        <Award size={28} color="#FFD700" fill="#FFD700" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">LONGEST MASTER ACC DURATION</div>
                        <div className="stat-value">773 days</div>
                        <div className="stat-sub">Chas-chan H 🇮🇳</div>
                    </div>
                </div>

                <div className="stat-card-blue">
                    <div className="stat-icon-wrapper">
                        <Coins size={28} color="#FFD700" fill="#FFD700" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">HIGHEST SINGLE REWARD</div>
                        <div className="stat-value">$8,240.00</div>
                        <div className="stat-sub">Sunil W 🇮🇳</div>
                    </div>
                </div>

                <div className="stat-card-blue">
                    <div className="stat-icon-wrapper">
                        <Wallet size={28} color="#FFD700" fill="#FFD700" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">HIGHEST TOTAL REWARDS COUNT</div>
                        <div className="stat-value">19</div>
                        <div className="stat-sub">Layla Z 🇨🇳</div>
                    </div>
                </div>
            </div>

            <div className="leaderboard-header">
                <h2><div className="icon-gold"><Trophy size={16} /></div> Leaderboard</h2>
            </div>

            <div className="leaderboard-table-container">
                <table className="full-table">
                    <thead>
                        <tr>
                            <th>RANK</th>
                            {/* <br> to stack or just small font */}
                            <th>TRADER</th>
                            <th>PROFIT</th>
                            <th>PROFIT %</th>
                            <th>WIN RATIO</th>
                            <th>PAIR</th>
                            <th>AVG. WIN</th>
                            <th>AVG. LOSS</th>
                            <th>AVG. DURATION</th>
                            <th>TRADES</th>
                            <th>LOSING STREAK</th>
                            <th>WINNING STREAK</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.rank}>
                                <td>
                                    <div className="rank-cell">
                                        <div className={`rank-icon ${row.rank <= 3 ? `top-${row.rank}` : ''}`}>
                                            {row.rank === 1 && <Trophy size={12} fill="#B8860B" />}
                                            {row.rank === 2 && <Award size={12} fill="#C0C0C0" />}
                                            {row.rank === 3 && <Award size={12} fill="#CD7F32" />}
                                            {row.rank > 3 && row.rank}
                                        </div>
                                    </div>
                                </td>
                                <td style={{ fontWeight: 500 }}>{row.name}</td>
                                <td className="text-green">{row.profit}</td>
                                <td className="text-green">{row.profitP}</td>
                                <td>{row.win}</td>
                                <td><span className="pair-tag">{row.pair}</span></td>
                                <td className="text-green">{row.avgWin}</td>
                                <td className="text-red">{row.avgLoss}</td>
                                <td>{row.dur}</td>
                                <td>{row.trades}</td>
                                <td className="text-red">{row.lossS}</td>
                                <td className="text-green">{row.winS}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Leaderboard;
