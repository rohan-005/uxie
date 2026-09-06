import React from 'react';

export type PlatformType = 'github' | 'codeforces' | 'leetcode' | 'codechef';

export interface PlatformInfo {
  id: PlatformType;
  name: string;
  code: string;
  vectorCode: string;
  description: string;
  vectors: string[];
}

export const PLATFORMS: PlatformInfo[] = [
  {
    id: 'github',
    name: 'GitHub',
    code: '01',
    vectorCode: 'PRIMARY_VECTOR // 01',
    description: 'Direct telemetry integration with developer activity graphs, public repositories, and collective ecosystem contributions.',
    vectors: ['Commits', 'PRs', 'Stars', 'OS Impact', 'Versatility'],
  },
  {
    id: 'codeforces',
    name: 'Codeforces',
    code: '02',
    vectorCode: 'ENGINE_VECTOR // 02',
    description: 'High-cadence competitive programming metrics based on real-time timed contests and algorithmic duel rankings.',
    vectors: ['Contest Elo', 'Division Status', 'Peak Rating', 'Difficulty'],
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    code: '03',
    vectorCode: 'ALGO_VECTOR // 03',
    description: 'Data structures and algorithmic rigor. Measures problem mastery across Hard/Medium tiers and weekly contest rating.',
    vectors: ['Solved Count', 'Contest Rating', 'Acceptance Rate', 'Algorithms'],
  },
  {
    id: 'codechef',
    name: 'CodeChef',
    code: '04',
    vectorCode: 'ARENA_VECTOR // 04',
    description: 'Star division tiering from 1-Star to 7-Star Grandmaster, sustained endurance long challenges, and algorithmic speed.',
    vectors: ['Stars Rating', 'Long Challenge', 'Global Rank'],
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
    <main className="w-full max-w-[1440px] mx-auto px-gutter-mobile md:px-gutter-desktop pt-8 pb-12 flex-1 relative z-10 flex flex-col justify-between">
      {/* Header Section */}
      <div className="mb-10 max-w-4xl">
        {/* Monospace Badge */}
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-surface-container-high border-l-2 border-primary-container border-y border-r border-outline-variant mb-3">
          <span className="w-1.5 h-1.5 bg-primary-container animate-pulse"></span>
          <span className="text-primary-container font-label-sm text-label-sm tracking-wider">
            STEP 01: SELECT DATA VECTOR
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-tertiary-fixed tracking-tight font-bold mb-2 uppercase">
          CHOOSE YOUR PLATFORM
        </h1>

        {/* Subtext */}
        <p className="text-on-surface-variant font-body-md text-body-md max-w-2xl leading-relaxed">
          Select the competitive engine or repository telemetry to benchmark your developer power score.
        </p>

        {/* Stepper Indicator */}
        <div className="mt-6 flex items-center gap-2 max-w-sm">
          <div className="h-1 flex-1 bg-primary-container"></div>
          <div className="h-1 flex-1 bg-surface-variant"></div>
          <div className="h-1 flex-1 bg-surface-variant"></div>
          <div className="h-1 flex-1 bg-surface-variant"></div>
        </div>
      </div>

      {/* CARDS GRID: 4 Platform Vectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" id="platform-grid">
        {PLATFORMS.map((platform) => {
          const isSelected = selectedPlatform === platform.id;
          return (
            <div
              key={platform.id}
              onClick={() => onSelectPlatform(platform.id)}
              tabIndex={0}
              role="radio"
              aria-checked={isSelected}
              className={`platform-card relative p-5 bg-surface-container-lowest carbon-surface rounded cursor-pointer transition-all duration-200 group focus:outline-none flex flex-col justify-between min-h-[290px] ${
                isSelected
                  ? 'border-2 border-primary-container glow-active'
                  : 'border border-outline-variant hover:border-primary-container/80'
              }`}
            >
              {/* Corner Technical Registration Marks */}
              <div
                className={`absolute top-1.5 left-1.5 w-2 h-2 border-t border-l pointer-events-none ${
                  isSelected ? 'border-primary-container' : 'border-outline-variant group-hover:border-primary-container'
                }`}
              ></div>
              <div
                className={`absolute top-1.5 right-1.5 w-2 h-2 border-t border-r pointer-events-none ${
                  isSelected ? 'border-primary-container' : 'border-outline-variant group-hover:border-primary-container'
                }`}
              ></div>
              <div
                className={`absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l pointer-events-none ${
                  isSelected ? 'border-primary-container' : 'border-outline-variant group-hover:border-primary-container'
                }`}
              ></div>
              <div
                className={`absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r pointer-events-none ${
                  isSelected ? 'border-primary-container' : 'border-outline-variant group-hover:border-primary-container'
                }`}
              ></div>

              {/* Upper Card Region */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-surface-container flex items-center justify-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)] ${
                        isSelected
                          ? 'border border-primary-container text-primary-fixed'
                          : 'border border-outline-variant group-hover:border-primary-container/70 text-primary'
                      }`}
                    >
                      {platform.id === 'github' && (
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          ></path>
                        </svg>
                      )}
                      {platform.id === 'codeforces' && (
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M4.5 7.5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-3 0V9a1.5 1.5 0 011.5-1.5z" fill="#FFC107"></path>
                          <path d="M12 3a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-3 0v-15A1.5 1.5 0 0112 3z" fill="#2196F3"></path>
                          <path d="M19.5 11.5a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-3 0v-7a1.5 1.5 0 011.5-1.5z" fill="#F44336"></path>
                        </svg>
                      )}
                      {platform.id === 'leetcode' && (
                        <svg className="w-6 h-6 fill-[#FFA116]" viewBox="0 0 24 24">
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l5.356-5.356a1.378 1.378 0 0 0-.96-2.321h-.043z"></path>
                          <path d="M9.833 13.92h8.793a1.377 1.377 0 1 0 0-2.754H9.833a1.377 1.377 0 1 0 0 2.754z"></path>
                        </svg>
                      )}
                      {platform.id === 'codechef' && (
                        <span className="material-symbols-outlined text-[26px] text-tertiary-fixed">
                          restaurant_menu
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-tertiary-fixed font-headline-sm text-headline-sm font-semibold tracking-wide">
                        {platform.name}
                      </h3>
                      <span
                        className={`font-label-sm text-label-sm tracking-widest uppercase ${
                          isSelected ? 'text-primary-container' : 'text-outline'
                        }`}
                      >
                        {platform.vectorCode}
                      </span>
                    </div>
                  </div>

                  {isSelected ? (
                    <div className="flex items-center gap-1 bg-primary-container text-on-primary-container px-2 py-0.5 rounded text-[10px] font-label-md font-bold tracking-wider">
                      <span className="material-symbols-outlined text-[13px]">check</span>
                      <span>SELECTED</span>
                    </div>
                  ) : (
                    <div className="w-4 h-4 border border-outline group-hover:border-primary-container flex items-center justify-center transition-colors">
                      <div className="w-2 h-2 bg-transparent"></div>
                    </div>
                  )}
                </div>

                <p className="text-on-surface-variant font-body-sm text-body-sm mb-4 leading-relaxed">
                  {platform.description}
                </p>
              </div>

              {/* Bottom Metric Matrix / Telemetry Tags */}
              <div className="pt-3 border-t border-outline-variant/60">
                <div className="text-[10px] text-tertiary-fixed/70 font-label-sm uppercase mb-2 tracking-wider">
                  Telemetry Vectors:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {platform.vectors.map((vector, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 bg-surface-container border-l-2 text-tertiary-fixed font-label-sm text-label-sm ${
                        isSelected ? 'border-primary-container' : 'border-outline'
                      }`}
                    >
                      {vector}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Primary Action Dock */}
      <div className="flex justify-between items-center pt-6 border-t border-outline-variant">
        <div className="text-label-sm font-label-sm text-outline uppercase tracking-wider">
          CURRENT VECTOR: <span className="text-primary font-bold">{selectedPlatform.toUpperCase()}</span>
        </div>
        <button
          onClick={onContinue}
          className="bg-primary-container text-on-primary-container font-label-md text-label-md px-8 py-3.5 rounded font-bold hover:shadow-[0_0_16px_rgba(222,115,156,0.5)] active:scale-[0.98] transition-all flex items-center gap-2 border border-primary-container cursor-pointer"
          type="button"
        >
          <span>SYNCHRONIZE IDENTITY</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>
    </main>
  );
};
