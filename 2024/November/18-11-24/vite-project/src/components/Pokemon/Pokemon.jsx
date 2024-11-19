import styles from './Pokemon.module.css';

const Pokemon = ({ name, imageUrl, types, baseExperience, weight, height }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p><strong>Types:</strong> {types.map(type => type.type.name).join(', ')}</p>
      <p><strong>Base Experience:</strong> {baseExperience}</p>
      <p><strong>Weight:</strong> {weight} kg</p>
      <p><strong>Height:</strong> {height} m</p>
    </div>
  );
};

export default Pokemon;
