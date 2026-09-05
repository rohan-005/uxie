export interface GitHubUserResponse {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepoResponse {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  pushed_at: string;
}

export interface GitHubFetchedData {
  user: GitHubUserResponse;
  repos: GitHubRepoResponse[];
  totalStars: number;
  totalForks: number;
  languages: string[];
  isDemoData: boolean;
}

export async function fetchGitHubProfile(username: string): Promise<GitHubFetchedData> {
  try {
    const userRes = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);

    if (!userRes.ok) {
      if (userRes.status === 404) {
        throw new Error(`GitHub user "${username}" was not found.`);
      }
      if (userRes.status === 403) {
        throw new Error(`GitHub API rate limit exceeded. Please try again later.`);
      }
      throw new Error(`Failed to fetch GitHub profile (HTTP ${userRes.status}).`);
    }

    const user: GitHubUserResponse = await userRes.json();

    let repos: GitHubRepoResponse[] = [];
    let totalStars = 0;
    let totalForks = 0;
    const langSet = new Set<string>();

    try {
      const reposRes = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`
      );
      if (reposRes.ok) {
        repos = await reposRes.json();
        repos.forEach((repo) => {
          totalStars += repo.stargazers_count || 0;
          totalForks += repo.forks_count || 0;
          if (repo.language) {
            langSet.add(repo.language);
          }
        });
      }
    } catch (e) {
      console.warn('Failed to fetch repos for', username, e);
    }

    return {
      user,
      repos,
      totalStars,
      totalForks,
      languages: Array.from(langSet),
      isDemoData: false,
    };
  } catch (error: any) {
    console.warn(`GitHub API request failed for ${username}:`, error?.message);
    throw error;
  }
}
