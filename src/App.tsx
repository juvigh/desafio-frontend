import React from 'react';
import './App.css';
import { H1 } from './styles/typography/h1';
import { H2 } from './styles/typography/h2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Button } from './components/buttons/button';

function App() {
  return (
    <div className="App">
      <H1> Styleguide </H1>
      <H2> Botões </H2>
      <Button type="primary" icon={<FontAwesomeIcon icon={faHeart} />}>
        primary button
      </Button>
      <div className={'spacing'}></div>
      <Button type="secondary">secondary button</Button>
      <div className={'spacing'}></div>
      <Button type="cta">Ctabutton</Button>
      <div className={'spacing'}></div>
      <Button type="primary" icon={<FontAwesomeIcon icon={faHeart} />} compact>
        primary button
      </Button>
      <div className={'spacing'}></div>
      <Button type="secondary" compact>
        secondary button
      </Button>
      <div className={'spacing'}></div>
      <Button type="cta" compact>
        Ctabutton
      </Button>
      <div className={'spacing'}></div>
      <Button type="primary" disable>
        primary button
      </Button>
      <div className={'spacing'}></div>
      <Button type="primary" disable compact>
        primary button
      </Button>
      <div className={'spacing'}></div>
    </div>
  );
}

export default App;
