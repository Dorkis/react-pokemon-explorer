import useFetch from "../../hooks/useFetch";
import { getPokemons } from "../../utils/pokemon";
import PokemonCard from "../PokemonCard/PokemonCard";
import classes from "./style.module.css";

export default function Pokemons() {

  const { isFetching, error, fetchedData } = useFetch(getPokemons, 'GET', 0);


  return (
    <div className={classes.cards}>
      {fetchedData && fetchedData.results && fetchedData?.results.map(pokemon => <PokemonCard pokemonName={pokemon.name} />)}
    </div>
  );
}