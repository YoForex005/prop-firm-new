import React from 'react';
import { Key, BarChart2, ChevronRight, Info, TrendingUp, Wallet, DollarSign, Activity, Copy, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CredentialsModal from '../Modals/CredentialsModal';

function AccountRow({ account, isHistory, isVisible, onToggle }) {
    const navigate = useNavigate();
    const [showCredentialsModal, setShowCredentialsModal] = React.useState(false);
    const [copiedLogin, setCopiedLogin] = React.useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopiedLogin(true);
        setTimeout(() => setCopiedLogin(false), 2000);
    };

    // Monochrome badge styles
    const getBadgeStyle = (type) => {
        switch (type) {
            case 'ongoing': return 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] shadow-sm';
            case 'free-trial': return 'bg-[#f0f0f0] dark:bg-[#333] text-[#666] dark:text-[#999] font-semibold';
            case 'not-passed': return 'bg-[#666] dark:bg-[#444] text-white shadow-sm';
            case 'ignored': return 'bg-[#999] dark:bg-[#555] text-white shadow-sm';
            default: return 'bg-[#e0e0e0] dark:bg-[#333] text-[#666] dark:text-[#999]';
        }
    };

    if (isHistory) {
        // Monochrome history row
        return (
            <div className="bg-white dark:bg-[#141414] border border-[#eee] dark:border-[#262626] rounded-xl px-5 py-4 flex items-center gap-6 hover:border-[#ccc] dark:hover:border-[#444] hover:shadow-md transition-all duration-200 group">
                <div className="flex gap-2 min-w-[100px]">
                    {account.tags.map((tag, index) => (
                        <span key={index} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide ${getBadgeStyle(tag.type)}`}>{tag.label}</span>
                    ))}
                </div>
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 bg-[#f5f7fa] dark:bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                        <Activity size={18} className="text-[#666] dark:text-[#888]" />
                    </div>
                    <div>
                        <div className="text-xs text-[#86868b] dark:text-[#6b7280] mb-0.5">Account ID</div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-[#1d1d1f] dark:text-white text-sm tabular-nums">{account.login}</span>
                            <button
                                onClick={() => copyToClipboard(account.login)}
                                className="p-1 rounded hover:bg-[#f0f0f0] dark:hover:bg-[#262626] transition-colors opacity-0 group-hover:opacity-100"
                            >
                                {copiedLogin ? <Check size={12} className="text-[#1d1d1f] dark:text-white" /> : <Copy size={12} className="text-[#999]" />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[12px] text-[#86868b] dark:text-[#6b7280] font-medium">Visibility</span>
                    <button
                        className={`w-12 h-6 rounded-full cursor-pointer relative transition-all duration-300 ${isVisible
                            ? 'bg-[#1d1d1f] dark:bg-white'
                            : 'bg-[#e5e7eb] dark:bg-[#333]'
                            }`}
                        onClick={onToggle}
                    >
                        <div className={`w-5 h-5 rounded-full absolute top-[2px] transition-all duration-300 shadow-md ${isVisible ? 'bg-white dark:bg-[#1d1d1f] left-[26px]' : 'bg-white left-[2px]'}`} />
                    </button>
                </div>
            </div>
        );
    }

    // Monochrome active account card
    return (
        <div className="bg-white dark:bg-[#141414] rounded-2xl p-6 border border-[#eee] dark:border-[#262626] shadow-lg shadow-black/5 dark:shadow-black/20 hover:shadow-xl transition-all duration-300">
            {/* Header Row */}
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                        {account.tags.map((tag, index) => (
                            <span key={index} className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wide ${getBadgeStyle(tag.type)}`}>{tag.label}</span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[12px] text-[#86868b] dark:text-[#6b7280] font-medium">Visibility</span>
                    <button
                        className={`w-12 h-6 rounded-full cursor-pointer relative transition-all duration-300 ${isVisible
                            ? 'bg-[#1d1d1f] dark:bg-white'
                            : 'bg-[#e5e7eb] dark:bg-[#333]'
                            }`}
                        onClick={onToggle}
                    >
                        <div className={`w-5 h-5 rounded-full absolute top-[2px] transition-all duration-300 shadow-md ${isVisible ? 'bg-white dark:bg-[#1d1d1f] left-[26px]' : 'bg-white left-[2px]'}`} />
                    </button>
                </div>
            </div>

            {/* Account Info Grid */}
            <div className="grid grid-cols-4 gap-6 mb-6">
                <div>
                    <div className="text-xs text-[#86868b] dark:text-[#6b7280] mb-1">Account ID</div>
                    <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-[#1d1d1f] dark:text-white tabular-nums">{account.login}</span>
                        <button
                            onClick={() => copyToClipboard(account.login)}
                            className="p-1 rounded hover:bg-[#f0f0f0] dark:hover:bg-[#262626] transition-colors"
                        >
                            {copiedLogin ? <Check size={12} className="text-[#1d1d1f] dark:text-white" /> : <Copy size={12} className="text-[#999]" />}
                        </button>
                    </div>
                </div>
                <div>
                    <div className="text-xs text-[#86868b] dark:text-[#6b7280] mb-1">Balance</div>
                    <span className="text-base font-bold text-[#1d1d1f] dark:text-white">{account.balance}</span>
                </div>
                <div>
                    <div className="text-xs text-[#86868b] dark:text-[#6b7280] mb-1">End Date</div>
                    <span className="text-base font-bold text-[#1d1d1f] dark:text-white">{account.endDate}</span>
                </div>
                <div>
                    <div className="text-xs text-[#86868b] dark:text-[#6b7280] mb-1">Status</div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1d1d1f] dark:text-white">
                        <span className="w-2 h-2 bg-[#1d1d1f] dark:bg-white rounded-full"></span>
                        {account.status}
                    </span>
                </div>
            </div>

            {/* Progress Bar and Actions */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#f0f0f0] dark:border-[#262626]">
                <div className="flex-1">
                    <div className="flex justify-between text-xs text-[#86868b] dark:text-[#6b7280] mb-2">
                        <span>Trading Progress</span>
                        <span className="font-medium">15%</span>
                    </div>
                    <div className="w-full h-2 bg-[#f0f0f0] dark:bg-[#262626] rounded-full overflow-hidden">
                        <div className="h-full bg-[#1d1d1f] dark:bg-white rounded-full transition-all duration-500" style={{ width: '15%' }}></div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#f5f7fa] dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] rounded-xl text-[13px] font-semibold text-[#1d1d1f] dark:text-white hover:bg-[#eee] dark:hover:bg-[#262626] hover:border-[#ccc] dark:hover:border-[#444] transition-all duration-200"
                        onClick={() => setShowCredentialsModal(true)}
                    >
                        <Key size={14} />
                        Credentials
                    </button>
                    <button
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#f5f7fa] dark:bg-[#1a1a1a] border border-[#e0e0e0] dark:border-[#333] rounded-xl text-[13px] font-semibold text-[#1d1d1f] dark:text-white hover:bg-[#eee] dark:hover:bg-[#262626] hover:border-[#ccc] dark:hover:border-[#444] transition-all duration-200"
                        onClick={() => navigate(`/account-metrix/${account.login}`)}
                    >
                        <BarChart2 size={14} />
                        Account Metrix
                    </button>
                    <button
                        className="flex items-center gap-2 px-4 py-2.5 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] rounded-xl text-[13px] font-semibold hover:bg-[#333] dark:hover:bg-[#f0f0f0] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                        onClick={() => navigate(`/account-metrix/${account.login}`)}
                    >
                        View Details
                        <ChevronRight size={14} />
                    </button>
                </div>
            </div>

            {/* Stats Cards - Green/Red Theme */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-emerald-50 dark:bg-emerald-500/10 p-5 rounded-xl border border-emerald-100 dark:border-emerald-500/20">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                            Today's Profit
                            <Info size={12} className="opacity-50" />
                        </span>
                        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center">
                            <TrendingUp size={16} className="text-emerald-600 dark:text-emerald-400" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{account.todaysProfit}</div>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-500/10 p-5 rounded-xl border border-emerald-100 dark:border-emerald-500/20">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                            Equity
                            <Info size={12} className="opacity-50" />
                        </span>
                        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center">
                            <Wallet size={16} className="text-emerald-600 dark:text-emerald-400" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{account.equity}</div>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-500/10 p-5 rounded-xl border border-emerald-100 dark:border-emerald-500/20">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                            Unrealized PnL
                            <Info size={12} className="opacity-50" />
                        </span>
                        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-500/20 rounded-lg flex items-center justify-center">
                            <DollarSign size={16} className="text-emerald-600 dark:text-emerald-400" />
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{account.unrealizedPnL}</div>
                </div>
            </div>

            {/* Credentials Modal */}
            {showCredentialsModal && (
                <CredentialsModal
                    onClose={() => setShowCredentialsModal(false)}
                    credentials={account}
                />
            )}
        </div>
    );
}

export default AccountRow;
