import { useEffect } from "react";
import { Container } from "../../../shared/components";
import styles from "./burgerlist.module.scss";

export const BurgerList = () => {
  useEffect(() => {
    document.body.style.overflowY = "hiden";
  }, []);

  return (
    <div className={styles.burger}>
      <Container>asddas</Container>
    </div>
  );
};
