import { PlatformType } from './platform';
import { RarityTier, StatMetric } from './power';

export interface PlatformProfile {
  username: string;
  displayName: string;
  avatar: string;
  bio?: string;
  platform: PlatformType;
  sourceUrl: string;
  isDemoData: boolean;
  overallPower: number;
  rarity: RarityTier;
  rankTitle: string;
  stats: {
    stat1: StatMetric;
    stat2: StatMetric;
    stat3: StatMetric;
    stat4: StatMetric;
    stat5: StatMetric;
    stat6: StatMetric;
  };
  rawDetails: Record<string, string | number | undefined>;
}
