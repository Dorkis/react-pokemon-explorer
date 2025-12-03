export async function getPokemon(name) {

  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);

  if (!res.ok) {
    return new Error('Error with fetching pokemon')
  }
  const data = await res.json();
  return data;
}


export async function getPokemons(offset) {
  const limit = 8;
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=' + offset + '&limit=' + limit);

  if (!res.ok) {
    return new Error('Error with fetching pokemon')
  }
  const data = await res.json();
  return data;
}


export async function getTypes() {
  const limit = 10;
  const res = await fetch('https://pokeapi.co/api/v2/type/');

  if (!res.ok) {
    return new Error('Error with fetching types')
  }
  const data = await res.json();
  return data;
}