export type RarityTier = 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC';

export interface StatMetric {
  name: string;
  value: number; // 0 to 100
  label: string;
  rawValue?: string | number;
  score?: number;
}

export interface PowerBreakdown {
  overallPower: number; // 0 to 100
  rarity: RarityTier;
  stats: {
    stat1: StatMetric;
    stat2: StatMetric;
    stat3: StatMetric;
    stat4: StatMetric;
    stat5: StatMetric;
    stat6: StatMetric;
  };
}
