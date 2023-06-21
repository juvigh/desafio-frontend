import React from 'react';
import './App.css';
import { Separator } from './components/separator/separator';
import { CardCarouselSection } from './components/carousel/carousel-section/card-carousel-section';
import { CardData } from './components/carousel/carousel-card';

const categoryCardsData: CardData[] = [
  {
    type: 'category',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão Azul',
      numberOfProperties: 70,
    },
  },
  {
    type: 'category',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão Azul',
      numberOfProperties: 70,
    },
  },
  {
    type: 'category',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão Azul',
      numberOfProperties: 70,
    },
  },
  {
    type: 'category',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão Azul',
      numberOfProperties: 70,
    },
  },
  {
    type: 'category',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão Azul',
      numberOfProperties: 70,
    },
  },
  {
    type: 'category',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão Azul',
      numberOfProperties: 70,
    },
  },
  {
    type: 'category',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão Azul',
      numberOfProperties: 70,
    },
  },
];

const propertyCardsData: CardData[] = [
  {
    type: 'property',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão azul',
      description: 'Alphaville, SP',
      price: 100000,
      beds: 2,
      bath: 1,
      dimension: '120',
    },
  },
  {
    type: 'property',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão azul',
      description: 'Alphaville, SP',
      price: 100000,
      beds: 2,
      bath: 1,
      dimension: '120',
    },
  },
  {
    type: 'property',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão azul',
      description: 'Alphaville, SP',
      price: 100000,
      beds: 2,
      bath: 1,
      dimension: '120',
    },
  },
  {
    type: 'property',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão azul',
      description: 'Alphaville, SP',
      price: 100000,
      beds: 2,
      bath: 1,
      dimension: '120',
    },
  },
  {
    type: 'property',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão azul',
      description: 'Alphaville, SP',
      price: 100000,
      beds: 2,
      bath: 1,
      dimension: '120',
    },
  },
  {
    type: 'property',
    data: {
      image: 'https://images.adsttc.com/media/images/6152/07d0/e5d7/3801/659d/8d4d/medium_jpg/3.jpg?1632765994',
      title: 'Mansão azul',
      description: 'Alphaville, SP',
      price: 100000,
      beds: 2,
      bath: 1,
      dimension: '120',
    },
  },
];

function App() {
  return (
    <div className="App">
      <Separator vertical size={20} />
      <CardCarouselSection title="Encontre o imóvel ideal para o seu estilo de vida!" cardsData={categoryCardsData} />
      <Separator vertical size={20} />
      <CardCarouselSection title="Lançamentos que você pode se interessar!" cardsData={propertyCardsData} />
      <Separator vertical size={20} />
    </div>
  );
}

export default App;
