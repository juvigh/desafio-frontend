import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardButtons } from './sub-components/card-buttons';
import { CardContact } from './sub-components/card-contact';
import { CardHeader } from './sub-components/card-header';
import { IconText } from './sub-components/icon-text';
import { faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { CardContainer } from './sub-components/card-container';
import { commonStyles } from './cards-styles';
import './sub-components/sub-components.css';
import { InfoItem } from './sub-components/info-item';

interface CardRentalProps {
  condominium: number;
  iptu: number;
  name: string;
  workplace: string;
  address: string;
  image: string;
  serviceFee: number;
  grossRent: number;
}

export const CardRental = ({
  condominium,
  iptu,
  name,
  workplace,
  address,
  image,
  serviceFee,
  grossRent,
}: CardRentalProps) => {
  const price = (condominium + iptu + serviceFee + grossRent).toFixed(2);
  return (
    <CardContainer>
      <CardHeader title={`${price}`} />
      <Divider />
      <InfoItem label="Condomínio" value={condominium} bold />
      <InfoItem label="IPTU" value={iptu} bold />
      <InfoItem label="Taxa de Serviços" value={serviceFee} bold />
      <InfoItem label="Aluguel Bruto" value={grossRent} bold />
      <Divider />
      <InfoItem label="Total" value={price} bold mediumPrice />
      <CardContact image={image} name={name} workplace={workplace} address={address} />
      <CardButtons />
      <div className="icons">
        <IconText icon={<FontAwesomeIcon icon={faHeart} className="favorite-icon" />} text="Favoritar" />
        <IconText icon={<FontAwesomeIcon icon={faShareSquare} className="share-icon" />} text="Compartilhar" />
      </div>
    </CardContainer>
  );
};
