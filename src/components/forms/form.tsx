import React, { useState } from 'react';
import { Body2 } from '../../styles/typography/body-2';
import { H1 } from '../../styles/typography/h1';
import { Button } from '../buttons/button';
import { FormField } from './form-field';
import './form.css';

interface FormProps {
  isLogin?: boolean;
  centered?: boolean;
}

export const Form = ({ isLogin, centered }: FormProps) => {
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
    if (!isLogin && password === confirmPassword) {
      setPasswordError(false);
      setConfirmPasswordError(false);
    } else {
      setPasswordError(true);
      setConfirmPasswordError(true);
    }
  };

  const formContainerClasses = `form-container ${centered ? 'form-container-centered' : ''}`;

  return (
    <div className={formContainerClasses}>
      <div className="form-title">
        <H1 size="xxxLarge" color="NeutralXdark">
          {isLogin ? 'Acesse sua conta' : 'Cadastre-se'}
        </H1>
        {isLogin ? (
          <Body2 color="NeutralMedium" weight="regular">
            Para utilizar os serviços da nossa plataforma, você precisa entrar uma conta!
          </Body2>
        ) : (
          <Body2 color="NeutralMedium" weight="regular">
            Insira alguns dados sobre seu perfil.
          </Body2>
        )}
      </div>
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
          {!isLogin && (
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
          )}
          <FormField
            title="Senha"
            type="password"
            required
            value={password}
            onChange={(value) => setPassword(value)}
            passwordMismatchError={isLogin ? false : passwordError}
            isButtonClicked={isButtonClicked}
            placeholder="Insira uma senha"
          />
          {!isLogin && (
            <FormField
              title="Confirmar senha"
              type="password"
              required
              value={confirmPassword}
              onChange={(value) => setConfirmPassword(value)}
              isButtonClicked={isButtonClicked}
              passwordMismatchError={isLogin ? false : confirmPasswordError}
              placeholder="Insira sua senha novamente"
            />
          )}
        </div>
        <Button
          type="primary"
          titleWeight="bold"
          expand
          title={isLogin ? 'Entrar' : 'Cadastrar'}
          onClick={handleFormSubmit}
        />
      </div>
    </div>
  );
};
