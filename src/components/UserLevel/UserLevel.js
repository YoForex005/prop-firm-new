import React from 'react';
import bronzeBg from './bronze_bg.png';

function UserLevel() {
    return (
        <div className="card user-level">
            <img src={bronzeBg} className="bg-image" alt="Bronze Level Background" />
            <div className="level-content">
                <div className="level-title">Your Level</div>
                <div className="level-name">Bronze</div>
                <div className="level-stats">
                    <div className="stat-item">
                        <span>Total Reward</span>
                        <div>$0.00</div>
                    </div>
                    <div className="stat-item">
                        <span>Highest Reward</span>
                        <div>$0.00</div>
                    </div>
                    <div className="stat-item">
                        <span>Count</span>
                        <div>0</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserLevel;
