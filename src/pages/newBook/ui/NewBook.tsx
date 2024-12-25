import { Button, Container, Input } from "../../../shared/components";
import styles from "./newBook.module.scss";

const NewBook = () => {
  // const [imgs, setImgs]

  // const addImg = () => {

  // }

  return (
    <div className={styles.book}>
      <Container>
        <Input variant="onlyBorder" label="Название книги" />
        <Input variant="onlyBorder" label="Автор" />
        <Input variant="onlyBorder" label="Язык" />
        <Input variant="onlyBorder" label="Название книги" />
        <div className={styles.book__box}>
          <div className={styles.book__active}>
            <div className={styles.sercle}></div>
          </div>
        </div>
        <Button className={styles.button}>Создать объявление</Button>
      </Container>
    </div>
  );
};

export default NewBook;
