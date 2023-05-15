import React from 'react';
import { PrimaryButton } from './components/buttons/button-primary';
import { SecondaryButton } from './components/buttons/button-secondary';
import { CTAButton } from './components/buttons/button-cta';
import './App.css';
import { H1 } from './styles/typography/h1';
import { H2 } from './styles/typography/h2';

function App() {
  return (
    <div className="App">
      <H1> Styleguide </H1>
      <H2> Botões </H2>
      <PrimaryButton hasIcon={false} disable={false} size="default" onClick={() => alert('hello')}>
        Botao primario
      </PrimaryButton>
      <br></br>
      <PrimaryButton hasIcon={false} disable={false} size="compact">
        Botao primario
      </PrimaryButton>
      <br></br>
      <PrimaryButton hasIcon={false} disable={true} size="default">
        Botao primario
      </PrimaryButton>
      <br></br>
      <PrimaryButton hasIcon={false} disable={true} size="compact">
        Botao primario
      </PrimaryButton>
      <br></br>
      <SecondaryButton hasIcon={false} size="default">
        Botao secundario
      </SecondaryButton>
      <br></br>
      <SecondaryButton hasIcon={false} size="compact">
        Botao secundario
      </SecondaryButton>
      <br></br>
      <CTAButton hasIcon={false} size="default">
        Botao CTA
      </CTAButton>
      <br></br>
      <CTAButton hasIcon={false} size="compact">
        Botao CTA
      </CTAButton>
      <br></br>
    </div>
  );
}

export default App;
