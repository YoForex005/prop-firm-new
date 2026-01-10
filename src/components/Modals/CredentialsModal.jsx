import React, { useState } from 'react';
import { X, Copy, Eye, EyeOff, Info, Smartphone, Monitor, Globe } from 'lucide-react';

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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] animate-[fadeIn_0.2s_ease-in]" onClick={onClose}>
            <div className="bg-white dark:bg-[#1f2937] rounded-xl w-[90%] max-w-[650px] max-h-[90vh] overflow-y-auto shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-[slideUp_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center px-8 py-6 border-b border-[#e5e7eb] dark:border-[#374151]">
                    <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-[#f3f4f6] m-0">Login Credentials</h2>
                    <button className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer p-1 flex items-center justify-center hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8">
                    {/* Login */}
                    <div className="mb-6">
                        <label className="flex items-center gap-1.5 text-sm font-medium text-[#666] dark:text-[#9ca3af] mb-2">Login:</label>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex-1 min-w-[200px] text-base font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{credentials?.login || '1512264795'}</span>
                            <button
                                className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors"
                                onClick={() => copyToClipboard(credentials?.login || '1512264795', 'Login')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>

                    {/* Master Password */}
                    <div className="mb-6">
                        <label className="flex items-center gap-1.5 text-sm font-medium text-[#666] dark:text-[#9ca3af] mb-2">
                            Master password:
                            <Info size={14} className="text-[#999] dark:text-[#6b7280]" />
                        </label>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex-1 min-w-[200px] text-base font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">
                                {showMasterPassword ? (credentials?.masterPassword || 'rxu82j$5l$J?') : '••••••••••'}
                            </span>
                            <button
                                className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] p-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors"
                                onClick={() => setShowMasterPassword(!showMasterPassword)}
                            >
                                {showMasterPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                            <button
                                className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors"
                                onClick={() => copyToClipboard(credentials?.masterPassword || 'rxu82j$5l$J?', 'Master password')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                            <button className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors">
                                Change
                            </button>
                        </div>
                    </div>

                    {/* Read-only Password */}
                    <div className="mb-6">
                        <label className="flex items-center gap-1.5 text-sm font-medium text-[#666] dark:text-[#9ca3af] mb-2">
                            Read-only password:
                            <Info size={14} className="text-[#999] dark:text-[#6b7280]" />
                        </label>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex-1 min-w-[200px] text-base font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">
                                {showReadOnlyPassword ? (credentials?.readOnlyPassword || 'S?33!**?Nhv') : 'S?33!**?Nhv'}
                            </span>
                            <button
                                className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors"
                                onClick={() => copyToClipboard(credentials?.readOnlyPassword || 'S?33!**?Nhv', 'Read-only password')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                            <button className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors">
                                Change
                            </button>
                        </div>
                    </div>

                    {/* Server */}
                    <div className="mb-6">
                        <label className="flex items-center gap-1.5 text-sm font-medium text-[#666] dark:text-[#9ca3af] mb-2">Server:</label>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex-1 min-w-[200px] text-base font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{credentials?.server || 'YoPips-Demo'}</span>
                            <button
                                className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors"
                                onClick={() => copyToClipboard(credentials?.server || 'YoPips-Demo', 'Server')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>

                    {/* Platform Section */}
                    <div className="mt-8 pt-6 border-t border-[#e5e7eb] dark:border-[#374151]">
                        <h3 className="text-base font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] m-0 mb-5">Platform: MT5</h3>

                        <div className="mb-5">
                            <h4 className="text-sm font-semibold text-[#666] dark:text-[#9ca3af] m-0 mb-3">Mobile</h4>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en&referrer=ref_id%3d5128010361279817282%26server%3dFTMO-Demo%252cFTMO-Demo2%252cFTMO-Server%252cFTMO-Server2%252cFTMO-Server3%252cFTMO-Server4%252cFTMO-Server5"
                                    className="flex items-center gap-2.5 text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm py-2 hover:text-[#0072ff] transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Smartphone size={20} className="text-[#666] dark:text-[#9ca3af]" />
                                    <span>Download for Android</span>
                                </a>
                                <a
                                    href="https://apps.apple.com/us/app/metatrader-5/id413251709"
                                    className="flex items-center gap-2.5 text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm py-2 hover:text-[#0072ff] transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Smartphone size={20} className="text-[#666] dark:text-[#9ca3af]" />
                                    <span>Download for iOS</span>
                                </a>
                            </div>
                        </div>

                        <div className="mb-5">
                            <h4 className="text-sm font-semibold text-[#666] dark:text-[#9ca3af] m-0 mb-3">Desktop</h4>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe"
                                    className="flex items-center gap-2.5 text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm py-2 hover:text-[#0072ff] transition-colors"
                                    download
                                >
                                    <Monitor size={20} className="text-[#666] dark:text-[#9ca3af]" />
                                    <span>Download for Windows</span>
                                </a>
                                <a
                                    href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.zip"
                                    className="flex items-center gap-2.5 text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm py-2 hover:text-[#0072ff] transition-colors"
                                    download
                                >
                                    <Monitor size={20} className="text-[#666] dark:text-[#9ca3af]" />
                                    <span>Download for MacOS</span>
                                </a>
                            </div>
                        </div>

                        <div className="mb-0">
                            <h4 className="text-sm font-semibold text-[#666] dark:text-[#9ca3af] m-0 mb-3">Web</h4>
                            <div className="flex flex-col gap-2">
                                <a href="#" className="flex items-center gap-2.5 text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm py-2 hover:text-[#0072ff] transition-colors">
                                    <Globe size={20} className="text-[#666] dark:text-[#9ca3af]" />
                                    <span>Open Web</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Info Notice */}
                    <div className="bg-[#e0f7fa] dark:bg-[#064e3b]/20 border border-[#b2ebf2] dark:border-[#065f46] rounded-md p-3 px-4 flex items-start gap-3 mt-6">
                        <Info size={16} className="text-[#00838f] dark:text-[#2dd4bf] shrink-0 mt-0.5" />
                        <span className="text-[13px] text-[#00838f] dark:text-[#2dd4bf] leading-[1.5]">We recommend using the desktop platform as the webtrader does not store history.</span>
                    </div>

                    {/* Copy Toast */}
                    {copyToast && (
                        <div className="fixed bottom-8 right-8 bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] px-5 py-3 rounded-lg text-sm font-medium shadow-lg z-[10001] animate-[slideInUp_0.3s_ease-out]">
                            {copyToast}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CredentialsModal;
