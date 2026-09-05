import React from 'react';

export type PlatformType = 'github' | 'codeforces' | 'leetcode' | 'codechef';

export interface PlatformInfo {
  id: PlatformType;
  name: string;
  category: string;
  description: string;
  badge: string;
  icon: string;
}

export const PLATFORMS: PlatformInfo[] = [
  {
    id: 'github',
    name: 'GitHub',
    category: 'Open Source & Repositories',
    description: 'Tracks commits, stars, PRs, streak, and deep repository impact metrics.',
    badge: 'COMMITS & STARS',
    icon: 'deployed_code',
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    category: 'Competitive Programming',
    description: 'Tracks division, contest rating, solved problems, and global percentiles.',
    badge: 'ELO & CONTESTS',
    icon: 'leaderboard',
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    category: 'DSA & Contests',
    description: 'Tracks hard problems, contest ranking, algorithm consistency, and badges.',
    badge: 'KNIGHT / GUARDIAN',
    icon: 'local_fire_department',
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    category: 'Long & Cook-Offs',
    description: 'Tracks star rating, global rank, and long challenge mastery telemetry.',
    badge: 'STAR TIER (1★-7★)',
    icon: 'military_tech',
  },
];

interface PlatformSelectorProps {
  selectedPlatform: PlatformType;
  onSelectPlatform: (platform: PlatformType) => void;
  onContinue: () => void;
}

export const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  selectedPlatform,
  onSelectPlatform,
  onContinue,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Step Progress Tracker Bar - 100% Full Width */}
      <div className="w-full bg-surface-container-lowest/60 border-b border-outline-variant/20 relative z-10 backdrop-blur-sm">
        <div className="w-full px-6 lg:px-12 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4 font-code text-label-code-sm">
            <span className="text-primary font-bold flex items-center gap-1.5">
              <span className="w-4 h-4 rounded bg-primary-container text-on-primary-container flex items-center justify-center text-[10px]">1</span>
              PLATFORM
            </span>
            <span className="text-outline-variant">/</span>
            <span className="text-on-surface-variant/60 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded bg-surface-container-high text-on-surface-variant flex items-center justify-center text-[10px]">2</span>
              TELEMETRY
            </span>
            <span className="text-outline-variant">/</span>
            <span className="text-on-surface-variant/60 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded bg-surface-container-high text-on-surface-variant flex items-center justify-center text-[10px]">3</span>
              FOIL MINT
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="w-24 h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <span className="block h-full w-1/3 bg-gradient-to-r from-secondary-container to-primary-container"></span>
            </span>
            <span className="font-code text-label-code-sm text-on-surface-variant">33%</span>
          </div>
        </div>
      </div>

      {/* Main Full-Width Grid Container */}
      <div className="w-full px-6 lg:px-12 py-10 lg:py-16 relative z-10 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-container-low border border-primary-container/30 text-primary font-code text-label-code-sm uppercase tracking-wider mb-4 shadow-sm">
            <span className="material-symbols-outlined text-[14px]">swords</span>
            CHOOSE YOUR BATTLEGROUND
          </div>
          <h1 className="font-headline text-headline-lg text-tertiary-fixed font-bold tracking-tight mb-3">
            SELECT YOUR PLATFORM
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
            Choose where your power is forged. We will analyze your public rating, activity, and algorithmic rank to generate your power card.
          </p>
        </div>

        {/* Grid of Platform Cards - Full Width Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
          {PLATFORMS.map((platform) => {
            const isSelected = selectedPlatform === platform.id;
            return (
              <div
                key={platform.id}
                onClick={() => onSelectPlatform(platform.id)}
                className={`group relative rounded-xl p-6 backdrop-blur-md cursor-pointer transition-all duration-200 transform hover:-translate-y-1 ${
                  isSelected
                    ? 'bg-[#1C1224]/90 border-2 border-primary-container shadow-[0_0_24px_rgba(222,115,156,0.3)]'
                    : 'bg-surface-container-low/70 border border-outline-variant/30 hover:border-primary-container/60 hover:bg-surface-container-low'
                }`}
              >
                {isSelected && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-container/10 via-transparent to-secondary-container/10 pointer-events-none"></div>
                )}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg border flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-surface-container-lowest border-primary-container/40 text-primary shadow-inner'
                            : 'bg-surface-container-lowest border-outline-variant/40 text-on-surface-variant group-hover:text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[28px]">
                          {platform.icon}
                        </span>
                      </div>

                      {isSelected ? (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary-container text-on-primary-container font-code text-label-code-sm uppercase font-bold tracking-wider shadow-sm">
                          <span className="material-symbols-outlined text-[14px]">
                            check_circle
                          </span>
                          SELECTED
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
                          <span className="w-2 h-2 rounded-sm bg-transparent group-hover:bg-primary/40"></span>
                        </div>
                      )}
                    </div>

                    <div className="mb-2">
                      <span
                        className={`font-code text-label-code-sm uppercase tracking-wider block mb-0.5 ${
                          isSelected ? 'text-primary' : 'text-on-surface-variant'
                        }`}
                      >
                        {platform.category}
                      </span>
                      <h3
                        className={`font-headline text-headline-md font-bold ${
                          isSelected ? 'text-tertiary-fixed' : 'text-on-surface group-hover:text-tertiary-fixed'
                        }`}
                      >
                        {platform.name}
                      </h3>
                    </div>
                    <p className="font-body text-body-md text-on-surface-variant mb-6">
                      {platform.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                    <span
                      className={`font-code text-label-code-sm ${
                        isSelected ? 'text-tertiary-fixed-dim font-semibold' : 'text-on-surface-variant'
                      }`}
                    >
                      {platform.badge}
                    </span>
                    <div className="flex gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-sm ${
                          isSelected ? 'bg-primary-container' : 'bg-outline-variant'
                        }`}
                      ></span>
                      <span
                        className={`w-2 h-2 rounded-sm ${
                          isSelected ? 'bg-primary-container' : 'bg-outline-variant'
                        }`}
                      ></span>
                      <span
                        className={`w-2 h-2 rounded-sm ${
                          isSelected ? 'bg-primary-container' : 'bg-outline-variant'
                        }`}
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Continue Action Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={onContinue}
            className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-lg bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-code text-label-code-lg font-bold uppercase tracking-wider shadow-lg shadow-primary-container/25 hover:brightness-110 active:scale-95 transition-all duration-150"
            type="button"
          >
            <span>PROCEED TO TELEMETRY</span>
            <span className="material-symbols-outlined text-[20px]">
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
