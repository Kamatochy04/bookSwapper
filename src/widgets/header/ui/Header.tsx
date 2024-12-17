import { Container } from "../../../shared/components";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Container>
          <div className={styles.header__container}>
            <a href="" className={styles.logo}>
              BooksSwapper
            </a>
            <div className={styles.line}></div>
            <div className={styles.burger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </Container>
      </header>
    </div>
  );
};
