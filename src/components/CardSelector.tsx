import React from 'react';
import { CardTemplateId, CardTemplateInfo } from '../types/card';

export const CARD_TEMPLATES: CardTemplateInfo[] = [
  {
    id: 'template1',
    name: 'CARD 01',
    subtitle: 'FIFA TOTY Shield',
    description: 'Custom clip-path shield geometry, lapis crystal background, gold foil typography & borders, and 6 stat metrics.',
    badge: 'FIFA TOTY SHIELD',
  },
  {
    id: 'template2',
    name: 'CARD 02',
    subtitle: 'Topps Chrome F1 PSA 10 Slab',
    description: 'Acrylic slab frame with bevels, white top PSA grading label (GEM MT 10), and ruby red/sapphire refractor inner card.',
    badge: 'PSA 10 GEM MINT SLAB',
  },
  {
    id: 'template3',
    name: 'CARD 03',
    subtitle: '90s Upper Deck Vintage',
    description: 'Teal & orange vintage sports trading card frame, Upper Deck diamond logo, vertical player name tag, and #23 badge.',
    badge: '90S UPPER DECK',
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
      <label className="block font-code text-label-code-sm uppercase text-on-surface-variant tracking-wider">
        SELECT CARD TEMPLATE
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {CARD_TEMPLATES.map((tmpl) => {
          const isSelected = selectedTemplate === tmpl.id;
          return (
            <button
              key={tmpl.id}
              type="button"
              onClick={() => onSelectTemplate(tmpl.id)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? 'bg-[#1C1224] border-2 border-primary-container shadow-[0_0_18px_rgba(222,115,156,0.3)]'
                  : 'bg-surface-container/60 border-outline-variant/40 hover:border-primary-container/60 hover:bg-surface-container'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-code text-label-code-sm font-bold ${
                      isSelected ? 'text-primary' : 'text-on-surface-variant'
                    }`}
                  >
                    {tmpl.name}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                  )}
                </div>
                <div className="font-headline text-sm font-bold text-tertiary-fixed truncate">
                  {tmpl.subtitle}
                </div>
              </div>
              <div className="mt-2 font-code text-[10px] text-on-surface-variant line-clamp-2">
                {tmpl.description}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
