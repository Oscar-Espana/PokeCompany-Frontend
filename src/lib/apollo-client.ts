import { ApolloClient, InMemoryCache } from "@apollo/client";

const clientPokeApi = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

export default clientPokeApi;
