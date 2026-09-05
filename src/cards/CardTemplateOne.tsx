import React from 'react';
import { CardProps } from '../types/card';
import { RARITY_CONFIGS } from '../engine/rarity';
import { DemoDataBadge } from '../components/Badge';

export const CardTemplateOne: React.FC<CardProps> = ({
  profile,
  className = '',
}) => {
  const rarityConfig = RARITY_CONFIGS[profile.rarity];
  const displayAvatar = profile.avatar || '/fifa.jpeg';

  const statList = [
    profile.stats.stat1,
    profile.stats.stat2,
    profile.stats.stat3,
    profile.stats.stat4,
    profile.stats.stat5,
    profile.stats.stat6,
  ];

  return (
    <div
      id="uxie-card-export-target"
      className={`relative w-full max-w-[420px] aspect-[1/1.54] rounded-3xl bg-gradient-to-b from-[#0b192e] via-[#0e223d] to-[#050c19] border-4 border-[#e2b051]/80 shadow-[0_24px_60px_-10px_rgba(4,13,26,0.95),0_0_40px_rgba(226,176,81,0.3)] p-5 flex flex-col justify-between overflow-hidden group select-none ${className}`}
    >
      {/* Decorative Gold & Neon Crest Framing Overlay */}
      <div className="absolute inset-0 border-2 border-[#f3d082]/30 rounded-2xl pointer-events-none m-1"></div>
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Section: Large Numerical Rating & Shield Emblem */}
      <div className="relative z-10 flex items-start justify-between border-b border-[#e2b051]/40 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center justify-center px-4 py-1.5 rounded-xl bg-gradient-to-b from-[#f3d082] to-[#b8860b] text-[#0b192e] shadow-lg border border-[#fff0c4]">
            <span className="font-stat-counter text-4xl font-extrabold leading-none tracking-tight">
              {profile.overallPower}
            </span>
            <span className="font-code text-[9px] uppercase font-bold tracking-widest leading-none mt-0.5">
              POWER
            </span>
          </div>
          <div>
            <span className="font-code text-label-code-sm text-[#f3d082] font-bold tracking-wider uppercase block">
              {profile.platform.toUpperCase()} COMPETITOR
            </span>
            <span className="font-headline text-lg font-bold text-white tracking-tight leading-tight">
              {profile.rankTitle}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <div className={`px-3 py-1 rounded-lg border font-code text-label-code-sm font-bold uppercase tracking-wider ${rarityConfig.badgeBg} ${rarityConfig.badgeText} ${rarityConfig.borderColor}`}>
            {profile.rarity}
          </div>
          <DemoDataBadge isDemoData={profile.isDemoData} />
        </div>
      </div>

      {/* Central Profile Image Area */}
      <div className="relative z-10 my-2 flex flex-col items-center justify-center flex-grow">
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#e2b051] shadow-[0_0_30px_rgba(226,176,81,0.35)] p-1 bg-[#050c19]">
          <img
            src={displayAvatar}
            alt={profile.displayName}
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/fifa.jpeg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b192e] via-transparent to-transparent opacity-60 pointer-events-none"></div>
        </div>

        {/* Name & Username Banner */}
        <div className="mt-3 text-center">
          <h2 className="font-headline text-2xl font-extrabold text-white tracking-tight uppercase leading-none">
            {profile.displayName}
          </h2>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#0a192f] border border-[#e2b051]/40 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f3d082]"></span>
            <span className="font-code text-[11px] text-[#f3d082] font-semibold">
              @{profile.username}
            </span>
          </div>
        </div>
      </div>

      {/* Six Gaming Statistics Matrix */}
      <div className="relative z-10 grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#040d1a]/85 border border-[#e2b051]/30 backdrop-blur-md">
        {statList.map((st, i) => (
          <div
            key={i}
            className="flex items-center justify-between font-code text-label-code-sm px-2.5 py-1.5 rounded-lg bg-[#0b192e]/80 border border-[#e2b051]/20"
          >
            <span className="text-[#a0aec0] font-semibold uppercase text-[10px] truncate">
              {st.label}
            </span>
            <span className="font-bold text-[#f3d082] text-sm ml-2">
              {st.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Identity Strip */}
      <div className="relative z-10 flex items-center justify-between pt-2.5 mt-2 border-t border-[#e2b051]/30 font-code text-[10px] text-[#a0aec0]">
        <span className="tracking-wider">COMPETITIVE DECK // CARD 01</span>
        <span className="text-[#f3d082] font-bold uppercase tracking-wider flex items-center gap-1">
          <span>UXIE POWER</span>
          <span className="material-symbols-outlined text-[12px]">swords</span>
        </span>
      </div>
    </div>
  );
};
