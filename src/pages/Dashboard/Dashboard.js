import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Header from '../../components/Header/Header';
import ActiveAccountCard from '../../components/ActiveAccountCard/ActiveAccountCard';
import HistoryList from '../../components/HistoryList/HistoryList';
import PromoCard from '../../components/PromoCard/PromoCard';
import Footer from '../../components/Footer/Footer';

function Dashboard() {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('activeChallenge');
        if (stored) {
            try {
                setAccount(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse active challenge", e);
            }
        }
    }, []);


    return (
        <div className="dashboard-container">
            <Header />

            <main className="dashboard-main-content">
                <div className="centered-content">
                    <ActiveAccountCard account={account} />
                    <HistoryList />
                    <PromoCard />
                    <Footer />
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
