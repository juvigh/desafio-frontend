import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCar, faCouch, faShower, faSwimmingPool, faTree, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { ItemsSection } from './items-section';
import { LoadingError } from '../loading/loading-error';
import { PropertyItemTitle } from './items-enums';
import { fetchPropertyDetails } from '../../api/fetch-property-details';

const propertyItemsIcons: Record<PropertyItemTitle, IconDefinition> = {
  [PropertyItemTitle.AmericanKitchen]: faUtensils,
  [PropertyItemTitle.Garden]: faTree,
  [PropertyItemTitle.Garage]: faCar,
  [PropertyItemTitle.PrivatePool]: faSwimmingPool,
  [PropertyItemTitle.GasShower]: faShower,
  [PropertyItemTitle.Furniture]: faCouch,
};

interface PropertyItemsProps {
  propertyDetailsId?: string;
}

export const PropertyItems = ({ propertyDetailsId }: PropertyItemsProps) => {
  const { data, loading, error } = fetchPropertyDetails(propertyDetailsId);

  const availablePropertyItems = data?.availableOnProperty ?? [];

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
