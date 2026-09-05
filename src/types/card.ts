import { PlatformProfile } from './profile';

export type CardTemplateId = 'template1' | 'template2' | 'template3';

export interface CardTemplateInfo {
  id: CardTemplateId;
  name: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface CardProps {
  profile: PlatformProfile;
  customAvatar?: string | null;
  className?: string;
  isExporting?: boolean;
}
