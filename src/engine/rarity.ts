import { RarityTier } from '../types/power';

export interface RarityConfig {
  tier: RarityTier;
  label: string;
  minScore: number;
  maxScore: number;
  colorHex: string;
  bgGradient: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  glowShadow: string;
}

export const RARITY_CONFIGS: Record<RarityTier, RarityConfig> = {
  COMMON: {
    tier: 'COMMON',
    label: 'COMMON',
    minScore: 0,
    maxScore: 49,
    colorHex: '#a18b91',
    bgGradient: 'from-slate-900 via-surface-container to-surface-container-high',
    borderColor: 'border-outline-variant/50',
    badgeBg: 'bg-surface-container-high',
    badgeText: 'text-on-surface-variant',
    glowShadow: 'shadow-[0_0_15px_rgba(161,139,145,0.2)]',
  },
  RARE: {
    tier: 'RARE',
    label: 'RARE',
    minScore: 50,
    maxScore: 64,
    colorHex: '#38bdf8',
    bgGradient: 'from-sky-950 via-surface-container-high to-surface-container-highest',
    borderColor: 'border-sky-500/50',
    badgeBg: 'bg-sky-950/80',
    badgeText: 'text-sky-300',
    glowShadow: 'shadow-[0_0_25px_rgba(56,189,248,0.3)]',
  },
  EPIC: {
    tier: 'EPIC',
    label: 'EPIC',
    minScore: 65,
    maxScore: 79,
    colorHex: '#c084fc',
    bgGradient: 'from-purple-950 via-secondary-container/60 to-surface-container-highest',
    borderColor: 'border-purple-500/50',
    badgeBg: 'bg-purple-950/80',
    badgeText: 'text-purple-300',
    glowShadow: 'shadow-[0_0_30px_rgba(192,132,252,0.35)]',
  },
  LEGENDARY: {
    tier: 'LEGENDARY',
    label: 'LEGENDARY',
    minScore: 80,
    maxScore: 94,
    colorHex: '#fbbf24',
    bgGradient: 'from-amber-950 via-primary-container/40 to-surface-container-highest',
    borderColor: 'border-amber-500/60',
    badgeBg: 'bg-amber-950/90',
    badgeText: 'text-amber-300',
    glowShadow: 'shadow-[0_0_35px_rgba(251,191,36,0.4)]',
  },
  MYTHIC: {
    tier: 'MYTHIC',
    label: 'MYTHIC MAINTAINER',
    minScore: 95,
    maxScore: 100,
    colorHex: '#ffb0ca',
    bgGradient: 'from-pink-950 via-secondary-container to-primary-container/30',
    borderColor: 'border-primary-container',
    badgeBg: 'bg-primary-container/30',
    badgeText: 'text-tertiary-fixed font-bold',
    glowShadow: 'shadow-[0_0_45px_rgba(222,115,156,0.55)]',
  },
};

export function getRarityTier(score: number): RarityTier {
  const clamped = Math.max(0, Math.min(100, score));
  if (clamped >= 95) return 'MYTHIC';
  if (clamped >= 80) return 'LEGENDARY';
  if (clamped >= 65) return 'EPIC';
  if (clamped >= 50) return 'RARE';
  return 'COMMON';
}
