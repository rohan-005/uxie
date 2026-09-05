import React from 'react';

interface BadgeProps {
  isDemoData: boolean;
  className?: string;
}

export const DemoDataBadge: React.FC<BadgeProps> = ({ isDemoData, className = '' }) => {
  if (isDemoData) {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-950/60 border border-amber-500/40 text-amber-300 font-code text-[10px] uppercase font-bold tracking-wider shadow-sm ${className}`}
        title="Using isolated demo/fallback profile telemetry"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        <span>DEMO DATA</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-code text-[10px] uppercase font-bold tracking-wider shadow-sm ${className}`}
      title="Verified live profile telemetry fetched via public API"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
      <span>LIVE DATA</span>
    </div>
  );
};
