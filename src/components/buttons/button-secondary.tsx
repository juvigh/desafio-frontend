import React from 'react';
import { buttonStyles } from './buttons-styles';

interface SecondaryButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  hasIcon: boolean;
  size: 'default' | 'compact';
  onClick?: () => void;
}

export const SecondaryButton = ({ children, icon, hasIcon, size, onClick }: SecondaryButtonProps) => {
  const buttonStyle = {
    ...buttonStyles.secondary,
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
