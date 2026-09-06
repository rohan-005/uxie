import { PlatformProfile } from './profile';

export type CardTemplateId = 'template1' | 'template2' | 'template3';

export interface CardTemplateInfo {
  id: CardTemplateId;
  name: string;
  subtitle: string;
  description: string;
  badge: string;
}

/**
 * CardProps defines inputs for collectible card rendering.
 * Avatar images are sourced automatically from public profile metadata
 * or via the `profileImage` prop. Avatar upload functionality is disabled.
 */
export interface CardProps {
  profile: PlatformProfile;
  profileImage?: string;
  className?: string;
  isExporting?: boolean;
}
