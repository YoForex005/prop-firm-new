import React from 'react';
import { X, AlertTriangle, Key, Newspaper } from 'lucide-react';
import './NotificationSidebar.css';

const notifications = [
    {
        id: 1,
        type: 'important',
        icon: <AlertTriangle size={20} className="notif-icon-warning" />,
        title: 'Important updates',
        text: "Don't miss these important Trading Updates!",
        time: '3 hours ago',
        unread: true,
        image: 'https://placehold.co/120x60/1a1a1a/FFF?text=IMPORTANT\\nUPDATES', // Placeholder matching dark bg
        action: 'Check it out',
        link: '#'
    },
    {
        id: 2,
        type: 'info',
        icon: <Key size={20} className="notif-icon-key" />,
        title: 'Free Trial',
        text: "Thank you for taking the Free Trial. Your trading account login credentials can be found directly in your Client Area or Account Metrix. Trade safe!",
        time: 'yesterday',
        unread: false,
        action: 'Credentials',
        link: '#'
    },
    {
        id: 3,
        type: 'news',
        icon: <Newspaper size={20} className="notif-icon-news" />,
        title: 'New Year Flash Sale 20% OFF!',
        text: "Kickstart the New Year and enjoy a special discount on all Yo Pips Challenges. Offer valid until 2 January, 12:00 CET.",
        time: 'last week',
        unread: true,
        image: 'https://placehold.co/100x100/000033/00ffff?text=20%', // Placeholder blue glow
        action: 'Claim Discount',
        link: '#'
    }
];

function NotificationSidebar({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <>
            <div className="notification-overlay" onClick={onClose}></div>
            <div className={`notification-sidebar ${isOpen ? 'open' : ''}`}>
                <div className="notif-header">
                    <h3>Notifications</h3>
                    <button className="mark-read-btn">Mark all as read</button>
                    {/* Optional close button if needed, overlay serves well though */}
                </div>

                <div className="notif-list">
                    {notifications.map(notif => (
                        <div key={notif.id} className="notif-card">
                            <div className="notif-card-header">
                                <div className="notif-icon-wrapper">
                                    {notif.icon}
                                </div>
                                <div className="notif-content">
                                    <div className="notif-title-row">
                                        <span className={`notif-title ${notif.type}`}>{notif.title}</span>
                                        {notif.unread && <span className="unread-dot"></span>}
                                    </div>
                                    <p className="notif-text">{notif.text}</p>
                                    <span className="notif-time">{notif.time}</span>
                                </div>
                            </div>

                            {notif.image && (
                                <div className="notif-image-container">
                                    <img src={notif.image} alt="Notification" className="notif-img" />
                                </div>
                            )}

                            {notif.action && (
                                <button className="notif-action-btn">{notif.action}</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default NotificationSidebar;
