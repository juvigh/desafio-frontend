import { useParams } from 'react-router-dom';
import { CardSales } from '../../components/cards/card-sale';
import { ImageCarouselSection } from '../../components/carousel/carousel-section/carousel-image-section';
import { Divider } from '../../components/divider/divider';
import { Footer } from '../../components/footer/footer';
import { Menu } from '../../components/menu/menu';
import { PropertyDescription } from '../../components/property-description/property-description';
import { CondominiumItems } from '../../components/property-items/condominium-items';
import { PropertyItems } from '../../components/property-items/property-items';
import { Proximities } from '../../components/proximities/proximities';
import { Separator } from '../../components/separator/separator';
import './details-property.css';

export const DetailsProperty = () => {
  const { id } = useParams();

  return (
    <div>
      <Menu />
      <div className="container-details">
        <ImageCarouselSection propertyDetailsId={id} />
        <Separator vertical size={12} />
        <div className="description">
          <PropertyDescription propertyDetailsId={id} />
          <CardSales propertyDetailsId={id} />
        </div>
        <div className="items-property">
          <Divider width="50%" />
          <PropertyItems propertyDetailsId={id} />
          <Divider width="50%" />
          <CondominiumItems propertyDetailsId={id} />
          <Divider width="50%" />
          <Proximities propertyDetailsId={id} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
