import { DeleteFilled, EditFilled, PauseCircleFilled } from "@ant-design/icons";
import styles from "./card.module.scss";

export const CardItem = () => {
  return (
    <div className={styles.card__list}>
      <div className={styles.card}>
        <div className={styles.img}></div>

        <div className={styles.card__box}>
          <div className={styles.card__header}>
            <h3 className={styles.title}>
              Название книи <span>Лев Николаевич Толстой</span>
            </h3>
            <div className={styles.card__wrapper}>
              <button>
                <DeleteFilled />
              </button>
              <button>
                <EditFilled />
              </button>
              <button>
                <PauseCircleFilled />
              </button>
            </div>
          </div>
          <div className={styles.footer}>
            <ul className={styles.footer__list}>
              <li>
                Название: <span>ключь</span>
              </li>
              <li>
                Название: <span>ключь</span>
              </li>
              <li>
                Название: <span>ключь</span>
              </li>
              <li>
                Название: <span>ключь</span>
              </li>
              <li>
                Название: <span>ключь</span>
              </li>
            </ul>

            <p className={styles.descr}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae earum quisquam cupiditate consectetur provident quis
              vero. Officiis, velit aperiam reiciendis laboriosam distinctio
              vitae molestias? Ex tenetur exercitationem consectetur ipsam
              quasi.
            </p>
            <div className={styles.buttpns}>
              <button className={styles.button_one}>Книги тогоже автора</button>
              <button className={styles.button_sec}>Книги тогоже автора</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
