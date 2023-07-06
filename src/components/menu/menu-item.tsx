import { useState } from 'react';
import { LargeLabel } from '../../styles/typography/label';
import { MenuItemStyles } from './menu-styles';
import { colors } from '../../styles/colors';

interface MenuItemProps {
  title: string;
}

export const MenuItem = ({ title }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  return (
    <div
      style={{
        ...MenuItemStyles,
        borderBottom: `5px solid ${isHovered ? colors.CTA : colors.NeutralWhite}`,
      }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <LargeLabel color="NeutralXdark" weight={isHovered ? 'bold' : 'semiBold'}>
        {title}
      </LargeLabel>
    </div>
  );
};
