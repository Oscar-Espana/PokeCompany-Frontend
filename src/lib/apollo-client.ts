import { ApolloClient, InMemoryCache } from "@apollo/client";

const clientPokeApi = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

const clientPokemonCompany = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

export default clientPokeApi;
export { clientPokemonCompany };
