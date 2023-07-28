import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardButtons } from './sub-components/card-buttons';
import { CardContact } from './sub-components/card-contact';
import { CardHeader } from './sub-components/card-header';
import { IconText } from './sub-components/icon-text';
import { faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { CardContainer } from './sub-components/card-container';
import './sub-components/sub-components.css';
import { InfoItem } from './sub-components/info-item';
import { Divider } from '../divider/divider';
import { fetchPropertyDetails } from '../../api/fetch-property-details';
import { LoadingError } from '../loading/loading-error';

interface CardRentalProps {
  propertyDetailsId: string;
}

export const CardRental = ({ propertyDetailsId }: CardRentalProps) => {
  const { data, loading, error } = fetchPropertyDetails(propertyDetailsId);
  const [isHearted, setIsHearted] = useState(false);

  const handleHeartClick = () => {
    setIsHearted(!isHearted);
  };

  const condominium = data?.rentPrices.condominium ?? 0;
  const iptu = data?.rentPrices.iptu ?? 0;
  const serviceTax = data?.rentPrices.serviceTax ?? 0;
  const rent = data?.rentPrices.rent ?? 0;

  const price = (condominium + iptu + serviceTax + rent).toFixed(2);
  return (
    <LoadingError loading={loading} error={!!error} emptyMessage="Não há items" data={!!data}>
      <CardContainer>
        <CardHeader title={`${price}`} />
        <Divider spacing="12px" />
        <InfoItem label="Condomínio" value={data?.rentPrices.condominium} />
        <InfoItem label="IPTU" value={data?.rentPrices.iptu} />
        <InfoItem label="Taxa de Serviços" value={data?.rentPrices.serviceTax} />
        <InfoItem label="Aluguel Bruto" value={data?.rentPrices.rent} />
        <Divider spacing="12px" />
        <InfoItem label="Total" value={price} mediumPrice />
        <CardContact
          image="https://terceirotempo.uol.com.br/imagens/93/69/arq_239369.jpg?1517579316=1517579316?1517579322"
          name={data?.broker.name}
          workplace={data?.broker.company}
          address={data?.broker.cresciSp}
        />
        <CardButtons />
        <div className="icons">
          <IconText
            icon={
              <FontAwesomeIcon
                icon={isHearted ? faHeartSolid : faHeartRegular}
                className={isHearted ? 'hearted' : ''}
                onClick={handleHeartClick}
              />
            }
            text={isHearted ? 'Favoritado' : 'Favoritar'}
            onClick={handleHeartClick}
          />
          <IconText icon={<FontAwesomeIcon icon={faShareSquare} className="share-icon" />} text="Compartilhar" />
        </div>
      </CardContainer>
    </LoadingError>
  );
};
