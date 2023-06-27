import { Display } from '../../styles/typography/display';
import { Body1 } from '../../styles/typography/body-1';
import banner from '../../assets/banner.svg';
import arrowRight from '../../assets/arrowright2.svg';
import { Separator } from '../separator/separator';
import './banner.css';

export const Banner = () => {
  const handleBannerClick = () => {
    alert('Em construção');
  };

  return (
    <div className="banner-container" onClick={handleBannerClick}>
      <img src={banner} alt="Banner" />
      <div className="banner-text">
        <Display color="NeutralWhite">Melhores imóveis</Display>
        <Separator vertical size={4} />
        <Body1 color="NeutralWhite">Confira opções que podem ser uma grande oportunidade!</Body1>
      </div>
      <div className="banner-icon">
        <img src={arrowRight} alt="Icon ArrowRight" />
      </div>
    </div>
  );
};
