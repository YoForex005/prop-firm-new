import React, { useState } from 'react';
import { X } from 'lucide-react';
import './ShareModal.css';

function ShareModal({ isOpen, onClose }) {
    const [linkGenerated, setLinkGenerated] = useState(false);
    const [generatedLink, setGeneratedLink] = useState('');

    if (!isOpen) return null;

    const handleGenerateLink = () => {
        // Simulate link generation
        const mockLink = "https://YoPips.com/share/u/yoforex-123";
        setGeneratedLink(mockLink);
        setLinkGenerated(true);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatedLink);
        alert("Link copied to clipboard!");
    };

    const handleClose = () => {
        setLinkGenerated(false); // Reset state on close
        onClose();
    };

    return (
        <div className="share-modal-overlay" onClick={handleClose}>
            <div className="share-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="share-modal-header">
                    <h2>Share Dashboard</h2>
                    <button className="close-btn" onClick={handleClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="share-action-area">
                    {!linkGenerated ? (
                        <button className="btn-generate-link" onClick={handleGenerateLink}>
                            Generate Share Link
                        </button>
                    ) : (
                        <div className="generated-link-container">
                            <input
                                type="text"
                                readOnly
                                value={generatedLink}
                                className="link-input"
                            />
                            <button className="btn-copy" onClick={handleCopy}>
                                Copy
                            </button>
                        </div>
                    )}
                </div>

                <div className="share-modal-footer">
                    Share links allow others to view your trading dashboard and performance metrics.
                </div>
            </div>
        </div>
    );
}

export default ShareModal;
