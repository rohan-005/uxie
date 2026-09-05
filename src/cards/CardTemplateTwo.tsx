import React from 'react';
import { CardProps } from '../types/card';
import { RARITY_CONFIGS } from '../engine/rarity';
import { DemoDataBadge } from '../components/Badge';

export const CardTemplateTwo: React.FC<CardProps> = ({
  profile,
  className = '',
}) => {
  const rarityConfig = RARITY_CONFIGS[profile.rarity];
  const displayAvatar = profile.avatar || '/f1.jpeg';

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
      className={`relative w-full max-w-[420px] aspect-[1/1.54] rounded-3xl bg-[#120d18] border-8 border-slate-700/80 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.95),0_0_40px_rgba(255,176,202,0.25)] p-5 flex flex-col justify-between overflow-hidden group select-none ${className}`}
    >
      {/* Protective Glass Slab Bevel Inset */}
      <div className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none m-1"></div>
      <div className="absolute inset-0 foil-overlay pointer-events-none rounded-2xl"></div>

      {/* Slab Top Grading Header */}
      <div className="relative z-10 bg-slate-900/90 border border-slate-600 rounded-xl p-3 flex items-center justify-between shadow-inner">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center border border-primary-container/50 text-primary">
            <span className="material-symbols-outlined text-[20px]">verified</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-code text-label-code-sm text-primary-container font-bold tracking-wider uppercase">
                {profile.rarity} GRADED SLAB
              </span>
              <DemoDataBadge isDemoData={profile.isDemoData} />
            </div>
            <span className="font-code text-[10px] text-slate-400 tracking-wider block">
              UXIE SLAB SPEC // SERIES 01 #0492
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

      {/* Inner Card Frame with Crystalline Geometric Pattern */}
      <div className="relative z-10 my-3 rounded-xl border border-outline-variant/40 bg-gradient-to-br from-indigo-950/80 via-purple-950/80 to-pink-950/80 p-3.5 flex flex-col justify-between flex-grow overflow-hidden">
        {/* Geometric Background Layer */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#de739c_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="relative z-10 flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-primary-container shadow-lg">
              <img
                src={displayAvatar}
                alt={profile.displayName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/f1.jpeg';
                }}
              />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-tertiary-fixed leading-tight">
                {profile.displayName}
              </h3>
              <p className="font-code text-label-code-sm text-primary font-semibold">
                @{profile.username}
              </p>
              <span className="inline-block mt-0.5 font-code text-[10px] text-slate-300 uppercase tracking-wider">
                {profile.rankTitle}
              </span>
            </div>
          </div>

          <div className={`px-2.5 py-1 rounded-lg border font-code text-[11px] font-bold ${rarityConfig.badgeBg} ${rarityConfig.badgeText} ${rarityConfig.borderColor}`}>
            {profile.rarity}
          </div>
        </div>

        {/* 6 Stats Mini Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-2 pt-2 border-t border-white/20">
          {statList.map((st, i) => (
            <div
              key={i}
              className="p-1.5 rounded-md bg-slate-900/80 border border-slate-700 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-[10px] font-code">
                <span className="text-slate-300 font-medium truncate">{st.label}</span>
                <span className="font-bold text-tertiary-fixed">{st.value}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-950 rounded-sm overflow-hidden border border-slate-800 mt-1">
                <div
                  style={{ width: `${Math.max(5, Math.min(100, st.value))}%` }}
                  className="h-full bg-gradient-to-r from-secondary-container to-primary-container rounded-sm"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer Metallic Seal */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-slate-700 text-[10px] font-code text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-sm bg-primary-container"></span>
          <span className="uppercase tracking-wider font-semibold">
            PROTECTIVE SLAB CASE
          </span>
        </div>
        <div className="flex items-center gap-1 text-primary">
          <span className="font-bold tracking-widest uppercase">GRADED #0492</span>
          <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
        </div>
      </div>
    </div>
  );
};
