import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { getAllPokemons } from "../src/api/pokemon/getAllPokemons";
import { PokemonList } from "../src/components/pokemons";
import { ISmallPokemon } from "../src/interfaces";
import { DefaultLayout } from "../src/layouts";

const Home: NextPage = () => {
  const [pokemons, setPokemons] = useState<ISmallPokemon[]>([]);

  const getPokemonsData = async () => {
    const allPokemons = await getAllPokemons();
    setPokemons(allPokemons);
  };
  useEffect(() => {
    getPokemonsData();
  }, []);

  return (
    <DefaultLayout
      title="Home - Company Pokemon"
      pageDescription="Discover everything that PokeCompany offers for you to become a pokemon master"
    >
      <PokemonList pokemons={pokemons} />;
    </DefaultLayout>
  );
};

export default Home;
