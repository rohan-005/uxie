import React, { useEffect, useState } from 'react';
import { PlatformType } from '../types/platform';

interface GenerationLoaderProps {
  platform: PlatformType;
  username: string;
  onComplete: () => void;
}

const STEPS = [
  'INGESTING PLATFORM TELEMETRY...',
  'EVALUATING ALGORITHMIC RIGOR MATRIX...',
  'APPLYING HOLOGRAPHIC SHEEN...',
  'GENERATING CRYPTOGRAPHIC SEAL...',
  'POWER CARD SYNTHESIS COMPLETE...',
];

export const GenerationLoader: React.FC<GenerationLoaderProps> = ({
  platform,
  username,
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const duration = 2800; // 2.8s total
    const intervalTime = 40;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const idx = Math.min(
      STEPS.length - 1,
      Math.floor((progress / 100) * STEPS.length)
    );
    setStepIndex(idx);
  }, [progress]);

  return (
    <main className="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-gutter-desktop py-8 md:py-12 flex flex-col items-center justify-center">
      {/* Atmospheric Layering */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[540px] bg-secondary-container/20 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-10 w-[420px] h-[340px] bg-primary-container/10 rounded-full blur-[110px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(19,11,23,0.3)_0%,rgba(14,7,18,0.95)_100%)]"></div>
      </div>

      {/* Stage Indicator Bar */}
      <div className="w-full max-w-5xl flex items-center justify-between mb-8 pb-4 border-b border-outline-variant/40 relative z-10">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 bg-surface-container-high border-l-2 border-primary text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-widest">
            PHASE 03 // EXTRACTION
          </span>
          <span className="text-on-surface-variant font-label-sm text-label-sm hidden sm:inline">
            EST. DISPATCH: 00:04s
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
            <span className="text-tertiary-fixed font-bold">CARD FORGE</span>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-bold">SYNTHESIS</span>
          </div>
          <span className="inline-flex items-center px-2 py-0.5 rounded-DEFAULT bg-surface-container-lowest border border-outline-variant text-primary font-label-sm text-label-sm">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Central Focus Grid: Dual Wing Telemetry + Centered Card Chamber */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center relative z-10">
        {/* Left Module: Status Steps & Progress Metric */}
        <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-none bg-primary-container laser-glow"></span>
              <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest">REALTIME ENGINE ACTIVE</span>
            </div>
            <h1 className="text-headline-md font-headline-md text-tertiary-fixed tracking-tight uppercase">
              SYNTHESIZING DEVELOPER CARD
            </h1>
            <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
              Constructing hardened cryptographic telemetry profile from @{username}'s {platform.toUpperCase()} profile.
            </p>
          </div>

          {/* Sequential Processing Array */}
          <div className="flex flex-col gap-3 bg-surface-container-lowest p-4 rounded-DEFAULT border border-outline-variant/60 shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]">
            <div className={`p-3 bg-surface-container-low rounded-DEFAULT border flex items-start gap-3 transition-colors ${progress > 20 ? 'border-primary-container/40' : 'border-outline-variant/30'}`}>
              <div className="w-6 h-6 rounded-DEFAULT bg-surface-container-high border border-tertiary/40 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">
                  {progress > 25 ? 'check' : 'sync'}
                </span>
              </div>
              <div>
                <div className="text-label-sm font-label-sm text-tertiary font-semibold uppercase">1. INGESTING DATA VECTORS</div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">Fetched {platform.toUpperCase()} profile telemetry payload</div>
              </div>
            </div>

            <div className={`p-3 bg-surface-container-low rounded-DEFAULT border flex items-start gap-3 transition-colors ${progress > 50 ? 'border-primary-container/40' : 'border-outline-variant/30'}`}>
              <div className="w-6 h-6 rounded-DEFAULT bg-surface-container-high border border-tertiary/40 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">
                  {progress > 60 ? 'check' : 'grid_view'}
                </span>
              </div>
              <div>
                <div className="text-label-sm font-label-sm text-tertiary font-semibold uppercase">2. ALGORITHMIC RIGOR MATRIX</div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">Calculating normalized UXIE Power Score</div>
              </div>
            </div>

            <div className={`p-3 bg-surface-container-low rounded-DEFAULT border flex items-start gap-3 transition-colors ${progress > 85 ? 'border-primary-container/40' : 'border-outline-variant/30'}`}>
              <div className="w-6 h-6 rounded-DEFAULT bg-surface-container-high border border-tertiary/40 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[15px] text-primary">
                  {progress >= 100 ? 'check' : 'auto_awesome'}
                </span>
              </div>
              <div>
                <div className="text-label-sm font-label-sm text-primary font-semibold uppercase">3. HOLOGRAPHIC FOIL &amp; CARDS</div>
                <div className="text-body-sm font-body-sm text-on-surface-variant">Minting Grid, Ultimate &amp; Court card frames</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Chamber: Rotating Telemetry Ring & Holographic Laser Card Silhouette */}
        <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[280px] aspect-[2.5/3.5] bg-surface-container-lowest border-2 border-primary-container p-3 rounded-lg shadow-[0_0_40px_rgba(222,115,156,0.3)] overflow-hidden flex flex-col justify-between group">
            {/* Spinning Laser Ring Background */}
            <div className="absolute -inset-10 border border-dashed border-primary-container/40 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none"></div>
            <div className="absolute inset-0 holographic-sheen pointer-events-none opacity-50"></div>

            {/* Specular corner accents */}
            <div className="absolute top-1.5 left-1.5 text-outline text-[9px] font-label-sm">┌ SYNTHESIS</div>
            <div className="absolute top-1.5 right-1.5 text-outline text-[9px] font-label-sm">┐ 2.5:3.5</div>

            <div className="relative z-10 text-center pt-2">
              <span className="text-label-sm font-label-sm text-primary uppercase tracking-widest font-bold">
                {platform.toUpperCase()} // @{username}
              </span>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6">
              <div className="relative w-24 h-24 rounded-full border-2 border-primary-container flex items-center justify-center bg-surface-container-low shadow-[0_0_20px_rgba(222,115,156,0.4)]">
                <span className="text-stat-metric font-stat-metric text-primary font-bold">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="text-label-sm font-label-sm text-tertiary tracking-wider mt-3 uppercase font-semibold">
                {STEPS[stepIndex]}
              </div>
            </div>

            <div className="relative z-10 border-t border-outline-variant pt-2 flex justify-between items-center text-[9px] font-label-sm text-outline">
              <span>HASH: 0x9F4A...</span>
              <span className="text-primary font-bold">VERIFIED</span>
            </div>
          </div>
        </div>

        {/* Right Module: Live Terminal Diagnostics Output */}
        <div className="lg:col-span-4 order-3 flex flex-col gap-4">
          <div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-DEFAULT space-y-2">
            <div className="flex items-center justify-between text-label-sm font-label-sm border-b border-outline-variant/60 pb-2">
              <span className="text-tertiary-fixed uppercase font-bold">LIVE TELEMETRY STREAM</span>
              <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
            </div>

            <div className="font-label-sm text-[11px] text-on-surface-variant space-y-1.5 pt-1">
              <div className="flex justify-between">
                <span className="text-outline">TARGET HANDLE:</span>
                <span className="text-tertiary-fixed font-bold">@{username}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">DATA VECTOR:</span>
                <span className="text-primary font-bold">{platform.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">CARDS GENERATING:</span>
                <span className="text-tertiary-fixed font-bold">GRID / ULTIMATE / COURT</span>
              </div>
              <div className="flex justify-between">
                <span className="text-outline">ENCRYPTION HASH:</span>
                <span className="text-outline">SHA256: 8e2d...01ca</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
