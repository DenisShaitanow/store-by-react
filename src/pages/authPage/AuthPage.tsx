import { type FC, type ChangeEvent, useState } from 'react';
import styles from './AuthPage.module.css';
import { useNavigate } from 'react-router-dom';

import { RegistrationHeaderUI } from '../registration/registrationHeader/RegistrationHeaderUI';
import { InputUI } from '../../ui/input';
import { ButtonUI } from '../../ui/button';
import { PasswordInputUI } from '../../ui/password';

const AuthPage: FC = () => {
    
    
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handleClose = () => {
        navigate(-1);
    }

    const onClickButton = () => {
        navigate('/');
    }

    return (
        <div className={styles.container}>
            <RegistrationHeaderUI onClose={handleClose}/>
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
            <ButtonUI
                label="Войти"
                onClick={onClickButton}
                className={styles.buttonAuth}
                type="button"
                disabled={!email || password.length < 8}
            />
        </div>
    )
}

export default AuthPage;