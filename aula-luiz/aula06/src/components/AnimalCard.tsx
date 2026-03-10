import styles from './AnimalCard.module.css';

type AnimalProps = {
  name: string;
  species: string;
  isDangerous: boolean;
};

export function AnimalCard({ name, species, isDangerous }: AnimalProps) {
  return (
      <div className={styles.card}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.species}>{species}</p>

        {isDangerous ? (
          <p className={styles.perigo}>Status: Alerta Máximo 🐅</p>
        ) : (
          <p className={styles.seguro}>Status: Tranquilo e Amigável 🦦</p>
        )}
      </div>
  );
}