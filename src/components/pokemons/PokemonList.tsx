import { Grid } from "@mui/material";
import { FC } from "react";
import { ISmallPokemon } from "../../interfaces";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: ISmallPokemon[];
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <Grid container spacing={4}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </Grid>
  );
};
