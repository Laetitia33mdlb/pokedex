const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];
function PokemonCard() {
    const pokemon = pokemonList[1];
    return (
      <div>
        <figure>
                {pokemon.imgSrc !== undefined 
                    ? <img src={pokemon.imgSrc} alt="image pokemon"/>
                    : <p>???</p>
                }    
            
            <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    );
  }
  export default PokemonCard;