import React from 'react';
import './App.css';
import { Separator } from './components/separator/separator';
import { CardCategory } from './components/cards/card-category';
import { CardProperty } from './components/cards/card-property';
import { CardCarouselSection } from './components/carousel/carousel-section/card-carousel-section';

const categories = [
  {
    id: 1,
    title: 'Categoria 1',
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    numberOfProperties: 70,
  },
  {
    id: 2,
    title: 'Categoria 2',
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    numberOfProperties: 70,
  },
  {
    id: 3,
    title: 'Categoria 3',
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    numberOfProperties: 70,
  },
  {
    id: 4,
    title: 'Categoria 4',
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    numberOfProperties: 70,
  },
  {
    id: 5,
    title: 'Categoria 5',
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    numberOfProperties: 70,
  },
  {
    id: 6,
    title: 'Categoria 6',
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    numberOfProperties: 70,
  },
];

const properties = [
  {
    id: 1,
    name: 'Propriedade 1',
    price: 100000,
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    description: 'Alphaville, SP',
    beds: 2,
    bath: 3,
    dimension: '100',
  },
  {
    id: 2,
    name: 'Propriedade 2',
    price: 200000,
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    description: 'Alphaville, SP',
    beds: 2,
    bath: 3,
    dimension: '100',
  },
  {
    id: 3,
    name: 'Propriedade 3',
    price: 300000,
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    description: 'Alphaville, SP',
    beds: 2,
    bath: 3,
    dimension: '100',
  },
  {
    id: 4,
    name: 'Propriedade 3',
    price: 300000,
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    description: 'Alphaville, SP',
    beds: 2,
    bath: 3,
    dimension: '100',
  },
  {
    id: 5,
    name: 'Propriedade 3',
    price: 300000,
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    description: 'Alphaville, SP',
    beds: 2,
    bath: 3,
    dimension: '100',
  },
  {
    id: 6,
    name: 'Propriedade 3',
    price: 300000,
    image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
    description: 'Alphaville, SP',
    beds: 2,
    bath: 3,
    dimension: '100',
  },
];

function App() {
  return (
    <div className="App">
      <Separator vertical size={20} />
      <CardCarouselSection title="Encontre o imóvel ideal para o seu estilo de vida!">
        {categories.map((category) => (
          <CardCategory
            key={category.id}
            title={category.title}
            image={category.image}
            numberOfProperties={category.numberOfProperties}
          />
        ))}
      </CardCarouselSection>
      <Separator vertical size={20} />
      <CardCarouselSection title="Lançamentos que você pode se interessar!">
        {properties.map((property) => (
          <CardProperty
            key={property.id}
            title={property.name}
            price={property.price}
            image={property.image}
            description={property.description}
            beds={property.beds}
            bath={property.bath}
            dimension={property.dimension}
          />
        ))}
      </CardCarouselSection>
      <Separator vertical size={20} />
    </div>
  );
}

export default App;
