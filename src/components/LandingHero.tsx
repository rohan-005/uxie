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
    transform: 'rotateY(-14deg) rotateX(10deg) rotateZ(2deg)',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateY = (x / (rect.width / 2)) * 12;
    const rotateX = -(y / (rect.height / 2)) * 12;

    setTiltStyle({
      transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-8px)`,
      boxShadow: '0 0 32px rgba(222, 115, 156, 0.35)',
      transition: 'none',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'rotateY(-14deg) rotateX(10deg) rotateZ(2deg)',
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
    });
  };

  return (
    <div className="relative w-full overflow-hidden flex-grow flex flex-col justify-between">
      {/* Background atmospheric glow & grid mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[540px] h-[540px] bg-secondary-container opacity-25 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 right-10 w-[420px] h-[420px] bg-primary-container opacity-15 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 grid-lines opacity-40"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-gutter-desktop py-space-2xl md:py-space-3xl relative z-10 w-full">
        {/* Top Dossier Micro-Tag */}
        <div className="flex items-center gap-space-xs mb-space-lg">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface-container border-l-2 border-primary-container text-label-sm font-label-sm text-tertiary tracking-widest uppercase rounded-DEFAULT">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
            UXIE PROTOCOL V2.4 // TELEMETRY POWER CARDS
          </span>
          <span className="text-outline text-label-sm font-label-sm hidden sm:inline-block tracking-wider">
            // SYSTEM CLEARANCE: OMNI
          </span>
        </div>

        {/* Hero Grid: 12 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Hero Copy (7 cols desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="mb-space-xs inline-flex items-center gap-2 text-label-md font-label-md text-primary tracking-widest uppercase">
              <span className="material-symbols-outlined text-[15px]">verified</span>
              COMPETITIVE DEVELOPER PROOF-OF-CAPABILITY
            </div>

            {/* Bold Commanding Headline */}
            <h1 className="text-display-xl-mobile md:text-display-xl font-display-xl tracking-tight text-on-surface uppercase mb-space-md">
              KNOW YOUR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container via-primary to-tertiary drop-shadow-[0_0_24px_rgba(222,115,156,0.45)]">
                POWER
              </span>
            </h1>

            {/* Tagline Subtext */}
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl mb-space-xl leading-relaxed">
              Turn your commits, algorithm rating, and competitive coding milestones into dynamic, verifiable collectible Power Cards.
            </p>

            {/* CTAs & Micro Actions */}
            <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
              {/* Primary Button */}
              <button
                onClick={onStartClick}
                className="w-full sm:w-auto bg-primary-container text-on-primary-container font-label-lg text-label-lg px-space-xl py-3.5 rounded-lg font-bold border border-primary-container hover:shadow-[0_0_20px_rgba(222,115,156,0.6)] active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-space-sm cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">bolt</span>
                CREATE YOUR CARD
              </button>

              {/* Secondary Button */}
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto bg-surface-container-low text-tertiary hover:border-primary-container border border-outline-variant font-label-lg text-label-lg px-space-lg py-3.5 rounded-lg hover:text-on-surface transition-all duration-150 flex items-center justify-center gap-space-xs cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">view_carousel</span>
                EXPLORE SHOWCASE
              </button>
            </div>

            {/* Quick Telemetry Integrations Strip */}
            <div className="mt-space-2xl pt-space-md border-t border-outline-variant w-full max-w-lg">
              <div className="text-label-sm font-label-sm text-outline uppercase tracking-wider mb-space-sm">
                SYNCHRONIZING TELEMETRY FROM ELITE PLATFORMS
              </div>
              <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-md text-label-md">
                <span className="flex items-center gap-1.5 px-2 py-1 bg-surface-container border border-outline-variant rounded-lg">
                  <span className="material-symbols-outlined text-[15px] text-primary">data_object</span> GitHub
                </span>
                <span className="flex items-center gap-1.5 px-2 py-1 bg-surface-container border border-outline-variant rounded-lg">
                  <span className="material-symbols-outlined text-[15px] text-primary">code</span> LeetCode
                </span>
                <span className="flex items-center gap-1.5 px-2 py-1 bg-surface-container border border-outline-variant rounded-lg">
                  <span className="material-symbols-outlined text-[15px] text-primary">terminal</span> Codeforces
                </span>
                <span className="flex items-center gap-1.5 px-2 py-1 bg-surface-container border border-outline-variant rounded-lg">
                  <span className="material-symbols-outlined text-[15px] text-primary">restaurant_menu</span> CodeChef
                </span>
              </div>
            </div>
          </div>

          {/* Right Hero Preview: Holographic Power Card (5 cols desktop) */}
          <div
            className="lg:col-span-5 flex justify-center lg:justify-end perspective-card relative mt-space-xl lg:mt-0"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Outer Ambient Glow Behind Card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary-container via-primary-container to-tertiary-container rounded-xl blur-2xl opacity-20 transform -rotate-3"></div>

            {/* The Power Card (Standard 2.5:3.5 Collectible Aspect Ratio) */}
            <div
              style={tiltStyle}
              className="relative w-[320px] sm:w-[360px] aspect-[2.5/3.5] bg-surface-container-low border-2 border-outline-variant rounded-xl p-3 shadow-2xl flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={onStartClick}
            >
              {/* Holographic Sheen Layer */}
              <div className="absolute inset-0 holographic-sheen pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity duration-300"></div>

              {/* Specular Corner Registration Marks */}
              <div className="absolute top-1.5 left-1.5 text-outline text-[9px] font-label-sm tracking-tighter select-none">┌ 0x9F</div>
              <div className="absolute top-1.5 right-1.5 text-outline text-[9px] font-label-sm tracking-tighter select-none">┐ 2.5:3.5</div>
              <div className="absolute bottom-1.5 left-1.5 text-outline text-[9px] font-label-sm tracking-tighter select-none">└ 99.8%</div>
              <div className="absolute bottom-1.5 right-1.5 text-outline text-[9px] font-label-sm tracking-tighter select-none">┘ MINTED</div>

              {/* Card Header Section */}
              <div className="relative z-10 border-b border-outline-variant pb-2 pt-1">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-surface-container-lowest border-l border-primary-container text-label-sm font-label-sm text-tertiary rounded-DEFAULT">
                      <span className="material-symbols-outlined text-[12px] text-primary">military_tech</span>
                      TIER 0 // GRANDMASTER
                    </div>
                    <h3 className="text-headline-sm font-headline-sm text-tertiary tracking-wide mt-1">
                      CYBER_VALKYRIE
                    </h3>
                    <p className="text-label-sm font-label-sm text-outline">CLASS: DISTRIBUTED SYSTEMS ARCHITECT</p>
                  </div>
                  <div className="text-right">
                    <div className="text-stat-metric font-stat-metric text-primary leading-none">99.4</div>
                    <div className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">PWR INDEX</div>
                  </div>
                </div>
              </div>

              {/* Developer Avatar & Holographic Center Dossier */}
              <div className="relative z-10 my-2 flex-grow flex flex-col justify-center">
                <div className="relative w-full h-36 rounded-lg overflow-hidden border border-outline-variant bg-surface-container-lowest group/img">
                  <img
                    className="w-full h-full object-cover object-center opacity-85 group-hover/img:scale-105 transition-transform duration-500"
                    alt="Holographic developer profile avatar"
                    src="/fifa.jpeg"
                  />
                  {/* Foil Badge Overlay */}
                  <div className="absolute top-2 right-2 bg-surface-container-lowest/90 backdrop-blur-sm border border-primary-container px-2 py-0.5 rounded-DEFAULT text-label-sm font-label-sm text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">auto_awesome</span>
                    HOLO FOIL #042
                  </div>
                  {/* Live Sparks Indicator */}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-surface-container-lowest/90 px-1.5 py-0.5 rounded-DEFAULT border border-outline-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-label-sm font-label-sm text-tertiary">SYNCED // 12m AGO</span>
                  </div>
                </div>

                {/* Metric Matrix: Internal Wells */}
                <div className="grid grid-cols-3 gap-1.5 mt-2.5">
                  <div className="bg-surface-container-lowest border border-outline-variant p-2 rounded-lg text-center shadow-inner">
                    <div className="text-label-sm font-label-sm text-outline uppercase">PROB SOLVING</div>
                    <div className="text-label-lg font-label-lg text-tertiary font-bold mt-0.5">2,840</div>
                    <div className="w-full bg-surface-container h-1 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-primary-container h-full w-[94%]"></div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant p-2 rounded-lg text-center shadow-inner">
                    <div className="text-label-sm font-label-sm text-outline uppercase">CONSISTENCY</div>
                    <div className="text-label-lg font-label-lg text-primary font-bold mt-0.5">412 D</div>
                    <div className="w-full bg-surface-container h-1 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-primary-container h-full w-[88%]"></div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant p-2 rounded-lg text-center shadow-inner">
                    <div className="text-label-sm font-label-sm text-outline uppercase">ALGORITHMS</div>
                    <div className="text-label-lg font-label-lg text-tertiary font-bold mt-0.5">TOP 0.1%</div>
                    <div className="w-full bg-surface-container h-1 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-primary h-full w-[99%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Verification & Cryptographic Stamp */}
              <div className="relative z-10 border-t border-outline-variant pt-2 flex justify-between items-center bg-surface-container-lowest/60 px-2 py-1.5 rounded-lg">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-primary">qr_code_2</span>
                  <div>
                    <div className="text-label-sm font-label-sm text-on-surface font-semibold tracking-wider">SHA256: 8e2d...01ca</div>
                    <div className="text-[8px] font-label-sm text-outline leading-none">VERIFIED ON ETH &amp; GITHUB LEDGER</div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-label-sm font-label-sm text-primary tracking-widest uppercase font-bold">UXIE CARD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Bento: Mechanics of Power Cards */}
      <section className="max-w-[1440px] mx-auto px-gutter-desktop py-space-2xl border-t border-outline-variant w-full">
        <div className="mb-space-xl flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <div className="text-label-sm font-label-sm text-primary tracking-widest uppercase mb-1">
              ARCHITECTURAL SPECIFICATION
            </div>
            <h2 class="text-headline-lg font-headline-lg text-on-surface">
              TELEMETRY BECOMES TACTILE PRESTIGE
            </h2>
          </div>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-md">
            Immutable cryptographic proof tied to your real git trees and algorithmic submissions. No fluff, pure engineering telemetry.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-space-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[22px]">hub</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-tertiary mb-space-xs">Multi-Platform Ingestion</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Seamlessly pipelines commit histories, pull request velocity, contest rating deltas, and open-source impact into one coherent index.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-outline-variant/60 flex items-center justify-between text-label-sm font-label-sm text-outline">
              <span>SYNC INTERVAL</span>
              <span className="text-primary font-bold">15 MINUTES</span>
            </div>
          </div>

          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-space-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container/10 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[22px]">verified_user</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-tertiary mb-space-xs">Cryptographic Integrity</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Every minted card is signed with public keys from verified platform accounts, eliminating spoofing and resume inflation forever.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-outline-variant/60 flex items-center justify-between text-label-sm font-label-sm text-outline">
              <span>SIGNATURE TYPE</span>
              <span className="text-primary font-bold">ED25519 VERIFIED</span>
            </div>
          </div>

          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-space-lg relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/10 rounded-bl-full pointer-events-none"></div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant flex items-center justify-center text-primary mb-space-md">
                <span className="material-symbols-outlined text-[22px]">social_leaderboard</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-tertiary mb-space-xs">Global Arena Rankings</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                Compare your power card with engineers worldwide across specific domains: Kernel hacking, AI agents, Web3 protocols, and DSA speed.
              </p>
            </div>
            <div className="mt-space-lg pt-space-sm border-t border-outline-variant/60 flex items-center justify-between text-label-sm font-label-sm text-outline">
              <span>LEADERBOARD TIERS</span>
              <span className="text-primary font-bold">BRONZE → TITAN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Stats Banner at Bottom */}
      <section className="border-t border-b border-outline-variant bg-surface-container-lowest w-full">
        <div className="max-w-[1440px] mx-auto px-gutter-desktop py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-outline-variant">
            <div className="py-space-sm md:py-0 md:pr-space-lg flex flex-col justify-center">
              <div className="text-stat-metric font-stat-metric text-on-surface tracking-tight mb-1">
                240,000+
              </div>
              <div className="text-label-md font-label-md text-primary uppercase tracking-wider font-semibold">
                Cards Minted
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                Distributed across 84 countries and elite engineering organizations.
              </p>
            </div>

            <div className="py-space-sm md:py-0 md:px-space-lg flex flex-col justify-center">
              <div className="text-stat-metric font-stat-metric text-on-surface tracking-tight mb-1 flex items-center justify-center md:justify-start gap-2">
                <span>18</span>
                <span className="text-label-sm font-label-sm px-2 py-0.5 bg-secondary-container text-on-surface rounded-DEFAULT font-normal">
                  NATIVE APIS
                </span>
              </div>
              <div className="text-label-md font-label-md text-primary uppercase tracking-wider font-semibold">
                Top Platforms Connected
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                GitHub, LeetCode, Codeforces, AtCoder, HackerRank, Kaggle &amp; GitLab.
              </p>
            </div>

            <div className="py-space-sm md:py-0 md:pl-space-lg flex flex-col justify-center">
              <div className="text-stat-metric font-stat-metric text-on-surface tracking-tight mb-1">
                24/7 LIVE
              </div>
              <div className="text-label-md font-label-md text-primary uppercase tracking-wider font-semibold">
                Daily Global Leaderboard
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
                Real-time ELO reassessment powered by verifiable telemetry proofs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
