import { useState } from 'react';
import { LargeLabel } from '../../styles/typography/label';
import './menu.css';

interface MenuItemProps {
  label: string;
}

export const MenuItem = ({ label }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  return (
    <div className="menu-item" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
      <LargeLabel weight={isHovered ? 'bold' : 'semiBold'}>{label}</LargeLabel>
    </div>
  );
};
