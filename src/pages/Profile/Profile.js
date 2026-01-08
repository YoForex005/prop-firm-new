import React, { useState } from 'react';
import { ShieldCheck, Wallet, CreditCard, Rocket, Beaker } from 'lucide-react';
import './Profile.css';

function Profile() {
    const [activeTab, setActiveTab] = useState('profile');
    const [show2FASetup, setShow2FASetup] = useState(false);
    const [showWalletModal, setShowWalletModal] = useState(false);

    // Password Validation State
    const [passwordData, setPasswordData] = useState({ current: '', new: '', confirm: '' });
    const [passwordErrors, setPasswordErrors] = useState({});

    const handlePasswordChange = (e) => {
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
        if (passwordErrors[e.target.name]) {
            setPasswordErrors({ ...passwordErrors, [e.target.name]: '' });
        }
    };

    const validatePasswordForm = () => {
        const errors = {};
        if (!passwordData.current) errors.current = "Current password is required";
        if (!passwordData.new || passwordData.new.length < 8) errors.new = "New password must be at least 8 characters long";
        if (!passwordData.confirm || passwordData.confirm.length < 8) errors.confirm = "Password confirmation must be at least 8 characters long";

        setPasswordErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Proceed with password change (mock)
            console.log("Password change requested", passwordData);
        }
    };

    return (
        <div className="profile-container">
            {/* Inner Sidebar */}
            <div className="profile-sidebar">
                <h2>Configuration</h2>
                <nav className="profile-nav">
                    <button
                        className={`profile-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Profile
                    </button>
                    <button
                        className={`profile-nav-item ${activeTab === 'verification' ? 'active' : ''}`}
                        onClick={() => setActiveTab('verification')}
                    >
                        Account Verification
                    </button>
                    <button
                        className={`profile-nav-item ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => setActiveTab('security')}
                    >
                        Security
                    </button>
                    <button
                        className={`profile-nav-item ${activeTab === 'bank-accounts' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bank-accounts')}
                    >
                        Bank Accounts
                    </button>
                    <button
                        className={`profile-nav-item ${activeTab === 'credit-cards' ? 'active' : ''}`}
                        onClick={() => setActiveTab('credit-cards')}
                    >
                        Credit Cards
                    </button>
                    <button
                        className={`profile-nav-item ${activeTab === 'crypto-wallets' ? 'active' : ''}`}
                        onClick={() => setActiveTab('crypto-wallets')}
                    >
                        Crypto Wallets
                    </button>
                    <button
                        className={`profile-nav-item ${activeTab === 'payment-history' ? 'active' : ''}`}
                        onClick={() => setActiveTab('payment-history')}
                    >
                        Payment History
                    </button>
                    <button
                        className={`profile-nav-item ${activeTab === 'discord' ? 'active' : ''}`}
                        onClick={() => setActiveTab('discord')}
                    >
                        Discord
                    </button>
                    <button
                        className={`profile-nav-item ${activeTab === 'early-access' ? 'active' : ''}`}
                        onClick={() => setActiveTab('early-access')}
                    >
                        Early Access
                    </button>
                    <button
                        className={`profile-nav-item ${activeTab === 'feature-suggestions' ? 'active' : ''}`}
                        onClick={() => setActiveTab('feature-suggestions')}
                    >
                        Feature Suggestions
                    </button>
                    <button
                        className={`profile-nav-item ${activeTab === 'preferences' ? 'active' : ''}`}
                        onClick={() => setActiveTab('preferences')}
                    >
                        Preferences
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="profile-content">
                {activeTab === 'profile' && (
                    <>
                        <div className="profile-header">
                            <h2>Profile Details</h2>
                        </div>

                        <div className="profile-card">
                            <div className="card-title">Personal Information</div>
                            <span className="card-subtitle">Update your personal details and contact information.</span>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Title</label>
                                    <select>
                                        <option>Select title...</option>
                                        <option>Mr.</option>
                                        <option>Mrs.</option>
                                        <option>Ms.</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Enter first name" />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Enter last name" />
                                </div>
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <input type="date" />
                                </div>
                                <div className="form-group full-width">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="Enter email address" />
                                </div>
                                <div className="form-group full-width">
                                    <label>Preferred Time Zone</label>
                                    <select defaultValue="(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna">
                                        {[
                                            "(UTC-12:00) International Date Line West",
                                            "(UTC-11:00) Coordinated Universal Time-11",
                                            "(UTC-10:00) Hawaii",
                                            "(UTC-09:00) Alaska",
                                            "(UTC-08:00) Baja California",
                                            "(UTC-08:00) Pacific Time (US & Canada)",
                                            "(UTC-07:00) Arizona",
                                            "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
                                            "(UTC-07:00) Mountain Time (US & Canada)",
                                            "(UTC-06:00) Central America",
                                            "(UTC-06:00) Central Time (US & Canada)",
                                            "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
                                            "(UTC-06:00) Saskatchewan",
                                            "(UTC-05:00) Bogota, Lima, Quito, Rio Branco",
                                            "(UTC-05:00) Eastern Time (US & Canada)",
                                            "(UTC-05:00) Indiana (East)",
                                            "(UTC-04:00) Asuncion",
                                            "(UTC-04:00) Atlantic Time (Canada)",
                                            "(UTC-04:00) Caracas",
                                            "(UTC-04:00) Cuiaba",
                                            "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
                                            "(UTC-04:00) Santiago",
                                            "(UTC-03:30) Newfoundland",
                                            "(UTC-03:00) Brasilia",
                                            "(UTC-03:00) Buenos Aires",
                                            "(UTC-03:00) Cayenne, Fortaleza",
                                            "(UTC-03:00) Greenland",
                                            "(UTC-03:00) Montevideo",
                                            "(UTC-03:00) Salvador",
                                            "(UTC-02:00) Coordinated Universal Time-02",
                                            "(UTC-01:00) Azores",
                                            "(UTC-01:00) Cabo Verde Is.",
                                            "(UTC+00:00) Casablanca",
                                            "(UTC+00:00) Coordinated Universal Time",
                                            "(UTC+00:00) Dublin, Edinburgh, Lisbon, London",
                                            "(UTC+00:00) Monrovia, Reykjavik",
                                            "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
                                            "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
                                            "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
                                            "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
                                            "(UTC+01:00) West Central Africa",
                                            "(UTC+01:00) Windhoek",
                                            "(UTC+02:00) Amman",
                                            "(UTC+02:00) Athens, Bucharest",
                                            "(UTC+02:00) Beirut",
                                            "(UTC+02:00) Cairo",
                                            "(UTC+02:00) Damascus",
                                            "(UTC+02:00) E. Europe",
                                            "(UTC+02:00) Harare, Pretoria",
                                            "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
                                            "(UTC+02:00) Istanbul",
                                            "(UTC+02:00) Jerusalem",
                                            "(UTC+02:00) Tripoli",
                                            "(UTC+03:00) Baghdad",
                                            "(UTC+03:00) Kuwait, Riyadh",
                                            "(UTC+03:00) Minsk",
                                            "(UTC+03:00) Moscow, St. Petersburg",
                                            "(UTC+03:00) Nairobi",
                                            "(UTC+03:30) Tehran",
                                            "(UTC+04:00) Abu Dhabi, Muscat",
                                            "(UTC+04:00) Baku",
                                            "(UTC+04:00) Port Louis",
                                            "(UTC+04:00) Tbilisi",
                                            "(UTC+04:00) Yerevan",
                                            "(UTC+04:30) Kabul",
                                            "(UTC+05:00) Ashgabat, Tashkent",
                                            "(UTC+05:00) Ekaterinburg",
                                            "(UTC+05:00) Islamabad, Karachi",
                                            "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
                                            "(UTC+05:30) Sri Jayawardenepura",
                                            "(UTC+05:45) Kathmandu",
                                            "(UTC+06:00) Astana",
                                            "(UTC+06:00) Dhaka",
                                            "(UTC+06:00) Novosibirsk",
                                            "(UTC+06:30) Yangon (Rangoon)",
                                            "(UTC+07:00) Bangkok, Hanoi, Jakarta",
                                            "(UTC+07:00) Krasnoyarsk",
                                            "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
                                            "(UTC+08:00) Irkutsk",
                                            "(UTC+08:00) Kuala Lumpur, Singapore",
                                            "(UTC+08:00) Perth",
                                            "(UTC+08:00) Taipei",
                                            "(UTC+08:00) Ulaanbaatar",
                                            "(UTC+09:00) Osaka, Sapporo, Tokyo",
                                            "(UTC+09:00) Seoul",
                                            "(UTC+09:00) Yakutsk",
                                            "(UTC+09:30) Adelaide",
                                            "(UTC+09:30) Darwin",
                                            "(UTC+10:00) Brisbane",
                                            "(UTC+10:00) Canberra, Melbourne, Sydney",
                                            "(UTC+10:00) Guam, Port Moresby",
                                            "(UTC+10:00) Hobart",
                                            "(UTC+10:00) Vladivostok",
                                            "(UTC+11:00) Magadan, Solomon Is., New Caledonia",
                                            "(UTC+12:00) Auckland, Wellington",
                                            "(UTC+12:00) Coordinated Universal Time+12",
                                            "(UTC+12:00) Fiji",
                                            "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
                                            "(UTC+13:00) Nuku'alofa",
                                            "(UTC+13:00) Samoa"
                                        ].map(tz => (
                                            <option key={tz} value={tz}>{tz}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="profile-card">
                            <div className="card-title">Address Information</div>
                            <span className="card-subtitle">Your residential address for verification and billing purposes.</span>

                            <div className="form-grid">
                                <div className="form-group full-width">
                                    <label>Street Address</label>
                                    <input type="text" placeholder="Enter street address" />
                                </div>
                                <div className="form-group">
                                    <label>City</label>
                                    <input type="text" placeholder="Enter your city" />
                                </div>
                                <div className="form-group">
                                    <label>Postal Code</label>
                                    <input type="text" placeholder="Enter postal code" />
                                </div>
                                <div className="form-group full-width">
                                    <label>Country</label>
                                    <select defaultValue="">
                                        <option value="" disabled>Select country</option>
                                        {[
                                            "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
                                            "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
                                            "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
                                            "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
                                            "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. 'Swaziland')", "Ethiopia",
                                            "Fiji", "Finland", "France",
                                            "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
                                            "Haiti", "Holy See", "Honduras", "Hungary",
                                            "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
                                            "Jamaica", "Japan", "Jordan",
                                            "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
                                            "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
                                            "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
                                            "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
                                            "Oman",
                                            "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
                                            "Qatar",
                                            "Romania", "Russia", "Rwanda",
                                            "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
                                            "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
                                            "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
                                            "Vanuatu", "Venezuela", "Vietnam",
                                            "Yemen",
                                            "Zambia", "Zimbabwe"
                                        ].map(country => (
                                            <option key={country} value={country}>{country}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="save-btn-container">
                                <button className="btn-save">Save Profile Details</button>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'verification' && (
                    <>
                        <div className="profile-header">
                            <h2>Account Verification</h2>
                        </div>

                        <div className="verification-card">
                            <div className="verification-header">
                                <div className="verif-title-row">
                                    <ShieldCheck size={20} className="verif-icon" />
                                    <div>
                                        <div className="verif-title">Identity Verification Available</div>
                                        <div className="verif-subtitle">You can now verify your identity</div>
                                    </div>
                                </div>
                                <span className="badge-not-verified">Not Verified</span>
                            </div>

                            <div className="verification-body">
                                <h3>Start Verification</h3>
                                <p>Verify your identity to unlock additional features</p>
                                <button
                                    className="btn-start-verif"
                                    onClick={() => window.location.href = 'https://forms.kycaid.com/cd5ab9390fe621491a0a4de836fef7ad8bc3'}
                                >
                                    Start Verification
                                </button>
                                <div className="powered-by">✓ Powered by KYCAID</div>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'security' && (
                    <>
                        <div className="profile-header">
                            <h2>Change Password</h2>
                        </div>

                        <div className="profile-card">
                            <div className="form-grid-3">
                                <div className="form-group">
                                    <label>Current Password</label>
                                    <input
                                        type="password"
                                        name="current"
                                        placeholder="Enter your current password"
                                        value={passwordData.current}
                                        onChange={handlePasswordChange}
                                        className={passwordErrors.current ? 'input-error' : ''}
                                    />
                                    {passwordErrors.current && <span className="error-msg">{passwordErrors.current}</span>}
                                </div>
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input
                                        type="password"
                                        name="new"
                                        placeholder="New Password"
                                        value={passwordData.new}
                                        onChange={handlePasswordChange}
                                        className={passwordErrors.new ? 'input-error' : ''}
                                    />
                                    {passwordErrors.new && <span className="error-msg">{passwordErrors.new}</span>}
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirm"
                                        placeholder="Confirm New Password"
                                        value={passwordData.confirm}
                                        onChange={handlePasswordChange}
                                        className={passwordErrors.confirm ? 'input-error' : ''}
                                    />
                                    {passwordErrors.confirm && <span className="error-msg">{passwordErrors.confirm}</span>}
                                </div>
                            </div>
                            <div className="save-btn-container">
                                <button className="btn-save btn-blue" onClick={validatePasswordForm}>Change Password</button>
                            </div>
                        </div>

                        <div className="profile-header" style={{ marginTop: '40px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <h2>Two-Factor Authentication</h2>
                                <span className="badge-disabled">Disabled</span>
                            </div>
                        </div>

                        <div className="verification-body" style={{ background: '#ebf0f9', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            {!show2FASetup ? (
                                <button className="btn-save btn-blue" onClick={() => setShow2FASetup(true)}>Enable 2FA</button>
                            ) : (
                                <div className="setup-2fa-container" style={{ width: '100%', maxWidth: '500px' }}>
                                    <h3 style={{ marginBottom: '8px', color: 'var(--text-color)', fontSize: '16px', textAlign: 'left', width: '100%' }}>Follow these steps to enable 2FA</h3>
                                    <p style={{ marginBottom: '24px', color: 'var(--gray-text)', fontSize: '13px', textAlign: 'left', width: '100%' }}>
                                        Please scan the below QR code using an OTP compatible app (such as Google Authenticator or Authy)
                                    </p>

                                    {/* QR Code Placeholder */}
                                    <div style={{ background: 'white', padding: '12px', borderRadius: '8px', display: 'inline-block', marginBottom: '24px' }}>
                                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example2FASecret" alt="QR Code" style={{ width: '150px', height: '150px' }} />
                                    </div>

                                    <div style={{ margin: '0 0 24px 0', color: 'var(--gray-text)', fontSize: '13px' }}>OR</div>

                                    <div style={{ marginBottom: '24px' }}>
                                        <p style={{ marginBottom: '8px', color: 'var(--text-color)', fontSize: '14px', textAlign: 'center' }}>
                                            Manually enter this code into your authenticator app:
                                        </p>
                                        <div className="manual-code-box">
                                            <span>4UFHPSWCMRHKSF3TPJFRGJGEATBKZJLM</span>
                                            <button className="btn-copy">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-group" style={{ marginBottom: '16px' }}>
                                        <input type="password" placeholder="Enter your password" style={{ width: '100%' }} />
                                        <div style={{ textAlign: 'right', marginTop: '4px' }}>
                                            <a href="#" style={{ fontSize: '12px', color: '#2563eb', textDecoration: 'none' }}>Forgot Password?</a>
                                        </div>
                                    </div>

                                    {/* OTP Inputs */}
                                    <div className="otp-inputs-container">
                                        <div className="otp-group">
                                            <input type="text" maxLength="1" />
                                            <input type="text" maxLength="1" />
                                            <input type="text" maxLength="1" />
                                        </div>
                                        <span className="otp-dash">-</span>
                                        <div className="otp-group">
                                            <input type="text" maxLength="1" />
                                            <input type="text" maxLength="1" />
                                            <input type="text" maxLength="1" />
                                        </div>
                                    </div>

                                    <button className="btn-save btn-blue" style={{ width: '100%', marginTop: '24px', padding: '12px', fontSize: '14px' }}>
                                        Activate 2FA
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {activeTab === 'bank-accounts' && (
                    <>
                        <div className="profile-header">
                            <h2>Bank Accounts</h2>
                        </div>

                        <div className="empty-state-dashed">
                            <div className="empty-state-content">
                                <div className="empty-icon-wrapper">
                                    <Wallet size={32} strokeWidth={1.5} />
                                </div>
                                <h3>Wire Transfers Not Available</h3>
                                <p>You're not currently eligible for wire transfers. Please contact support if you believe this is an error.</p>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'credit-cards' && (
                    <>
                        <div className="profile-header">
                            <h2>Credit Cards</h2>
                        </div>

                        <div className="empty-state-dashed">
                            <div className="empty-state-content">
                                <div className="empty-icon-wrapper">
                                    <CreditCard size={32} strokeWidth={1.5} />
                                </div>
                                <h3>No Credit Cards</h3>
                                <p>Your credit cards will appear here after you complete a payment.</p>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'crypto-wallets' && (
                    <>
                        <div className="profile-header">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                <h2>Crypto Wallets</h2>
                                <button
                                    className="btn-save btn-blue"
                                    style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px' }}
                                    onClick={() => setShowWalletModal(true)}
                                >
                                    + Add Wallet
                                </button>
                            </div>
                        </div>

                        <div className="empty-state-dashed">
                            <div className="empty-state-content">
                                <div className="empty-icon-wrapper">
                                    <Wallet size={32} strokeWidth={1.5} />
                                </div>
                                <h3>No Crypto Wallets</h3>
                                <p>Add your first crypto wallet to start receiving payouts via cryptocurrency. You can add up to 5 wallets.</p>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'payment-history' && (
                    <>
                        <div className="profile-header">
                            <h2>Payment History</h2>
                        </div>

                        <div className="empty-state-plain">
                            <div className="empty-state-content">
                                <div className="empty-icon-wrapper">
                                    <Rocket size={32} strokeWidth={1.5} />
                                </div>
                                <h3>No payment history</h3>
                                <p>Purchase your first challenge to get started</p>
                                <button className="btn-save btn-blue" style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                    <Rocket size={16} /> Buy Challenge
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'discord' && (
                    <>
                        <div className="profile-header">
                            <h2>Connect to Discord</h2>
                        </div>

                        <div className="verification-card" style={{ padding: '32px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                    <div style={{
                                        width: '48px', height: '48px', background: '#5865F2', borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
                                    }}>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097-1.554-.233-3.111-.233-4.634 0-.153-.352-.37-.785-.548-1.097-1.455.337-2.857.77-4.126 1.297C3.017 8.528 1.95 13.045 2.148 17.513c2.043 1.509 4.025 2.427 5.955 3.01l1.01-1.391a10.9 10.9 0 0 1-2.924-1.391c.243-.178.473-.37.697-.565 4.316 2.019 8.99 2.019 13.243 0 .224.204.454.396.706.565-.96.556-1.95 1.03-2.946 1.391l1.01 1.401c1.94-.593 3.922-1.501 5.964-3.01 1.047-5.917-1.463-10.435-4.821-11.966ZM8.56 14.516c-1.155 0-2.108-1.066-2.108-2.368 0-1.303.933-2.369 2.108-2.369 1.185 0 2.128 1.076 2.108 2.369 0 1.302-.923 2.368-2.108 2.368Zm6.88 0c-1.155 0-2.108-1.066-2.108-2.368 0-1.303.933-2.369 2.108-2.369 1.185 0 2.128 1.076 2.108 2.369 0 1.302-.923 2.368-2.108 2.368Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-color)', marginBottom: '4px' }}>Discord Not Connected</div>
                                        <div style={{ fontSize: '13px', color: 'var(--gray-text)' }}>Connect your Discord account to receive trade alerts and community updates</div>
                                    </div>
                                </div>
                                <button
                                    className="btn-save btn-blue"
                                    style={{ background: '#2563eb' }}
                                    onClick={() => window.location.href = 'https://discord.com/oauth2/authorize?client_id=1166619075699556443&redirect_uri=https%3A%2F%2Fbackend.YoPips.com%2Fcallbacks%2Fdiscord%2Fcallback&response_type=code&scope=identify%20email'}
                                >
                                    Connect Discord
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'early-access' && (
                    <>
                        <div className="profile-header">
                            <h2>Early Access</h2>
                        </div>

                        <div className="empty-state-plain">
                            <div className="empty-state-content">
                                <div className="empty-icon-wrapper">
                                    <Beaker size={32} strokeWidth={1.5} />
                                </div>
                                <h3>No Beta Features Available</h3>
                                <p>There are no beta features currently available. Check back later for exciting new features in development!</p>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'feature-suggestions' && (
                    <>
                        <div className="profile-header">
                            <h2>Feature Suggestions</h2>
                        </div>

                        <div className="profile-card">
                            <h3 className="card-title" style={{ marginBottom: '20px' }}>Feature Suggestion</h3>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Feature Title</label>
                                    <input type="text" placeholder="Brief title for your feature suggestion" />
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <select>
                                        <option>Select a category</option>
                                        <option>Dashboard</option>
                                        <option>Trading Platform</option>
                                        <option>Billing</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Detailed Description</label>
                                    <div className="textarea-wrapper">
                                        <textarea placeholder="Describe your feature idea in detail. What problem does it solve? How would it work?"></textarea>
                                        <div className="char-count">0 / 2000 characters</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Use Case (Optional)</label>
                                    <div className="textarea-wrapper">
                                        <textarea placeholder="When and how would you use this feature? Example scenarios..."></textarea>
                                        <div className="char-count">0 / 1000 characters</div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group" style={{ maxWidth: '50%', paddingRight: '12px' }}>
                                <label>How important is this to you?</label>
                                <select>
                                    <option>Select priority</option>
                                    <option>Low</option>
                                    <option>Medium</option>
                                    <option>High</option>
                                    <option>Critical</option>
                                </select>
                            </div>
                        </div>

                        <div className="save-btn-container">
                            <button className="btn-save btn-blue">Submit Suggestion</button>
                        </div>
                    </>
                )}

                {activeTab === 'preferences' && (
                    <>
                        <div className="profile-header">
                            <h2>Preferences</h2>
                        </div>

                        <div className="profile-card">
                            <h3 className="card-title">Preferences</h3>
                            <span className="card-subtitle">Select your preferred language.</span>

                            <div className="form-group" style={{ maxWidth: '300px' }}>
                                <label>Language</label>
                                <select>
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                    <option>German</option>
                                    <option>Italian</option>
                                    <option>Dutch</option>
                                    <option>Hindi</option>
                                    <option>Arabic</option>
                                </select>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Wallet Modal */}
            {showWalletModal && (
                <div className="modal-overlay">
                    <div className="wallet-modal">
                        <div className="modal-header">
                            <h3>Add New Crypto Wallet</h3>
                            <button className="btn-close" onClick={() => setShowWalletModal(false)}>×</button>
                        </div>
                        <p className="modal-desc">Add a crypto wallet to receive payouts. You can add up to 5 wallets.</p>

                        <div className="modal-form">
                            <div className="form-group">
                                <label>Network</label>
                                <select>
                                    <option>Select Network</option>
                                    <option>TRC20</option>
                                    <option>ERC20</option>
                                    <option>BEP20</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Currency</label>
                                <select>
                                    <option>Select Currency</option>
                                    <option>USDT</option>
                                    <option>USDC</option>
                                    <option>BTC</option>
                                    <option>ETH</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Wallet Name</label>
                                <input type="text" placeholder="e.g., My Main Wallet" />
                            </div>
                            <div className="form-group">
                                <label>Wallet Address</label>
                                <input type="text" placeholder="Enter your wallet address..." style={{ fontFamily: 'monospace' }} />
                            </div>

                            <div className="checkbox-group">
                                <input type="checkbox" id="confirm-wallet" />
                                <label htmlFor="confirm-wallet">
                                    I confirm that have provided the correct wallet address (USDT/USDC). I understand that providing an incorrect address may result in permanent loss of funds, for which I am solely responsible.
                                </label>
                            </div>

                            <div className="info-alert">
                                <div className="info-icon">ⓘ</div>
                                <p>After creating your crypto wallet, you'll receive a confirmation email. The confirmation link will expire in 24 hours.</p>
                            </div>

                            <div className="modal-actions">
                                <button className="btn-cancel" onClick={() => setShowWalletModal(false)}>Cancel</button>
                                <button className="btn-save btn-blue">Save Wallet</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
