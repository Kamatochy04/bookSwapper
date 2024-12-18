import { useState } from "react";

import { BookPrevieCard } from "../../../widgets";
import { GenreItemsArr } from "../assets/genreItems";
import { PlusIcon } from "../../../shared/icons/FooterIcon";
import { Container,  SearchInput } from "../../../shared/components";

import img from "../../../shared/assets/book_1.jpg";
import img_2 from "./book_2.jpg"

import styles from "./mainPage.module.scss";

const MainPage = () => {
  const [genre, setGenre] = useState(GenreItemsArr)


  const toActive = (idItem:number) => {
    setGenre(prev => 
      prev.map((item) => 
        item.id === idItem ?{...item, isActive: !item.isActive} : item
      )    
    )
  }

  const deleteGenre = (idItem: number) => {
    setGenre(prev => 
      prev.filter((item) => 
       item.id !== idItem
      )    
    )
  }

  return (
    <>
      <div className={styles.books}>
        <Container>
          <SearchInput />

          <div className={styles.line}></div>

          <h2 className={styles.title}>Список всех книг</h2>

          <p className={styles.sub_title}>Жанры книг</p>
       
          <div className={styles.genre}>
            {genre.map((item) =>(
              <div className={`${styles.genre__item} ${item.isActive ? styles.genre_active : "" }`} key={item.id} onClick={() =>toActive(item.id)}>
                {item.text}
                <div className={styles.clouse__icon} onClick={() => deleteGenre(item.id)}><PlusIcon /></div>
              </div>
            ))}
          </div>

          <div className={styles.list}>
            <BookPrevieCard name={"Скажи жизни да"} author={"В.Э. Франклин"} img={img} id={0} />
            <BookPrevieCard name={"Война и мир"} author={"А.С. Пушкин"} img={img_2} id={0} />
            <BookPrevieCard name={"Война и мир"} author={"А.С. Пушкин"} img={img_2} id={0} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainPage;
