import React from 'react';

function DailyPerformance() {
    const performanceData = [
        { day: 'Mon', profit: 250, loss: -100 },
        { day: 'Tue', profit: 180, loss: -50 },
        { day: 'Wed', profit: 320, loss: -150 },
        { day: 'Thu', profit: 210, loss: -80 },
        { day: 'Fri', profit: 400, loss: -120 },
    ];

    return (
        <div className="bg-[#1a1a2e] rounded-xl p-6 mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            <h3 className="text-white text-lg font-semibold mb-5">Daily Performance</h3>
            <div className="mb-5">
                {performanceData.map((day, index) => (
                    <div key={index} className="flex items-center mb-3 last:mb-0">
                        <span className="text-[#a0a0a0] text-sm font-medium w-10 mr-3">{day.day}</span>
                        <div className="flex-1 flex gap-1">
                            <div className="h-7 rounded-md flex items-center justify-end px-2 transition-all duration-300 bg-gradient-to-br from-[#10b981] to-[#059669]" style={{ width: `${(day.profit / 400) * 100}%` }}>
                                <span className="text-white text-xs font-semibold">${day.profit}</span>
                            </div>
                            {day.loss && (
                                <div className="h-7 rounded-md flex items-center justify-end px-2 transition-all duration-300 bg-gradient-to-br from-[#ef4444] to-[#dc2626]" style={{ width: `${(Math.abs(day.loss) / 400) * 100}%` }}>
                                    <span className="text-white text-xs font-semibold">${day.loss}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between pt-4 border-t border-white/10">
                <div className="text-center">
                    <span className="block text-[#a0a0a0] text-xs mb-1">Weekly Profit</span>
                    <span className="block text-base font-bold text-[#10b981]">$1,360</span>
                </div>
                <div className="text-center">
                    <span className="block text-[#a0a0a0] text-xs mb-1">Weekly Loss</span>
                    <span className="block text-base font-bold text-[#ef4444]">-$500</span>
                </div>
                <div className="text-center">
                    <span className="block text-[#a0a0a0] text-xs mb-1">Net</span>
                    <span className="block text-base font-bold text-[#6366f1]">$860</span>
                </div>
            </div>
        </div>
    );
}

export default DailyPerformance;
