import { Container } from "../../../shared/components";

import book from "./bo.png";

import styles from "./bookpage.module.scss";

const BookPage = () => {
  return (
    <>
      <div className={styles.book}>
        <Container>
          <div className={styles.book__box}>
            <div className={styles.img_bg}>
              <div className={styles.img_main}></div>
            </div>
            <div className={styles.descr}>
              <p className={styles.author}>А. П. Чехов</p>
              <p className={styles.name}>Каштанка</p>
              <p className={styles.genre}>Жанр: рассказ</p>
            </div>

            <div className={styles.inline}>
              <div className={styles.man}>
                <div className={styles.avatar}>A</div>

                <div className={styles.man__inf}>
                  <p className={styles.ovner}>Владелец</p>
                  <p className={styles.man__name}>Адамина Дарья</p>
                </div>
              </div>
            </div>

            <div className={styles.count__text}>Количество страниц: 125</div>

            <p className={styles.main_descr}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur in accusantium ratione aliquam? Fugiat sint officiis,
              voluptate quis cumque ea quibusdam dolores assumenda natus
              delectus numquam atque accusantium, expedita et.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BookPage;
