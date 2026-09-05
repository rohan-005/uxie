import React from 'react';
import { CardProps } from '../types/card';
import { RARITY_CONFIGS } from '../engine/rarity';
import { DemoDataBadge } from '../components/Badge';

export const CardTemplateThree: React.FC<CardProps> = ({
  profile,
  className = '',
}) => {
  const rarityConfig = RARITY_CONFIGS[profile.rarity];
  const displayAvatar = profile.avatar || '/nba1.webp';

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
      className={`relative w-full max-w-[420px] aspect-[1/1.54] rounded-3xl bg-[#08050c] border-2 border-primary-container/80 shadow-[0_30px_70px_-10px_rgba(0,0,0,1),0_0_40px_rgba(222,115,156,0.35)] p-6 flex flex-col justify-between overflow-hidden group select-none ${className}`}
    >
      {/* Dark Obsidian & Metallic Accents */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary-container/20 via-secondary-container/10 to-transparent blur-2xl pointer-events-none"></div>
      <div className="absolute inset-0 foil-overlay pointer-events-none rounded-2xl"></div>

      {/* Top Header: Vertical Identity & Metallic Badge */}
      <div className="relative z-10 flex items-start justify-between border-b border-outline-variant/40 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-12 bg-gradient-to-b from-secondary to-primary-container rounded-sm shadow-[0_0_12px_#de739c]"></div>
          <div>
            <h2 className="font-headline text-2xl font-bold tracking-tight text-white uppercase leading-none">
              {profile.displayName}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-code text-label-code-sm text-primary font-bold tracking-widest uppercase">
                @{profile.username}
              </span>
              <span className="text-outline text-xs">•</span>
              <span className="font-code text-[11px] text-tertiary-fixed font-semibold uppercase">
                {profile.platform}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <div className={`px-3 py-1 rounded border font-code text-label-code-sm font-bold tracking-wider uppercase ${rarityConfig.badgeBg} ${rarityConfig.badgeText} ${rarityConfig.borderColor}`}>
            {profile.rarity}
          </div>
          <DemoDataBadge isDemoData={profile.isDemoData} />
        </div>
      </div>

      {/* Central High-Contrast Character Portrait */}
      <div className="relative z-10 my-4 flex items-center justify-between gap-4 flex-grow">
        {/* Left Side: Massive Power Score */}
        <div className="flex flex-col justify-center">
          <span className="font-code text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
            UXIE POWER
          </span>
          <span className="font-stat-counter text-5xl sm:text-6xl font-bold text-tertiary-fixed tracking-tighter leading-none drop-shadow-[0_0_20px_rgba(222,115,156,0.4)]">
            {profile.overallPower}
          </span>
          <span className="font-code text-[10px] text-primary uppercase tracking-widest font-semibold mt-1">
            {profile.rankTitle}
          </span>
        </div>

        {/* Right Side: High-Contrast Avatar Frame */}
        <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-primary-container shadow-[0_0_30px_rgba(222,115,156,0.35)] bg-[#040206] p-1">
          <img
            src={displayAvatar}
            alt={profile.displayName}
            className="w-full h-full object-cover rounded-xl filter contrast-110 saturate-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/nba1.webp';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none"></div>
        </div>
      </div>

      {/* Stat Section: Minimalist Metallic Bars */}
      <div className="relative z-10 space-y-2 p-3.5 rounded-xl bg-surface-container-lowest/90 border border-outline-variant/40">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-code text-label-code-sm">
          {statList.slice(0, 6).map((st, i) => (
            <div key={i} className="flex justify-between items-center border-b border-outline-variant/20 pb-1">
              <span className="text-on-surface-variant text-[11px] uppercase tracking-wider font-semibold truncate">
                {st.label}
              </span>
              <span className="font-bold text-tertiary-fixed">{st.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Signature Strip */}
      <div className="relative z-10 flex items-center justify-between pt-3 mt-2 border-t border-outline-variant/40 font-code text-[10px] text-on-surface-variant">
        <span className="uppercase tracking-widest text-primary font-bold">
          DARK PREMIUM COLLECTIBLE
        </span>
        <span className="text-tertiary font-bold tracking-wider">
          SERIES 01 // ID #0492
        </span>
      </div>
    </div>
  );
};
