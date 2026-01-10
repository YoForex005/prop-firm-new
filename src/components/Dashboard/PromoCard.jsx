import React from 'react';
import { Check } from 'lucide-react';

function PromoCard({ icon: Icon, title, subtitle, description, features, buttonText, buttonAction, isPrimary }) {
    return (
        <div className="bg-white dark:bg-[#141414] border border-[#eee] dark:border-[#262626] rounded-2xl p-8 flex flex-col items-center text-center flex-1 shadow-lg shadow-black/5 dark:shadow-black/20 hover:shadow-xl transition-all duration-300">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${isPrimary ? 'bg-[#1d1d1f] dark:bg-white' : 'bg-[#f5f7fa] dark:bg-[#1a1a1a] border border-[#eee] dark:border-[#333]'}`}>
                <Icon size={24} className={isPrimary ? 'text-white dark:text-[#1d1d1f]' : 'text-[#1d1d1f] dark:text-white'} />
            </div>
            <h3 className="text-2xl font-bold m-0 mb-2 text-[#1d1d1f] dark:text-white">{title}</h3>
            <div className="text-[13px] text-[#6b7280] dark:text-[#9ca3af] font-medium mb-2">{subtitle}</div>
            <p className="text-[13px] text-[#86868b] dark:text-[#6b7280] mb-6 leading-relaxed max-w-[400px]">{description}</p>

            <div className="flex flex-col gap-3 mb-8 items-start w-full max-w-[300px]">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm font-medium text-[#4b5563] dark:text-[#e5e7eb]">
                        <div className="w-5 h-5 bg-[#f0f0f0] dark:bg-[#262626] rounded-md flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={12} className="text-[#1d1d1f] dark:text-white" />
                        </div>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            <button
                className={`w-full p-3.5 rounded-xl font-semibold cursor-pointer text-sm transition-all duration-200 ${isPrimary
                    ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] border-none hover:opacity-90 hover:shadow-lg'
                    : 'bg-[#f5f7fa] dark:bg-[#1a1a1a] text-[#1d1d1f] dark:text-white border-2 border-[#1d1d1f] dark:border-white hover:bg-[#eee] dark:hover:bg-[#262626]'
                    }`}
                onClick={buttonAction}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default PromoCard;
