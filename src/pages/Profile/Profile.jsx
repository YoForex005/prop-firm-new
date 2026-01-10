import React, { useState } from 'react';
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
        <div className="max-w-[1200px] mx-auto p-0">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-6 text-[13px] text-[#999] dark:text-[#6b7280]">
                <span className="text-[#999] dark:text-[#6b7280]">Trader</span>
                <span className="text-[#ddd] dark:text-[#4b5563]">/</span>
                <span className="text-[#999] dark:text-[#6b7280]">Profile</span>
                <span className="text-[#ddd] dark:text-[#4b5563]">/</span>
                <span className="text-[#333] dark:text-[#e5e7eb]">Personal Information</span>
            </div>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <User size={20} className="text-[#1a1a1a] dark:text-[#f3f4f6]" />
                <h1 className="text-[22px] font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Profile</h1>
            </div>

            {/* Tabs */}
            <div className="flex gap-[2px] border-b-2 border-[#eee] dark:border-[#374151] mb-8 overflow-x-auto pb-1">
                {[
                    { id: 'personal-information', label: 'Personal Information' },
                    { id: 'account-information', label: 'Account Information' },
                    { id: 'security', label: 'Security' },
                    { id: 'ftmo-identity', label: 'Yo Pips Identity' },
                    { id: 'newsletters', label: 'Newsletters' },
                    { id: 'ftmo-points', label: 'Yo Pips Points' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        className={`bg-transparent border-none px-5 py-3 text-sm font-semibold text-[#999] dark:text-[#6b7280] cursor-pointer border-b-2 -mb-[2px] transition-all duration-200 hover:text-[#007bff] dark:hover:text-[#007bff] whitespace-nowrap ${activeTab === tab.id ? 'text-[#007bff] dark:text-[#007bff] border-[#007bff]' : 'border-transparent'}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            {activeTab === 'personal-information' && (
                <div className="max-w-[900px]">
                    {/* User Info Card */}
                    <div className="bg-white dark:bg-[#1f2937] border border-[#eee] dark:border-[#374151] rounded-lg p-6 flex items-center gap-5 mb-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] max-md:flex-col max-md:text-center max-md:gap-4">
                        <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white text-2xl font-bold shrink-0">AN</div>
                        <div className="flex-1 max-md:flex max-md:flex-col max-md:items-center">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-lg font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">Arijeet Nayak</span>
                                <Edit2
                                    size={14}
                                    className="text-[#007bff] cursor-pointer"
                                    onClick={() => setShowProfilePictureSettings(!showProfilePictureSettings)}
                                />
                            </div>
                            <div className="text-[13px] text-[#666] dark:text-[#9ca3af] mb-1">ranjan.nayak1968@gmail.com</div>
                            <div className="text-[13px] text-[#999] dark:text-[#6b7280]">0 Yo Pips Points</div>
                        </div>
                        <button className="bg-white dark:bg-[#374151] border border-[#ddd] dark:border-[#4b5563] text-[#1a1a1a] dark:text-[#e5e7eb] px-4 py-2 rounded-md text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f7f7f7] dark:hover:bg-[#4b5563]" onClick={() => setShowNicknameModal(true)}>Edit nickname</button>
                    </div>

                    {/* Profile Picture Settings */}
                    {showProfilePictureSettings && (
                        <div className="bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded-lg p-6 mb-6">
                            <h3 className="text-base font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] m-0 mb-4">Profile picture settings</h3>
                            <div className="bg-[#e7f3ff] dark:bg-[rgba(0,123,255,0.15)] border border-[#90c9ff] dark:border-[rgba(0,123,255,0.3)] rounded-md p-3 flex gap-3 mb-5 items-start">
                                <Info size={16} className="text-[#0066cc] dark:text-[#3b82f6] shrink-0 mt-[2px]" />
                                <p className="text-[13px] text-[#004080] dark:text-[#60a5fa] m-0 leading-relaxed">
                                    Please do not upload pictures (such as ID) or any documents containing sensitive or corrupted data.
                                    Your profile picture may be visible to third parties when contacting customer service.
                                </p>
                            </div>
                            <div className="border-2 border-dashed border-[#d1d5db] dark:border-[#4b5563] rounded-lg p-12 text-center cursor-pointer transition-all duration-200 hover:border-[#007bff] hover:bg-[#f7f9fc] dark:hover:bg-[#1f2937]">
                                <div className="w-16 h-16 bg-[#f3f4f6] dark:bg-[#374151] rounded-full flex items-center justify-center mx-auto mb-4 text-[#6b7280] dark:text-[#9ca3af]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="17 8 12 3 7 8"></polyline>
                                        <line x1="12" y1="3" x2="12" y2="15"></line>
                                    </svg>
                                </div>
                                <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] m-0">Drag and drop file here or click</p>
                            </div>
                        </div>
                    )}

                    {/* Error Alert */}
                    {showErrorAlert && (
                        <div className="bg-[#fee] dark:bg-[rgba(239,68,68,0.15)] border border-[#f44] dark:border-[rgba(239,68,68,0.3)] rounded-lg p-4 flex items-center gap-3 mb-6 text-[#c00] dark:text-[#ef4444] animate-[slideDown_0.3s_ease-out]">
                            <Info size={18} className="shrink-0" />
                            <span className="text-sm font-semibold">Please fill in all required fields before saving.</span>
                        </div>
                    )}

                    {/* Client Section */}
                    <div className="bg-white dark:bg-[#1f2937] border border-[#eee] dark:border-[#374151] rounded-lg p-6 mb-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                        <h3 className="text-base font-bold text-[#1a1a1a] dark:text-[#f3f4f6] m-0 mb-5">Client</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4 max-md:grid-cols-1">
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">First Name</label>
                                <input type="text" value="Arijeet" readOnly className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#2d3748] text-[#999] dark:text-[#6b7280]" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Last Name</label>
                                <input type="text" value="Nayak" readOnly className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#2d3748] text-[#999] dark:text-[#6b7280]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="col-span-2 flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Title</label>
                                <select className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#374151] text-[#1a1a1a] dark:text-[#f3f4f6]">
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="bg-white dark:bg-[#1f2937] border border-[#eee] dark:border-[#374151] rounded-lg p-6 mb-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                        <h3 className="text-base font-bold text-[#1a1a1a] dark:text-[#f3f4f6] m-0 mb-5">Contact Info</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4 max-md:grid-cols-1">
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Contact Phone</label>
                                <input type="text" value="+918420484785" readOnly className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#2d3748] text-[#999] dark:text-[#6b7280]" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">E-mail address</label>
                                <input type="text" value="ranjan.nayak1968@gmail.com" readOnly className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#2d3748] text-[#999] dark:text-[#6b7280]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="col-span-2 flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Country of residence</label>
                                <select defaultValue="Iceland" className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#374151] text-[#1a1a1a] dark:text-[#f3f4f6]">
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
                        <div className="grid grid-cols-2 gap-4 mb-4 max-md:grid-cols-1">
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">City</label>
                                <input type="text" placeholder="" className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#374151] text-[#1a1a1a] dark:text-[#f3f4f6]" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Street</label>
                                <input type="text" placeholder="" className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#374151] text-[#1a1a1a] dark:text-[#f3f4f6]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Postal Code</label>
                                <input type="text" placeholder="" className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#374151] text-[#1a1a1a] dark:text-[#f3f4f6]" />
                            </div>
                        </div>
                    </div>

                    {/* Warning Message */}
                    <div className="bg-[#fff8e1] dark:bg-[rgba(255,193,7,0.15)] border border-[#ffc107] dark:border-[rgba(255,193,7,0.3)] rounded-lg p-4 flex gap-3 mb-6 text-xs text-[#856404] dark:text-[#ffc107] leading-relaxed">
                        <Info size={18} className="text-[#ff8c00] shrink-0 mt-[2px]" />
                        <p className="m-0">
                            Please be aware that the registration is non-transferable and can't be changed to another person.
                            Changes in your credentials can only be accepted in cases where you change your address or officially
                            have your own name changed (e.g. in case of marriage). Attempts to transfer the account to another
                            person using credentials (e.g. fake/s of your registration.
                        </p>
                    </div>

                    {/* Save Button */}
                    <button className="bg-[#007bff] hover:bg-[#0056b3] text-white border-none px-8 py-3 rounded-md text-sm font-semibold cursor-pointer mb-[60px] transition-colors duration-200" onClick={handleSave}>Save</button>

                    {/* Footer */}
                    <div className="pt-10 border-t border-[#eee] dark:border-[#374151]">
                        <div className="flex gap-5 mb-4 max-md:flex-col max-md:gap-2">
                            <a href="#" className="text-xs text-[#666] dark:text-[#9ca3af] underline font-semibold">Cookie settings</a>
                            <a href="#" className="text-xs text-[#666] dark:text-[#9ca3af] underline font-semibold">Privacy policy</a>
                            <a href="#" className="text-xs text-[#666] dark:text-[#9ca3af] underline font-semibold">Terms & Conditions</a>
                        </div>
                        <p className="text-[11px] text-[#999] dark:text-[#6b7280] leading-relaxed mb-4">
                            All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a
                            specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of
                            investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at
                            residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker
                            and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                        </p>
                        <div className="text-[11px] text-[#999] dark:text-[#6b7280]">
                            2026 © Copyright - YoPips.com Made with ♥ for trading
                            <br />
                            Version: 673b1000
                        </div>
                    </div>
                </div>
            )}

            {/* Account Information Tab */}
            {activeTab === 'account-information' && (
                <div className="max-w-[900px]">
                    {/* User Info Card */}
                    <div className="bg-white dark:bg-[#1f2937] border border-[#eee] dark:border-[#374151] rounded-lg p-6 flex items-center gap-5 mb-8 shadow-[0_1px_3px_rgba(0,0,0,0.05)] max-md:flex-col max-md:text-center max-md:gap-4">
                        <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center text-white text-2xl font-bold shrink-0">AN</div>
                        <div className="flex-1 max-md:flex max-md:flex-col max-md:items-center">
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="text-lg font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">Arijeet Nayak</span>
                                <Edit2 size={14} className="text-[#007bff] cursor-pointer" />
                            </div>
                            <div className="text-[13px] text-[#666] dark:text-[#9ca3af] mb-1">ranjan.nayak1968@gmail.com</div>
                            <div className="text-[13px] text-[#999] dark:text-[#6b7280]">0 Yo Pips Points</div>
                        </div>
                        <button className="bg-white dark:bg-[#374151] border border-[#ddd] dark:border-[#4b5563] text-[#1a1a1a] dark:text-[#e5e7eb] px-4 py-2 rounded-md text-[13px] font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f7f7f7] dark:hover:bg-[#4b5563]" onClick={() => setShowNicknameModal(true)}>Edit nickname</button>
                    </div>

                    {/* Edit Nickname Modal */}
                    {showNicknameModal && (
                        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[1000]" onClick={() => setShowNicknameModal(false)}>
                            <div className="bg-white dark:bg-[#1f2937] rounded-lg w-full max-w-[500px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-[slideUpModal_0.3s_ease-out] max-md:w-[95%] max-md:mx-[10px]" onClick={(e) => e.stopPropagation()}>
                                <div className="flex justify-between items-center px-6 py-5 border-b border-[#e5e7eb] dark:border-[#374151]">
                                    <h2 className="text-base font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Edit My Profile</h2>
                                    <X size={20} className="text-[#6b7280] dark:text-[#9ca3af] cursor-pointer hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6]" onClick={() => setShowNicknameModal(false)} />
                                </div>

                                <div className="bg-[#e7f3ff] dark:bg-[rgba(0,123,255,0.15)] border border-[#90c9ff] dark:border-[rgba(0,123,255,0.3)] rounded-md px-4 py-3 mx-6 my-5 flex gap-3 items-start">
                                    <Info size={16} className="text-[#0066cc] dark:text-[#3b82f6] shrink-0 mt-[2px]" />
                                    <p className="text-[13px] text-[#004080] dark:text-[#60a5fa] m-0 leading-relaxed">You can set your nickname only once. If you've already set it and need to change it, please contact <a href="mailto:support@ftmo.com" className="text-[#0066cc] dark:text-[#60a5fa] underline">support@ftmo.com</a>.</p>
                                </div>

                                <div className="px-6 pb-5">
                                    <label className="block text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Nickname</label>
                                    <input
                                        type="text"
                                        value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}
                                        placeholder="Enter your nickname"
                                        className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#374151] box-border focus:outline-none focus:border-[#007bff] focus:bg-white dark:focus:bg-[#4b5563] text-[#1a1a1a] dark:text-[#f3f4f6]"
                                    />
                                </div>

                                <div className="flex justify-end gap-3 px-6 py-4 border-t border-[#e5e7eb] dark:border-[#374151]">
                                    <button className="bg-[#f3f4f6] dark:bg-[#374151] text-[#374151] dark:text-[#e5e7eb] border-none px-5 py-2 rounded-md text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#e5e7eb] dark:hover:bg-[#4b5563]" onClick={() => setShowNicknameModal(false)}>Close</button>
                                    <button className="bg-[#007bff] text-white border-none px-5 py-2 rounded-md text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#0056b3]" onClick={handleSaveNickname}>Save</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Client Section */}
                    <div className="bg-white dark:bg-[#1f2937] border border-[#eee] dark:border-[#374151] rounded-lg p-6 mb-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                        <h3 className="text-base font-bold text-[#1a1a1a] dark:text-[#f3f4f6] m-0 mb-5">Client</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4 max-md:grid-cols-1">
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">First Name</label>
                                <input type="text" value="Arijeet" readOnly className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#2d3748] text-[#999] dark:text-[#6b7280]" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Last Name</label>
                                <input type="text" value="Nayak" readOnly className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#2d3748] text-[#999] dark:text-[#6b7280]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="col-span-2 flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Title</label>
                                <select className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#374151] text-[#1a1a1a] dark:text-[#f3f4f6]">
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Ms.</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="bg-white dark:bg-[#1f2937] border border-[#eee] dark:border-[#374151] rounded-lg p-6 mb-6 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                        <h3 className="text-base font-bold text-[#1a1a1a] dark:text-[#f3f4f6] m-0 mb-5">Contact Info</h3>
                        <div className="grid grid-cols-2 gap-4 mb-4 max-md:grid-cols-1">
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Contact Phone</label>
                                <input type="text" value="+918420484785" readOnly className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#2d3748] text-[#999] dark:text-[#6b7280]" />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">E-mail address</label>
                                <input type="text" value="ranjan.nayak1968@gmail.com" readOnly className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#2d3748] text-[#999] dark:text-[#6b7280]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="col-span-2 flex flex-col">
                                <label className="text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Country of residence</label>
                                <select defaultValue="Iceland" className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#374151] text-[#1a1a1a] dark:text-[#f3f4f6]">
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
                    </div>
                </div>
            )}

            {/* Yo Pips Identity Tab */}
            {activeTab === 'ftmo-identity' && (
                <div className="max-w-[900px]">
                    <h3 className="text-base font-bold text-[#1a1a1a] dark:text-[#f3f4f6] m-0 mb-5">Yo Pips Identity</h3>

                    <div className="bg-[#fff8e1] dark:bg-[rgba(255,193,7,0.15)] border border-[#ffc107] dark:border-[rgba(255,193,7,0.3)] rounded-lg p-4 flex gap-3 mb-6 text-xs text-[#856404] dark:text-[#ffc107] leading-relaxed">
                        <Info size={18} className="text-[#ff8c00] shrink-0 mt-[2px]" />
                        <p className="m-0">
                            The Yo Pips Identity section will be unlocked for you once you are about to sign or change a contract with us. It will be automatically unlocked once you meet a Profit Target in a Verification that has not violated Max Daily Loss or Max Loss.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-10 border-t border-[#eee] dark:border-[#374151]">
                        <div className="flex gap-5 mb-4 max-md:flex-col max-md:gap-2">
                            <a href="#" className="text-xs text-[#666] dark:text-[#9ca3af] underline font-semibold">Cookie settings</a>
                            <a href="#" className="text-xs text-[#666] dark:text-[#9ca3af] underline font-semibold">Privacy policy</a>
                            <a href="#" className="text-xs text-[#666] dark:text-[#9ca3af] underline font-semibold">Terms & Conditions</a>
                        </div>
                        <p className="text-[11px] text-[#999] dark:text-[#6b7280] leading-relaxed mb-4">
                            All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of investment instruments. Yo Pips only provides services of simulated trading and educational tools for traders. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips companies do not act as a broker and do not accept any deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by liquidity providers.
                        </p>
                        <div className="text-[11px] text-[#999] dark:text-[#6b7280]">
                            2026 © Copyright - YoPips.com Made with ♥ for trading.
                            <br />
                            Version: 673b1000
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Nickname Modal */}
            {showNicknameModal && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[1000]" onClick={() => setShowNicknameModal(false)}>
                    <div className="bg-white dark:bg-[#1f2937] rounded-lg w-full max-w-[500px] shadow-[0_10px_30px_rgba(0,0,0,0.2)] animate-[slideUpModal_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center px-6 py-5 border-b border-[#e5e7eb] dark:border-[#374151]">
                            <h2 className="text-base font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Edit My Profile</h2>
                            <X size={20} className="text-[#6b7280] dark:text-[#9ca3af] cursor-pointer hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6]" onClick={() => setShowNicknameModal(false)} />
                        </div>

                        <div className="bg-[#e7f3ff] dark:bg-[rgba(0,123,255,0.15)] border border-[#90c9ff] dark:border-[rgba(0,123,255,0.3)] rounded-md px-4 py-3 mx-6 my-5 flex gap-3 items-start">
                            <Info size={16} className="text-[#0066cc] dark:text-[#3b82f6] shrink-0 mt-[2px]" />
                            <p className="text-[13px] text-[#004080] dark:text-[#60a5fa] m-0 leading-relaxed">You can set your nickname only once. If you've already set it and need to change it, please contact <a href="mailto:support@yopips.com" className="text-[#0066cc] dark:text-[#60a5fa] underline">support@yopips.com</a>.</p>
                        </div>

                        <div className="px-6 pb-5">
                            <label className="block text-[13px] font-semibold text-[#333] dark:text-[#e5e7eb] mb-2">Nickname</label>
                            <input
                                type="text"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                placeholder="Enter your nickname"
                                className="w-full p-2.5 border border-[#ddd] dark:border-[#4b5563] rounded-md text-sm bg-[#f7f7f7] dark:bg-[#374151] box-border focus:outline-none focus:border-[#007bff] focus:bg-white dark:focus:bg-[#4b5563] text-[#1a1a1a] dark:text-[#f3f4f6]"
                            />
                        </div>

                        <div className="flex justify-end gap-3 px-6 py-4 border-t border-[#e5e7eb] dark:border-[#374151]">
                            <button className="bg-[#f3f4f6] dark:bg-[#374151] text-[#374151] dark:text-[#e5e7eb] border-none px-5 py-2 rounded-md text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#e5e7eb] dark:hover:bg-[#4b5563]" onClick={() => setShowNicknameModal(false)}>Close</button>
                            <button className="bg-[#007bff] text-white border-none px-5 py-2 rounded-md text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-[#0056b3]" onClick={handleSaveNickname}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
