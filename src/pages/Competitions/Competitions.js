import React from 'react';
import { User, Trophy } from 'lucide-react';
import './Competitions.css';
/* Ensure you move the generated trophy image to this folder */
import trophyImg from './trophy.png';

function Competitions() {
    const competitions = [
        { id: 1, title: 'January 2026 Monthly Competition', status: 'Ongoing', participants: '25,562', endIn: '24:01:34:55' },
        { id: 2, title: 'December 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00' },
        { id: 3, title: 'November 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00' },
        { id: 4, title: 'October 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00' },
        { id: 5, title: 'September 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00' },
        { id: 6, title: 'August 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00' },
        { id: 7, title: 'July 2025 Monthly Competition', status: 'Ended', participants: '50,000', endIn: '00:00:00' },
        { id: 8, title: 'June 2025 Monthly Competition', status: 'Ended', participants: '46,079', endIn: '00:00:00' },
        { id: 9, title: 'May 2025 Monthly Competition', status: 'Ended', participants: '48,520', endIn: '00:00:00' },
    ];

    return (
        <div className="competitions-container">
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
                        <div className="hero-stat"><User size={14} /> 25,567</div>
                    </div>

                    <div className="hero-dates">
                        <div className="date-item"><span>Starts</span><div>Jan 1, 2026</div></div>
                        <div className="date-item"><span>Ends</span><div>Jan 31, 2026</div></div>
                        <div className="date-item"><span>Ending In</span><div>24:01:34:55</div></div>
                    </div>

                    <div className="hero-actions">
                        <button className="btn-primary">View</button>
                        <button className="btn-secondary">Show Prizepool</button>
                        <button className="btn-secondary" style={{ border: 'none' }}>More Info</button>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src={trophyImg} alt="Trophy" className="trophy-image" />
                </div>
            </div>

            {/* Tabs */}
            <div className="tabs-nav">
                <div className="tab-item">Joined</div>
                <div className="tab-item active">FundingPips</div>
                <div className="tab-item">Championships</div>
                <div className="tab-item">Hosted</div>
            </div>

            {/* Grid */}
            <div className="competitions-grid">
                {competitions.map(comp => (
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
                                <span className="plat-tag">FundingPips</span>
                                <span className="plat-tag">matchtrader</span>
                            </div>
                            <button className="btn-view">View</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Competitions;
