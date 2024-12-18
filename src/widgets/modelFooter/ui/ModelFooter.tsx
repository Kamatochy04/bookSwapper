import { NavLink } from "react-router-dom";

import { Button, Container } from "../../../shared/components";
import { AccauntIcon, ChatsIcon, HomeIcon, PlusIcon, SearchIcon } from "../../../shared/icons/FooterIcon";

import styles from "./footer.module.scss";

export const ModelFooter = () => {

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <Button className={styles.button}>Зарегистрироваться</Button>
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
              `${styles.icon} ${styles.plus} ${isActive ? styles.icon_active : ""}`
            }
            to={"chats"}
          >
            <PlusIcon />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={"accaunt"}
          >
            <ChatsIcon />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${styles.icon} ${isActive ? styles.icon_active : ""}`
            }
            to={"register"}
          >
            <AccauntIcon />
          </NavLink>
        </div>
      </Container>
    </div>
  );
};
