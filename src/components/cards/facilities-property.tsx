import { faBath, faBed, faRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cards.css';
import { Separator } from '../separator/separator';
import { Caption } from '../../styles/typography/caption';

interface FacilitiesProps {
  beds: number;
  bath: number;
  dimensions: string;
}

export const FacilitiesProperty = ({ beds, bath, dimensions }: FacilitiesProps) => {
  return (
    <div className="facilities-container">
      <div className="facility-item">
        <Separator horizontal size={4} />
        <FontAwesomeIcon icon={faBed} />
        <Separator horizontal size={4} />
        <Caption>{beds} quartos</Caption>
      </div>
      <div className="facility-item">
        <FontAwesomeIcon icon={faBath} />
        <Separator horizontal size={4} />
        <Caption>{bath} banheiros</Caption>
      </div>
      <div className="facility-item">
        <FontAwesomeIcon icon={faRuler} />
        <Separator horizontal size={4} />
        <Caption>{dimensions}</Caption>
        <Separator horizontal size={4} />
      </div>
    </div>
  );
};
