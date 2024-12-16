import styles from "../register/styels/registerStapper.module.scss";
import { Button, Input, Logo } from "../../../../shared/components";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const toBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <Logo />

        <div className={styles.content}>
          <form className={styles.login_form}>
            <Input label="Имя пользователя" />
            <Input label="Пароль " />
            <div className={styles.login_button}>
              <Button type="submit" >Войти в ааккаунт</Button>
              <Button onClick={toBack} >Вернуться назад</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
