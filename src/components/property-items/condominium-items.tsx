import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ItemsSection } from './items-section';
import {
  faConciergeBell,
  faCouch,
  faElevator,
  faPlay,
  faSwimmingPool,
  faTshirt,
  faVolleyballBall,
} from '@fortawesome/free-solid-svg-icons';
import { fetchProperties } from '../../api/fetch-properties';
import { LoadingError } from '../loading/loading-error';

const condominiumItemsIcons: { [key: string]: IconDefinition } = {
  Pool: faSwimmingPool,
  Playground: faPlay,
  Concierge: faConciergeBell,
  Elevator: faElevator,
  SportsCourt: faVolleyballBall,
  Loundry: faTshirt,
  Furniture: faCouch,
};

export const CondominiumItems = () => {
  const { data = [], loading, error } = fetchProperties();

  const availableCondominiumItems = data.flatMap((property) => property.availableOnCondominium);

  const items = Object.entries(condominiumItemsIcons).map(([title]) => ({
    title,
    active: availableCondominiumItems.includes(title),
  }));
  return (
    <LoadingError loading={loading} error={!!error} emptyMessage="Não há items" data={!!data}>
      <ItemsSection title="Disponível no condomínio" items={items} icons={condominiumItemsIcons} />;
    </LoadingError>
  );
};
