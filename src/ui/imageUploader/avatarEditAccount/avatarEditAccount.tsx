import { useRef, type FC, useState, useEffect } from 'react';
import styles from './avatarEditAccount.module.css'; // Подключаем стили
import type { AvatarEditAccountProps } from './type';

// Компонент AvatarRegistration
export const AvatarEditAccount: FC<AvatarEditAccountProps> = ({
    onImageChange,
    initialAvatarUrl
}) => {
    // стейт для файла авы
    const [avatarForForm, setAvatarForForm] = useState<File | null>(null);

    // стейт для адерса картинки
    // если переменная пустая, будет свг картинка, если есть адрес, появится картинка
    const [srcAvatar, setSrcAvatar] = useState<string | null>(initialAvatarUrl ?? null);

    const inputHiddenAccount = useRef<HTMLInputElement>(null);

    // здесь должен быть задействован селектор, который получает ссылку на автарку из слайса личных данных, или личного кабинета.
    useEffect(() => {
    if (initialAvatarUrl) {
      setSrcAvatar(initialAvatarUrl);
    }
  }, [initialAvatarUrl]);

    const handleClick = () => {
        if (inputHiddenAccount.current !== null) {
            inputHiddenAccount.current.click();
        }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputFiles = event.target.files;

        if (!inputFiles || !inputFiles.length) return; // Проверяем наличие файлов

        const newAvatar = inputFiles[0];

        if (newAvatar) {
            const src = URL.createObjectURL(newAvatar);
            setSrcAvatar(src);
            setAvatarForForm(newAvatar);
            onImageChange(newAvatar);
        }
    };

    return (
        <div className={styles.container}>
            {/* Поле для загрузки аватара */}
            <input
                ref={inputHiddenAccount}
                id="inputHiddenAccount"
                data-cy="inputHiddenAccount"
                type="file"
                className={styles.inputAvatar}
                accept="image/*"
                onChange={handleOnChange}
            />

            {srcAvatar ? (
                <img src={srcAvatar} className={styles.imageAvatar} />
            ) : (
                <span className={styles.noAvatar} />
            )}
            <span className={styles.addCircle} onClick={handleClick} />
        </div>
    );
};