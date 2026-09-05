import { PlatformType } from '../types/platform';
import { PowerBreakdown, StatMetric } from '../types/power';
import { getRarityTier } from './rarity';

export function calculatePowerScore(
  platform: PlatformType,
  rawStats: {
    stat1: StatMetric;
    stat2: StatMetric;
    stat3: StatMetric;
    stat4: StatMetric;
    stat5: StatMetric;
    stat6: StatMetric;
  }
): PowerBreakdown {
  // Compute weighted average based on platform type
  let weightedSum = 0;
  if (platform === 'github') {
    weightedSum =
      rawStats.stat1.value * 0.2 +
      rawStats.stat2.value * 0.25 +
      rawStats.stat3.value * 0.15 +
      rawStats.stat4.value * 0.2 +
      rawStats.stat5.value * 0.1 +
      rawStats.stat6.value * 0.1;
  } else if (platform === 'codeforces') {
    weightedSum =
      rawStats.stat1.value * 0.25 +
      rawStats.stat2.value * 0.2 +
      rawStats.stat3.value * 0.2 +
      rawStats.stat4.value * 0.1 +
      rawStats.stat5.value * 0.15 +
      rawStats.stat6.value * 0.1;
  } else if (platform === 'leetcode') {
    weightedSum =
      rawStats.stat1.value * 0.25 +
      rawStats.stat2.value * 0.2 +
      rawStats.stat3.value * 0.2 +
      rawStats.stat4.value * 0.1 +
      rawStats.stat5.value * 0.15 +
      rawStats.stat6.value * 0.1;
  } else {
    // codechef
    weightedSum =
      rawStats.stat1.value * 0.25 +
      rawStats.stat2.value * 0.25 +
      rawStats.stat3.value * 0.15 +
      rawStats.stat4.value * 0.15 +
      rawStats.stat5.value * 0.1 +
      rawStats.stat6.value * 0.1;
  }

  const overallPower = Math.min(100, Math.max(1, Math.round(weightedSum)));
  const rarity = getRarityTier(overallPower);

  return {
    overallPower,
    rarity,
    stats: rawStats,
  };
}
