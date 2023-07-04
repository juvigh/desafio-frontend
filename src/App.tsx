import React from 'react';
import './App.css';
import { Separator } from './components/separator/separator';
import { CategoryCarousel } from './components/carousel/carousel-section/carrossel-category-section';

function App() {
  return (
    <div>
      <Separator vertical size={8} />
      <CategoryCarousel />
      <Separator vertical size={8} />
    </div>
  );
}

export default App;
