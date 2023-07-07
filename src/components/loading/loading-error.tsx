import React from 'react';

interface LoadingErrorProps {
  loading: boolean;
  error: boolean;
  emptyMessage: string;
  data: boolean;
  children: React.ReactNode;
}

export const LoadingError = ({ loading, error, emptyMessage, data, children }: LoadingErrorProps) => (
  <>
    {loading ? (
      <div>Carregando...</div>
    ) : error ? (
      <div>Ocorreu um erro ao carregar.</div>
    ) : !data ? (
      <div>{emptyMessage}</div>
    ) : (
      children
    )}
  </>
);
