import React, { useState } from 'react';
import { X, Send, Mail, Plane } from 'lucide-react';
import './ChatBot.css';

const ChatBot = ({ isOpen, toggleChat }) => {
    // If not open, return null (controlled by parent in App.js now, 
    // but we can also hide it with CSS class if we want animation. 
    // For now, simple conditional rendering from App.js handles mounting, 
    // but the screenshot implies a floating widget. App.js handles isOpen.

    // Actually, App.js passes isOpen. If !isOpen, we might still want to show the bubble?
    // Wait, the new requirement is "Sidebar click opens popup".
    // Does the bubble still exist?
    // User request: "after clicking on Live Chat option ... show up with this popup"
    // It implies the Sidebar triggers it.
    // I will render the popup if isOpen is true.

    // I'll also check if we need the bubble. 
    // For now I'll keep the bubble toggle as well, using the passed toggleChat.

    return (
        <div className="chatbot-wrapper">
            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window">
                    <button className="chat-close-btn" onClick={toggleChat}>
                        <X size={20} />
                    </button>

                    <div className="chat-header-illustration">
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

                    <div className="chat-content">
                        <h3 className="welcome-text">Welcome to the Yo Pips Live Chat</h3>

                        <div className="form-group">
                            <label>Language</label>
                            <div className="select-wrapper">
                                <select defaultValue="English">
                                    <option value="English">English</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="French">French</option>
                                    <option value="German">German</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" />
                        </div>

                        <div className="chat-actions">
                            <button className="start-chat-btn">
                                <Send size={24} fill="white" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* We can keep the bubble toggle if desired, or remove it if Sidebar is the only way */}
            <button className={`chatbot-toggle ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
                {isOpen ? <X size={28} /> : <Mail size={28} />}
            </button>
        </div>
    );
};

export default ChatBot;
