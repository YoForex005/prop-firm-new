import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className="profile-container">
            {/* Inner Sidebar */}
            <div className="profile-sidebar">
                <h2>Configuration</h2>
                <nav className="profile-nav">
                    <button className="profile-nav-item active">Profile</button>
                    <button className="profile-nav-item">Account Verification</button>
                    <button className="profile-nav-item">Security</button>
                    <button className="profile-nav-item">Bank Accounts</button>
                    <button className="profile-nav-item">Credit Cards</button>
                    <button className="profile-nav-item">Crypto Wallets</button>
                    <button className="profile-nav-item">Payment History</button>
                    <button className="profile-nav-item">Discord</button>
                    <button className="profile-nav-item">Early Access</button>
                    <button className="profile-nav-item">Feature Suggestions</button>
                    <button className="profile-nav-item">Preferences</button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="profile-content">
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
                            <input type="text" defaultValue="Yo" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" defaultValue="Forex" />
                        </div>
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input type="date" />
                        </div>
                        <div className="form-group full-width">
                            <label>Email Address</label>
                            <input type="email" defaultValue="yoforexpremium@gmail.com" className="readonly" readOnly />
                        </div>
                        <div className="form-group full-width">
                            <label>Preferred Time Zone</label>
                            <select defaultValue="+01:00">
                                <option value="+01:00">+01:00 Central European Time - Rotterdam, Amsterdam, The Hague, Utrecht</option>
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
                            <input type="text" defaultValue="123 Main Street" />
                        </div>
                        <div className="form-group">
                            <label>City</label>
                            <input type="text" placeholder="Enter your city" />
                        </div>
                        <div className="form-group">
                            <label>Postal Code</label>
                            <input type="text" defaultValue="12345" />
                        </div>
                        <div className="form-group full-width">
                            <label>Country</label>
                            <select>
                                <option>Select country</option>
                            </select>
                        </div>
                    </div>

                    <div className="save-btn-container">
                        <button className="btn-save">Save Profile Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
