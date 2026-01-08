import React from 'react';

function DailyPerformance() {
    return (
        <div className="general-card daily-perf-card">
            <div className="card-header-flex">
                <span>Trading Day Performance</span>
                <span>Best Day: <strong>Thu</strong></span>
            </div>
            <div className="chart-placeholder">
            </div>
        </div>
    );
}

export default DailyPerformance;
