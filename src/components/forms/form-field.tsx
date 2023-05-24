import React, { useState, useMemo } from 'react';
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

  const formFieldStyle = useMemo(
    () => ({
      ...formFieldStyles,
      flexDirection: flexDirection || 'column',
      ...(isFocused && formFieldStyles.focused),
      ...(isFilled && formFieldStyles.filled),
      ...(hasError && formFieldStyles.error),
    }),
    [formFieldStyles, flexDirection, isFocused, isFilled, hasError],
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
      ...(hasError && inputStyles.error),
    }),
    [inputStyles, hasError],
  );

  const captionStyles = useMemo(
    () => ({
      ...inputStyles,
      ...inputStyles.error,
      display: hasError ? 'flex' : 'none',
    }),
    [inputStyles, hasError],
  );

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
        <Separator horizontal size={4} />
        <span>Invalid {title}</span>
      </div>
    </div>
  );
};
