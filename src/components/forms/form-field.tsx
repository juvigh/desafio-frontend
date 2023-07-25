import React, { useState, useMemo } from 'react';
import { formFieldStyles } from './form-field-style';
import './form-field.css';
import { validateEmail } from '../../utils/regex';
import { ErrorMessage } from './error-message';

interface FormFieldStyles {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  title: string;
  required?: boolean;
  email?: boolean;
  type?: string;
  value: string;
  onChange: (newValue: string) => void;
  passwordMismatchError?: boolean;
  isButtonClicked: boolean;
  placeholder?: string;
}

export const FormField = ({
  flexDirection,
  title,
  required,
  email,
  type,
  value,
  onChange,
  passwordMismatchError,
  isButtonClicked,
  placeholder,
}: FormFieldStyles) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const hasError = (required && !value.trim() && isButtonClicked) || (email && value && !validateEmail(value));

  const formFieldStyle = useMemo(
    () => ({
      ...formFieldStyles,
      flexDirection: flexDirection || 'column',
      ...(isFocused && formFieldStyles.focused),
      ...(value && formFieldStyles.filled),
      ...(hasError || passwordMismatchError ? formFieldStyles.error : {}),
    }),
    [formFieldStyles, flexDirection, isFocused, value, hasError, passwordMismatchError],
  );

  const inputStyles = useMemo(
    () => ({
      ...formFieldStyle.inputStyles,
    }),
    [formFieldStyle],
  );

  const labelStyles = useMemo(
    () => ({
      ...inputStyles,
      ...(hasError || passwordMismatchError ? inputStyles.error : {}),
    }),
    [inputStyles, hasError, passwordMismatchError],
  );

  const captionStyles = useMemo(
    () => ({
      ...inputStyles,
      ...inputStyles.error,
      display: (isFocused || hasError || passwordMismatchError) && (required || email) ? 'flex' : 'none',
    }),
    [inputStyles, hasError, required, email, passwordMismatchError],
  );

  return (
    <div>
      <div style={formFieldStyle}>
        <label style={labelStyles}>{title}</label>
        <input
          style={inputStyles}
          placeholder={placeholder ? placeholder : `Insira um ${title}`}
          type={type || 'text'}
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className={'captionMsg'} style={captionStyles}>
        {hasError && required && !value.trim() && <ErrorMessage message="Este campo é obrigatório" />}
        {hasError && email && value && !validateEmail(value) && <ErrorMessage message="Seu Email é invalido" />}
        {!hasError && passwordMismatchError && <ErrorMessage message="As senhas não coincidem" />}
      </div>
    </div>
  );
};
