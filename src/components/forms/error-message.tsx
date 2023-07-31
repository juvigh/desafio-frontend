import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Separator } from '../separator/separator';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <>
      <FontAwesomeIcon icon={faExclamationTriangle} />
      <Separator horizontal size={4} />
      <span>{message}</span>
    </>
  );
};
