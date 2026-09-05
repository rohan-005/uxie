import { PlatformProfile } from '../../types/profile';
import { fetchCodeChefProfile, CodeChefFetchedData } from '../../services/codechefService';

export function getCodeChefDemoData(username: string): CodeChefFetchedData {
  const isGennady = username.toLowerCase() === 'gennady' || username.toLowerCase() === 'tourist';
  return {
    username: username || 'gennady',
    name: isGennady ? 'Gennady Korotkevich' : username,
    avatar: 'https://cdn.codechef.com/sites/all/themes/abstrct/images/user-crop.png',
    rating: isGennady ? 2850 : 2120,
    stars: isGennady ? '7★' : '5★',
    globalRank: isGennady ? 1 : 420,
    countryRank: isGennady ? 1 : 110,
    solvedCount: isGennady ? 1850 : 420,
    contestsParticipated: isGennady ? 140 : 55,
    isDemoData: true,
  };
}

export async function getCodeChefAdapterProfile(
  username: string,
  useDemoFallback = false
): Promise<PlatformProfile> {
  let data: CodeChefFetchedData;

  if (useDemoFallback) {
    data = getCodeChefDemoData(username);
  } else {
    try {
      data = await fetchCodeChefProfile(username);
    } catch (err) {
      console.warn(`Falling back to CodeChef demo data for ${username}`);
      data = getCodeChefDemoData(username);
    }
  }

  const {
    username: handle,
    name,
    avatar,
    rating,
    stars,
    globalRank,
    solvedCount,
    contestsParticipated,
    isDemoData,
  } = data;

  // Calculate 6 normalized stat metrics (0-100 scale)
  const problemSolvingScore = Math.min(100, Math.round((solvedCount / 1000) * 100));
  const contestScore = Math.min(100, Math.round((rating / 3000) * 100));
  const consistencyScore = Math.min(100, Math.round((contestsParticipated / 100) * 100));
  const difficultyScore = Math.min(100, Math.round((rating / 2800) * 100 + 10));
  const versatilityScore = Math.min(100, Math.round((solvedCount / 800) * 100 + 15));
  const collaborationScore = Math.min(100, Math.round(Math.max(10, 100 - globalRank / 50)));

  // Weighted CodeChef formula
  const overallPower = Math.min(
    100,
    Math.max(
      15,
      Math.round(
        problemSolvingScore * 0.25 +
          contestScore * 0.25 +
          consistencyScore * 0.15 +
          difficultyScore * 0.15 +
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

  const rankTitle = `CODECHEF ${stars} GRANDMASTER`;

  return {
    username: handle,
    displayName: name || handle,
    avatar: avatar || `https://api.dicebear.com/7.x/identicon/svg?seed=${handle}`,
    bio: `CodeChef ${stars} Competitor (Rating: ${rating}, Global Rank: #${globalRank})`,
    platform: 'codechef',
    sourceUrl: `https://www.codechef.com/users/${handle}`,
    isDemoData,
    overallPower,
    rarity,
    rankTitle,
    stats: {
      stat1: { name: 'Problem Solving', value: problemSolvingScore, label: 'PROBLEM SOLVING', rawValue: `${solvedCount} Solved` },
      stat2: { name: 'Contest Rating', value: contestScore, label: 'CONTEST', rawValue: `${rating} (${stars})` },
      stat3: { name: 'Consistency', value: consistencyScore, label: 'CONSISTENCY', rawValue: `${contestsParticipated} Contests` },
      stat4: { name: 'Difficulty', value: difficultyScore, label: 'DIFFICULTY', rawValue: `${rating} Rating` },
      stat5: { name: 'Versatility', value: versatilityScore, label: 'VERSATILITY', rawValue: `${solvedCount} Problems` },
      stat6: { name: 'Global Rank', value: collaborationScore, label: 'RANKING', rawValue: `#${globalRank}` },
    },
    rawDetails: {
      rating,
      stars,
      globalRank,
      solvedCount,
      contestsParticipated,
    },
  };
}
