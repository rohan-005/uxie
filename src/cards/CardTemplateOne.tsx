import React from 'react';
import { CardProps } from '../types/card';
import { RARITY_CONFIGS } from '../engine/rarity';
import { DemoDataBadge } from '../components/Badge';

export const CardTemplateOne: React.FC<CardProps> = ({
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
      className={`relative w-full max-w-[440px] aspect-[1/1.52] rounded-2xl bg-[#150f1d] border-2 border-primary-container/60 shadow-[0_24px_50px_-10px_rgba(18,12,24,0.9),0_0_35px_rgba(222,115,156,0.3)] p-5 flex flex-col justify-between overflow-hidden group select-none ${className}`}
    >
      {/* Dynamic Glass Foil Overlay */}
      <div className="absolute inset-0 foil-overlay pointer-events-none rounded-2xl"></div>
      <div className="absolute -inset-[1px] rounded-2xl border border-outline-variant/40 pointer-events-none"></div>

      {/* Graded Slab Top Header */}
      <div className="relative z-10 bg-surface-container-lowest/90 border border-outline-variant/40 rounded-xl p-3 flex items-center justify-between shadow-inner">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center border border-primary-container/50 text-primary">
            <span className="material-symbols-outlined text-[20px]">verified</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-code text-label-code-sm text-primary font-bold tracking-wider uppercase">
                {profile.rarity} GRADED SLAB
              </span>
              <DemoDataBadge isDemoData={profile.isDemoData} />
            </div>
            <span className="font-code text-[10px] text-on-surface-variant tracking-wider block">
              UXIE SPEC // {profile.platform.toUpperCase()} SERIES 01
            </span>
          </div>
        </div>
        <div className="px-3 py-1 rounded-lg bg-primary-container/20 border border-primary-container/60 text-right">
          <div className="font-stat-counter text-xl font-bold text-tertiary-fixed leading-none">
            {profile.overallPower}
          </div>
          <div className="font-code text-[9px] text-primary uppercase font-semibold">POWER</div>
        </div>
      </div>

      {/* Central Profile Avatar Section */}
      <div className="relative z-10 my-3 rounded-xl border border-outline-variant/40 bg-surface-container-lowest/80 p-3.5 flex flex-col justify-between flex-grow">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-primary-container/60 shadow-lg">
              <img
                src={displayAvatar}
                alt={profile.displayName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-tertiary-fixed leading-tight">
                {profile.displayName}
              </h3>
              <p className="font-code text-label-code-sm text-primary font-semibold">
                @{profile.username}
              </p>
              <span className="inline-block mt-0.5 font-code text-[10px] text-on-surface-variant uppercase tracking-wider">
                {profile.rankTitle}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end justify-center">
            <div className={`px-2.5 py-1 rounded-lg border font-code text-[11px] font-bold ${rarityConfig.badgeBg} ${rarityConfig.badgeText} ${rarityConfig.borderColor}`}>
              {profile.rarity}
            </div>
          </div>
        </div>

        {/* 6 Stats Mini Grid */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-outline-variant/30">
          {statList.map((st, i) => (
            <div
              key={i}
              className="p-1.5 rounded-md bg-surface-container/70 border border-outline-variant/30 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-[10px] font-code">
                <span className="text-on-surface-variant truncate">{st.label}</span>
                <span className="font-bold text-tertiary-fixed">{st.value}</span>
              </div>
              <div className="h-1.5 w-full bg-surface-container-lowest rounded-sm overflow-hidden border border-outline-variant/20 mt-1">
                <div
                  style={{ width: `${Math.max(5, Math.min(100, st.value))}%` }}
                  className="h-full bg-gradient-to-r from-secondary-container to-primary-container rounded-sm"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer Metal Plate */}
      <div className="relative z-10 flex items-center justify-between pt-2.5 border-t border-outline-variant/30 text-[10px] font-code text-on-surface-variant">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-sm bg-primary-container"></span>
          <span className="uppercase tracking-wider font-semibold">
            PLATFORM: {profile.platform.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-1 text-primary">
          <span className="font-bold tracking-widest uppercase">GRADED COLLECTIBLE #0492</span>
          <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
        </div>
      </div>
    </div>
  );
};
