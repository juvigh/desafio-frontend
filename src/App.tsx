import React from 'react';
import './App.css';
import { H1 } from './styles/typography/h1';
import { FormField } from './components/forms/form-field';
import { Separator } from './components/separator/separator';
import { Button } from './components/buttons/button';
import PropertyInfo from './components/property-info/propertyInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
// import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <H1> Styleguide </H1>
      <Separator className="spacing"></Separator>
      <Separator className="spacing"></Separator>
      <Separator className="spacing"></Separator>
      <Button type="primary">Cadastrar</Button>
      <Separator className="spacing"></Separator>
      <PropertyInfo title="Carro" icon={<FontAwesomeIcon icon={faCar} />}></PropertyInfo>
      <Separator className="spacing"></Separator>
      <FormField title="Nome"></FormField>
      <FormField title="Email"></FormField>
      <FormField title="Senha"></FormField>
    </div>
  );
}

export default App;
