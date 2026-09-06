import React from 'react';
import { CardProps } from '../types/card';

export const CardTemplateOne: React.FC<CardProps> = ({
  profile,
  profileImage,
  className = '',
  isExporting = false,
}) => {
  const avatarSrc = profileImage || profile.avatar || '/fifa.jpeg';
  const statsList = Object.values(profile.stats);

  const getPlatformLabel = () => {
    switch (profile.platform) {
      case 'github': return 'GITHUB / DEV';
      case 'leetcode': return 'LEETCODE / DSA';
      case 'codeforces': return 'CODEFORCES / CP';
      case 'codechef': return 'CODECHEF / CC';
      default: return 'DEV / SPECS';
    }
  };

  return (
    <div
      className={`card-3d-inner relative w-full aspect-[2.5/3.5] p-2 bg-surface-container-lowest border border-outline-variant transition-all duration-300 hover:border-primary group select-none ${className}`}
    >
      {/* Outer Chamfer Bezel with Corner Registration */}
      <div className="clip-grid-frame w-full h-full bg-gradient-to-br from-[#110915] via-[#1a0e21] to-[#201127] p-3.5 flex flex-col justify-between relative overflow-hidden border border-[#321B3F]">
        {/* Carbon Fiber Pattern Overlay & Holographic sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(#321B3F_1px,transparent_1px)] [background-size:8px_8px] opacity-40 pointer-events-none"></div>
        <div className="holo-sheen absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-40"></div>

        {/* Specular Corner Registration Marks */}
        <div className="absolute top-1 left-1.5 text-outline text-[8px] font-label-sm tracking-tighter select-none opacity-60">┌ 0x9F</div>
        <div className="absolute top-1 right-1.5 text-outline text-[8px] font-label-sm tracking-tighter select-none opacity-60">┐ 2.5:3.5</div>

        {/* Top Header & Racing Badges */}
        <div className="relative z-10 flex items-start justify-between">
          {/* Small Rating Badge Top-Left */}
          <div className="flex items-center gap-2">
            <div className="border-2 border-primary-container bg-surface-container-lowest px-2.5 py-1 text-center shadow-[0_0_10px_rgba(222,115,156,0.3)]">
              <span className="block text-label-sm font-label-sm text-outline leading-none">OVR</span>
              <span className="block text-stat-metric font-stat-metric text-primary leading-none mt-0.5">
                {profile.overallPower}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-label-sm font-label-sm text-primary tracking-widest uppercase">
                {profile.rarity.name}
              </span>
              <span className="text-label-sm font-label-sm text-tertiary-fixed uppercase">
                {profile.platform} // SPECS
              </span>
            </div>
          </div>

          {/* Cockpit Registration Mark & Tachometer Pip */}
          <div className="text-right">
            <div className="text-label-sm font-label-sm text-outline">SYS.MK // RACING</div>
            <div className="flex gap-1 justify-end mt-1">
              <span className="w-3 h-1 bg-primary-container"></span>
              <span className="w-3 h-1 bg-primary-container"></span>
              <span className="w-1.5 h-1 bg-tertiary-container"></span>
              <span className="w-1.5 h-1 bg-outline-variant"></span>
            </div>
          </div>
        </div>

        {/* Developer Avatar in Cockpit-Style Angular Frame */}
        <div className="relative z-10 my-2 px-1">
          <div className="relative w-full h-36 sm:h-40 border border-[#321B3F] bg-surface-container-lowest overflow-hidden">
            {/* Angular Cockpit Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary-container z-20"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary-container z-20"></div>

            <img
              src={avatarSrc}
              alt={`${profile.username} avatar`}
              className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/fifa.jpeg';
              }}
            />

            {/* Overlay Codename Ribbon in Racing Typography */}
            <div className="absolute bottom-1 left-2 z-20 bg-surface-container-lowest/90 px-2 py-0.5 border-l-2 border-primary-container">
              <span className="text-label-lg font-headline-md font-bold text-tertiary-fixed tracking-wider uppercase">
                {profile.username}
              </span>
            </div>
          </div>
        </div>

        {/* Stats displayed as Sleek Horizontal Gauge Bars */}
        <div className="relative z-10 space-y-1.5 bg-surface-container-lowest/80 p-2.5 border border-[#321B3F]">
          {statsList.map((stat, idx) => (
            <div key={idx} className="space-y-0.5">
              <div className="flex justify-between text-label-sm font-label-sm">
                <span className="text-on-surface-variant uppercase">{stat.label}</span>
                <span className={`font-bold ${idx === 0 ? 'text-primary' : 'text-tertiary-fixed'}`}>
                  {stat.value}
                </span>
              </div>
              <div className="w-full bg-surface-container-high h-1.5 overflow-hidden">
                <div
                  style={{ width: `${Math.min(100, Math.max(10, stat.score))}%` }}
                  className={`h-full ${
                    idx === 0
                      ? 'bg-primary-container shadow-[0_0_8px_rgba(222,115,156,0.5)]'
                      : idx === 1
                      ? 'bg-primary'
                      : idx === 2
                      ? 'bg-secondary-container'
                      : 'bg-outline-variant'
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Strip: Platform Badge & Telemetry Barcode */}
        <div className="relative z-10 pt-2 flex items-center justify-between border-t border-[#321B3F]">
          <div className="flex items-center gap-1.5 text-label-sm font-label-sm text-outline">
            <span className="material-symbols-outlined text-xs">qr_code_2</span>
            <span className="tracking-tighter">HASH::9F4A-DEV{profile.overallPower}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-surface-container-high px-2 py-0.5 border border-outline-variant">
            <span className="material-symbols-outlined text-sm text-primary">terminal</span>
            <span className="text-label-sm font-label-sm text-tertiary-fixed font-bold tracking-wider uppercase">
              {getPlatformLabel()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
