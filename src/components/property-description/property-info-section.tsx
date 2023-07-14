import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <PropertyInfo icon={<FontAwesomeIcon icon={faBed} />} title="Quartos" number={bedroom} />
      <PropertyInfo icon={<FontAwesomeIcon icon={faBath} />} title="Banheiros" number={bathroom} />
      <PropertyInfo icon={<FontAwesomeIcon icon={faRuler} />} title={area} />
      {pool && <PropertyInfo icon={<FontAwesomeIcon icon={faSwimmingPool} />} title="Piscina" />}
      {garage && <PropertyInfo icon={<FontAwesomeIcon icon={faCar} />} title="Vaga" />}
    </div>
  );
};
