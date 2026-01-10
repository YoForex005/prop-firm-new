import React from 'react';
import './Login.css';
import { Check, Moon, Sun, MessageSquare } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    // ...
    const [darkMode, setDarkMode] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
    };

    const handleSignIn = () => {
        // Normal mock login
        navigate('/');
    };

    const handleGoogleLogin = () => {
        const hasLoggedIn = localStorage.getItem('has_google_login');
        if (hasLoggedIn) {
            navigate('/');
        } else {
            navigate('/google-auth');
        }
    };

    return (
        <div className={`login-page ${darkMode ? 'dark' : ''}`}>
            {/* Top Right Theme Toggle */}
            <div className="login-theme-toggle" onClick={toggleTheme}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </div>

            <div className="login-container">
                <div className="login-logo">
                    <div className="logo-icon-placeholder">F</div> {/* Placeholder for actual logo */}
                    <span>YoPips</span>
                    <span className="trademark">®</span>
                </div>

                <h1>Sign in to your account</h1>

                <div className="login-form">
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-row">
                        <label className="checkbox-label">
                            <input type="checkbox" />
                            <span>Remember Me</span>
                        </label>
                        <a href="#" className="forgot-password">Forgot Password?</a>
                    </div>

                    {/* Fake Cloudflare Widget */}
                    <div className="cloudflare-widget">
                        <div className="cf-check">
                            <Check size={20} color="#10b981" />
                        </div>
                        <span className="cf-text">Success!</span>
                        <div className="cf-brand">
                            <span className="cf-tiny">CLOUDFLARE</span>
                            <div className="cf-links">
                                <span>Privacy</span> • <span>Terms</span>
                            </div>
                        </div>
                    </div>

                    <button className="btn-signin" onClick={handleSignIn}>Sign in</button>

                    <div className="divider">OR</div>

                    <button className="btn-google" onClick={handleGoogleLogin}>
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="18" height="18" />
                        Continue with Google
                    </button>

                    <div className="signup-link">
                        Ready to trade? <Link to="/signup">Create your account</Link>
                    </div>
                </div>
            </div>

            {/* Help Widget Button */}
            <button className="help-widget-btn">
                <span className="help-text">Hi. Need any help?</span>
                <div className="help-icon-circle">
                    <MessageSquare size={24} color="white" fill="white" />
                </div>
            </button>
        </div>
    );
}

export default Login;
