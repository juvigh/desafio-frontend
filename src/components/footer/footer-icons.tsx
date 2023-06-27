import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { colors } from '../../styles/colors';

interface FooterIconsProps {
  icons: IconDefinition[];
  links: string[];
}

export const FooterIcons = ({ icons, links }: FooterIconsProps) => {
  return (
    <div className="footer-social-icons">
      {icons.map((icon, index) => (
        <a href={links[index]} key={index}>
          <FontAwesomeIcon icon={icon} color={colors.NeutralWhite} />
        </a>
      ))}
    </div>
  );
};
