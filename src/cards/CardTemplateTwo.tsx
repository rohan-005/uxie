import React from 'react';
import { CardProps } from '../types/card';

export const CardTemplateTwo: React.FC<CardProps> = ({
  profile,
  profileImage,
  className = '',
  isExporting = false,
}) => {
  const avatarSrc = profileImage || profile.avatar || '/fifa.jpeg';
  const statsList = Object.values(profile.stats);

  const getShortCode = (label: string, index: number) => {
    const map: Record<string, string> = {
      'Activity': 'ACT',
      'Open Source': 'OS',
      'Consistency': 'CONS',
      'Impact': 'IMP',
      'Versatility': 'VERS',
      'Collaboration': 'COL',
      'Problem Solving': 'PS',
      'Algorithms': 'ALGO',
      'Contest': 'CONT',
      'Difficulty': 'DIFF',
      'DSA': 'DSA',
      'Streak': 'STRK',
    };
    return map[label] || `S${index + 1}`;
  };

  return (
    <div
      className={`card-3d-inner relative w-full aspect-[2.5/3.5] p-2 bg-surface-container-lowest border border-outline-variant transition-all duration-300 hover:border-tertiary-fixed group select-none ${className}`}
    >
      {/* Outer Gold / Cream Shield Border (#F6EEC5 trim) */}
      <div className="clip-shield-frame w-full h-full bg-gradient-to-b from-[#F6EEC5] via-[#DE739C] to-[#7B527B] p-[2px] relative shadow-[0_0_20px_rgba(123,82,123,0.3)]">
        {/* Interior Deep Purple Velvet with Subtle Foil Glow */}
        <div className="clip-shield-inner w-full h-full bg-gradient-to-b from-[#201228] via-[#160C1C] to-[#0E0712] p-4 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Holographic Foil Prism */}
          <div className="holo-sheen absolute inset-0 opacity-25 pointer-events-none group-hover:opacity-45"></div>

          {/* Top Section: Massive Rating + Position + Rare Foil Ribbon */}
          <div className="relative z-10 flex items-start justify-between">
            {/* Large bold rating + DEV + platform code */}
            <div className="flex flex-col items-center leading-none">
              <span className="text-stat-metric font-stat-metric font-bold text-tertiary-fixed tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                {profile.overallPower}
              </span>
              <span className="text-label-lg font-headline-md font-bold text-primary tracking-widest mt-0.5">DEV</span>
              <div className="mt-1 flex items-center justify-center w-7 h-6 bg-surface-container-lowest border border-tertiary-container rounded">
                <span className="text-label-sm font-label-sm text-tertiary-fixed font-bold uppercase">
                  {profile.platform.substring(0, 3)}
                </span>
              </div>
            </div>

            {/* Rarity ribbon top-right */}
            <div className="flex flex-col items-end gap-1">
              <div className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded-sm shadow-[0_0_10px_rgba(222,115,156,0.4)] flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">stars</span>
                <span className="text-label-sm font-label-sm font-bold uppercase tracking-wider">
                  {profile.rarity.name}
                </span>
              </div>
              <span className="text-label-sm font-label-sm text-tertiary-fixed tracking-widest">
                SEASON 2025
              </span>
            </div>
          </div>

          {/* Center Large Holographic Developer Avatar Cutout */}
          <div className="relative z-10 my-auto flex justify-center items-center py-1">
            <div className="relative w-40 h-44 sm:w-44 sm:h-48">
              {/* Backing Crest Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#DE739C]/20 via-[#7B527B]/30 to-[#F6EEC5]/20 blur-md"></div>
              <img
                src={avatarSrc}
                alt={`${profile.username} avatar`}
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_10px_14px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/fifa.jpeg';
                }}
              />
            </div>
          </div>

          {/* Bottom Crest Section: Player Name Banner & 2-Column Stat Grid */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Name banner across bottom */}
            <div className="w-full bg-gradient-to-r from-transparent via-[#302734] to-transparent py-1 border-y border-outline-variant/60 text-center mb-2">
              <span className="text-headline-sm font-headline-md font-bold text-tertiary-fixed tracking-widest uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                {profile.username}
              </span>
            </div>

            {/* 2-Column Stat Grid below name */}
            <div className="w-full grid grid-cols-2 gap-x-4 gap-y-1 bg-surface-container-lowest/85 p-2 rounded border border-[#321B3F] text-label-sm font-label-sm">
              {statsList.slice(0, 6).map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border-b border-surface-variant/40 pb-0.5"
                >
                  <span className="text-outline uppercase">{getShortCode(stat.label, idx)}</span>
                  <span className={`font-bold text-label-md ${idx === 0 ? 'text-primary' : 'text-tertiary-fixed'}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Cryptographic Shield Seal */}
            <div className="mt-2 text-label-sm font-label-sm text-tertiary-fixed/70 uppercase tracking-widest flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">verified</span>
              <span>UXIE // CERTIFIED FOIL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
