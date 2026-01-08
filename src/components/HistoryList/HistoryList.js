import React from 'react';
import { Calendar } from 'lucide-react';
import './HistoryList.css';

function HistoryList() {
    // In a real app, this would be fetched from an API
    // For now, we'll try to get it from a 'challengeHistory' key in localStorage
    const [historyData, setHistoryData] = React.useState([]);

    React.useEffect(() => {
        const stored = localStorage.getItem('challengeHistory');
        if (stored) {
            try {
                setHistoryData(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse history", e);
            }
        }
    }, []);

    if (historyData.length === 0) return null; // Hide history section if empty


    return (
        <div className="history-section">
            <div className="section-header">
                <h2><Calendar size={18} style={{ color: '#1e293b' }} /> History</h2>
                <div className="visible-toggle">
                    <span>Show only visible</span>
                    <input type="checkbox" />
                </div>
            </div>

            <div className="card history-card">
                <div className="history-tabs">
                    <div className="history-tab">Free trial</div>
                </div>

                <div className="history-list">
                    {historyData.map((item, index) => (
                        <div key={index} className="history-item">
                            <div className="history-status">
                                <span className={`status-label ${item.status === 'not-passed' ? 'status-not-passed' : 'status-ignored'}`}>
                                    {item.statusText}
                                </span>
                            </div>
                            <div className="history-login">
                                Login: <span>{item.login}</span>
                            </div>
                            <div className="history-visibility">
                                <span>Visible</span>
                                <div className="pink-switch">
                                    <div className="switch-dot"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryList;

