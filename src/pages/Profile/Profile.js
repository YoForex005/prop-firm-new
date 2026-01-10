import React, { useState } from 'react';
import './Profile.css';
import { User, Info, Edit2, X } from 'lucide-react';

function Profile() {
    const [activeTab, setActiveTab] = useState('personal-information');
    const [showProfilePictureSettings, setShowProfilePictureSettings] = useState(false);
    const [showNicknameModal, setShowNicknameModal] = useState(false);
    const [nickname, setNickname] = useState('');
    const [formData, setFormData] = useState({
        title: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        timezone: '(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
        country: 'Iceland',
        contactPhone: '',
        city: '',
        street: '',
        postalCode: ''
    });
    const [errors, setErrors] = useState({});
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title) newErrors.title = 'Title is required';
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.contactPhone) newErrors.contactPhone = 'Contact phone is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setShowErrorAlert(true);
            setTimeout(() => setShowErrorAlert(false), 5000);
            return false;
        }

        return true;
    };

    const handleSave = () => {
        if (validateForm()) {
            // Save logic here
            console.log('Form is valid, saving...', formData);
            alert('Profile saved successfully!');
        }
    };

    const handleSaveNickname = () => {
        // Save nickname logic
        console.log('Saving nickname:', nickname);
        alert(`Nickname '${nickname}' saved successfully!`);
        setShowNicknameModal(false);
    };

    return (
        <div className="profile-page-container">
            {/* Breadcrumbs */}
            <div className="profile-breadcrumbs">
                <span className="breadcrumb-item">Trader</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item">Profile</span>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-item active">Personal Information</span>
            </div>

            {/* Header */}
            <div className="profile-page-header">
                <User size={20} />
                <h1>Profile</h1>
            </div>

            {/* Tabs */}
            <div className="profile-tabs-row">
                <button
                    className={`profile-page-tab ${activeTab === 'personal-information' ? 'active' : ''}`}
                    onClick={() => setActiveTab('personal-information')}
                >
                    Personal Information
                </button>
                <button
                    className={`profile-page-tab ${activeTab === 'account-information' ? 'active' : ''}`}
                    onClick={() => setActiveTab('account-information')}
                >
                    Account Information
                </button>
                <button
                    className={`profile-page-tab ${activeTab === 'security' ? 'active' : ''}`}
                    onClick={() => setActiveTab('security')}
                >
                    Security
                </button>
                <button
                    className={`profile-page-tab ${activeTab === 'ftmo-identity' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ftmo-identity')}
                >
                    Yo Pips Identity
                </button>
                <button
                    className={`profile-page-tab ${activeTab === 'newsletters' ? 'active' : ''}`}
                    onClick={() => setActiveTab('newsletters')}
                >
                    Newsletters
                </button>
                <button
                    className={`profile-page-tab ${activeTab === 'ftmo-points' ? 'active' : ''}`}
                    onClick={() => setActiveTab('ftmo-points')}
                >
                    Yo Pips Points
                </button>
            </div>

            {/* Content */}
            {activeTab === 'personal-information' && (
                <div className="profile-page-content">
                    {/* User Info Card */}
                    <div className="user-info-card">
                        <div className="user-avatar-circle">AN</div>
                        <div className="user-info-details">
                            <div className="user-name-row">
                                <span className="user-name">Arijeet Nayak</span>
                                <Edit2
                                    size={14}
                                    className="edit-icon"
                                    onClick={() => setShowProfilePictureSettings(!showProfilePictureSettings)}
                                    style={{ cursor: 'pointer' }}
                                />
                            </div>
                            <div className="user-email">ranjan.nayak1968@gmail.com</div>
                            <div className="user-points">0 Yo Pips Points</div>
                        </div>
                        <button className="edit-nickname-btn" onClick={() => setShowNicknameModal(true)}>Edit nickname</button>
                    </div>

                    {/* Profile Picture Settings */}
                    {showProfilePictureSettings && (
                        <div className="profile-picture-settings">
                            <h3 className="settings-title">Profile picture settings</h3>
                            <div className="picture-info-box">
                                <Info size={16} />
                                <p>
                                    Please do not upload pictures (such as ID) or any documents containing sensitive or corrupted data.
                                    Your profile picture may be visible to third parties when contacting customer service.
                                </p>
                            </div>
                            <div className="picture-upload-area">
                                <div className="upload-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="17 8 12 3 7 8"></polyline>
                                        <line x1="12" y1="3" x2="12" y2="15"></line>
                                    </svg>
                                </div>
                                <p className="upload-text">Drag and drop file here or click</p>
                            </div>
                        </div>
                    )}

                    {/* Error Alert */}
                    {showErrorAlert && (
                        <div className="error-alert-banner">
                            <Info size={18} />
                            <span>Please fill in all required fields before saving.</span>
                        </div>
                    )}

                    {/* Client Section */}
                    <div className="profile-section">
                        <h3 className="section-title">Client</h3>
                        <div className="form-row">
                            <div className="form-col">
                                <label>First Name</label>
                                <input type="text" value="Arijeet" readOnly />
                            </div>
                            <div className="form-col">
                                <label>Last Name</label>
                                <input type="text" value="Nayak" readOnly />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col-full">
                                <label>Title</label>
                                <select>
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="profile-section">
                        <h3 className="section-title">Contact Info</h3>
                        <div className="form-row">
                            <div className="form-col">
                                <label>Contact Phone</label>
                                <input type="text" value="+918420484785" readOnly />
                            </div>
                            <div className="form-col">
                                <label>E-mail address</label>
                                <input type="text" value="ranjan.nayak1968@gmail.com" readOnly />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col-full">
                                <label>Country of residence</label>
                                <select defaultValue="Iceland">
                                    <option value="">Select a country</option>
                                    <option>Afghanistan</option>
                                    <option>Albania</option>
                                    <option>Algeria</option>
                                    <option>Andorra</option>
                                    <option>Angola</option>
                                    <option>Antigua and Barbuda</option>
                                    <option>Argentina</option>
                                    <option>Armenia</option>
                                    <option>Australia</option>
                                    <option>Austria</option>
                                    <option>Azerbaijan</option>
                                    <option>Bahamas</option>
                                    <option>Bahrain</option>
                                    <option>Bangladesh</option>
                                    <option>Barbados</option>
                                    <option>Belarus</option>
                                    <option>Belgium</option>
                                    <option>Belize</option>
                                    <option>Benin</option>
                                    <option>Bhutan</option>
                                    <option>Bolivia</option>
                                    <option>Bosnia and Herzegovina</option>
                                    <option>Botswana</option>
                                    <option>Brazil</option>
                                    <option>Brunei</option>
                                    <option>Bulgaria</option>
                                    <option>Burkina Faso</option>
                                    <option>Burundi</option>
                                    <option>Cambodia</option>
                                    <option>Cameroon</option>
                                    <option>Canada</option>
                                    <option>Cape Verde</option>
                                    <option>Central African Republic</option>
                                    <option>Chad</option>
                                    <option>Chile</option>
                                    <option>China</option>
                                    <option>Colombia</option>
                                    <option>Comoros</option>
                                    <option>Congo</option>
                                    <option>Costa Rica</option>
                                    <option>Croatia</option>
                                    <option>Cuba</option>
                                    <option>Cyprus</option>
                                    <option>Czech Republic</option>
                                    <option>Denmark</option>
                                    <option>Djibouti</option>
                                    <option>Dominica</option>
                                    <option>Dominican Republic</option>
                                    <option>Ecuador</option>
                                    <option>Egypt</option>
                                    <option>El Salvador</option>
                                    <option>Equatorial Guinea</option>
                                    <option>Eritrea</option>
                                    <option>Estonia</option>
                                    <option>Ethiopia</option>
                                    <option>Fiji</option>
                                    <option>Finland</option>
                                    <option>France</option>
                                    <option>Gabon</option>
                                    <option>Gambia</option>
                                    <option>Georgia</option>
                                    <option>Germany</option>
                                    <option>Ghana</option>
                                    <option>Greece</option>
                                    <option>Grenada</option>
                                    <option>Guatemala</option>
                                    <option>Guinea</option>
                                    <option>Guinea-Bissau</option>
                                    <option>Guyana</option>
                                    <option>Haiti</option>
                                    <option>Honduras</option>
                                    <option>Hungary</option>
                                    <option>Iceland</option>
                                    <option>India</option>
                                    <option>Indonesia</option>
                                    <option>Iran</option>
                                    <option>Iraq</option>
                                    <option>Ireland</option>
                                    <option>Israel</option>
                                    <option>Italy</option>
                                    <option>Jamaica</option>
                                    <option>Japan</option>
                                    <option>Jordan</option>
                                    <option>Kazakhstan</option>
                                    <option>Kenya</option>
                                    <option>Kiribati</option>
                                    <option>Kuwait</option>
                                    <option>Kyrgyzstan</option>
                                    <option>Laos</option>
                                    <option>Latvia</option>
                                    <option>Lebanon</option>
                                    <option>Lesotho</option>
                                    <option>Liberia</option>
                                    <option>Libya</option>
                                    <option>Liechtenstein</option>
                                    <option>Lithuania</option>
                                    <option>Luxembourg</option>
                                    <option>Macedonia</option>
                                    <option>Madagascar</option>
                                    <option>Malawi</option>
                                    <option>Malaysia</option>
                                    <option>Maldives</option>
                                    <option>Mali</option>
                                    <option>Malta</option>
                                    <option>Marshall Islands</option>
                                    <option>Mauritania</option>
                                    <option>Mauritius</option>
                                    <option>Mexico</option>
                                    <option>Micronesia</option>
                                    <option>Moldova</option>
                                    <option>Monaco</option>
                                    <option>Mongolia</option>
                                    <option>Montenegro</option>
                                    <option>Morocco</option>
                                    <option>Mozambique</option>
                                    <option>Myanmar</option>
                                    <option>Namibia</option>
                                    <option>Nauru</option>
                                    <option>Nepal</option>
                                    <option>Netherlands</option>
                                    <option>New Zealand</option>
                                    <option>Nicaragua</option>
                                    <option>Niger</option>
                                    <option>Nigeria</option>
                                    <option>North Korea</option>
                                    <option>Norway</option>
                                    <option>Oman</option>
                                    <option>Pakistan</option>
                                    <option>Palau</option>
                                    <option>Palestine</option>
                                    <option>Panama</option>
                                    <option>Papua New Guinea</option>
                                    <option>Paraguay</option>
                                    <option>Peru</option>
                                    <option>Philippines</option>
                                    <option>Poland</option>
                                    <option>Portugal</option>
                                    <option>Qatar</option>
                                    <option>Romania</option>
                                    <option>Russia</option>
                                    <option>Rwanda</option>
                                    <option>Saint Kitts and Nevis</option>
                                    <option>Saint Lucia</option>
                                    <option>Saint Vincent and the Grenadines</option>
                                    <option>Samoa</option>
                                    <option>San Marino</option>
                                    <option>Sao Tome and Principe</option>
                                    <option>Saudi Arabia</option>
                                    <option>Senegal</option>
                                    <option>Serbia</option>
                                    <option>Seychelles</option>
                                    <option>Sierra Leone</option>
                                    <option>Singapore</option>
                                    <option>Slovakia</option>
                                    <option>Slovenia</option>
                                    <option>Solomon Islands</option>
                                    <option>Somalia</option>
                                    <option>South Africa</option>
                                    <option>South Korea</option>
                                    <option>South Sudan</option>
                                    <option>Spain</option>
                                    <option>Sri Lanka</option>
                                    <option>Sudan</option>
                                    <option>Suriname</option>
                                    <option>Swaziland</option>
                                    <option>Sweden</option>
                                    <option>Switzerland</option>
                                    <option>Syria</option>
                                    <option>Taiwan</option>
                                    <option>Tajikistan</option>
                                    <option>Tanzania</option>
                                    <option>Thailand</option>
                                    <option>Timor-Leste</option>
                                    <option>Togo</option>
                                    <option>Tonga</option>
                                    <option>Trinidad and Tobago</option>
                                    <option>Tunisia</option>
                                    <option>Turkey</option>
                                    <option>Turkmenistan</option>
                                    <option>Tuvalu</option>
                                    <option>Uganda</option>
                                    <option>Ukraine</option>
                                    <option>United Arab Emirates</option>
                                    <option>United Kingdom</option>
                                    <option>United States</option>
                                    <option>Uruguay</option>
                                    <option>Uzbekistan</option>
                                    <option>Vanuatu</option>
                                    <option>Vatican City</option>
                                    <option>Venezuela</option>
                                    <option>Vietnam</option>
                                    <option>Yemen</option>
                                    <option>Zambia</option>
                                    <option>Zimbabwe</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col">
                                <label>City</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="form-col">
                                <label>Street</label>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col">
                                <label>Postal Code</label>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                    </div>

                    {/* Warning Message */}
                    <div className="profile-warning-box">
                        <Info size={18} />
                        <p>
                            Please be aware that the registration is non-transferable and can't be changed to another person.
                            Changes in your credentials can only be accepted in cases where you change your address or officially
                            have your own name changed (e.g. in case of marriage). Attempts to transfer the account to another
                            person using credentials (e.g. fake/s of your registration.
                        </p>
                    </div>

                    {/* Save Button */}
                    <button className="profile-save-btn" onClick={handleSave}>Save</button>

                    {/* Footer */}
                    <div className="profile-page-footer">
                        <div className="footer-links-row">
                            <a href="#">Cookie settings</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                        <p className="footer-text">
                            All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a
                            specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of
                            investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at
                            residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker
                            and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                        </p>
                        <div className="footer-copyright-row">
                            2026 © Copyright - YoPips.com Made with ♥ for trading
                            <br />
                            Version: 673b1000
                        </div>
                    </div>
                </div>
            )}

            {/* Account Information Tab */}
            {activeTab === 'account-information' && (
                <div className="profile-page-content">
                    {/* User Info Card */}
                    <div className="user-info-card">
                        <div className="user-avatar-circle">AN</div>
                        <div className="user-info-details">
                            <div className="user-name-row">
                                <span className="user-name">Arijeet Nayak</span>
                                <Edit2 size={14} className="edit-icon" />
                            </div>
                            <div className="user-email">ranjan.nayak1968@gmail.com</div>
                            <div className="user-points">0 Yo Pips Points</div>
                        </div>
                        <button className="edit-nickname-btn" onClick={() => setShowNicknameModal(true)}>Edit nickname</button>
                    </div>

                    {/* Edit Nickname Modal */}
                    {showNicknameModal && (
                        <div className="nickname-modal-overlay" onClick={() => setShowNicknameModal(false)}>
                            <div className="nickname-modal-content" onClick={(e) => e.stopPropagation()}>
                                <div className="nickname-modal-header">
                                    <h2>Edit My Profile</h2>
                                    <X size={20} className="modal-close-icon" onClick={() => setShowNicknameModal(false)} />
                                </div>

                                <div className="nickname-info-box">
                                    <Info size={16} />
                                    <p>You can set your nickname only once. If you've already set it and need to change it, please contact <a href="mailto:support@ftmo.com">support@ftmo.com</a>.</p>
                                </div>

                                <div className="nickname-form-group">
                                    <label>Nickname</label>
                                    <input
                                        type="text"
                                        value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}
                                        placeholder="Enter your nickname"
                                    />
                                </div>

                                <div className="nickname-modal-actions">
                                    <button className="nickname-close-btn" onClick={() => setShowNicknameModal(false)}>Close</button>
                                    <button className="nickname-save-btn" onClick={handleSaveNickname}>Save</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Client Section */}
                    <div className="profile-section">
                        <h3 className="section-title">Client</h3>
                        <div className="form-row">
                            <div className="form-col">
                                <label>First Name</label>
                                <input type="text" value="Arijeet" readOnly />
                            </div>
                            <div className="form-col">
                                <label>Last Name</label>
                                <input type="text" value="Nayak" readOnly />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col-full">
                                <label>Title</label>
                                <select>
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="profile-section">
                        <h3 className="section-title">Contact Info</h3>
                        <div className="form-row">
                            <div className="form-col">
                                <label>Contact Phone</label>
                                <input type="text" value="+918420484785" readOnly />
                            </div>
                            <div className="form-col">
                                <label>E-mail address</label>
                                <input type="text" value="ranjan.nayak1968@gmail.com" readOnly />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col-full">
                                <label>Country of residence</label>
                                <select defaultValue="Iceland">
                                    <option value="">Select a country</option>
                                    <option>Afghanistan</option>
                                    <option>Albania</option>
                                    <option>Algeria</option>
                                    <option>Andorra</option>
                                    <option>Angola</option>
                                    <option>Antigua and Barbuda</option>
                                    <option>Argentina</option>
                                    <option>Armenia</option>
                                    <option>Australia</option>
                                    <option>Austria</option>
                                    <option>Azerbaijan</option>
                                    <option>Bahamas</option>
                                    <option>Bahrain</option>
                                    <option>Bangladesh</option>
                                    <option>Barbados</option>
                                    <option>Belarus</option>
                                    <option>Belgium</option>
                                    <option>Belize</option>
                                    <option>Benin</option>
                                    <option>Bhutan</option>
                                    <option>Bolivia</option>
                                    <option>Bosnia and Herzegovina</option>
                                    <option>Botswana</option>
                                    <option>Brazil</option>
                                    <option>Brunei</option>
                                    <option>Bulgaria</option>
                                    <option>Burkina Faso</option>
                                    <option>Burundi</option>
                                    <option>Cambodia</option>
                                    <option>Cameroon</option>
                                    <option>Canada</option>
                                    <option>Cape Verde</option>
                                    <option>Central African Republic</option>
                                    <option>Chad</option>
                                    <option>Chile</option>
                                    <option>China</option>
                                    <option>Colombia</option>
                                    <option>Comoros</option>
                                    <option>Congo</option>
                                    <option>Costa Rica</option>
                                    <option>Croatia</option>
                                    <option>Cuba</option>
                                    <option>Cyprus</option>
                                    <option>Czech Republic</option>
                                    <option>Denmark</option>
                                    <option>Djibouti</option>
                                    <option>Dominica</option>
                                    <option>Dominican Republic</option>
                                    <option>Ecuador</option>
                                    <option>Egypt</option>
                                    <option>El Salvador</option>
                                    <option>Equatorial Guinea</option>
                                    <option>Eritrea</option>
                                    <option>Estonia</option>
                                    <option>Ethiopia</option>
                                    <option>Fiji</option>
                                    <option>Finland</option>
                                    <option>France</option>
                                    <option>Gabon</option>
                                    <option>Gambia</option>
                                    <option>Georgia</option>
                                    <option>Germany</option>
                                    <option>Ghana</option>
                                    <option>Greece</option>
                                    <option>Grenada</option>
                                    <option>Guatemala</option>
                                    <option>Guinea</option>
                                    <option>Guinea-Bissau</option>
                                    <option>Guyana</option>
                                    <option>Haiti</option>
                                    <option>Honduras</option>
                                    <option>Hungary</option>
                                    <option>Iceland</option>
                                    <option>India</option>
                                    <option>Indonesia</option>
                                    <option>Iran</option>
                                    <option>Iraq</option>
                                    <option>Ireland</option>
                                    <option>Israel</option>
                                    <option>Italy</option>
                                    <option>Jamaica</option>
                                    <option>Japan</option>
                                    <option>Jordan</option>
                                    <option>Kazakhstan</option>
                                    <option>Kenya</option>
                                    <option>Kiribati</option>
                                    <option>Kuwait</option>
                                    <option>Kyrgyzstan</option>
                                    <option>Laos</option>
                                    <option>Latvia</option>
                                    <option>Lebanon</option>
                                    <option>Lesotho</option>
                                    <option>Liberia</option>
                                    <option>Libya</option>
                                    <option>Liechtenstein</option>
                                    <option>Lithuania</option>
                                    <option>Luxembourg</option>
                                    <option>Macedonia</option>
                                    <option>Madagascar</option>
                                    <option>Malawi</option>
                                    <option>Malaysia</option>
                                    <option>Maldives</option>
                                    <option>Mali</option>
                                    <option>Malta</option>
                                    <option>Marshall Islands</option>
                                    <option>Mauritania</option>
                                    <option>Mauritius</option>
                                    <option>Mexico</option>
                                    <option>Micronesia</option>
                                    <option>Moldova</option>
                                    <option>Monaco</option>
                                    <option>Mongolia</option>
                                    <option>Montenegro</option>
                                    <option>Morocco</option>
                                    <option>Mozambique</option>
                                    <option>Myanmar</option>
                                    <option>Namibia</option>
                                    <option>Nauru</option>
                                    <option>Nepal</option>
                                    <option>Netherlands</option>
                                    <option>New Zealand</option>
                                    <option>Nicaragua</option>
                                    <option>Niger</option>
                                    <option>Nigeria</option>
                                    <option>North Korea</option>
                                    <option>Norway</option>
                                    <option>Oman</option>
                                    <option>Pakistan</option>
                                    <option>Palau</option>
                                    <option>Palestine</option>
                                    <option>Panama</option>
                                    <option>Papua New Guinea</option>
                                    <option>Paraguay</option>
                                    <option>Peru</option>
                                    <option>Philippines</option>
                                    <option>Poland</option>
                                    <option>Portugal</option>
                                    <option>Qatar</option>
                                    <option>Romania</option>
                                    <option>Russia</option>
                                    <option>Rwanda</option>
                                    <option>Saint Kitts and Nevis</option>
                                    <option>Saint Lucia</option>
                                    <option>Saint Vincent and the Grenadines</option>
                                    <option>Samoa</option>
                                    <option>San Marino</option>
                                    <option>Sao Tome and Principe</option>
                                    <option>Saudi Arabia</option>
                                    <option>Senegal</option>
                                    <option>Serbia</option>
                                    <option>Seychelles</option>
                                    <option>Sierra Leone</option>
                                    <option>Singapore</option>
                                    <option>Slovakia</option>
                                    <option>Slovenia</option>
                                    <option>Solomon Islands</option>
                                    <option>Somalia</option>
                                    <option>South Africa</option>
                                    <option>South Korea</option>
                                    <option>South Sudan</option>
                                    <option>Spain</option>
                                    <option>Sri Lanka</option>
                                    <option>Sudan</option>
                                    <option>Suriname</option>
                                    <option>Swaziland</option>
                                    <option>Sweden</option>
                                    <option>Switzerland</option>
                                    <option>Syria</option>
                                    <option>Taiwan</option>
                                    <option>Tajikistan</option>
                                    <option>Tanzania</option>
                                    <option>Thailand</option>
                                    <option>Timor-Leste</option>
                                    <option>Togo</option>
                                    <option>Tonga</option>
                                    <option>Trinidad and Tobago</option>
                                    <option>Tunisia</option>
                                    <option>Turkey</option>
                                    <option>Turkmenistan</option>
                                    <option>Tuvalu</option>
                                    <option>Uganda</option>
                                    <option>Ukraine</option>
                                    <option>United Arab Emirates</option>
                                    <option>United Kingdom</option>
                                    <option>United States</option>
                                    <option>Uruguay</option>
                                    <option>Uzbekistan</option>
                                    <option>Vanuatu</option>
                                    <option>Vatican City</option>
                                    <option>Venezuela</option>
                                    <option>Vietnam</option>
                                    <option>Yemen</option>
                                    <option>Zambia</option>
                                    <option>Zimbabwe</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col">
                                <label>City</label>
                                <input type="text" placeholder="" />
                            </div>
                            <div className="form-col">
                                <label>Street</label>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-col">
                                <label>Postal Code</label>
                                <input type="text" placeholder="" />
                            </div>
                        </div>
                    </div>

                    {/* Warning Message */}
                    <div className="profile-warning-box">
                        <Info size={18} />
                        <p>
                            Please be aware that the registration is non-transferable and can't be changed to another person.
                            Changes in your credentials can only be accepted in cases where you change your address or officially
                            have your own name changed (e.g. in case of marriage). Attempts to transfer the account to another
                            person using credentials (e.g. fake/s of your registration.
                        </p>
                    </div>

                    {/* Save Button */}
                    <button className="profile-save-btn">Save</button>

                    {/* Footer */}
                    <div className="profile-page-footer">
                        <div className="footer-links-row">
                            <a href="#">Cookie settings</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                        <p className="footer-text">
                            All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a
                            specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of
                            investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at
                            residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker
                            and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                        </p>
                        <div className="footer-copyright-row">
                            2026 © Copyright - YoPips.com Made with ♥ for trading
                            <br />
                            Version: 673b1000
                        </div>
                    </div>
                </div>
            )}

            {/* Yo Pips Identity Tab */}
            {activeTab === 'ftmo-identity' && (
                <div className="profile-page-content">
                    <h3 className="section-title">Yo Pips Identity</h3>

                    <div className="profile-warning-box">
                        <Info size={18} />
                        <p>
                            The Yo Pips Identity section will be unlocked for you once you are about to sign or change a contract with us. It will be automatically unlocked once you meet a Profit Target in a Verification that has not violated Max Daily Loss or Max Loss.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="profile-page-footer">
                        <div className="footer-links-row">
                            <a href="#">Cookie settings</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Terms & Conditions</a>
                        </div>
                        <p className="footer-text">
                            All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                        </p>
                        <div className="footer-copyright-row">
                            2026 © Copyright - YoPips.com Made with ♥ for trading.
                            <br />
                            Version: 673b1000
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Nickname Modal */}
            {showNicknameModal && (
                <div className="nickname-modal-overlay" onClick={() => setShowNicknameModal(false)}>
                    <div className="nickname-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="nickname-modal-header">
                            <h2>Edit My Profile</h2>
                            <X size={20} className="modal-close-icon" onClick={() => setShowNicknameModal(false)} />
                        </div>

                        <div className="nickname-info-box">
                            <Info size={16} />
                            <p>You can set your nickname only once. If you've already set it and need to change it, please contact <a href="mailto:support@yopips.com">support@yopips.com</a>.</p>
                        </div>

                        <div className="nickname-form-group">
                            <label>Nickname</label>
                            <input
                                type="text"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                placeholder="Enter your nickname"
                            />
                        </div>

                        <div className="nickname-modal-actions">
                            <button className="nickname-close-btn" onClick={() => setShowNicknameModal(false)}>Close</button>
                            <button className="nickname-save-btn" onClick={handleSaveNickname}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
