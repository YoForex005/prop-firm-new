import { useState } from 'react';
import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import NotificationSidebar from './NotificationSidebar';

function Header() {
    const [showNotifications, setShowNotifications] = useState(false);

    return (
        <div className="header-container">
            <div className="header-breadcrumbs">
                <Link to="/" className="breadcrumb-link">Trader</Link>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">Accounts overview</span>
            </div>

            <div className="header-user-actions">
                <div className="user-info">
                    <span className="user-name">Arijeet</span>
                    <div className="user-avatar">AN</div>
                </div>
                <div
                    className="notification-bell"
                    onClick={() => setShowNotifications(true)}
                    style={{ cursor: 'pointer' }}
                >
                    <Bell size={20} />
                    <span className="notification-badge">12</span>
                </div>
            </div>

            <NotificationSidebar
                isOpen={showNotifications}
                onClose={() => setShowNotifications(false)}
            />
        </div>
    );
}

export default Header;
