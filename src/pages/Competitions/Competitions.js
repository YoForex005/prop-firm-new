import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Trophy } from 'lucide-react';
import './Competitions.css';
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
        // ... (keep the rest of the list same as before, I will use ...YoPipsData in thought but need to write full array here for tool) ...
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
        <div className="competitions-container">
            {/* ... Header and Hero ... */}
            <div className="page-header">
                <div className="user-greeting">
                    <div className="avatar">Y</div>
                    <h1>Hey, Yo</h1>
                </div>
            </div>

            {/* Hero Section */}
            <div className="competitions-hero">
                <div className="hero-content">
                    <span className="hero-tag">Monthly Competition</span>
                    <h2 className="hero-title">January 2026 Monthly Competition</h2>
                    <div className="hero-stats">
                        <div className="hero-stat"><div className="status-dot-active"></div> Ongoing</div>
                        <div className="hero-stat">matchtrader</div>
                        <div className="hero-stat"><User size={14} /> 27,432</div>
                    </div>

                    <div className="hero-dates">
                        <div className="date-item"><span>Starts</span><div>Jan 1, 2026</div></div>
                        <div className="date-item"><span>Ends</span><div>Jan 31, 2026</div></div>
                        <div className="date-item"><span>Ending In</span><div>23:06:42:07</div></div>
                    </div>

                    <div className="hero-actions">
                        <button className="btn-primary" onClick={() => navigate('/competitions/1')}>View</button>
                        <button
                            className="btn-secondary btn-prizepool"
                            onClick={() => setShowPrizeModal(true)}
                        >
                            Show Prizepool
                        </button>
                        <button
                            className="btn-secondary btn-more-info"
                            onClick={() => setShowInfoModal(true)}
                        >
                            More Info
                        </button>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src={trophyImg} alt="Trophy" className="trophy-image" />
                </div>
            </div>

            {/* Tabs */}
            <div className="tabs-nav">
                {['Joined', 'YoPips', 'Championships', 'Hosted'].map(tab => (
                    <div
                        key={tab}
                        className={`tab-item ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </div>
                ))}
            </div>

            {/* Grid */}
            <div className="competitions-grid">
                {getDisplayedCompetitions().map(comp => (
                    <div key={comp.id} className="competition-card">
                        <div className="comp-header">
                            <span className="comp-timer">{comp.endIn}</span>
                        </div>
                        <h3 className="comp-title">{comp.title}</h3>
                        <div className="comp-tags">
                            {comp.status === 'Ongoing' ? (
                                <><div className="status-dot-active"></div> Ongoing</>
                            ) : (
                                <><div className="status-ending"></div> Ended</>
                            )}
                            <span>Free</span>
                            <span><User size={12} /> {comp.participants}</span>
                        </div>

                        <div className="comp-footer">
                            <div className="platform-tags">
                                <span className="plat-tag">YoPips</span>
                                {comp.platform === 'mt5' ? (
                                    <span className="plat-tag">mt5</span>
                                ) : (
                                    <span className="plat-tag">matchtrader</span>
                                )}
                            </div>
                            <button className="btn-view" onClick={() => navigate(`/competitions/${comp.id}`)}>
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
