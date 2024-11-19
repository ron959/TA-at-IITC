import React, { useState, useEffect } from 'react';
import styles from './PokemonDialog.module.css';

const PokemonDialog = ({ isOpen, pokemonData, onClose }) => {
  const [type, setType] = useState('stats');

  useEffect(() => {
    if (!isOpen) setType('stats');
  }, [isOpen]);

  if (!isOpen || !pokemonData) return null;

  return (
    <div className={styles.dialogContainer} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.dialog}>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
        <h2>{pokemonData.name}</h2>
        <img src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} />

        <div className={styles.buttonGroup}>
          <button onClick={() => setType('stats')}>Stats</button>
          <button onClick={() => setType('abilities')}>Abilities</button>
          <button onClick={() => setType('basic')}>Basic Information</button>
        </div>

        {type === 'stats' && (
          <div>
            <h2>Stats</h2>
            <ul>
              {pokemonData.stats.map(stat => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
        )}

        {type === 'abilities' && (
          <div>
            <h2>Abilities</h2>
            <ul>
              {pokemonData.abilities.map(ability => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        )}

        {type === 'basic' && (
          <div>
            <h2>Basic Information</h2>
            <p><strong>Base Experience:</strong> {pokemonData.base_experience}</p>
            <p><strong>Weight:</strong> {pokemonData.weight} kg</p>
            <p><strong>Height:</strong> {pokemonData.height} m</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDialog;
