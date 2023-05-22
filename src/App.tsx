import React from 'react';
import './App.css';
import { H1 } from './styles/typography/h1';
import { Form } from './components/forms/form';
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
      <Form title="Nome"></Form>
      <Separator className="spacing"></Separator>
      <Form title="Email"></Form>
      <Separator className="spacing"></Separator>
      <Form title="Senha"></Form>
      <Separator className="spacing"></Separator>
      <Button type="primary">Cadastrar</Button>
      <Separator className="spacing"></Separator>
      <PropertyInfo title="Carro" icon={<FontAwesomeIcon icon={faCar} />}></PropertyInfo>
      <Separator className="spacing"></Separator>
    </div>
  );
}

export default App;
