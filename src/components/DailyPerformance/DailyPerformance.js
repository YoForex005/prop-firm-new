import React from 'react';

function DailyPerformance() {
    return (
        <div className="card daily-performance">
            <div className="card-header">
                <h3>Trading Day Performance</h3>
                <span>Best Day: Thu</span>
            </div>
            <div className="chart-placeholder">
                {/* Chart would go here */}
            </div>
        </div>
    );
}

export default DailyPerformance;
