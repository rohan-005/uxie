import React from 'react';
import { CardProps } from '../types/card';

export const CardTemplateThree: React.FC<CardProps> = ({
  profile,
  className = '',
}) => {
  const displayAvatar = profile.avatar || '/nba1.webp';

  return (
    <div
      id="uxie-card-export-target"
      className={`card-container relative w-full max-w-[360px] select-none ${className}`}
    >
      <div className="bg-[#128a8c] rounded-2xl p-3 border-[5px] border-[#087779] shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative aspect-[1/1.48] flex flex-col justify-between overflow-hidden">
        {/* Side Rail Stripes */}
        <div className="absolute top-0 left-0 w-2 h-full bg-[#0a585a] opacity-80 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-2 h-full bg-[#0a585a] opacity-80 pointer-events-none"></div>

        {/* Inner Orange Frame Box */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between border-2 border-[#ea580c] p-2 bg-[#0e6f71] rounded-lg">
          {/* Top Diamond Header */}
          <div className="flex items-center justify-between">
            <div className="px-2 py-0.5 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 border border-amber-100 rounded-sm text-slate-950 font-serif font-black text-[11px] tracking-tight shadow flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">diamond</span> UPPER D•E•C•K
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-amber-300 text-[16px]">sports_basketball</span>
              <span className="font-code text-[9.5px] text-amber-200 uppercase tracking-widest font-extrabold bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-400/30">
                VINTAGE EDITION
              </span>
            </div>
          </div>

          {/* Central Vintage Action Photo Frame */}
          <div className="relative mx-auto w-full my-1.5 flex-1 rounded border-2 border-orange-500 overflow-hidden shadow-2xl bg-black min-h-[200px]">
            <img
              src={displayAvatar}
              alt={profile.displayName}
              className="w-full h-full object-cover filter contrast-[1.08] saturate-[1.05]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/nba1.webp';
              }}
            />
            {/* Vertical Name Tag Overlay */}
            <div className="absolute top-2 right-2 px-1.5 py-3 rounded bg-black/75 border border-amber-400/40 shadow flex items-center justify-center">
              <span className="font-headline font-black text-[10px] tracking-widest text-amber-300 uppercase -rotate-90 whitespace-nowrap">
                MICHAEL {profile.username.toUpperCase()}
              </span>
            </div>
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-blue-900/90 text-white font-headline text-[11px] font-black tracking-widest uppercase border border-amber-300 shadow-xl whitespace-nowrap">
              DATA DUNK
            </div>
          </div>

          {/* Player Banner */}
          <div className="bg-[#ea580c] text-slate-950 px-2.5 py-1 rounded font-headline font-black tracking-wider text-[11.5px] flex items-center justify-between uppercase shadow border border-amber-200">
            <span className="truncate pr-1 font-bold">
              {profile.displayName.toUpperCase()}
            </span>
            <span className="text-[10px] bg-slate-950 text-amber-400 px-1 py-0.5 rounded font-code font-bold shrink-0">
              #23
            </span>
          </div>

          {/* Footer Quote */}
          <div className="pt-1 text-center">
            <p className="font-code text-[9.5px] gold-foil-text font-bold tracking-tight">
              1991-2026 All-Time Legend: Public profile telemetry &amp; world-record commits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
