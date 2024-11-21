import {
  CommentOutlined,
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Container } from "../../../shared/components";
import styles from "./footer.module.scss";
import { NavLink } from "react-router-dom";

export const ModelFooter = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={"/"}
          >
            <HomeOutlined />
            <p>Гловное</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={"search"}
          >
            <SearchOutlined />
            <p>Поиск</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={" chat"}
          >
            <CommentOutlined />
            <p>Чаты</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={"accaunt"}
          >
            <UserOutlined />
            <p>Аккаунт</p>
          </NavLink>
        </div>
      </Container>
    </div>
  );
};
