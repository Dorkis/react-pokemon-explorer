import useFetch from "../../hooks/useFetch";
import { getPokemon } from "../../utils/pokemon";
import classes from "./style.module.css";

export default function PokemonCard({ pokemonName }) {

  const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
  };

  const { isFetching, error, fetchedData } = useFetch(getPokemon, 'GET', pokemonName);

  const styleColor = [];
  if (fetchedData.types) {
    fetchedData.types.map(color => {
      styleColor.push(typeColors[color.type.name]);
    })
  }

  return (
    <div className={classes.card} style={{ background: `linear-gradient(90deg, ${styleColor.join(', ')})` }} key={pokemonName}>
      <h2>{pokemonName}</h2>
      <p>#{fetchedData.id}</p>
      {fetchedData.types &&
        <div className={classes.types}>
          {fetchedData.types.map(color => {
            return <span>{color.type.name}</span>
          })}
        </div>
      }
    </div>
  )
}