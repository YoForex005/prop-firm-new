import React from 'react';
import './SignUp.css';
import { Check, Moon, Sun, MessageSquare } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

function SignUp() {
    const [darkMode, setDarkMode] = React.useState(false);
    const navigate = useNavigate();

    // Form states
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [referralCode, setReferralCode] = React.useState('');
    const [termsAccepted, setTermsAccepted] = React.useState(false);
    const [marketingAccepted, setMarketingAccepted] = React.useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.setAttribute('data-theme', !darkMode ? 'dark' : 'light');
    };

    const handleGetFunded = () => {
        // Mock signup - redirect to dashboard
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
        <div className={`signup-page ${darkMode ? 'dark' : ''}`}>
            {/* Top Right Theme Toggle */}
            <div className="signup-theme-toggle" onClick={toggleTheme}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </div>

            <div className="signup-container">
                <div className="signup-logo">
                    <div className="logo-icon-placeholder">F</div>
                    <span>YoPips</span>
                    <span className="trademark">®</span>
                </div>

                <h1>Create your account</h1>

                <div className="signup-form">
                    <div className="form-row-split">
                        <div className="form-group">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

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

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Referral Code <span className="optional">(optional)</span></label>
                        <input
                            type="text"
                            className="form-control"
                            value={referralCode}
                            onChange={(e) => setReferralCode(e.target.value)}
                        />
                    </div>

                    <div className="checkbox-group">
                        <label className="checkbox-label-start">
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                            />
                            <span>
                                I certify that I am 18 years of age or older, agree to the User Agreement, and acknowledge the Privacy policy.
                            </span>
                        </label>
                    </div>

                    <div className="checkbox-group">
                        <label className="checkbox-label-start">
                            <input
                                type="checkbox"
                                checked={marketingAccepted}
                                onChange={(e) => setMarketingAccepted(e.target.checked)}
                            />
                            <span>
                                Keep me in the loop with exclusive offers, trading insights & early access to promotions.
                            </span>
                        </label>
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

                    <button className="btn-get-funded" onClick={handleGetFunded}>Get Funded</button>

                    <div className="divider">OR</div>

                    <button className="btn-google" onClick={handleGoogleLogin}>
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="18" height="18" />
                        Continue with Google
                    </button>

                    <div className="signin-link">
                        Already have an account? <Link to="/login">Sign in</Link>
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

export default SignUp;
