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
    <div className={styles.container}>
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
            <SquareButton
              text={"Регистрация"}
              onClick={() => navigate("/register")}
              className={styles.header__button}
            />

            <div className={styles.burger}>
              <span></span>
              <span></span>
              <span></span>
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
              <a href="">Фэнтези</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Триллер</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Научная фантастика</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Комедия</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Исторический роман</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Детектив</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Вестерн</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Сказка</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Фантастика</a>
            </li>
            <li className={styles.sub_header__item}>
              <a href="">Холрор</a>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
};
