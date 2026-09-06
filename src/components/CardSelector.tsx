import React from 'react';
import { CardTemplateId, CardTemplateInfo } from '../types/card';

export const CARD_TEMPLATES: CardTemplateInfo[] = [
  {
    id: 'template1',
    name: 'CARD 01',
    subtitle: 'GRID (Racing DNA)',
    description: 'Chassis chamfer bezel, cockpit telemetry gauge bars, and technical corner registration marks.',
    badge: 'Racing DNA',
  },
  {
    id: 'template2',
    name: 'CARD 02',
    subtitle: 'ULTIMATE (Shield Crest)',
    description: 'Gold & champagne foil shield border, deep purple velvet backdrop, and RARE FOIL ribbon seal.',
    badge: 'Shield Crest',
  },
  {
    id: 'template3',
    name: 'CARD 03',
    subtitle: 'COURT (Hardwood Pinstripe)',
    description: 'Classic vertical framing with cream & pink pinstripes, glowing rating, and translucent stat strip.',
    badge: 'Hardwood Pinstripe',
  },
];

interface CardSelectorProps {
  selectedTemplate: CardTemplateId;
  onSelectTemplate: (templateId: CardTemplateId) => void;
}

export const CardSelector: React.FC<CardSelectorProps> = ({
  selectedTemplate,
  onSelectTemplate,
}) => {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="block font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">
          SELECT SIGNATURE CARD TEMPLATE
        </label>
        <span className="font-label-sm text-label-sm text-primary tracking-widest uppercase font-semibold">
          3 COLLECTIBLE DESIGNS
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {CARD_TEMPLATES.map((tmpl) => {
          const isSelected = selectedTemplate === tmpl.id;
          return (
            <button
              key={tmpl.id}
              type="button"
              onClick={() => onSelectTemplate(tmpl.id)}
              className={`p-4 rounded-lg border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer group ${
                isSelected
                  ? 'bg-surface-container-lowest border-2 border-primary-container glow-active'
                  : 'bg-surface-container-low border-outline-variant hover:border-primary-container/70 hover:bg-surface-container'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-label-md text-label-md font-bold uppercase tracking-wider ${
                      isSelected ? 'text-primary' : 'text-on-surface-variant'
                    }`}
                  >
                    {tmpl.name}
                  </span>
                  {isSelected ? (
                    <span className="flex items-center gap-1 bg-primary-container text-on-primary-container px-2 py-0.5 rounded text-[9px] font-label-sm font-bold tracking-wider">
                      <span className="material-symbols-outlined text-[12px]">check</span>
                      ACTIVE
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 bg-surface-container text-outline font-label-sm text-[9px] uppercase">
                      {tmpl.badge}
                    </span>
                  )}
                </div>
                <div className="font-headline-sm text-headline-sm font-bold text-tertiary-fixed mb-1">
                  {tmpl.subtitle}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  {tmpl.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
