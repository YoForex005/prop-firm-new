import React from 'react';
import { X, Send, Mail } from 'lucide-react';

const ChatBot = ({ isOpen, toggleChat }) => {
    return (
        <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end max-md:bottom-5 max-md:right-5 max-sm:right-4 max-sm:left-4 max-sm:bottom-4 max-sm:items-stretch h-auto max-sm:w-auto">
            {/* Chat Window */}
            {isOpen && (
                <div className="w-[320px] max-sm:w-auto bg-white dark:bg-[#1f1f1f] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden mb-4 animate-[slideUp_0.3s_ease-out] relative pb-6 max-h-[80vh] flex flex-col">
                    <button className="absolute top-3 right-3 bg-transparent border-none text-[#999] hover:text-[#666] cursor-pointer p-1 z-10 transition-colors" onClick={toggleChat}>
                        <X size={20} />
                    </button>

                    <div className="py-8 pb-4 flex justify-center items-center shrink-0">
                        <div className="illustration-wrapper">
                            {/* Simple SVG illustration mimicking the paper plane/mailbox */}
                            <svg width="120" height="60" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40 50 Q 80 10, 100 50 T 160 50" stroke="#ccc" strokeDasharray="4 4" fill="none" />
                                <path d="M160 30 L 190 30 L 190 70 L 160 70 Z" stroke="#666" strokeWidth="2" />
                                <rect x="165" y="40" width="20" height="20" rx="2" stroke="#666" strokeWidth="2" />
                                <path d="M175 70 L 175 90" stroke="#666" strokeWidth="2" />
                                {/* Plane */}
                                <path d="M40 50 L 60 40 L 50 60 Z" fill="none" stroke="#666" strokeWidth="2" transform="rotate(-20 50 50)" />
                            </svg>
                        </div>
                    </div>

                    <div className="px-6 flex-1 overflow-y-auto">
                        <h3 className="text-base font-bold text-center text-[#1a1a1a] dark:text-white mb-6 m-0">Welcome to the Yo Pips Live Chat</h3>

                        <div className="mb-4">
                            <label className="block text-xs text-[#666] dark:text-[#9ca3af] mb-1.5 font-medium">Language</label>
                            <div className="relative">
                                <select defaultValue="English" className="w-full py-2.5 px-3 border border-[#e0e0e0] dark:border-[#444] rounded-lg text-sm text-[#1a1a1a] dark:text-white bg-gray-50 dark:bg-[#262626] outline-none focus:border-[#007bff] dark:focus:border-[#3b82f6] cursor-pointer appearance-none transition-colors hover:border-[#ccc] dark:hover:border-[#555]">
                                    <option value="English" className="bg-white dark:bg-[#1f1f1f]">English</option>
                                    <option value="Spanish" className="bg-white dark:bg-[#1f1f1f]">Spanish</option>
                                    <option value="French" className="bg-white dark:bg-[#1f1f1f]">French</option>
                                    <option value="German" className="bg-white dark:bg-[#1f1f1f]">German</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-xs text-[#666] dark:text-[#9ca3af] mb-1.5 font-medium">Name</label>
                            <input type="text" className="w-full py-2.5 px-3 border border-[#e0e0e0] dark:border-[#444] rounded-lg text-sm text-[#1a1a1a] dark:text-white bg-gray-50 dark:bg-[#262626] outline-none focus:border-[#007bff] dark:focus:border-[#3b82f6] transition-colors focus:bg-white dark:focus:bg-[#1a1a1a]" placeholder="Enter your name" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-xs text-[#666] dark:text-[#9ca3af] mb-1.5 font-medium">Email</label>
                            <input type="email" className="w-full py-2.5 px-3 border border-[#e0e0e0] dark:border-[#444] rounded-lg text-sm text-[#1a1a1a] dark:text-white bg-gray-50 dark:bg-[#262626] outline-none focus:border-[#007bff] dark:focus:border-[#3b82f6] transition-colors focus:bg-white dark:focus:bg-[#1a1a1a]" placeholder="Enter your email" />
                        </div>

                        <div className="flex justify-center mt-8 mb-4">
                            <button className="w-14 h-14 rounded-full bg-[#007bff] hover:bg-[#0069d9] border-none text-white flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(0,123,255,0.3)] hover:scale-105 transition-all">
                                <Send size={24} fill="white" className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* We can keep the bubble toggle if desired, or remove it if Sidebar is the only way */}
            <button
                className={`w-14 h-14 rounded-full bg-[#007bff] text-white border-none flex items-center justify-center cursor-pointer shadow-[0_4px_12px_rgba(0,123,255,0.3)] hover:scale-105 transition-all max-sm:self-end ${isOpen ? 'rotate-90 bg-red-500 shadow-[0_4px_12px_rgba(239,68,68,0.3)]' : ''}`}
                onClick={toggleChat}
            >
                {isOpen ? <X size={28} /> : <Mail size={28} />}
            </button>
        </div>
    );
};

export default ChatBot;
