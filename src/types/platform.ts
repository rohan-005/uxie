export type PlatformType = 'github' | 'codeforces' | 'leetcode' | 'codechef';

export interface PlatformMetadata {
  id: PlatformType;
  name: string;
  category: string;
  color: string;
  icon: string;
}
