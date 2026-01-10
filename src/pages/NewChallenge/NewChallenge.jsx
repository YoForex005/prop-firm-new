import React, { useState, useEffect } from 'react';
import { Sliders, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { flexyService } from '../../services/flexyService';

function NewChallenge() {
    const location = useLocation();
    const navigate = useNavigate();
    const [step, setStep] = useState('two-step');
    const [model, setModel] = useState('funding-pips');
    const [size, setSize] = useState('100000');
    const [platform, setPlatform] = useState('matchtrader');
    const [isLoading, setIsLoading] = useState(false);
    const [profitTarget, setProfitTarget] = useState('8%');

    useEffect(() => {
        if (location.state?.mode === 'free-trial') {
            setStep('free-trial');
        }
    }, [location.state]);

    const prices = {
        '5000': 32,
        '10000': 60,
        '25000': 139,
        '50000': 239,
        '100000': 529
    };

    const currentPrice = prices[size] || 0;

    const handleCheckout = async () => {
        if (step === 'free-trial') {
            try {
                setIsLoading(true);
                const timestamp = new Date().getTime();
                const dummyUser = {
                    name: `Demo User ${timestamp}`,
                    email: `demo${timestamp}@test.com`,
                    mobile: `9${String(timestamp).slice(0, 9)}`,
                    country: 'INDIA',
                    password: 'DemoUser@123'
                };

                // Call real MT5 API with user-selected balance
                const account = await flexyService.createFreeTrial({
                    ...dummyUser,
                    balance: parseInt(size) // Use selected account size
                });

                // Save to localStorage for Dashboard to pickup
                const challengeData = {
                    login: account.login,
                    password: account.password,
                    investorPassword: account.investorPassword,
                    server: account.server || 'FlexyMarkets-Server',
                    platform: 'MT5',
                    status: 'Active',
                    balance: parseInt(size),
                    type: 'Free Trial',
                    tier: 'Standard',
                    created: new Date().toISOString()
                };
                localStorage.setItem('activeChallenge', JSON.stringify(challengeData));

                alert(`Free Trial Created Successfully!\n\nLogin: ${account.login}\nPassword: ${account.password}\nServer: ${challengeData.server}`);
                navigate('/');
            } catch (error) {
                console.error(error);
                alert('Failed to create Free Trial account. Please try again. ' + error.message);
            } finally {
                setIsLoading(false);
            }
        } else {
            // Logic for regular payment flow
            alert('Proceeding to payment gateway...');
            // navigate('/payment'); // Example
        }
    };

    return (
        <div className="max-w-[1320px] mx-auto px-8 pb-16 animate-[fadeIn_0.4s_ease-out] text-[#1a1a1a] dark:text-[#f3f4f6]">
            <div className="flex items-center gap-4 mb-8 pt-6">
                <div className="font-bold text-xl">P</div>{/* Placeholder */}
                <h2 className="text-[28px] font-bold m-0 tracking-tight text-[#1a1a1a] dark:text-[#f3f4f6]">New Challenge</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 items-start">
                <div className="flex flex-col gap-10">
                    {/* Challenge Type */}
                    <div className="bg-white dark:bg-[#141414] rounded-xl p-7 border border-[#e5e7eb] dark:border-[#333] shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex flex-col gap-10">
                        <div>
                            <h3 className="text-base font-semibold m-0 mb-1.5 text-[#1a1a1a] dark:text-[#f3f4f6]">Challenge Type</h3>
                            <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] m-0 mb-5 leading-relaxed">Choose the type of challenge you want to take</p>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
                                <label className={`flex items-center gap-3 p-4 px-[18px] bg-white dark:bg-[#262626] border-[1.5px] rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d1d5db] dark:hover:border-[#4b5563] relative ${step === 'one-step' ? 'border-[--primary-color] bg-[rgba(59,130,246,0.05)] dark:bg-[rgba(59,130,246,0.1)] shadow-[0_0_0_1px_rgba(59,130,246,0.1)] translate-y-0' : 'border-[#e5e7eb] dark:border-[#333]'}`} onClick={() => setStep('one-step')}>
                                    <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${step === 'one-step' ? 'border-[--primary-color]' : 'border-[#d1d5db] dark:border-[#4b5563]'}`}>
                                        {step === 'one-step' && <div className="w-3 h-3 bg-[--primary-color] rounded-full animate-[scaleIn_0.2s_ease-out_forwards]"></div>}
                                    </div>
                                    <span className="text-[15px] font-medium text-[#1a1a1a] dark:text-[#e5e7eb]">One Step</span>
                                </label>
                                <label className={`flex items-center gap-3 p-4 px-[18px] bg-white dark:bg-[#262626] border-[1.5px] rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d1d5db] dark:hover:border-[#4b5563] relative ${step === 'two-step' ? 'border-[--primary-color] bg-[rgba(59,130,246,0.05)] dark:bg-[rgba(59,130,246,0.1)] shadow-[0_0_0_1px_rgba(59,130,246,0.1)] translate-y-0' : 'border-[#e5e7eb] dark:border-[#333]'}`} onClick={() => setStep('two-step')}>
                                    <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${step === 'two-step' ? 'border-[--primary-color]' : 'border-[#d1d5db] dark:border-[#4b5563]'}`}>
                                        {step === 'two-step' && <div className="w-3 h-3 bg-[--primary-color] rounded-full animate-[scaleIn_0.2s_ease-out_forwards]"></div>}
                                    </div>
                                    <span className="text-[15px] font-medium text-[#1a1a1a] dark:text-[#e5e7eb]">Two Step</span>
                                </label>
                                <label className={`flex items-center gap-3 p-4 px-[18px] bg-white dark:bg-[#262626] border-[1.5px] rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d1d5db] dark:hover:border-[#4b5563] relative ${step === 'zero' ? 'border-[--primary-color] bg-[rgba(59,130,246,0.05)] dark:bg-[rgba(59,130,246,0.1)] shadow-[0_0_0_1px_rgba(59,130,246,0.1)] translate-y-0' : 'border-[#e5e7eb] dark:border-[#333]'}`} onClick={() => setStep('zero')}>
                                    <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${step === 'zero' ? 'border-[--primary-color]' : 'border-[#d1d5db] dark:border-[#4b5563]'}`}>
                                        {step === 'zero' && <div className="w-3 h-3 bg-[--primary-color] rounded-full animate-[scaleIn_0.2s_ease-out_forwards]"></div>}
                                    </div>
                                    <span className="text-[15px] font-medium text-[#1a1a1a] dark:text-[#e5e7eb]">Zero</span>
                                </label>
                            </div>
                        </div>

                        {/* Model */}
                        <div>
                            <h3 className="text-base font-semibold m-0 mb-1.5 text-[#1a1a1a] dark:text-[#f3f4f6]">Model</h3>
                            <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] m-0 mb-5 leading-relaxed">Choose the trading model</p>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
                                <label className={`flex items-center gap-3 p-4 px-[18px] bg-white dark:bg-[#262626] border-[1.5px] rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d1d5db] dark:hover:border-[#4b5563] relative ${model === 'funding-pips' ? 'border-[--primary-color] bg-[rgba(59,130,246,0.05)] dark:bg-[rgba(59,130,246,0.1)] shadow-[0_0_0_1px_rgba(59,130,246,0.1)] translate-y-0' : 'border-[#e5e7eb] dark:border-[#333]'}`} onClick={() => setModel('funding-pips')}>
                                    <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${model === 'funding-pips' ? 'border-[--primary-color]' : 'border-[#d1d5db] dark:border-[#4b5563]'}`}>
                                        {model === 'funding-pips' && <div className="w-3 h-3 bg-[--primary-color] rounded-full animate-[scaleIn_0.2s_ease-out_forwards]"></div>}
                                    </div>
                                    <span className="text-[15px] font-medium text-[#1a1a1a] dark:text-[#e5e7eb]">YoPips</span>
                                </label>
                                <label className={`flex items-center gap-3 p-4 px-[18px] bg-white dark:bg-[#262626] border-[1.5px] rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d1d5db] dark:hover:border-[#4b5563] relative ${model === 'funding-pips-pro' ? 'border-[--primary-color] bg-[rgba(59,130,246,0.05)] dark:bg-[rgba(59,130,246,0.1)] shadow-[0_0_0_1px_rgba(59,130,246,0.1)] translate-y-0' : 'border-[#e5e7eb] dark:border-[#333]'}`} onClick={() => setModel('funding-pips-pro')}>
                                    <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${model === 'funding-pips-pro' ? 'border-[--primary-color]' : 'border-[#d1d5db] dark:border-[#4b5563]'}`}>
                                        {model === 'funding-pips-pro' && <div className="w-3 h-3 bg-[--primary-color] rounded-full animate-[scaleIn_0.2s_ease-out_forwards]"></div>}
                                    </div>
                                    <span className="text-[15px] font-medium text-[#1a1a1a] dark:text-[#e5e7eb]">YoPips Pro</span>
                                </label>
                            </div>
                        </div>

                        {/* Customise Trading Rules */}
                        <div className="bg-gradient-to-br from-[#f8fafc] to-[#eff6ff] dark:from-[#111827] dark:to-[#0d0d0d] border border-[#e2e8f0] dark:border-[#333] rounded-2xl p-7">
                            <div className="flex gap-4 mb-6">
                                <div className="text-[--primary-color] dark:text-[#60a5fa] bg-white dark:bg-[#262626] p-2.5 rounded-[10px] shadow-[0_2px_4px_rgba(0,0,0,0.02)] h-fit">
                                    <Sliders size={18} />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold m-0 mb-1.5 text-[#1a1a1a] dark:text-[#f3f4f6]">Customise Trading Rules</h3>
                                    <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] m-0 leading-relaxed">Adjust your challenge parameters to match your trading style</p>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center max-md:flex-col max-md:items-start max-md:gap-4">
                                    <div>
                                        <h4 className="font-semibold text-sm mb-1 text-[#1a1a1a] dark:text-[#e5e7eb]">Profit Target</h4>
                                        <p className="text-sm text-[#6b7280] dark:text-[#9ca3af]">Choose options for profit target</p>
                                    </div>
                                    <div className="flex bg-[#e2e8f0] dark:bg-[#111827] p-1 rounded-[10px]">
                                        <button
                                            className={`flex items-center gap-2 px-4 py-2 border-2 border-transparent rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 ${profitTarget === '8%' ? 'bg-white dark:bg-[#374151] text-[--primary-color] dark:text-white border-[--primary-color] shadow-[0_4px_6px_rgba(0,0,0,0.05)]' : 'bg-transparent text-[#64748b] dark:text-[#94a3b8]'}`}
                                            onClick={() => setProfitTarget('8%')}
                                        >
                                            <div className={`w-3.5 h-3.5 rounded-full ${profitTarget === '8%' ? "bg-[--primary-color] animate-[scaleIn_0.2s_ease-out_forwards]" : "border-2 border-[#cbd5e1] dark:border-[#64748b]"}`}></div> 8% <span className={`text-[10px] px-1.5 py-0.5 rounded ml-1 uppercase font-bold ${profitTarget === '8%' ? 'bg-[#f1f5f9] dark:bg-[#374151] text-[#64748b] dark:text-[#94a3b8]' : 'bg-[#f1f5f9] dark:bg-[#374151] text-[#64748b] dark:text-[#94a3b8]'}`}>Default</span>
                                        </button>
                                        <button
                                            className={`flex items-center gap-2 px-4 py-2 border-2 border-transparent rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 ${profitTarget === '10%' ? 'bg-white dark:bg-[#374151] text-[--primary-color] dark:text-white border-[--primary-color] shadow-[0_4px_6px_rgba(0,0,0,0.05)]' : 'bg-transparent text-[#64748b] dark:text-[#94a3b8]'}`}
                                            onClick={() => setProfitTarget('10%')}
                                        >
                                            <div className={`w-3.5 h-3.5 rounded-full ${profitTarget === '10%' ? "bg-[--primary-color] animate-[scaleIn_0.2s_ease-out_forwards]" : "border-2 border-[#cbd5e1] dark:border-[#64748b]"}`}></div> 10% <span className="text-[11px] text-[#ef4444] ml-1">+$40.00</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account Size */}
                        <div>
                            <h3 className="text-base font-semibold m-0 mb-1.5 text-[#1a1a1a] dark:text-[#f3f4f6]">Account Size</h3>
                            <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] m-0 mb-5 leading-relaxed">Choose your preferred account size</p>
                            <div className="grid grid-cols-3 gap-3">
                                {['5000', '10000', '25000', '50000', '100000'].map(val => (
                                    <label key={val} className={`flex flex-col items-center justify-center text-center gap-2 p-4 bg-white dark:bg-[#262626] border-[1.5px] rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d1d5db] dark:hover:border-[#4b5563] relative ${size === val ? 'border-[--primary-color] bg-[rgba(59,130,246,0.05)] dark:bg-[rgba(59,130,246,0.1)] shadow-[0_0_0_1px_rgba(59,130,246,0.1)] translate-y-0' : 'border-[#e5e7eb] dark:border-[#333]'}`} onClick={() => setSize(val)}>
                                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${size === val ? 'border-[--primary-color]' : 'border-[#d1d5db] dark:border-[#4b5563]'}`}>
                                            {size === val && <div className="w-3 h-3 bg-[--primary-color] rounded-full animate-[scaleIn_0.2s_ease-out_forwards]"></div>}
                                        </div>
                                        <span className="text-[15px] font-medium text-[#1a1a1a] dark:text-[#e5e7eb]">${parseInt(val).toLocaleString()}.00</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Trading Platform */}
                        <div>
                            <h3 className="text-base font-semibold m-0 mb-1.5 text-[#1a1a1a] dark:text-[#f3f4f6]">Trading Platform</h3>
                            <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] m-0 mb-5 leading-relaxed">Choose your preferred trading platform</p>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3">
                                {['MetaTrader 5', 'MatchTrader', 'CTrader +$20.00'].map(p => {
                                    const val = p.split(' ')[0].toLowerCase();
                                    return (
                                        <label key={p} className={`flex items-center gap-3 p-4 px-[18px] bg-white dark:bg-[#262626] border-[1.5px] rounded-[10px] cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d1d5db] dark:hover:border-[#4b5563] relative ${platform === val ? 'border-[--primary-color] bg-[rgba(59,130,246,0.05)] dark:bg-[rgba(59,130,246,0.1)] shadow-[0_0_0_1px_rgba(59,130,246,0.1)] translate-y-0' : 'border-[#e5e7eb] dark:border-[#333]'}`} onClick={() => setPlatform(val)}>
                                            <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${platform === val ? 'border-[--primary-color]' : 'border-[#d1d5db] dark:border-[#4b5563]'}`}>
                                                {platform === val && <div className="w-3 h-3 bg-[--primary-color] rounded-full animate-[scaleIn_0.2s_ease-out_forwards]"></div>}
                                            </div>
                                            <span className="text-[15px] font-medium text-[#1a1a1a] dark:text-[#e5e7eb]">{p}</span>
                                        </label>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[520px] flex flex-col gap-6 max-md:max-w-full">
                    {/* Billing Details Stub */}
                    <div className="bg-white dark:bg-[#141414] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#333] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                        <div className="flex justify-between items-center cursor-pointer pb-4">
                            <h3 className="text-lg font-bold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Billing Details</h3>
                            <ChevronDown size={16} />
                        </div>
                        <div className="flex flex-col gap-5 mt-0 pb-0">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-4">
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[#1a1a1a] dark:text-[#e5e7eb] mb-0.5">First Name</label>
                                    <input type="text" defaultValue="Yo" className="w-full h-11 px-3.5 border border-[#e5e7eb] dark:border-[#333] rounded-lg text-[15px] text-[#111827] dark:text-white bg-white dark:bg-[#262626] outline-none transition-all duration-200 focus:border-[--primary-color] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]" />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[#1a1a1a] dark:text-[#e5e7eb] mb-0.5">Last Name</label>
                                    <input type="text" defaultValue="Forex" className="w-full h-11 px-3.5 border border-[#e5e7eb] dark:border-[#333] rounded-lg text-[15px] text-[#111827] dark:text-white bg-white dark:bg-[#262626] outline-none transition-all duration-200 focus:border-[--primary-color] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]" />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-sm font-semibold text-[#1a1a1a] dark:text-[#e5e7eb] mb-0.5">Country</label>
                                <div className="relative w-full">
                                    <select defaultValue="" className="w-full h-11 px-3.5 border border-[#e5e7eb] dark:border-[#333] rounded-lg text-[15px] text-[#111827] dark:text-white bg-white dark:bg-[#262626] outline-none transition-all duration-200 focus:border-[--primary-color] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)] appearance-none cursor-pointer">
                                        <option value="" disabled></option>
                                        <option value="US">United States</option>
                                        <option value="UK">United Kingdom</option>
                                        <option value="IN">India</option>
                                    </select>
                                    <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-2">
                                <label className="text-sm font-semibold text-[#1a1a1a] dark:text-[#e5e7eb] mb-0.5">Billing Address</label>
                                <input type="text" defaultValue="123, Billing Street" className="w-full h-11 px-3.5 border border-[#e5e7eb] dark:border-[#333] rounded-lg text-[15px] text-[#111827] dark:text-white bg-white dark:bg-[#262626] outline-none transition-all duration-200 focus:border-[--primary-color] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]" />
                            </div>

                            <div className="flex gap-5 max-md:flex-col max-md:gap-4">
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[#1a1a1a] dark:text-[#e5e7eb] mb-0.5">City</label>
                                    <input type="text" defaultValue="New York" className="w-full h-11 px-3.5 border border-[#e5e7eb] dark:border-[#333] rounded-lg text-[15px] text-[#111827] dark:text-white bg-white dark:bg-[#262626] outline-none transition-all duration-200 focus:border-[--primary-color] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]" />
                                </div>
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-[#1a1a1a] dark:text-[#e5e7eb] mb-0.5">ZIP / Postal Code</label>
                                    <input type="text" defaultValue="10001" className="w-full h-11 px-3.5 border border-[#e5e7eb] dark:border-[#333] rounded-lg text-[15px] text-[#111827] dark:text-white bg-white dark:bg-[#262626] outline-none transition-all duration-200 focus:border-[--primary-color] focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]" />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Coupon Code */}
                    <div className="bg-white dark:bg-[#141414] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#333] shadow-[0_1px_3px_rgba(0,0,0,0.06)] max-md:p-5">
                        <h3 className="text-lg font-bold m-0 mb-2 text-[#1a1a1a] dark:text-[#f3f4f6]">Coupon Code</h3>
                        <p className="text-sm text-[#6b7280] dark:text-[#9ca3af] m-0 mb-5 leading-relaxed">Enter a coupon code to get a discount on your challenge</p>
                        <div className="flex gap-3 items-stretch max-md:flex-col">
                            <input type="text" placeholder="Enter coupon code" className="flex-1 p-2.5 px-4 border border-[#e5e7eb] dark:border-[#333] rounded-lg outline-none transition-colors duration-200 text-[15px] bg-white dark:bg-[#262626] text-[#111827] dark:text-white h-11 box-border focus:border-[--primary-color] focus:shadow-[0_0_0_2px_rgba(59,130,246,0.1)]" />
                            <button className="w-28 max-md:w-full h-11 bg-[--primary-color] dark:bg-[#1f2937] text-white border-none rounded-lg cursor-pointer font-semibold text-sm transition-all duration-200 hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] dark:hover:bg-[#374151]">Apply</button>
                        </div>
                    </div>


                    {/* Order Summary */}
                    <div className="bg-white dark:bg-[#141414] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#333] shadow-[0_1px_3px_rgba(0,0,0,0.06)] max-md:p-5 dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                        <h3 className="text-lg font-bold mb-6 text-[#1a1a1a] dark:text-[#f3f4f6]">Order Summary</h3>
                        <div className="flex justify-between items-baseline mb-3 text-[15px] font-semibold text-[#1a1a1a] dark:text-[#e5e7eb]">
                            <span>${parseInt(size).toLocaleString()}.00 — {step === 'free-trial' ? 'Free Trial' : (step === 'two-step' ? 'Two Step' : (step === 'zero' ? 'Zero' : 'One Step'))} {model === 'funding-pips' ? 'YoPips' : 'Pro'}</span>
                            <span className="text-[--primary-color]">${step === 'free-trial' ? 0 : currentPrice}.00</span>
                        </div>
                        <div className="text-[13px] text-[#6b7280] dark:text-[#9ca3af] pb-6">
                            Platform: {platform === 'metatrader' ? 'MetaTrader 5' : 'MatchTrader'}
                        </div>

                        <div className="h-px bg-[#f3f4f6] dark:bg-[#374151] mb-6"></div>

                        <div className="flex justify-between items-center mb-8">
                            <span className="text-[#1a1a1a] dark:text-[#e5e7eb] font-semibold">Total</span>
                            <span className="text-3xl font-extrabold text-[--primary-color] tracking-tight">${step === 'free-trial' ? 0 : currentPrice}.00</span>
                        </div>

                        <div className="bg-[#f8fafc] dark:bg-[#262626] p-5 rounded-xl border border-[#e2e8f0] dark:border-[#333] mb-6">
                            <label className="flex items-start gap-2.5 text-[13px] font-semibold mb-3 cursor-pointer leading-[1.4] text-[#1a1a1a] dark:text-[#e5e7eb]">
                                <input type="checkbox" defaultChecked className="mt-1" />
                                <span className="checkmark"></span>
                                <span>I agree with all the following terms:</span>
                            </label>
                            <ul className="m-0 pl-5 text-[13px] text-[#64748b] leading-[1.6]">
                                <li className="mb-1">I have read and agreed to the <a href="#" className="text-[--primary-color] no-underline font-medium">Terms of Use</a>.</li>
                                <li className="mb-1">All information provided is correct and matches government-issued ID.</li>
                                <li className="mb-1">I have read and agree with the <a href="#" className="text-[--primary-color] no-underline font-medium">Terms & Conditions</a>.</li>
                                <li>I confirm that I am not a U.S. citizen or resident.</li>
                            </ul>
                        </div>

                        <button
                            className="w-full bg-[--primary-color] text-white border-none p-4 rounded-xl font-semibold text-[15px] cursor-pointer shadow-[0_8px_20px_rgba(59,130,246,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(59,130,246,0.35)] disabled:bg-[#94a3b8] disabled:transform-none disabled:shadow-none disabled:cursor-not-allowed"
                            onClick={handleCheckout}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Processing...' : (step === 'free-trial' ? 'Start Free Trial' : 'Continue to Payment')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewChallenge;
