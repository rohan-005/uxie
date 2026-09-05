import { PlatformProfile } from '../types/profile';
import { CardTemplateId } from '../types/card';

export async function shareCard(
  profile: PlatformProfile,
  selectedTemplate: CardTemplateId
): Promise<{ success: boolean; message: string }> {
  const shareUrl = `${window.location.origin}${window.location.pathname}?platform=${profile.platform}&username=${encodeURIComponent(profile.username)}&template=${selectedTemplate}`;
  const shareData = {
    title: `UXIE Power Card — @${profile.username}`,
    text: `Check out my UXIE Developer Power Card! Overall Power: ${profile.overallPower} (${profile.rarity})`,
    url: shareUrl,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return { success: true, message: 'Card shared successfully!' };
    } catch (e: any) {
      if (e.name !== 'AbortError') {
        await copyToClipboard(shareUrl);
        return { success: true, message: 'Share link copied to clipboard!' };
      }
      return { success: false, message: 'Sharing canceled.' };
    }
  } else {
    await copyToClipboard(shareUrl);
    return { success: true, message: 'Share link copied to clipboard!' };
  }
}

export async function copyShareLink(
  profile: PlatformProfile,
  selectedTemplate: CardTemplateId
): Promise<boolean> {
  const shareUrl = `${window.location.origin}${window.location.pathname}?platform=${profile.platform}&username=${encodeURIComponent(profile.username)}&template=${selectedTemplate}`;
  return await copyToClipboard(shareUrl);
}

export async function copyEmbedCode(
  profile: PlatformProfile,
  selectedTemplate: CardTemplateId
): Promise<boolean> {
  const shareUrl = `${window.location.origin}${window.location.pathname}?platform=${profile.platform}&username=${encodeURIComponent(profile.username)}&template=${selectedTemplate}`;
  const embedSnippet = `<iframe src="${shareUrl}" width="440" height="680" frameborder="0" title="UXIE Power Card - ${profile.displayName}"></iframe>`;
  return await copyToClipboard(embedSnippet);
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch (err) {
    console.error('Copy to clipboard failed:', err);
    return false;
  }
}
