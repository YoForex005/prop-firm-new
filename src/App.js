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
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <div className="top-banner">
            Holiday Special: Use code FP & unwrap 20% OFF all FundingPips evaluations 🎁 Note: $100k accounts on 1-Step and 2-Step are not included
          </div>
          <div className="content-body">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/new-challenge" element={<NewChallenge />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
