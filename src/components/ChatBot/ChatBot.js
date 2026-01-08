import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Paperclip, MoreVertical } from 'lucide-react';
import './ChatBot.css';

const PREDEFINED_ANSWERS = {
    '1-Step Model': "Our 1-Step Model is designed for efficiency. You only need to pass a single phase to get funded. The profit target is 10%, and once achieved, you can move directly to the funded stage.",
    '2-Step Model': "The 2-Step Model is our classic evaluation. It consists of two phases: Phase 1 (8% profit target) and Phase 2 (5% profit target). It offers lower drawdown limits compared to the 1-Step.",
    'YoPips Pro': "YoPips Pro is for experienced traders looking for higher scalability. It offers custom drawdown rules and faster scaling plans for consistent performers.",
    'YoPips Zero': "YoPips Zero is our zero-risk entry program. It allows you to trade with smaller capital and scale up without the pressure of strict evaluation phases.",
    'Payout System': "We process payouts every Tuesday. You can request a payout once every 5 days. There is no minimum profit day requirement for the first payout.",
    'Profit Split': "Traders start with an 80% profit split. This can increase up to 90% via our scaling plan if you adhere to risk management rules consistently.",
    'Scaling Plan': "Consistent traders are rewarded! If you are profitable for 3  out of 4 months with at least 10% total profit, we increase your account size by 30% and boost your profit split.",
    'News Trading': "News trading is allowed on Swing accounts. On regular accounts, you cannot open/close trades 2 minutes before or after high-impact news events.",
    'Weekend Holding': "Holding trades over the weekend is fully allowed on Swing accounts. For regular evaluation accounts, all positions must be closed before the market closes on Friday."
};

const MENU_OPTIONS = [
    { label: '1-Step Model', icon: '⭐' },
    { label: '2-Step Model', icon: '✨' },
    { label: 'YoPips Pro', icon: '🐢' },
    { label: 'YoPips Zero', icon: '🟡' },
    { label: 'Payout System', icon: '💰' },
    { label: 'Profit Split', icon: '📈' },
    { label: 'Scaling Plan', icon: '🚀' },
    { label: 'News Trading', icon: '📰' },
    { label: 'Weekend Holding', icon: '🌙' }
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: 'Which YoPips model are you seeking information for?'
        }
    ]);
    const [currentOptions, setCurrentOptions] = useState(MENU_OPTIONS);
    const [isTyping, setIsTyping] = useState(false);

    // Auto-scroll to bottom
    const messagesEndRef = useRef(null);
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping, currentOptions]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        // 1. Add User Message
        const userMsg = { type: 'user', text: option.label || option };
        setMessages(prev => [...prev, userMsg]);
        setCurrentOptions([]); // Hide options while "thinking"

        // 2. Simulate Bot Thinking
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);

            // 3. Determine Response
            if (PREDEFINED_ANSWERS[option.label]) {
                // It was a model selection
                const answerMsg = { type: 'bot', text: PREDEFINED_ANSWERS[option.label] };
                setMessages(prev => [...prev, answerMsg]);

                // 4. Ask follow-up
                setTimeout(() => {
                    const followUpMsg = { type: 'bot', text: "Do you want to know more?" };
                    setMessages(prev => [...prev, followUpMsg]);
                    setCurrentOptions([
                        { label: 'Yes, show options', icon: '👍' },
                        { label: 'No, I\'m good', icon: '👎' }
                    ]);
                }, 800);

            } else if (option.label === 'Yes, show options') {
                // Show Main Menu again
                const answerMsg = { type: 'bot', text: "Sure! What else would you like to know about?" };
                setMessages(prev => [...prev, answerMsg]);
                setCurrentOptions(MENU_OPTIONS);

            } else if (option.label === 'No, I\'m good') {
                // End conversation
                const answerMsg = { type: 'bot', text: "Great! If you have more questions, feel free to ask. Happy trading! 🚀" };
                setMessages(prev => [...prev, answerMsg]);
                setCurrentOptions([]);
            }
        }, 1200);
    };

    return (
        <div className="chatbot-wrapper">
            {/* Chat Window */}
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chat-header">
                        <div className="header-left">
                            <div className="header-logo"><span className="logo-f">FP</span></div>
                            <h3>Contact us</h3>
                        </div>
                        <button className="header-menu"><MoreVertical size={20} /></button>
                    </div>

                    <div className="chat-body">
                        <div className="system-msg">This chat is recorded using a cloud service.</div>
                        <div className="chat-timestamp">2:56 PM</div>

                        {messages.map((msg, idx) => (
                            <div key={idx} className={`message-group ${msg.type}`}>
                                {msg.type === 'bot' && (
                                    <>
                                        <span className="sender-name">YoPips</span>
                                        <div className="message-row">
                                            <div className="bot-avatar"><span className="logo-f-small">FP</span></div>
                                            <div className="message-bubble bot">{msg.text}</div>
                                        </div>
                                    </>
                                )}
                                {msg.type === 'user' && (
                                    <div className="message-row user">
                                        <div className="message-bubble user">{msg.text}</div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="message-group bot">
                                <div className="message-row">
                                    <div className="bot-avatar"><span className="logo-f-small">FP</span></div>
                                    <div className="message-bubble bot typing">
                                        <span>.</span><span>.</span><span>.</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentOptions.length > 0 && (
                            <div className="quick-actions">
                                {currentOptions.map((opt, idx) => (
                                    <button
                                        key={idx}
                                        className="action-chip"
                                        onClick={() => handleOptionClick(opt)}
                                    >
                                        {opt.icon && <span className="chip-icon">{opt.icon}</span>}
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-footer">
                        <button className="btn-attach"><Paperclip size={20} /></button>
                        <div className="input-wrapper">
                            <input type="text" placeholder="Type a message" />
                        </div>
                    </div>
                </div>
            )}

            <button className={`chatbot-toggle ${isOpen ? 'open' : ''}`} onClick={toggleChat}>
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>
        </div>
    );
};

export default ChatBot;
