import React from 'react';
import { X } from 'lucide-react';
import './CashPrizeModal.css';

function CashPrizeModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <button className="modal-close-btn" onClick={onClose}>
                    <X size={20} />
                </button>

                <div className="modal-content">
                    <h2 className="modal-title">JOIN OUR LEGACY CAMPAIGN AND SHARE YOUR IMPACT STORY</h2>

                    <div className="prize-banner">
                        <h3>$50,000 Cash Prize</h3>
                        <p>Share how YoPips has impacted your trading journey for a chance to win.</p>
                    </div>

                    <div className="info-box">
                        <h4>How to Enter:</h4>
                        <ul>
                            <li>Create a <strong>30 to 180 sec video</strong> sharing your YoPips story</li>
                            <li>Post it on <strong>Instagram, TikTok, YouTube, or Twitter/X</strong> using <strong>#YoPips</strong></li>
                            <li>Submit your video link(s) in the dashboard under "URL of Video Submission" section</li>
                        </ul>
                    </div>

                    <div className="info-box">
                        <h4>Eligibility:</h4>
                        <ul>
                            <li>You must hold <strong>at least one active YoPips Challenge account</strong> (any size, any model)</li>
                            <li>Videos must remain <strong>public</strong> during the campaign</li>
                            <li>Campaign will end on 19th January 2026, the winner will be announced on 26th January 2026</li>
                        </ul>
                    </div>

                    <form className="prize-form">
                        <div className="form-group">
                            <label>Full Name <span className="required">*</span></label>
                            <input type="text" placeholder="Yo F" defaultValue="Yo F" />
                        </div>

                        <div className="form-group">
                            <label>Email <span className="required">*</span></label>
                            <input type="email" placeholder="yoforexpremium@gmail.com" defaultValue="yoforexpremium@gmail.com" />
                        </div>

                        <div className="form-group">
                            <label>Social Media Platform <span className="required">*</span></label>
                            <select>
                                <option>Select Social Media Platform</option>
                                <option>Instagram</option>
                                <option>TikTok</option>
                                <option>YouTube</option>
                                <option>Twitter/X</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Social handle <span className="required">*</span></label>
                            <input type="text" placeholder="Social handle" />
                        </div>

                        <div className="form-group">
                            <label>URL of Video Submission <span className="required">*</span></label>
                            <input type="text" placeholder="URL of Video Submission" />
                        </div>

                        <div className="checkbox-group">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms">I have read and agreed to the <a href="#">Terms and Conditions</a></label>
                        </div>

                        <button type="submit" className="submit-btn">Submit</button>
                        <p className="form-footer-text">You can submit multiple times</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CashPrizeModal;
