import React, { useEffect, useState } from 'react';
import { PlatformType } from '../types/platform';

interface GenerationLoaderProps {
  platform: PlatformType;
  username: string;
  onComplete: () => void;
}

const STEPS = [
  'CONNECTING TO PUBLIC PROFILE...',
  'ANALYZING REPOSITORY & CONTEST TELEMETRY...',
  'CALCULATING UXIE POWER STATISTICAL METRICS...',
  'EVALUATING PERFORMANCE & RARITY TIER...',
  'GENERATING HOLOGRAPHIC POWER CARD...',
];

export const GenerationLoader: React.FC<GenerationLoaderProps> = ({
  platform,
  username,
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const duration = 2800; // Total 2.8 seconds animation
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
    <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-12 max-w-7xl mx-auto w-full">
      <div className="w-full max-w-3xl rounded-xl bg-surface-container-low/85 backdrop-blur-xl border border-primary-container/30 shadow-[0_24px_64px_rgba(18,12,24,0.9),0_0_32px_rgba(222,115,156,0.12)] p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-80"></div>

        {/* Top Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-outline-variant/25">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded bg-primary-container animate-pulse shadow-[0_0_8px_#de739c]"></span>
            <span className="font-code text-label-code-sm text-tertiary uppercase tracking-widest font-semibold">
              SYNTHESIZING DEVELOPER POWER
            </span>
          </div>
          <div className="font-code text-label-code-sm text-outline">
            {platform.toUpperCase()} // @{username}
          </div>
        </div>

        {/* Hexagonal Radar Polygon Animation */}
        <div className="py-8 flex flex-col items-center justify-center relative">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
            {/* Outer Rotating Dash Lines */}
            <div className="absolute inset-0 rounded-full border border-dashed border-outline-variant/50 animate-[spin_12s_linear_infinite]"></div>
            <div className="absolute inset-3 rounded-full border border-primary-container/20 animate-[spin_8s_linear_infinite_reverse]"></div>

            {/* Radar SVG */}
            <svg
              className="w-40 h-40 sm:w-48 sm:h-48 animate-pulse drop-shadow-[0_0_18px_rgba(222,115,156,0.35)]"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                opacity="0.6"
                points="80,10 142,46 142,114 80,150 18,114 18,46"
                stroke="#544247"
                strokeDasharray="3 3"
                strokeWidth="1"
              />
              <polygon
                opacity="0.7"
                points="80,30 124,56 124,104 80,130 36,104 36,56"
                stroke="#623b63"
                strokeWidth="1"
              />
              <polygon
                opacity="0.4"
                points="80,50 106,66 106,94 80,110 54,94 54,66"
                stroke="#de739c"
                strokeWidth="1"
              />
              <line opacity="0.5" stroke="#544247" strokeWidth="1" x1="80" y1="10" x2="80" y2="150" />
              <line opacity="0.5" stroke="#544247" strokeWidth="1" x1="18" y1="46" x2="142" y2="114" />
              <line opacity="0.5" stroke="#544247" strokeWidth="1" x1="18" y1="114" x2="142" y2="46" />

              <polygon
                fill="url(#polyGradient)"
                fillOpacity="0.4"
                points="80,18 136,52 118,108 80,140 28,100 32,50"
                stroke="#ffb0ca"
                strokeWidth="2"
              />
              <circle cx="80" cy="18" r="3.5" fill="#f6eec5" />
              <circle cx="136" cy="52" r="3.5" fill="#de739c" />
              <circle cx="118" cy="108" r="3.5" fill="#de739c" />
              <circle cx="80" cy="140" r="3.5" fill="#ffb0ca" />
              <circle cx="28" cy="100" r="3.5" fill="#de739c" />
              <circle cx="32" cy="50" r="3.5" fill="#f6eec5" />

              <defs>
                <linearGradient id="polyGradient" x1="18" y1="10" x2="142" y2="150" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#de739c" stopOpacity="0.8" />
                  <stop offset="0.5" stopColor="#7b527b" stopOpacity="0.4" />
                  <stop offset="1" stopColor="#ffb0ca" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-stat-counter text-3xl font-bold text-tertiary-fixed leading-none">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>

        {/* Current Step Status */}
        <div className="text-center my-4 space-y-2">
          <div className="font-code text-label-code-lg font-bold text-tertiary tracking-wider uppercase">
            {STEPS[stepIndex]}
          </div>
          <div className="h-2 w-full bg-surface-container-lowest rounded-full overflow-hidden border border-outline-variant/30 p-[1px] max-w-xl mx-auto">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-secondary-container via-primary-container to-primary rounded-full transition-all duration-75"
            ></div>
          </div>
        </div>

        {/* Terminal Telemetry Log Lines */}
        <div className="mt-6 p-3.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 font-code text-[11px] text-on-surface-variant space-y-1 max-w-xl mx-auto">
          <div className="flex items-center justify-between text-tertiary-fixed">
            <span>[ORACLE] Fetching public API payload for @{username}</span>
            <span className="text-emerald-400 font-semibold">OK</span>
          </div>
          <div className="flex items-center justify-between">
            <span>[ENGINE] Normalizing {platform.toUpperCase()} performance statistics</span>
            <span>{Math.min(100, Math.round(progress * 0.9))}%</span>
          </div>
          <div className="flex items-center justify-between text-primary">
            <span>[SYNTHESIS] Calculating UXIE Power score and Rarity seal</span>
            <span>PROCESSING</span>
          </div>
        </div>
      </div>
    </div>
  );
};
