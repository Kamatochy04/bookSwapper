import {
  CommentOutlined,
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Container } from "../../../shared/components";
import styles from "./footer.module.scss";

export const ModelFooter = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <div className={`${styles.icon} ${styles.icon_active}`}>
            <HomeOutlined />
            <p>Гловное</p>
          </div>
          <div className={styles.icon}>
            <SearchOutlined />
            <p>Поиск</p>
          </div>
          <div className={styles.icon}>
            <CommentOutlined />
            <p>Чаты</p>
          </div>
          <div className={styles.icon}>
            <UserOutlined />
            <p>Аккаунт</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
