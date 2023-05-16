import React from 'react';
import { colors } from '../../styles/colors';
import { buttonStyles } from './buttons-styles';
import './button.css';

interface ButtonProps {
  children: React.ReactNode;
  type: 'primary' | 'secondary' | 'cta';
  icon?: React.ReactNode;
  disable?: boolean;
  compact?: boolean;
  paddingHorizontal?: number;
  onClick?: () => void;
}

export const Button = ({ children, icon, disable, compact, type, paddingHorizontal, onClick }: ButtonProps) => {
  let buttonStyle = {};

  if (type === 'primary') {
    buttonStyle = {
      ...buttonStyles.primary,
      height: compact ? '40px' : '48px',
      backgroundColor: disable ? colors.NeutralLight : colors.PrimaryXdark,
      paddingLeft: paddingHorizontal || buttonStyles.primary.paddingLeft,
      paddingRight: paddingHorizontal || buttonStyles.primary.paddingRight,
    };
  } else if (type === 'secondary') {
    buttonStyle = {
      ...buttonStyles.secondary,
      height: compact ? '40px' : '48px',
      paddingLeft: paddingHorizontal || buttonStyles.secondary.paddingLeft,
      paddingRight: paddingHorizontal || buttonStyles.secondary.paddingRight,
    };
  } else if (type === 'cta') {
    buttonStyle = {
      ...buttonStyles.cta,
      height: compact ? '40px' : '48px',
      paddingLeft: paddingHorizontal || buttonStyles.cta.paddingLeft,
      paddingRight: paddingHorizontal || buttonStyles.cta.paddingRight,
    };
  }

  const buttonHover = type === 'primary' && !disable ? 'primary-button' : '';

  return (
    <div>
      <button className={buttonHover} style={buttonStyle} disabled={disable} onClick={onClick}>
        {!!icon && <span>{icon}</span>}
        <label> {children} </label>
      </button>
    </div>
  );
};
