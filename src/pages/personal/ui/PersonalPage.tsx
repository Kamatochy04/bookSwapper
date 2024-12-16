import { Container } from "../../../shared/components";
import styles from "./personal.module.scss";
// import { CardItem } from "../../../widgets";
import { PlusOutlined, SettingOutlined } from "@ant-design/icons";

const PersonalPage = () => {
  return (
    <div className={styles.personal}>
      <Container>
        <div className={styles.personal__container}>
          <div className={styles.header}>
            <div className={styles.avatar}>A</div>
            <div className={styles.inf}>
              <h2 className={styles.title}>Андрей Валюк</h2>
              <p className={styles.title}>userName</p>
            </div>
            <SettingOutlined className={styles.icon} />
          </div>
          <button className={styles.button}><PlusOutlined /> Создать новое объявление</button>

          <div className={styles.list}>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
            {/* <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PersonalPage;
