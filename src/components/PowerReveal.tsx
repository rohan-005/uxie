import React from 'react';
import { PlatformProfile } from '../types/profile';
import { CardTemplateId } from '../types/card';
import { CardRenderer } from '../cards/CardRenderer';
import { CardSelector } from './CardSelector';
import { CardActions } from './CardActions';
import { StatsGrid } from './StatsGrid';

interface PowerRevealProps {
  profile: PlatformProfile;
  selectedTemplate: CardTemplateId;
  onSelectTemplate: (templateId: CardTemplateId) => void;
  onReset: () => void;
}

export const PowerReveal: React.FC<PowerRevealProps> = ({
  profile,
  selectedTemplate,
  onSelectTemplate,
  onReset,
}) => {
  return (
    <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 lg:px-12 py-10 w-full">
      {/* Announcement Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-surface-container-lowest border border-outline-variant/50 shadow-inner">
          <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
          <span className="font-code text-label-code-sm text-primary uppercase tracking-widest">
            POWER CALCULATED
          </span>
          <span className="text-outline-variant">•</span>
          <span className="font-code text-label-code-sm text-tertiary font-bold">
            {profile.overallPower} OVR
          </span>
        </div>
        <h1 className="font-headline text-display-hero-mobile md:text-display-hero text-tertiary tracking-tight font-bold">
          YOUR CARD HAS BEEN FORGED
        </h1>
        <p className="font-code text-label-code-lg text-on-surface-variant font-medium">
          Verifiable Developer Power Card for{' '}
          <strong className="text-tertiary font-bold">@{profile.username}</strong> ({profile.platform.toUpperCase()})
        </p>
      </div>

      {/* Main Grid: Card Preview on Left, Selector & Actions on Right - Full Width 12 Columns */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start justify-center">
        {/* Left Column: Live Card Canvas (6 cols) */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="w-full flex justify-center transform transition-transform duration-300 hover:scale-[1.01]">
            <CardRenderer
              templateId={selectedTemplate}
              profile={profile}
            />
          </div>
          <p className="font-code text-label-code-sm text-on-surface-variant mt-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span>
            Collectible card forged with live profile telemetry metrics.
          </p>
        </div>

        {/* Right Column: Template Selector, Actions & Stats (6 cols) */}
        <div className="lg:col-span-6 flex flex-col gap-6 w-full">
          {/* Card Selector */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-outline-variant/40 rounded-xl p-6 shadow-xl">
            <CardSelector
              selectedTemplate={selectedTemplate}
              onSelectTemplate={onSelectTemplate}
            />
          </div>

          {/* ActionSuite */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-outline-variant/40 rounded-xl p-6 shadow-xl">
            <h2 className="font-headline text-headline-md text-on-surface flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">share</span>
              Card Deployment &amp; Export
            </h2>
            <CardActions profile={profile} selectedTemplate={selectedTemplate} />
          </div>

          {/* Detailed Telemetry Stats Grid */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-outline-variant/40 rounded-xl p-6 shadow-xl space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-headline text-headline-md text-tertiary-fixed font-bold">
                Detailed Telemetry Breakdown
              </h3>
              <button
                onClick={onReset}
                className="font-code text-label-code-sm text-primary hover:text-primary-fixed uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">refresh</span>
                New Card
              </button>
            </div>
            <StatsGrid profile={profile} />
          </div>
        </div>
      </div>
    </div>
  );
};
