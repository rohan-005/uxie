import { toPng } from 'html-to-image';

export async function downloadCardImage(
  elementId = 'uxie-card-export-target',
  filename = 'uxie-power-card.png'
): Promise<void> {
  const node = document.getElementById(elementId);
  if (!node) {
    throw new Error('Export target card element not found in DOM.');
  }

  try {
    const dataUrl = await toPng(node, {
      pixelRatio: 2.5, // Ultra high resolution export
      cacheBust: true,
      filter: (child) => {
        // Exclude unneeded interactive buttons during export
        return true;
      },
    });

    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
  } catch (error: any) {
    console.error('Failed to export card image:', error);
    alert('Export failed. Please try again or take a screenshot.');
  }
}
