import { Container, Input } from "../../../shared/components";
// import { BookPrevieCard } from "../../../widgets";

// import img from "../../../shared/assets/book_1.jpg";
// import img_2 from "../../../shared/assets/book_2.jpg";
// import img_3 from "../../../shared/assets/book_3.jpg";

import styles from "./mainPage.module.scss";
import { CustomerServiceOutlined, SearchOutlined } from "@ant-design/icons";

// const books = [
//   { name: "Скажи жизни да", author: "Андрей Валюк", img: img, id: 1 },
//   { name: "Сто лет одиночества", author: "Андрей Валюк", img: img_2, id: 2 },
//   { name: "Мы", author: "Андрей Валюк", img: img_3, id: 3 },
// ];

const MainPage = () => {
  return (
    <>
      <div className={styles.books}>
        <Container>
          <div className={styles.input}>
            <Input placeholder="Поиск книги ..."/>
            <div className={styles.icon}>
              <SearchOutlined />
            </div>
          </div>

          <div className={styles.genre}>
            <h3 className={styles.genre__title}>Жанры</h3>
            <div className={styles.genre__container}>
              <div className={styles.genre__icon}>
                <CustomerServiceOutlined />
                <p className={styles.genre__icon_text}>Жанр</p>
              </div>
              <div className={styles.genre__icon}>
                <CustomerServiceOutlined />
                <p className={styles.genre__icon_text}>Жанр</p>
              </div>
              <div className={styles.genre__icon}>
                <CustomerServiceOutlined />
                <p className={styles.genre__icon_text}>Жанр</p>
              </div>
              <div className={styles.genre__icon}>
                <CustomerServiceOutlined />
                <p className={styles.genre__icon_text}>Жанр</p>
              </div>
              <div className={styles.genre__icon}>
                <CustomerServiceOutlined />
                <p className={styles.genre__icon_text}>Жанр</p>
              </div>
              <div className={styles.genre__icon}>
                <CustomerServiceOutlined />
                <p className={styles.genre__icon_text}>Жанр</p>
              </div>
              <div className={styles.genre__icon}>
                <CustomerServiceOutlined />
                <p className={styles.genre__icon_text}>Жанр</p>
              </div>
            </div>
          </div>
        
          <div className={styles.list}>
            
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainPage;
