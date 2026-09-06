import React from 'react';
import { PlatformType, PLATFORMS } from './PlatformSelector';

interface UsernameInputProps {
  platform: PlatformType;
  username: string;
  onUsernameChange: (username: string) => void;
  onBackToPlatform: () => void;
  onSubmit: () => void;
}

export const UsernameInput: React.FC<UsernameInputProps> = ({
  platform,
  username,
  onUsernameChange,
  onBackToPlatform,
  onSubmit,
}) => {
  const currentPlatformInfo = PLATFORMS.find((p) => p.id === platform) || PLATFORMS[0];

  const sampleHandles: Record<PlatformType, string[]> = {
    github: ['torvalds', 'gaearon', 'antirez', 'karpathy'],
    codeforces: ['tourist', 'Benq', 'radewoosh', 'Petr'],
    leetcode: ['feiyao', 'neal_wu', 'lee215', 'StefanPochmann'],
    codechef: ['gennady', 'tourist', 'uwi', 'errichto'],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    onSubmit();
  };

  return (
    <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop py-space-2xl w-full max-w-[1440px] mx-auto">
      {/* Step Progress Ribbon */}
      <div className="w-full max-w-xl mb-space-lg flex flex-col items-center">
        <div className="flex items-center justify-between w-full mb-3 px-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 bg-primary animate-ping"></span>
            <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase">
              STEP 02: IDENTITY SYNCHRONIZATION
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant tracking-widest">PHASE 2 / 4</span>
        </div>
        {/* Stepper Progress Tracks */}
        <div className="grid grid-cols-4 gap-1.5 w-full">
          <div className="h-1 bg-primary-container"></div>
          <div className="h-1 bg-primary-container relative overflow-hidden">
            <div className="absolute inset-0 bg-tertiary-fixed opacity-40 animate-pulse"></div>
          </div>
          <div className="h-1 bg-surface-variant"></div>
          <div className="h-1 bg-surface-variant"></div>
        </div>
      </div>

      {/* Main Collectible Module Shell */}
      <div className="w-full max-w-xl relative p-px specular-border rounded-lg shadow-2xl">
        {/* Outer Carbon Bezel & Framing */}
        <div className="relative w-full bg-gradient-to-b from-surface-container-low via-[#130b17] to-surface-container-lowest rounded-lg p-space-xl md:p-space-2xl border border-outline-variant/60">
          {/* Technical Precision Corner Registration Notches */}
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-primary-container pointer-events-none"></div>
          <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-primary-container pointer-events-none"></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-primary-container pointer-events-none"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-primary-container pointer-events-none"></div>

          {/* Upper Diagnostic Metadata Strip */}
          <div className="flex items-center justify-between pb-space-md border-b border-surface-variant/80 mb-space-xl">
            <div className="flex items-center gap-2">
              <span className="font-label-sm text-label-sm text-tertiary font-bold tracking-widest uppercase">
                SYS: FORGE_NODE_09
              </span>
              <span className="text-outline-variant font-label-sm">/</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">VCS_PROBE</span>
            </div>
            <button
              onClick={onBackToPlatform}
              type="button"
              className="flex items-center gap-1.5 font-label-sm text-label-sm text-primary hover:text-primary-fixed transition-colors"
            >
              <span className="material-symbols-outlined text-[14px]">edit</span>
              <span>VECTOR: {currentPlatformInfo.name.toUpperCase()}</span>
            </button>
          </div>

          {/* Centered Core Prompt Header */}
          <div className="text-center space-y-3 mb-space-xl">
            <h1 className="font-headline-lg text-headline-lg font-bold tracking-tight uppercase text-tertiary-fixed">
              WHO ARE YOU?
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
              Enter your {currentPlatformInfo.name} handle to pull verified public activity, repository telemetry, and language weight.
            </p>
          </div>

          {/* Input Interface Section */}
          <form className="space-y-space-lg" onSubmit={handleSubmit}>
            {/* Primary Glow Input Well */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label
                  className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase flex items-center gap-1.5"
                  htmlFor="gh-handle"
                >
                  <span className="material-symbols-outlined text-[14px] text-primary-container">alternate_email</span>
                  {currentPlatformInfo.name.toUpperCase()} DEVELOPER IDENTIFIER
                </label>
                <span className="font-label-sm text-label-sm text-outline tracking-wider">HEX: UTF-8</span>
              </div>

              <div className="relative flex items-center bg-surface-container-lowest border border-primary-container custom-pink-glow rounded-lg transition-all duration-200">
                <span className="pl-4 select-none pointer-events-none text-primary font-label-lg text-label-lg">@</span>
                <input
                  id="gh-handle"
                  type="text"
                  value={username}
                  onChange={(e) => onUsernameChange(e.target.value)}
                  placeholder={`Enter your ${currentPlatformInfo.name} username...`}
                  className="w-full bg-transparent py-3.5 pl-1 pr-11 text-tertiary font-label-lg text-label-lg placeholder:text-outline/50 border-0 focus:ring-0 focus:outline-none tracking-tight"
                  autoComplete="off"
                  spellCheck="false"
                  required
                />
                <div className="pr-3 text-primary flex items-center">
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
              </div>
            </div>

            {/* Quick Sample Handles */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Sample handles:</span>
              {sampleHandles[platform].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => onUsernameChange(sample)}
                  className="font-label-sm text-label-sm text-tertiary hover:text-on-surface bg-surface-container border border-outline-variant hover:border-primary px-2.5 py-1 rounded transition-colors"
                >
                  {sample}
                </button>
              ))}
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={!username.trim()}
                className="w-full bg-primary-container text-on-primary-container font-label-lg text-label-lg py-3.5 px-6 rounded-lg font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(222,115,156,0.6)] active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 border border-primary-container cursor-pointer"
              >
                <span>ANALYZE POWER TELEMETRY</span>
                <span className="material-symbols-outlined text-[20px]">bolt</span>
              </button>
            </div>

            {/* Verification Footer Note */}
            <div className="flex items-center justify-center gap-2 text-center text-outline pt-2">
              <span className="material-symbols-outlined text-[15px] text-primary">lock</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                READ-ONLY PUBLIC TELEMETRY // IMMUTABLE RECORD
              </span>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
