import { NavLink, useNavigate } from "react-router-dom";

import { Button, Container } from "../../../shared/components";
import {
  AccauntIcon,
  ChatsIcon,
  HomeIcon,
  PlusIcon,
  SearchIcon,
} from "../../../shared/icons/FooterIcon";

import styles from "./footer.module.scss";

export const ModelFooter = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <Button
            className={styles.button}
            onClick={() => navigate("/register")}
          >
            Зарегистрироваться
          </Button>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={"/"}
          >
            <HomeIcon />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={"search"}
          >
            <SearchIcon />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${styles.plus} ${
                isActive ? styles.icon_active : ""
              }`
            }
            to={"crete-book"}
          >
            <PlusIcon />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={"chats"}
          >
            <ChatsIcon />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={"accaunt"}
          >
            <AccauntIcon />
          </NavLink>
        </div>
      </Container>
    </div>
  );
};
