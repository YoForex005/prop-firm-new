import React, { useState } from 'react';
import { X, Copy, Eye, EyeOff, Info, Smartphone, Monitor, Globe } from 'lucide-react';
import './CredentialsModal.css';

function CredentialsModal({ onClose, credentials }) {
    const [showMasterPassword, setShowMasterPassword] = useState(true);
    const [showReadOnlyPassword, setShowReadOnlyPassword] = useState(false);
    const [copyToast, setCopyToast] = useState('');

    const copyToClipboard = (text, field) => {
        navigator.clipboard.writeText(text);
        setCopyToast(`${field} copied!`);
        setTimeout(() => setCopyToast(''), 2000);
    };

    return (
        <div className="credentials-modal-overlay" onClick={onClose}>
            <div className="credentials-modal" onClick={(e) => e.stopPropagation()}>
                <div className="credentials-modal-header">
                    <h2>Login Credentials</h2>
                    <button className="credentials-close-btn" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="credentials-modal-body">
                    {/* Login */}
                    <div className="credential-row">
                        <label>Login:</label>
                        <div className="credential-value-group">
                            <span className="credential-value">{credentials?.login || '1512264795'}</span>
                            <button
                                className="copy-btn"
                                onClick={() => copyToClipboard(credentials?.login || '1512264795', 'Login')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>

                    {/* Master Password */}
                    <div className="credential-row">
                        <label>
                            Master password:
                            <Info size={14} className="info-icon-inline" />
                        </label>
                        <div className="credential-value-group">
                            <span className="credential-value">
                                {showMasterPassword ? (credentials?.masterPassword || 'rxu82j$5l$J?') : '••••••••••'}
                            </span>
                            <button
                                className="toggle-visibility-btn"
                                onClick={() => setShowMasterPassword(!showMasterPassword)}
                            >
                                {showMasterPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                            <button
                                className="copy-btn"
                                onClick={() => copyToClipboard(credentials?.masterPassword || 'rxu82j$5l$J?', 'Master password')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                            <button className="change-btn">
                                Change
                            </button>
                        </div>
                    </div>

                    {/* Read-only Password */}
                    <div className="credential-row">
                        <label>
                            Read-only password:
                            <Info size={14} className="info-icon-inline" />
                        </label>
                        <div className="credential-value-group">
                            <span className="credential-value">
                                {showReadOnlyPassword ? (credentials?.readOnlyPassword || 'S?33!**?Nhv') : 'S?33!**?Nhv'}
                            </span>
                            <button
                                className="copy-btn"
                                onClick={() => copyToClipboard(credentials?.readOnlyPassword || 'S?33!**?Nhv', 'Read-only password')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                            <button className="change-btn">
                                Change
                            </button>
                        </div>
                    </div>

                    {/* Server */}
                    <div className="credential-row">
                        <label>Server:</label>
                        <div className="credential-value-group">
                            <span className="credential-value">{credentials?.server || 'YoPips-Demo'}</span>
                            <button
                                className="copy-btn"
                                onClick={() => copyToClipboard(credentials?.server || 'YoPips-Demo', 'Server')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>

                    {/* Platform Section */}
                    <div className="platform-section">
                        <h3>Platform: MT5</h3>

                        <div className="platform-category">
                            <h4>Mobile</h4>
                            <div className="platform-links">
                                <a
                                    href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en&referrer=ref_id%3d5128010361279817282%26server%3dFTMO-Demo%252cFTMO-Demo2%252cFTMO-Server%252cFTMO-Server2%252cFTMO-Server3%252cFTMO-Server4%252cFTMO-Server5"
                                    className="platform-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Smartphone size={20} />
                                    <span>Download for Android</span>
                                </a>
                                <a
                                    href="https://apps.apple.com/us/app/metatrader-5/id413251709"
                                    className="platform-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Smartphone size={20} />
                                    <span>Download for iOS</span>
                                </a>
                            </div>
                        </div>

                        <div className="platform-category">
                            <h4>Desktop</h4>
                            <div className="platform-links">
                                <a
                                    href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe"
                                    className="platform-link"
                                    download
                                >
                                    <Monitor size={20} />
                                    <span>Download for Windows</span>
                                </a>
                                <a
                                    href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.zip"
                                    className="platform-link"
                                    download
                                >
                                    <Monitor size={20} />
                                    <span>Download for MacOS</span>
                                </a>
                            </div>
                        </div>

                        <div className="platform-category">
                            <h4>Web</h4>
                            <div className="platform-links">
                                <a href="#" className="platform-link">
                                    <Globe size={20} />
                                    <span>Open Web</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Info Notice */}
                    <div className="credentials-info-notice">
                        <Info size={16} />
                        <span>We recommend using the desktop platform as the webtrader does not store history.</span>
                    </div>

                    {/* Copy Toast */}
                    {copyToast && (
                        <div className="copy-toast">
                            {copyToast}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CredentialsModal;
