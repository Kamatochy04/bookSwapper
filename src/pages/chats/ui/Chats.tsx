import { useNavigate } from "react-router-dom";
import { Container } from "../../../shared/components";
import styles from "./chat.module.scss";

const users = [
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
      <Container classname={styles.p0}>
        <div className={styles.people}>
            {users.map((item, chatId) => (
              <div
                key={chatId}
                className={styles.people__item}
                onClick={() => navigate(`/chat/:${chatId}`)}
              >
                <div className={styles.avatar}>{item.avata}</div>
                <div className={styles.inf}>
                  <p className={styles.name}>{item.name} </p>
                  <span className={styles.lastMessage}>{item.lastMessage}</span>
                </div>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default Chats;
