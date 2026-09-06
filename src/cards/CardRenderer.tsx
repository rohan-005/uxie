import React from 'react';
import { CardTemplateId, CardProps } from '../types/card';
import { CardTemplateOne } from './CardTemplateOne';
import { CardTemplateTwo } from './CardTemplateTwo';
import { CardTemplateThree } from './CardTemplateThree';

interface CardRendererProps extends CardProps {
  templateId: CardTemplateId;
}

export const CardRenderer: React.FC<CardRendererProps> = ({
  templateId,
  profile,
  profileImage,
  className = '',
  isExporting = false,
}) => {
  const effectiveAvatar = profileImage || profile.avatar;

  switch (templateId) {
    case 'template1':
      return (
        <CardTemplateOne
          profile={profile}
          profileImage={effectiveAvatar}
          className={className}
          isExporting={isExporting}
        />
      );
    case 'template2':
      return (
        <CardTemplateTwo
          profile={profile}
          profileImage={effectiveAvatar}
          className={className}
          isExporting={isExporting}
        />
      );
    case 'template3':
      return (
        <CardTemplateThree
          profile={profile}
          profileImage={effectiveAvatar}
          className={className}
          isExporting={isExporting}
        />
      );
    default:
      return (
        <CardTemplateOne
          profile={profile}
          profileImage={effectiveAvatar}
          className={className}
          isExporting={isExporting}
        />
      );
  }
};
