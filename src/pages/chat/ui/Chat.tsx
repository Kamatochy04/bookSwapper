import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LeftOutlined, SendOutlined } from "@ant-design/icons";
import { BookIcon } from "../../../shared/icons/BookIcon";
import { ThreDotsIcon } from "../../../shared/icons/ThreDosts";

import styles from "./chat.module.scss";
import { Input } from "../../../shared/components";
import { UsersBooksChatList } from "../../../widgets/usersBooksChatLisst/ui/UsersBooksChatList";
type Message = { 
  id: number; 
  text: string; 
  sender: string;
}

const Chat = () => {
  const [messages, setMessage] = useState<Message[]>([])
  const [text, setText] = useState("")
  const [showBooks, setShowBooks] = useState(true)

  const navigate = useNavigate();

  const handleSendMessage = (sender: string) => { 
    const newMessage: Message = { id: messages.length + 1, text, sender, }; 
    setMessage([...messages, newMessage]); 
    setText("")
  };

  const changeShowBooks = () => {
    setShowBooks(false)
  }

  return (
    <>
     <UsersBooksChatList isClouse={showBooks} changeShowBooks={changeShowBooks}/>
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
          <div className={styles.header__box}>
            <div className={styles.book} onClick={() => setShowBooks(true)}>
              <BookIcon />
            </div>
            <div className={styles.dots} >
              <ThreDotsIcon />
            </div>
          </div>
        </div>
        <div className={styles.messages}>
          {messages.map(item => (<p className={styles.message__item}>{item.text}</p>))}
        </div>
        <div className={styles.footer}>
          <Input onChange={(e) => setText(e.target.value)}/>
        
          <div className={styles.send} onClick={() => handleSendMessage("sdfsdfsd")}>
            <SendOutlined />
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Chat;
