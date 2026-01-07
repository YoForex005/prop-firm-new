import React from 'react';
import { PieChart } from 'lucide-react';

function Profitability() {
    return (
        <div className="card profitability">
            <div className="card-header">
                <h3>Profitability</h3>
                <span className="card-header-stats">Avg Holding Period: 0s</span>
            </div>
            <div className="profit-circle">
                <div className="win-rate">
                    <div className="rate-label">Won</div>
                    <div className="rate-value">0.0%</div>
                    <div className="rate-count">0</div>
                </div>

                <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Simple SVG Donut Placeholder */}
                    <svg width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#eee" strokeWidth="10" />
                    </svg>
                    <div style={{ position: 'absolute', textAlign: 'center', fontSize: '10px', color: '#888' }}>
                        <PieChart size={16} style={{ display: 'block', margin: '0 auto 4px auto' }} />
                        Trades Taken
                    </div>
                </div>

                <div className="loss-rate">
                    <div className="rate-label">Lost</div>
                    <div className="rate-value">0.0%</div>
                    <div className="rate-count">0</div>
                </div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '11px', color: '#999', marginTop: '10px' }}>
                Start trading to see analysis
            </div>
        </div>
    );
}

export default Profitability;
