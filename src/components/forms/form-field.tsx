import React, { useState } from 'react';
import { formFieldStyles } from './form-field-style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Separator } from '../separator/separator';
import './form-field.css';

interface FormFieldStyles {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  title: string;
}

export const FormField = ({ flexDirection, title }: FormFieldStyles) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setIsFilled(inputValue !== '');
    setHasError(inputValue === '');
  };

  const formFieldStyle = {
    ...formFieldStyles,
    flexDirection: flexDirection || 'column',
    ...(isFocused && formFieldStyles.focused),
    ...(isFilled && formFieldStyles.filled),
    ...(hasError && formFieldStyles.error),
  };

  const inputStyles = {
    ...formFieldStyle.inputStyles,
  };

  const labelStyles = {
    ...inputStyles,
    ...(hasError && inputStyles.error),
  };

  const captionStyles = {
    ...inputStyles,
    ...inputStyles.error,
    display: hasError ? 'flex' : 'none',
  };

  return (
    <div>
      <div style={formFieldStyle}>
        <label style={labelStyles}>{title}</label>
        <input
          style={inputStyles}
          placeholder={`Enter your ${title}`}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className={'captionMsg'} style={captionStyles}>
        <FontAwesomeIcon icon={faExclamationTriangle} />
        <span>Invalid {title}</span>
      </div>
    </div>
  );
};
