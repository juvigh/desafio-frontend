import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faTree,
  faSchool,
  faUniversity,
  faHospital,
  faStore,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import './proximities-section.css';
import { H2 } from '../../styles/typography/h2';
import { Body2 } from '../../styles/typography/body-2';
import { colors } from '../../styles/colors';
import { H3 } from '../../styles/typography/h3';
import { Separator } from '../separator/separator';
import { ProximitiesMap } from './proximities-map';
import { ProximitiesItemTitle } from './proximities-enum';

const proximityIcons: { [key in ProximitiesItemTitle]: IconDefinition } = {
  [ProximitiesItemTitle.WellRatedRestaurants]: faUtensils,
  [ProximitiesItemTitle.GreenAreas]: faTree,
  [ProximitiesItemTitle.Schools]: faSchool,
  [ProximitiesItemTitle.Colleges]: faUniversity,
  [ProximitiesItemTitle.Hospitals]: faHospital,
  [ProximitiesItemTitle.Markets]: faStore,
};

export interface Proximity {
  type: keyof typeof proximityIcons;
  description: string;
}

interface ProximitiesSectionProps {
  proximities: Proximity[];
  latitude: number;
  longitude: number;
}

export const ProximitiesSection = ({ proximities, latitude, longitude }: ProximitiesSectionProps) => {
  return (
    <section className="proximities-section">
      <div className="proximity-text">
        <H2 color="NeutralXdark">Proximidades</H2>
        {proximities.map((proximity, index) => (
          <div key={index}>
            <div className="proximity-title">
              <FontAwesomeIcon icon={proximityIcons[proximity.type]} color={colors.NeutralDark} />
              <Separator horizontal size={8} />
              <H3 color="NeutralXdark">{proximity.type}</H3>
            </div>
            <Body2 weight="regular">{proximity.description}</Body2>
          </div>
        ))}
      </div>
      <div className="proximity-map">
        <ProximitiesMap latitude={latitude} longitude={longitude} />
      </div>
    </section>
  );
};
