import { Container } from "../../../shared/components";
import styles from "./chat.module.scss";

const Chats = () => {
  return (
    <div className={styles.chat}>
      <Container classname={styles.c}>
        <div className={styles.container}>
          <div className={styles.people}>
            <div className={styles.people__item}>
              <div className={styles.avatar}>А</div>
              <div className={styles.inf}>
                <p className={styles.name}>Андрей Валюк</p>
                <span className={styles.lastMessage}>
                  Привет хотел бы обменять эту книгу
                </span>
              </div>
            </div>
            <div className={styles.people__item}>
              <div className={styles.avatar}>А</div>
              <div className={styles.inf}>
                <p className={styles.name}>Андрей Валюк</p>
                <span className={styles.lastMessage}>
                  Привет хотел бы обменять эту книгу
                </span>
              </div>
            </div>
            <div className={styles.people__item}>
              <div className={styles.avatar}>Д</div>
              <div className={styles.inf}>
                <p className={styles.name}>Даник Капуста</p>
                <span className={styles.lastMessage}>
                  Очень интересное предложение
                </span>
              </div>
            </div>
            <div className={styles.people__item}>
              <div className={styles.avatar}>А</div>
              <div className={styles.inf}>
                <p className={styles.name}>Андрей Валюк</p>
                <span className={styles.lastMessage}>
                  Привет хотел бы обменять эту книгу
                </span>
              </div>
            </div>
          </div>

          <div className={styles.chats}>
            <div className={styles.header}>
              <div className={styles.people__item}>
                <div className={styles.avatar}>А</div>
                <div className={styles.inf}>
                  <p className={styles.name}>Андрей Валюк</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Chats;
