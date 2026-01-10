import React from 'react';
import { Check } from 'lucide-react';

function PromoCard({ icon: Icon, title, subtitle, description, features, buttonText, buttonAction, isPrimary }) {
    return (
        <div className="bg-white dark:bg-[#141414] border border-[#eee] dark:border-[#333] rounded-lg p-8 flex flex-col items-center text-center flex-1 shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
            <div className="w-12 h-12 border border-[#eee] dark:border-[#333] rounded-xl flex items-center justify-center mb-6 bg-transparent dark:bg-[#262626]">
                <Icon size={24} className={isPrimary ? "text-[#007bff]" : "text-[#007bff]"} />
            </div>
            <h3 className="text-2xl font-bold m-0 mb-2 text-[#1a1a1a] dark:text-[#f3f4f6]">{title}</h3>
            <div className="text-[13px] text-[#007bff] font-semibold mb-2">{subtitle}</div>
            <p className="text-[13px] text-[#666] dark:text-[#9ca3af] mb-6 leading-relaxed max-w-[400px]">{description}</p>

            <div className="flex flex-col gap-3 mb-8 items-start w-full max-w-[300px]">
                {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#333] dark:text-[#e5e7eb]">
                        <div className="w-[18px] h-[18px] bg-[#cce5ff] dark:bg-[rgba(0,123,255,0.15)] rounded flex items-center justify-center shrink-0">
                            <Check size={12} className="text-[#007bff]" />
                        </div>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>

            <button
                className={`w-full p-3 rounded-md font-semibold cursor-pointer text-sm transition-all duration-200 ${isPrimary
                    ? 'bg-[#007bff] text-white border-none hover:bg-[#0056b3]'
                    : 'bg-white text-[#333] border border-[#ddd] hover:bg-[#f9f9f9] dark:bg-[#262626] dark:border-[#444] dark:text-[#e5e7eb] dark:hover:bg-[#333]'
                    }`}
                onClick={buttonAction}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default PromoCard;
