import React from 'react';
import './DailyPerformance.css';

function DailyPerformance() {
    const performanceData = [
        { day: 'Mon', profit: 250, loss: -100 },
        { day: 'Tue', profit: 180, loss: -50 },
        { day: 'Wed', profit: 320, loss: -150 },
        { day: 'Thu', profit: 210, loss: -80 },
        { day: 'Fri', profit: 400, loss: -120 },
    ];

    return (
        <div className="daily-performance-card">
            <h3 className="card-title">Daily Performance</h3>
            <div className="performance-list">
                {performanceData.map((day, index) => (
                    <div key={index} className="performance-item">
                        <span className="day-label">{day.day}</span>
                        <div className="performance-bars">
                            <div className="profit-bar" style={{ width: `${(day.profit / 400) * 100}%` }}>
                                <span className="bar-value">${day.profit}</span>
                            </div>
                            {day.loss && (
                                <div className="loss-bar" style={{ width: `${(Math.abs(day.loss) / 400) * 100}%` }}>
                                    <span className="bar-value">${day.loss}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="performance-summary">
                <div className="summary-item profit">
                    <span className="summary-label">Weekly Profit</span>
                    <span className="summary-value">$1,360</span>
                </div>
                <div className="summary-item loss">
                    <span className="summary-label">Weekly Loss</span>
                    <span className="summary-value">-$500</span>
                </div>
                <div className="summary-item net">
                    <span className="summary-label">Net</span>
                    <span className="summary-value">$860</span>
                </div>
            </div>
        </div>
    );
}

export default DailyPerformance;
