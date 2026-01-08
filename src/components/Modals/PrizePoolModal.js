import React from 'react';
import { X } from 'lucide-react';
import './PrizePoolModal.css';

function PrizePoolModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="prize-modal-overlay" onClick={onClose}>
            <div className="prize-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="prize-modal-header">
                    <h3>Prize pool for this competition</h3>
                    <button className="btn-close" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="prize-modal-body">
                    <div className="prize-list">
                        <div className="prize-item">1st place: 100K Evaluation (+$1500)</div>
                        <div className="prize-item">2nd place: 100K Evaluation (+$1200)</div>
                        <div className="prize-item">3rd place: 100K Evaluation (+$1000)</div>
                        <div className="prize-item">4th place: 100K Evaluation</div>
                        <div className="prize-item">5th place: 50K Evaluation</div>
                        <div className="prize-item">6th / 10th: 25K Evaluation</div>
                        <div className="prize-item">11th / 20th: 10K Evaluation</div>
                    </div>

                    <div className="compensation-text">
                        <strong>Compensation price:</strong> Thirteen random participants, ranked from 4th place to 1000th place, will receive a cash compensation prize of $100.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrizePoolModal;
