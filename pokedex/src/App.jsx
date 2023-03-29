import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];

  const handlePrevious = (event) => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleNext = (event) => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div className="App">
      <PokemonCard pokemon={pokemon} />
      {pokemonIndex > 0 ? (
        <button onClick={handlePrevious}>Previous</button>
      ) : (
        <span></span>
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default App;
