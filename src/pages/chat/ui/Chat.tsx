import { LeftOutlined, SendOutlined } from "@ant-design/icons";
import styles from "./chat.module.scss";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.chat}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.arrow} onClick={() => navigate(-1)}>
            <LeftOutlined />
          </div>
          <div className={styles.user}>
            <div className={styles.avatart}>А</div>
            <p className={styles.name}>Андрей Валюк</p>
          </div>
        </div>
        <div className={styles.messages}></div>
        <div className={styles.footer}>
          <input
            type="text"
            placeholder="Сообщение"
            className={styles.footer__input}
          />
          <div className={styles.send}>
            <SendOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
