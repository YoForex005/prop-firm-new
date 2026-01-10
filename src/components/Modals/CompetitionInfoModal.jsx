import React from 'react';
import { X } from 'lucide-react';
import './CompetitionInfoModal.css';

function CompetitionInfoModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="info-modal-overlay" onClick={onClose}>
            <div className="info-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="info-modal-header">
                    <h3>About this Competition</h3>
                    <button className="btn-close" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="info-modal-body">
                    <p className="modal-text">YoPips Trading Competition</p>
                    <p className="modal-text">$5000 in cash and $575.000 worth of Evaluations.</p>

                    <p className="modal-text">The rules for the competition:</p>
                    <ul className="modal-list">
                        <li>- 10% Maximum Loss Limit</li>
                        <li>- 5% Maximum Daily Loss Limit</li>
                        <li>- EAs are not allowed</li>
                        <li>- Taking advantage of unrealistic fills in the demo environment is not allowed.</li>
                        <li>- Only one account per person is permitted.</li>
                    </ul>

                    <p className="modal-text">If one of the rules is breached, you will be disqualified from the competition.</p>
                    <p className="modal-text">We have room for 50,000 participants. FULL = FULL</p>

                    <div className="important-notice">
                        <p><strong>Important Notice:</strong></p>
                        <p><strong>Please be aware that the website link and your account credentials for competition accounts are different from those used for our evaluation accounts.</strong></p>
                    </div>

                    <div className="access-info">
                        <p><strong>To access your competition account on Match Trader, please use the following link: <a href="https://mtr-competition.YoPips.com/dashboard" target="_blank" rel="noreferrer">https://mtr-competition.YoPips.com/dashboard</a>. This link is also available on your account dashboard under the "Credentials" section.</strong></p>
                    </div>

                    <div className="final-note">
                        <p><strong>Make sure you are using the correct link and credentials to avoid any access issues.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompetitionInfoModal;
