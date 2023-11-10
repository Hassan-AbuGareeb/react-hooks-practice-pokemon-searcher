import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: "",
    },
  });

  function handleSubmit(event) {
    event.preventDefault();
    onAddPokemon((prev) => [...prev, pokemonData]);
    fetch("http://localhost:3001/pokemon/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(pokemonData),
    });
  }

  function handleInputChange(event) {
    const key = event.target.name;
    const value = event.target.value;
    setPokemonData({ ...pokemonData, [key]: value });
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleInputChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
