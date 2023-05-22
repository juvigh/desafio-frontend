import React, { useState } from 'react';
import { badgeStyles } from './badges-style';

interface BadgeProps {
  icon: React.ReactNode;
  title: string;
}

export const Badge = ({ icon, title }: BadgeProps) => {
  const [select, setSelect] = useState(false);

  const handleClick = () => {
    setSelect(!select);
  };

  const badgeStyle = {
    ...badgeStyles,
    ...(select && badgeStyles.select),
  };

  return (
    <div style={badgeStyle} onClick={handleClick}>
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
};
