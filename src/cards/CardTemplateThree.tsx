import React from 'react';
import { CardProps } from '../types/card';

export const CardTemplateThree: React.FC<CardProps> = ({
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
      className={`card-3d-inner relative w-full aspect-[2.5/3.5] p-2 bg-surface-container-lowest border border-outline-variant transition-all duration-300 hover:border-primary group select-none ${className}`}
    >
      {/* Outer Classic Card Border in Cream #F6EEC5 & Pink Pinstripe */}
      <div className="w-full h-full bg-surface-container-lowest border-4 border-tertiary-fixed p-1 relative overflow-hidden shadow-[0_0_24px_rgba(123,82,123,0.25)]">
        {/* Inner Pink Pinstripe Ring */}
        <div className="w-full h-full border border-primary-container relative flex flex-col justify-between overflow-hidden bg-surface-container-lowest">
          {/* High-Contrast Stylized Portrait Art (Full-Bleed feel) */}
          <div className="absolute inset-0 z-0">
            <img
              src={avatarSrc}
              alt={`${profile.username} avatar`}
              className="w-full h-full object-cover object-center filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/fifa.jpeg';
              }}
            />
            {/* Hardwood vignette gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0712] via-transparent to-[#0E0712]/60"></div>
            <div className="holo-sheen absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-40"></div>
          </div>

          {/* Top Area: Platform Icon Badge & Large Dynamic Glowing Rating */}
          <div className="relative z-10 p-3 flex items-start justify-between">
            {/* Small platform icon as authentic card logo badge in corner */}
            <div className="flex items-center gap-1.5 bg-surface-container-lowest/90 px-2.5 py-1 border border-primary-container/60 shadow-lg">
              <span className="material-symbols-outlined text-base text-primary">terminal</span>
              <div className="flex flex-col leading-none">
                <span className="text-label-sm font-label-sm font-bold text-tertiary-fixed uppercase">
                  {profile.platform}
                </span>
                <span className="text-[8px] font-label-sm text-outline">VERIFIED PRO</span>
              </div>
            </div>

            {/* Large glowing rating top-right with dynamic typography */}
            <div className="flex flex-col items-end">
              <div className="relative">
                <span className="absolute -inset-1 text-stat-metric font-headline-lg font-extrabold text-primary-container blur-sm opacity-70">
                  {profile.overallPower}
                </span>
                <span className="relative text-stat-metric font-headline-lg font-extrabold text-tertiary-fixed leading-none tracking-tight">
                  {profile.overallPower}
                </span>
              </div>
              <span className="text-label-sm font-label-sm text-primary tracking-widest uppercase font-bold">
                {profile.rarity.name}
              </span>
            </div>
          </div>

          {/* Middle: Clean Pinstripe Geometric Divider Graphic */}
          <div className="relative z-10 px-3 flex justify-between items-center opacity-75">
            <div className="h-0.5 w-12 bg-primary-container"></div>
            <span className="text-label-sm font-label-sm text-tertiary-fixed tracking-widest uppercase">
              HARDWOOD EDITION
            </span>
            <div className="h-0.5 w-12 bg-primary-container"></div>
          </div>

          {/* Bottom Block: Bold Diagonal Emboss Name & Translucent Stat Strip Overlay */}
          <div className="relative z-10 p-3 flex flex-col gap-2">
            {/* Bold Typography Name */}
            <div className="relative overflow-hidden">
              <h3 className="text-headline-md font-headline-lg font-bold text-tertiary-fixed tracking-tight uppercase drop-shadow-[0_2px_8px_rgba(222,115,156,0.6)]">
                {profile.username}
              </h3>
              <div className="w-full h-0.5 bg-gradient-to-r from-primary via-tertiary-fixed to-transparent mt-0.5"></div>
            </div>

            {/* Translucent Dark Stat Strip Overlay near bottom showcasing 6 stats */}
            <div className="bg-surface-container-lowest/90 backdrop-blur-sm border border-outline-variant p-2 grid grid-cols-6 gap-1 text-center shadow-lg">
              {statsList.slice(0, 6).map((stat, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${idx > 0 ? 'border-l border-surface-variant' : ''}`}
                >
                  <span className={`text-[9px] font-label-sm ${idx === 1 ? 'text-primary' : 'text-outline'}`}>
                    {getShortCode(stat.label, idx)}
                  </span>
                  <span className={`text-label-md font-label-md font-bold ${idx === 1 ? 'text-primary' : 'text-tertiary-fixed'}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Card Metadata Watermark Strip */}
            <div className="flex items-center justify-between text-[9px] font-label-sm text-outline px-0.5">
              <span>CARD #082/100</span>
              <span className="text-tertiary-fixed uppercase">{profile.platform} ENCLAVE 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
