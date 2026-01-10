import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Trophy } from 'lucide-react';
import PrizePoolModal from '../../components/Modals/PrizePoolModal';
import MoreInfoModal from '../../components/Modals/MoreInfoModal';
/* Ensure you move the generated trophy image to this folder */
import trophyImg from './trophy.png';

function Competitions() {
    const navigate = useNavigate();
    const [showPrizeModal, setShowPrizeModal] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);
    const [activeTab, setActiveTab] = useState('YoPips');

    const YoPipsData = [
        { id: 1, title: 'January 2026 Monthly Competition', status: 'Ongoing', participants: '27,424', endIn: '23:06:41:58', platform: 'matchtrader' },
        { id: 2, title: 'December 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 3, title: 'November 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 4, title: 'October 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 5, title: 'September 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 6, title: 'August 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 7, title: 'July 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 8, title: 'June 2025 Monthly Competition', status: 'Ended', participants: '46,073', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 9, title: 'May 2025 Monthly Competition', status: 'Ended', participants: '48,520', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 10, title: 'April 2025 Monthly Competition', status: 'Ended', participants: '49,674', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 11, title: 'March 2025 Monthly Competition', status: 'Ended', participants: '43,772', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 12, title: 'February 2025 Monthly Competition', status: 'Ended', participants: '42,001', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 13, title: 'January 2025 Monthly Competition', status: 'Ended', participants: '25,562', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 14, title: 'December 2024 Monthly Competition', status: 'Ended', participants: '39,146', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 15, title: 'November 2024 Monthly Competition', status: 'Ended', participants: '30,000', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 16, title: 'October 2024 Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 17, title: 'September 2024 Competition', status: 'Ended', participants: '45,545', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 18, title: 'February Competition', status: 'Ended', participants: '5,000', endIn: '00:00:00', platform: 'matchtrader' },
        { id: 19, title: 'January Competition', status: 'Ended', participants: '5,000', endIn: '00:00:00', platform: 'mt5' },
        { id: 20, title: 'December Competition', status: 'Ended', participants: '5,000', endIn: '00:00:00', platform: 'mt5' },
        { id: 21, title: 'November Competition', status: 'Ended', participants: '3,000', endIn: '00:00:00', platform: 'mt5' },
        { id: 22, title: 'October Competition', status: 'Ended', participants: '4,997', endIn: '00:00:00', platform: 'mt5' },
        { id: 23, title: 'September Competition', status: 'Ended', participants: '4,999', endIn: '00:00:00', platform: 'mt5' },
        { id: 24, title: 'August Competition', status: 'Ended', participants: '4,999', endIn: '00:00:00', platform: 'mt5' },
    ];

    const championshipsData = [
        { id: 101, title: 'Community Championship January 2025', status: 'Ended', participants: '17,900', endIn: '00:00:00', platform: 'matchtrader' }
    ];

    const getDisplayedCompetitions = () => {
        switch (activeTab) {
            case 'YoPips':
                return YoPipsData;
            case 'Championships':
                return championshipsData;
            default:
                return []; // 'Joined' and 'Hosted' are empty for now
        }
    };

    return (
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            {/* ... Header and Hero ... */}
            <div className="flex items-center gap-4 pt-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[--primary-color] text-white flex items-center justify-center font-bold text-lg">Y</div>
                    <h1 className="text-[28px] font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">Hey, Yo</h1>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[#f5f7fa] to-[#eef1f5] dark:from-[#1a1a1a] dark:to-[#111] rounded-[20px] p-10 flex justify-between items-center relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-transparent dark:border-[#333] max-md:flex-col max-md:text-center max-md:gap-8">
                <div className="z-[2] flex-1">
                    <span className="text-[13px] text-[#6b7280] dark:text-[#9ca3af] mb-2 block font-medium">Monthly Competition</span>
                    <h2 className="text-[28px] font-bold m-0 mb-4 text-[#1a1a1a] dark:text-white leading-tight">January 2026 Monthly Competition</h2>
                    <div className="flex gap-4 mb-6 max-md:justify-center">
                        <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6]"><div className="w-2 h-2 bg-[#10b981] rounded-full"></div> Ongoing</div>
                        <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">matchtrader</div>
                        <div className="flex items-center gap-1.5 text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6]"><User size={14} /> 27,432</div>
                    </div>

                    <div className="flex gap-10 mb-8 max-md:justify-center">
                        <div className="text-left max-md:text-center"><span className="block text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-1">Starts</span><div className="text-sm font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">Jan 1, 2026</div></div>
                        <div className="text-left max-md:text-center"><span className="block text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-1">Ends</span><div className="text-sm font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">Jan 31, 2026</div></div>
                        <div className="text-left max-md:text-center"><span className="block text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-1">Ending In</span><div className="text-sm font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] font-mono">23:06:42:07</div></div>
                    </div>

                    <div className="flex gap-3 max-md:justify-center flex-wrap">
                        <button className="bg-[--primary-color] text-white border-none py-2 px-5 rounded-lg text-sm font-semibold cursor-pointer shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all duration-200 hover:-translate-y-0.5" onClick={() => navigate('/competitions/1')}>View</button>
                        <button
                            className="bg-white dark:bg-transparent border border-[#e5e7eb] dark:border-[#333] py-2 px-5 rounded-lg text-sm font-semibold text-[#1a1a1a] dark:text-white cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:bg-[#f9fafb] dark:hover:bg-[rgba(255,255,255,0.02)] hover:border-[#d1d5db] dark:hover:border-[#555]"
                            onClick={() => setShowPrizeModal(true)}
                        >
                            Show Prizepool
                        </button>
                        <button
                            className="bg-white dark:bg-transparent border border-[#e5e7eb] dark:border-[#333] py-2 px-5 rounded-lg text-sm font-semibold text-[#1a1a1a] dark:text-[#ccc] cursor-pointer shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:bg-[#f9fafb] dark:hover:bg-[rgba(255,255,255,0.02)] hover:border-[#d1d5db] dark:hover:border-[#555] dark:hover:text-white"
                            onClick={() => setShowInfoModal(true)}
                        >
                            More Info
                        </button>
                    </div>
                </div>
                <div className="relative w-[300px] h-[200px] flex items-center justify-center max-md:w-full">
                    <img src={trophyImg} alt="Trophy" className="max-w-full max-h-[250px] object-contain animate-[float_6s_ease-in-out_infinite] drop-shadow-xl" />
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-[#eee] dark:border-[#333] pb-3 overflow-x-auto">
                {['Joined', 'YoPips', 'Championships', 'Hosted'].map(tab => (
                    <div
                        key={tab}
                        className={`relative text-sm font-medium cursor-pointer pb-2 whitespace-nowrap transition-colors duration-200 ${activeTab === tab ? 'text-[--primary-color] font-semibold after:content-[""] after:absolute after:-bottom-[13px] after:left-0 after:right-0 after:h-[2px] after:bg-[--primary-color]' : 'text-[#6b7280] dark:text-[#9ca3af] hover:text-[#1a1a1a] dark:hover:text-[#e5e7eb]'}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {getDisplayedCompetitions().map(comp => (
                    <div key={comp.id} className="bg-white dark:bg-[#1a1a1a] rounded-xl p-5 border border-[#e0e0e0] dark:border-[#333] flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex justify-between items-start">
                            <span className="text-[11px] bg-[#f0f0f0] dark:bg-[#333] px-2 py-1 rounded text-[#666] dark:text-[#ccc] font-medium font-mono">{comp.endIn}</span>
                        </div>
                        <h3 className="text-[15px] font-semibold m-0 text-[#1a1a1a] dark:text-white line-clamp-2 leading-snug">{comp.title}</h3>
                        <div className="flex gap-3 text-xs text-[#6b7280] dark:text-[#9ca3af] items-center">
                            {comp.status === 'Ongoing' ? (
                                <><div className="w-1.5 h-1.5 bg-[#10b981] rounded-full"></div> Ongoing</>
                            ) : (
                                <><div className="w-1.5 h-1.5 bg-[#ef4444] rounded-full"></div> Ended</>
                            )}
                            <span className="w-px h-3 bg-[#e5e7eb] dark:bg-[#444]"></span>
                            <span>Free</span>
                            <span className="w-px h-3 bg-[#e5e7eb] dark:bg-[#444]"></span>
                            <span className="flex items-center gap-1"><User size={12} /> {comp.participants}</span>
                        </div>

                        <div className="flex justify-between items-center mt-auto pt-2">
                            <div className="flex gap-2">
                                <span className="text-[10px] bg-[#f7f9fc] dark:bg-[#262626] px-2 py-1 rounded text-[#555] dark:text-[#ccc] border border-[#eee] dark:border-[#333] uppercase font-semibold tracking-wide">YoPips</span>
                                {comp.platform === 'mt5' ? (
                                    <span className="text-[10px] bg-[#f7f9fc] dark:bg-[#262626] px-2 py-1 rounded text-[#555] dark:text-[#ccc] border border-[#eee] dark:border-[#333] uppercase font-semibold tracking-wide">mt5</span>
                                ) : (
                                    <span className="text-[10px] bg-[#f7f9fc] dark:bg-[#262626] px-2 py-1 rounded text-[#555] dark:text-[#ccc] border border-[#eee] dark:border-[#333] uppercase font-semibold tracking-wide">matchtrader</span>
                                )}
                            </div>
                            <button className="bg-[--primary-color] text-white border-none px-4 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-transform hover:-translate-y-px hover:shadow-md" onClick={() => navigate(`/competitions/${comp.id}`)}>
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <PrizePoolModal
                isOpen={showPrizeModal}
                onClose={() => setShowPrizeModal(false)}
            />

            <MoreInfoModal
                isOpen={showInfoModal}
                onClose={() => setShowInfoModal(false)}
            />
        </div>
    );
}

export default Competitions;
