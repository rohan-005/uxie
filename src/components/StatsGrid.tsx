import React from 'react';
import { PlatformProfile } from '../types/profile';

interface StatsGridProps {
  profile: PlatformProfile;
  className?: string;
}

export const StatsGrid: React.FC<StatsGridProps> = ({ profile, className = '' }) => {
  const statList = [
    profile.stats.stat1,
    profile.stats.stat2,
    profile.stats.stat3,
    profile.stats.stat4,
    profile.stats.stat5,
    profile.stats.stat6,
  ];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 ${className}`}>
      {statList.map((stat, idx) => (
        <div
          key={idx}
          className="p-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 flex flex-col justify-between hover:border-primary-container/80 transition-colors shadow-inner"
        >
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider font-semibold">
              {stat.label}
            </span>
            <span className="font-label-md text-label-md font-bold text-tertiary-fixed">
              {stat.value} <span className="text-[9px] text-outline">/ 100</span>
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden border border-outline-variant/30 mb-2">
            <div
              style={{ width: `${Math.max(5, Math.min(100, stat.score || stat.value))}%` }}
              className={`h-full transition-all duration-500 ${
                idx === 0
                  ? 'bg-primary-container shadow-[0_0_8px_rgba(222,115,156,0.5)]'
                  : idx === 1
                  ? 'bg-primary'
                  : idx === 2
                  ? 'bg-secondary-container'
                  : 'bg-tertiary-container'
              }`}
            ></div>
          </div>

          {stat.rawValue && (
            <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant pt-1 border-t border-outline-variant/40">
              <span className="text-outline">RAW RECORD:</span>
              <span className="font-bold text-tertiary-fixed">{stat.rawValue}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
