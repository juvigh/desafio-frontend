import { H1 } from '../../styles/typography/h1';
import location from '../../assets/location.svg';
import { H2 } from '../../styles/typography/h2';
import { Body2 } from '../../styles/typography/body-2';
import './property-section.css';
import { PropertyInfoSection } from './property-info-section';
import { Separator } from '../separator/separator';

export const PropertyDescription = () => {
  return (
    <section className="container-info">
      <div className="container-title">
        <H1 color="NeutralXdark"> Casa à venda em Osasco, bairro Bonfim, melhor da região!</H1>
        <div className="container-sub-title">
          <img src={location} />
          <Separator horizontal size={8} />
          <Body2 weight="regular"> Avenida das Nações Unidas 3239, Complemento 245B, Bonfim, Osasco </Body2>
        </div>
      </div>
      <PropertyInfoSection />
      <H2 color="NeutralXdark"> Descrição </H2>
      <Body2 weight="regular">
        A casa se insere em um clima de paz, de natureza. A decoração acompanha a magia desse microclima ecológico que
        encanta a adultos e crianças. A casa foi construída em madeira nobre. Decorada com lustres temáticos e
        estruturas que dão vida ao lugar. Ideal para todos que busquem descansar ou trabalhar e desejam morar na melhor
        região de Osasco- SP.
      </Body2>
    </section>
  );
};
