import React from 'react';
import { CardProps } from '../types/card';

export const CardTemplateTwo: React.FC<CardProps> = ({
  profile,
  className = '',
}) => {
  const displayAvatar = profile.avatar || '/f1.jpeg';

  return (
    <div
      id="uxie-card-export-target"
      className={`card-container relative w-full max-w-[360px] select-none ${className}`}
    >
      <div className="psa-slab-frame bg-slate-900/80 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 border-2 border-white/30 relative">
        <div className="absolute inset-1.5 rounded-xl border border-white/20 pointer-events-none"></div>

        {/* Top White PSA Certificate Label */}
        <div className="relative z-10 bg-white rounded-lg p-2.5 mb-2.5 border-2 border-red-600 shadow-md flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="text-[10px] font-code font-black text-slate-950 leading-tight space-y-0.5">
              <div className="flex justify-between w-full">
                <span className="tracking-wide uppercase">2026 TOPPS CHROME F1 DEV</span>
                <span className="text-slate-700 pl-2">#001</span>
              </div>
              <div className="text-slate-900 font-black tracking-tight uppercase text-xs">
                {profile.displayName}
              </div>
              <div className="text-red-600 font-extrabold text-[9px] uppercase">
                SAPPHIRE ED - RED // {profile.rankTitle}
              </div>
            </div>
            <div className="text-right flex flex-col items-end pl-2 border-l border-slate-300">
              <div className="text-[11px] font-code font-black text-red-600 leading-none">GEM MT</div>
              <div className="text-[22px] font-code font-black text-slate-950 leading-tight">10</div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-1 pt-1 border-t border-slate-300">
            {/* Barcode representation */}
            <div className="flex items-center gap-0.5 h-3 opacity-90">
              <div className="w-0.5 h-full bg-slate-900"></div>
              <div className="w-1 h-full bg-slate-900"></div>
              <div className="w-0.5 h-full bg-slate-900"></div>
              <div className="w-1 h-full bg-slate-900"></div>
              <div className="w-1.5 h-full bg-slate-900"></div>
              <div className="w-0.5 h-full bg-slate-900"></div>
              <div className="w-1 h-full bg-slate-900"></div>
              <div className="w-0.5 h-full bg-slate-900"></div>
              <div className="w-1 h-full bg-slate-900"></div>
            </div>
            <span className="font-code text-[9px] font-extrabold text-slate-800 tracking-wider">
              Cert #65997447
            </span>
            <div className="psa-holo-seal px-1.5 py-0.5 rounded-full border border-amber-300 text-[8px] font-code font-black text-amber-950 uppercase">
              PSA
            </div>
          </div>
        </div>

        {/* Ruby Red / Gold Sapphire Refractor Card */}
        <div className="ruby-sapphire-refractor rounded-xl p-2.5 border-2 border-amber-300/60 relative overflow-hidden shadow-2xl aspect-[1/1.42] flex flex-col justify-between">
          <div className="hologram-prism absolute -inset-full pointer-events-none opacity-85"></div>

          {/* Card Top Meta */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/75 backdrop-blur border border-amber-300/50">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
              <span className="font-code text-[9px] font-black tracking-widest text-amber-300 uppercase">
                SAPPHIRE 1/1
              </span>
            </div>
            <div className="px-2 py-0.5 rounded bg-gradient-to-r from-amber-400 via-white to-amber-200 text-slate-950 font-headline font-black italic tracking-wider text-[11px] shadow border border-white">
              TOPPS <span className="text-red-700">CHROME</span>
            </div>
          </div>

          {/* Central Portrait Area with Vertical Ribbon */}
          <div className="relative z-10 my-auto flex gap-2 items-center h-[230px]">
            <div className="w-7 h-full bg-gradient-to-b from-amber-300 via-red-500 to-amber-400 rounded flex flex-col items-center justify-center p-0.5 border border-white/60 shadow-lg">
              <span className="font-headline font-black text-slate-950 text-[10px] tracking-[0.18em] uppercase -rotate-90 whitespace-nowrap drop-shadow-sm">
                GRAND PRIX WINNER // {profile.platform.toUpperCase()}
              </span>
            </div>
            <div className="flex-1 h-full rounded-lg overflow-hidden border-2 border-white/50 relative shadow-inner bg-slate-950">
              <img
                src={displayAvatar}
                alt={profile.displayName}
                className="w-full h-full object-cover object-top filter contrast-[1.15] saturate-[1.12]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/f1.jpeg';
                }}
              />
              <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 bg-black/85 backdrop-blur rounded text-[9.5px] font-code font-bold text-amber-300 border border-amber-400/50">
                P1 VICTORY
              </div>
            </div>
          </div>

          {/* Bottom Specs Box */}
          <div className="relative z-10 bg-slate-950/85 backdrop-blur rounded-lg p-1.5 border border-white/30 flex items-center justify-between text-xs font-code shadow-md">
            <div>
              <div className="text-[8.5px] text-amber-300/80 font-mono uppercase">POWERTRAIN</div>
              <div className="text-white font-black text-[10.5px] tracking-wide uppercase">
                {profile.overallPower} OVR TELEMETRY
              </div>
            </div>
            <div className="text-right">
              <div className="text-[8.5px] text-amber-300/80 font-mono uppercase">CERTIFIED</div>
              <div className="text-amber-300 font-black text-[10.5px] tracking-wider">
                PSA 10 GEM MINT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
