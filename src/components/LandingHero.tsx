import React, { useState } from 'react';

interface LandingHeroProps {
  onStartClick: () => void;
  onExploreClick: () => void;
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  onStartClick,
  onExploreClick,
}) => {
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: 'rotateY(-12deg) rotateX(6deg) rotateZ(1deg)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / (rect.width / 2)) * 14;
    const rotateX = -(y / (rect.height / 2)) * 14;

    setTiltStyle({
      transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-4px)`,
      transition: 'none',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'rotateY(-12deg) rotateX(6deg) rotateZ(1deg)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Subtle Atmospheric Background Mesh Overlay across full viewport */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[580px] bg-secondary-container/15 blur-[160px] rounded-full"></div>
        <div className="absolute top-40 right-[5%] w-[500px] h-[500px] bg-primary-container/10 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-[550px] h-[550px] bg-secondary/5 blur-[200px] rounded-full"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      </div>

      {/* Hero Content Section - 100% Full Width */}
      <section className="relative w-full pt-10 md:pt-16 pb-16 lg:pb-24 px-6 lg:px-12 z-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Narrative Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-container-low border border-primary-container/30 mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 bg-primary-container rounded-sm shadow-[0_0_8px_#de739c]"></span>
              <span className="font-code text-label-code-sm uppercase text-tertiary tracking-widest font-semibold">
                VERIFIED DEVELOPER STAT DECK v2.4
              </span>
            </div>

            <h1 className="font-headline text-display-hero-mobile md:text-display-hero font-bold tracking-tight text-tertiary-fixed leading-[1.08] mb-6">
              KNOW YOUR <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-fixed via-primary to-primary-container drop-shadow-[0_0_35px_rgba(222,115,156,0.35)]">
                POWER
              </span>
            </h1>

            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mb-9 leading-relaxed">
              Transform your commits, rating milestones, and algorithmic prowess into a verifiable, holographic Developer Power Card.{' '}
              <span className="text-on-surface font-medium">Know your power. Show your progress.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={onStartClick}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-surface-container-lowest border-2 border-primary-container text-tertiary-fixed font-code text-label-code-lg font-bold uppercase tracking-wider shadow-[0_0_24px_rgba(222,115,156,0.3)] hover:shadow-[0_0_36px_rgba(222,115,156,0.55)] hover:bg-surface-container-high transition-all active:scale-95 duration-150 group"
                type="button"
              >
                <span>CREATE YOUR CARD</span>
                <span className="material-symbols-outlined text-[18px] text-primary transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-outline-variant/50 text-tertiary hover:text-on-surface hover:border-primary transition-colors font-code text-label-code-sm uppercase tracking-wider"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">token</span>
                <span>Inspect Tier Gallery</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-outline-variant/30 w-full max-w-xl">
              <div>
                <div className="font-stat-counter text-stat-counter font-bold text-tertiary-fixed">99.8%</div>
                <div className="font-code text-label-code-sm text-on-surface-variant uppercase tracking-wider">Proof Accuracy</div>
              </div>
              <div>
                <div className="font-stat-counter text-stat-counter font-bold text-primary">#14</div>
                <div className="font-code text-label-code-sm text-on-surface-variant uppercase tracking-wider">Global Rank Floor</div>
              </div>
              <div>
                <div className="font-stat-counter text-stat-counter font-bold text-tertiary-fixed">&lt;120ms</div>
                <div className="font-code text-label-code-sm text-on-surface-variant uppercase tracking-wider">Card Sync Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Graphic Column: 3D Holographic Power Card Showcase (5 cols) */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end perspective-card-wrapper relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-tr from-secondary-container/20 via-primary-container/20 to-transparent blur-[70px] rounded-full pointer-events-none"></div>

            <div
              style={tiltStyle}
              className="tilted-card relative w-full max-w-[370px] aspect-[1/1.52] rounded-2xl bg-[#1C1224]/90 backdrop-blur-xl border border-primary-container/40 shadow-[0_24px_50px_-10px_rgba(18,12,24,0.9),0_0_30px_rgba(222,115,156,0.25)] p-5 flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={onStartClick}
            >
              <div className="absolute inset-0 foil-overlay pointer-events-none rounded-2xl"></div>

              <div className="relative z-10 flex items-center justify-between border-b border-outline-variant/30 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-surface-container flex items-center justify-center border border-primary-container/40">
                    <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
                  </div>
                  <div>
                    <span className="font-code text-label-code-sm text-primary-container uppercase font-bold tracking-wider block leading-none">
                      MYTHIC MAINTAINER
                    </span>
                    <span className="font-code text-[9px] text-on-surface-variant tracking-wider leading-none">
                      SERIES 01 // ID #0492
                    </span>
                  </div>
                </div>
                <div className="px-2 py-0.5 rounded-lg bg-primary-container/20 border border-primary-container/50">
                  <span className="font-code text-label-code-sm text-tertiary-fixed font-bold tracking-wider">TOP 0.1%</span>
                </div>
              </div>

              <div className="relative z-10 my-3 rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-lowest/80 p-3">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src="/fifa.jpeg"
                      alt="Developer Avatar Demo"
                      className="w-12 h-12 rounded-xl object-cover border border-primary-container/40 shadow-sm"
                    />
                    <div>
                      <div className="font-headline text-headline-md font-bold text-tertiary-fixed leading-tight">alex.sys</div>
                      <div className="font-code text-label-code-sm text-tertiary">staff-l8 // distributed-mesh</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-stat-counter text-stat-counter font-bold text-tertiary-fixed leading-none">98</div>
                    <div className="font-code text-[10px] text-primary tracking-widest uppercase">UXIE POWER</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-outline-variant/30">
                  <div className="flex items-center gap-2 p-1.5 rounded-md bg-surface-container/60 border border-outline-variant/25">
                    <span className="material-symbols-outlined text-[16px] text-primary">terminal</span>
                    <div className="truncate">
                      <div className="font-code text-[10px] text-on-surface-variant leading-none">GitHub Activity</div>
                      <div className="font-code text-label-code-sm font-bold text-on-surface">3,412 / YR</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-md bg-surface-container/60 border border-outline-variant/25">
                    <span className="material-symbols-outlined text-[16px] text-tertiary">code_blocks</span>
                    <div className="truncate">
                      <div className="font-code text-[10px] text-on-surface-variant leading-none">LeetCode Knight</div>
                      <div className="font-code text-label-code-sm font-bold text-tertiary-fixed">2,488 ELO</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-2.5">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-code text-[10px] text-on-surface-variant uppercase tracking-wider">Algorithmic Velocity</span>
                    <span className="font-code text-[11px] font-bold text-tertiary-fixed">98 / 100</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-lowest rounded-sm overflow-hidden border border-outline-variant/30 p-[1px]">
                    <div className="h-full bg-gradient-to-r from-secondary-container to-primary-container rounded-sm w-[98%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-code text-[10px] text-on-surface-variant uppercase tracking-wider">Maintainer Influence</span>
                    <span className="font-code text-[11px] font-bold text-tertiary-fixed">94 / 100</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-lowest rounded-sm overflow-hidden border border-outline-variant/30 p-[1px]">
                    <div className="h-full bg-gradient-to-r from-secondary to-primary rounded-sm w-[94%]"></div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between pt-3 border-t border-outline-variant/30 mt-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-sm bg-tertiary"></span>
                  <span className="font-code text-[10px] text-on-surface-variant uppercase">EDITION 01/500</span>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <span className="font-code text-[10px] uppercase font-bold tracking-widest">HOLO-PRISM</span>
                  <span className="material-symbols-outlined text-[12px]">auto_awesome</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="w-full border-y border-outline-variant/30 bg-surface-container-low/60 backdrop-blur-sm py-6 px-6 lg:px-12 relative z-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center border border-primary-container/30 text-primary">
              <span className="material-symbols-outlined text-[20px]">verified_user</span>
            </div>
            <div>
              <div className="font-code text-label-code-lg text-tertiary-fixed font-bold tracking-wide">
                50,000+ DEVELOPER CARDS MINTED
              </div>
              <div className="font-code text-label-code-sm text-on-surface-variant">
                Across verified GitHub, Codeforces, LeetCode &amp; CodeChef profiles
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-on-surface-variant font-code text-label-code-sm uppercase tracking-wider">
            <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>GITHUB</span>
            </div>
            <div className="w-1 h-1 bg-outline-variant/60 rounded-sm"></div>
            <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">military_tech</span>
              <span>CODEFORCES</span>
            </div>
            <div className="w-1 h-1 bg-outline-variant/60 rounded-sm"></div>
            <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">code</span>
              <span>LEETCODE</span>
            </div>
            <div className="w-1 h-1 bg-outline-variant/60 rounded-sm"></div>
            <div className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">restaurant</span>
              <span>CODECHEF</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section - 100% Full Width */}
      <section className="w-full py-20 px-6 lg:px-12 relative z-10">
        <div className="mb-12">
          <div className="font-code text-label-code-sm text-primary uppercase tracking-widest font-semibold mb-2">
            ENGINEER RECOGNITION PRIMITIVES
          </div>
          <h2 className="font-headline text-headline-lg font-bold text-tertiary-fixed tracking-tight">
            Not another generic badge. Physical-grade digital status.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="rounded-xl p-6 bg-surface-container/60 border border-outline-variant/30 hover:border-primary-container/60 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px]">fingerprint</span>
              </div>
              <div className="font-headline text-headline-md text-tertiary-fixed font-bold mb-2">Public Profile Analytics</div>
              <p className="text-on-surface-variant font-body text-body-md leading-relaxed">
                Every commit, contest rating, and pull request is fetched and normalized by the UXIE engine, calculating your true power score.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="font-code text-label-code-sm uppercase text-tertiary">REAL-TIME DATA ENGINE</span>
              <span className="material-symbols-outlined text-[16px] text-primary">key</span>
            </div>
          </div>

          <div className="rounded-xl p-6 bg-surface-container/60 border border-outline-variant/30 hover:border-primary-container/60 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-secondary mb-4 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px]">layers</span>
              </div>
              <div className="font-headline text-headline-md text-tertiary-fixed font-bold mb-2">Collector Tier Rarities</div>
              <p className="text-on-surface-variant font-body text-body-md leading-relaxed">
                Ascend from Common to Mythic. Dynamic collectible card styling, frames, and neon treatments adapt to your power rating.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="font-code text-label-code-sm uppercase text-tertiary">5 PRESTIGE TIERS</span>
              <span className="material-symbols-outlined text-[16px] text-secondary">military_tech</span>
            </div>
          </div>

          <div className="rounded-xl p-6 bg-surface-container/60 border border-outline-variant/30 hover:border-primary-container/60 transition-all group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-tertiary mb-4 group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[22px]">share</span>
              </div>
              <div className="font-headline text-headline-md text-tertiary-fixed font-bold mb-2">Export &amp; Share</div>
              <p className="text-on-surface-variant font-body text-body-md leading-relaxed">
                Download ultra-high resolution PNG cards, copy share links, or generate HTML embed snippets for your GitHub README.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="font-code text-label-code-sm uppercase text-tertiary">PNG &amp; EMBED SNIPPETS</span>
              <span className="material-symbols-outlined text-[16px] text-tertiary">code</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
