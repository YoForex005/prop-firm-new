import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function GoogleAuthMock() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading check
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const handleAccountSelect = (email) => {
        // Mark as authenticated with Google
        localStorage.setItem('has_google_login', 'true');
        // Simulate network delay
        setTimeout(() => {
            navigate('/');
        }, 800);
    };

    if (loading) return null;

    return (
        <div className="flex justify-center items-center h-screen font-sans bg-white text-[#202124]">
            <div className="border border-[#dadce0] rounded-lg pt-12 px-10 pb-9 w-[450px] text-center">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                    alt="Google"
                    height="24"
                    className="mb-4 inline-block h-6"
                />
                <h1 className="text-2xl font-normal m-0 mb-4">
                    Sign in
                </h1>
                <p className="text-base m-0 mb-10">
                    to continue to YoPips
                </p>

                {/* Mock Account List */}
                <div className="text-left">
                    <div
                        onClick={() => handleAccountSelect('user@example.com')}
                        className="flex items-center py-3 border-t border-[#dadce0] cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    >
                        <div className="w-8 h-8 rounded-full bg-[#8e24aa] text-white flex items-center justify-center mr-3 text-sm shrink-0">Y</div>
                        <div>
                            <div className="font-medium text-sm">Yo Forex</div>
                            <div className="text-[#5f6368] text-xs">yoforex@example.com</div>
                        </div>
                    </div>

                    <div
                        onClick={() => handleAccountSelect('another@example.com')}
                        className="flex items-center py-3 border-t border-[#dadce0] cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                    >
                        <div className="w-8 h-8 rounded-full bg-[#039be5] text-white flex items-center justify-center mr-3 text-sm shrink-0">A</div>
                        <div>
                            <div className="font-medium text-sm">Another User</div>
                            <div className="text-[#5f6368] text-xs">another.user@example.com</div>
                        </div>
                    </div>

                    <div
                        className="flex items-center py-3 border-t border-[#dadce0] cursor-pointer text-[#5f6368] text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                    >
                        <div className="mr-4">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>
                        </div>
                        Use another account
                    </div>
                </div>

                <p className="text-sm text-[#5f6368] mt-10">
                    To continue, Google will share your name, email address, and language preference with YoPips.
                </p>
            </div>
        </div>
    );
}

export default GoogleAuthMock;
