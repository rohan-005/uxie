import React, { useState } from 'react';
import { PlatformProfile } from '../types/profile';
import { CardTemplateId } from '../types/card';
import { downloadCardImage } from '../utils/exportCard';
import { shareCard, copyShareLink, copyEmbedCode } from '../utils/share';

interface CardActionsProps {
  profile: PlatformProfile;
  selectedTemplate: CardTemplateId;
}

export const CardActions: React.FC<CardActionsProps> = ({
  profile,
  selectedTemplate,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDownload = async () => {
    setIsExporting(true);
    showToast('Exporting high-resolution card image...');
    try {
      await downloadCardImage(
        'uxie-card-export-target',
        `uxie-${profile.platform}-${profile.username}.png`
      );
      showToast('Card exported successfully!');
    } catch (e) {
      showToast('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleShare = async () => {
    const res = await shareCard(profile, selectedTemplate);
    showToast(res.message);
  };

  const handleCopyLink = async () => {
    const success = await copyShareLink(profile, selectedTemplate);
    if (success) {
      showToast('Card link copied to clipboard!');
    } else {
      showToast('Failed to copy link.');
    }
  };

  const handleCopyEmbed = async () => {
    const success = await copyEmbedCode(profile, selectedTemplate);
    if (success) {
      showToast('Iframe embed code copied to clipboard!');
    } else {
      showToast('Failed to copy embed code.');
    }
  };

  return (
    <div className="flex flex-col gap-3 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="p-2.5 rounded-lg bg-surface-container-highest border border-primary-container text-tertiary-fixed font-code text-label-code-sm text-center shadow-lg animate-pulse">
          {toastMessage}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={handleDownload}
          disabled={isExporting}
          className="px-4 py-3 rounded-lg bg-gradient-to-r from-secondary-container to-primary-container text-on-primary font-code text-label-code-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md disabled:opacity-50"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          {isExporting ? 'Exporting...' : 'Download Card'}
        </button>

        <button
          type="button"
          onClick={handleShare}
          className="px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/60 text-tertiary font-code text-label-code-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:border-primary hover:text-on-surface active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-[18px]">share</span>
          Share Card
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          type="button"
          onClick={handleCopyLink}
          className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface-variant font-code text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:text-primary hover:border-primary/50 transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">link</span>
          Copy Link
        </button>

        <button
          type="button"
          onClick={handleCopyEmbed}
          className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface-variant font-code text-[11px] uppercase tracking-wider flex items-center justify-center gap-1.5 hover:text-primary hover:border-primary/50 transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">code</span>
          Copy Embed Code
        </button>
      </div>
    </div>
  );
};
