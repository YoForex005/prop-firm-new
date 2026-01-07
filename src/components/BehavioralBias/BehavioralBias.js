import React from 'react';
/* Import generated images */
import bearIcon from './bear.png';
import bullIcon from './bull.png';

function BehavioralBias() {
    return (
        <div className="card behavioral-bias">
            <div className="card-header">
                <h3>Behavioral Bias</h3>
                <span className="card-header-stats">Total Trades: 0</span>
            </div>
            <div className="bias-content">
                <img src={bearIcon} alt="Bear" className="bias-animal" />
                <div className="bias-label">Neutral</div>
                <img src={bullIcon} alt="Bull" className="bias-animal" />
            </div>

            <div className="bias-progress">
                <div className="bias-indicator"></div>
            </div>

            <div className="bias-values">
                <span>0 (50.0%)</span>
                <span>0 (50.0%)</span>
            </div>
        </div>
    );
}

export default BehavioralBias;
