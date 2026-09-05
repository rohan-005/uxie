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
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3.5 ${className}`}>
      {statList.map((stat, idx) => (
        <div
          key={idx}
          className="p-3 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/30 flex flex-col justify-between hover:border-primary-container/40 transition-colors"
        >
          <div className="flex justify-between items-center mb-1.5">
            <span className="font-code text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
              {stat.label}
            </span>
            <span className="font-code text-[11px] font-bold text-tertiary-fixed">
              {stat.value} <span className="text-[9px] text-outline">/ 100</span>
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 w-full bg-surface-container-lowest rounded-sm overflow-hidden border border-outline-variant/30 p-[1px] mb-1.5">
            <div
              style={{ width: `${Math.max(5, Math.min(100, stat.value))}%` }}
              className="h-full bg-gradient-to-r from-secondary-container via-primary-container to-primary rounded-sm transition-all duration-500"
            ></div>
          </div>

          {stat.rawValue && (
            <div className="flex items-center justify-between font-code text-[10px] text-tertiary-fixed-dim">
              <span>Telemetry:</span>
              <span className="font-semibold text-on-surface">{stat.rawValue}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
