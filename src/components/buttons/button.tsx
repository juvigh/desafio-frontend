import React from 'react';
import { colors } from '../../styles/colors';
import { baseButtonStyles, buttonStyles } from './buttons-styles';
import './button.css';
import { Separator } from '../separator/separator';
import { LargeLabel } from '../../styles/typography/label';

interface ButtonProps {
  children: React.ReactNode;
  type: 'primary' | 'secondary' | 'cta';
  icon?: React.ReactNode;
  disable?: boolean;
  compact?: boolean;
  paddingHorizontal?: number;
  onClick?: () => void;
  expand?: boolean;
  weight: 'bold' | 'regular' | 'semiBold';
  color?: keyof typeof colors;
}

export const Button = ({
  children,
  icon,
  disable,
  compact,
  type,
  paddingHorizontal,
  onClick,
  expand,
  weight,
  color,
}: ButtonProps) => {
  const buttonStyleMapping = {
    primary: {
      ...buttonStyles.primary,
      backgroundColor: disable ? colors.NeutralLight : colors.PrimaryXdark,
    },
    secondary: { ...buttonStyles.secondary },
    cta: { ...buttonStyles.cta },
  };

  const buttonStyle = {
    ...baseButtonStyles,
    ...buttonStyleMapping[type],
    height: compact ? '40px' : baseButtonStyles.height,
    padding: paddingHorizontal?.toString() || baseButtonStyles.padding,
    width: expand ? '100%' : '',
  };

  const buttonHover = type === 'primary' && !disable ? 'primary-button' : '';

  return (
    <div>
      <button className={buttonHover} style={buttonStyle} disabled={disable} onClick={onClick}>
        {!!icon && (
          <>
            <span>{icon}</span>
            {icon && children && <Separator horizontal size={8} />}
          </>
        )}
        <LargeLabel weight={weight} color={color}>
          {children}
        </LargeLabel>
      </button>
    </div>
  );
};
