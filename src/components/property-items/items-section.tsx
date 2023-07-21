import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Body2 } from '../../styles/typography/body-2';
import { H2 } from '../../styles/typography/h2';
import { colors } from '../../styles/colors';
import { Separator } from '../separator/separator';
import './items-section.css';

interface Item {
  title: string;
  active?: boolean;
}

interface ItemsSectionProps {
  title: string;
  items: Item[];
  icons: { [key: string]: IconDefinition };
}

export const ItemsSection = ({ title, items, icons }: ItemsSectionProps) => {
  const activeItems = items.filter((item) => item.active);
  const inactiveItems = items.filter((item) => !item.active);

  return (
    <section>
      <H2 color="NeutralXdark">{title}</H2>
      <div className="items-columns">
        <div className="items-column">
          {activeItems.map((item, index) => (
            <div className="item" key={index}>
              <FontAwesomeIcon icon={icons[item.title]} color={colors.CTA} />
              <Separator horizontal size={8} />
              <Body2 weight="regular">{item.title}</Body2>
            </div>
          ))}
        </div>
        <div className="items-column">
          {inactiveItems.map((item, index) => (
            <div className="item" key={index}>
              <FontAwesomeIcon icon={icons[item.title]} color={colors.NeutralLight} />
              <Separator horizontal size={8} />
              <Body2 weight="regular" withLineThrough>
                {item.title}
              </Body2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
