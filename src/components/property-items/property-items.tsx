import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCar, faCouch, faShower, faSwimmingPool, faTree, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { ItemsSection } from './items-section';
import { LoadingError } from '../loading/loading-error';
import { fetchProperties } from '../../api/fetch-properties';

const propertyItemsIcons: { [key: string]: IconDefinition } = {
  AmericanKitchen: faUtensils,
  Garden: faTree,
  Garage: faCar,
  PrivatePool: faSwimmingPool,
  GasShower: faShower,
  Furniture: faCouch,
};

export const PropertyItems = () => {
  const { data = [], loading, error } = fetchProperties();

  const availablePropertyItems = data.flatMap((property) => property.availableOnProperty);

  const items = Object.entries(propertyItemsIcons).map(([title]) => ({
    title,
    active: availablePropertyItems.includes(title),
  }));

  return (
    <LoadingError loading={loading} error={!!error} emptyMessage="Não há items" data={!!data}>
      <ItemsSection title="O que esse lugar oferece" items={items} icons={propertyItemsIcons} />
    </LoadingError>
  );
};
