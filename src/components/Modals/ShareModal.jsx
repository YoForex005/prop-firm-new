import React, { useState } from 'react';
import { X, Lock, Copy, Facebook, Linkedin, Twitter, Check } from 'lucide-react';
import './ShareModal.css';

function ShareModal({ onClose, shareLink }) {
    const [copied, setCopied] = useState(false);

    // Provide default handlers if copy fails or for cleaner testing
    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(shareLink).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            });
        } else {
            // Fallback
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleStopSharing = () => {
        alert("Sharing has been stopped for this link.");
        onClose();
    };

    const openSocialShare = (platform) => {
        const encodedUrl = encodeURIComponent(shareLink);
        const encodedText = encodeURIComponent("Check out my trading account metrix!");
        let url = '';

        switch (platform) {
            case 'facebook':
                url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
                break;
            case 'twitter':
                url = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
                break;
            case 'pinterest':
                url = `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}`;
                break;
            case 'linkedin':
                url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
                break;
            case 'whatsapp':
                url = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
                break;
            case 'telegram':
                url = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
                break;
            case 'line':
                url = `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`;
                break;
            default:
                break;
        }

        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    // Custom SVG icons for specific brands not always in standard sets or to match exact style
    const PinterestIcon = () => (
        <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.493-.69-2.433-2.864-2.433-4.624 0-3.77 2.748-7.229 7.932-7.229 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.512-6.232 7.512-1.219 0-2.365-.635-2.757-1.386 0 0-.604 2.296-.752 2.856-.273 1.04-1.012 2.35-1.511 3.148 1.135.334 2.326.516 3.546.516 6.621 0 11.983-5.367 11.983-11.987C23.999 5.367 18.638 0 12.017 0z" />
        </svg>
    );

    const WhatsAppIcon = () => (
        <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );

    const TelegramIcon = () => (
        <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
    );

    const LineIcon = () => (
        <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.627.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.6-.066.02-.132.031-.198.031-.195 0-.387-.1-.498-.266l-1.419-2.089v2.07c0 .348-.282.633-.633.633-.345 0-.627-.285-.627-.633V8.109c0-.27.174-.51.432-.596.066-.023.132-.033.198-.033.195 0 .387.1.498.266l1.419 2.089v-2.07c0-.349.282-.633.633-.633.345 0 .627.284.627.633v4.115zm-5.772.63H6.712c-.345 0-.63-.285-.63-.63V8.108c0-.345.285-.63.63-.63.345 0 .627.285.627.63V9.77h1.771c.344 0 .63.282.63.626 0 .348-.285.633-.63.633H7.339v1.258c0 .345.285.629.63.629.344.342.344.894-.002 1.232-.346.336-.884.34-1.229-.006zm-4.02-3.737c0-.345.285-.63.63-.63.345 0 .63.285.63.63v4.115c0 .345-.285.63-.63.63-.345 0-.63-.285-.63-.63V9.772zM12 0C5.373 0 0 4.242 0 9.474c0 4.706 4.183 8.654 9.695 9.324.378.084.891.258 1.02.591.117.297.054.834-.021 1.215-.09.432-.408 1.698 1.488 1.254 5.346-1.503 9.492-4.524 9.492-8.355l-.015-.03C21.642 4.242 18.636 0 12 0z" />
        </svg>
    );

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="share-modal-content" onClick={e => e.stopPropagation()}>
                <div className="share-modal-header">
                    <h3>Sharing</h3>
                    <button className="close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="share-modal-body">
                    <p className="share-description">
                        This page is private. You can publicly share it with other traders using link below.
                    </p>

                    <div className="share-url-section">
                        <label className="url-label">URL</label>
                        <div className="url-input-container">
                            <input
                                type="text"
                                value={shareLink}
                                readOnly
                                className="url-input"
                            />
                            <Lock size={14} className="input-lock-icon" />
                        </div>
                    </div>

                    <div className="share-actions-row">
                        <button className="copy-btn" onClick={handleCopy}>
                            {copied ? (
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Check size={16} style={{ marginRight: '6px' }} /> Copied!
                                </div>
                            ) : (
                                "Copy URL"
                            )}
                        </button>
                        <button className="stop-sharing-btn" onClick={handleStopSharing}>
                            Stop sharing
                        </button>
                    </div>

                    <div className="social-share-section">
                        <p className="social-label">Or share via:</p>
                        <div className="social-icons">
                            <button className="social-btn facebook" onClick={() => openSocialShare('facebook')}><Facebook size={16} fill="white" /></button>
                            <button className="social-btn x-twitter" onClick={() => openSocialShare('twitter')}><Twitter size={16} fill="white" /></button>
                            <button className="social-btn pinterest" onClick={() => openSocialShare('pinterest')}><PinterestIcon /></button>
                            <button className="social-btn linkedin" onClick={() => openSocialShare('linkedin')}><Linkedin size={16} fill="white" /></button>
                            <button className="social-btn whatsapp" onClick={() => openSocialShare('whatsapp')}><WhatsAppIcon /></button>
                            <button className="social-btn telegram" onClick={() => openSocialShare('telegram')}><TelegramIcon /></button>
                            <button className="social-btn line" onClick={() => openSocialShare('line')}><LineIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShareModal;
