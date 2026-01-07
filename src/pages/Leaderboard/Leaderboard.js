import React from 'react';
import { Trophy } from 'lucide-react';
import './Leaderboard.css';
/* Using the previously generated trophy for the cards */
import trophyImg from '../Competitions/trophy.png';
/* importing assets if moved, using trophyImg as placeholder for all for now to save complexity, or specific ones if available */

function Leaderboard() {
    const data = [
        { rank: 1, name: 'Gert D', profit: '+$5,738.48', profitP: '+57.38%', win: '48.0%', pair: 'XAUUSD', avgWin: '$935.27', avgLoss: '-$135.90', dur: '2h 30m', trades: 25, lossS: 5, winS: 4 },
        { rank: 2, name: 'Amad B', profit: '+$2,793.70', profitP: '+27.94%', win: '66.0%', pair: 'XAUUSD', avgWin: '$83.16', avgLoss: '-$30.44', dur: '2h 2m', trades: 200, lossS: 14, winS: 11 },
        { rank: 3, name: 'Paulos H', profit: '+$2,699.99', profitP: '+25.99%', win: '23.3%', pair: 'XAUUSD', avgWin: '$430.24', avgLoss: '-$104.36', dur: '43m', trades: 30, lossS: 6, winS: 2 },
        { rank: 4, name: 'Rao H', profit: '+$3,039.71', profitP: '+28.39%', win: '58.0%', pair: 'XAUUSD', avgWin: '$210.61', avgLoss: '-$112.25', dur: '2h 41m', trades: 54, lossS: 0, winS: 5 },
        { rank: 5, name: 'Wisha M', profit: '+$2,512.47', profitP: '+29.12%', win: '43.8%', pair: 'XAUUSD', avgWin: '$245.17', avgLoss: '-$87.84', dur: '3h 33m', trades: 48, lossS: 6, winS: 7 },
        { rank: 6, name: 'Muhammad S', profit: '+$2,510.60', profitP: '+25.14%', win: '18.1%', pair: 'XAUUSD', avgWin: '$334.80', avgLoss: '-$91.85', dur: '44m', trades: 155, lossS: 19, winS: 3 },
        // ... more rows can be added
    ];

    return (
        <div className="leaderboard-container">
            <div className="page-header">
                <div className="user-greeting">
                    <div className="avatar">Y</div>
                    <h1>Hey, Yo</h1>
                </div>
            </div>

            {/* Top Stats Cards */}
            <div className="stats-row">
                <div className="stat-card-blue">
                    <div className="stat-icon-wrapper">
                        <img src={trophyImg} alt="Trophy" className="stat-icon-img" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Highest Total Rewards</div>
                        <div className="stat-value">$8,240.00</div>
                        <div className="stat-sub">Sunil W 🇮🇳</div>
                    </div>
                </div>

                <div className="stat-card-blue">
                    <div className="stat-icon-wrapper">
                        {/* Placeholder icon */}
                        <Trophy size={32} color="#FFD700" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Longest Master Acc Duration</div>
                        <div className="stat-value">772 days</div>
                        <div className="stat-sub">Erau-chan H 🇮🇳</div>
                    </div>
                </div>

                <div className="stat-card-blue">
                    <div className="stat-icon-wrapper">
                        <Trophy size={32} color="#FFD700" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Highest Single Reward</div>
                        <div className="stat-value">$8,240.00</div>
                        <div className="stat-sub">Sunil W 🇮🇳</div>
                    </div>
                </div>

                <div className="stat-card-blue">
                    <div className="stat-icon-wrapper">
                        <Trophy size={32} color="#FFD700" />
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Highest Total Reward Count</div>
                        <div className="stat-value">19</div>
                        <div className="stat-sub">Layla Z 🇨🇳</div>
                    </div>
                </div>
            </div>

            <div className="leaderboard-header">
                <h2><Trophy size={20} color="#DAA520" /> Leaderboard</h2>
            </div>

            <div className="leaderboard-table-container">
                <table className="full-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Trader</th>
                            <th>Profit</th>
                            <th>Profit %</th>
                            <th>Win Ratio</th>
                            <th>Pair</th>
                            <th>Avg Win</th>
                            <th>Avg Loss</th>
                            <th>Avg Duration</th>
                            <th>Trades</th>
                            <th>Losing Streak</th>
                            <th>Winning Streak</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="rank-cell">
                                        <div className={`rank-icon rank-${row.rank}`}>{row.rank <= 3 && <Trophy size={10} />}</div>
                                        #{row.rank}
                                    </div>
                                </td>
                                <td className="trader-name">{row.name}</td>
                                <td className="positive">{row.profit}</td>
                                <td className="positive">{row.profitP}</td>
                                <td className={parseInt(row.win) > 50 ? 'positive' : 'negative'}>{row.win}</td>
                                <td><span className="pair-tag">{row.pair}</span></td>
                                <td className="positive">{row.avgWin}</td>
                                <td className="negative">{row.avgLoss}</td>
                                <td>{row.dur}</td>
                                <td>{row.trades}</td>
                                <td className="negative">{row.lossS}</td>
                                <td><span className="streak-green">{row.winS}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Leaderboard;
