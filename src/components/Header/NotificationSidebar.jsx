import React from 'react';
import { X, AlertTriangle, Key, Newspaper } from 'lucide-react';

const notifications = [
    {
        id: 1,
        type: 'important',
        icon: <AlertTriangle size={20} className="text-[#6b7280]" />,
        title: 'Important updates',
        text: "Don't miss these important Trading Updates!",
        time: '3 hours ago',
        unread: true,
        image: 'https://placehold.co/120x60/1a1a1a/FFF?text=IMPORTANT\\nUPDATES', // Placeholder matching dark bg
        action: 'Check it out',
        link: '#'
    },
    {
        id: 2,
        type: 'info',
        icon: <Key size={20} className="text-[#6b7280] -rotate-45" />,
        title: 'Free Trial',
        text: "Thank you for taking the Free Trial. Your trading account login credentials can be found directly in your Client Area or Account Metrix. Trade safe!",
        time: 'yesterday',
        unread: false,
        action: 'Credentials',
        link: '#'
    },
    {
        id: 3,
        type: 'news',
        icon: <Newspaper size={20} className="text-[#6b7280]" />,
        title: 'New Year Flash Sale 20% OFF!',
        text: "Kickstart the New Year and enjoy a special discount on all Yo Pips Challenges. Offer valid until 2 January, 12:00 CET.",
        time: 'last week',
        unread: true,
        image: 'https://placehold.co/100x100/000033/00ffff?text=20%', // Placeholder blue glow
        action: 'Claim Discount',
        link: '#'
    }
];

function NotificationSidebar({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black/30 z-[998] animate-[fadeIn_0.2s_ease-in-out]" onClick={onClose}></div>
            <div className={`fixed top-0 right-0 w-[380px] h-screen bg-[#f9fafb] dark:bg-[#1f2937] z-[999] shadow-[-4px_0_16px_rgba(0,0,0,0.1)] flex flex-col p-6 overflow-y-auto animate-[slideIn_0.3s_ease-out] border-l border-[#e5e7eb] dark:border-[#374151] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-[#111827] dark:text-[#f3f4f6] m-0">Notifications</h3>
                    <button className="bg-transparent border-none text-[13px] font-semibold text-[#111827] dark:text-[#e5e7eb] cursor-pointer underline decoration-1 hover:text-[#2563eb] transition-colors">Mark all as read</button>
                    {/* Optional close button if needed, overlay serves well though */}
                </div>

                <div className="flex flex-col gap-4">
                    {notifications.map(notif => (
                        <div key={notif.id} className="bg-white dark:bg-[#374151] border border-[#e5e7eb] dark:border-[#4b5563] rounded-lg p-5 shadow-sm transition-colors hover:border-[#d1d5db]">
                            <div className="flex gap-3 items-start">
                                <div className="mt-0.5 shrink-0">
                                    {notif.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <span className={`text-[13px] font-semibold leading-[1.4] ${notif.type === 'important' ? 'text-[#0369a1] dark:text-[#38bdf8]' : 'text-[#0369a1] dark:text-[#38bdf8]'}`}>{notif.title}</span>
                                        {notif.unread && <span className="w-2 h-2 bg-[#007bff] rounded-full shrink-0 mt-1.5 ml-2"></span>}
                                    </div>
                                    <p className="text-[13px] text-[#374151] dark:text-[#d1d5db] m-0 leading-[1.5] inline">{notif.text}</p>
                                    <span className="block text-xs text-[#6b7280] dark:text-[#9ca3af] mt-2">{notif.time}</span>
                                </div>
                            </div>

                            {notif.image && (
                                <div className="my-4 flex justify-center bg-[#f3f4f6] dark:bg-[#1f2937] rounded overflow-hidden">
                                    <img src={notif.image} alt="Notification" className="rounded max-w-full h-auto object-cover" />
                                </div>
                            )}

                            {notif.action && (
                                <button className="w-full bg-[#007bff] hover:bg-[#0069d9] text-white border-none rounded-md py-2.5 text-sm font-semibold cursor-pointer mt-2 transition-colors">{notif.action}</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default NotificationSidebar;
