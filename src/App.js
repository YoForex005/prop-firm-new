import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
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
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import GoogleAuthMock from './pages/GoogleAuth/GoogleAuthMock';
import CompetitionDetails from './pages/Competitions/CompetitionDetails';
import ChatBot from './components/ChatBot/ChatBot';

// ... other imports ...

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setDarkMode(e.matches);

    // Listen for system changes formatting
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
          <div className="app-container">
            {/* ... */}
            <Sidebar darkMode={darkMode} toggleTheme={toggleTheme} />
            <div className="main-content">
              <div className="top-banner">
                <div className="banner-content">
                  Holiday Special: Use code FP & unwrap 20% OFF all YoPips evaluations 🎁 Note: $100k accounts on 1-Step and 2-Step are not included
                </div>
              </div>
              <div className="content-body">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/new-challenge" element={<NewChallenge />} />
                  <Route path="/accounts" element={<Accounts />} />
                  <Route path="/payouts" element={<Payouts />} />
                  <Route path="/request-reward" element={<RequestReward />} />
                  <Route path="/rewards" element={<Rewards />} />
                  <Route path="/competitions" element={<Competitions />} />
                  <Route path="/competitions/:id" element={<CompetitionDetails />} />
                  <Route path="/leaderboard" element={<Leaderboard />} />
                  <Route path="/certificates" element={<Certificates />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/affiliate" element={<Affiliate />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>

                {/* ChatBot Widget - Global */}
                <ChatBot />
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
