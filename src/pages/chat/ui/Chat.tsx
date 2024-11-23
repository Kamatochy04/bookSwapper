import styles from "./chat.module.scss";

const Chat = () => {
  return (
    <div className={styles.chat}>
      {/* <Container> */}
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.avatart}>А</div>
          <p className={styles.name}>Андрей Валюк</p>
        </div>
        <div className={styles.messages}></div>
        <div className={styles.footer}>
          <input
            type="text"
            placeholder="Сообщение"
            className={styles.footer__input}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
