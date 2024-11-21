import { Container } from "../../../shared/components";
import styles from "./bookpage.module.scss";

const BookPage = () => {
  return (
    <>
      <div className={styles.book}>
        <Container>
          <div className={styles.book__box}>
            <img src="" alt="" />
            <div className={styles.inf}>
              <div>
                <h3 className={styles.name}>1984</h3>
                <p className={styles.author}>Андрей Валюк</p>
              </div>
              <p className={styles.descr}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus sint unde, eligendi temporibus totam, dolorum
                asperiores eius quod sed autem ipsum! Ducimus quisquam fuga
                eaque illum ut nostrum voluptatum beatae! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Dicta excepturi
                exercitationem incidunt facere totam. Corrupti dolorem
                aspernatur mollitia eaque nesciunt cum dolor facilis molestias
                nostrum reiciendis? Iste voluptatibus nemo ex.
              </p>

              <ul className={styles.list}>
                <li>
                  Жанры:
                  <span>
                    Научная фантастика, Антиутопическая литература, Социальная
                    фантастика, Политическая фантастика
                  </span>
                </li>
                <li>
                  Оригинал издан: <span>8 июня 1949</span>
                </li>
                <li>
                  Язык оригинала: <span>Английский</span>
                </li>
                <li>
                  Количество страниц: <span>203</span>
                </li>
              </ul>
              <button className={styles.button}>Связаться с продавцов</button>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.similar}>
        <Container>
          <h3>Книги того-же автора</h3>
          <div className={styles.similar__container}>
            <div className={styles.book__card}>
              <img src="" alt="" />
              <div className={styles.book__card_inf}>
                <div className={styles.book__card_name}>1984</div>
                <div className={styles.book__card_author}>Андрей валюк</div>
              </div>
            </div>
            <div className={styles.book__card}>
              <img src="" alt="" />
              <div className={styles.book__card_inf}>
                <div className={styles.book__card_name}>1984</div>
                <div className={styles.book__card_author}>Андрей валюк</div>
              </div>
            </div>
            <div className={styles.book__card}>
              <img src="" alt="" />
              <div className={styles.book__card_inf}>
                <div className={styles.book__card_name}>1984</div>
                <div className={styles.book__card_author}>Андрей валюк</div>
              </div>
            </div>
            <div className={styles.book__card}>
              <img src="" alt="" />
              <div className={styles.book__card_inf}>
                <div className={styles.book__card_name}>1984</div>
                <div className={styles.book__card_author}>Андрей валюк</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BookPage;
