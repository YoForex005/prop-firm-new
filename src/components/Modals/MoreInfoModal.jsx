import React from 'react';
import { X } from 'lucide-react';
import './MoreInfoModal.css';

const MoreInfoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="info-modal-content" onClick={e => e.stopPropagation()}>
                <div className="info-modal-header">
                    <h2>About this Competition</h2>
                    <button className="close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="info-modal-body">
                    <p className="intro-text">YoPips Trading Competition</p>
                    <p className="prize-summary">$5000 in cash and $575.000 worth of Evaluations.</p>

                    <div className="rules-section">
                        <p>The rules for the competition:</p>
                        <ul>
                            <li>- 10% Maximum Loss Limit</li>
                            <li>- 5% Maximum Daily Loss Limit</li>
                            <li>- EAs are not allowed</li>
                            <li>- Taking advantage of unrealistic fills in the demo environment is not allowed.</li>
                            <li>- Only one account per person is permitted.</li>
                        </ul>
                    </div>

                    <p className="warning-text">
                        If one of the rules is breached, you will be disqualified from the competition.
                    </p>

                    <p className="capacity-text">
                        We have room for 50,000 participants. FULL = FULL
                    </p>

                    <div className="important-notice">
                        <h3>Important Notice:</h3>
                        <p>
                            Please be aware that the website link and your account credentials for competition accounts are different from those used for our evaluation accounts.
                        </p>
                    </div>

                    <div className="access-info">
                        <p>
                            To access your competition account on Match Trader, please use the following link:
                            <a href="https://mtr-competition.YoPips.com/dashboard" target="_blank" rel="noopener noreferrer"> https://mtr-competition.YoPips.com/dashboard</a>.
                            This link is also available on your account dashboard under the "Credentials" section.
                        </p>
                        <p className="credential-warning">
                            Make sure you are using the correct link and credentials to avoid any access issues.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreInfoModal;
