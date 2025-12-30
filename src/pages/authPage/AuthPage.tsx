import { type FC, type ChangeEvent, useState } from "react";
import styles from "./AuthPage.module.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/thunks/user";
import { RegistrationHeaderUI } from "../registration/registrationHeader/RegistrationHeaderUI";
import { InputUI } from "../../ui/input";
import { ButtonUI } from "../../ui/button";
import { PasswordInputUI } from "../../ui/password";
import { useAppDispatch } from "../../services/hooks";

const AuthPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClose = () => {
    navigate(-1);
  };

  const onClickButton = () => {
    let regDataObject;
    const regDataString = localStorage.getItem("regData");
    if (regDataString) {
      regDataObject = JSON.parse(regDataString);
    }
    if (email === regDataObject.email && password === regDataObject.password) {
      dispatch(loginUser({ email: email, password: password }));
      navigate("/");
    } else {
      setAuthError(true);
    }
  };

  return (
    <div className={styles.container}>
      <RegistrationHeaderUI onClose={handleClose} />
      <div className={styles.group}>
        <InputUI
          title="Email"
          type="email"
          placeholder="Введите email"
          name="email"
          value={email}
          onChange={handleChangeEmail}
        />
        <PasswordInputUI
          page="register"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      {authError && (
        <span className={styles.authError}>Неправильный логин или пароль.</span>
      )}
      <ButtonUI
        label="Войти"
        onClick={onClickButton}
        className={styles.buttonAuth}
        type="button"
        disabled={!email || password.length < 8}
      />
    </div>
  );
};

export default AuthPage;
