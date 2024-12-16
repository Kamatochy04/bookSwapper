import { useNavigate } from "react-router-dom";
import styles from "./regMode.module.scss";
import { Button } from "../../../shared/components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store/store";
import { toggleRegisterModel } from "../services/showModel";

const RegModel = () => {
  const isShow = useSelector((state: RootState) => state.registerModel.isShow);

  const navigate = useNavigate();
  const dispathc = useDispatch();
  return (
    <>
      {isShow ? (
        <div className={styles.ofervie}>
          <div className={styles.model}>
            <p>Для пользования нашим сервисов необходимо пройти регистрацию</p>
            <Button
              onClick={() => {
                dispathc(toggleRegisterModel(false));
                navigate("/register");
              }}
              className={styles.button}
            >Регистрация</Button>
            <Button
              onClick={() => {
                dispathc(toggleRegisterModel(false));
                navigate("/");
              }}
              className={styles.button_2}
            >Вернуться назад</Button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RegModel;
