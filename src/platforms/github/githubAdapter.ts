import { PlatformProfile } from '../../types/profile';
import { fetchGitHubProfile, GitHubFetchedData } from '../../services/githubService';

export function getGitHubDemoData(username: string): GitHubFetchedData {
  return {
    user: {
      login: username || 'torvalds',
      name: username === 'torvalds' ? 'Linus Torvalds' : username,
      avatar_url: 'https://avatars.githubusercontent.com/u/10240?v=4',
      html_url: `https://github.com/${username || 'torvalds'}`,
      bio: 'Creator of Linux & Git. Open source maintainer.',
      public_repos: 42,
      followers: 215000,
      following: 0,
      created_at: '2005-04-16T00:00:00Z',
    },
    repos: [
      { name: 'linux', stargazers_count: 185000, forks_count: 56000, language: 'C', pushed_at: new Date().toISOString() },
      { name: 'git', stargazers_count: 52000, forks_count: 26000, language: 'C', pushed_at: new Date().toISOString() },
      { name: 'subsurface-divelog', stargazers_count: 2400, forks_count: 620, language: 'C++', pushed_at: new Date().toISOString() },
    ],
    totalStars: 239400,
    totalForks: 82620,
    languages: ['C', 'C++', 'Assembly', 'Makefile', 'Shell', 'Python'],
    isDemoData: true,
  };
}

export async function getGitHubAdapterProfile(
  username: string,
  useDemoFallback = false
): Promise<PlatformProfile> {
  let data: GitHubFetchedData;

  if (useDemoFallback) {
    data = getGitHubDemoData(username);
  } else {
    try {
      data = await fetchGitHubProfile(username);
    } catch (err) {
      console.warn(`Falling back to GitHub demo data for ${username}`);
      data = getGitHubDemoData(username);
    }
  }

  const { user, totalStars, totalForks, languages, isDemoData } = data;

  // Calculate raw power metrics (0 - 100 scales)
  const activityScore = Math.min(100, Math.round((user.public_repos * 1.5) + 30));
  const impactScore = Math.min(100, Math.round(Math.log10(Math.max(1, totalStars)) * 18 + 10));
  const consistencyScore = Math.min(100, Math.round(Math.log10(Math.max(1, user.followers)) * 16 + 20));
  const openSourceScore = Math.min(100, Math.round((totalForks / 100) + (user.public_repos * 0.8)));
  const versatilityScore = Math.min(100, Math.round(languages.length * 15));
  const collaborationScore = Math.min(100, Math.round((user.followers / 200) + 50));

  // Weighted overall power formula
  const overallPower = Math.min(
    100,
    Math.max(
      15,
      Math.round(
        activityScore * 0.2 +
          impactScore * 0.25 +
          consistencyScore * 0.15 +
          openSourceScore * 0.2 +
          versatilityScore * 0.1 +
          collaborationScore * 0.1
      )
    )
  );

  let rarity: 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC' = 'COMMON';
  if (overallPower >= 95) rarity = 'MYTHIC';
  else if (overallPower >= 80) rarity = 'LEGENDARY';
  else if (overallPower >= 65) rarity = 'EPIC';
  else if (overallPower >= 50) rarity = 'RARE';

  let rankTitle = 'CORE CONTRIBUTOR';
  if (rarity === 'MYTHIC') rankTitle = 'MYTHIC MAINTAINER';
  else if (rarity === 'LEGENDARY') rankTitle = 'LEGENDARY ARCHITECT';
  else if (rarity === 'EPIC') rankTitle = 'EPIC COMMITTER';
  else if (rarity === 'RARE') rankTitle = 'RARE DEVELOPER';

  return {
    username: user.login,
    displayName: user.name || user.login,
    avatar: user.avatar_url,
    bio: user.bio || undefined,
    platform: 'github',
    sourceUrl: user.html_url,
    isDemoData,
    overallPower,
    rarity,
    rankTitle,
    stats: {
      stat1: { name: 'Activity', value: activityScore, label: 'ACTIVITY', rawValue: `${user.public_repos} Repos` },
      stat2: { name: 'Impact', value: impactScore, label: 'IMPACT', rawValue: `${totalStars.toLocaleString()} Stars` },
      stat3: { name: 'Consistency', value: consistencyScore, label: 'CONSISTENCY', rawValue: `${user.followers.toLocaleString()} Followers` },
      stat4: { name: 'Open Source', value: openSourceScore, label: 'OPEN SOURCE', rawValue: `${totalForks.toLocaleString()} Forks` },
      stat5: { name: 'Versatility', value: versatilityScore, label: 'VERSATILITY', rawValue: `${languages.length} Languages` },
      stat6: { name: 'Collaboration', value: collaborationScore, label: 'COLLABORATION', rawValue: `${user.following} Following` },
    },
    rawDetails: {
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars,
      totalForks,
      languagesCount: languages.length,
      createdAt: user.created_at,
    },
  };
}
