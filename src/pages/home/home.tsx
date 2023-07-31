import { Banner } from '../../components/banner/banner';
import { CategoryCarousel } from '../../components/carousel/carousel-section/carousel-category-section';
import { PropertyCarousel } from '../../components/carousel/carousel-section/carousel-property-section';
import { Footer } from '../../components/footer/footer';
import { Hero } from '../../components/hero/hero';
import { Menu } from '../../components/menu/menu';
import './home.css';

export const Home = () => {
  return (
    <div className="home-container">
      <Menu />
      <div className="hero">
        <Hero />
      </div>
      <div className="category-carousel">
        <CategoryCarousel />
      </div>
      <div className="banner">
        <Banner />
      </div>
      <div className="property-carousel">
        <PropertyCarousel />
      </div>
      <Footer />
    </div>
  );
};
