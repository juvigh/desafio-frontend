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
import { LoadingError } from '../loading/loading-error';
import { CondominiumItemTitle } from './items-enums';
import { fetchPropertyDetails } from '../../api/fetch-property-details';

const condominiumItemsIcons: Record<CondominiumItemTitle, IconDefinition> = {
  [CondominiumItemTitle.Pool]: faSwimmingPool,
  [CondominiumItemTitle.Playground]: faPlay,
  [CondominiumItemTitle.Concierge]: faConciergeBell,
  [CondominiumItemTitle.Elevator]: faElevator,
  [CondominiumItemTitle.SportsCourt]: faVolleyballBall,
  [CondominiumItemTitle.Loundry]: faTshirt,
  [CondominiumItemTitle.Furniture]: faCouch,
};

interface CondominiumItemsProps {
  propertyDetailsId?: string;
}

export const CondominiumItems = ({ propertyDetailsId }: CondominiumItemsProps) => {
  const { data, loading, error } = fetchPropertyDetails(propertyDetailsId);

  const availableCondominiumItems = data?.availableOnCondominium ?? [];

  const items = Object.entries(condominiumItemsIcons).map(([title]) => ({
    title: title as CondominiumItemTitle,
    active: availableCondominiumItems.includes(title),
  }));

  return (
    <LoadingError loading={loading} error={!!error} emptyMessage="Não há items" data={!!data}>
      <ItemsSection title="Disponível no condomínio" items={items} icons={condominiumItemsIcons} />
    </LoadingError>
  );
};
