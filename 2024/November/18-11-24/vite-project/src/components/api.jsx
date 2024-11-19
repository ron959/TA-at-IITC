import axios from 'axios';

export const fetchPokemonData = async () => {
  try {
    const { data: { results } } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
    const detailedRequests = results.map(pokemon => axios.get(pokemon.url));
    const detailedResponses = await Promise.all(detailedRequests);
    return detailedResponses.map(response => response.data);
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return [];
  }
};
