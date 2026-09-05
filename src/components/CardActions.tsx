import React from 'react';
import { PlatformProfile } from '../types/profile';
import { CardTemplateId } from '../types/card';

interface CardActionsProps {
  profile: PlatformProfile;
  selectedTemplate: CardTemplateId;
}

export const CardActions: React.FC<CardActionsProps> = ({
  profile,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="px-4 py-3 rounded-lg bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-code text-label-code-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          Download Card
        </button>
        <button
          type="button"
          className="px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/60 text-tertiary font-code text-label-code-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:border-primary hover:text-on-surface active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">share</span>
          Share Card
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface-variant font-code text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:text-primary hover:border-primary/50 transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">link</span>
          Copy Link
        </button>
        <button
          type="button"
          className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface-variant font-code text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:text-primary hover:border-primary/50 transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">code</span>
          Copy Embed Code
        </button>
      </div>
    </div>
  );
};
