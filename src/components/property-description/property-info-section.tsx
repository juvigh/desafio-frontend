import { PropertyInfo } from '../property-info/property';
import './property-section.css';
import { faBath, faBed, faCar, faRuler, faSwimmingPool } from '@fortawesome/free-solid-svg-icons';

interface PropertyInfoSectionProps {
  bedroom: number;
  bathroom: number;
  pool: boolean;
  garage: boolean;
  area: string;
}

export const PropertyInfoSection = ({ bedroom, bathroom, pool, garage, area }: PropertyInfoSectionProps) => {
  return (
    <div className="property-info-container">
      <PropertyInfo icon={faBed} title="Quartos" number={bedroom} />
      <PropertyInfo icon={faBath} title="Banheiros" number={bathroom} />
      <PropertyInfo icon={faRuler} title={area} />
      {pool && <PropertyInfo icon={faSwimmingPool} title="Piscina" />}
      {garage && <PropertyInfo icon={faCar} title="Vaga" />}
    </div>
  );
};
