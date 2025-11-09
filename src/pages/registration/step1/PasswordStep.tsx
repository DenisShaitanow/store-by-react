import styles from './PasswordStep.module.css';
import { type PasswordStepProps } from './type';
import { ExternalAuthButton } from '../../../ui/externalAuthButton/ExternalAuthButton';
import { InputUI } from '../../../ui/input';
import { ButtonUI } from '../../../ui/button';
import { PasswordInputUI } from '../../../ui/password';
import googleIconUrl from '../../../ui/assets/google-icon.svg';
import appleIconUrl from '../../../ui/assets/apple-icon.svg';

export const PasswordStep: React.FC<PasswordStepProps> = ({
    email,
    password,
    onChangeEmail,
    onChangePassword,
    error = false,
    errorText,
    onClickButton
}) => (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <div className={styles.group}>
                    <ExternalAuthButton
                        iconUrl={googleIconUrl}
                        label="Продолжить с Google"
                        type="button"
                        onClick={() =>
                            console.log(
                                'Авторизация через учетную запись Google'
                            )
                        }
                    />
                    <ExternalAuthButton
                        iconUrl={appleIconUrl}
                        label="Продолжить с Apple"
                        type="button"
                        onClick={() =>
                            console.log(
                                'Авторизация через учетную запись Apple'
                            )
                        }
                    />
                </div>
                <span className={styles.span}>или</span>
                <div className={styles.group}>
                    <InputUI
                        title="Email"
                        type="email"
                        placeholder="Введите email"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        error={error}
                        errorText={errorText}
                    />
                    <PasswordInputUI
                        page="register"
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>
            </div>
            <ButtonUI
                label="Далее"
                onClick={onClickButton}
                className={styles.button}
                type="button"
                disabled={!email || password.length < 8 || error}
            />
        </div>
    </div>
);
