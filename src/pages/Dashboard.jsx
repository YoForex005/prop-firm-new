import React from 'react';
import Header from '../components/Header';
import AccountSummary from '../components/AccountSummary';
import BehavioralBias from '../components/BehavioralBias';
import DailyPerformance from '../components/DailyPerformance';
import UserLevel from '../components/UserLevel';
import Profitability from '../components/Profitability';
import MostTraded from '../components/MostTraded';
import SessionWinRates from '../components/SessionWinRates';

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
