import React, { useState } from 'react';
import { badgeStyles, hoverStyles, selectStyles } from './badges-style';
import { LargeLabel } from '../../styles/typography/label';
import { colors } from '../../styles/colors';

interface BadgeProps {
  icon: React.ReactNode;
  title: string;
}

export const Badge = ({ icon, title }: BadgeProps) => {
  const [select, setSelect] = useState(false);
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    setSelect(!select);
  };

  const mouseEnter = () => {
    setHover(true);
  };

  const mouseLeave = () => {
    setHover(false);
  };

  const badgeStyle = {
    ...badgeStyles,
    ...(select && selectStyles),
    ...(hover ? hoverStyles : {}),
  };

  return (
    <div style={badgeStyle} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onClick={handleClick}>
      <span>{icon}</span>
      <LargeLabel weight={'regular'} style={select ? { color: colors.NeutralWhite } : {}}>
        {title}
      </LargeLabel>
    </div>
  );
};
