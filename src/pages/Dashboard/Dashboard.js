import React from 'react';
import './Dashboard.css';
import Header from '../../components/Header/Header';
import AccountSummary from '../../components/AccountSummary/AccountSummary';
import BehavioralBias from '../../components/BehavioralBias/BehavioralBias';
import DailyPerformance from '../../components/DailyPerformance/DailyPerformance';
import UserLevel from '../../components/UserLevel/UserLevel';
import Profitability from '../../components/Profitability/Profitability';
import MostTraded from '../../components/MostTraded/MostTraded';
import SessionWinRates from '../../components/SessionWinRates/SessionWinRates';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <Header />
            <div className="dashboard-grid">
                {/* Left Column (Wide) */}
                <div className="grid-col-left">
                    {/* Row 1: Split Card */}
                    <div className="row-split-card">
                        <div className="account-summary-wrapper">
                            <AccountSummary />
                        </div>
                        <div className="behavioral-bias-wrapper">
                            <BehavioralBias />
                        </div>
                    </div>

                    {/* Row 2: User Level */}
                    <div className="card-wrapper-level">
                        <UserLevel />
                    </div>

                    {/* Row 3: Most Traded */}
                    <div className="card-wrapper-most-traded">
                        <MostTraded />
                    </div>
                </div>

                {/* Right Column (Narrow) */}
                <div className="grid-col-right">
                    <DailyPerformance />
                    <Profitability />
                    <SessionWinRates />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
