import React from 'react';
import { colors } from '../../styles/colors';
import { buttonStyles } from './buttons-styles';

interface PrimaryButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  hasIcon: boolean;
  size: 'default' | 'compact';
  disable: boolean;
  onClick?: () => void;
}

export const PrimaryButton = ({ children, icon, hasIcon, size, disable, onClick }: PrimaryButtonProps) => {
  const buttonStyle = {
    ...buttonStyles.primary,
    height: size === 'compact' ? '40px' : '48px',
    backgroundColor: disable ? colors.NeutralLight : colors.PrimaryXdark,
  };

  return (
    <div>
      <button className="primary-button" style={buttonStyle} disabled={disable} onClick={onClick}>
        {hasIcon && <span>{icon}</span>}
        <label> {children} </label>
      </button>
      <style>
        {`.primary-button:hover{
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }`}
      </style>
    </div>
  );
};
