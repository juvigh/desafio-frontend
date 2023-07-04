import { useState } from 'react';
import { LargeLabel } from '../../styles/typography/label';
import './menu.css';

interface MenuItemProps {
  title: string;
}

export const MenuItem = ({ title }: MenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  return (
    <div className="menu-item" onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)}>
      <LargeLabel color="NeutralXdark" weight={isHovered ? 'bold' : 'semiBold'} title={title} />
    </div>
  );
};
