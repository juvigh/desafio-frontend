import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCar, faCouch, faShower, faSwimmingPool, faTree, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { ItemsSection } from './items-section';
import { LoadingError } from '../loading/loading-error';
import { fetchProperties } from '../../api/fetch-properties';
import { PropertyItemTitle } from './items-enums';

const propertyItemsIcons: Record<PropertyItemTitle, IconDefinition> = {
  [PropertyItemTitle.AmericanKitchen]: faUtensils,
  [PropertyItemTitle.Garden]: faTree,
  [PropertyItemTitle.Garage]: faCar,
  [PropertyItemTitle.PrivatePool]: faSwimmingPool,
  [PropertyItemTitle.GasShower]: faShower,
  [PropertyItemTitle.Furniture]: faCouch,
};

export const PropertyItems = () => {
  const { data = [], loading, error } = fetchProperties();

  const availablePropertyItems = data.flatMap((property) => property.availableOnProperty);

  const items = Object.entries(propertyItemsIcons).map(([title]) => ({
    title: title as PropertyItemTitle,
    active: availablePropertyItems.includes(title),
  }));

  return (
    <LoadingError loading={loading} error={!!error} emptyMessage="Não há items" data={!!data}>
      <ItemsSection title="O que esse lugar oferece" items={items} icons={propertyItemsIcons} />
    </LoadingError>
  );
};
