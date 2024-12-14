import { Container } from "../../../shared/components";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Container>
          <div className={styles.header__container}>
            <a href="" className={styles.logo}>
              BookSwap
            </a>
          </div>
        </Container>
      </header>
    </div>
  );
};
