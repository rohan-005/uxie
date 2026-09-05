import React from 'react';
import { CardProps } from '../types/card';
import { RARITY_CONFIGS } from '../engine/rarity';
import { DemoDataBadge } from '../components/Badge';

export const CardTemplateTwo: React.FC<CardProps> = ({
  profile,
  customAvatar,
  className = '',
}) => {
  const rarityConfig = RARITY_CONFIGS[profile.rarity];
  const displayAvatar = customAvatar || profile.avatar;

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
      className={`relative w-full max-w-[440px] aspect-[1/1.52] rounded-2xl bg-gradient-to-b from-[#1a1429] via-[#120d1c] to-[#0c0813] border-2 border-primary-container/70 shadow-[0_24px_50px_-10px_rgba(18,12,24,0.95),0_0_40px_rgba(222,115,156,0.35)] p-5 flex flex-col justify-between overflow-hidden group select-none ${className}`}
    >
      {/* Gaming Shield Neon Border Highlight */}
      <div className="absolute inset-0 foil-overlay pointer-events-none rounded-2xl"></div>

      {/* Top Header: Massive Rating & Shield Emblem */}
      <div className="relative z-10 flex items-start justify-between border-b border-outline-variant/30 pb-3">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center justify-center px-3.5 py-1.5 rounded-xl bg-gradient-to-br from-secondary-container to-primary-container text-on-primary shadow-lg border border-primary-container/60">
            <span className="font-stat-counter text-3xl font-bold leading-none">
              {profile.overallPower}
            </span>
            <span className="font-code text-[9px] uppercase font-bold tracking-wider mt-0.5">
              OVR
            </span>
          </div>
          <div>
            <span className="font-code text-label-code-sm text-primary font-bold tracking-wider block uppercase">
              {profile.platform.toUpperCase()} SHIELD
            </span>
            <span className="font-code text-[11px] text-tertiary-fixed font-semibold">
              {profile.rankTitle}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1">
          <div className={`px-3 py-1 rounded-lg border font-code text-label-code-sm font-bold ${rarityConfig.badgeBg} ${rarityConfig.badgeText} ${rarityConfig.borderColor}`}>
            {profile.rarity}
          </div>
          <DemoDataBadge isDemoData={profile.isDemoData} />
        </div>
      </div>

      {/* Central Gaming Character / Profile Frame */}
      <div className="relative z-10 my-3 flex flex-col items-center justify-center flex-grow">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-primary-container/80 shadow-[0_0_25px_rgba(222,115,156,0.4)] p-1 bg-surface-container-lowest">
          <img
            src={displayAvatar}
            alt={profile.displayName}
            className="w-full h-full object-cover rounded-xl"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Username Banner */}
        <div className="mt-3 text-center">
          <h2 className="font-headline text-2xl font-bold text-tertiary-fixed tracking-tight leading-tight">
            {profile.displayName}
          </h2>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-surface-container border border-outline-variant/40 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
            <span className="font-code text-[11px] text-primary font-semibold">
              @{profile.username}
            </span>
          </div>
        </div>
      </div>

      {/* 6 Stats Gaming Matrix */}
      <div className="relative z-10 grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-surface-container-lowest/80 border border-outline-variant/30 backdrop-blur-md">
        {statList.map((st, i) => (
          <div key={i} className="flex justify-between items-center font-code text-label-code-sm px-2 py-1 rounded bg-surface-container/60 border border-outline-variant/20">
            <span className="text-on-surface-variant font-medium uppercase text-[11px] truncate">
              {st.label}
            </span>
            <span className="font-bold text-tertiary-fixed text-sm">
              {st.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Identity Strip */}
      <div className="relative z-10 flex items-center justify-between pt-3 mt-2 border-t border-outline-variant/30 font-code text-[10px] text-on-surface-variant">
        <span>UXIE COMPETITIVE SHIELD // v2.4</span>
        <span className="text-primary font-bold uppercase tracking-wider flex items-center gap-1">
          <span>COMPETITIVE DECK</span>
          <span className="material-symbols-outlined text-[12px]">swords</span>
        </span>
      </div>
    </div>
  );
};
