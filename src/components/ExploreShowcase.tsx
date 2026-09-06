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
    rarity: { name: 'MYTHIC', color: '#ffb0ca', bgGradient: '' },
    rankTitle: 'MYTHIC MAINTAINER',
    stats: {
      stat1: { name: 'Activity', value: 99, label: 'ACTIVITY', rawValue: '400+ Repos', score: 99 },
      stat2: { name: 'Impact', value: 100, label: 'IMPACT', rawValue: '239k Stars', score: 100 },
      stat3: { name: 'Consistency', value: 98, label: 'CONSISTENCY', rawValue: '215k Followers', score: 98 },
      stat4: { name: 'Open Source', value: 100, label: 'OPEN SOURCE', rawValue: '82k Forks', score: 100 },
      stat5: { name: 'Versatility', value: 95, label: 'VERSATILITY', rawValue: 'C/C++', score: 95 },
      stat6: { name: 'Collaboration', value: 96, label: 'COLLABORATION', rawValue: 'Global Maintainer', score: 96 },
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
    rarity: { name: 'MYTHIC', color: '#ffb0ca', bgGradient: '' },
    rankTitle: 'LEGENDARY GRANDMASTER',
    stats: {
      stat1: { name: 'Problem Solving', value: 98, label: 'PROBLEM SOLVING', rawValue: '3,420 Solved', score: 98 },
      stat2: { name: 'Algorithms', value: 100, label: 'ALGORITHMS', rawValue: '3850 ELO', score: 100 },
      stat3: { name: 'Contest', value: 100, label: 'CONTEST', rawValue: '3979 Max ELO', score: 100 },
      stat4: { name: 'Consistency', value: 95, label: 'CONSISTENCY', rawValue: '210 Contests', score: 95 },
      stat5: { name: 'Difficulty', value: 96, label: 'DIFFICULTY', rawValue: '2450 Avg Rating', score: 96 },
      stat6: { name: 'Versatility', value: 94, label: 'VERSATILITY', rawValue: '36 Tags', score: 94 },
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
    rarity: { name: 'LEGENDARY', color: '#ffb0ca', bgGradient: '' },
    rankTitle: 'GUARDIAN ARCHITECT',
    stats: {
      stat1: { name: 'DSA Mastery', value: 96, label: 'DSA', rawValue: '800 Med / 300 Hard', score: 96 },
      stat2: { name: 'Problem Solving', value: 94, label: 'PROBLEM SOLVING', rawValue: '1,450 Solved', score: 94 },
      stat3: { name: 'Difficulty', value: 95, label: 'DIFFICULTY', rawValue: '300 Hard Solved', score: 95 },
      stat4: { name: 'Consistency', value: 92, label: 'CONSISTENCY', rawValue: '365 Days Streak', score: 92 },
      stat5: { name: 'Contest', value: 94, label: 'CONTEST', rawValue: '2488 ELO', score: 94 },
      stat6: { name: 'Streak', value: 90, label: 'STREAK', rawValue: '18 Badges', score: 90 },
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
    rarity: { name: 'LEGENDARY', color: '#ffb0ca', bgGradient: '' },
    rankTitle: 'LEGENDARY ARCHITECT',
    stats: {
      stat1: { name: 'Activity', value: 90, label: 'ACTIVITY', rawValue: '280 Repos', score: 90 },
      stat2: { name: 'Impact', value: 96, label: 'IMPACT', rawValue: '180k Stars', score: 96 },
      stat3: { name: 'Consistency', value: 94, label: 'CONSISTENCY', rawValue: '85k Followers', score: 94 },
      stat4: { name: 'Open Source', value: 92, label: 'OPEN SOURCE', rawValue: '45k Forks', score: 92 },
      stat5: { name: 'Versatility', value: 88, label: 'VERSATILITY', rawValue: 'JS/TS/React', score: 88 },
      stat6: { name: 'Collaboration', value: 90, label: 'COLLABORATION', rawValue: 'React Core', score: 90 },
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
    rarity: { name: 'MYTHIC', color: '#ffb0ca', bgGradient: '' },
    rankTitle: 'CODECHEF 7★ GRANDMASTER',
    stats: {
      stat1: { name: 'Problem Solving', value: 96, label: 'PROBLEM SOLVING', rawValue: '1,850 Solved', score: 96 },
      stat2: { name: 'Contest Rating', value: 98, label: 'CONTEST', rawValue: '2850 (7★)', score: 98 },
      stat3: { name: 'Consistency', value: 94, label: 'CONSISTENCY', rawValue: '140 Contests', score: 94 },
      stat4: { name: 'Difficulty', value: 96, label: 'DIFFICULTY', rawValue: '2850 Rating', score: 96 },
      stat5: { name: 'Versatility', value: 95, label: 'VERSATILITY', rawValue: 'Cook-off Master', score: 95 },
      stat6: { name: 'Global Rank', value: 100, label: 'RANKING', rawValue: '#1 Global', score: 100 },
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
    <main className="flex-1 w-full max-w-[1440px] mx-auto px-margin-mobile md:px-gutter-desktop py-8 flex flex-col gap-8">
      {/* Vault Header Dossier */}
      <div className="border-b border-outline-variant pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-surface-container border-l-2 border-primary-container text-tertiary-fixed font-label-sm text-label-sm">
              ARCHIVE // SECTOR-07
            </span>
            <span className="text-label-sm font-label-sm text-outline tracking-wider">
              SYNC STATUS: LIVE TELEMETRY
            </span>
          </div>
          <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface tracking-tight uppercase">
            COMMUNITY POWER VAULT
          </h1>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-2xl">
            Explore live Power Cards forged by engineers across GitHub, LeetCode, Codeforces, and CodeChef.
          </p>
        </div>

        {/* Quick Telemetry Stats */}
        <div className="flex items-center gap-4 text-label-sm font-label-sm text-on-surface-variant bg-surface-container-low px-4 py-2 border border-outline-variant">
          <div className="flex flex-col">
            <span className="text-outline">FORGED CARDS</span>
            <span className="text-primary font-bold text-label-lg font-label-lg">148,924</span>
          </div>
          <div className="w-px h-6 bg-outline-variant"></div>
          <div className="flex flex-col">
            <span className="text-outline">TOP PROTOCOL</span>
            <span className="text-tertiary-fixed font-bold text-label-lg font-label-lg">CF:2944</span>
          </div>
          <div className="w-px h-6 bg-outline-variant"></div>
          <div className="flex flex-col">
            <span className="text-outline">AVG IMPACT</span>
            <span className="text-on-surface font-bold text-label-lg font-label-lg">84.2</span>
          </div>
        </div>
      </div>

      {/* Filter & Sort Control Deck */}
      <section className="bg-surface-container-low border border-outline-variant p-4 flex flex-col gap-4 rounded">
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
          {/* Platform Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-label-sm font-label-sm text-outline uppercase mr-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">filter_alt</span> Platform:
            </span>
            {['all', 'github', 'codeforces', 'leetcode', 'codechef'].map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setFilterPlatform(p)}
                className={`px-3 py-1 text-label-md font-label-md rounded border transition-all cursor-pointer ${
                  filterPlatform === p
                    ? 'bg-primary-container text-on-primary-container font-semibold border-primary-container'
                    : 'bg-surface-container text-on-surface-variant hover:text-on-surface hover:border-outline border-outline-variant'
                }`}
              >
                {p === 'all' ? 'All Platforms' : p.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative min-w-[240px]">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-outline text-[16px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search developer handle..."
              className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface text-label-md font-label-md pl-8 pr-3 py-1.5 rounded focus:border-primary-container focus:outline-none placeholder:text-outline"
            />
          </div>
        </div>
      </section>

      {/* Community Cards Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4">
        {filtered.map((prof) => (
          <div
            key={prof.username}
            className="flex flex-col items-center p-4 rounded-lg bg-surface-container-low border border-outline-variant hover:border-primary-container transition-all duration-300 group"
          >
            <CardRenderer templateId="template1" profile={prof} className="scale-[0.98] origin-top" />

            <button
              type="button"
              onClick={() => onSelectDeveloper(prof.platform, prof.username)}
              className="mt-4 w-full py-2.5 px-4 rounded bg-primary-container text-on-primary-container font-label-md text-label-md font-bold uppercase tracking-wider hover:shadow-[0_0_12px_rgba(222,115,156,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-primary-container"
            >
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              <span>FORGE @{prof.username.toUpperCase()}</span>
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};
