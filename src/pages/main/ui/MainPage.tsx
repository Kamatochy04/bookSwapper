// import { CustomerServiceOutlined } from "@ant-design/icons";

import { Container,  SearchInput } from "../../../shared/components";
// import { BookPrevieCard } from "../../../widgets";

// import img from "../../../shared/assets/book_1.jpg";
import styles from "./mainPage.module.scss";


const MainPage = () => {
  return (
    <>
      <div className={styles.books}>
        <Container>
          <SearchInput />

          <div className={styles.line}></div>

          <h2 className={styles.title}>Список всех книг</h2>

          <p className={styles.sub_title}>Жанры книг</p>
       
          <div className={styles.genre}>
            <div className={styles.genre__item}>Психология</div>
            <div className={styles.genre__item}>Классическая литература</div>
            <div className={styles.genre__item}>Детская литература </div>
            <div className={styles.genre__item}>Фентези</div>
            <div className={`${styles.genre__item} ${styles.genre_active}`}>Рассказы</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainPage;
