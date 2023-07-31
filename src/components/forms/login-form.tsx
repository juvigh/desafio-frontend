import React, { useState } from 'react';
import { Button } from '../buttons/button';
import { FormField } from './form-field';
import './form.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleFormSubmit = () => {
    setIsButtonClicked(true);
  };

  return (
    <div className="form-fields-container">
      <div className="form-fields">
        <FormField
          title="Email"
          email
          required
          value={email}
          onChange={(value) => setEmail(value)}
          isButtonClicked={isButtonClicked}
        />
        <FormField
          title="Senha"
          type="password"
          required
          value={password}
          onChange={(value) => setPassword(value)}
          passwordMismatchError={false}
          isButtonClicked={isButtonClicked}
          placeholder="Insira sua senha"
        />
      </div>
      <Button type="primary" titleWeight="bold" expand title="Entrar" onClick={handleFormSubmit} />
    </div>
  );
};
