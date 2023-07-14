import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { LargeLabel } from '../../styles/typography/label';
import { MenuItemStyles } from './menu-styles';
import { colors } from '../../styles/colors';
import './menu.css';

interface MenuItemProps {
  title: string;
  path: string;
}

export const MenuItem = ({ title, path }: MenuItemProps) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  const isActive = location.pathname === path;

  return (
    <div
      className="menu-item"
      style={{
        ...MenuItemStyles,
        borderBottom: `5px solid ${isActive ? colors.CTA : isHovered ? colors.CTA : colors.NeutralWhite}`,
      }}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <Link to={path}>
        <LargeLabel color="NeutralXdark" weight={isActive ? 'bold' : isHovered ? 'bold' : 'semiBold'}>
          {title}
        </LargeLabel>
      </Link>
    </div>
  );
};
