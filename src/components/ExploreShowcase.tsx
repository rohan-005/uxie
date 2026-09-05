import React, { useState } from 'react';
import { PlatformType } from '../types/platform';
import { PlatformProfile } from '../types/profile';
import { CardRenderer } from '../cards/CardRenderer';

interface ExploreShowcaseProps {
  onSelectDeveloper: (platform: PlatformType, username: string) => void;
}

const FEATURED_PROFILES: PlatformProfile[] = [
  {
    username: 'torvalds',
    displayName: 'Linus Torvalds',
    avatar: 'https://avatars.githubusercontent.com/u/10240?v=4',
    bio: 'Creator of Linux & Git. Open source legend.',
    platform: 'github',
    sourceUrl: 'https://github.com/torvalds',
    isDemoData: false,
    overallPower: 99,
    rarity: 'MYTHIC',
    rankTitle: 'MYTHIC MAINTAINER',
    stats: {
      stat1: { name: 'Activity', value: 99, label: 'ACTIVITY', rawValue: '400+ Repos' },
      stat2: { name: 'Impact', value: 100, label: 'IMPACT', rawValue: '239k Stars' },
      stat3: { name: 'Consistency', value: 98, label: 'CONSISTENCY', rawValue: '215k Followers' },
      stat4: { name: 'Open Source', value: 100, label: 'OPEN SOURCE', rawValue: '82k Forks' },
      stat5: { name: 'Versatility', value: 95, label: 'VERSATILITY', rawValue: 'C/C++' },
      stat6: { name: 'Collaboration', value: 96, label: 'COLLABORATION', rawValue: 'Global Maintainer' },
    },
    rawDetails: {},
  },
  {
    username: 'tourist',
    displayName: 'Gennady Korotkevich',
    avatar: 'https://userpic.codeforces.org/422/title/50a270944f2413e0.jpg',
    bio: '6-time ACM-ICPC Champion, #1 CP Competitor.',
    platform: 'codeforces',
    sourceUrl: 'https://codeforces.com/profile/tourist',
    isDemoData: false,
    overallPower: 98,
    rarity: 'MYTHIC',
    rankTitle: 'LEGENDARY GRANDMASTER',
    stats: {
      stat1: { name: 'Problem Solving', value: 98, label: 'PROBLEM SOLVING', rawValue: '3,420 Solved' },
      stat2: { name: 'Algorithms', value: 100, label: 'ALGORITHMS', rawValue: '3850 ELO' },
      stat3: { name: 'Contest', value: 100, label: 'CONTEST', rawValue: '3979 Max ELO' },
      stat4: { name: 'Consistency', value: 95, label: 'CONSISTENCY', rawValue: '210 Contests' },
      stat5: { name: 'Difficulty', value: 96, label: 'DIFFICULTY', rawValue: '2450 Avg Rating' },
      stat6: { name: 'Versatility', value: 94, label: 'VERSATILITY', rawValue: '36 Tags' },
    },
    rawDetails: {},
  },
  {
    username: 'neal_wu',
    displayName: 'Neal Wu',
    avatar: 'https://assets.leetcode.com/users/avatars/avatar_1658428800.png',
    bio: 'LeetCode Guardian & CP Competitor',
    platform: 'leetcode',
    sourceUrl: 'https://leetcode.com/neal_wu/',
    isDemoData: false,
    overallPower: 94,
    rarity: 'LEGENDARY',
    rankTitle: 'GUARDIAN ARCHITECT',
    stats: {
      stat1: { name: 'DSA Mastery', value: 96, label: 'DSA', rawValue: '800 Med / 300 Hard' },
      stat2: { name: 'Problem Solving', value: 94, label: 'PROBLEM SOLVING', rawValue: '1,450 Solved' },
      stat3: { name: 'Difficulty', value: 95, label: 'DIFFICULTY', rawValue: '300 Hard Solved' },
      stat4: { name: 'Consistency', value: 92, label: 'CONSISTENCY', rawValue: '365 Days Streak' },
      stat5: { name: 'Contest', value: 94, label: 'CONTEST', rawValue: '2488 ELO' },
      stat6: { name: 'Streak', value: 90, label: 'STREAK', rawValue: '18 Badges' },
    },
    rawDetails: {},
  },
  {
    username: 'gaearon',
    displayName: 'Dan Abramov',
    avatar: 'https://avatars.githubusercontent.com/u/810438?v=4',
    bio: 'Co-creator of Redux, React core team member.',
    platform: 'github',
    sourceUrl: 'https://github.com/gaearon',
    isDemoData: false,
    overallPower: 92,
    rarity: 'LEGENDARY',
    rankTitle: 'LEGENDARY ARCHITECT',
    stats: {
      stat1: { name: 'Activity', value: 90, label: 'ACTIVITY', rawValue: '280 Repos' },
      stat2: { name: 'Impact', value: 96, label: 'IMPACT', rawValue: '180k Stars' },
      stat3: { name: 'Consistency', value: 94, label: 'CONSISTENCY', rawValue: '85k Followers' },
      stat4: { name: 'Open Source', value: 92, label: 'OPEN SOURCE', rawValue: '45k Forks' },
      stat5: { name: 'Versatility', value: 88, label: 'VERSATILITY', rawValue: 'JS/TS/React' },
      stat6: { name: 'Collaboration', value: 90, label: 'COLLABORATION', rawValue: 'React Core' },
    },
    rawDetails: {},
  },
  {
    username: 'gennady',
    displayName: 'CodeChef Gennady',
    avatar: 'https://cdn.codechef.com/sites/all/themes/abstrct/images/user-crop.png',
    bio: '7★ CodeChef Grandmaster',
    platform: 'codechef',
    sourceUrl: 'https://www.codechef.com/users/gennady',
    isDemoData: false,
    overallPower: 96,
    rarity: 'MYTHIC',
    rankTitle: 'CODECHEF 7★ GRANDMASTER',
    stats: {
      stat1: { name: 'Problem Solving', value: 96, label: 'PROBLEM SOLVING', rawValue: '1,850 Solved' },
      stat2: { name: 'Contest Rating', value: 98, label: 'CONTEST', rawValue: '2850 (7★)' },
      stat3: { name: 'Consistency', value: 94, label: 'CONSISTENCY', rawValue: '140 Contests' },
      stat4: { name: 'Difficulty', value: 96, label: 'DIFFICULTY', rawValue: '2850 Rating' },
      stat5: { name: 'Versatility', value: 95, label: 'VERSATILITY', rawValue: 'Cook-off Master' },
      stat6: { name: 'Global Rank', value: 100, label: 'RANKING', rawValue: '#1 Global' },
    },
    rawDetails: {},
  },
];

