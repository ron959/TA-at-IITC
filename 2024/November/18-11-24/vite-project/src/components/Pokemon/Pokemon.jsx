import styles from './Pokemon.module.css';

const Pokemon = ({ name, imageUrl, types, baseExperience, weight, height }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p> {types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
};

export default Pokemon;
