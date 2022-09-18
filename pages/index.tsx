import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getAllPokemons } from "../src/api/pokemon/getAllPokemons";
import { PokemonList } from "../src/components/pokemons";
import { ISmallPokemon } from "../src/interfaces";

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState<ISmallPokemon[]>([]);

  const getPokemonsData = async () => {
    const allPokemons = await getAllPokemons();
    setPokemons(allPokemons);
  };
  useEffect(() => {
    getPokemonsData();
  }, []);

  return <PokemonList pokemons={pokemons} />;
};

export default Home;
