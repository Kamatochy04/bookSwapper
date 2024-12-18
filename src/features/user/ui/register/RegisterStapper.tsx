import { useNavigate } from "react-router-dom";

import { LeftArrowIcon } from "../../../../shared/icons/LeftIcon";

import { Button, Container, Input } from "../../../../shared/components";
import { GoogleIcon } from "../../../../shared/icons/GoogleIcon";
import { EmailIcon } from "../../../../shared/icons/EmailIcon";

import styles from "./register.module.scss"

export const RegisterStapper = () => {
  const navigate = useNavigate()


  return (
    <div className={styles.box}>
      <Container>
        <div className={styles.header} onClick={() => navigate(-1)}>
          <LeftArrowIcon />
        </div>
        <h1 className={styles.title}>Создайте свой <br /> аккаунт</h1>
      
        <form className={styles.form}>
          <Input label="Имя пользователя"/>
          <Input label="Номер телефона"/>
          <Input label="Пароль"/>
          <Input label="Повторите пароль"/>
          <Button className={styles.button}>Зарегистрироваться</Button>
        </form>

        <div className={styles.line}></div>
      
        <div className={styles.footer}>
          <div className={styles.footer__item}><GoogleIcon /></div>
          <div className={styles.footer__item}><EmailIcon /></div>
        </div>

        <p className={styles.login__text}>Уже есть акканунт? <span>Войти</span> </p>
      </Container>
    </div>
  );
};
