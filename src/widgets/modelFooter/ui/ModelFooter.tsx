import {
  CommentOutlined,
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Container } from "../../../shared/components";
import styles from "./footer.module.scss";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toggleRegisterModel } from "../../regModel/services/showModel";

export const ModelFooter = () => {
  // const dispatch = useDispatch();

  // const toAccaunt = () => {
  //   dispatch(toggleRegisterModel(true));
  // };

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
            to={"chats"}
          >
            <CommentOutlined />
            <p>Чаты</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={"accaunt"}
            // onClick={(e) => {
            //   e.preventDefault();
            //   toAccaunt();
            // }}
          >
            <UserOutlined />
            <p>Аккаунт</p>
          </NavLink>
        </div>
      </Container>
    </div>
  );
};
