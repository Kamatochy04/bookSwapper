import { useNavigate } from "react-router-dom";

import { Button, Container, Input } from "../../../../shared/components";

import { EmailIcon } from "../../../../shared/icons/EmailIcon";
import { GoogleIcon } from "../../../../shared/icons/GoogleIcon";
import { LeftArrowIcon } from "../../../../shared/icons/LeftIcon";

import styles from "../register/register.module.scss";

export const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.box}>
      <Container>
        <div className={styles.header} onClick={() => navigate(-1)}>
          <LeftArrowIcon />
        </div>
        <h1 className={styles.title}>Вход в личный аккаунт</h1>

        <form className={styles.form}>
          <Input label="Имя пользователя" />
          <Input label="Пароль" />
          <Button className={styles.button}>Войти в аккаунт</Button>
        </form>

        <div className={styles.line}></div>

        <div className={styles.footer}>
          <div className={styles.footer__item}>
            <GoogleIcon />
          </div>
          <div className={styles.footer__item}>
            <EmailIcon />
          </div>
        </div>

        <p className={styles.login__text}>
          Хотите создать новый аккаунт?{" "}
          <span onClick={() => navigate("/register")}> Регистрация </span>
        </p>
      </Container>
    </div>
  );
};
