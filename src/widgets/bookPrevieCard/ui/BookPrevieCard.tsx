import styles from "./card.module.scss";

export const BookPrevieCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}></div>

      <div className={styles.descr}>
        <div className={styles.name}>1984</div>
        <p className={styles.author}>Андрей Валюк</p>
      </div>
    </div>
  );
};
