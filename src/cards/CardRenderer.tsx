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
  className = '',
  isExporting = false,
}) => {
  switch (templateId) {
    case 'template1':
      return (
        <CardTemplateOne
          profile={profile}
          className={className}
          isExporting={isExporting}
        />
      );
    case 'template2':
      return (
        <CardTemplateTwo
          profile={profile}
          className={className}
          isExporting={isExporting}
        />
      );
    case 'template3':
      return (
        <CardTemplateThree
          profile={profile}
          className={className}
          isExporting={isExporting}
        />
      );
    default:
      return (
        <CardTemplateOne
          profile={profile}
          className={className}
          isExporting={isExporting}
        />
      );
  }
};
