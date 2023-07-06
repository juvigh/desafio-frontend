import React from 'react';
import { ApolloError } from '@apollo/client';

interface LoadingErrorProps {
  loading: boolean;
  error?: ApolloError;
  emptyMessage: string;
  dataLength: number;
}

export const LoadingError = ({ loading, error, emptyMessage, dataLength }: LoadingErrorProps) => (
  <>
    {loading ? (
      <div>Carregando...</div>
    ) : error ? (
      <div>Ocorreu um erro ao carregar.</div>
    ) : dataLength === 0 ? (
      <div>{emptyMessage}</div>
    ) : null}
  </>
);
