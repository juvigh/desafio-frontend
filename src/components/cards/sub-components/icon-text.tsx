import React from 'react';
import { Separator } from '../../separator/separator';

interface IconTextProps {
  icon: React.ReactNode;
  text: string;
}

export const IconText = ({ icon, text }: IconTextProps) => {
  return (
    <div className="icon-text">
      {icon}
      <Separator horizontal size={4} />
      <p>{text}</p>
    </div>
  );
};
