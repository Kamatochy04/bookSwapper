import { LeftOutlined, SendOutlined } from "@ant-design/icons";
import styles from "./chat.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Message = { 
  id: number; 
  text: string; 
  sender: string;
}

const Chat = () => {
  const [messages, setMessage] = useState<Message[]>([])
  const [text, setText] = useState("")
  const navigate = useNavigate();

  const handleSendMessage = (sender: string) => { 
    const newMessage: Message = { id: messages.length + 1, text, sender, }; 
    setMessage([...messages, newMessage]); 
    setText("")
  };

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
        <div className={styles.messages}>
          {messages.map(item => (<p className={styles.message__item}>{item.text}</p>))}
        </div>
        <div className={styles.footer}>
          <input
            type="text"
            placeholder="Сообщение"
            className={styles.footer__input}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className={styles.send} onClick={() => handleSendMessage("sdfsdfsd")}>
            <SendOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
