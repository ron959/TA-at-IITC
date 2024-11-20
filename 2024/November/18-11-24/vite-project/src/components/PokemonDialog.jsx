import React, { useState, useEffect } from 'react';
import styles from './PokemonDialog.module.css';
import typeBackgrounds from './utils/typeBackgrounds.jsx'

const PokemonDialog = ({ isOpen, pokemonData, onClose }) => {
  const [overview, setoverview] = useState('stats');
  const [backgroundImage, setbackgroundImage] = useState('normal');


  useEffect(() => {
    if (!isOpen) setoverview('stats'); // Reset to 'stats' when dialog closes    
  }, [isOpen]);

  const matchingType = pokemonData.types.find((item) => typeBackgrounds[item.type.name]);
  // console.log(typeBackgrounds[matchingType.type.name]);
  
  
  useEffect(() => {
    // Check if firstType exists in typeBackgrounds
    if (matchingType) {
      setbackgroundImage(typeBackgrounds[matchingType.type.name]); // Set the matching background
    }
  }, [backgroundImage]); 
  console.log(backgroundImage); // Log the background URL


  if (!isOpen || !pokemonData) return null;

  return (
    <div className={styles.dialogContainer} 
    
      style={{ backgroundImage: `url(${backgroundImage})`}}
    >
      <div 
      className={styles.dialogHeader}
      >
        <button onClick={onClose} className={styles.closeButton}>🔙</button>
        <h2><strong>{pokemonData.name}</strong></h2>
        <span id= 'types'> {pokemonData.types.map(type => type.type.name).join(', ')}</span>
      </div>
      <img src={pokemonData.sprites.other['official-artwork'].front_default} alt={pokemonData.name} />
      <div
      className={styles.dialogBody}
      >
        <div className={styles.buttonGroup}>
          <button onClick={() => setoverview('stats')}>Stats</button>
          <button onClick={() => setoverview('abilities')}>Abilities</button>
          <button onClick={() => setoverview('basic')}>Basic Information</button>
        </div>

        {overview === 'stats' && (
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

        {overview === 'abilities' && (
          <div>
            <h2>Abilities</h2>
            <ul>
              {pokemonData.abilities.map(ability => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        )}

        {overview === 'basic' && (
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
