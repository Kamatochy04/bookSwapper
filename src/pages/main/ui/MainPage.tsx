import { Container } from "../../../shared/components";
import { BookPrevieCard } from "../../../widgets";

import img from "../../../shared/assets/book_1.jpg";
import img_2 from "../../../shared/assets/book_2.jpg";
import img_3 from "../../../shared/assets/book_3.jpg";

import styles from "./mainPage.module.scss";

const books = [
  { name: "Скажи жизни да", author: "Андрей Валюк", img: img, id: 1 },
  { name: "Сто лет одиночества", author: "Андрей Валюк", img: img_2, id: 2 },
  { name: "Мы", author: "Андрей Валюк", img: img_3, id: 3 },
  { name: "Скажи жизни да", author: "Андрей Валюк", img: img, id: 4 },
  { name: "Сто лет одиночества", author: "Андрей Валюк", img: img_2, id: 5 },
  { name: "Мы", author: "Андрей Валюк", img: img_3, id: 6 },
  { name: "Скажи жизни да", author: "Андрей Валюк", img: img, id: 7 },
  { name: "Сто лет одиночества", author: "Андрей Валюк", img: img_2, id: 8 },
  { name: "Мы", author: "Андрей Валюк", img: img_3, id: 9 },
];

const MainPage = () => {
  return (
    <>
      <div className={styles.books}>
        <Container>
          <div className={styles.books__container}>
            {books.map((item) => {
              return <BookPrevieCard {...item} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainPage;
