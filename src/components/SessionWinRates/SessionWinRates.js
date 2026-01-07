import React from 'react';

function SessionWinRates() {
    return (
        <div className="card session-win-rates">
            <div className="card-header">
                <h3>Session Win Rates</h3>
            </div>
            <div className="sessions">
                <div className="session-row">
                    <span>New York</span>
                    <div className="progress-bar"><div className="fill" style={{ width: '0%' }}></div></div>
                    <span>0.0%</span>
                </div>
                <div className="session-row">
                    <span>London</span>
                    <div className="progress-bar"><div className="fill" style={{ width: '0%' }}></div></div>
                    <span>0.0%</span>
                </div>
                <div className="session-row">
                    <span>Asia</span>
                    <div className="progress-bar"><div className="fill" style={{ width: '0%' }}></div></div>
                    <span>0.0%</span>
                </div>
            </div>
        </div>
    );
}

export default SessionWinRates;
