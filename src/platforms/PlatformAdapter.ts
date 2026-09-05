import { PlatformType } from '../types/platform';
import { PlatformProfile } from '../types/profile';
import { getGitHubAdapterProfile } from './github/githubAdapter';
import { getCodeforcesAdapterProfile } from './codeforces/codeforcesAdapter';
import { getLeetCodeAdapterProfile } from './leetcode/leetcodeAdapter';
import { getCodeChefAdapterProfile } from './codechef/codechefAdapter';

export async function fetchPlatformProfile(
  platform: PlatformType,
  username: string,
  forceDemo = false
): Promise<PlatformProfile> {
  const cleanUsername = username.trim();
  if (!cleanUsername) {
    throw new Error('Username cannot be empty. Please enter a valid profile handle.');
  }

  switch (platform) {
    case 'github':
      return await getGitHubAdapterProfile(cleanUsername, forceDemo);
    case 'codeforces':
      return await getCodeforcesAdapterProfile(cleanUsername, forceDemo);
    case 'leetcode':
      return await getLeetCodeAdapterProfile(cleanUsername, forceDemo);
    case 'codechef':
      return await getCodeChefAdapterProfile(cleanUsername, forceDemo);
    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
}
