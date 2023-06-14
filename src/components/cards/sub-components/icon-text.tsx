import React from 'react';
import { Separator } from '../../separator/separator';

interface IconTextProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export const IconText = ({ icon, text, onClick }: IconTextProps) => {
  return (
    <div className="icon-text" onClick={onClick}>
      {icon}
      <Separator horizontal size={4} />
      <p>{text}</p>
    </div>
  );
};
