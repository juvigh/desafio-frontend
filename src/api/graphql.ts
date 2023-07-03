import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://taqtile-challenge-api-sjz6wnaoia-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});
