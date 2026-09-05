import React from 'react';
import { CardProps } from '../types/card';
import { RARITY_CONFIGS } from '../engine/rarity';
import { DemoDataBadge } from '../components/Badge';

export const CardTemplateTwo: React.FC<CardProps> = ({
  profile,
  className = '',
}) => {
  const displayAvatar = profile.avatar || '/f1.jpeg';
  const rarityConfig = RARITY_CONFIGS[profile.rarity];

  return (
    <div
      id="uxie-card-export-target"
      className={`card-container relative w-full max-w-[393px] aspect-[393/635] select-none rounded-2xl overflow-hidden shadow-2xl ${className}`}
    >
      {/* Background Image: /f1card.png */}
      <img
        src="/f1card.png"
        alt="F1 Card Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* Hologram Shimmer Layer */}
      <div className="hologram-prism absolute inset-0 pointer-events-none opacity-40 z-10"></div>

      {/* Dynamic Overlay Content Layer */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between p-4 sm:p-5">
        {/* Top PSA Label Overlay */}
        <div className="flex items-start justify-between bg-white/95 backdrop-blur-sm rounded-lg p-2.5 border-2 border-red-600 shadow-md">
          <div className="text-[10px] font-code font-black text-slate-950 leading-tight space-y-0.5">
            <div className="flex justify-between w-full">
              <span className="tracking-wide uppercase font-bold">2026 TOPPS CHROME F1 DEV</span>
              <span className="text-slate-700 font-bold">#001</span>
            </div>
            <div className="text-slate-900 font-black tracking-tight uppercase text-xs">
              {profile.displayName}
            </div>
            <div className="text-red-600 font-extrabold text-[9px] uppercase flex items-center gap-1">
              <span>SAPPHIRE ED - RED</span>
              <span>// {profile.rankTitle}</span>
            </div>
          </div>
          <div className="text-right flex flex-col items-end pl-2 border-l border-slate-300">
            <div className="text-[11px] font-code font-black text-red-600 leading-none">GEM MT</div>
            <div className="text-[24px] font-code font-black text-slate-950 leading-tight font-stat-counter">
              {profile.overallPower}
            </div>
          </div>
        </div>

        {/* Central Player Avatar Focus Box */}
        <div className="relative my-auto flex gap-2 items-center h-[240px] px-1">
          {/* Driver Ribbon Tag on Left */}
          <div className="w-8 h-full bg-gradient-to-b from-amber-400 via-red-600 to-amber-500 rounded-lg flex flex-col items-center justify-center p-1 border border-white/60 shadow-lg">
            <span className="font-headline font-black text-slate-950 text-[10px] tracking-[0.2em] uppercase -rotate-90 whitespace-nowrap drop-shadow-sm">
              GRAND PRIX WINNER // @{profile.username.toUpperCase()}
            </span>
          </div>

          {/* User Profile Avatar Image */}
          <div className="flex-1 h-full rounded-xl overflow-hidden border-2 border-amber-400/80 relative shadow-2xl bg-slate-950">
            <img
              src={displayAvatar}
              alt={profile.displayName}
              className="w-full h-full object-cover object-top filter contrast-[1.12] saturate-[1.12]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/f1.jpeg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

            {/* Platform Badge Overlay */}
            <div className="absolute top-2 left-2 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 backdrop-blur border border-amber-400/60 shadow">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="font-code text-[9px] font-black tracking-wider text-amber-300 uppercase">
                {profile.platform} 1/1
              </span>
            </div>

            {/* P1 Victory Tag */}
            <div className="absolute bottom-2 right-2 px-2.5 py-0.5 bg-black/85 backdrop-blur rounded text-[10px] font-code font-bold text-amber-300 border border-amber-400/60 shadow">
              {profile.overallPower} OVR P1
            </div>
          </div>
        </div>

        {/* Bottom Specs & Telemetry Bar */}
        <div className="bg-slate-950/90 backdrop-blur-md rounded-xl p-2.5 border border-amber-400/50 flex items-center justify-between text-xs font-code shadow-xl">
          <div>
            <div className="text-[9px] text-amber-300/90 font-mono uppercase font-bold">POWERTRAIN TELEMETRY</div>
            <div className="text-white font-black text-[11px] tracking-wide uppercase">
              {profile.stats.stat1.label}: {profile.stats.stat1.value} | {profile.stats.stat2.label}: {profile.stats.stat2.value}
            </div>
          </div>
          <div className="text-right">
            <div className="text-[9px] text-amber-300/90 font-mono uppercase font-bold">RATING</div>
            <div className="text-amber-300 font-black text-[11px] tracking-wider uppercase">
              PSA 10 {profile.rarity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
