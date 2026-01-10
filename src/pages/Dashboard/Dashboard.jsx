import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AccountRow from '../../components/Dashboard/AccountRow';
import PromoCard from '../../components/Dashboard/PromoCard';
import { Timer, Search, Calendar as CalendarIcon } from 'lucide-react';

// Mock Data
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
        <div className="w-full m-0">
            <Header />

            <div className="mb-10">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#f0f0f0] dark:border-[#374151]">
                    <h2 className="text-base font-bold m-0 flex items-center gap-2 text-[#1d1d1f] dark:text-[#f3f4f6]">Active accounts</h2>
                    <div className="flex items-center gap-2 text-[13px] text-[#86868b] dark:text-[#9ca3af]">
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

            <div className="mb-10">
                <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#f0f0f0] dark:border-[#374151]">
                    <h2 className="text-base font-bold m-0 flex items-center gap-2 text-[#1d1d1f] dark:text-[#f3f4f6]">
                        <CalendarIcon size={18} className="text-[#666] dark:text-[#9ca3af]" />
                        History
                    </h2>
                    <div className="flex items-center gap-2 text-[13px] text-[#86868b] dark:text-[#9ca3af]">
                        <span>Show only visible</span>
                        <input
                            type="checkbox"
                            checked={showOnlyVisibleHistory}
                            onChange={(e) => setShowOnlyVisibleHistory(e.target.checked)}
                        />
                    </div>
                </div>

                <div className="mb-4 pl-0.5">
                    <button
                        className={`bg-none border-none py-2 mr-6 text-sm font-semibold cursor-pointer border-b-2 transition-all duration-200 ${historyTab === 'free-trial'
                                ? 'text-[#00d4aa] border-b-[#00d4aa]'
                                : 'text-[#999] border-b-transparent hover:text-[#00d4aa] dark:text-[#6b7280] dark:hover:text-[#00d4aa]'
                            }`}
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

            <div className="flex gap-6 mt-10 mb-10 max-md:flex-col">
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

            <div className="mt-[60px] pb-10 text-[#9aa0ac] text-[11px] text-left dark:text-[#9ca3af]">
                <div className="flex gap-4 mb-4 font-semibold underline cursor-pointer">
                    <span>Cookie settings</span>
                    <span>Privacy policy</span>
                    <span>Terms & Conditions</span>
                </div>
                <p className="mb-4 leading-relaxed">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                </p>
                <div className="text-[#9aa0ac] dark:text-[#9ca3af]">
                    2026 © Copyright - YoPips.com Made with ♥ for trading.
                    <br />
                    Version: 673b1000
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
