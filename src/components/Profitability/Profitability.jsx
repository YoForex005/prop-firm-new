import React from 'react';
import { PieChart } from 'lucide-react';

function Profitability() {
    return (
        <div className="general-card profitability-card">
            <div className="card-header-flex">
                <span>Profitability</span>
                <span>Avg Holding Period: 0s</span>
            </div>
            <div className="profit-content-flex">
                <div className="profit-stat left">
                    <span className="label">Won</span>
                    <span className="val">0.0%</span>
                    <span className="sub">0</span>
                </div>
                <div className="chart-center">
                    <PieChart size={24} className="icon" />
                    <span className="label">Trades Taken</span>
                    <span className="sub">Start trading to see analysis</span>
                </div>
                <div className="profit-stat right">
                    <span className="label">Lost</span>
                    <span className="val">0.0%</span>
                    <span className="sub">0</span>
                </div>
            </div>
        </div>
    );
}

export default Profitability;
