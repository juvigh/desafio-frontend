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
      <Button type="primary">Cadastrar</Button>
      <PropertyInfo title="Carro" icon={<FontAwesomeIcon icon={faCar} />}></PropertyInfo>
      <FormField title="Nome"></FormField>
      <Separator vertical size={20} />
      <FormField title="Email"></FormField>
      <Separator vertical size={20} />
      <FormField title="Senha"></FormField>
      <Separator vertical size={20} />
      <Separator vertical size={20} />
    </div>
  );
}

export default App;
