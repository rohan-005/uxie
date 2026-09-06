import React, { useState } from 'react';
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
  const [viewMode, setViewMode] = useState<'single' | 'compare'>('single');

  return (
    <main className="flex-1 w-full max-w-[1440px] mx-auto px-gutter-mobile md:px-gutter-desktop py-8 md:py-12 flex flex-col gap-8 md:gap-10">
      {/* Header Section with Mode Switcher */}
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-surface-variant">
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-surface-container-high border-l-2 border-primary-container text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-widest">
              ARCHITECTURAL DOSSIER #{profile.overallPower}
            </span>
            <span className="text-outline font-label-sm text-label-sm">•</span>
            <span className="text-primary font-label-sm text-label-sm">TELEMETRY VERIFIED</span>
          </div>
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface tracking-tight uppercase">
            YOUR POWER CARD FORGED
          </h1>
          <p className="text-on-surface-variant text-body-md font-body-md">
            Compare signature collectible styles inspired by iconic sports card eras for @{profile.username}.
          </p>
        </div>

        {/* View Switcher: Single View vs Compare All 3 */}
        <div className="flex items-center self-start md:self-auto bg-surface-container-lowest p-1 border border-outline-variant rounded">
          <button
            type="button"
            onClick={() => setViewMode('single')}
            className={`px-4 py-2 rounded text-label-md font-label-md uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              viewMode === 'single'
                ? 'bg-surface-container-high text-primary border border-outline-variant'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-base">style</span>
            <span>Single View</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('compare')}
            className={`px-4 py-2 rounded text-label-md font-label-md uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
              viewMode === 'compare'
                ? 'bg-surface-container-high text-primary border border-outline-variant'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-base">view_column</span>
            <span>Compare 3 Cards</span>
          </button>
        </div>
      </section>

      {/* Global Dossier Metadata HUD */}
      <div className="bg-surface-container-lowest border border-outline-variant p-3 md:p-4 rounded flex flex-wrap items-center justify-between gap-4 text-label-md font-label-md">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-primary-container"></div>
          <div>
            <span className="text-outline uppercase text-label-sm">CODENAME:</span>
            <span className="text-tertiary-fixed font-bold tracking-wider ml-1 uppercase">{profile.username}</span>
          </div>
          <span className="text-surface-variant">/</span>
          <div>
            <span className="text-outline uppercase text-label-sm">PLATFORM:</span>
            <span className="text-on-surface ml-1 uppercase">{profile.platform}</span>
          </div>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto py-1">
          <div className="flex items-center gap-2">
            <span className="text-outline">OVR:</span>
            <span className="text-primary font-bold text-headline-sm font-headline-sm">{profile.overallPower}</span>
          </div>
          <div className="flex items-center gap-4 text-label-sm font-label-sm text-on-surface-variant">
            <span>{profile.stats.stat1.label.substring(0, 4)} <strong className="text-tertiary-fixed">{profile.stats.stat1.value}</strong></span>
            <span>{profile.stats.stat2.label.substring(0, 4)} <strong className="text-primary">{profile.stats.stat2.value}</strong></span>
            <span>{profile.stats.stat3.label.substring(0, 4)} <strong className="text-tertiary-fixed">{profile.stats.stat3.value}</strong></span>
            <span>{profile.stats.stat4.label.substring(0, 4)} <strong className="text-outline">{profile.stats.stat4.value}</strong></span>
          </div>
        </div>
      </div>

      {/* Single Mode View */}
      {viewMode === 'single' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-center">
          {/* Card Preview Canvas (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-[380px]">
              <CardRenderer templateId={selectedTemplate} profile={profile} />
            </div>
            <p className="text-label-sm font-label-sm text-outline mt-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-primary-container rounded-full"></span>
              Physical-grade collectible card forged with live profile telemetry.
            </p>
          </div>

          {/* Template Selector, Actions & Stats (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6 w-full">
            <div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
              <CardSelector selectedTemplate={selectedTemplate} onSelectTemplate={onSelectTemplate} />
            </div>

            <div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
              <h2 className="text-headline-sm font-headline-sm text-on-surface flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">share</span>
                Card Export &amp; Sharing Options
              </h2>
              <CardActions profile={profile} selectedTemplate={selectedTemplate} />
            </div>

            <div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-headline-sm font-headline-sm text-tertiary-fixed font-bold">
                  Detailed Telemetry Metrics
                </h3>
                <button
                  type="button"
                  onClick={onReset}
                  className="font-label-sm text-label-sm text-primary hover:text-primary-fixed uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">refresh</span>
                  Forge Another
                </button>
              </div>
              <StatsGrid profile={profile} />
            </div>
          </div>
        </div>
      )}

      {/* Compare View: 3 Cards Side by Side */}
      {viewMode === 'compare' && (
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-headline-sm font-headline-sm text-on-surface">VARIANT 01 // GRID</h2>
                <span className="px-2 py-0.5 bg-surface-container-high text-primary font-label-sm text-label-sm uppercase">
                  Racing DNA
                </span>
              </div>
              <CardRenderer templateId="template1" profile={profile} />
              <button
                type="button"
                onClick={() => {
                  onSelectTemplate('template1');
                  setViewMode('single');
                }}
                className="w-full py-2.5 bg-primary-container text-on-primary-container rounded font-label-md text-label-md font-bold uppercase tracking-wider hover:shadow-[0_0_12px_rgba(222,115,156,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>SELECT THIS STYLE</span>
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-headline-sm font-headline-sm text-on-surface">VARIANT 02 // ULTIMATE</h2>
                <span className="px-2 py-0.5 bg-surface-container-high text-tertiary-fixed font-label-sm text-label-sm uppercase">
                  Shield Crest
                </span>
              </div>
              <CardRenderer templateId="template2" profile={profile} />
              <button
                type="button"
                onClick={() => {
                  onSelectTemplate('template2');
                  setViewMode('single');
                }}
                className="w-full py-2.5 bg-surface-container-high border border-outline-variant hover:border-tertiary-fixed text-tertiary-fixed rounded font-label-md text-label-md font-bold uppercase tracking-wider hover:shadow-[0_0_12px_rgba(246,238,197,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>SELECT THIS STYLE</span>
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-headline-sm font-headline-sm text-on-surface">VARIANT 03 // COURT</h2>
                <span className="px-2 py-0.5 bg-surface-container-high text-secondary font-label-sm text-label-sm uppercase">
                  Hardwood Pinstripe
                </span>
              </div>
              <CardRenderer templateId="template3" profile={profile} />
              <button
                type="button"
                onClick={() => {
                  onSelectTemplate('template3');
                  setViewMode('single');
                }}
                className="w-full py-2.5 bg-surface-container-high border border-outline-variant hover:border-primary text-primary rounded font-label-md text-label-md font-bold uppercase tracking-wider hover:shadow-[0_0_12px_rgba(222,115,156,0.4)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">check_circle</span>
                <span>SELECT THIS STYLE</span>
              </button>
            </div>
          </div>

          <div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
            <h2 className="text-headline-sm font-headline-sm text-on-surface flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">share</span>
              Card Export &amp; Sharing Options
            </h2>
            <CardActions profile={profile} selectedTemplate={selectedTemplate} />
          </div>
        </div>
      )}
    </main>
  );
};
