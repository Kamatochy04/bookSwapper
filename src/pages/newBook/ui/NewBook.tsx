import { Container, Input } from "../../../shared/components";
import styles from "./newBook.module.scss";

const NewBook = () => {
  // const [imgs, setImgs]

  // const addImg = () => {

  // }

  return (
    <div className={styles.book}>
      <Container>
        <Input label="Название книги" />
        <Input label="Автор" />
        <Input label="Язык" />
        <Input label="ти" />
        <Input label="Название книги" />
        <div className={styles.book__box}>
          <div className={styles.book__active}>
            <div className={styles.sercle}></div>
          </div>
          <div className={styles.book__add}></div>
          <div className={styles.book__add}></div>
          <div className={styles.book__add}></div>
        </div>
      </Container>
    </div>
  );
};

export default NewBook;
