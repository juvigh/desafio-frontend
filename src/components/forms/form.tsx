import React, { useState } from 'react';
import { formStyles } from './forms-style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Separator } from '../separator/separator';
import './form.css';

interface FormStyles {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  title: string;
}

export const Form = ({ flexDirection, title }: FormStyles) => {
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

  const formStyle = {
    ...formStyles,
    flexDirection: flexDirection || 'column',
    ...(isFocused && formStyles.focused),
    ...(isFilled && formStyles.filled),
    ...(hasError && formStyles.error),
  };

  const inputStyles = {
    ...formStyle.inputStyles,
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
      <form style={formStyle} onFocus={handleFocus} onBlur={handleBlur}>
        <label style={labelStyles}>{title}</label>
        <input style={inputStyles} placeholder={`Enter your ${title}`} onChange={handleInputChange} />
      </form>
      <span className={'captionMsg'} style={captionStyles}>
        <Separator className="spacing-right">
          <FontAwesomeIcon icon={faExclamationTriangle} />
        </Separator>
        <span>Invalid {title}</span>
      </span>
    </div>
  );
};
