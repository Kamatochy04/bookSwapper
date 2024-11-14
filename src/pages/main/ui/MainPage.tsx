import { Container } from "../../../shared/components";
import { BookPrevieCard } from "../../../widgets";

import styles from "./mainPage.module.scss";

export const MainPage = () => {
  return (
    <>
      <div className={styles.books}>
        <Container>
          <div className={styles.books__container}>
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
            <BookPrevieCard />
          </div>
        </Container>
      </div>
    </>
  );
};
