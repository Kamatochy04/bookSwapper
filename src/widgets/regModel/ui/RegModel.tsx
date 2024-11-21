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
              text={"Регистрация"}
              onClick={() => {
                dispathc(toggleRegisterModel(false));
                navigate("/register");
              }}
              className={styles.button}
            />
            <Button
              text={"Вернуться назад"}
              onClick={() => {
                dispathc(toggleRegisterModel(false));
                navigate("/");
              }}
              className={styles.button_2}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RegModel;
