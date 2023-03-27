
function PokemonCard(props) {
    
    return (
      <div>
        <figure>
                {props.pokemon.imgSrc !== undefined 
                    ? <img src={props.pokemon.imgSrc} alt="image pokemon"/>
                    : <p>???</p>
                }    
            
            <figcaption>{props.pokemon.name}</figcaption>
        </figure>
      </div>
    );
  }
  export default PokemonCard;