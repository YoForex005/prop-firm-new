import React from 'react';

function SessionWinRates() {
    return (
        <div className="general-card sessions-card">
            <div className="card-title">Session Win Rates</div>
            <div className="session-rows">
                <div className="session-row">
                    <span className="name">New York</span>
                    <div className="bar-bg"><div className="bar-fill" style={{ width: '0%' }}></div></div>
                    <span className="val">0.0%</span>
                </div>
                <div className="session-row">
                    <span className="name">London</span>
                    <div className="bar-bg"><div className="bar-fill" style={{ width: '0%' }}></div></div>
                    <span className="val">0.0%</span>
                </div>
                <div className="session-row">
                    <span className="name">Asia</span>
                    <div className="bar-bg"><div className="bar-fill" style={{ width: '0%' }}></div></div>
                    <span className="val">0.0%</span>
                </div>
            </div>
        </div>
    );
}

export default SessionWinRates;
