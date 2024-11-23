import { useNavigate } from "react-router-dom";
import { Container } from "../../../shared/components";
import styles from "./chat.module.scss";

const users = [
  {
    avata: "А",
    name: "Андрей Валюк",
    lastMessage: "Привет хотел бы обменять эту книгу",
  },
  {
    avata: "Г",
    name: "Андрей Валюк",
    lastMessage: "Привет хотел бы обменять эту книгу",
  },
  {
    avata: "А",
    name: "Андрей Валюк",
    lastMessage: "Привет хотел бы обменять эту книгу",
  },
  {
    avata: "А",
    name: "Андрей Валюк",
    lastMessage: "Привет хотел бы обменять эту книгу",
  },
  {
    avata: "А",
    name: "Андрей Валюк",
    lastMessage: "Привет хотел бы обменять эту книгу",
  },
  {
    avata: "А",
    name: "Андрей Валюк",
    lastMessage: "Привет хотел бы обменять эту книгу",
  },
  {
    avata: "А",
    name: "Андрей Валюк",
    lastMessage: "Привет хотел бы обменять эту книгу",
  },
  {
    avata: "А",
    name: "Андрей Валюк",
    lastMessage: "Привет хотел бы обменять эту книгу",
  },
];

const Chats = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.chat}>
      <Container classname={styles.c}>
        <div className={styles.container}>
          <div className={styles.people}>
            {users.map((item, chatId) => (
              <div
                key={chatId}
                className={styles.people__item}
                onClick={() => navigate(`/chat/:${chatId}`)}
              >
                <div className={styles.avatar}>{item.avata}</div>
                <div className={styles.inf}>
                  <p className={styles.name}>{item.name}</p>
                  <span className={styles.lastMessage}>{item.lastMessage}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.chats}>
            <div className={styles.header}>
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Chats;
