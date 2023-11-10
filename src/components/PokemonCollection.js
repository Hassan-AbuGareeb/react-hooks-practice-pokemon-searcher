import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonList, searchValue }) {
  const searchedPokemons = pokemonList.filter((pokemon) => {
    return pokemon.name
      .toLowerCase()
      .trim()
      .includes(searchValue.toLowerCase().trim());
  });
  const pokemonItems = searchedPokemons.map((pokemon) => {
    return <PokemonCard key={pokemon.id} pokemonInfo={pokemon} />;
  });

  return <Card.Group itemsPerRow={6}>{pokemonItems}</Card.Group>;
}

export default PokemonCollection;
