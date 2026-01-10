import React from 'react';
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
        <div className={`min-h-screen flex flex-col items-center justify-center p-5 relative bg-[#f7f9fc] dark:bg-[#0d0d0d]`}>
            {/* Top Right Theme Toggle */}
            <div className="absolute top-6 right-6 cursor-pointer text-[#666] dark:text-[#ccc]" onClick={toggleTheme}>
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </div>

            <div className="w-full max-w-[440px] text-center">
                <div className="flex items-center justify-center gap-2 text-xl font-semibold mb-6 text-[var(--text-color)] dark:text-white">
                    <div className="w-6 h-6 border-2 border-[var(--text-color)] dark:border-white rounded-full flex items-center justify-center text-sm font-bold">F</div> {/* Placeholder for actual logo */}
                    <span>YoPips</span>
                    <span className="text-[10px] self-start">®</span>
                </div>

                <h1 className="text-lg font-semibold mb-8 text-[var(--text-color)] dark:text-white">Sign in to your account</h1>

                <div className="text-left">
                    <div className="mb-4">
                        <label className="block text-[13px] font-semibold text-[var(--text-color)] dark:text-white mb-2">Email address</label>
                        <input
                            type="email"
                            className="w-full p-2.5 px-3 border border-[#e0e0e0] dark:border-[#333] rounded-md text-sm outline-none transition-colors duration-200 bg-white dark:bg-[#262626] text-[var(--text-color)] dark:text-white focus:border-[#2563eb]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-[13px] font-semibold text-[var(--text-color)] dark:text-white mb-2">Password</label>
                        <input
                            type="password"
                            className="w-full p-2.5 px-3 border border-[#e0e0e0] dark:border-[#333] rounded-md text-sm outline-none transition-colors duration-200 bg-white dark:bg-[#262626] text-[var(--text-color)] dark:text-white focus:border-[#2563eb]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-between items-center mb-6 text-[13px]">
                        <label className="flex items-center gap-1.5 cursor-pointer text-[var(--gray-text)] dark:text-[#9ca3af]">
                            <input type="checkbox" />
                            <span>Remember Me</span>
                        </label>
                        <a href="#" className="text-[#2563eb] no-underline font-medium">Forgot Password?</a>
                    </div>

                    {/* Fake Cloudflare Widget */}
                    <div className="bg-[#f9f9f9] dark:bg-[#262626] border border-[#e0e0e0] dark:border-[#333] p-2 px-3 rounded flex items-center mb-6 relative h-[50px]">
                        <div className="w-6 h-6 flex items-center justify-center border-2 border-[#e0e0e0] dark:border-[#333] rounded-full mr-3">
                            <Check size={20} color="#10b981" />
                        </div>
                        <span className="text-sm text-[var(--text-color)] dark:text-white">Success!</span>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-right text-[9px] text-[#999] leading-[1.2]">
                            <span className="font-bold block text-[8px]">CLOUDFLARE</span>
                            <div className="cursor-pointer">
                                <span>Privacy</span> • <span>Terms</span>
                            </div>
                        </div>
                    </div>

                    <button className="w-full bg-[#2563eb] text-white border-none p-2.5 rounded-lg text-sm font-semibold cursor-pointer mb-4 shadow-[0_4px_6px_rgba(37,99,235,0.2)]" onClick={handleSignIn}>Sign in</button>

                    <div className="text-center text-[11px] text-[#999] mb-4 relative">OR</div>

                    <button className="w-full bg-white dark:bg-[#141414] text-[#333] dark:text-[#f3f4f6] border border-[#e0e0e0] dark:border-[#333] p-2.5 rounded-lg text-sm font-medium cursor-pointer flex items-center justify-center gap-2 mb-6" onClick={handleGoogleLogin}>
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" width="18" height="18" />
                        Continue with Google
                    </button>

                    <div className="text-center text-[13px] text-[var(--gray-text)] dark:text-[#9ca3af]">
                        Ready to trade? <Link to="/signup" className="text-[#2563eb] no-underline font-semibold">Create your account</Link>
                    </div>
                </div>
            </div>

            {/* Help Widget Button */}
            <button className="fixed bottom-6 right-6 flex items-center gap-3 bg-transparent border-none cursor-pointer">
                <span className="bg-white dark:bg-[#141414] px-4 py-2 rounded-[20px] text-[13px] shadow-[0_2px_10px_rgba(0,0,0,0.1)] text-[#333] dark:text-white">Hi. Need any help?</span>
                <div className="w-[50px] h-[50px] bg-[#1e3a8a] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.2)] text-white">
                    <MessageSquare size={24} color="white" fill="white" />
                </div>
            </button>
        </div>
    );
}

export default Login;
