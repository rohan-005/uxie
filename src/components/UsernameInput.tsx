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
    <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 lg:px-12 py-12 w-full">
      <div className="w-full max-w-2xl mx-auto">
        {/* Step Visualizer Indicator */}
        <div className="mb-6 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-sm bg-primary-container"></span>
            <span className="font-code text-label-code-sm uppercase text-outline tracking-wider">
              CARD SYNTHESIS ENGINE
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1 w-6 rounded-sm bg-primary-container"></span>
            <span className="h-1 w-6 rounded-sm bg-primary-container"></span>
            <span className="h-1 w-6 rounded-sm bg-surface-container-highest"></span>
          </div>
        </div>

        {/* Identity Form Container */}
        <section className="relative rounded-xl bg-surface-container-low/90 backdrop-blur-xl border border-primary-container/30 shadow-2xl shadow-surface-container-lowest/90 overflow-hidden p-6 sm:p-10 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary via-primary-container to-secondary-container"></div>

          {/* Selected Platform Context Badge */}
          <div className="flex items-center justify-between mb-8 pb-5 border-b border-outline-variant/25">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40">
              <span className="material-symbols-outlined text-[18px] text-primary">
                {currentPlatformInfo.icon}
              </span>
              <span className="font-code text-label-code-sm text-on-surface">
                Selected: <strong className="font-semibold text-tertiary">{currentPlatformInfo.name}</strong>
              </span>
            </div>
            <button
              onClick={onBackToPlatform}
              type="button"
              className="group inline-flex items-center gap-1 font-code text-label-code-sm text-primary hover:text-primary-fixed transition-colors"
            >
              <span>Edit Platform</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
                chevron_right
              </span>
            </button>
          </div>

          {/* Headline */}
          <div className="mb-8 text-left">
            <p className="font-code text-label-code-sm text-primary-container uppercase tracking-wider mb-2">
              TELEMETRY INTAKE
            </p>
            <h1 className="font-headline text-headline-lg sm:text-display-hero font-bold tracking-tight text-tertiary leading-none mb-3">
              WHO ARE YOU?
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant max-w-lg">
              Enter your {currentPlatformInfo.name} handle to summon public profile telemetry and calculate your card power.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="usernameInput"
                className="block font-code text-label-code-sm uppercase text-on-surface-variant tracking-wider"
              >
                Developer Handle
              </label>
              <div className="relative flex items-center rounded-lg bg-surface-container-lowest border border-outline-variant/60 focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container transition-all shadow-inner">
                <div className="pl-4 pr-1 select-none pointer-events-none text-outline font-code text-label-code-lg">
                  @
                </div>
                <input
                  id="usernameInput"
                  type="text"
                  value={username}
                  onChange={(e) => onUsernameChange(e.target.value)}
                  placeholder={`Enter your ${currentPlatformInfo.name} username`}
                  className="w-full bg-transparent py-3.5 pl-1 pr-11 text-tertiary font-code text-label-code-lg placeholder:text-outline/50 border-0 focus:ring-0 focus:outline-none tracking-tight"
                  autoComplete="off"
                  spellCheck="false"
                  required
                />
                <div className="pr-3 text-outline flex items-center">
                  <span className="material-symbols-outlined text-[18px]">account_circle</span>
                </div>
              </div>
            </div>

            {/* Quick Handles */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-code text-[10px] text-outline uppercase tracking-wider">
                Sample handles:
              </span>
              {sampleHandles[platform].map((sample) => (
                <button
                  key={sample}
                  type="button"
                  onClick={() => onUsernameChange(sample)}
                  className="font-code text-label-code-sm text-tertiary-fixed-dim hover:text-tertiary bg-surface-container hover:bg-surface-container-high px-2.5 py-1 rounded-lg border border-outline-variant/40 hover:border-primary/40 transition-colors"
                >
                  {sample}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={!username.trim()}
                className="w-full relative group overflow-hidden rounded-lg p-[1px] focus:outline-none active:scale-[0.99] transition-transform duration-150 disabled:opacity-50 disabled:pointer-events-none"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-container via-secondary to-secondary-container group-hover:opacity-100 opacity-80 transition-opacity duration-300 blur-[1px]"></span>
                <div className="relative flex items-center justify-center gap-3 w-full py-4 px-6 rounded-lg bg-surface-container-lowest/95 group-hover:bg-surface-container-lowest/80 transition-colors shadow-lg shadow-surface-container-lowest/80">
                  <span className="font-code text-label-code-lg font-bold text-tertiary tracking-wider uppercase">
                    ANALYZE MY POWER
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                    bolt
                  </span>
                </div>
              </button>
            </div>

            {/* Privacy note */}
            <div className="pt-2 flex items-center justify-center gap-2 text-center text-outline">
              <span className="material-symbols-outlined text-[15px] text-tertiary-container">lock</span>
              <p className="font-code text-label-code-sm text-on-surface-variant/80">
                Read-only public profile data. No passwords or authentication required.
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
