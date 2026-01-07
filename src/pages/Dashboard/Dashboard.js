import React from 'react';
import './Dashboard.css';

/* Import Components from their new structure (will be updated shortly) */
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
        <>
            <Header />
            <div className="grid-container">
                {/* Left Column (Wide) */}
                <div className="grid-left-col">
                    {/* Row 1: Mixed Flex (Blue Card + Bias) */}
                    <div className="top-cards-row">
                        <div className="account-summary-wrapper">
                            <AccountSummary />
                        </div>
                        <div className="behavioral-bias-wrapper">
                            <BehavioralBias />
                        </div>
                    </div>

                    {/* Row 2: User Level */}
                    <UserLevel />

                    {/* Row 3: Most Traded */}
                    <MostTraded />
                </div>

                {/* Right Column (Narrow) */}
                <div className="grid-right-col">
                    {/* Row 1: Daily Perf */}
                    <DailyPerformance />

                    {/* Row 2: Profitability */}
                    <Profitability />

                    {/* Row 3: Session Win Rates */}
                    <SessionWinRates />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
