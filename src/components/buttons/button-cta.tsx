import React from 'react';
import { buttonStyles } from './buttons-styles';

interface CTAButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  hasIcon: boolean;
  size: 'default' | 'compact';
  onClick?: () => void;
}

export const CTAButton = ({ children, icon, hasIcon, size, onClick }: CTAButtonProps) => {
  const buttonStyle = {
    ...buttonStyles.cta,
    height: size === 'compact' ? '40px' : '48px',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={onClick}>
        {hasIcon && <span>{icon}</span>}
        <label> {children} </label>
      </button>
    </div>
  );
};
