import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import TopNavbar from './components/TopNavbar/TopNavbar';
import Dashboard from './pages/Dashboard/Dashboard';
import Academy from './pages/Academy/Academy';
import NewChallenge from './pages/NewChallenge/NewChallenge';
import Accounts from './pages/Accounts/Accounts';
import Rewards from './pages/Rewards/Rewards';
import Competitions from './pages/Competitions/Competitions';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Certificates from './pages/Certificates/Certificates';
import Calendar from './pages/Calendar/Calendar';
import Affiliate from './pages/Affiliate/Affiliate';
import Payouts from './pages/Payouts/Payouts';
import RequestReward from './pages/RequestReward/RequestReward';
import Profile from './pages/Profile/Profile';
import Premium from './pages/Premium/Premium';
import YoPipsTraders from './pages/YoPipsTraders/YoPipsTraders';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import GoogleAuthMock from './pages/GoogleAuth/GoogleAuthMock';
import CompetitionDetails from './pages/Competitions/CompetitionDetails';
import Downloads from './pages/Downloads/Downloads';
import AccountMetrix from './pages/AccountMetrix/AccountMetrix';
import ChatBot from './components/ChatBot/ChatBot';
import Support from './pages/Support/Support';
import FreeTrial from './pages/FreeTrial/FreeTrial';
import Billing from './pages/Billing/Billing';

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return true;
        }
        return false;
    });
    const [bannerVisible, setBannerVisible] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setDarkMode(e.matches);

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange);
        } else {
            mediaQuery.addListener(handleChange);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener('change', handleChange);
            } else {
                mediaQuery.removeListener(handleChange);
            }
        };
    }, []);

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/google-auth" element={<GoogleAuthMock />} />
                <Route path="*" element={
                    <>
                        <div className="app-container">
                            <Sidebar darkMode={darkMode} toggleTheme={toggleTheme} />
                            <div className="main-content">
                                {bannerVisible && (
                                    <div className="top-banner-orange">
                                        <div className="banner-content-static">
                                            <span>🎉 Special Deal! $100,000 Yo Pips Challenge for €430 <span className="save-badge">Save €100</span></span>
                                        </div>
                                        <button className="banner-close" onClick={() => setBannerVisible(false)}>✕</button>
                                    </div>
                                )}
                                <div className="content-body">
                                    <Routes>
                                        <Route path="/" element={<Dashboard />} />
                                        <Route path="/academy" element={<Academy />} />
                                        <Route path="/new-challenge" element={<NewChallenge />} />
                                        <Route path="/accounts" element={<Accounts />} />
                                        <Route path="/account-metrix/:id" element={<AccountMetrix />} />
                                        <Route path="/payouts" element={<Payouts />} />
                                        <Route path="/request-reward" element={<RequestReward />} />
                                        <Route path="/rewards" element={<Rewards />} />
                                        <Route path="/competitions" element={<Competitions />} />
                                        <Route path="/competitions/:id" element={<CompetitionDetails />} />
                                        <Route path="/leaderboard" element={<Leaderboard />} />
                                        <Route path="/certificates" element={<Certificates />} />
                                        <Route path="/downloads" element={<Downloads />} />
                                        <Route path="/calendar" element={<Calendar />} />
                                        <Route path="/affiliate" element={<Affiliate />} />
                                        <Route path="/premium" element={<Premium />} />
                                        <Route path="/yopips-traders" element={<YoPipsTraders />} />
                                        <Route path="/profile" element={<Profile />} />
                                        <Route path="/support" element={<Support />} />
                                        <Route path="/support/send-message" element={<Support />} />
                                        <Route path="/billing" element={<Billing />} />
                                        <Route path="/free-trial" element={<FreeTrial />} />
                                    </Routes>
                                    <ChatBot />
                                </div>
                            </div>
                        </div>
                    </>
                } />
            </Routes>
        </Router>
    );
}

export default App;
