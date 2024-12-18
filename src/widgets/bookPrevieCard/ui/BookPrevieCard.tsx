import { FC, useState } from "react";
import { Button } from "../../../shared/components";
import { HeartIcon } from "../../../shared/icons/HeartIcon";

import styles from "./card.module.scss";

type BookPrevieCardProps = {
  name: string;
  author: string;
  img: string;
  id: number;
};

export const BookPrevieCard: FC<BookPrevieCardProps> = ({
  name,
  author,
  img,
  // id,
}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt="books-img" />
        <div className={`${styles.icon} ${isFavorite ? styles.icon_active : ""}`} onClick={() => setIsFavorite(prev => !prev)}>
          <HeartIcon />
        </div>
      </div>

      <div className={styles.descr}>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.author}>{author}</p>
        </div>
        <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sequi asperiores alias voluptas. Unde amet alias vero sint porro cumque impedit corporis optio, aspernatur, fuga, autem deleniti veniam! Accusantium, consequatur.</div>
        <p className={styles.genre}>Жанр: психология</p>
        <Button className={styles.button}>Написать владельцу</Button>
      </div>
    </div>
  );
};
