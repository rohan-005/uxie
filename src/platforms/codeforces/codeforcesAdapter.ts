import { PlatformProfile } from '../../types/profile';
import { fetchCodeforcesProfile, CodeforcesFetchedData } from '../../services/codeforcesService';

export function getCodeforcesDemoData(handle: string): CodeforcesFetchedData {
  const isTourist = handle.toLowerCase() === 'tourist';
  return {
    user: {
      handle: handle || 'tourist',
      rating: isTourist ? 3850 : 2150,
      maxRating: isTourist ? 3979 : 2250,
      rank: isTourist ? 'legendary grandmaster' : 'master',
      maxRank: isTourist ? 'legendary grandmaster' : 'master',
      avatar: 'https://userpic.codeforces.org/422/title/50a270944f2413e0.jpg',
      titlePhoto: 'https://userpic.codeforces.org/422/title/50a270944f2413e0.jpg',
      contribution: isTourist ? 180 : 45,
      friendOfCount: isTourist ? 42000 : 1200,
    },
    solvedCount: isTourist ? 3420 : 850,
    avgDifficulty: isTourist ? 2450 : 1850,
    contestsCount: isTourist ? 210 : 75,
    tagsCount: isTourist ? 36 : 24,
    isDemoData: true,
  };
}

export async function getCodeforcesAdapterProfile(
  handle: string,
  useDemoFallback = false
): Promise<PlatformProfile> {
  let data: CodeforcesFetchedData;

  if (useDemoFallback) {
    data = getCodeforcesDemoData(handle);
  } else {
    try {
      data = await fetchCodeforcesProfile(handle);
    } catch (err) {
      console.warn(`Falling back to Codeforces demo data for ${handle}`);
      data = getCodeforcesDemoData(handle);
    }
  }

  const { user, solvedCount, avgDifficulty, contestsCount, tagsCount, isDemoData } = data;

  const currentRating = user.rating || 1200;
  const maxRating = user.maxRating || currentRating;

  // Calculate 6 normalized stat metrics (0-100 scale)
  const problemSolvingScore = Math.min(100, Math.round((solvedCount / 20) + 20));
  const algorithmsScore = Math.min(100, Math.round((currentRating / 3500) * 100));
  const contestScore = Math.min(100, Math.round((maxRating / 3500) * 100));
  const consistencyScore = Math.min(100, Math.round((contestsCount * 0.8) + 30));
  const difficultyScore = Math.min(100, Math.round((avgDifficulty / 3000) * 100));
  const versatilityScore = Math.min(100, Math.round((tagsCount / 36) * 100));

  // Weighted Codeforces formula (clamped 0-100)
  const overallPower = Math.min(
    100,
    Math.max(
      15,
      Math.round(
        problemSolvingScore * 0.25 +
          algorithmsScore * 0.2 +
          contestScore * 0.2 +
          difficultyScore * 0.15 +
          consistencyScore * 0.1 +
          versatilityScore * 0.1
      )
    )
  );

  let rarity: 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'MYTHIC' = 'COMMON';
  if (overallPower >= 95) rarity = 'MYTHIC';
  else if (overallPower >= 80) rarity = 'LEGENDARY';
  else if (overallPower >= 65) rarity = 'EPIC';
  else if (overallPower >= 50) rarity = 'RARE';

  const rankTitle = (user.rank || 'COMPETITIVE CODER').toUpperCase();
  const avatarUrl = user.titlePhoto || user.avatar || `https://api.dicebear.com/7.x/identicon/svg?seed=${user.handle}`;

  return {
    username: user.handle,
    displayName: user.handle,
    avatar: avatarUrl,
    bio: `${user.rank || 'CP Competitor'} (Rating: ${currentRating}, Max: ${maxRating})`,
    platform: 'codeforces',
    sourceUrl: `https://codeforces.com/profile/${user.handle}`,
    isDemoData,
    overallPower,
    rarity,
    rankTitle,
    stats: {
      stat1: { name: 'Problem Solving', value: problemSolvingScore, label: 'PROBLEM SOLVING', rawValue: `${solvedCount} Solved` },
      stat2: { name: 'Algorithms', value: algorithmsScore, label: 'ALGORITHMS', rawValue: `${currentRating} ELO` },
      stat3: { name: 'Contest', value: contestScore, label: 'CONTEST', rawValue: `${maxRating} Max ELO` },
      stat4: { name: 'Consistency', value: consistencyScore, label: 'CONSISTENCY', rawValue: `${contestsCount} Contests` },
      stat5: { name: 'Difficulty', value: difficultyScore, label: 'DIFFICULTY', rawValue: `${avgDifficulty} Avg Rating` },
      stat6: { name: 'Versatility', value: versatilityScore, label: 'VERSATILITY', rawValue: `${tagsCount} Problem Tags` },
    },
    rawDetails: {
      rating: currentRating,
      maxRating,
      rank: user.rank,
      solvedCount,
      contestsCount,
    },
  };
}
