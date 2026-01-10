import React from 'react';
import { Key, BarChart2, ChevronRight, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CredentialsModal from '../Modals/CredentialsModal';

function AccountRow({ account, isHistory, isVisible, onToggle }) {
    const navigate = useNavigate();
    // Local state removed in favor of lifted state
    const [showCredentialsModal, setShowCredentialsModal] = React.useState(false);

    // Common badge styles
    const getBadgeStyle = (type) => {
        switch (type) {
            case 'ongoing': return 'bg-[#00d4aa] text-white';
            case 'free-trial': return 'border-[1.5px] border-[#888] text-[#666] bg-transparent font-semibold dark:border-[#6b7280] dark:text-[#9ca3af]';
            case 'not-passed':
            case 'ignored': return 'bg-[#ff4757] text-white';
            default: return 'bg-gray-200 text-gray-700';
        }
    };

    if (isHistory) {
        // Simple history row layout
        return (
            <div className="bg-white dark:bg-[#141414] border border-[#eee] dark:border-[#333] rounded-md px-5 py-3.5 mb-2.5 flex items-center gap-6">
                <div className="flex gap-2 min-w-[100px]">
                    {account.tags.map((tag, index) => (
                        <span key={index} className={`px-2.5 py-1 rounded-xl text-[11px] font-bold uppercase ${getBadgeStyle(tag.type)}`}>{tag.label}</span>
                    ))}
                </div>
                <div className="flex gap-2 text-sm flex-1">
                    <span className="text-[#666] dark:text-[#9ca3af]">Login:</span>
                    <span className="font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">{account.login}</span>
                </div>
                <div className="flex items-center gap-2.5 ml-auto">
                    <span className="text-[13px] text-[#666] font-medium dark:text-[#9ca3af]">Visible</span>
                    <div
                        className={`w-5 h-5 border-2 rounded-full cursor-pointer flex items-center justify-center transition-all duration-200 ${isVisible
                            ? 'border-[#00d4aa] bg-white dark:bg-[#141414]'
                            : 'border-[#ddd] dark:border-[#4b5563]'
                            }`}
                        onClick={onToggle}
                    >
                        {isVisible && <div className="w-2.5 h-2.5 bg-[#00d4aa] rounded-full"></div>}
                    </div>
                </div>
            </div>
        );
    }

    // Active account layout
    return (
        <div className="bg-white dark:bg-[#141414] rounded-lg px-6 py-5 mb-4 border border-[#eee] dark:border-[#333] shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                    {account.tags.map((tag, index) => (
                        <span key={index} className={`px-2.5 py-1 rounded-xl text-[11px] font-bold uppercase ${getBadgeStyle(tag.type)}`}>{tag.label}</span>
                    ))}
                </div>
                <div className="flex items-center gap-2.5">
                    <span className="text-[13px] text-[#666] font-medium dark:text-[#9ca3af]">Visible</span>
                    <div className={`w-[42px] h-6 rounded-[20px] cursor-pointer relative transition-colors duration-200 ${isVisible ? 'bg-[#2563eb]' : 'bg-[#ddd] dark:bg-[#4b5563]'}`} onClick={onToggle}>
                        <div className={`w-[18px] h-[18px] bg-white rounded-full absolute top-[3px] transition-transform duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.2)] ${isVisible ? 'left-[3px] translate-x-[18px]' : 'left-[3px]'}`}></div>
                    </div>
                </div>
            </div>

            <div className="text-[15px] mb-3 flex gap-2">
                <span className="text-[#666] dark:text-[#9ca3af]">Login:</span>
                <span className="font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">{account.login}</span>
            </div>

            <div className="flex gap-8 mb-4 text-[13px]">
                <div className="flex gap-1.5">
                    <span className="text-[#666] dark:text-[#9ca3af]">Balance:</span>
                    <span className="font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">{account.balance}</span>
                </div>
                <div className="flex gap-1.5">
                    <span className="text-[#666] dark:text-[#9ca3af]">End:</span>
                    <span className="font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">{account.endDate}</span>
                </div>
                <div className="flex gap-1.5">
                    <span className="text-[#666] dark:text-[#9ca3af]">Status:</span>
                    <span className="font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">{account.status}</span>
                </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
                <div className="w-[140px] h-1.5 bg-[#eee] dark:bg-[#333] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00d4aa]" style={{ width: '15%' }}></div>
                </div>

                <button className="flex items-center gap-1.5 bg-white dark:bg-[#262626] border border-[#d1d5db] dark:border-[#444] px-4 py-2 rounded-lg text-[13px] font-semibold cursor-pointer text-[#374151] dark:text-[#e5e7eb] shadow-sm transition-all duration-200 hover:bg-[#f9fafb] dark:hover:bg-[#333] hover:border-[#9ca3af] dark:hover:border-[#6b7280] hover:shadow-md" onClick={() => setShowCredentialsModal(true)}>
                    <Key size={14} /> Credentials
                </button>
                <button className="flex items-center gap-1.5 bg-white dark:bg-[#262626] border border-[#d1d5db] dark:border-[#444] px-4 py-2 rounded-lg text-[13px] font-semibold cursor-pointer text-[#374151] dark:text-[#e5e7eb] shadow-sm transition-all duration-200 hover:bg-[#f9fafb] dark:hover:bg-[#333] hover:border-[#9ca3af] dark:hover:border-[#6b7280] hover:shadow-md" onClick={() => navigate(`/account-metrix/${account.login}`)}>
                    <BarChart2 size={14} /> Account Metrix
                </button>
                <button className="flex items-center gap-1.5 bg-white dark:bg-[#262626] border border-[#d1d5db] dark:border-[#444] px-4 py-2 rounded-lg text-[13px] font-semibold cursor-pointer text-[#374151] dark:text-[#e5e7eb] shadow-sm ml-auto transition-all duration-200 hover:bg-[#f9fafb] dark:hover:bg-[#333] hover:border-[#9ca3af] dark:hover:border-[#6b7280] hover:shadow-md" onClick={() => navigate(`/account-metrix/${account.login}`)}>
                    Detail <ChevronRight size={14} />
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="bg-[rgba(0,212,170,0.08)] dark:bg-[rgba(0,212,170,0.05)] p-4 rounded-md">
                    <div className="text-xs text-[#666] dark:text-[#9ca3af] mb-2 flex items-center gap-1">
                        Today's profit <Info size={12} className="text-[#999]" />
                    </div>
                    <div className="text-[17px] font-bold text-[#00d4aa]">{account.todaysProfit}</div>
                </div>
                <div className="bg-[rgba(0,212,170,0.08)] dark:bg-[rgba(0,212,170,0.05)] p-4 rounded-md">
                    <div className="text-xs text-[#666] dark:text-[#9ca3af] mb-2 flex items-center gap-1">
                        Equity <Info size={12} className="text-[#999]" />
                    </div>
                    <div className="text-[17px] font-bold text-[#00d4aa]">{account.equity}</div>
                </div>
                <div className="bg-[rgba(0,212,170,0.08)] dark:bg-[rgba(0,212,170,0.05)] p-4 rounded-md">
                    <div className="text-xs text-[#666] dark:text-[#9ca3af] mb-2 flex items-center gap-1">
                        Unrealized PnL <Info size={12} className="text-[#999]" />
                    </div>
                    <div className="text-[17px] font-bold text-[#00d4aa]">{account.unrealizedPnL}</div>
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
