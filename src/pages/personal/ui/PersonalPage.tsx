import { Container } from "../../../shared/components";
import styles from "./personal.module.scss";
import { CardItem } from "../../../widgets";

const PersonalPage = () => {
  return (
    <div className={styles.personal}>
      <Container>
        <div className={styles.personal__container}>
          <div className={styles.header}>
            <h2 className={styles.title}>Все мои книги</h2>
            <button className={styles.button}>Опубликовать новую книгу </button>
          </div>

          <div className={styles.list}>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PersonalPage;
