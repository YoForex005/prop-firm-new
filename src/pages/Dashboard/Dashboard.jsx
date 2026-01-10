import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AccountRow from '../../components/Dashboard/AccountRow';
import PromoCard from '../../components/Dashboard/PromoCard';
import { Timer, Search, Calendar as CalendarIcon, Briefcase, History, Eye, EyeOff } from 'lucide-react';

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

            {/* Active Accounts Section */}
            <div className="mb-10">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#1d1d1f] dark:bg-white rounded-xl flex items-center justify-center shadow-lg">
                            <Briefcase size={20} className="text-white dark:text-[#1d1d1f]" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold m-0 text-[#1d1d1f] dark:text-white">Active Accounts</h2>
                            <p className="text-xs text-[#86868b] dark:text-[#6b7280] m-0">Manage your trading accounts</p>
                        </div>
                    </div>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium cursor-pointer transition-all duration-200 border ${showOnlyVisibleActive
                            ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] border-[#1d1d1f] dark:border-white'
                            : 'bg-white dark:bg-[#1a1a1a] text-[#666] dark:text-[#9ca3af] border-[#e0e0e0] dark:border-[#333] hover:border-[#999] dark:hover:border-[#555]'
                            }`}
                        onClick={() => setShowOnlyVisibleActive(!showOnlyVisibleActive)}
                    >
                        {showOnlyVisibleActive ? <Eye size={14} /> : <EyeOff size={14} />}
                        Show only visible
                    </button>
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

            {/* History Section */}
            <div className="mb-10">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#666] dark:bg-[#555] rounded-xl flex items-center justify-center shadow-lg">
                            <History size={20} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold m-0 text-[#1d1d1f] dark:text-white">Account History</h2>
                            <p className="text-xs text-[#86868b] dark:text-[#6b7280] m-0">Review your past trading attempts</p>
                        </div>
                    </div>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium cursor-pointer transition-all duration-200 border ${showOnlyVisibleHistory
                            ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] border-[#1d1d1f] dark:border-white'
                            : 'bg-white dark:bg-[#1a1a1a] text-[#666] dark:text-[#9ca3af] border-[#e0e0e0] dark:border-[#333] hover:border-[#999] dark:hover:border-[#555]'
                            }`}
                        onClick={() => setShowOnlyVisibleHistory(!showOnlyVisibleHistory)}
                    >
                        {showOnlyVisibleHistory ? <Eye size={14} /> : <EyeOff size={14} />}
                        Show only visible
                    </button>
                </div>

                {/* Tab Navigation */}
                <div className="flex gap-1 mb-4 bg-[#f5f7fa] dark:bg-[#1a1a1a] rounded-xl p-1 w-fit">
                    {['free-trial', 'evaluation', 'express'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 text-sm font-semibold cursor-pointer rounded-lg transition-all duration-200 border-none capitalize ${historyTab === tab
                                ? 'bg-white dark:bg-[#262626] text-[#1d1d1f] dark:text-white shadow-sm'
                                : 'bg-transparent text-[#86868b] dark:text-[#6b7280] hover:text-[#1d1d1f] dark:hover:text-white'
                                }`}
                            onClick={() => setHistoryTab(tab)}
                        >
                            {tab.replace('-', ' ')}
                        </button>
                    ))}
                </div>

                <div className="accounts-list space-y-2">
                    {filteredHistoryAccounts.map((acc, idx) => {
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

            {/* Promo Cards */}
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

            {/* Footer */}
            <div className="mt-16 pt-8 pb-10 border-t border-[#eee] dark:border-[#262626]">
                <div className="flex gap-6 mb-4">
                    <a href="#" className="text-xs text-[#86868b] dark:text-[#6b7280] font-medium hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Cookie settings</a>
                    <a href="#" className="text-xs text-[#86868b] dark:text-[#6b7280] font-medium hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Privacy policy</a>
                    <a href="#" className="text-xs text-[#86868b] dark:text-[#6b7280] font-medium hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Terms & Conditions</a>
                </div>
                <p className="text-[11px] text-[#9ca3af] dark:text-[#6b7280] leading-relaxed mb-4 max-w-4xl">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders.
                </p>
                <div className="text-[11px] text-[#9ca3af] dark:text-[#6b7280]">
                    2026 © Copyright - YoPips.com Made with ♥ for trading.
                    <span className="ml-4 text-[10px] bg-[#f5f7fa] dark:bg-[#1a1a1a] px-2 py-0.5 rounded">v673b1000</span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
