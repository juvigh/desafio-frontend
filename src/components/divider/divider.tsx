import React from 'react';
import './divider.css';

interface DividerProps {
  width?: string;
  spacing?: string;
}

export const Divider = ({ width, spacing }: DividerProps) => {
  const containerStyle = spacing ? { paddingInline: spacing } : {};

  return (
    <div style={{ width, ...containerStyle }}>
      <hr className="divider" />
    </div>
  );
};
