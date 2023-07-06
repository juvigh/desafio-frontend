import React from 'react';
import { colors } from '../../styles/colors';
import { baseButtonStyles, buttonStyles } from './buttons-styles';
import './button.css';
import { Separator } from '../separator/separator';
import { LargeLabel } from '../../styles/typography/label';

interface ButtonProps {
  title: string;
  type: 'primary' | 'secondary' | 'cta';
  icon?: React.ReactNode;
  disable?: boolean;
  compact?: boolean;
  paddingHorizontal?: number;
  onClick?: () => void;
  expand?: boolean;
  titleWeight?: 'bold' | 'regular';
}

export const Button = ({
  title,
  icon,
  disable,
  compact,
  type,
  paddingHorizontal,
  onClick,
  expand,
  titleWeight,
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
    width: expand ? '100%' : 'auto',
  };

  const buttonHover = type === 'primary' && !disable ? 'primary-button' : '';
  const colorButtom = type === 'secondary' ? 'Accessory1' : 'NeutralWhite';

  return (
    <div>
      <button className={buttonHover} style={buttonStyle} disabled={disable} onClick={onClick}>
        {!!icon && (
          <>
            <span>{icon}</span>
            {icon && title && <Separator horizontal size={8} />}
          </>
        )}
        <LargeLabel weight={titleWeight} color={colorButtom}>
          {title}
        </LargeLabel>
      </button>
    </div>
  );
};
