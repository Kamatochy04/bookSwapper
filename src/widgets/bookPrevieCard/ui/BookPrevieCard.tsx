import { FC } from "react";
import styles from "./card.module.scss";
import { useNavigate } from "react-router-dom";

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
  id,
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/${id}`)}>
      <div className={styles.img}>
        <img src={img} alt="books-img" />
      </div>

      <div className={styles.descr}>
        <div>
          <div className={styles.name}>{name}</div>
          <p className={styles.author}>{author}</p>
          <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sequi asperiores alias voluptas. Unde amet alias vero sint porro cumque impedit corporis optio, aspernatur, fuga, autem deleniti veniam! Accusantium, consequatur.</div>
          <button className={styles.button}>Написать владельцу</button>
        </div>
      </div>
    </div>
  );
};
