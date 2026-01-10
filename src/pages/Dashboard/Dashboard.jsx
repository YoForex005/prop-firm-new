import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Header from '../../components/Header/Header';
import AccountRow from '../../components/Dashboard/AccountRow';
import PromoCard from '../../components/Dashboard/PromoCard';
import { Timer, Search, Calendar as CalendarIcon } from 'lucide-react';

// Mock Data
// We can define mock data inside or outside, better inside if we want it to reset or outside if static. 
// Moving inside as initial state was the previous pattern for activeAccount.

function Dashboard() {
    const navigate = useNavigate();
    const [showOnlyVisibleActive, setShowOnlyVisibleActive] = useState(false);
    const [showOnlyVisibleHistory, setShowOnlyVisibleHistory] = useState(false);
    const [historyTab, setHistoryTab] = useState('free-trial');

    const [activeAccount, setActiveAccount] = useState({
        login: '1512264795',
        balance: '$199,999.97',
        endDate: '21 Jan 2026',
        status: 'Active',
        todaysProfit: '$28.25',
        equity: '$200,028.22',
        unrealizedPnL: '$28.25',
        tags: [
            { label: 'Ongoing', type: 'ongoing' },
            { label: 'Free trial', type: 'free-trial' }
        ],
        visible: true
    });

    const [historyAccounts, setHistoryAccounts] = useState([
        { login: '1511533398', tags: [{ label: 'Not passed', type: 'not-passed' }], visible: true },
        { login: '2102732546', tags: [{ label: 'Not passed', type: 'not-passed' }], visible: true },
        { login: '2102727583', tags: [{ label: 'Ignored', type: 'ignored' }], visible: true },
        { login: '2102724422', tags: [{ label: 'Ignored', type: 'ignored' }], visible: true },
        { login: '2102561635', tags: [{ label: 'Not passed', type: 'not-passed' }], visible: true },
        { login: '2102517590', tags: [{ label: 'Not passed', type: 'not-passed' }], visible: true },
        { login: '1040080772', tags: [{ label: 'Not passed', type: 'not-passed' }], visible: true },
    ]);

    const toggleActiveVisibility = () => {
        setActiveAccount(prev => ({ ...prev, visible: !prev.visible }));
    };

    const toggleHistoryVisibility = (index) => {
        const newHistory = [...historyAccounts];
        newHistory[index].visible = !newHistory[index].visible;
        setHistoryAccounts(newHistory);
    };

    const filteredHistoryAccounts = historyAccounts.filter(acc =>
        !showOnlyVisibleHistory || acc.visible
    );

    return (
        <div className="dashboard-container">
            <Header />

            <div className="dashboard-section">
                <div className="section-header">
                    <h2>Active accounts</h2>
                    <div className="filter-toggle">
                        <span>Show only visible</span>
                        <input
                            type="checkbox"
                            checked={showOnlyVisibleActive}
                            onChange={(e) => setShowOnlyVisibleActive(e.target.checked)}
                        />
                    </div>
                </div>
                <div className="accounts-list">
                    {(!showOnlyVisibleActive || activeAccount.visible) && (
                        <AccountRow
                            account={activeAccount}
                            isHistory={false}
                            isVisible={activeAccount.visible}
                            onToggle={() => toggleActiveVisibility()}
                        />
                    )}
                </div>
            </div>

            <div className="dashboard-section">
                <div className="section-header">
                    <h2>
                        <CalendarIcon size={18} className="history-icon" />
                        History
                    </h2>
                    <div className="filter-toggle">
                        <span>Show only visible</span>
                        <input
                            type="checkbox"
                            checked={showOnlyVisibleHistory}
                            onChange={(e) => setShowOnlyVisibleHistory(e.target.checked)}
                        />
                    </div>
                </div>

                <div className="history-tabs">
                    <button
                        className={`history-tab ${historyTab === 'free-trial' ? 'active' : ''}`}
                        onClick={() => setHistoryTab('free-trial')}
                    >
                        Free trial
                    </button>
                </div>

                <div className="accounts-list">
                    {filteredHistoryAccounts.map((acc, idx) => {
                        // Find original index to toggle correctly
                        const originalIndex = historyAccounts.findIndex(a => a.login === acc.login);
                        return (
                            <AccountRow
                                key={acc.login}
                                account={acc}
                                isHistory={true}
                                isVisible={acc.visible}
                                onToggle={() => toggleHistoryVisibility(originalIndex)}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="promo-section">
                <PromoCard
                    icon={Timer}
                    title="Free Trial"
                    subtitle="Master your skills"
                    description="Practice your trading without risking anything, and be ready for the real challenge when it comes!"
                    features={[
                        "No eligibility for Yo Pips Account",
                        "14 days",
                        "Basic Account Analysis",
                        "Limited Apps"
                    ]}
                    buttonText="Start Free Trial"
                    buttonAction={() => navigate('/free-trial')}
                    isPrimary={false}
                />

                <PromoCard
                    icon={Search}
                    title="Yo Pips Challenge"
                    subtitle="Trade up to $200,000 Yo Pips Account"
                    description="Show us your trading skills. Pass the Evaluation Course and receive the Yo Pips Account!"
                    features={[
                        "We provide you with up to $200,000 Yo Pips Account",
                        "Prove your trading skills",
                        "Full Account Analysis",
                        "Premium Apps"
                    ]}
                    buttonText="New Yo Pips Challenge"
                    buttonAction={() => navigate('/new-challenge')}
                    isPrimary={true}
                />
            </div>

            <div className="dashboard-footer">
                <div className="footer-links">
                    <span>Cookie settings</span>
                    <span>Privacy policy</span>
                    <span>Terms & Conditions</span>
                </div>
                <p className="footer-disclaimer">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <div className="footer-copyright">
                    2026 © Copyright - YoPips.com Made with ♥ for trading.
                    <br />
                    Version: 673b1000
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
