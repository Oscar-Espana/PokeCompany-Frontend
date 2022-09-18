import { gql } from "@apollo/client";
import clientPokeApi from "../../lib/apollo-client";
import { IPokemonListResponse } from "../../interfaces";

const MAX_POKEMONS_PER_PAGE = 30;

const GET_ALL_POKEMONS = gql`
  query GetPokemons($offset: Int!, $limit: Int!) {
    pokemon_v2_pokemon(
      limit: $limit
      offset: $offset
      where: { id: { _lt: 151 } }
    ) {
      id
      name
    }
  }
`;

export const getAllPokemons = async (page: number = 0) => {
  const { data } = await clientPokeApi.query<IPokemonListResponse>({
    query: GET_ALL_POKEMONS,
    variables: {
      offset: page * MAX_POKEMONS_PER_PAGE,
      limit: MAX_POKEMONS_PER_PAGE,
    },
  });
  return data.pokemon_v2_pokemon;
};
