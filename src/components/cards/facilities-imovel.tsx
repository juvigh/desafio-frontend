import { faBath, faBed, faRuler } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cards.css';
import { Separator } from '../separator/separator';
import { facilitiesImovelStyle } from './cards-styles';

interface facilitiesProps {
  beds: number;
  bath: number;
  dimensions: string;
}

export const FacilitiesImovel = ({ beds, bath, dimensions }: facilitiesProps) => {
  return (
    <div className="facilities-container">
      <div style={facilitiesImovelStyle.caption} className="facility-item">
        <Separator horizontal size={4} />
        <FontAwesomeIcon icon={faBed} />
        <Separator horizontal size={4} />
        <p>{beds} quartos</p>
      </div>
      <div style={facilitiesImovelStyle.caption} className="facility-item">
        <FontAwesomeIcon icon={faBath} />
        <Separator horizontal size={4} />
        <p>{bath} banheiros</p>
      </div>
      <div style={facilitiesImovelStyle.caption} className="facility-item">
        <FontAwesomeIcon icon={faRuler} />
        <Separator horizontal size={4} />
        <p>{dimensions} m²</p>
        <Separator horizontal size={4} />
      </div>
    </div>
  );
};
