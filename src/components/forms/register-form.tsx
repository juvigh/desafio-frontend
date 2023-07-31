import React, { useState } from 'react';
import { Button } from '../buttons/button';
import { FormField } from './form-field';
import './form.css';

export const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleFormSubmit = () => {
    setIsButtonClicked(true);

    if (password === confirmPassword) {
      setPasswordError(false);
      setConfirmPasswordError(false);
    } else {
      setPasswordError(true);
      setConfirmPasswordError(true);
    }
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
        <div className="fields">
          <div style={{ flex: 1 }}>
            <FormField
              title="Nome"
              required
              value={firstName}
              isButtonClicked={isButtonClicked}
              onChange={(value) => setFirstName(value)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <FormField
              title="Sobrenome"
              required
              value={lastName}
              isButtonClicked={isButtonClicked}
              onChange={(value) => setLastName(value)}
            />
          </div>
        </div>
        <FormField
          title="Senha"
          type="password"
          required
          value={password}
          onChange={(value) => setPassword(value)}
          passwordMismatchError={passwordError}
          isButtonClicked={isButtonClicked}
          placeholder="Insira uma senha"
        />
        <FormField
          title="Confirmar senha"
          type="password"
          required
          value={confirmPassword}
          onChange={(value) => setConfirmPassword(value)}
          isButtonClicked={isButtonClicked}
          passwordMismatchError={confirmPasswordError}
          placeholder="Insira sua senha novamente"
        />
      </div>
      <Button type="primary" titleWeight="bold" expand title="Cadastrar" onClick={handleFormSubmit} />
    </div>
  );
};
