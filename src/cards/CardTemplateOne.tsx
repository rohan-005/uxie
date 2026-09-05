import React from 'react';
import { CardProps } from '../types/card';

export const CardTemplateOne: React.FC<CardProps> = ({
  profile,
  className = '',
}) => {
  const displayAvatar = profile.avatar || '/fifa.jpeg';

  const stat1 = profile.stats.stat1;
  const stat2 = profile.stats.stat2;
  const stat3 = profile.stats.stat3;
  const stat4 = profile.stats.stat4;
  const stat5 = profile.stats.stat5;
  const stat6 = profile.stats.stat6;

  return (
    <div
      id="uxie-card-export-target"
      className={`card-container relative w-full max-w-[360px] aspect-[1/1.54] select-none ${className}`}
    >
      <div className="fifa-toty-shield gold-foil-border p-[3.5px] shadow-[0_20px_50px_rgba(15,35,85,0.9),0_0_35px_rgba(245,158,11,0.3)] relative h-full w-full">
        <div className="fifa-toty-inner lapis-crystal-bg relative w-full h-full overflow-hidden flex flex-col justify-between pt-4 pb-3 px-3.5 sm:px-4">
          {/* Radial Light Highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(59,130,246,0.35)_0%,rgba(30,58,138,0.2)_40%,transparent_70%)] pointer-events-none"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/15 rounded-full blur-2xl pointer-events-none"></div>
          <div className="hologram-prism absolute -inset-full opacity-60 pointer-events-none"></div>

          {/* Top TOTY Ribbon */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
            <div className="px-2.5 py-0.5 rounded-sm border border-amber-300/60 bg-blue-950/90 text-[9px] font-headline font-black tracking-[0.25em] text-amber-300 shadow-md">
              TOTY
            </div>
          </div>

          {/* Top Rating & Image Grid */}
          <div className="relative z-10 grid grid-cols-12 items-start mt-2.5">
            {/* Left Column: Power, Position, Badges */}
            <div className="col-span-4 flex flex-col items-center text-center pt-0.5 space-y-1">
              <span className="font-headline text-[44px] sm:text-[48px] font-extrabold leading-none gold-foil-text tracking-tighter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {profile.overallPower}
              </span>
              <span className="font-headline text-[16px] font-bold gold-foil-text tracking-wider -mt-1 uppercase">
                {profile.platform === 'github' ? 'ARCH' : profile.platform === 'leetcode' ? 'KNIGHT' : 'CP'}
              </span>

              {/* Country Flag / Platform Icon */}
              <div className="w-7 h-4 my-0.5 rounded-sm overflow-hidden shadow-lg border border-amber-300/60 flex items-center justify-center bg-blue-950 relative">
                <span className="font-code text-[8px] text-amber-300 font-extrabold uppercase">
                  {profile.platform.slice(0, 2)}
                </span>
              </div>

              <div className="w-7 h-7 rounded-full bg-blue-950/90 border border-amber-400/80 p-0.5 flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[16px] text-amber-300">
                  {profile.platform === 'github' ? 'terminal' : profile.platform === 'codeforces' ? 'military_tech' : 'code'}
                </span>
              </div>
            </div>

            {/* Right Column: Player Portrait */}
            <div className="col-span-8 relative flex justify-end pr-0.5">
              <div className="relative w-[170px] sm:w-[185px] aspect-[4/5] overflow-hidden rounded-xl shadow-2xl border-2 border-amber-400/40 bg-slate-950">
                <img
                  src={displayAvatar}
                  alt={profile.displayName}
                  className="w-full h-full object-cover object-top filter contrast-[1.12] saturate-[1.15]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/fifa.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-85"></div>
              </div>
            </div>
          </div>

          {/* Player Name Banner */}
          <div className="relative z-10 text-center mt-1">
            <h2 className="font-headline text-[26px] sm:text-[30px] font-black tracking-widest gold-foil-text uppercase drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] border-b border-amber-400/40 pb-0.5 mx-2 truncate">
              {profile.displayName}
            </h2>
          </div>

          {/* 6 Stats Card Metrics */}
          <div className="relative z-10 px-2.5 py-1.5 my-0.5 bg-blue-950/70 rounded-lg border border-amber-400/20 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-x-3 gap-y-1 font-headline text-[12px] tracking-tight">
              <div className="flex items-center justify-between border-b border-blue-800/40 pb-0.5">
                <span className="gold-foil-text font-bold text-[14px]">{stat1.value}</span>
                <span className="text-blue-100/90 font-medium text-[10px] tracking-wider">
                  PAC <span className="text-[9px] text-amber-300 font-semibold">({stat1.label})</span>
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-blue-800/40 pb-0.5">
                <span className="gold-foil-text font-bold text-[14px]">{stat2.value}</span>
                <span className="text-blue-100/90 font-medium text-[10px] tracking-wider">
                  DRI <span className="text-[9px] text-amber-300 font-semibold">({stat2.label})</span>
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-blue-800/40 pb-0.5">
                <span className="gold-foil-text font-bold text-[14px]">{stat3.value}</span>
                <span className="text-blue-100/90 font-medium text-[10px] tracking-wider">
                  SHO <span className="text-[9px] text-amber-300 font-semibold">({stat3.label})</span>
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-blue-800/40 pb-0.5">
                <span className="gold-foil-text font-bold text-[14px]">{stat4.value}</span>
                <span className="text-blue-100/90 font-medium text-[10px] tracking-wider">
                  DEF <span className="text-[9px] text-amber-300 font-semibold">({stat4.label})</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="gold-foil-text font-bold text-[14px]">{stat5.value}</span>
                <span className="text-blue-100/90 font-medium text-[10px] tracking-wider">
                  PAS <span className="text-[9px] text-amber-300 font-semibold">({stat5.label})</span>
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="gold-foil-text font-bold text-[14px]">{stat6.value}</span>
                <span className="text-blue-100/90 font-medium text-[10px] tracking-wider">
                  PHY <span className="text-[9px] text-amber-300 font-semibold">({stat6.label})</span>
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Diamond Crest Seal */}
          <div className="relative z-10 flex items-center justify-center pt-0.5">
            <div className="w-6 h-6 border border-amber-400 rounded-sm rotate-45 flex items-center justify-center bg-blue-950/90 shadow-md">
              <span className="-rotate-45 font-headline text-[10px] font-black text-amber-300">UX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
