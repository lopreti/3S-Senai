import styles from "./Heading.module.css";

function Heading() {
  const classes = `${styles.heading} ${styles.cyan}`;

  return <h1 className={classes}>Olá Mundo 🌍</h1>;
}

export default Heading;