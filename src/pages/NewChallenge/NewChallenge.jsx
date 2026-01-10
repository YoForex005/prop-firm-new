import React, { useState, useEffect } from 'react';
import {
    Check, ChevronDown, Info, Shield, HelpCircle,
    CreditCard, User, Building2, Globe
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { countries } from '../../data/countries';
import { flexyService } from '../../services/flexyService';

// --- Constants & Data ---

const CURRENCIES = [
    { code: 'USD', symbol: '$', label: 'USD' },
    { code: 'EUR', symbol: '€', label: 'EUR' },
    { code: 'CZK', symbol: 'Kč', label: 'CZK' },
    { code: 'GBP', symbol: '£', label: 'GBP' },
    { code: 'AUD', symbol: 'A$', label: 'AUD' },
    { code: 'CAD', symbol: 'C$', label: 'CAD' },
    { code: 'CHF', symbol: '₣', label: 'CHF' },
];

const BALANCES = [
    { value: 10000, label: '10,000' },
    { value: 25000, label: '25,000' },
    { value: 50000, label: '50,000' },
    { value: 100000, label: '100,000', recommended: true },
    { value: 200000, label: '200,000' },
];

const ACCOUNT_TYPES = [
    {
        id: 'standard',
        name: 'Yo Pips',
        leverage: '1:100',
        description: 'Standard trading conditions'
    },
    {
        id: 'swing',
        name: 'Yo Pips Swing',
        leverage: '1:30',
        description: 'Weekend holding allowed'
    },
];

const PLATFORMS = [
    { id: 'mt5', name: 'MetaTrader 5', type: 'MetaQuotes' },
    { id: 'mt4', name: 'MetaTrader 4', type: 'MetaQuotes' },
    { id: 'ctrader', name: 'cTrader', type: 'Spotware' },
    { id: 'dxtrade', name: 'DXTrade', type: 'Devexperts' },
];

const PRICES = {
    'USD': { 10000: 155, 25000: 250, 50000: 345, 100000: 540, 200000: 1080 },
    'EUR': { 10000: 155, 25000: 250, 50000: 345, 100000: 540, 200000: 1080 },
    'GBP': { 10000: 135, 25000: 220, 50000: 300, 100000: 480, 200000: 950 },
    // Fallback for others
    'DEFAULT': { 10000: 155, 25000: 250, 50000: 345, 100000: 540, 200000: 1080 }
};

function NewChallenge() {
    const navigate = useNavigate();

    // --- State ---
    const [currency, setCurrency] = useState('USD');
    const [balance, setBalance] = useState(100000);
    const [accountType, setAccountType] = useState('standard');
    const [platform, setPlatform] = useState('mt5');

    const [billingType, setBillingType] = useState('person'); // person | company
    const [billingInfo, setBillingInfo] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        street: '', city: '', zip: '', country: 'US',
        companyName: '', vatId: ''
    });

    const [agreements, setAgreements] = useState({
        terms: false,
        policy: false
    });

    const [isLoading, setIsLoading] = useState(false);

    // --- Helpers ---
    const getPrice = () => {
        const currencyPrices = PRICES[currency] || PRICES['DEFAULT'];
        const basePrice = currencyPrices[balance] || 0;
        return basePrice; // Can add add-ons logic here
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        if (!agreements.terms || !agreements.policy) {
            alert('Please agree to the Terms and Conditions and Refund Policy.');
            return;
        }

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            alert('Proceeding to payment gateway...');
            // navigate('/payment', ...);
        }, 1500);
    };

    const selectedCurrency = CURRENCIES.find(c => c.code === currency);

    return (
        <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0d] font-sans text-[#1a1a1a] dark:text-[#f3f4f6] pb-20">
            <div className="max-w-[1240px] mx-auto px-6 pt-8">

                {/* Header */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 text-xs text-[#6b7280] dark:text-[#9ca3af] mb-4">
                        <span>Trader</span>
                        <span>/</span>
                        <span className="text-[#1a1a1a] dark:text-[#f3f4f6]">Yo Pips Challenge</span>
                    </div>

                    <h1 className="text-3xl font-bold text-[#1a1a1a] dark:text-[#f3f4f6] mb-2">Start Yo Pips Challenge</h1>
                    <p className="text-sm text-[#6b7280] dark:text-[#9ca3af]">
                        Show us your trading skills. Pass the Evaluation Process and receive the Yo Pips Account!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">

                    {/* LEFT COLUMN: Configuration */}
                    <div className="flex flex-col gap-10">

                        {/* Account Balance */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a1a1a] dark:text-[#f3f4f6] mb-4">Account Balance</h2>

                            {/* Currency Selector */}
                            <div className="mb-6">
                                <label className="block text-xs font-semibold text-[#6b7280] dark:text-[#9ca3af] mb-2.5">Trading Account Currency:</label>
                                <div className="flex flex-wrap gap-3">
                                    {CURRENCIES.map(c => (
                                        <button
                                            key={c.code}
                                            onClick={() => setCurrency(c.code)}
                                            className={`
                                                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border
                                                ${currency === c.code
                                                    ? 'bg-[#007aff] text-white border-[#007aff] shadow-md shadow-blue-500/20'
                                                    : 'bg-white dark:bg-[#1f2937] text-[#374151] dark:text-[#e5e7eb] border-[#e5e7eb] dark:border-[#374151] hover:bg-[#f9fafb] dark:hover:bg-[#374151]'
                                                }
                                            `}
                                        >
                                            {/* Flag placeholder - using text/emoji for simplicity as per requirements */}
                                            <span>{c.code === 'USD' ? '🇺🇸' : c.code === 'EUR' ? '🇪🇺' : c.code === 'GBP' ? '🇬🇧' : c.code === 'CZK' ? '🇨🇿' : c.code === 'AUD' ? '🇦🇺' : c.code === 'CAD' ? '🇨🇦' : '🇨🇭'}</span>
                                            {c.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Balance Selector */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                                {BALANCES.map(b => (
                                    <button
                                        key={b.value}
                                        onClick={() => setBalance(b.value)}
                                        className={`
                                            relative flex flex-col items-start p-4 rounded-xl border text-left transition-all duration-200
                                            ${balance === b.value
                                                ? 'bg-[#007aff] text-white border-[#007aff] shadow-lg shadow-blue-500/20'
                                                : 'bg-white dark:bg-[#1f2937] border-[#e5e7eb] dark:border-[#374151] hover:border-[#d1d5db] dark:hover:border-[#4b5563]'
                                            }
                                        `}
                                    >
                                        {b.recommended && (
                                            <div className="absolute -top-2.5 -right-2 bg-[#ff3b30] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                                                Best Value
                                            </div>
                                        )}
                                        <div className="flex justify-between w-full mb-1">
                                            <span className={`text-[10px] ${balance === b.value ? 'text-blue-100' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}>Balance</span>
                                            {balance === b.value ? (
                                                <div className="w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
                                                    <Check size={10} className="text-[#007aff]" strokeWidth={3} />
                                                </div>
                                            ) : (
                                                <div className="w-3.5 h-3.5 rounded-full border border-[#d1d5db] dark:border-[#4b5563]"></div>
                                            )}
                                        </div>
                                        <span className={`text-base font-bold ${balance === b.value ? 'text-white' : 'text-[#1a1a1a] dark:text-[#f3f4f6]'}`}>
                                            {selectedCurrency.symbol} {b.label}
                                        </span>
                                        <div className={`mt-3 pt-3 w-full border-t border-dashed ${balance === b.value ? 'border-white/30' : 'border-[#e5e7eb] dark:border-[#374151]'}`}>
                                            <span className={`text-[10px] block mb-0.5 ${balance === b.value ? 'text-blue-100' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}>One Time Payment</span>
                                            <span className={`text-xs font-bold ${balance === b.value ? 'text-white' : 'text-[#1a1a1a] dark:text-[#f3f4f6]'}`}>
                                                €{PRICES['EUR'][b.value]}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-4 p-3 bg-[#e0f1ff] dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 rounded-lg flex items-start gap-2.5">
                                <Info size={16} className="text-[#007aff] shrink-0 mt-0.5" />
                                <p className="text-xs text-[#007aff] dark:text-blue-400 m-0">
                                    <strong>Special Deal:</strong> The $100,000 Yo Pips Challenge is now available for just €540.00. This deal is limited to all clients who currently do not have an active $100,000 Yo Pips Challenge (or the equivalent in another currency).
                                </p>
                            </div>
                        </section>

                        {/* Account Type */}
                        <section>
                            <h2 className="text-lg font-bold text-[#1a1a1a] dark:text-[#f3f4f6] mb-4">Account Type</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {ACCOUNT_TYPES.map(type => (
                                    <button
                                        key={type.id}
                                        onClick={() => setAccountType(type.id)}
                                        className={`
                                            flex items-start p-4 rounded-xl border text-left transition-all duration-200
                                            ${accountType === type.id
                                                ? 'bg-[#007aff] text-white border-[#007aff] shadow-md'
                                                : 'bg-[#f9fafb] dark:bg-[#1f2937] border-transparent hover:bg-[#e5e7eb] dark:hover:bg-[#374151]'
                                            }
                                        `}
                                    >
                                        <div className="flex-1">
                                            <h3 className={`font-bold text-sm mb-1 ${accountType === type.id ? 'text-white' : 'text-[#1a1a1a] dark:text-[#f3f4f6]'}`}>
                                                {type.name}
                                            </h3>
                                            <div className={`text-[11px] mb-2 ${accountType === type.id ? 'text-blue-100' : 'text-[#6b7280] dark:text-[#9ca3af]'}`}>
                                                {type.description}
                                            </div>
                                            <div className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-bold uppercase
                                                ${accountType === type.id ? 'bg-white/20 text-white' : 'bg-[#e5e7eb] dark:bg-[#374151] text-[#6b7280] dark:text-[#9ca3af]'}
                                            `}>
                                                {type.leverage} leverage
                                            </div>
                                        </div>
                                        {accountType === type.id ? (
                                            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shrink-0">
                                                <Check size={10} className="text-[#007aff] stroke-[3]" />
                                            </div>
                                        ) : (
                                            <div className="w-4 h-4 rounded-full border border-[#d1d5db] dark:border-[#4b5563] shrink-0"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Platform */}
                        <section>
                            <div className="flex justify-between items-end mb-4">
                                <h2 className="text-lg font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">Platform</h2>
                                <a href="#" className="text-xs text-[#007aff] hover:underline font-medium">Which platform?</a>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {PLATFORMS.map(p => (
                                    <button
                                        key={p.id}
                                        onClick={() => setPlatform(p.id)}
                                        className={`
                                            h-[60px] flex items-center justify-center rounded-lg border transition-all duration-200
                                            ${platform === p.id
                                                ? 'bg-[#007aff] text-white border-[#007aff] shadow-md'
                                                : 'bg-[#f3f4f6] dark:bg-[#1f2937] border-transparent text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#e5e7eb] dark:hover:bg-[#374151]'
                                            }
                                        `}
                                    >
                                        <span className="font-bold text-xs">{p.name}</span>
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Billing Info */}
                        <section>
                            <div className="mb-6">
                                <h2 className="text-lg font-bold text-[#1a1a1a] dark:text-[#f3f4f6] mb-1">Billing info</h2>
                                <p className="text-xs text-[#6b7280] dark:text-[#9ca3af]">Before you get started, we need some basic information about you.</p>
                            </div>

                            <div className="flex gap-6 mb-6">
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input
                                        type="radio"
                                        checked={billingType === 'person'}
                                        onChange={() => setBillingType('person')}
                                        className="w-4 h-4 text-[#007aff] focus:ring-[#007aff]"
                                    />
                                    <span className="text-sm font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">Person</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer select-none">
                                    <input
                                        type="radio"
                                        checked={billingType === 'company'}
                                        onChange={() => setBillingType('company')}
                                        className="w-4 h-4 text-[#007aff] focus:ring-[#007aff]"
                                    />
                                    <span className="text-sm font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">Company</span>
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">First name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={billingInfo.firstName}
                                        onChange={handleInputChange}
                                        className="h-[42px] px-3.5 bg-[#f3f4f6] dark:bg-[#1f2937] border-none rounded text-sm text-[#1a1a1a] dark:text-[#f3f4f6] focus:ring-2 focus:ring-[#007aff]/50 outline-none"
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">Last name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={billingInfo.lastName}
                                        onChange={handleInputChange}
                                        className="h-[42px] px-3.5 bg-[#f3f4f6] dark:bg-[#1f2937] border-none rounded text-sm text-[#1a1a1a] dark:text-[#f3f4f6] focus:ring-2 focus:ring-[#007aff]/50 outline-none"
                                        placeholder="Enter your last name"
                                    />
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">Email</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            value={billingInfo.email}
                                            onChange={handleInputChange}
                                            className="w-full h-[42px] px-3.5 bg-[#f3f4f6] dark:bg-[#1f2937] border-none rounded text-sm text-[#1a1a1a] dark:text-[#f3f4f6] focus:ring-2 focus:ring-[#007aff]/50 outline-none pr-10"
                                            placeholder="Enter your email"
                                        />
                                        <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]">
                                            <Shield size={14} />
                                        </span>
                                    </div>
                                </div>

                                <div className="md:col-span-2 flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">Phone Number</label>
                                    <div className="flex gap-2">
                                        <div className="h-[42px] w-[80px] bg-[#f3f4f6] dark:bg-[#1f2937] rounded flex items-center justify-center text-sm font-medium">
                                            🇮🇳 +91
                                        </div>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={billingInfo.phone}
                                            onChange={handleInputChange}
                                            className="flex-1 h-[42px] px-3.5 bg-[#f3f4f6] dark:bg-[#1f2937] border-none rounded text-sm text-[#1a1a1a] dark:text-[#f3f4f6] focus:ring-2 focus:ring-[#007aff]/50 outline-none"
                                            placeholder="123 456 7890"
                                        />
                                    </div>
                                </div>

                                <h3 className="md:col-span-2 text-sm font-bold text-[#1a1a1a] dark:text-[#f3f4f6] mt-2 mb-0">Address</h3>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={billingInfo.city}
                                        onChange={handleInputChange}
                                        className="h-[42px] px-3.5 bg-[#f3f4f6] dark:bg-[#1f2937] border-none rounded text-sm text-[#1a1a1a] dark:text-[#f3f4f6] focus:ring-2 focus:ring-[#007aff]/50 outline-none"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">Street</label>
                                    <input
                                        type="text"
                                        name="street"
                                        value={billingInfo.street}
                                        onChange={handleInputChange}
                                        className="h-[42px] px-3.5 bg-[#f3f4f6] dark:bg-[#1f2937] border-none rounded text-sm text-[#1a1a1a] dark:text-[#f3f4f6] focus:ring-2 focus:ring-[#007aff]/50 outline-none"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">Postal Code</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        value={billingInfo.zip}
                                        onChange={handleInputChange}
                                        className="h-[42px] px-3.5 bg-[#f3f4f6] dark:bg-[#1f2937] border-none rounded text-sm text-[#1a1a1a] dark:text-[#f3f4f6] focus:ring-2 focus:ring-[#007aff]/50 outline-none"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">Country of residence</label>
                                    <div className="relative">
                                        <select
                                            name="country"
                                            value={billingInfo.country}
                                            onChange={handleInputChange}
                                            className="w-full h-[42px] px-3.5 bg-[#f3f4f6] dark:bg-[#1f2937] border-none rounded text-sm text-[#1a1a1a] dark:text-[#f3f4f6] focus:ring-2 focus:ring-[#007aff]/50 outline-none appearance-none cursor-pointer"
                                        >
                                            {countries.map(c => (
                                                <option key={c.code} value={c.code}>{c.name}</option>
                                            ))}
                                        </select>
                                        <ChevronDown size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Terms & Conditions */}
                        <section>
                            <h2 className="text-sm font-bold text-[#1a1a1a] dark:text-[#f3f4f6] mb-3">Terms & Conditions</h2>
                            <div className="h-[200px] overflow-y-auto bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded-lg p-6 mb-4 shadow-inner">
                                <div className="flex justify-center mb-6">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <span className="bg-[#1a1a1a] text-white w-8 h-8 flex items-center justify-center rounded text-xs">YP</span>
                                        Yo Pips
                                    </h3>
                                </div>
                                <div className="text-[10px] text-[#374151] dark:text-[#9ca3af] text-center leading-relaxed">
                                    <p className="font-bold mb-2">YO PIPS GENERAL TERMS AND CONDITIONS</p>
                                    <p className="mb-4">LAST UPDATED ON 1 JANUARY 2026</p>
                                    <p className="max-w-[80%] mx-auto">
                                        We are Yo Pips Evaluation Global s.r.o., a company established and existing under the laws of the United States, with its registered office...
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Help Banner */}
                        <div className="bg-[#eff6ff] dark:bg-blue-900/10 rounded-lg p-5 flex items-center justify-between border border-blue-100 dark:border-blue-900/30">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#bfdbfe] dark:bg-blue-800 rounded-full flex items-center justify-center text-[#007aff] dark:text-blue-200">
                                    <HelpCircle size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-[#1a1a1a] dark:text-[#f3f4f6] m-0">Need some help?</h4>
                                    <p className="text-xs text-[#6b7280] dark:text-[#9ca3af] m-0 mt-0.5">We are here for you, Write us a message</p>
                                </div>
                            </div>
                            <button className="px-4 py-2 bg-white dark:bg-[#1f2937] text-[#007aff] dark:text-blue-400 text-xs font-semibold border border-[#e5e7eb] dark:border-[#374151] rounded hover:bg-[#f9fafb] transition-all">
                                Chat with us
                            </button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Summary (Sticky) */}
                    <div className="sticky top-6">
                        <div className="bg-white dark:bg-[#141414] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#e5e7eb] dark:border-[#262626] overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-[#1a1a1a] dark:text-[#f3f4f6] mb-6">Summary</h3>

                                <div className="flex items-start gap-3 mb-6">
                                    <div className="w-10 h-10 bg-[#e0f1ff] dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-[#007aff]">
                                        <Globe size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm text-[#1a1a1a] dark:text-[#f3f4f6]">Yo Pips Challenge</h4>
                                        <p className="text-xs text-[#6b7280] dark:text-[#9ca3af]">${balance.toLocaleString()} account</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 mb-6 pb-6 border-b border-[#f3f4f6] dark:border-[#374151]">
                                    <div className="flex justify-between text-xs">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Trading Account Currency:</span>
                                        <span className="font-semibold flex items-center gap-1.5 text-[#1a1a1a] dark:text-[#f3f4f6]">
                                            🇺🇸 {currency}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Platform:</span>
                                        <span className="font-semibold text-right text-[#1a1a1a] dark:text-[#f3f4f6]">{PLATFORMS.find(p => p.id === platform)?.name}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Account Type:</span>
                                        <span className="font-semibold text-right text-[#1a1a1a] dark:text-[#f3f4f6]">{ACCOUNT_TYPES.find(t => t.id === accountType)?.name}</span>
                                    </div>
                                    <div className="flex justify-between text-xs">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Price:</span>
                                        <span className="font-semibold text-right">€{getPrice()}.00</span>
                                    </div>
                                    <div className="flex justify-between text-xs text-[#ef4444] font-medium">
                                        <span>Special Deal - 19% OFF</span>
                                        <span>€1080.00</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-baseline mb-8">
                                    <span className="text-sm font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">Total:</span>
                                    <div className="text-right">
                                        <div className="text-xs text-[#9ca3af] line-through mb-0.5">€1080.00</div>
                                        <div className="text-2xl font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">€{getPrice()}.00</div>
                                        <div className="text-[10px] text-[#9ca3af]">Incl. VAT</div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 mb-6">
                                    <label className="flex items-start gap-2.5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={agreements.terms}
                                            onChange={(e) => setAgreements(prev => ({ ...prev, terms: e.target.checked }))}
                                            className="mt-1 w-4 h-4 rounded border-gray-300 text-[#007aff] focus:ring-[#007aff]"
                                        />
                                        <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] leading-snug">
                                            I declare that I have read and agree with <a href="#" className="underline text-[#1a1a1a] dark:text-[#f3f4f6]">Terms and Conditions</a> and I declare that the country of residence stated in the above Order is my current country of residence
                                        </span>
                                    </label>
                                    <label className="flex items-start gap-2.5 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={agreements.policy}
                                            onChange={(e) => setAgreements(prev => ({ ...prev, policy: e.target.checked }))}
                                            className="mt-1 w-4 h-4 rounded border-gray-300 text-[#007aff] focus:ring-[#007aff]"
                                        />
                                        <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] leading-snug">
                                            I declare that I have read and agree with <a href="#" className="underline text-[#1a1a1a] dark:text-[#f3f4f6]">Cancellation and Refund Policy</a>
                                        </span>
                                    </label>
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className="w-full py-3.5 bg-[#007aff] text-white font-bold rounded-lg hover:bg-[#0062cc] transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-blue-500/30"
                                >
                                    {isLoading ? 'Processing...' : 'Continue to Payment'}
                                </button>
                            </div>

                            <div className="bg-[#f9fafb] dark:bg-[#1f2937] p-4 text-center border-t border-[#e5e7eb] dark:border-[#262626]">
                                <div className="flex items-center justify-center gap-2 text-[10px] text-[#6b7280] dark:text-[#9ca3af] font-medium">
                                    <Shield size={12} className="text-[#007aff]" />
                                    <span>Trusted by over 3 million traders worldwide</span>
                                    <span className="text-[#007aff]">$500M+ in rewards</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Global Footer */}
                <div className="mt-20 pt-10 border-t border-[#e5e7eb] dark:border-[#262626] text-center pb-10">
                    <div className="flex justify-center gap-6 mb-8">
                        <a href="#" className="text-xs font-semibold text-[#6b7280] dark:text-[#9ca3af] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6]">Cookie settings</a>
                        <a href="#" className="text-xs font-semibold text-[#6b7280] dark:text-[#9ca3af] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6]">Privacy policy</a>
                    </div>
                    <p className="max-w-[800px] mx-auto text-[10px] text-[#9ca3af] leading-relaxed mb-4 text-justify">
                        All information provided on this site is intended solely for the study purposes related to trading on financial markets and does not serve in any way as a specific Investment recommendation, business recommendation, investment opportunity analysis or similar general recommendation regarding the trading of Investment Instruments. Trading in financial markets is a high-risk activity and it is advised not to risk more than one can afford to lose! Yo Pips Evaluation Global s.r.o./Yo Pips Evaluation US s.r.o. does not provide any of the investment services listed in the Capital Market Undertakings Act No. 256/2004 Coll. The information on this site is not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local laws or regulations. Yo Pips Evaluation Global s.r.o./Yo Pips Evaluation US s.r.o. and Yo Pips s.r.o., legal address: Purkynova 2121/3, Prague, 11000, Czech Republic are not a broker and do not accept deposits. The offered technical solution for the Yo Pips platforms and data feed is powered by institutional liquidity providers.
                    </p>
                    <p className="text-[10px] text-[#9ca3af]">2026 © Copyright - Yo Pips.com Made with ❤️ for trading</p>
                </div>

            </div>
        </div>
    );
}

export default NewChallenge;
