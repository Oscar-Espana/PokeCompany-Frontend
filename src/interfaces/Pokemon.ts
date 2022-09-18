export interface IPokemonListResponse {
  pokemon_v2_pokemon: ISmallPokemon[];
}

export interface ISmallPokemon {
  name: string;
  id: number;
  img: string;
}
