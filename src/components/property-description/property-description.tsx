import { H1 } from '../../styles/typography/h1';
import location from '../../assets/location.svg';
import { H2 } from '../../styles/typography/h2';
import { Body2 } from '../../styles/typography/body-2';
import './property-section.css';
import { PropertyInfoSection } from './property-info-section';
import { Separator } from '../separator/separator';
import { fetchPropertyDetails } from '../../api/fetch-property-details';
import { LoadingError } from '../loading/loading-error';
interface PropertyDescriptionProps {
  propertyDetailsId?: string;
}

interface Address {
  street?: string;
  complement?: string;
  district?: string;
  city?: string;
}

export const PropertyDescription = ({ propertyDetailsId }: PropertyDescriptionProps) => {
  const { data, loading, error } = fetchPropertyDetails(propertyDetailsId);

  const formatAddress = (address: Address) => {
    const parts = [address.street, address.complement, address.district, address.city];

    return parts.filter(Boolean).join(', ');
  };

  const formattedAddress = data?.address ? formatAddress(data.address) : null;

  return (
    <LoadingError loading={loading} error={!!error} emptyMessage="Não há items" data={!!data}>
      <section className="container-info">
        <div className="container-title">
          <H1 color="NeutralXdark">{data?.shortDescription}</H1>
          <div className="container-sub-title">
            <img src={location} />
            <Separator horizontal size={8} />
            {formattedAddress && <Body2 weight="regular">{formattedAddress}</Body2>}
          </div>
        </div>
        <PropertyInfoSection
          bedroom={data?.bedrooms}
          bathroom={data?.bathrooms}
          area={data?.area}
          pool={data?.hasPool}
          garage={data?.hasGarage}
        />
        <H2 color="NeutralXdark"> Descrição </H2>
        <Body2 weight="regular">{data?.description}</Body2>
      </section>
    </LoadingError>
  );
};