export const ExploreShowcase: React.FC<ExploreShowcaseProps> = ({ onSelectDeveloper }) => {
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filtered = FEATURED_PROFILES.filter((p) => {
    const matchesPlatform = filterPlatform === 'all' || p.platform === filterPlatform;
    const matchesSearch =
      !searchQuery.trim() ||
      p.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.displayName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-outline-variant/20">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-sm bg-primary animate-pulse"></span>
            <span className="font-code text-label-code-sm text-tertiary uppercase tracking-widest">
              GLOBAL TELEMETRY LEDGER
            </span>
          </div>
          <h1 className="font-headline text-headline-lg md:text-display-hero font-bold tracking-tight text-tertiary-fixed">
            EXPLORE POWER CARDS
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mt-2">
            Discover top-ranked developers across GitHub, Codeforces, LeetCode, and CodeChef.
          </p>
        </div>

        {/* Global Stats Counter */}
        <div className="flex items-center gap-6 bg-surface-container-low/70 border border-outline-variant/30 p-4 rounded-xl backdrop-blur-md">
          <div>
            <div className="font-code text-label-code-sm text-on-surface-variant uppercase">Total Minted</div>
            <div className="font-stat-counter text-stat-counter text-tertiary-fixed">50,000+</div>
          </div>
          <div className="w-px h-8 bg-outline-variant/30"></div>
          <div>
            <div className="font-code text-label-code-sm text-on-surface-variant uppercase">Proof Accuracy</div>
            <div className="font-stat-counter text-stat-counter text-primary">99.8%</div>
          </div>
        </div>
      </div>

      {/* Filter Pills & Search */}
      <div className="py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {['all', 'github', 'codeforces', 'leetcode', 'codechef'].map((p) => (
            <button
              key={p}
              onClick={() => setFilterPlatform(p)}
              className={`px-3.5 py-1.5 rounded-lg font-code text-label-code-sm uppercase tracking-wider transition-all ${
                filterPlatform === p
                  ? 'bg-primary-container text-on-primary-container font-bold shadow-md'
                  : 'bg-surface-container-low border border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-primary-container'
              }`}
            >
              {p === 'all' ? 'All Platforms' : p}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative min-w-[280px]">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-lg">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search handle or developer..."
            className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-lg pl-9 pr-4 py-2 font-code text-label-code-sm text-tertiary placeholder:text-outline-variant focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 pb-12">
        {filtered.map((prof) => (
          <div
            key={prof.username}
            className="flex flex-col items-center p-4 rounded-2xl bg-surface-container-low/60 border border-outline-variant/30 hover:border-primary-container/60 transition-all duration-300 hover:-translate-y-1"
          >
            <CardRenderer templateId="template1" profile={prof} className="scale-[0.95] origin-top" />

            <button
              onClick={() => onSelectDeveloper(prof.platform, prof.username)}
              className="mt-3 w-full py-2.5 px-4 rounded-lg bg-surface-container border border-primary-container/40 text-primary font-code text-label-code-sm uppercase font-bold hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              Forge @{prof.username} Card
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
