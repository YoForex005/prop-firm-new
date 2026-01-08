import React from 'react';
import bronzeBg from './bronze_bg.png';
import bronzeTrophy from '../../assets/bronze-trophy.png';

function UserLevel() {
    return (
        <div className="user-level-card">
            <div className="level-content-wrapper">
                <span className="level-sublabel">Your Level</span>
                <div className="level-title-large">Bronze</div>
                <div className="level-stats-row">
                    <div className="level-stat">
                        <span>Total Reward</span>
                        <div>$0.00</div>
                    </div>
                    <div className="level-stat">
                        <span>Highest Reward</span>
                        <div>$0.00</div>
                    </div>
                    <div className="level-stat">
                        <span>Count</span>
                        <div>0</div>
                    </div>
                </div>
            </div>
            <div className="level-bg-graphic">
                <img src={bronzeTrophy} className="level-trophy-img" alt="Bronze Trophy" />
            </div>
        </div>
    );
}

export default UserLevel;
