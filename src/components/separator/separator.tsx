import React from 'react';
import './separator.css';

interface SeparatorProps {
  className: string;
  children?: React.ReactNode;
}

export const Separator = ({ className, children }: SeparatorProps) => {
  return <div className={className}>{children}</div>;
};
