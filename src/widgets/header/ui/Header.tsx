import { useNavigate } from "react-router-dom";
import {
  Container,
  Input,
  Logo,
  SquareButton,
} from "../../../shared/components";
import styles from "./header.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className={styles.header}>
        <Container>
          <div className={styles.header__container}>
            <a href="">
              <Logo />
            </a>

            <Input placeholder="Поиск по сайту" />

            <div className={styles.buttons}>
              <SquareButton text={"Войти"} />
              <SquareButton
                text={"Регистрация"}
                onClick={() => navigate("/register")}
              />
            </div>
          </div>
        </Container>
      </header>
      <div className={styles.sub_header}>
        <Container>
          <ul className={styles.sub_header__box}>
            <li className={styles.sub_header__item}>
              <a href="">Драмма</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Драмма</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Драмма</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Драмма</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Драмма</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Драмма</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Драмма</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Драмма</a>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
};
