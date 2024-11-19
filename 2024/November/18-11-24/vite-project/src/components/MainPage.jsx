import { useState, useEffect } from 'react';
import { fetchPokemonData } from './api';
import Pokemon from './Pokemon/Pokemon';
import PokemonDialog from './PokemonDialog';
import './MainPage.css';

const MainPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPokemonData();
      setPokemons(data);
    };
    getData();
  }, []);

  return (
    <>
      <h1 className="header">Pokémon Card Viewer</h1>
      <div className="grid-container">
        {pokemons.map((pokemon) => (
          <button 
            key={pokemon.name} 
            className="grid-item"
            onClick={() => {
              setSelectedPokemon(pokemon);
              setIsOpen(true);
            }}
          >
            <Pokemon 
              name={pokemon.name} 
              imageUrl={pokemon.sprites.other['official-artwork'].front_default}
              types={pokemon.types}
              baseExperience={pokemon.base_experience}
              weight={pokemon.weight}
              height={pokemon.height}
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <PokemonDialog
          isOpen={isOpen}
          pokemonData={selectedPokemon}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default MainPage;
