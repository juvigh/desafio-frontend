import { useState } from 'react';
import { LargeLabel } from '../../styles/typography/label';
import { MenuItemStyles } from './menu-styles';
import { colors } from '../../styles/colors';
import { Link } from 'react-router-dom';
import './menu.css';

interface MenuItemProps {
  title: string;
  path: string;
}

export const MenuItem = ({ title, path }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  return (
    <div
      className="menu-item"
      style={{
        ...MenuItemStyles,
        borderBottom: `5px solid ${isHovered ? colors.CTA : colors.NeutralWhite}`,
      }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Link to={path}>
        <LargeLabel color="NeutralXdark" weight={isHovered ? 'bold' : 'semiBold'}>
          {title}
        </LargeLabel>
      </Link>
    </div>
  );
};
