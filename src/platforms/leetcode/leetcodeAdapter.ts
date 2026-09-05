import { PlatformProfile } from '../../types/profile';
import { fetchLeetCodeProfile, LeetCodeFetchedData } from '../../services/leetcodeService';

export function getLeetCodeDemoData(username: string): LeetCodeFetchedData {
  const isKnight = username.toLowerCase().includes('knight') || username.toLowerCase() === 'neal_wu';
  return {
    username: username || 'feiyao',
    name: username || 'feiyao',
    avatar: 'https://assets.leetcode.com/users/avatars/avatar_1658428800.png',
    ranking: isKnight ? 1200 : 18450,
    totalSolved: isKnight ? 1450 : 620,
    easySolved: isKnight ? 350 : 220,
    mediumSolved: isKnight ? 800 : 320,
    hardSolved: isKnight ? 300 : 80,
    contestRating: isKnight ? 2488 : 1920,
    contestGlobalRanking: isKnight ? 850 : 8400,
    streak: isKnight ? 365 : 112,
    badgesCount: isKnight ? 18 : 8,
    isDemoData: true,
  };
}

export async function getLeetCodeAdapterProfile(
  username: string,
  useDemoFallback = false
): Promise<PlatformProfile> {
  let data: LeetCodeFetchedData;

  if (useDemoFallback) {
    data = getLeetCodeDemoData(username);
  } else {
    try {
      data = await fetchLeetCodeProfile(username);
    } catch (err) {
      console.warn(`Falling back to LeetCode demo data for ${username}`);
      data = getLeetCodeDemoData(username);
    }
  }

  const {
    username: handle,
    name,
    avatar,
    totalSolved,
    easySolved,
    mediumSolved,
    hardSolved,
    contestRating,
    streak,
    badgesCount,
    isDemoData,
  } = data;

  // Calculate 6 normalized metrics (0-100 scale)
  const dsaScore = Math.min(100, Math.round(((mediumSolved * 1.2 + hardSolved * 2.5) / 500) * 100));
  const problemSolvingScore = Math.min(100, Math.round((totalSolved / 1000) * 100));
  const difficultyScore = Math.min(100, Math.round(((hardSolved * 3) / 250) * 100));
  const consistencyScore = Math.min(100, Math.round((streak / 180) * 100));
  const contestScore = Math.min(100, Math.round((contestRating / 2800) * 100));
  const streakScore = Math.min(100, Math.round((streak / 365) * 100 + badgesCount * 2));

  // Weighted LeetCode formula
  const overallPower = Math.min(
    100,
    Math.max(
      15,
      Math.round(
        dsaScore * 0.25 +
          problemSolvingScore * 0.2 +
          difficultyScore * 0.2 +
          contestScore * 0.15 +
          consistencyScore * 0.1 +
          streakScore * 0.1
      )
    )
  );

  let rarity: 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC' = 'COMMON';
  if (overallPower >= 95) rarity = 'MYTHIC';
  else if (overallPower >= 80) rarity = 'LEGENDARY';
  else if (overallPower >= 65) rarity = 'EPIC';
  else if (overallPower >= 50) rarity = 'RARE';

  let rankTitle = 'ALGORITHM KNIGHT';
  if (contestRating >= 2200) rankTitle = 'GUARDIAN MAINTAINER';
  else if (contestRating >= 1900) rankTitle = 'KNIGHT ARCHITECT';
  else if (overallPower >= 80) rankTitle = 'DSA MASTER';

  return {
    username: handle,
    displayName: name || handle,
    avatar: avatar || `https://api.dicebear.com/7.x/identicon/svg?seed=${handle}`,
    bio: `LeetCode ${rankTitle} (Contest Rating: ${contestRating})`,
    platform: 'leetcode',
    sourceUrl: `https://leetcode.com/${handle}/`,
    isDemoData,
    overallPower,
    rarity,
    rankTitle,
    stats: {
      stat1: { name: 'DSA Mastery', value: dsaScore, label: 'DSA', rawValue: `${mediumSolved} Med / ${hardSolved} Hard` },
      stat2: { name: 'Problem Solving', value: problemSolvingScore, label: 'PROBLEM SOLVING', rawValue: `${totalSolved} Total Solved` },
      stat3: { name: 'Difficulty', value: difficultyScore, label: 'DIFFICULTY', rawValue: `${hardSolved} Hard Solved` },
      stat4: { name: 'Consistency', value: consistencyScore, label: 'CONSISTENCY', rawValue: `${streak} Days Streak` },
      stat5: { name: 'Contest', value: contestScore, label: 'CONTEST', rawValue: `${contestRating} ELO` },
      stat6: { name: 'Streak & Badges', value: streakScore, label: 'STREAK', rawValue: `${badgesCount} Badges` },
    },
    rawDetails: {
      totalSolved,
      easySolved,
      mediumSolved,
      hardSolved,
      contestRating,
      streak,
    },
  };
}
