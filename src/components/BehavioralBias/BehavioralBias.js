import React from 'react';
/* Import generated images */
import bearIcon from './bear.png';
import bullIcon from './bull.png';

function BehavioralBias() {
    return (
        <div className="behavioral-bias-card">
            <div className="card-header-bias">
                <span>Behavioral Bias</span>
                <span>Total Trades: 0</span>
            </div>
            <div className="bias-content-flex">
                <div className="icon-wrapper bear">
                    <span className="bear-icon">🐻</span>
                </div>
                <div className="bias-status">
                    <span className="status-label">Neutral</span>
                    <span className="status-sub">No bias detected</span>
                </div>
                <div className="icon-wrapper bull">
                    <span className="bull-icon">🐂</span>
                </div>
            </div>

            <div className="bias-meter-container">
                <div className="bias-track">
                    <div className="bias-fill left"></div>
                    <div className="bias-fill right"></div>
                    <div className="bias-marker" style={{ left: '50%' }}></div>
                </div>
            </div>

            <div className="bias-footer">
                <div className="stat-group left">
                    <span className="count">0</span>
                    <span className="percent">(50.0%)</span>
                </div>
                <div className="stat-group right">
                    <span className="count">0</span>
                    <span className="percent">(50.0%)</span>
                </div>
            </div>
        </div>
    );
}

export default BehavioralBias;
