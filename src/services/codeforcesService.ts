export interface CodeforcesUser {
  handle: string;
  rating?: number;
  maxRating?: number;
  rank?: string;
  maxRank?: string;
  avatar?: string;
  titlePhoto?: string;
  contribution?: number;
  friendOfCount?: number;
}

export interface CodeforcesSubmission {
  id: number;
  contestId?: number;
  verdict?: string;
  problem?: {
    contestId?: number;
    index?: string;
    name?: string;
    rating?: number;
    tags?: string[];
  };
}

export interface CodeforcesFetchedData {
  user: CodeforcesUser;
  solvedCount: number;
  avgDifficulty: number;
  contestsCount: number;
  tagsCount: number;
  isDemoData: boolean;
}

export async function fetchCodeforcesProfile(handle: string): Promise<CodeforcesFetchedData> {
  try {
    const userRes = await fetch(`https://codeforces.com/api/user.info?handles=${encodeURIComponent(handle)}`);
    if (!userRes.ok) {
      throw new Error(`Codeforces API returned HTTP ${userRes.status}`);
    }

    const userData = await userRes.json();
    if (userData.status !== 'OK' || !userData.result || userData.result.length === 0) {
      throw new Error(`Codeforces profile "${handle}" was not found.`);
    }

    const user: CodeforcesUser = userData.result[0];

    let solvedCount = 0;
    let avgDifficulty = 1200;
    let contestsCount = 0;
    const tagSet = new Set<string>();
    const contestSet = new Set<number>();
    let difficultySum = 0;

    try {
      const statusRes = await fetch(
        `https://codeforces.com/api/user.status?handle=${encodeURIComponent(handle)}&from=1&count=500`
      );
      if (statusRes.ok) {
        const statusData = await statusRes.json();
        if (statusData.status === 'OK' && Array.isArray(statusData.result)) {
          const submissions: CodeforcesSubmission[] = statusData.result;
          const solvedProblems = new Set<string>();

          submissions.forEach((sub) => {
            if (sub.verdict === 'OK' && sub.problem) {
              const probKey = `${sub.problem.contestId || 0}_${sub.problem.index || ''}`;
              if (!solvedProblems.has(probKey)) {
                solvedProblems.add(probKey);
                if (sub.problem.rating) {
                  difficultySum += sub.problem.rating;
                }
                if (sub.problem.tags) {
                  sub.problem.tags.forEach((t) => tagSet.add(t));
                }
              }
            }
            if (sub.contestId) {
              contestSet.add(sub.contestId);
            }
          });

          solvedCount = solvedProblems.size;
          contestsCount = contestSet.size;
          if (solvedCount > 0 && difficultySum > 0) {
            avgDifficulty = Math.round(difficultySum / solvedCount);
          }
        }
      }
    } catch (e) {
      console.warn('Failed to fetch Codeforces submissions:', e);
    }

    return {
      user,
      solvedCount,
      avgDifficulty,
      contestsCount,
      tagsCount: tagSet.size,
      isDemoData: false,
    };
  } catch (error: any) {
    console.warn(`Codeforces API fetch failed for ${handle}:`, error?.message);
    throw error;
  }
}
